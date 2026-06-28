---
title: "Welcome to Your New Blog"
date: 2026-01-01
description: "A placeholder post that shows how blog posts look on this site."
---

This is a **placeholder blog post**. It exists to show how an article looks: the
table of contents on the left is generated automatically from the headings
below, and the prose styling matches the rest of the site. Delete this file (and
the placeholder image in `public/blog/`) once you've written your own.

To add a post, drop a new Markdown file into `src/content/blog/`. The frontmatter
needs a `title` and a `date`; everything else is optional.

## Writing content

Write in plain Markdown. You get headings, **bold**, *italics*, `inline code`,
[links](https://astro.build), lists, blockquotes, and images. You can also use a
bit of inline HTML — for example, <mark>this highlighted phrase</mark> uses the
accent color, just like on the original site.

### Lists work too

- First point worth making
- Second point worth making
- A third, for good measure

### Code and quotes

> Blockquotes are handy for pulling out an important idea.

```python
def hello(name: str) -> str:
    return f"Hello, {name}!"
```

## Images

Inline images are centered and responsive by default:

![A placeholder illustration](/blog/placeholder.svg)

Markdown image paths that start with `/` are automatically prefixed with your
site's base path, so they resolve whether the site is hosted at the domain root
or under a subpath (e.g. a GitHub project page).

## Wrapping up

That's the whole blog system: Markdown in, styled article out, with an automatic
table of contents. Replace this post with your own and you're done.
