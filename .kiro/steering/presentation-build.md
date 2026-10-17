# Presentation Build - Project Steering

This repository is the English Marp presentation: "Cities for People - A Nationwide
Blueprint for Human-Scale Streets" (Digital Transformations Canada, concept deck 2026).
These are the rules and facts a session needs before touching the build or re-theming the
deck. Full detail is in #[[file:BUILD.md]].

## Build facts

- The HTML site is built with `make html`. It runs the **Marp CLI** (`npx marp --html`)
  to produce the clickable "bespoke" presentation (slide-by-slide, arrow-key nav), then
  runs `node postprocess.mjs` to inject the theme.
- The Marp CLI is what makes the output a real clickable presentation. Do NOT render
  with the Marp Core library directly (`marp.render()`) - it omits the bespoke player
  JS and the result becomes a long vertical scroll of all slides.
- Keep the project deps minimal: only `@marp-team/marp-cli` (devDependency). Do NOT add
  `@marp-team/marp-core` or `shiki` as project deps - they shadow the CLI's own bundled
  core and break it.
- The Marp CLI hangs on exit in this environment (Chromium/puppeteer cleanup), so the
  `html` target wraps the `npx marp` call in `timeout` and ignores its exit code
  (`-` prefix). The HTML file is written before the hang, so the build still succeeds.
- `make pdf-en` is a secondary path (Marp CLI + Chromium) and may be fragile. `make html`
  is the supported, reliable output.

## Theme

- All custom CSS lives in `postprocess.mjs` in `EXTRA_CSS`, built on the single `PALETTE`
  gradient constant (green: parks and paths). Re-palette by changing `PALETTE` only. The
  post-processor injects this CSS before `</head>`.
- The look is flat and square: no rounded corners, no shadows.
- Diagrams are plain HTML/CSS (`.flow` / `.flow-box` / `.plate` / `.flow-arrow`), NOT
  Mermaid. Server-side Mermaid is unreliable here - do not reintroduce it.

## Content layout

- Slides: `content/slides-en.md` (English only; the French deck was removed).
- Title/frontmatter: `config/header-en.md`.
- Landing page: `config/landing.html` (copied to `docs/index.html`).
- Deck structure: intro (problem, premise, boring-is-better, China comparison) ->
  Part 1 city model -> Part 2 movement hierarchy -> Part 3 bike share as infrastructure ->
  Part 4 platform (Kubernetes/KEDA/VPA/Karpenter) -> Part 5 children and policing ->
  Part 6 delivery (rollout, who builds it, anti-patterns, ask, references).
- The platform section (Part 4) keeps real technical content but is written for a broad
  policy audience: no YAML, no jargon walls, only useful mechanics.

## Hard rules

- `docs/` is generated output. NEVER hand-edit files in `docs/`. Edit sources and run
  `make html`, then commit the regenerated `docs/`.
- Change content/headers/landing/README only when re-topicing. Leave `Makefile`,
  `package.json`, and `.github/workflows/` alone unless changing the build itself;
  touch `postprocess.mjs` only to change the palette.
- No em-dashes or special Unicode punctuation in slide or doc content; use regular
  hyphens or colons.
- Branding on the artifact: "Digital Transformations Canada". Do not put other
  departmental branding on the title slide or landing page without explicit direction.
