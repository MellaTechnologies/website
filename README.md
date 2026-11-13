# Mella Technologies website

One-page company site for [mellatechnologies.com](https://mellatechnologies.com). Built with Next.js 16, Tailwind CSS 4 and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

| What | File |
| --- | --- |
| Company details, SEO text, services list | `src/lib/site.ts` |
| Page sections | `src/app/page.tsx` |
| Colours and fonts | `src/app/globals.css` |
| Metadata and structured data (JSON-LD) | `src/app/layout.tsx` |
| Share image, icons, robots.txt, sitemap | `src/app/opengraph-image.tsx`, `icon.svg`, `apple-icon.tsx`, `robots.ts`, `sitemap.ts` |

Set `NEXT_PUBLIC_SITE_URL` only if the site moves off `https://mellatechnologies.com`.
