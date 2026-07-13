---
title: "Annex A 7.11: Ondersteunende nutsvoorzieningen"
description: "Maatregel 7.11 van ISO 27001 Annex A eist bescherming tegen uitval van stroom, koeling en internet. UPS, noodstroom en redundantie proportioneel ingericht."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.11 eist dat informatievoorzieningen worden beschermd tegen stroomuitval en andere verstoringen door falende nutsvoorzieningen: elektriciteit, koeling, ventilatie en internetverbinding. Proportionele MKB-invulling: een UPS die de kritieke apparatuur netjes laat afsluiten, temperatuurbewaking, een tweede internetroute (bijvoorbeeld 4G/5G-failover) waar de afhankelijkheid groot is, en periodieke tests."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.11", "nutsvoorzieningen", "ups", "noodstroom", "stroomuitval", "iso 27001"]
gerelateerd: ["annex-a-7-5-fysieke-en-omgevingsdreigingen", "annex-a-5-30-ict-gereedheid-bedrijfscontinuiteit", "annex-a-7-8-plaatsing-en-bescherming-apparatuur"]
faq:
  - vraag: "Is een UPS verplicht?"
    antwoord: "Niet letterlijk, maar voor lokale servers en netwerkapparatuur is een UPS de standaard-invulling: hij vangt korte dips op en geeft tijd om netjes af te sluiten bij langere uitval, wat datacorruptie voorkomt. Cloud-first organisaties leggen het zwaartepunt bij de internetverbinding: die is dan de kritieke nutsvoorziening."
  - vraag: "Hoe test je deze voorzieningen?"
    antwoord: "Periodiek en gepland: de UPS jaarlijks belasten (of de zelftest controleren en de accu-leeftijd bewaken), de internet-failover echt laten omschakelen, en de temperatuuralarmering testen. Een UPS met een zes jaar oude accu is een schijnzekerheid."
---

Annex A-maatregel 7.11 van ISO 27001, "Supporting utilities", beschermt tegen de saaiste uitvalsoorzaak die er is: geen aanval, maar een stroomstoring, een uitgevallen airco of een gebroken glasvezel.

## Wat eist de maatregel?

Informatieverwerkende faciliteiten worden beschermd tegen stroomuitval en andere verstoringen veroorzaakt door falen van ondersteunende voorzieningen: elektriciteit, telecommunicatie, koeling en ventilatie. Voorzieningen worden passend gedimensioneerd, periodiek geïnspecteerd en getest, en waar het risico het vraagt redundant uitgevoerd.

## Zo vul je hem in

1. **UPS op het kritieke spul**: servers, opslag en kernnetwerkapparatuur aan een UPS met automatische nette afsluiting; bewaak de accustatus en vervang op tijd.
2. **Bewaak het klimaat**: temperatuurbewaking met alarmering in de apparatuurruimte (sluit aan op 7.8); bij zwaardere afhankelijkheid redundante koeling.
3. **Maak internet redundant waar nodig**: voor cloud-afhankelijke organisaties is de verbinding de levensader; een automatische failover naar een tweede route (ander medium, bijvoorbeeld 4G/5G) is relatief goedkoop.
4. **Test periodiek**: geplande tests van UPS, failover en alarmering, met registratie; neem de bevindingen mee in het onderhoud (7.13).

## Waar let de auditor op?

De auditor vraagt wat er gebeurt bij stroomuitval en wanneer dat voor het laatst getest is. De klassiekers: de UPS die bij de eerste echte storing binnen een minuut leeg bleek, de airco-uitval die pas werd ontdekt toen de servers zichzelf uitschakelden, en nul redundantie op de internetverbinding terwijl alles in de cloud draait.
