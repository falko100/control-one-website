---
title: 'Kwetsbaarhedenscan: hoe interpreteer en volg je de resultaten op?'
description: 'Een scan die duizend bevindingen oplevert en niemand die ze oppakt, is nutteloos. Zo prioriteer en verwerk je kwetsbaarheden volgens ISO 27001.'
publishDate: 2026-08-02
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['kwetsbaarhedenscan', 'vulnerability management', 'patchbeleid iso 27001', 'kwetsbaarheden opvolgen']
---

Tussen de publicatie van een kwetsbaarheid en het eerste misbruik zitten soms nog maar uren. Een kwetsbaarhedenscan maakt zichtbaar waar je kwetsbaar bent, maar een scan die duizend bevindingen oplevert en waar niemand iets mee doet, is erger dan geen scan: hij geeft schijnzekerheid. Het gaat om de opvolging.

## Wat vraagt ISO 27001?

[Annex A-maatregel 8.8](/kennis/iso-27001/annex-a-8-8-technische-kwetsbaarheden/) vraagt drie dingen, doorlopend: informatie over kwetsbaarheden verkrijgen, de blootstelling beoordelen, en maatregelen nemen. De scan levert de eerste stap; de kunst zit in de tweede en derde.

## Van scanresultaat naar actie

Een scanner rapporteert op ernst (kritiek, hoog, gemiddeld, laag), maar die score alleen bepaalt niet je prioriteit. Weeg mee:

- **Is de kwetsbaarheid extern bereikbaar?** Een gat op een internet-facing systeem weegt zwaarder dan hetzelfde gat op een intern systeem.
- **Wordt hij actief misbruikt?** Bronnen zoals de bekende-misbruikte-kwetsbaarhedenlijsten helpen prioriteren.
- **Wat draait erop?** Een kwetsbaarheid op een kritisch systeem uit je [assetregister](/kennis/iso-27001/annex-a-5-9-inventarisatie-van-bedrijfsmiddelen/) telt zwaarder.

## Stel patchtermijnen vast

| Ernst | Gangbare termijn |
|---|---|
| Kritiek, actief misbruikt | Binnen 72 uur tot een week |
| Hoog | Binnen twee weken |
| Overig | In de maandelijkse cyclus |

Belangrijker dan de exacte termijn is dat je er een hebt, hem haalt en uitzonderingen documenteert met compenserende maatregelen.

> **Tip van Control One:** De vergeethoeken zijn dodelijk: firmware van firewalls, switches en NAS-apparaten, en die ene legacy-applicatie. Juist daar blijven kwetsbaarheden jaren openstaan. Automatiseer de basis (werkplekken, browsers, telefoons) en houd de vergeethoeken in een aparte lijst.

## Combineer met threat intelligence

De scan is een momentopname; [dreigingsinformatie](/kennis/iso-27001/annex-a-5-7-dreigingsinformatie/) uit NCSC-adviezen en leveranciersbulletins triggert beoordelingen buiten de reguliere cyclus. Samen vormen ze een doorlopend proces in plaats van een jaarlijkse foto.

De auditor wil de keten zien: het patchbeleid met termijnen, een recent scanrapport, en de afhandeling van de laatste kritieke kwetsbaarheid. Wil je weten waar jouw kwetsbaarhedenbeheer staat? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
