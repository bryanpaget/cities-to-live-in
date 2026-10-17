import fs from 'fs'

// Post-process Marp CLI HTML output: inject the theme CSS and tag
// large code blocks with a smaller-font class. The Marp CLI already produces
// a complete, clickable "bespoke" presentation (arrow-key navigation, one slide
// at a time); we only layer styling on top. We do NOT touch the structure or
// the bespoke JS.

const PALETTE = 'linear-gradient(135deg,#2e7d32 0%,#43a047 35%,#00897b 70%,#66bb6a 100%)'

const EXTRA_CSS = `
/* ---- Cities for People theme (injected post-build) ---- */
section h2 { padding-bottom:8px; margin-bottom:16px; border-bottom:4px solid transparent; border-image:${PALETTE} 1; }
section h3 { color:#1b5e20; }
section footer { color:#2e7d32; font-weight:600; }
section blockquote { border-left:6px solid transparent; border-image:${PALETTE} 1; background:#f3faf3; padding:12px 18px; font-style:italic; }
section table { border-collapse:collapse; }
section table th { background:${PALETTE}; color:#fff; font-weight:600; border:1px solid #c8e0c8; text-shadow:0 1px 2px rgba(0,0,0,0.25); }
section table td { border:1px solid #d4e4d4; }
section table tr:nth-child(even) td { background:#f3faf3; }
section a { color:#2e7d32; }

/* Code blocks: comfortable default, smaller for long blocks (tagged below). */
section pre { font-size:20px; line-height:1.35; }
section pre.code-lg { font-size:15px; line-height:1.3; }
section pre.code-xl { font-size:13px; line-height:1.25; }

/* Component flow diagrams (stack of plates) */
.flow { display:flex; align-items:stretch; justify-content:center; gap:16px; margin-top:18px; }
.flow-box { flex:1 1 0; background:#fff; border:3px solid transparent; border-image:${PALETTE} 1; }
.plate { padding:14px 16px; font-size:19px; line-height:1.3; text-align:center; border-bottom:1px solid #d4e4d4; }
.plate:last-child { border-bottom:none; }
.plate-head { background:${PALETTE}; color:#fff; font-size:24px; font-weight:bold; border-bottom:none; text-shadow:0 1px 2px rgba(0,0,0,0.35); }
.flow-arrow { display:flex; align-items:center; font-size:48px; color:#2e7d32; font-weight:bold; }
`

// Tag code blocks by size so larger ones render at a smaller font.
const tagCodeBlocks = (html) =>
  html.replace(/(<pre\b)([^>]*?)(>\s*<code[^>]*>)([\s\S]*?)(<\/code>)/g,
    (m, open, attrs, mid, code, close) => {
      if (/class=/.test(attrs)) return m // leave existing classes alone
      const lines = code.replace(/\n$/, '').split('\n').length
      const cls = lines >= 18 ? ' class="code-xl"' : lines >= 11 ? ' class="code-lg"' : ''
      return `${open}${attrs}${cls}${mid}${code}${close}`
    })

const processFile = (file) => {
  let html = fs.readFileSync(file, 'utf8')

  // Inject theme CSS just before </head> so it overrides Marp's default theme.
  if (html.includes('</head>')) {
    html = html.replace('</head>', `<style>${EXTRA_CSS}</style>\n</head>`)
  } else {
    // Fallback: prepend a style tag.
    html = `<style>${EXTRA_CSS}</style>\n` + html
  }

  html = tagCodeBlocks(html)

  fs.writeFileSync(file, html)
  console.log(`Post-processed ${file}`)
}

const files = process.argv.slice(2)
if (files.length === 0) {
  console.error('Usage: node postprocess.mjs <file.html> [...]')
  process.exit(1)
}
for (const f of files) processFile(f)
