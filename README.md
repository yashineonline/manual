# AQRT Manual

A GitHub Pages-ready Vue 3 PWA built with Vite, TypeScript, Tailwind CSS and daisyUI.

## Local start

```bash
npm install
cp .env.example .env
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Create a GitHub repository and add this project.
2. Push it to the `main` branch.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. Every commit rebuilds and deploys the site.

The PWA service worker checks for a new build when the app opens and again when the browser window receives focus. The current app version, build date and abbreviated commit SHA are shown in the footer.

## Manual text correction record

The full anchor-based record of all 181 applied typographical and elementary English corrections is included at [`AQRT-Manual-typo-corrections-with-anchors.txt`](AQRT-Manual-typo-corrections-with-anchors.txt). The historical wording is otherwise retained; uncertain specialized transliterations and the unrecoverable truncated term on manual page 15 are explicitly documented rather than guessed.

## Editable content

See [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md). Public content stays in the `content` folder and is compiled into the offline PWA whenever a commit is deployed.


## Allah’s 99 Beautiful Names

The swipeable one-name-at-a-time reader is loaded from:

```text
content/en/names/names.yml
```

The file contains editable Arabic text, transliteration and English meaning for exactly 99 entries. The checked-in list follows the scholar-reviewed Islamic Relief UK standard list and can be edited directly before deployment.

## AQRT identity

The PWA icon and in-app seal are derived from the official AQRT logo published by `aqrtsufi.org`. The original downloaded horizontal logo is retained at `public/aqrt-logo-official.png`; generated square PWA assets are in `public/icons`.

## Teacher's Corner

Teacher material is intentionally not stored in the public GitHub repository.

1. Create a free Supabase project.
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL editor.
3. In Supabase Authentication, create the teacher user and disable public sign-up.
4. Add the Supabase project values and teacher email to GitHub repository variables or an `.env` file:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_TEACHER_EMAIL=
```

Rows inserted into `teacher_content` can contain Markdown. Row Level Security allows reads only after password authentication.

## Contact

Set a form endpoint that accepts JSON POST requests:

```env
VITE_CONTACT_FORM_ENDPOINT=
```

The destination email is configured in that form service, not committed to the app source.

## Diyanet date

The deployment workflow runs `npm run calendar:update` against the configured official Diyanet page in `content/calendar/diyanet-source.yml`. The resulting date map is stored in `content/calendar/diyanet-calendar.json` and remains available offline. If the update source is temporarily unavailable, the build retains the checked-in map.
