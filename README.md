# Muhammad Hezka Portfolio

Personal portfolio website dengan Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready setup, Lenis smooth scroll, dan glassmorphism UI.

## Struktur Folder

- `app/` - route utama Next.js, layout, dan halaman.
- `components/` - komponen reusable.
- `components/ui/` - komponen UI kecil seperti button, glass card, dan reveal animation.
- `components/sections/` - section halaman portfolio: hero, about, projects, contact, dan lainnya.
- `constants/` - konfigurasi kecil yang jarang berubah, seperti menu navigasi.
- `data/` - data portfolio, project, skill, timeline, gallery, dan social link.
- `hooks/` - custom React hooks.
- `lib/` - helper function.
- `styles/` - global CSS dan utility class.
- `types/` - TypeScript type bersama.
- `public/` - tempat asset lokal seperti foto profile, thumbnail, favicon.

## Menjalankan Project

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:3000`.

## Catatan Kustomisasi

Ganti data utama di `data/portfolio.ts`. Jika sudah punya foto sendiri, letakkan di `public/images/`, lalu ubah sumber gambar dari URL Unsplash menjadi path lokal seperti `/images/profile.jpg`.
