---
name: create-slide-deck
description: Generate or update this repo's IITC-branded slide deck content from a topic prompt. Use when the user asks to create slides, build a deck, add a section/lesson to the deck, or invokes /create-slide-deck. Content-only — never touches the layout engine.
---

# Create Slide Deck

This repo is an IITC slide-deck template. Slides are plain data rendered by fixed
layout components — this skill's job is to **write that data**, never to write
JSX or invent new layout components.

## Files

- `src/slides/types.ts` — the `Slide` union and `DeckMeta` type. Read this first
  every time; it is the source of truth for what fields exist. Do not add fields
  it doesn't define, and do not invent a fourth slide `type`. Only three exist:
  `'cover' | 'section' | 'content'`.
- `src/content/deck.ts` — the **only** file this skill writes to. Exports `meta`
  (a `DeckMeta`) and `slides` (a `Slide[]`).
- `src/slides/*.tsx` / `*.css` — the layout engine. Off-limits. If a topic seems
  to need a layout these three types can't express, say so and ask the user
  instead of adding a new component.

## Workflow

1. If the user didn't already say what the deck is about, ask: topic, target
   audience/depth, and roughly how many sections. Don't ask about language or
   RTL — direction is auto-detected from the text itself (see `src/slides/rtl.ts`),
   so just write Hebrew or English naturally, per-slide, whatever fits the
   content. A deck can freely mix both.
2. Structure follows the shipped example (`src/content/deck.ts`):
   - One `cover` slide: the deck's overall title.
   - One `section` slide per major topic break: short bold `title` plus an
     optional one-line `intro` tagline (this is the "chapter divider").
   - Two to four `content` slides per section: a `title` plus `bullets`
     (short, scannable, ~4-10 words each) and/or a `body` paragraph for
     context. Don't cram more than ~5 bullets on one content slide — split
     into another content slide instead.
3. Write the result as valid TypeScript matching the existing export shape
   (`export const meta: DeckMeta = {...}`, `export const slides: Slide[] = [...]`).
   If editing an existing deck (e.g. "add a section on X"), keep the existing
   `meta` and splice new slides in at the right position rather than
   regenerating the whole file.
4. Tell the user to run `npm run dev` to preview, and that `#/3` in the URL
   jumps straight to slide 3.

## Non-goals

- No PDF/PPTX export, no new slide layouts, no editing `public/brand/*` assets
  (those are the user's own logo files to swap in).
