---
title: Getting Started with neovim-web
date: 2026-01-15
description: Set up your Neovim-themed website in 5 minutes with zero dependencies.
tags:
  - tutorial
  - getting-started
---

This is a sample blog post demonstrating the blog system. Posts are markdown files in the `posts/` directory with YAML frontmatter.

## Setup

Clone the repo and start the dev server:

```bash
git clone https://github.com/your-username/neovim-web.git
cd neovim-web
make run
```

Open `http://localhost:8000` and you should see the Alpha dashboard.

## Configuration

Everything is in `config.js`:

```js
const config = {
    title: "my-site",
    startPage: "home",
    files: ["home", "about"],

    alpha: {
        enabled: true,
        animation: 'cube',  // 'donut', 'starfield', 'cube', or false
        title: "my-site",
        subtitle: "Welcome to my corner of the internet",
    },

    themes: ['tokyo', 'gruvbox', 'dracula', 'cyberpunk', 'latte'],
    defaultTheme: 'tokyo',
};
```

## Adding Your First Page

Create `content/projects.md`:

```markdown
# My Projects

Here are some things I've built...
```

Then add `"projects"` to the `files` array in `config.js`. The page automatically gets a sidebar entry, a `:projects` command, and shows up in Telescope search.

## Writing Blog Posts

Create a new file in `posts/` with a date-slug filename:

```
posts/2026-02-01-my-first-post.md
```

Add frontmatter at the top, write your content below, then run:

```bash
make posts  # regenerate the manifest
make bust   # cache bust before deploying
```

## Deploy

Push to GitHub and enable Pages in your repo settings. No build step needed.

```bash
git add -A
git commit -m "My neovim-web site"
git push
```

Your site will be live at `https://username.github.io/repo-name/`.
