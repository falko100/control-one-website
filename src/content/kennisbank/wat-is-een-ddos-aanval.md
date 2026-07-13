---
title: "Wat is een DDoS-aanval?"
description: "Een DDoS-aanval overspoelt een dienst met verkeer tot hij onbereikbaar wordt. Wie geraakt worden, welke bescherming realistisch is en wat je vooraf regelt."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een DDoS-aanval (distributed denial of service) overspoelt een website, API of verbinding met verkeer vanaf duizenden gekaapte apparaten tegelijk, tot de dienst voor echte gebruikers onbereikbaar is. Het raakt de beschikbaarheid, niet de vertrouwelijkheid: er wordt niets gestolen, maar stilstand kost omzet en reputatie. Bescherming is een leveranciersvraag: CDN/anti-DDoS-diensten voor je website en API's, de afspraken van je hostingpartij, en een draaiboek voor als het gebeurt."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["ddos", "denial of service", "beschikbaarheid", "anti-ddos"]
gerelateerd: ["annex-a-8-14-redundantie", "wat-is-de-biv-driehoek", "annex-a-5-24-incidentbeheer-planning"]
faq:
  - vraag: "Is een klein bedrijf een DDoS-doelwit?"
    antwoord: "Vaker dan gedacht: aanvallen zijn voor enkele tientjes te huur en worden ingezet door afpersers ('betaal of je shop blijft plat'), boze ex-klanten of concurrenten, en soms tref je bijvangst van een aanval op je hostingprovider. Webshops en SaaS-diensten met omzetafhankelijke uptime zijn de logische doelwitten."
  - vraag: "Helpt meer bandbreedte of een zwaardere server?"
    antwoord: "Nauwelijks: moderne aanvallen halen volumes die geen enkele eigen verbinding aankan. Het werkende model is absorptie in de infrastructuur van een grote partij: een CDN/anti-DDoS-laag (zoals Cloudflare of de dienst van je cloudprovider) die het aanvalsverkeer wereldwijd verspreid opvangt en filtert vóór het jouw omgeving bereikt."
---

Een DDoS-aanval is digitale verkeersopstopping met opzet: duizenden gekaapte apparaten (een botnet) sturen tegelijk verkeer naar één doelwit, tot de website, API of internetverbinding bezwijkt onder het volume en echte gebruikers er niet meer bij kunnen.

## Wat er gebeurt en wat het kost

DDoS raakt van de BIV-driehoek puur de **beschikbaarheid**: er wordt niets gestolen of gewijzigd, maar de dienst is weg. De schade is navenant: gemiste omzet per uur stilstand, supportdruk, reputatie ("jullie site ligt er alwéér uit") en soms een afpersingsbrief die aanbiedt te stoppen tegen betaling. Aanvallen duren van minuten (demonstratie bij de afpersing) tot dagen, en zijn voor aanvallers spotgoedkoop te huren.

## Realistische bescherming

Zelf een aanval opvangen is voor het MKB kansloos; de bescherming is een keten van leverancierskeuzes:

1. **Zet je publieke diensten achter een anti-DDoS-laag**: een CDN met DDoS-bescherming (Cloudflare en soortgelijken, ook in gratis en goedkope varianten) of de anti-DDoS-dienst van je cloudplatform absorbeert en filtert het volume vóór het jou bereikt.
2. **Ken de afspraken van je hosting- en internetleverancier** (8.21): welke bescherming zit er standaard bij, wat gebeurt er bij een aanval (null-routing betekent: jouw dienst wordt afgesloten om de rest te redden), en wat kost een hoger beschermingsniveau?
3. **Verklein het doelwit**: beheerinterfaces en niet-publieke systemen horen niet publiek bereikbaar; wat internet niet kan zien, kan het niet overspoelen.
4. **Draaiboek klaar**: DDoS is een scenario voor het incidentproces (5.24): wie belt de leverancier, hoe communiceer je met klanten bij uitval, en wanneer schakel je op naar een hoger beschermingsniveau.

Binnen ISO 27001 valt DDoS onder de beschikbaarheidsrisico's in de risicoanalyse, met de maatregelen verdeeld over redundantie (8.14), netwerkdiensten (8.21) en incidentrespons. De nuchtere toets: weet je wat er nu zou gebeuren als je site vanmiddag wordt aangevallen, en wie je dan belt?
