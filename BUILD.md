# Build Architecture and Re-theme Guide

This document explains how the presentation is built and how to re-theme it. The current
deck is "Cities for People" (Digital Transformations Canada, concept deck 2026). The same
build machinery works for any Marp deck.

---

## 1. How the build works

The deck is authored as Marp Markdown and compiled to self-contained HTML. There is one
source file (English), a header file with the title slide and theme front-matter, and a
Node post-processor that injects styling.

```
config/header-en.md  +  content/slides-en.md  ->  temp/slides-en-combined.md  ->  docs/en.html
config/landing.html                          ->  docs/index.html
```

The orchestration lives in the `Makefile`. The important target is:

```bash
make html
```

Which runs, in order:
1. `combine-en` - concatenate the header file and the slides file into
   `temp/slides-en-combined.md` (a plain `cat`).
2. `npx marp --html ...` (Marp CLI) - render the combined Markdown file into a full,
   clickable "bespoke" presentation (slide-by-slide, arrow-key navigation).
3. `node postprocess.mjs` - inject the theme CSS.
4. Copy `config/landing.html` to `docs/index.html`.

### Why the Marp CLI + a post-processor

This is the single most important thing to understand:

- The HTML build uses the **Marp CLI** (`npx marp`), NOT the Marp Core library directly.
- The CLI output includes the **bespoke player**: the JavaScript and CSS that make the
  deck a clickable, one-slide-at-a-time presentation. If you render with the Marp Core
  library's `marp.render()` instead, you only get raw slide SVGs with no player, and the
  page becomes a long vertical scroll of every slide. That is the regression to avoid.
- The custom theme is applied **after** the CLI runs, by `postprocess.mjs`, which injects
  a `<style>` block before `</head>`. This keeps the clickable player intact.

The Marp CLI **hangs on exit** in this WSL environment (Chromium/puppeteer cleanup).
The HTML file is fully written before the hang, so the `html` target wraps the `npx
marp` call in `timeout` and ignores its exit status (the `-` prefix in the Makefile).
The build still succeeds. If a build appears to pause at the end, that is the hang, not
a failure.

### Dependencies

Declared in `package.json`:

- `@marp-team/marp-cli` (devDependency) - the only dependency. It bundles its own
  Marp Core, so nothing else is needed.

Do **NOT** add `@marp-team/marp-core` or `shiki` as project dependencies. They shadow
the CLI's bundled core and break the CLI with `ERR_REQUIRE_ESM` or
`Cannot find module 'shiki/core'` errors.

Install with:

```bash
npm install
```

### A note on diagrams

Server-side Mermaid rendering in `marp-core` is unreliable in this environment. All
diagrams are built as **plain HTML/CSS** (the `.flow` / `.flow-box` / `.plate` /
`.flow-arrow` classes), not Mermaid. This renders predictably inside Marp's fixed-size
slides with no external library and no network dependency. Prefer this approach for any
new diagrams.

### PDF build (secondary)

`make pdf-en` uses the Marp CLI and Chromium. It is not the primary path and may need
attention after dependency changes. The HTML site (`make html`) is the supported,
reliable output and is what GitHub Pages serves.

---

## 2. Where the theme lives

All custom styling is centralized in **`postprocess.mjs`**:

- `const PALETTE = 'linear-gradient(...)'` - the single green "parks and paths"
  gradient definition. Change this one line to re-palette the whole deck.
- `const EXTRA_CSS = ...` - all theme rules, layered on top of Marp's generated CSS:
  - `section h2` - gradient underline on slide titles
  - `section h3` - deep-green sub-headings
  - `section blockquote` - gradient left bar callout
  - `section table` - gradient header row, flat square cells, zebra striping
  - `.flow` / `.flow-box` / `.plate` / `.flow-arrow` - the flow diagrams used on the
    village, street typology, integration, and platform slides

The look is intentionally flat and square (no rounded corners, no shadows).

Per-slide font sizes live in the `style:` block of `config/header-en.md`.

---

## 3. `docs/` is generated - never hand-edit

Everything in `docs/` (`en.html`, `index.html`) is build output. Never edit those files
by hand. Always edit the sources and run `make html`. GitHub Pages serves the committed
`docs/` folder, so after editing slides you must rebuild and commit the regenerated
`docs/`.

---

## 4. Re-theming or re-topic

To change the topic or palette, edit the following. The build system does not need to
change:

- `content/slides-en.md` - the slides themselves.
- `config/header-en.md` - the title slide, front-matter, header/footer text.
- `config/landing.html` - the GitHub Pages landing page.
- `README.md` - the repo documentation.
- `postprocess.mjs` - change the `PALETTE` constant to re-palette.

**What to leave untouched:**
- `Makefile`, `postprocess.mjs` (except the palette), `.github/workflows/`, `package.json`
  - the build machinery is topic-agnostic.

---

## 5. Quick reference

```bash
make html          # Build the HTML site into docs/ (primary, reliable path)
make preview-en    # Live preview on localhost:8080 (Marp CLI)
make pdf-en        # Build PDF (secondary, needs Marp CLI + Chromium)
make clean         # Remove temp/ and generated PDFs
```
