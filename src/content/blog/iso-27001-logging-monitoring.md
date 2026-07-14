---
title: 'Logging en monitoring zonder eigen SOC: wat het MKB echt nodig heeft'
description: 'Je hoeft geen Security Operations Center te bouwen om aanvallen te detecteren. Zo richt je logging en monitoring in die past bij een MKB-budget.'
publishDate: 2026-07-29
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['logging monitoring iso 27001', 'soc mkb', 'detectie zonder soc', 'mdr']
---

Preventie is nooit volledig. Het verschil tussen een klein en een groot incident is vaak hoe snel je het ziet, en precies daar knijpt het bij veel MKB-organisaties: ze investeren in sloten, maar niemand kijkt of er iemand aan de deur morrelt. Toch hoef je geen [Security Operations Center](/kennis/iso-27001/wat-is-een-soc/) te bouwen om dat op te lossen.

## Wat vraagt ISO 27001?

Twee maatregelen werken samen: [logging](/kennis/iso-27001/annex-a-8-15-logging/) (8.15) zorgt dat er sporen worden vastgelegd, en [monitoringactiviteiten](/kennis/iso-27001/annex-a-8-16-monitoringactiviteiten/) (8.16) zorgen dat er iemand naar kijkt en reageert. Zonder logs is er niets te bewaken; zonder monitoring worden logs een archief dat niemand leest.

## De MKB-aanpak in drie lagen

1. **Activeer wat je al hebt.** Je identiteitsprovider (Microsoft Entra, Google Workspace) detecteert verdachte inlogs, onmogelijke reislocaties en MFA-omzeiling. Je EDR signaleert malwaregedrag. Vaak staat dit uit of leest niemand het, terwijl je licentie het al biedt.
2. **Zorg dat alerts landen.** Meldingen naar een bemande plek: een gedeelde mailbox, een kanaal of een beheerpartner, met een afspraak over reactietijden, ook rond vakanties.
3. **Definieer de opvolging.** Een alert is een gebeurtenis die de [triage](/kennis/iso-27001/annex-a-5-25-beoordeling-van-gebeurtenissen/) ingaat: incident of geen incident, en zo ja, wat nu?

## Wanneer heb je een SOC of MDR nodig?

| Situatie | Passende aanpak |
|---|---|
| Standaard MKB, kantooruren | Ingebouwde detectie + bemande opvolgroutine |
| Verhoogd risico of klantdata | Beheerde detectiedienst (MDR) |
| NIS2-plicht of 24/7-dienstverlening | Uitbesteed SOC of MDR met SLA |

Een uitbesteed [SOC of MDR](/kennis/iso-27001/wat-is-een-soc/) wordt logisch bij een hoger risicoprofiel, maar is voor veel organisaties niet de eerste stap.

> **Tip van Control One:** Het gevaarlijkste is niet géén monitoring, maar een dashboard vol rode meldingen waar al maanden niemand naar kijkt. Dat bewijst dat je proces niet werkt. Begin klein: één bron, één bemande mailbox, één opvolgafspraak. Beter dat dan tien feeds die niemand leest.

## Vergeet de kloksynchronisatie niet

Een detail met groot belang bij incidentonderzoek: zorg dat de klokken van je systemen [gesynchroniseerd](/kennis/iso-27001/annex-a-8-17-kloksynchronisatie/) zijn. Logs met verschillende tijden zijn niet te correleren, precies op het moment dat je dat het hardst nodig hebt.

De auditor vraagt: "hoe zou je merken dat een account is overgenomen?" en wil dan de detectie, de alertroute en een behandeld voorbeeld zien. Wil je weten of jouw detectie op orde is? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
