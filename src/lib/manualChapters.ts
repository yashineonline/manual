import { load as loadYaml } from 'js-yaml'
import chaptersRaw from '../../content/en/manual/chapters.yml?raw'

export interface ManualSubcontentDefinition {
  id: string
  title: string
  page: number
  anchor?: string
}

export interface ManualChapterDefinition {
  id: string
  title: string
  pages: [number, number]
  route?: string
  subcontents: ManualSubcontentDefinition[]
}

export interface ManualSectionBlock extends ManualSubcontentDefinition {
  body: string
  sourcePages: [number, number]
  anchorFound: boolean
}

export interface ManualLogicalChapter extends ManualChapterDefinition {
  blocks: ManualSectionBlock[]
}

const pageModules = import.meta.glob(
  '../../content/en/manual/pages/*.txt',
  {
    eager: true,
    query: '?raw',
    import: 'default'
  }
) as Record<string, string>

function pageNumberFromPath(path: string): number {
  const match = path.match(/\/(\d{3})\.txt$/)

  if (!match) {
    throw new Error(`Cannot identify manual page number from ${path}`)
  }

  return Number(match[1])
}

function stripLeadingPageNumber(raw: string): string {
  const normalized = raw.replace(/\r\n?/g, '\n')
  const lines = normalized.split('\n')

  if (/^\s*\d{1,3}\s*$/.test(lines[0] ?? '')) {
    lines.shift()
  }

  return lines.join('\n').trim()
}

const manualPages = new Map<number, string>(
  Object.entries(pageModules).map(([path, raw]) => [
    pageNumberFromPath(path),
    stripLeadingPageNumber(raw)
  ])
)

const parsed = loadYaml(chaptersRaw)

if (!Array.isArray(parsed)) {
  throw new Error('content/en/manual/chapters.yml must contain an array.')
}

export const manualChapterDefinitions =
  parsed as ManualChapterDefinition[]

export const manualChapterById = new Map(
  manualChapterDefinitions.map((chapter) => [chapter.id, chapter])
)

interface NormalizedText {
  text: string
  originalIndexByNormalizedIndex: number[]
}

