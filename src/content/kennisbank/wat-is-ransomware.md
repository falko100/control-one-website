---
title: "Wat is ransomware?"
description: "Ransomware is gijzelsoftware die bestanden versleutelt en losgeld eist, vaak gecombineerd met datadiefstal. Hoe een aanval verloopt en welke maatregelen echt helpen."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Ransomware is malware die bestanden en systemen versleutelt waarna de aanvaller losgeld eist voor de ontsleuteling, tegenwoordig vrijwel altijd gecombineerd met datadiefstal en dreiging tot publicatie (double extortion). De aanval begint meestal met phishing, gestolen inloggegevens of een ongepatcht systeem. De beste verdediging: MFA, patches, EDR, netwerksegmentatie en vooral een offline of onveranderbare back-up met geteste hersteltijd."
publishDate: 2026-07-15
readTime: "3 min"
keywords: ["ransomware", "gijzelsoftware", "losgeld", "double extortion"]
gerelateerd: ["annex-a-8-13-back-up-van-informatie", "wat-is-phishing", "annex-a-5-24-incidentbeheer-planning"]
faq:
  - vraag: "Moet je losgeld betalen?"
    antwoord: "Het dringende advies van politie en NCSC is: niet betalen. Betalen financiert het criminele model, garandeert geen werkende ontsleuteling en voorkomt publicatie van gestolen data niet. De echte keuze wordt gemaakt vóór de aanval: wie een werkende offline back-up en een geoefend herstelplan heeft, hoeft de vraag nooit serieus te stellen."
  - vraag: "Is een MKB-bedrijf een doelwit?"
    antwoord: "Ja, juist: veel ransomware-groepen werken volautomatisch en vissen op ongepatchte systemen en zwakke inloggegevens, ongeacht de omvang van het slachtoffer. Het MKB is vaak makkelijker binnen te komen én slechter voorbereid, met relatief grotere schade: gemiddelde hersteltrajecten kosten weken en lopen in de tienduizenden tot honderdduizenden euro's."
---

Ransomware is gijzelsoftware: malware die bestanden, databases en complete systemen versleutelt, waarna de aanvaller losgeld eist voor de sleutel. Moderne groepen combineren dat vrijwel altijd met **double extortion**: vóór het versleutelen stelen ze de data, en dreigen met publicatie als er niet wordt betaald, zodat ook een goede back-up de druk niet volledig wegneemt.

## Hoe verloopt een aanval?

De binnenkomst: een phishingmail, gestolen of gelekte inloggegevens (zeker zonder MFA), of een ongepatchte kwetsbaarheid in een extern bereikbaar systeem zoals VPN of remote desktop. Daarna beweegt de aanvaller vaak dagen tot weken onopgemerkt door het netwerk: rechten verhogen, back-ups zoeken en saboteren, data exfiltreren. Pas dan wordt de versleuteling gestart, meestal in het weekend of de nacht, gevolgd door de losgeldeis.

## Wat helpt echt?

Geen enkele maatregel alleen; de combinatie telt:

1. **Binnenkomen bemoeilijken**: MFA op alles wat extern bereikbaar is, snelle patches (zeker op VPN en remote toegang), e-mail- en webfiltering.
2. **Beweging beperken**: geen onnodige beheerrechten, netwerksegmentatie zodat één besmette werkplek niet alles bereikt, en een back-upomgeving die met aparte inloggegevens is afgeschermd.
3. **Detecteren**: EDR die versleutelingsgedrag en verdachte bewegingen signaleert, met alerts die iemand echt opvolgt.
4. **Kunnen herstellen**: de beslissende factor. Een 3-2-1-back-up met minimaal één offline of onveranderbare kopie, en een geteste hersteltijd. Dit bepaalt of ransomware een ramp is of een vervelende week.

## De ISO 27001-koppeling

Ransomware raakt een keten van Annex A-maatregelen: malwarebescherming (8.7), kwetsbaarhedenbeheer (8.8), back-up (8.13), segmentatie (8.22), incidentrespons (5.24 tot en met 5.26) en continuïteit (5.29, 5.30). Een goed ingericht ISMS is in feite een ransomware-weerbaarheidsprogramma; oefen het scenario jaarlijks in een tabletop-oefening.
