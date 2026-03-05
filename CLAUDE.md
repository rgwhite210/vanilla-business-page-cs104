# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static multi-page business website for a fictional dog care business, "Canine Companions, LLC." Built as an educational CS104 project in three phases:
- **Phase 1:** Static homepage with HTML, CSS, images, navigation placeholders
- **Phase 2:** Multi-page layout, responsive design, semantic HTML, accessibility (completed)
- **Phase 3:** JavaScript interactivity — dynamic gallery, form validation, FAQ (planned)

Deployed at: https://vanilla-business-page-cs104.vercel.app/

## Tech Stack

Pure vanilla HTML5 and CSS3 — no JavaScript, no build tools, no package manager. Changes deploy automatically to Vercel when pushed to `main`.

## Development

No build step required. Open HTML files directly in a browser or use a local dev server:

```bash
# Simple local server (Python)
python3 -m http.server 8000

# Or with Node.js (if available)
npx serve .
```

No linting or test commands exist. Validate HTML at https://validator.w3.org/ and CSS at https://jigsaw.w3.org/css-validator/.

## Architecture

Single shared stylesheet (`style.css` at root) used by all pages. HTML pages link back to it with relative paths (`../../style.css` from `src/pages/`).

```
index.html            ← Home page
style.css             ← Shared styles for all pages
src/
  images/             ← Logo, favicon, pet photos
  pages/
    services.html     ← Service listings and process
    contact.html      ← Contact form (action="#", no backend)
```

Navigation links in all pages are relative (e.g., `../../index.html` from sub-pages). The form on `contact.html` has no backend — `action="#"`.

## CSS Conventions

- **Color palette:** Primary green `#1E7A57`, accent orange `#C4550A`, background cream `#F6F1E5`, gold `#E7C789`
- Layout uses flexbox throughout; responsive breakpoint at `max-width: 768px`
- Font: `"Segoe UI", sans-serif`

## Accessibility Requirements

All pages follow these conventions established in Phase 2:
- Semantic HTML elements (`header`, `nav`, `main`, `footer`)
- All images have descriptive `alt` text
- All form inputs have associated `<label>` elements using `for`/`id` pairing
- Proper input `type` attributes (`email`, `tel`, `select`)
