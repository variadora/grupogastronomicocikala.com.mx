# PRD — GRUPO GASTRONÓMICO CIKALA, S.A.S. de C.V.

## Original Problem Statement
"GRUPO GASTRONOMICO CIKALA, S.A.S. de C.V. crea landing page algo que variado de Giro intermediarios de comercio al por mayor" — Landing page for a wholesale commerce intermediary with a varied gastronomic business line.

## User Choices
- Sections: Inicio, Nosotros, Servicios, Productos, Contacto
- Style: Modern & corporate (delivered as premium dark, Awwwards-level art direction)
- Functional contact form saving to database
- Bilingual ES/EN with toggle
- No brand assets provided → original SVG logo designed

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis (smooth scroll) + sonner toasts
- Backend: FastAPI + Motor (MongoDB), all routes under /api
- i18n: React Context dictionary (es/en) in src/i18n.js

## User Personas
- B2B buyers (restaurants, hotels, chains) sourcing wholesale supplies
- Distributors/producers seeking an intermediary partner

## Core Requirements (static)
- Bilingual single-page landing with anchor sections and smooth scroll
- Functional contact form persisting to MongoDB
- Distinctive, on-brand premium motion and design

## Implemented (2026-06)
- Kinetic hero with masked line-by-line on-load reveal + parallax background zoom
- Sticky glassmorphism navbar with ES/EN toggle + mobile menu
- About (Nosotros) editorial layout with parallax image + 3 pillars
- Editorial marquee
- Services (Servicios) asymmetric bento grid, 4 cards with image hover zoom
- Products (Productos) "CIKALA Select" 4-card showcase with hover reveal
- Contact (Contacto) split layout, form → POST /api/contact (MongoDB), success/error toasts
- Footer with nav + legal; original SVG logo used as favicon
- Global noise/grain overlay; Cabinet Grotesk / Satoshi / Cormorant Garamond fonts
- Backend: POST/GET /api/contact; validated 100% by testing agent

## Backlog
- P1: Real catalog page / PDF catalog download
- P1: Admin view to read contact submissions
- P2: SEO — add href to anchor links; meta/OG tags; sitemap
- P2: Spam protection / rate limiting on /api/contact
- P2: Replace placeholder contact info (phone/email/address) with real data

## Next Tasks
- Await client's real content (logo, colors, copy, contact details, product photos)
