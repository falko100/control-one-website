# Kennisbank-plan: 1000 artikelen voor SEO en GEO

Doel: de grootste Nederlandstalige ISO-kennisbank bouwen die (1) leken volledig informeert, (2) als naslagwerk dient tijdens implementatie, (3) organisch verkeer wint via zoekmachines (SEO) en (4) geciteerd wordt door AI-assistenten zoals ChatGPT, Perplexity en Google AI Overviews (GEO).

## 1. Onderzoeksconclusies SEO en GEO (2026)

### GEO (Generative Engine Optimization)
AI-zoekmachines halen antwoorden uit pagina's via retrieval-pipelines. Wat citaties oplevert:

1. **Definitie-eerst openen.** De eerste 150-200 tokens wegen onevenredig zwaar. Elk artikel opent met een direct, feitelijk antwoord op de titelvraag, als gewone alinea (geen quote-blok), beginnend met de kernterm.
2. **Vraag-gedreven structuur.** H2-koppen geformuleerd zoals gebruikers vragen stellen ("Wat kost ISO 27001-certificering?").
3. **Feitendichtheid boven keyworddichtheid.** Concrete getallen, termijnen, bedragen en normverwijzingen (clausulenummers) maken content citeerbaar.
4. **FAQ-secties met FAQPage-schema** die echte prompts spiegelen.
5. **Versheid.** Zichtbare "laatst bijgewerkt"-datum + gestructureerde dateModified; verouderde content verliest citatie-prioriteit.
6. **Structured data stapelen**: Article + BreadcrumbList + FAQPage per artikel.
7. **Toegankelijk voor AI-crawlers**: robots.txt niet blokkeren, llms.txt aanbieden, content server-side gerenderd (Astro is statisch: ideaal).
8. **Eigen data en ervaring** (praktijkcijfers uit trajecten) geven een reden om óns te citeren i.p.v. generieke bronnen.

### SEO (klassiek)
1. **Topical authority via clusters**: pijlerpagina's (2500+ woorden) per hoofdonderwerp, met clusters eromheen; goed geclusterde content scoort tot ~40% meer verkeer en houdt rankings ~2,5x langer.
2. **Interne links**: elk clusterartikel linkt naar zijn pijler (met keyword-anker) en 2-5 zusterartikelen per 1000 woorden; bidirectioneel.
3. **Architectuur**: elk artikel binnen 3 klikken vanaf home; silo-structuur per norm.
4. **Zoekintentie matchen**: informatieve intentie krijgt informatieve pagina's; commerciële verwijzing (Control One) als contextueel blok, niet als hoofdinhoud.

