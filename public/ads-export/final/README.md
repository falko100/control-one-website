# Control One — Definitieve Google Ads set

**11 bestanden** (9 marketing-images + 2 logo's), klaar voor upload naar
Google Ads Performance Max of Responsive Display Ads.

## Inhoud

| Type | Aspect | Pixels | Aantal | Modules |
|---|---|---|---|---|
| Landscape | 1.91:1 | 1200×628 | 3 | dashboard, risks, coach |
| Square | 1:1 | 1200×1200 | 3 | dashboard, risks, coach |
| Portrait | 4:5 | 960×1200 | 3 | dashboard, risks, coach |
| Logo square | 1:1 | 1200×1200 | 1 | wordmark op wit |
| Logo landscape | 4:1 | 1200×300 | 1 | wordmark op wit |

Alle bestanden < 130 KB, totaal ~1 MB.

## Visueel concept

Browser-chrome card met portal-screenshot binnenin op een diagonale
brand-blauw gradient. **Dezelfde stijl als de framework-pagina's** op
control-one.nl. Per ad:

1. **Brand-blauw gradient achtergrond** (#1e3a6f → #2554a0) met subtiele radiale glows
2. **Browser-chrome card** met afgeronde hoeken en drop-shadow
3. **Verkeerslichten** + **URL-chip** met de echte portal-route
4. **Schermafdruk** auto-getrimmed van lege scroll-ruimte
5. **Geen overlays** — geen tekst, geen extra logo's, geen fake buttons

## Module-keuze rationale

Van 9 beschikbare portal-screenshots gekozen op basis van:

### Gebruikt — 3 modules, allemaal sterk

| Module | Waarom |
|---|---|
| **Dashboard** | KPI-tegels + donut + risk-matrix + trendlijn — overall ISO platform |
| **Risks** | 5x5 kleurmatrix met rood/geel/groen — meest "compliance" visual |
| **Coach** | 28-stappen implementatieguide — **uniek voor Control One**, concurrenten zoals Vanta/Drata/Secureframe hebben dit niet |

### Niet gebruikt

| Module | Reden |
|---|---|
| Audits | Demo-data is leeg (gray donut, KPI's op 0) → niet aantrekkelijk |
| Vendors | Dashboard is laag/breed → te veel brand-blauw padding in portrait |
| Coach (text panel) | Rechter paragrafen — te veel tekst, "image consisting primarily of text" risico |
| Documents | Pure data-tabel |
| SOA | Massieve tabel met ~50 rijen |

### Strategisch

**Coach is de killer.** Concurrent-onderzoek via Google Ads Transparency
Center toont:
- **Vanta** (US): 600 ads, slechts 15 image — gebruikt brand-illustraties
- **Drata** (US): 300 ads — RDA's met tekst + klein product-widget
- **Secureframe**: vooral Search ads

Coach is iets dat zij **niet hebben**. Een visueel-gestructureerde guide
met 28 stappen onderscheidt Control One direct van de concurrentie en
spreekt de buyer aan die overweldigd is door waar te beginnen.

## Compliance met Google's regels

Alle assets voldoen aan de officiële richtlijnen uit
[support.google.com/google-ads/answer/9823397](https://support.google.com/google-ads/answer/9823397):

- ✅ **Geen overlaid tekst** — alleen "naturally embedded" UI-tekst
- ✅ **Geen overlaid logo** — Control One logo zit IN de product-sidebar
- ✅ **Geen fake buttons** — alle knoppen zijn echte product-knoppen
- ✅ **Geen collage** — één screenshot per asset
- ✅ **Brand-gradient achtergrond** is toegestaan
- ✅ **Beeld bleed-to-edge** — gradient vult de hele canvas
- ✅ **Square edges** op het ad zelf
- ✅ **Niet wazig, niet geïnverteerd, geen filters**
- ✅ **Product is focus** — 70-85% van canvas (landscape/square), ~50% (portrait)

## Vorige reden voor afkeur (mei 2026)

De oorspronkelijke set in `../ads-export/` werd afgewezen omdat:
1. ❌ Grote tekst-overlay ("4 normen. 1 platform.")
2. ❌ Fake CTA-button ("▶ Start Gratis in 1 Minuut")
3. ❌ Logo-overlay top-left
4. ❌ Collage-compositie (4 vakjes)

Deze final set vermijdt al deze vier issues.

## Upload-instructies

**Voor één Performance Max asset group:**

1. Upload alle **9 marketing-images** (3 landscape + 3 square + 3 portrait)
2. Upload **beide logo's** (square + landscape)
3. Vul de tekstvelden in de Ads-UI:
   - **Headlines** (3-5 stuks, max 30 tekens): "ISO 27001 in 3 maanden",
     "Compliance zonder consultant", "Probeer 14 dagen gratis", etc.
   - **Descriptions** (2 stuks, max 90 tekens)
   - **Final URL**: `https://control-one.nl/`
4. Laat Google 2-3 weken rouleren voor voldoende data

## Regenereren

Productie-script: `/tmp/make_ads_final.py`

```sh
/opt/homebrew/bin/python3 /tmp/make_ads_final.py \
  public/ads-export/final
```

Voor coach-crops zie inline scripts (verschillende crops per ratio i.v.m.
portrait-shape van coach screenshot).
