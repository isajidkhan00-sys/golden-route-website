# Golden Route — Website

Official website for **Golden Route Overseas Employment Promoters**, Islamabad.
License No. OP&HRD/5296/RWP/2026.

Built with **React + Vite**. Fully modular — every section, component, and piece
of content lives in its own file so you can add, remove, or edit features
independently.

---

## 🚀 Getting Started

You need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install        # installs dependencies (run once)
npm run dev         # starts local dev server at http://localhost:5173
npm run build        # builds production-ready files into /dist
npm run preview       # preview the production build locally
```

Open the project folder in VS Code, run `npm install`, then `npm run dev`.
The site auto-reloads as you edit files.

---

## 📁 Folder Structure — what lives where

```
src/
├── App.jsx                  ← ⭐ THE PAGE ASSEMBLY FILE. Add/remove sections here.
├── main.jsx                  entry point — don't usually need to touch this
│
├── data/                     ← all editable CONTENT lives here (no JSX)
│   ├── siteConfig.js          company name, phone numbers, email, address
│   ├── services.js            the 6 service cards — add/remove an object to add/remove a card
│   ├── processSteps.js        the "How It Works" 5 steps
│   ├── stats.js                the 4 numbers in the hero stats bar
│   └── faqs.js                 FAQ questions & answers
│
├── components/
│   ├── layout/                site-wide chrome (appears on every page)
│   │   ├── Header.jsx / .css   sticky navbar + mobile menu
│   │   └── Footer.jsx / .css   footer
│   │
│   ├── sections/               one file per homepage SECTION
│   │   ├── Hero.jsx / .css      first viewport, headline + stats
│   │   ├── Services.jsx / .css   service cards grid
│   │   ├── Process.jsx / .css    "How It Works" timeline
│   │   ├── CTABanner.jsx / .css   mid-page call-to-action strip
│   │   ├── About.jsx / .css       company story + leadership
│   │   ├── FAQ.jsx / .css         accordion FAQ
│   │   └── Contact.jsx / .css     inquiry form + contact details
│   │
│   └── ui/                     small reusable building blocks
│       ├── Button.jsx / .css      primary/secondary/ghost button variants
│       ├── Icon.jsx / .css        single icon component, all icons in one place
│       ├── Logo.jsx / .css        the Golden Route logo mark
│       ├── CredentialBadge.jsx     the license-number "seal" badge
│       └── SectionHeading.jsx      the eyebrow+title pattern used on every section
│
├── hooks/
│   └── useAccordion.js         tiny reusable open/close state logic (used by FAQ)
│
└── styles/
    ├── tokens.css              ⭐ ALL COLORS, FONTS, SPACING — change brand colors here
    └── global.css               resets + base typography
```

---

## ✏️ Common edits — where to go

| I want to...                              | Edit this file                              |
|--------------------------------------------|----------------------------------------------|
| Change the phone number / email / address  | `src/data/siteConfig.js`                     |
| Add/remove/edit a service card             | `src/data/services.js`                       |
| Add/remove a step in "How It Works"        | `src/data/processSteps.js`                   |
| Add/remove an FAQ question                  | `src/data/faqs.js`                           |
| Change brand colors (navy/gold)             | `src/styles/tokens.css`                      |
| Add a whole new section to the homepage     | 1) create file in `src/components/sections/` 2) import + add `<YourSection />` in `App.jsx` |
| Remove a section from the homepage          | delete its line (and import) in `App.jsx`    |
| Reorder homepage sections                   | reorder the lines inside `<main>` in `App.jsx` |
| Change the hero headline                    | `src/components/sections/Hero.jsx`            |

---

## ➕ Adding a brand-new section (example)

Say you want to add a "Testimonials" section later:

1. Create `src/components/sections/Testimonials.jsx` and `Testimonials.css`
2. (Optional) create `src/data/testimonials.js` for the quotes/names
3. In `App.jsx`, add:
   ```jsx
   import Testimonials from './components/sections/Testimonials';
   // ...
   <Testimonials />   // place it wherever you want it to appear
   ```

That's it — nothing else in the codebase needs to change.

## ➖ Removing a section

Just delete its `<SectionName />` line and its import line at the top of
`App.jsx`. The component files can stay in the folder unused, or be deleted.

---

## 🎨 Design System

- **Navy** (`#0F2557`) — primary brand color, from the business card border/text
- **Gold** (`#C9962F`) — accent color, from the license text & logo sash
- **Cream** (`#F7F6F2`) — warm off-white background
- **Playfair Display** — serif font for headlines (matches the card's wordmark style)
- **Inter** — sans-serif font for body text
- **IBM Plex Mono** — monospace font used for the license number (gives it an "official document" feel)

All of these are defined as CSS variables in `src/styles/tokens.css` — change
a value there and it updates everywhere on the site automatically.

---

## 📌 Notes

- The contact form currently opens the visitor's email client via `mailto:`
  (no backend). To wire it to a real backend or service like Formspree/EmailJS,
  edit the `handleSubmit` function in `src/components/sections/Contact.jsx` —
  the form markup itself won't need to change.
- All icons are hand-drawn SVG paths in `src/components/ui/Icon.jsx` — add a
  new icon by adding a new key to the `ICONS` object there.
