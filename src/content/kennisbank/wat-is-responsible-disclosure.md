---
title: "Wat is responsible disclosure (CVD)?"
description: "Responsible disclosure (coordinated vulnerability disclosure) laat melders kwetsbaarheden veilig bij je melden: waarom elke organisatie een CVD-beleid wil en wat erin staat."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Responsible disclosure, tegenwoordig coordinated vulnerability disclosure (CVD) genoemd, is de afspraak waarmee beveiligingsonderzoekers en toevallige vinders kwetsbaarheden in jouw systemen veilig bij je kunnen melden: een gepubliceerd beleid (vaak met security.txt) dat belooft niet juridisch te vervolgen bij verantwoord handelen, plus een meldkanaal, reactietermijnen en afspraken over publicatie. Zonder CVD-beleid gaan vondsten naar niemand, naar Twitter of naar kwaadwillenden; met beleid worden vreemden gratis extra ogen."
publishDate: 2026-07-18
readTime: "3 min"
keywords: ["responsible disclosure", "cvd", "coordinated vulnerability disclosure", "security.txt"]
gerelateerd: ["annex-a-8-8-technische-kwetsbaarheden", "wat-is-een-pentest", "annex-a-6-8-melden-van-gebeurtenissen"]
faq:
  - vraag: "Wat is security.txt?"
    antwoord: "Een gestandaardiseerd bestand (RFC 9116) op je website (/.well-known/security.txt) met de contactgegevens voor beveiligingsmeldingen en een verwijzing naar je CVD-beleid. Onderzoekers en scanners kijken er standaard; het is de goedkoopste beveiligingsmaatregel die bestaat: één tekstbestand dat de meldroute vindbaar maakt."
  - vraag: "Wat is het verschil met een bug bounty?"
    antwoord: "CVD regelt dát en hoe er veilig gemeld kan worden; een bug bounty voegt daar beloningen aan toe en nodigt actief uit tot zoeken, vaak via een platform. Voor de meeste MKB-bedrijven is de volgorde: eerst een CVD-beleid (gratis, direct waardevol), een betaald bounty-programma pas als de beveiliging volwassen genoeg is om de meldstroom aan te kunnen."
---

Iemand vindt een gat in jouw webapplicatie. Wat er dan gebeurt, hangt af van één ding: heb je geregeld dat diegene het veilig bij jóu kan melden? Responsible disclosure is die regeling, en het ontbreken ervan is de reden dat vondsten anders onbenut blijven of op de verkeerde plek belanden.

## Hoe het werkt

Een CVD-beleid is een publieke pagina (vindbaar via security.txt) met vier elementen: het **meldkanaal** (een e-mailadres of formulier, bij voorkeur met versleutelingsoptie), de **spelregels voor de melder** (geen data wegnemen of wijzigen, geen verstoring, niet verder kijken dan nodig om het lek aan te tonen, vertrouwelijk tot de fix), de **beloften van de organisatie** (reactie binnen bijvoorbeeld 3 werkdagen, geen aangifte of juridische stappen bij verantwoord handelen, op de hoogte houden, desgewenst naamsvermelding of een kleine blijk van dank) en **afspraken over publicatie**: gecoördineerd, ná de fix, met een redelijke termijn. De Nederlandse CVD-leidraad van het NCSC is de gangbare basis en internationaal goed aangeschreven.

## Waarom je het wilt

Drie redenen. **Gratis detectie**: welwillende vinders (onderzoekers, studenten, toevallige gebruikers) zijn extra ogen die je niets kosten; zonder kanaal verdampt hun vondst. **Schadebeperking**: een gemeld lek fix je stilletjes; een op sociale media gedropt lek fix je in crisismodus. **Volwassenheidssignaal**: klanten, pentesters en auditors lezen het CVD-beleid als indicator dat de organisatie beveiliging serieus organiseert; onder NIS2 en in moderne inkoopvragenlijsten wordt ernaar gevraagd.

## De plek binnen ISO 27001

CVD-meldingen voeden het kwetsbaarhedenbeheer (8.8: informatie over kwetsbaarheden verkrijgen, uit álle bronnen) en lopen via de incidentketen (5.25, 5.26) voor triage en afhandeling. Regel intern wie meldingen beoordeelt en binnen welke termijn (dezelfde routine als 6.8), en test het kanaal af en toe zelf: een security.txt die naar een opgeheven mailbox wijst, is pijnlijker dan geen.
