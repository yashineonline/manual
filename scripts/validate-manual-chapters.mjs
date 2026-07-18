import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { load as loadYaml } from 'js-yaml'

const root = process.cwd()
const manifestPath = path.join(
  root,
  'content',
  'en',
  'manual',
  'chapters.yml'
)
const pagesDirectory = path.join(
  root,
  'content',
  'en',
  'manual',
  'pages'
)
const strict = process.argv.includes('--strict')

function normalize(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u2018\u2019\u02BC\u0060]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}']+/gu, ' ')
    .trim()
}

function readPage(page) {
  const filename = `${String(page).padStart(3, '0')}.txt`
  const filePath = path.join(pagesDirectory, filename)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const raw = fs.readFileSync(filePath, 'utf8').replace(/\r\n?/g, '\n')
  const lines = raw.split('\n')

  if (/^\s*\d{1,3}\s*$/.test(lines[0] ?? '')) {
    lines.shift()
  }

  return lines.join('\n')
}

const errors = []
const warnings = []

if (!fs.existsSync(manifestPath)) {
  errors.push(`Missing ${manifestPath}`)
} else {
  const manifest = loadYaml(fs.readFileSync(manifestPath, 'utf8'))

  if (!Array.isArray(manifest)) {
    errors.push('chapters.yml must contain an array.')
  } else {
    const chapterIds = new Set()
    const allSectionKeys = new Set()

    for (const chapter of manifest) {
      if (!chapter?.id || !chapter?.title) {
        errors.push('Every chapter needs id and title.')
        continue
      }

      if (chapterIds.has(chapter.id)) {
        errors.push(`Duplicate chapter id: ${chapter.id}`)
      }

      chapterIds.add(chapter.id)

      if (
        !Array.isArray(chapter.pages) ||
        chapter.pages.length !== 2
      ) {
        errors.push(`${chapter.id}: pages must be [first, last].`)
        continue
      }

      const [firstPage, lastPage] = chapter.pages

      if (
        !Number.isInteger(firstPage) ||
        !Number.isInteger(lastPage) ||
        firstPage < 1 ||
        lastPage > 85 ||
        firstPage > lastPage
      ) {
        errors.push(`${chapter.id}: invalid page range.`)
        continue
      }

      const chapterPages = []

      for (let page = firstPage; page <= lastPage; page += 1) {
        const text = readPage(page)

        if (text === null) {
          errors.push(
            `${chapter.id}: missing page ${String(page).padStart(3, '0')}.txt`
          )
        } else {
          chapterPages.push({
            page,
            text
          })
        }
      }

      if (!Array.isArray(chapter.subcontents)) {
        errors.push(`${chapter.id}: subcontents must be an array.`)
        continue
      }

      let previousPage = firstPage

      for (const section of chapter.subcontents) {
        const key = `${chapter.id}/${section?.id ?? ''}`

        if (!section?.id || !section?.title) {
          errors.push(`${chapter.id}: every subcontent needs id and title.`)
          continue
        }

        if (allSectionKeys.has(key)) {
          errors.push(`Duplicate subcontent key: ${key}`)
        }

        allSectionKeys.add(key)

        if (
          !Number.isInteger(section.page) ||
          section.page < firstPage ||
          section.page > lastPage
        ) {
          errors.push(`${key}: page is outside the chapter range.`)
        }

        if (section.page < previousPage) {
          errors.push(`${key}: subcontents are not in page order.`)
        }

        previousPage = section.page

        if (section.anchor) {
          const searchable = chapterPages
            .filter((entry) => entry.page >= section.page)
            .map((entry) => entry.text)
            .join('\n\n')

          if (!normalize(searchable).includes(normalize(section.anchor))) {
            warnings.push(
              `${key}: anchor not found: ${JSON.stringify(section.anchor)}`
            )
          }
        }
      }
    }
  }
}

for (const warning of warnings) {
  console.warn(`[manual warning] ${warning}`)
}

for (const error of errors) {
  console.error(`[manual error] ${error}`)
}

console.log(
  `Manual validation: ${errors.length} error(s), ${warnings.length} warning(s).`
)

if (errors.length > 0 || (strict && warnings.length > 0)) {
  process.exitCode = 1
}
