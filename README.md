# Cyber-stuff
educational crypto-stuff platform
# cyber-stuff

A free, educational cybersecurity blog with a curated list of reliable cyber news sources.

The site is plain HTML, CSS and JavaScript. It has no framework, no database, no tracking, no ads and no donations.

## What's on the site

- **Blog:** practical security advice and recovery tools for everyday users, with a photo card on the home page and a full page for each post.
- **Reliable cyber news sources:** trusted outlets and official advisories, each with a direct link and a short description.
- **Search:** a search bar that finds blog posts and news sources.

## Folder structure

```
index.html        Home page
style.css         All styling (desktop, tablet and mobile)
posts.js          Site settings, blog post list and news source list
logo-mark.png     Logo shown in the header
favicon.png       Browser tab icon
posts/            One HTML page per blog post
images/           Photos and diagrams used by the posts
```

## Run it locally

Open `index.html` in a web browser. No server or installation is needed.

## Add a blog post

1. Copy an existing page in `posts/` and edit the title, date and text.
2. Put the post's images in `images/`. Use lowercase file names, because GitHub Pages is case-sensitive.
3. Add an entry at the top of the `blogPosts` list in `posts.js`:

```js
{
  title: "Post title",
  summary: "One or two sentences about the post.",
  date: "2026-10-05",
  url: "posts/my-post.html",
  image: "images/my-post-headline.jpg"
},
```

## Add a news source

Add an entry to the `newsSources` list in `posts.js`:

```js
{
  name: "Source name",
  type: "News site",
  url: "https://example.com/",
  description: "One sentence about what readers will find there."
},
```

Separate entries with commas. A missing comma is the most common reason a list does not appear. If something breaks, open the browser console (F12) to see the error.

## Publish with GitHub Pages

1. Push the files to a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then save.
4. The site goes live after a minute or two. Hard-refresh the page (Ctrl+F5, or Cmd+Shift+R on Mac) after each update.

## Disclaimer

This site is completely free. It has no ads, no donations and no paid content. Everything is published for educational purposes only.

Content is general information, not legal or professional advice. It reflects the author's own views, not those of any employer or organisation. Links point to the original sources. If you are a rights holder and want something corrected or removed, please get in touch.
