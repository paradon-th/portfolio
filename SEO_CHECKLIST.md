# SEO Checklist — portfolio.paradon.work

> Code-side SEO is done. The 80/20 of getting found is now off-platform:
> indexing, backlinks, and time. This file is your roadmap.

## Realistic expectations

| Target query | Likely to rank? | When |
|---|---|---|
| `Paradon Thonthong` | Yes | 2–8 weeks |
| `Paradon Thonthong portfolio` | Yes | 2–8 weeks |
| `paradon.work` | Maybe (Google often rewrites domain-like queries) | 1–3 months |
| `full stack developer Thailand` | **No** (too competitive) | — |
| `Next.js developer` | **No** | — |

Personal portfolios rank for the **person's name**, not generic skills.

---

## Today (15 minutes — do these now)

### 1. Google Search Console — submit and verify

1. Go to https://search.google.com/search-console
2. Add property → URL prefix → `https://portfolio.paradon.work`
3. Choose the **HTML tag** verification method → copy the `content="..."` value
4. Paste it into `app/layout.tsx` replacing `REPLACE_WITH_GOOGLE_VERIFICATION_CODE`
5. Deploy
6. Click "Verify" in Search Console
7. Once verified, go to **Sitemaps** → submit `https://portfolio.paradon.work/sitemap.xml`
8. Go to **URL Inspection** → paste `https://portfolio.paradon.work` → click "Request Indexing"

This is the #1 thing that gets your site into Google. Skip everything else if you only do one thing.

### 2. Bing Webmaster Tools (5 min, also gets DuckDuckGo + Yahoo)

1. https://www.bing.com/webmasters
2. Add site → can import directly from Google Search Console
3. Replace `REPLACE_WITH_BING_VERIFICATION_CODE` in layout.tsx with the meta value
4. Deploy + verify
5. Submit sitemap

### 3. Update your social profiles to link to the portfolio

These create backlinks Google trusts immediately:

- **LinkedIn** → Profile → Contact info → Website → `https://portfolio.paradon.work`
- **GitHub** → Profile settings → set portfolio URL in profile
- **Instagram** → Bio link
- **ClickUp / company profile** → if visible publicly

---

## This week

### 4. Pin a README on your GitHub profile

Create a repo called `paradon-th` (same as your username) with a README.md:

```markdown
# 👋 Hi, I'm Paradon Thonthong

Full Stack Developer — Next.js, Angular, Spring Boot, MySQL

🌐 **Portfolio:** https://portfolio.paradon.work

[other links...]
```

Google indexes GitHub profile READMEs and this gets your name + portfolio URL into the index fast.

### 5. Public profiles with backlinks

Free, high-authority places to put `https://portfolio.paradon.work`:

- [ ] dev.to profile
- [ ] hashnode profile
- [ ] StackOverflow profile (if you have account)
- [ ] Medium profile
- [ ] about.me (free 1-pager that links to your site)
- [ ] Polywork / read.cv
- [ ] Topmate / Cal.com bio
- [ ] Twitter/X bio

Each backlink from these domains signals legitimacy to Google.

### 6. One blog post or case study

Add a `/projects/idorm` page or `/blog/...` page on the portfolio with:
- 500+ words of original content
- Real screenshots
- Tech stack explanation
- Code snippets

More pages = more chances to rank + more keywords indexed.

---

## Within a month

### 7. Add a `/blog` (optional but huge for SEO)

Even 3–5 short posts about tech you use would 10× your indexed pages.

### 8. Get listed on developer directories

- https://stackshare.io
- https://hashnode.com
- ThaiDev community sites
- Discord/Slack community member spotlights

### 9. Check progress

Once a week, search:
- `site:portfolio.paradon.work` in Google → see what's indexed
- `Paradon Thonthong` → see if you appear

Check Google Search Console weekly for impressions/clicks data.

---

## What I already did in code

- ✅ `<title>` + `<meta description>` with name + Thai name
- ✅ Open Graph + Twitter Card tags
- ✅ Auto-generated OG image (`/opengraph-image`)
- ✅ Canonical URL
- ✅ `robots.txt` allowing all crawlers
- ✅ `sitemap.xml` listing the homepage
- ✅ JSON-LD structured data: Person, WebSite, ProfessionalService
- ✅ Web app manifest
- ✅ Verification slots ready for Google + Bing
- ✅ H1 = "Hi! I'm Paradon Thonthong" (name-first heading)
- ✅ Theme-color meta + apple-touch-icon spec
- ✅ Preconnect to Google Fonts (perf)
- ✅ Lang="en"

## What still needs your hands

- ⬜ Verify on Google Search Console + submit sitemap
- ⬜ Verify on Bing Webmaster
- ⬜ Replace `REPLACE_WITH_*_VERIFICATION_CODE` in `app/layout.tsx`
- ⬜ Add `apple-touch-icon.png` file in `public/` (180×180 px)
- ⬜ Update LinkedIn / GitHub / Instagram bio with portfolio link
- ⬜ Wait. SEO is a delay game; this isn't instant.

---

## Anti-pattern reminders

- ❌ Don't pay anyone for "SEO backlinks" — Google penalizes paid link farms
- ❌ Don't keyword-stuff. The 13 keywords in metadata are the limit
- ❌ Don't expect instant results — fresh domains take 2–8 weeks minimum
- ❌ Don't worry about generic skill keywords. Win on your own name first.
