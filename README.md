# Skein

The standalone landing page for Skein, a macOS menu bar manager in the
ariadnev ecosystem.

## Stack

- Astro 5
- Tailwind CSS 4
- GSAP and ScrollTrigger
- Lenis
- Cloudflare Pages

## Development

Requires Node.js 22.12 or later and pnpm 11.

```sh
pnpm install
pnpm dev
```

## Verification

```sh
pnpm check
pnpm build
```

Cloudflare Pages should use `pnpm build` as its build command and `dist` as
its output directory.