Bronnen: [Search Engine Land GEO-gids](https://searchengineland.com/mastering-generative-engine-optimization-in-2026-full-guide-469142), [Google's AI-optimalisatiegids](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [GenOptima GEO playbook](https://www.gen-optima.com/blog/generative-engine-optimization-best-practices-complete-2026-playbook/), [Search Engine Land topic clusters](https://searchengineland.com/guide/topic-clusters), [Conductor topic cluster gids](https://www.conductor.com/academy/topic-clusters/), [Digital Applied content clusters 2026](https://www.digitalapplied.com/blog/seo-content-clusters-2026-topic-authority-guide).

## 2. Positionering binnen de site

- **/kennis** is de publieke kennisbank-hub; de bestaande module-marketingpagina blijft op /kennisbank staan.
- **/blog** blijft bestaan voor actualiteit en opinie; de kennisbank is tijdloos naslagwerk. Blogartikelen linken naar kennisbank-artikelen als bron.
- URL-structuur: `/kennis/[norm]/[slug]` met normen: `iso-27001`, `iso-9001`, `iso-14001`, `iso-45001`, `algemeen`. Sterke silo's, nette breadcrumbs, alles op 2 klikken van de hub.

## 3. Taxonomie: zo komen we systematisch aan 1000 artikelen

Zes artikeltypen (categorieën), systematisch per norm uitgerold:

| Type | Omschrijving | Voorbeeld |
|---|---|---|
| **normeisen** | Elk clausule- en maatregel-artikel afzonderlijk | "Annex A 5.1: Beleid voor informatiebeveiliging" |
| **stappenplannen** | How-to's met concrete stappen | "Risicoanalyse uitvoeren in 6 stappen" |
| **begrippen** | Woordenboek-artikelen, kort en definitie-eerst | "Wat is een ISMS?" |
| **vragen** | Veelgestelde vragen als volwaardig artikel | "Wat kost ISO 27001-certificering?" |
| **vergelijkingen** | X vs. Y, keuzehulpen | "ISO 27001 vs. NEN 7510" |
| **sjablonen** | Toelichting per verplicht document | "Zo schrijf je een informatiebeveiligingsbeleid" |

### Verdeling (totaal ~1000)

| Norm | Normeisen | Stappenplannen | Begrippen | Vragen | Vergelijkingen | Sjablonen | Totaal |
|---|---|---|---|---|---|---|---|
| ISO 27001 | 123 (30 clausules + 93 Annex A) | 90 | 40 | 80 | 20 | 25 | **378** |
| ISO 9001 | 45 (alle sub-clausules) | 75 | 35 | 75 | 15 | 25 | **270** |
| ISO 14001 | 30 | 25 | 15 | 30 | 5 | 10 | **115** |
| ISO 45001 | 30 | 25 | 15 | 30 | 5 | 10 | **115** |
| Algemeen (certificering, audits, AVG/NIS2, PDCA...) | - | 30 | 45 | 35 | 12 | - | **122** |
| **Totaal** | 228 | 245 | 150 | 250 | 57 | 70 | **1000** |

De normeisen-artikelen zijn de ruggengraat: ze zijn eindig, opsombaar en dekken gegarandeerd het hele domein (topical authority). Per norm is er één pijlerpagina ("Wat is ISO 27001?", 2500+ woorden) waar alle clusterartikelen naartoe linken.

## 4. Artikeltemplate (elke pagina identiek opgebouwd)

1. **Breadcrumb** (Kennisbank → Norm → Artikel) + categorie-badge + leestijd + zichtbare "laatst bijgewerkt"
2. **H1** als vraag of onderwerp
3. **Direct antwoord** (2-4 zinnen, definitie-eerst, feitdicht): het GEO answer-block, in frontmatter als `tldr`
4. **Inhoudsopgave** (automatisch uit H2's, sticky op desktop)
5. **Body**: H2's als vragen, korte alinea's, tabellen en lijsten waar het kan, clausulenummers en concrete getallen
6. **Control One-blok** (vast component): "Zo werkt dit in Control One", 2-3 zinnen + link naar relevante feature-pagina. Contextueel, geen verkooppraatje
7. **FAQ** (3-5 vragen) met FAQPage-schema
8. **Gerelateerde artikelen** (uit frontmatter + zelfde categorie)
9. **Schema**: Article + BreadcrumbList + FAQPage; datePublished + dateModified

Schrijfrichtlijnen: geen em dashes, "de portal", B1-taalniveau voor leken-artikelen, elk jargon bij eerste gebruik uitleggen, 600-1200 woorden per clusterartikel (begrippen 300-500, pijlers 2500+), elk artikel minimaal 3 interne links.

## 5. Techniek

- **Astro content collection** `kennisbank` met frontmatter-schema (norm, categorie, tldr, faq, gerelateerd, updatedDate...)
- **Pagina's**: hub (/kennisbank), normpagina's (/kennisbank/[norm]/), artikelpagina ([slug]), categoriefilters op normpagina's
- **Zoekfunctie**: build-time JSON-index (titel, beschrijving, keywords, norm, categorie) + client-side fuzzy search met live suggesties; laadt lazy bij focus op het zoekveld
- **llms.txt** in public/ met uitleg over de site en verwijzing naar de kennisbank (GEO)
- Sitemap draait al via @astrojs/sitemap

## 6. Fasering

| Fase | Inhoud | Omvang |
|---|---|---|
| **F1 (nu)** | Infrastructuur + design + zoekfunctie + 12 seed-artikelen die alle types demonstreren | 12 |
| **F2** | Pijlers (4 normen) + top-50 vraag-artikelen (hoogste zoekvolume: kosten, duur, verplicht, verschil) | ~55 |
| **F3** | ISO 27001 normeisen compleet (93 Annex A + clausules), hergebruik portal-content | ~125 |
| **F4** | ISO 9001 normeisen + stappenplannen | ~120 |
| **F5** | Begrippen + resterende vragen (batches van 50) | ~400 |
| **F6** | 14001/45001 + vergelijkingen + sjablonen | ~290 |

Batches worden per sessie geproduceerd (50-100 artikelen per keer is haalbaar), altijd via het vaste template zodat kwaliteit en schema consistent blijven. Bestaande bronnen om te hergebruiken: de 100 blogartikelen, de portal-kennisbankcontent (via MCP), de ISO 9001-normteksten in docs/, en de Startgids.
