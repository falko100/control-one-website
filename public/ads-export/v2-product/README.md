# Google Ads — product-zware set (v2-product)

Product-screenshots in browser-chrome card op brand-blauw — dezelfde
visuele behandeling als de framework-pagina's op de site.

## Aanpak

In plaats van center-cover-crop (waar sidebars en chart-randen weggesneden
worden), wordt het complete screenshot binnen een browser-window-card
geplaatst op een diagonale brand-gradient. Resultaat: het hele product
blijft zichtbaar, geen rare snijlijnen.

**Per screenshot:**
1. Auto-trim van lege scroll-ruimte onderaan
2. Schaal screenshot om binnen de card te passen
3. Browser-chrome bar bovenaan (3 verkeerslichten + neutrale URL-chip)
4. Card op diagonale brand-gradient achtergrond met subtiele glows
5. Drop-shadow onder de card voor diepte

## Inhoud (12 bestanden, ~970 KB)

| Type | Ratio | Pixels | Aantal | Module |
|---|---|---|---|---|
| Landscape | 1.91:1 | 1200×628 | 4 | Dashboard, Risks, Audits, Vendors |
| Square | 1:1 | 1200×1200 | 4 | Dashboard, Risks, Audits, Vendors |
| Portrait | 4:5 | 960×1200 | 4 | Dashboard, Risks, Audits, Vendors |

Plus de 2 logos (`logo-square-1200x1200.png`, `logo-landscape-1200x300.png`).

## Screenshot-keuze + risico-beoordeling

Van de 9 portal-screenshots in `public/screenshots/` heb ik er 4 gekozen
op basis van Google's "image consisting primarily of text" risico:

**Gebruikt (laag risico — visueel rijk):**
- `portal-dashboard.png` — KPI-kaarten, donut, riskmatrix, trendlijn
- `portal-risks.png` — 5x5 kleurmatrix, trendlijn, samenvattingskaarten
- `portal-audits.png` — 4 KPI-tegels, NC donut, status-badges
- `portal-vendors.png` — 3 charts (donut, bar, line)

**Niet gebruikt (hoger risico — te tekst-zwaar):**
- `portal-coach.png` — paragrafen + lange sidebar van labels
- `portal-documents.png` — pure data-tabel
- `portal-soa.png` — massieve tabel met ~50 rijen

## Compliance-checklist

Voor elke afbeelding gecontroleerd op de officiële Google-regels:

- [x] **Geen overlaid tekst** — alleen "naturally embedded" UI-tekst
      (Google's eigen uitzondering voor "photographed signage")
- [x] **Geen overlaid logo** — Control One logo zit IN de product-sidebar,
      niet als overlay erop geplakt
- [x] **Geen fake buttons** — alle knoppen zijn echte product-knoppen
- [x] **Geen collage** — één screenshot per asset
- [x] **Brand-blauw achtergrond** — geen all-white BG, geen digitaal
      samengestelde foto-achtergrond (gewoon brand-gradient)
- [x] **Beeld bleed-to-edge** — gradient vult de hele canvas, geen
      transparante randen of borders rond het ad
- [x] **Browser-chrome card heeft afgeronde hoeken inside, ad zelf heeft
      square edges** — voldoet aan "keep edges square"
- [x] **Niet wazig, niet geïnverteerd, geen filters**
- [x] **Product is focus** — neemt ~70-85% van canvas in (landscape/square)
      of ~50% (portrait) — alle binnen de 80%-blank-space-limiet
- [x] **Onder 5 MB** — alle bestanden < 150 KB

## Aanbevolen Performance Max upload

Upload alle 12 marketing-images + de 2 logos. Google rouleert zelf en
optimaliseert per placement. Bij minder dan 10 assets per aspect-ratio
verliest het algoritme optimalisatie-ruimte.

Houd 2-3 weken aan voor voldoende data per asset.

## Regenereren

Productie-script: `/tmp/make_ads.py`. Bewerk SOURCES of RATIOS array
en draai opnieuw:

```sh
python3 /tmp/make_ads.py public/ads-export/v2-product
```
