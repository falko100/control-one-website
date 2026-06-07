# Google Ads — schone afbeeldingenset (v2)

Deze map bevat een complete set Google Ads afbeeldingen die voldoen aan
Google's strenge beeldrichtlijnen voor Responsive Display Ads / Performance Max.

## Waarom een v2

De vorige set in `ads-export/` bevatte tekst-overlays, fake play-buttons,
overlay-logo's en collage-composities. Dat zijn vier aparte redenen waarop
Google afbeeldingen direct afkeurt. Deze v2-set vermijdt ze allemaal.

## Inhoud (20 bestanden)

| Type | Ratio | Pixels | Aantal | Bron |
|---|---|---|---|---|
| Marketing landscape | 1.91:1 | 1200×628 | 6 | office × 5, portal-dashboard |
| Marketing square | 1:1 | 1200×1200 | 6 | office × 5, portal-dashboard |
| Marketing portrait | 4:5 | 960×1200 | 6 | office × 5, portal-dashboard |
| Logo square | 1:1 | 1200×1200 | 1 | Control One wordmark op wit |
| Logo landscape | 4:1 | 1200×300 | 1 | Control One wordmark op wit |

Alle bestanden zijn JPG (marketing) of PNG (logo's), elk onder 200 KB
(ver onder de 5 MB limiet die Google hanteert).

## Compliance-checklist

Voor elke afbeelding gecontroleerd op de officiële Google-regels uit
[support.google.com/google-ads/answer/9823397](https://support.google.com/google-ads/answer/9823397):

- [x] **Geen tekst-overlay** op de afbeelding (headlines geef je in de Ads-UI op)
- [x] **Geen logo-overlay** op marketing images (logo komt apart in een ander veld)
- [x] **Geen fake buttons** ("play", "download", "start gratis")
- [x] **Geen collage** of meerdere foto's gecombineerd in één frame
- [x] **Geen digitaal samengestelde of all-white achtergrond** (alle bronnen
      zijn echte foto's van de Control One office of een real-time
      productschermafdruk)
- [x] **Niet wazig, niet upside-down, niet gespiegeld, geen filters**
- [x] **Geen zwarte balken / borders / frames** — beeld vult de hele aspect
- [x] **Product/dienst is focus** — laptops met code zichtbaar (office) of
      het productdashboard zelf
- [x] **Minder dan 80% lege ruimte** in de compositie

## Aanbevolen gebruik in Google Ads

**Voor één Responsive Display Ad asset group:**
1. Upload 5 landscape (1.91:1) marketing images
2. Upload 5 square (1:1) marketing images
3. Upload 3-5 portrait (4:5) marketing images
4. Upload beide logo-varianten
5. Geef de headlines/descriptions in als tekstvelden in de Ads-UI

Google rouleert vervolgens zelf en optimaliseert per placement. Houd
2-3 weken aan om voldoende data te krijgen voor performance-vergelijking.

## Bronlocatie

Originelen staan in:
- `/public/team/office-1.webp` t/m `office-5.webp`
- `/public/screenshots/portal-dashboard.png`
- `/public/logo.svg` (gerenderd via qlmanage)

## Regenereren

Productie-script staat in dezelfde map (zie commits / git history). Kort:
`ffmpeg -i <bron> -vf "scale=W:H:force_original_aspect_ratio=increase,crop=W:H" output.jpg`
