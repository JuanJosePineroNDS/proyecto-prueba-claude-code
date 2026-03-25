# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A minimal visit-counter web app built with vanilla HTML, CSS and JavaScript. No build step, no dependencies — open `index.html` directly in a browser.

## Running the app

Open `index.html` in any browser. No server required.

For a local dev server (live-reload), any static server works:

```bash
npx serve .
# or
python -m http.server 8080
```

## Architecture

| File | Role |
|------|------|
| `index.html` | Markup and entry point |
| `style.css` | All styles — glassmorphism card, gradient background, counter animation |
| `app.js` | Logic — reads/writes `localStorage` key `visit_count`, increments on load, resets on button click |

## Key decisions

- **Persistence**: `localStorage` — no backend needed; counter is per-browser.
- **Animation**: CSS class `bump` toggled via a forced reflow trick to re-trigger the transition on every update.
