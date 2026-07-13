---
title: "Annex A 8.31: Scheiding van ontwikkel-, test- en productieomgevingen"
description: "Maatregel 8.31 van ISO 27001 Annex A eist gescheiden ontwikkel-, test- en productieomgevingen: aparte toegang, geen productiedata in test en beheerste promotie."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.31 eist dat ontwikkel-, test- en productieomgevingen gescheiden en beveiligd zijn: technisch gescheiden (aparte omgevingen, geen gedeelde databases), met verschillende toegangsrechten (ontwikkelaars niet standaard in productie), zonder productiedata in test- en ontwikkelomgevingen (8.33), en met een beheerste route waarlangs wijzigingen naar productie promoveren (8.32)."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.31", "otap", "omgevingen scheiden", "productieomgeving", "iso 27001"]
gerelateerd: ["annex-a-8-32-wijzigingsbeheer", "annex-a-8-33-testgegevens", "annex-a-8-25-veilige-ontwikkelcyclus"]
faq:
  - vraag: "Waarom mogen ontwikkelaars niet standaard bij productie?"
    antwoord: "Twee redenen: een fout of gecompromitteerd ontwikkelaarsaccount raakt anders direct de klanten en hun data, en de scheiding dwingt af dat wijzigingen via het beheerde proces gaan in plaats van rechtstreeks. Productietoegang voor troubleshooting kan, maar dan bewust: tijdelijk, gelogd en bij voorkeur via een aparte rol."
  - vraag: "Hoeveel omgevingen zijn nodig?"
    antwoord: "Minimaal een gescheiden ontwikkel/test-omgeving naast productie; het klassieke OTAP-model (ontwikkel, test, acceptatie, productie) is een middel, geen eis. Moderne pipelines met kortstondige review-omgevingen vervullen dezelfde functie. Het criterium: geen ongetest werk dat productie raakt, en geen productiedata buiten productie."
---

Annex A-maatregel 8.31 van ISO 27001, "Separation of development, test and production environments", voorkomt twee klassieke ongelukken: de ontwikkelaar die per ongeluk op productie werkt, en de testomgeving vol echte klantdata die niemand beveiligt.

## Wat eist de maatregel?

Ontwikkel-, test- en productieomgevingen worden gescheiden en beveiligd: regels voor de promotie van software tussen omgevingen, geen ontwikkeling of testwerk in productie, verschillende toegangsprofielen per omgeving, en zichtbaarheid welke omgeving je gebruikt (om vergissingen te voorkomen). Wijzigingen aan productie lopen via wijzigingsbeheer (8.32).

## Zo vul je hem in

1. **Scheid technisch**: aparte omgevingen met eigen databases, geheimen en accounts; testomgevingen niet publiek bereikbaar of ten minste afgeschermd.
2. **Differentieer de toegang**: ontwikkelaars vol in ontwikkel en test, productie alleen voor de deploy-rol en gericht troubleshooten (gelogd, 8.15); beheerrechten volgen 8.2.
3. **Beheers de promotie**: wijzigingen bereiken productie alleen via de pipeline met de checks van 8.28 en 8.29 en de goedkeuring van 8.32; geen handmatige aanpassingen rechtstreeks op productie.
4. **Houd testdata schoon**: geen productiekopieën in test; geanonimiseerde of synthetische data (8.11, 8.33).

## Waar let de auditor op?

De auditor vraagt hoe een wijziging van laptop naar productie reist en wie waar toegang heeft. De klassiekers: de gedeelde database tussen test en productie, echte klantdata in een onbeveiligde testomgeving, en de "tijdelijke" rechtstreekse productietoegang die permanent is geworden.
