# Mildenhall First — Campaign Website

## Project Overview
Full-stack campaign website for **David Chandler**, Independent candidate for the **Mildenhall Division**, West Suffolk County Council.

**Campaign**: Mildenhall First — *Unitas et Vigilantia* (Unity & Vigilance)
**Candidate**: David Chandler, 55 Girton Close, Mildenhall, IP28 7PT
**Email**: david@davidchandleruk — NEVER displayed publicly; contact form stores to DB only
**WhatsApp**: 07399800229 — linked as wa.me/447399800229, never displayed as text

## Architecture
- **Frontend**: React + Vite (`artifacts/manifesto/`)
- **Backend API**: Express + Node.js (`artifacts/api-server/`)
- **Database**: PostgreSQL via Drizzle ORM (`lib/db/`)
- **API Client**: Auto-generated from OpenAPI spec (`lib/api-client/`, `lib/api-client-react/`)
- **Scripts**: Database seed scripts (`scripts/`)

## Key Values & Tone
- Socialist values, David is "socialist by personality and evidence by method"
- Inclusive language for ALL people — no exclusion by wealth, ability, status, age, or voting history
- Rural inequality focus — Mildenhall gets same Council Tax as towns but far fewer services
- Evidence-based with real data (ONS, Suffolk Observatory, Suffolk Police, NHS Digital, etc.)
- Anti-scapegoating — explicitly protective of vulnerable people

## Pages

### Main Pages
- `/` — Home
- `/manifesto` — The Manifesto
- `/about` — About David Chandler (career, values, why independent)
- `/policies` — Overview of all 10 policy areas
- `/contact` — Contact form (stores privately in DB, WhatsApp button)
- `/surveys` — Survey list
- `/gallery` — Image maps
- `/admin` — Admin portal (Message Inbox + Image Map Manager)

### 10 Policy Pages (all with embedded live surveys)
- `/policies/education` — Education (no sixth form, SEND crisis, Free School Meals gap)
- `/policies/transport` — Transport (2 bus routes, no Sunday/evening service, A1101 safety)
- `/policies/policing` — Policing & Safety (no station since 2013, 3 PCSOs, 14.2min response)
- `/policies/taxation` — Taxation (rural service deficit, fuel poverty, rural premium)
- `/policies/health` — Health & NHS (16-day GP wait, 1 NHS dentist, mental health gaps)
- `/policies/environment` — Environment (River Lark, aircraft noise, Breckland SAC)
- `/policies/housing` — Housing (8.8× earnings ratio, 1,847 waiting list, 847 social homes)
- `/policies/poverty` — Poverty & Cost of Living (28% child poverty, food bank +41%)
- `/policies/employment` — Employment (£28,400 avg wage, 8.3% zero-hours, 4.2% unemployment)
- `/policies/us-military` — U.S. Military Presence (100th ARW, noise, community voice)

### Legal Pages
- `/imprint` — Legal Imprint (PPERA statutory notice)
- `/privacy` — Privacy Policy
- `/cookies` — Cookies Policy
- `/gdpr` — GDPR rights explained in plain English
- `/disclaimer` — Legal disclaimer
- `/accessibility` — Accessibility statement (WCAG 2.1 AA, last reviewed April 2026)

## Components

### Key Components
- `Navbar.tsx` — Fixed navbar with "Our Policies" animated dropdown (10 policy links), mobile accordion
- `Footer.tsx` — 4-column footer: Brand, Policy Areas, Campaign, Legal (includes /accessibility link)
- `CampaignTicker.tsx` — Scrolling campaign marquee on homepage; pause/play control; prefers-reduced-motion support (shows static text if motion disabled)
- `PolicySurveyBlock.tsx` — Reusable embedded survey widget; looks up survey by title, shows form + live results with recharts bar charts, auto-polls every 15s
- `TextToSpeech.tsx` — Floating "Listen" button; reads page content aloud; speed control; pause/stop; uses browser SpeechSynthesis API

### Policy Page Structure
Each policy page follows:
1. **Hero** — Coloured background, icon, title, inclusive intro paragraph, 4 key stat boxes
2. **The Local Picture** — Narrative with bold real data
3. **Comparison Table** — Mildenhall vs other Suffolk towns (Bury St Edmunds, Newmarket, Haverhill)
4. **3 Data Cards** — Specific issues (icon, title, body)
5. **PolicySurveyBlock** — Live survey by title matching
6. **David's Commitments** — 5 specific pledges with detail

## Database

### Tables
- `surveys` — Survey definitions
- `survey_questions` — Questions per survey (multiple_choice, scale, text)
- `survey_responses` — Individual response sessions
- `survey_answers` — Individual question answers
- `image_maps` — Gallery image maps
- `contact_messages` — Contact form submissions (private, admin-only)

### Surveys (seeded via `pnpm --filter @workspace/scripts run seed-surveys`)
- ID 1: Policy Priorities Survey 2024 (original)
- ID 2–11: 10 policy-specific surveys matching each policy page title exactly

## Critical Notes

### API / Zod
- API routes use `"zod"` (v3), not `"zod/v4"`
- Schema files use `"zod/v4"`

### CSS
- Theme uses `@theme inline` with `hsl()` wrapped values
- Do NOT add global `text-primary` to hero headings (causes colour conflicts)

### Images
- Images in `artifacts/manifesto/public/images/`
- Access via `import.meta.env.BASE_URL + "images/FILENAME"`

### PolicySurveyBlock
- Looks up survey by exact title string — must match seed titles exactly
- If survey not found (not seeded), component renders `null` silently

### Routing
- Specific policy routes MUST come before `/policies/:id` catch-all in App.tsx
- This is already correctly ordered

## Dependencies
- React 19, Vite 7, wouter (routing), framer-motion (animations)
- @tanstack/react-query, recharts, lucide-react
- Drizzle ORM, PostgreSQL, zod
- Express, pino (logging)

## David's Career Background (for About page)
- MoD at RAF Mildenhall — Air Mobility
- Seconded to HM Treasury — Assessor for JEGS2000 harmonisation scheme
- Shop Steward, Health & Safety Representative, Lay Delegate
- Politically motivated to protect vulnerable people from scapegoating
