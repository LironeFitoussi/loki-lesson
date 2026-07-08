# IITC Slide Deck Template

A GitHub template repo for building IITC-branded course slide decks: a
browser-based deck (React + Vite), keyboard/click navigation, RTL-aware
(Hebrew content auto-detected), and a Claude Code skill that writes the
slide content for you from a topic prompt.

## Use this template

Click **"Use this template"** on GitHub to spin up a new repo for a new
deck, then:

```bash
npm install
npm run dev
```

Open the printed localhost URL — arrow keys / space to advance, click the
left/right half of the screen, `F` for fullscreen. `#/3` in the URL jumps
straight to slide 3.

## Editing content

All slide content lives in one file: [`src/content/deck.ts`](src/content/deck.ts).
It exports `meta` (deck title, author, optional topic logo) and `slides`
(an array of `cover` / `section` / `content` slides — see
[`src/slides/types.ts`](src/slides/types.ts) for the exact shape). Edit it
by hand, or ask Claude:

> "Create a slide deck about Kubernetes networking, 4 sections"

The **create-slide-deck** skill (`.claude/skills/create-slide-deck/`) reads
the schema and writes `src/content/deck.ts` for you. It only ever touches
that one file — the layout components in `src/slides/` are the fixed
"engine" and stay untouched.

Hebrew text is detected automatically and rendered right-to-left — no flag
to set, just write the slide's title/body/bullets in Hebrew and it works.
A deck can freely mix Hebrew and English slides.

## Branding

`public/brand/` holds `iitc-logo.png`, `github-icon.svg`, and a placeholder
`topic-logo.svg`. Swap in a real topic logo with the same filename, or point
`meta.topicLogoSrc` in `src/content/deck.ts` at a different path.

Colors are CSS variables in [`src/index.css`](src/index.css) —
`--brand-accent`, `--brand-dark`, `--brand-cover-pill`, `--brand-ink` — so
re-theming the whole deck for a different topic/brand is a one-file edit,
nothing else hardcodes a color.

## Running with Docker

```bash
docker compose up dev       # http://localhost:5173, hot reload
docker compose up preview   # http://localhost:8080, production build via nginx
```

## Slide types

- **cover** — fullbleed title slide, deck name in a pill, bottom-center.
- **section** — chapter-divider slide: diagonal split, bold title, optional
  one-line intro tagline. Use between major topics.
- **content** — orange title bar, bullets and/or a body paragraph. The
  workhorse slide for actual teaching content.

No PDF/PPTX export — this template targets a live browser deck only.