function normalizeCharacter(character: string): string {
  return character
    .normalize('NFKD')
    .replace(/[\u2018\u2019\u02BC\u0060]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .toLocaleLowerCase()
}

function normalizeWithIndexMap(value: string): NormalizedText {
  let text = ''
  const originalIndexByNormalizedIndex: number[] = []
  let previousWasSpace = false

  for (let originalIndex = 0; originalIndex < value.length; originalIndex += 1) {
    const normalizedCharacter = normalizeCharacter(value[originalIndex] ?? '')

    for (const character of normalizedCharacter) {
      const isLetterOrNumber = /[\p{L}\p{N}]/u.test(character)
      const isApostrophe = character === "'"

      if (isLetterOrNumber || isApostrophe) {
        text += character
        originalIndexByNormalizedIndex.push(originalIndex)
        previousWasSpace = false
      } else if (!previousWasSpace && text.length > 0) {
        text += ' '
        originalIndexByNormalizedIndex.push(originalIndex)
        previousWasSpace = true
      }
    }
  }

  return {
    text: text.trimEnd(),
    originalIndexByNormalizedIndex
  }
}

function normalizeForSearch(value: string): string {
  return normalizeWithIndexMap(value).text.trim()
}

function locateAnchor(
  chapterText: string,
  anchor: string,
  pageStart: number
): number | null {
  const searchable = chapterText.slice(pageStart)
  const normalizedSearchable = normalizeWithIndexMap(searchable)
  const normalizedAnchor = normalizeForSearch(anchor)

  if (!normalizedAnchor) {
    return pageStart
  }

  const normalizedIndex = normalizedSearchable.text.indexOf(normalizedAnchor)

  if (normalizedIndex < 0) {
    return null
  }

  const relativeOriginalIndex =
    normalizedSearchable.originalIndexByNormalizedIndex[normalizedIndex]

  return pageStart + (relativeOriginalIndex ?? 0)
}

function createChapterText(chapter: ManualChapterDefinition): {
  text: string
  pageStarts: Map<number, number>
} {
  const [firstPage, lastPage] = chapter.pages
  const pageStarts = new Map<number, number>()
  const pieces: string[] = []
  let length = 0

  for (let page = firstPage; page <= lastPage; page += 1) {
    const pageText = manualPages.get(page)

    if (pageText === undefined) {
      throw new Error(
        `Missing content/en/manual/pages/${String(page).padStart(3, '0')}.txt`
      )
    }

    pageStarts.set(page, length)
    pieces.push(pageText)
    length += pageText.length

    if (page < lastPage) {
      pieces.push('\n\n')
      length += 2
    }
  }

  return {
    text: pieces.join(''),
    pageStarts
  }
}

function cleanBlockText(value: string): string {
  return value
    .replace(/\n{4,}/g, '\n\n\n')
    .trim()
}

export function buildManualChapter(
  chapterOrId: ManualChapterDefinition | string
): ManualLogicalChapter | null {
  const chapter =
    typeof chapterOrId === 'string'
      ? manualChapterById.get(chapterOrId)
      : chapterOrId

  if (!chapter) {
    return null
  }

  const { text, pageStarts } = createChapterText(chapter)
  const positions = chapter.subcontents.map((section, index) => {
    if (index === 0) {
      return {
        section,
        position: 0,
        anchorFound: true
      }
    }

    const pageStart = pageStarts.get(section.page) ?? 0

    if (!section.anchor) {
      return {
        section,
        position: pageStart,
        anchorFound: true
      }
    }

    const located = locateAnchor(text, section.anchor, pageStart)

    if (located === null) {
      if (import.meta.env.DEV) {
        console.warn(
          `Manual anchor not found: ${chapter.id}/${section.id}`,
          section.anchor
        )
      }

      return {
        section,
        position: pageStart,
        anchorFound: false
      }
    }

    return {
      section,
      position: located,
      anchorFound: true
    }
  })

  /*
   * Preserve manifest order while preventing a failed or repeated anchor
   * from moving a later section backwards.
   */
  let lastPosition = 0
  const orderedPositions = positions.map((entry) => {
    const position = Math.max(entry.position, lastPosition)
    lastPosition = position

    return {
      ...entry,
      position
    }
  })

  const blocks: ManualSectionBlock[] = orderedPositions.map(
    (entry, index) => {
      const next = orderedPositions[index + 1]
      const nextPage =
        next?.section.page ??
        chapter.pages[1] + 1

      const sourceEndPage = Math.max(
        entry.section.page,
        Math.min(chapter.pages[1], nextPage)
      )

      return {
        ...entry.section,
        body: cleanBlockText(
          text.slice(entry.position, next?.position ?? text.length)
        ),
        sourcePages: [entry.section.page, sourceEndPage],
        anchorFound: entry.anchorFound
      }
    }
  )

  return {
    ...chapter,
    blocks
  }
}

export const manualLogicalChapters = manualChapterDefinitions
  .map((chapter) => buildManualChapter(chapter))
  .filter((chapter): chapter is ManualLogicalChapter => chapter !== null)

export const manualSubcontentIndex = manualLogicalChapters.flatMap(
  (chapter) =>
    chapter.blocks.map((section) => ({
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      chapterRoute: chapter.route,
      sectionId: section.id,
      sectionTitle: section.title,
      sourcePages: section.sourcePages
    }))
)

export function manualSectionRoute(
  chapterId: string,
  sectionId?: string
): string {
  return sectionId
    ? `/manual/read/${chapterId}/${sectionId}`
    : `/manual/read/${chapterId}`
}

export function randomManualSubcontent(
  excludeKey?: string
) {
  const candidates = manualSubcontentIndex.filter((entry) => {
    const key = `${entry.chapterId}/${entry.sectionId}`
    return key !== excludeKey
  })

  if (candidates.length === 0) {
    return null
  }

  return candidates[Math.floor(Math.random() * candidates.length)] ?? null
}
