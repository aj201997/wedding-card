# Purva & Naman — Wedding Invitation (React + Vite)

A modern, responsive wedding microsite built in React from the supplied eight-page invitation PDF. This is a static frontend; it needs no database, API key, or environment variables.

## Source content included

- **Invitation:** Mrs. Jhankar Devi Dugar invites guests to the wedding ceremony of her granddaughter, Purva Dugar (D/O Mrs. Madhu & Lalit Dugar), with Naman Jain (S/O Mrs. Pratima & Atul Jain).
- **11 December 2026:** Vinayak Puja (Baan) — 9:00 AM; Mehendi — 10:00 AM (Green dress code); Satta & Milni — 4:00 PM; Sangeet Night — 8:00 PM onwards (Friday). The original Hindi lines are included.
- **12 December 2026:** Battisi — 8:00 AM; Mayra — 10:00 AM (Rajputi / Chunari dress code); Haldi — 2:30 PM (Pink dress code); Dinner & Varmala — 8:00 PM. The original Hindi lines are included.
- **Venue:** Krishna Valley Resort, Police Chowki, Krishna Valley NH19 Jait, Chattikara, Jait More, Jait, Vrindavan.
- **Welcome by:** Kamala – Kamal Singh Ji Baid; Vineeta – Ramesh Ji Bhandari; Varsha – Hitesh Ji Chitlangia; Nisha – Yash Ji Sancheti.
- **Nanihal Paksh:** Mina Devi – Shantilal Ji Patawari; Deepika – Pawan Patawari; Laxmi – Santosh Patawari.
- **|| बाल मनुहार ||** Ritika, Kaushik, Daksh, Vridhi, Rishabh, Kaushik, Kaira, Nayra.
- **R.S.V.P. — Dugar Family:** Madhu – Lalit Dugar (9322643009); Seema – Surendra Dugar (9830493137); Meera – Mahendra Dugar (8444023252); Preeti – Vivek Dugar; Vedika – Lokesh Dugar.
- **Google Maps:** https://maps.app.goo.gl/vs6nQKWr71HYymzv9

## Features

- Interactive invitation envelope and animated cover
- Custom SVG bride/groom illustration and animated baraat
- Live countdown to 12 December 2026 at 8:00 PM IST
- Scroll-reveal event cards and responsive mobile layout
- Family and RSVP sections with clickable phone numbers
- Venue map card and working Google Maps links
- Native share sheet / clipboard fallback
- Reduced-motion support and mobile-friendly navigation

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To verify a production build:

```bash
npm run build
npm run preview
```

## Deploy to Vercel (recommended: GitHub import)

1. Extract this ZIP on your computer.
2. Create a new GitHub repository and upload **the contents of this folder** to the repository root. `package.json`, `index.html`, `vite.config.js`, `vercel.json` and `src/` must be directly at the root—do not add another nested project folder.
3. Open https://vercel.com/new and import that GitHub repository.
4. Confirm project settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Root directory: `.` (repository root)
5. Deploy. Share the public `*.vercel.app` URL after the build succeeds.

`vercel.json` includes Vite build/output settings and an SPA rewrite to `index.html`. No custom domain is required.

## If Vercel shows a 404

1. In the Vercel dashboard, open this project → **Deployments** and click **Visit** on the latest deployment that says **Ready**. Do not rely on an old or copied URL until this works.
2. Open that deployment’s **Build Logs** and verify `npm run build` completed successfully and Vite generated `dist/index.html`.
3. In **Settings → Build and Deployment**, check Root Directory is the repository root (`.`), Framework Preset is Vite, Build Command is `npm run build`, and Output Directory is `dist`.
4. Redeploy after changing settings.
5. If the latest **Ready** deployment still shows 404, share its URL and the end of the Build Logs (hide any private environment values). The error screenshot alone cannot distinguish a wrong/deleted deployment URL from a missing build output.

## Customise

Most invitation copy and event content lives in `src/App.jsx`; the exact Google Maps URL is the `MAP_URL` constant near the top. Visual styling and mobile layout live in `src/styles.css`. Title and social share metadata live in `index.html`.

## RSVP note

The three phone numbers are clickable `tel:` links, and the map opens the exact Google Maps link from the supplied card. RSVP responses are handled by phone; this project does not collect responses in a database.
