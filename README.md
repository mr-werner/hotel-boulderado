# Hotel Boulderado — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.boulderado.com/ (Boulder, CO).
Preview: https://hb.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `hotel-boulderado` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `hb.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Motif: the lobby's leaded stained-glass ceiling, drawn as a repeating diamond-and-medallion pattern used as trim between sections.
- Cormorant Garamond display serif with Jost; oxblood, brass, cream and a forest green for the history section.
- A booking bar under the hero that opens the hotel's SynXis booking engine with the dates and guests already filled in.
- Arched room cards like the hotel's windows, three dining cards (Spruce, The Corner Bar, License No. 1), weddings and events with the named spaces, and a history timeline with the 1910 postcard and past guests.

## What changed from the current site

- Removes the dead Google+ link and the retired Universal Analytics cookies.
- Updates the stale "Celebrating 116 years" banner and the "1998 - 2025" copyright.
- Booking starts on the homepage instead of behind a seasonal promo.
- Email, phone, address and press contact in one place; mobile checked at 390px with no sideways scrolling.

## Owner should confirm

- Room, suite and Carriage House descriptions are short summaries; confirm wording and add room counts.
- "A block from Pearl Street" and the brand colors (oxblood and brass); the original logo is the white SVG from boulderado.com.
- Wedding and Meetings RFP buttons link to the current site until the forms are wired up.
- SynXis query parameters (arrive, depart, adult) should be checked against the hotel's booking setup.
- Photos are hotlinked from boulderado.com and must be replaced with licensed originals before launch.
