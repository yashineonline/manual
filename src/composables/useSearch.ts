import MiniSearch from 'minisearch'
import { activities, divineNamesByLocale, glossaryEntries, events, manualPages, quranByLocale, quotesByLocale, videos, weeklyEntries } from '../lib/content'
import type { LocaleCode, SearchDocument } from '../lib/types'

let documents: SearchDocument[] | null = null
let index: MiniSearch<SearchDocument> | null = null

function stripMarkdown(value: string): string {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`\[\]()~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildDocuments(): SearchDocument[] {
  const docs: SearchDocument[] = manualPages.map((page) => ({
    id: `manual-${page.locale}-${page.page}`,
    title: `${page.title} · ${page.page}`,
    body: page.text,
    type: 'Manual',
    route: `/manual/page/${page.page}`,
    meta: page.locale
  }))

  for (const entry of weeklyEntries) {
    docs.push({
      id: `weekly-${entry.locale}-${entry.week}-${entry.kind}`,
      title: `${entry.week} · ${entry.kind}`,
      body: stripMarkdown(entry.raw),
      type: 'Weekly',
      route: `/weekly/${entry.kind}`,
      meta: entry.locale
    })
  }

  for (const video of videos) {
    docs.push({
      id: `video-${video.id}`,
      title: video.name,
      body: video.url,
      type: 'Videos',
      route: '/videos',
      meta: video.locale
    })
  }

  activities.forEach((activity, position) => docs.push({
    id: `activity-${position}`,
    title: activity.title,
    body: `${activity.week} ${activity.url}`,
    type: 'Activities',
    route: '/activities',
    meta: activity.week
  }))

  events.forEach((event, position) => docs.push({
    id: `event-${event.id || position}`,
    title: event.title,
    body: [event.date, event.hijriDay, event.hijriMonth, event.start, event.timezone].filter(Boolean).join(' '),
    type: 'Events',
    route: '/',
    meta: event.calendar
  }))

  for (const [locale, quotes] of quotesByLocale.entries()) {
    quotes.forEach((quote) => docs.push({
      id: `quote-${quote.id}`,
      title: quote.author,
      body: quote.text,
      type: 'Home',
      route: '/',
      meta: locale
    }))
  }

  for (const [locale, names] of divineNamesByLocale.entries()) {
    names.forEach((name) => docs.push({
      id: `name-${locale}-${name.number}`,
      title: `${name.number}. ${name.transliteration}`,
      body: `${name.arabic} ${name.transliteration} ${name.meaning}`,
      type: '99 Names',
      route: `/names?name=${name.number}`,
      meta: locale
    }))
  }

  for (const [locale, verses] of quranByLocale.entries()) {
    verses.forEach((verse) => docs.push({
      id: `quran-${locale}-${verse.id}`,
      title: `${verse.sura}:${verse.verse}`,
      body: verse.text,
      type: 'Quran',
      route: '/',
      meta: locale
    }))
  }

  for (const entry of glossaryEntries) {
  docs.push({
    id: `glossary-${entry.locale}-${entry.id}`,
    title: entry.term,
    body: entry.description,
    type: 'Glossary',
    route: '/glossary',
    meta: entry.locale
  })
}

  return docs
}

function ensureIndex() {
  if (index && documents) return
  documents = buildDocuments()
  index = new MiniSearch<SearchDocument>({
    fields: ['title', 'body', 'type', 'meta'],
    storeFields: ['title', 'body', 'type', 'route', 'meta'],
    searchOptions: {
      boost: { title: 3, type: 1.5 },
      fuzzy: 0.2,
      prefix: true
    }
  })
  index.addAll(documents)
}

export interface SearchHit {
  id: string
  title: string
  type: string
  route: string
  meta?: string
  snippet: string
  score: number
}

function snippetFor(body: string, query: string): string {
  const normalized = body.replace(/\s+/g, ' ').trim()
  if (!normalized) return ''
  const token = query.trim().split(/\s+/)[0]?.toLocaleLowerCase() || ''
  const position = token ? normalized.toLocaleLowerCase().indexOf(token) : -1
  const start = position > 80 ? position - 80 : 0
  const end = Math.min(normalized.length, start + 220)
  return `${start > 0 ? '…' : ''}${normalized.slice(start, end)}${end < normalized.length ? '…' : ''}`
}

export function searchContent(query: string, locale: LocaleCode, limit = 30): SearchHit[] {
  const trimmed = query.trim()
  if (!trimmed) return []
  ensureIndex()
  const results = index!.search(trimmed, {
    filter: (result) => !result.meta || result.meta === locale || !['en', 'fr', 'de', 'es'].includes(String(result.meta))
  })
  return results.slice(0, limit).map((result) => ({
    id: String(result.id),
    title: String(result.title || ''),
    type: String(result.type || ''),
    route: String(result.route || '/'),
    meta: result.meta ? String(result.meta) : undefined,
    snippet: snippetFor(String(result.body || ''), trimmed),
    score: result.score
  }))
}
