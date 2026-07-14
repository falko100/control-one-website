---
title: 'Je ISMS inrichten in Microsoft 365: de maatregelen die er al zijn'
description: 'Draai je op Microsoft 365, dan zit een groot deel van je ISO 27001-maatregelen al in je licentie. Zo benut je wat je hebt in plaats van iets nieuws te kopen.'
publishDate: 2026-09-21
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['iso 27001 microsoft 365', 'm365 beveiliging', 'isms microsoft', 'entra id beveiliging']
---

Veel MKB-organisaties draaien op Microsoft 365, en denken dat ISO 27001 een berg nieuwe tooling vereist. In werkelijkheid zit een groot deel van de [Annex A-maatregelen](/kennis/iso-27001/wat-is-annex-a/) al in je licentie; het gaat erom ze aan te zetten en te configureren.

## Wat je al hebt

| Maatregel | Microsoft 365-invulling |
|---|---|
| [Veilige authenticatie](/kennis/iso-27001/annex-a-8-5-veilige-authenticatie/) (8.5) | MFA en conditional access via Entra ID |
| [Toegangsbeheer](/kennis/iso-27001/annex-a-5-15-toegangsbeveiliging/) (5.15) | Rolgebaseerde toegang, groepsbeleid |
| [Malwarebescherming](/kennis/iso-27001/annex-a-8-7-bescherming-tegen-malware/) (8.7) | Defender voor Endpoint |
| [Logging](/kennis/iso-27001/annex-a-8-15-logging/) (8.15) | Audit logs, sign-in logs |
| [DLP](/kennis/iso-27001/annex-a-8-12-preventie-van-gegevenslekken/) (8.12) | Ingebouwde DLP-regels |
| [Classificatie](/kennis/iso-27001/annex-a-5-12-classificatie-van-informatie/) (5.12) | Gevoeligheidslabels |

## De secure score als startpunt

Microsoft 365 heeft een secure score: een dashboard dat je huidige beveiligingsniveau meet en concrete verbeteracties voorstelt, geprioriteerd op impact. Het is een uitstekend startpunt voor je [configuratiebeheer](/kennis/iso-27001/annex-a-8-9-configuratiebeheer/): begin bij de aanbevelingen met de hoogste impact.

## De vier eerste stappen

1. **MFA voor iedereen,** zonder uitzonderingen, via Entra ID conditional access.
2. **Blokkeer verouderde protocollen** (legacy authentication) die MFA omzeilen.
3. **Zet audit logging aan** en verleng de bewaartermijn waar de standaard te kort is.
4. **Activeer de risicodetectie:** verdachte inlogs, onmogelijke reislocaties, gecompromitteerde accounts.

> **Tip van Control One:** Let op de licentieniveaus. Sommige krachtige functies (uitgebreide conditional access, geavanceerde DLP, langere logbewaring) zitten in de hogere abonnementen. Weeg per organisatie of de upgrade zich terugbetaalt; vaak is één niveau hoger goedkoper dan losse securitytooling erbij kopen.

## Vergeet de eigen data-back-up niet

Één misverstand blijft hardnekkig: Microsoft maakt geen [back-up](/kennis/iso-27001/annex-a-8-13-back-up-van-informatie/) van jouw data tegen jouw fouten of ransomware. De [gedeelde verantwoordelijkheid](/kennis/iso-27001/annex-a-5-23-clouddiensten/) legt dat bij jou. Een aparte Microsoft 365-back-up is voor kritische data de standaard.

Wie op Microsoft 365 draait, staat vaak dichter bij ISO 27001 dan gedacht. Wil je weten welke maatregelen je al hebt en welke nog missen? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
