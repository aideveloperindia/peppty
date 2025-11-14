Peppty Technologies — Official Company Website

Overview
This is the official website for Peppty Technologies, built with Next.js 14, Tailwind CSS, and TypeScript. It includes corporate pages, products, contact form (with spam protection), legal pages, press, careers, SEO basics, and static export support.

Tech stack
- Next.js 14 (Pages Router)
- TypeScript
- Tailwind CSS

Brand tokens
- Primary red: #ed1e24
- Red hover: #c4161a
- Background: #ffffff
- Surface: #f8fafb
- Text: #0f172a
- Muted: #6b7280

Simplified Corporate UI
- November 2025: Replaced motion-heavy visuals with static, typography-led layouts for a formal corporate tone.
- Introduced a consistent red-and-white component system with restrained shadows, dark footer, and standard cursor.
- Removed framer-motion and custom cursor logic to keep interactions minimal and accessible by default.

Getting started
1) Install dependencies
   npm install

2) Run locally (http://localhost:3000)
   npm run dev

3) Production build
   npm run build

Contact form (API)
- Endpoint: /api/contact (POST)
- Fields: name, email (required), organization, usecase, message, company_website (honeypot)
- Current behavior: Logs submissions to server and returns { ok: true }. No emails are sent by default.

Connect to email or Calendly
- Email: Replace the console.log in pages/api/contact.ts with an email service (e.g., SendGrid, Resend) or store in your CRM.
- Calendly: Add your link in pages/contact.tsx where noted (or keep as a secondary call-to-action).

Deploy to Vercel
1) Push to a Git repository (GitHub, GitLab, or Bitbucket)
2) Import the repo in Vercel
3) Use default settings (Framework: Next.js). Build command: next build. Output: .next
4) The API route will run as a serverless function.

Static export for GoDaddy
1) Generate static export
   npm run export
   This outputs static files into out/
2) Upload the out/ folder contents to your GoDaddy hosting (public_html or root). API routes are not available in static export; use a third-party form handler or an email endpoint.

SEO basics
- Basic meta/OG tags via components/SEOHead.tsx
- robots.txt and sitemap.xml included in public/
- JSON-LD Organization is embedded

Accessibility
- Visible focus states
- Keyboard-accessible header/nav and forms
- Respects prefers-reduced-motion

Assets and placeholders
- Replace public/logo-placeholder.svg once final logo is ready
- Current header uses public/peppty_logo.jfif (provided). Swap back to logo-placeholder.svg if needed
- Replace public/hero-placeholder.png with real visuals
- Update press/press-kit.zip with real press assets

Lighthouse targets
- Desktop ≥ 90. CLS < 0.1
- For mobile, document any trade-offs (fonts, images, or motion)

Sitemap and robots
- public/sitemap.xml lists key pages
- public/robots.txt points to the sitemap and allows crawling

Project scripts
- npm run dev — start dev server
- npm run build — production build
- npm run start — start production server
- npm run export — static export to out/

Notes / TODO for launch
- Replace placeholder copy with approved Peppty content
- Swap placeholder visuals and update real product metrics
- Connect contact form to email/CRM or Calendly
- Attach Lighthouse reports (desktop & mobile) after first deploy


