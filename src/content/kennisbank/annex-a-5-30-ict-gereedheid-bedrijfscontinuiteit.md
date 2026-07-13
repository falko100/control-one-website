---
title: "Annex A 5.30: ICT-gereedheid voor bedrijfscontinuïteit"
description: "Maatregel 5.30 van ISO 27001 Annex A eist dat ICT-continuïteit gepland, geïmplementeerd en getest wordt op basis van hersteldoelen (RTO/RPO). Zo pak je het aan."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.30, nieuw in de 2022-versie, eist dat de ICT-gereedheid voor bedrijfscontinuïteit wordt gepland, geïmplementeerd, onderhouden en getest. Kern: bepaal per kritisch systeem hoe snel het hersteld moet zijn (RTO) en hoeveel dataverlies acceptabel is (RPO), richt herstelvoorzieningen in die dat waarmaken (back-ups, uitwijk) en bewijs het met periodieke hersteltests."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.30", "ict-continuïteit", "rto", "rpo", "hersteltest", "iso 27001"]
gerelateerd: ["annex-a-5-29-beveiliging-tijdens-verstoring", "risicoanalyse-uitvoeren", "wat-is-annex-a"]
faq:
  - vraag: "Wat zijn RTO en RPO?"
    antwoord: "RTO (Recovery Time Objective) is de maximale tijd die herstel van een systeem mag duren; RPO (Recovery Point Objective) is het maximale dataverlies, uitgedrukt in tijd (bijvoorbeeld: maximaal 24 uur aan data kwijt). Samen bepalen ze hoe zwaar de herstelvoorzieningen moeten zijn."
  - vraag: "Hoe vaak moet je herstel testen?"
    antwoord: "Minimaal jaarlijks een echte hersteltest van kritische systemen: daadwerkelijk terugzetten uit back-up en controleren dat het werkt en binnen de RTO past. Een back-up die nooit is teruggezet, is een aanname, geen voorziening."
---

Annex A-maatregel 5.30 van ISO 27001, "ICT readiness for business continuity", is nieuw in de 2022-versie. De eis: de ICT-kant van bedrijfscontinuïteit moet gepland, ingericht en aantoonbaar getest zijn.

## Wat eist de maatregel?

Op basis van de bedrijfsimpactanalyse bepaalt de organisatie welke ICT-diensten kritisch zijn en welke hersteleisen gelden (RTO en RPO). Daarop worden voorzieningen ingericht: back-ups, redundantie, uitwijkmogelijkheden en herstelprocedures, met een organisatiestructuur en verantwoordelijken. Het geheel wordt onderhouden en periodiek getest.

## Zo vul je hem in

1. **Bepaal per kritisch systeem RTO en RPO**: hoeveel uur mag de boekhouding, de productieomgeving of de mail plat liggen, en hoeveel dataverlies is te dragen? Laat de business dit bepalen, niet IT alleen.
2. **Richt de voorzieningen ernaar in**: back-ups volgens de 3-2-1-regel (drie kopieën, twee media, één offsite of offline), en let bij SaaS op wat de leverancier écht garandeert versus wat je zelf moet regelen.
3. **Schrijf herstelprocedures**: wie herstelt wat in welke volgorde, met de aannames expliciet (toegang tot wachtwoorden en sleutels als de primaire omgeving plat ligt).
4. **Test jaarlijks echt**: een hersteltest van minimaal de kritische systemen, met registratie van de uitkomst en de gehaalde tijden; los afwijkingen op.

## Waar let de auditor op?

Drie vragen: zijn de hersteldoelen vastgesteld en bestuurlijk gedragen, passen de voorzieningen erbij, en is er bewijs van een geslaagde hersteltest? De klassieke bevindingen: back-ups die jaren draaien maar nooit zijn getest, RTO's die nergens zijn vastgelegd, en ransomware-scenario's waarin de back-up aan hetzelfde domein hangt als de productie.
