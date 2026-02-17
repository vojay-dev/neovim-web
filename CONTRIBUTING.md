# Contributing to neovim-web

Thanks for your interest in contributing! This project is intentionally simple (vanilla JS/CSS/HTML, zero build tools) and we'd like to keep it that way.

## Getting Started

```bash
git clone https://github.com/vojay-dev/neovim-web.git
cd neovim-web
make run
# Open http://localhost:8000
```

No npm, no bundler, no setup. Edit files, refresh the browser.

## How to Contribute

### Reporting Bugs

Open an issue with:
- What you expected to happen
- What actually happened
- Browser and OS
- Steps to reproduce

### Suggesting Features

Open an issue describing the feature and why it would be useful. Keep in mind the project philosophy: minimal, Neovim-inspired, zero dependencies.

### Submitting Pull Requests

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Test across browsers (Chrome, Firefox, Safari) and on mobile
4. Run `make bust` before committing if you changed JS or CSS
5. Open a PR with a clear description of what changed and why

## Guidelines

### Code Style

- **No build tools.** No npm, no bundler, no transpiler. This is a feature, not a limitation.
- **No new CDN dependencies** without discussion. Every dependency is a liability.
- **Use theme variables** (`var(--blue)`, `var(--bg)`, etc.), never hardcode colors.
- **All commands must be lowercase** since mobile keyboards send lowercase input.
- **Keep it simple.** If a feature needs more than ~50 lines, it probably deserves an issue discussion first.

### File Ownership

| File | Who should edit it |
|------|--------------------|
| `config.js` | End users (their site config) |
| `commands.js` | End users (custom commands) + contributors (built-in commands) |
| `engine.js` | Contributors only (core runtime) |
| `style.css` | Contributors (themes, layout) |
| `content/` | End users (their pages) |

### Themes

New built-in themes are welcome! A theme is a set of CSS custom properties under `[data-theme="name"]`. Make sure it looks good with all page types (markdown, code blocks, blog cards, Alpha dashboard).

### Commands

New commands go in `commands.js`. Each command needs:
- A lowercase name
- A `desc` string (shown in `:help`)
- A `fn(args, sys)` function

### Testing

There's no test suite (yet). Please manually verify:
- Alpha dashboard loads and dismisses correctly
- Telescope search works
- Theme switching works
- Mobile layout is usable
- Your changes don't break existing commands

## Architecture

```
config.js → commands.js → engine.js
```

The engine reads `config` and `customCommands` on load. Pages are plain markdown in `content/`. The blog system reads from `posts/posts.json`. Everything renders client-side.

## Questions?

Open an issue or reach out to [@vojay-dev](https://github.com/vojay-dev).
