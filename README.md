<p align="center">
  <img src="assets/banner.svg" alt="zzatiz.github.io" width="100%" />
</p>

<h1 align="center">zzatiz.github.io</h1>

<p align="center">
  Personal GitHub Pages site for <strong>Zzatiz</strong> — redirects to the live portfolio at
  <a href="https://zzatiz.vercel.app">zzatiz.vercel.app</a>
</p>

---

## About

This repository hosts the GitHub Pages configuration for [zzatiz.vercel.app](https://zzatiz.vercel.app). All traffic arriving at `zzatiz.github.io` is automatically forwarded to the Vercel deployment.

The actual portfolio/app source lives on Vercel and is built with Next.js.

## How It Works

The `docs/` folder contains two redirect pages served by GitHub Pages:

| File | Purpose |
|------|---------|
| `docs/index.html` | Root redirect to `zzatiz.vercel.app` |
| `docs/404.html` | 404 redirect preserving the original path |

## Repository Structure

```
zzatiz.github.io/
├── docs/
│   ├── index.html     # Root redirect page
│   └── 404.html       # 404 catch-all redirect
├── assets/
│   └── banner.svg     # Repository banner
└── README.md
```

## Live Site

[https://zzatiz.vercel.app](https://zzatiz.vercel.app)
