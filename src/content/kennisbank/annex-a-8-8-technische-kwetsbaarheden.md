---
title: "Annex A 8.8: Beheer van technische kwetsbaarheden"
description: "Maatregel 8.8 van ISO 27001 Annex A eist tijdig zicht op en afhandeling van technische kwetsbaarheden: patchmanagement, scanning en prioritering uitgelegd."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.8 eist dat informatie over technische kwetsbaarheden tijdig wordt verkregen, de blootstelling wordt beoordeeld en passende maatregelen worden genomen. In de praktijk: automatische updates waar mogelijk, een patchproces met termijnen naar ernst (kritiek binnen dagen), periodieke kwetsbaarheidsscans of pentests, en dekking van de volle breedte: werkplekken, servers, netwerkapparatuur en firmware."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.8", "kwetsbaarheden", "patchmanagement", "vulnerability management", "iso 27001"]
gerelateerd: ["annex-a-8-7-bescherming-tegen-malware", "annex-a-5-7-dreigingsinformatie", "annex-a-8-9-configuratiebeheer"]
faq:
  - vraag: "Welke patchtermijnen zijn gangbaar?"
    antwoord: "Een veelgebruikte indeling: kritieke kwetsbaarheden die actief worden misbruikt binnen 72 uur tot een week, hoge binnen twee weken, overige in de maandelijkse cyclus. Belangrijker dan de exacte termijn is dat je er een hebt, hem haalt en uitzonderingen documenteert."
  - vraag: "Is een jaarlijkse pentest verplicht?"
    antwoord: "De norm schrijft geen pentest voor, maar eist zicht op kwetsbaarheden. Een periodieke kwetsbaarheidsscan (doorlopend of maandelijks) plus een gerichte pentest bij belangrijke wijzigingen of jaarlijks is de gangbare invulling; het ondersteunt ook maatregel 5.35."
---

Annex A-maatregel 8.8 van ISO 27001, "Management of technical vulnerabilities", adresseert de racecondities van moderne beveiliging: tussen de publicatie van een kwetsbaarheid en het eerste misbruik zitten soms nog maar uren.

## Wat eist de maatregel?

Drie stappen, doorlopend: **informatie verkrijgen** over kwetsbaarheden in de gebruikte systemen (daarvoor moet je weten wat je hebt: het assetregister van 5.9 en de dreigingsinformatie van 5.7), **blootstelling beoordelen** (raakt het ons, hoe erg, is er al misbruik?) en **maatregelen nemen**: patchen, mitigeren of gemotiveerd accepteren, binnen termijnen die passen bij het risico.

## Zo vul je hem in

1. **Automatiseer de basis**: automatische updates op werkplekken, browsers en telefoons; beheerde updateringen voor servers met een testmoment waar dat nodig is.
2. **Stel termijnen vast**: patchtermijnen naar ernst (kritiek: dagen; hoog: twee weken; rest: maandelijks), met registratie van uitzonderingen en compenserende maatregelen.
3. **Vergeet de vergeethoeken niet**: firmware van firewalls, switches en NAS-apparaten, hypervisors en die ene legacy-applicatie; juist daar blijven kwetsbaarheden jaren open staan.
4. **Scan periodiek**: een kwetsbaarheidsscanner over de omgeving (of de rapportages van je beheerpartner) maakt zichtbaar wat de praktijk is in plaats van de bedoeling.
5. **Volg de signalen**: NCSC-adviezen en leveranciersbulletins (5.6, 5.7) triggeren een beoordeling buiten de reguliere cyclus.

## Waar let de auditor op?

De auditor wil het proces én de praktijk zien: het patchbeleid met termijnen, een recent scanrapport of patchoverzicht, en de afhandeling van de laatste kritieke kwetsbaarheid ("wat deden jullie met die NCSC-melding van afgelopen voorjaar?"). Systemen die maanden achterlopen en end-of-life-software zonder plan zijn de zwaarst wegende bevindingen in dit gebied.
