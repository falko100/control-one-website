---
title: "Annex A 5.26: Reageren op informatiebeveiligingsincidenten"
description: "Maatregel 5.26 van ISO 27001 Annex A eist dat incidenten volgens gedocumenteerde procedures worden afgehandeld: beheersen, herstellen, communiceren en registreren."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.26 eist dat op incidenten wordt gereageerd volgens de gedocumenteerde procedures: het incident beheersen en de schade beperken, bewijs veiligstellen, escaleren waar nodig, betrokkenen en autoriteiten informeren, herstellen en het geheel registreren. De respons wordt uitgevoerd door het daarvoor aangewezen team met voldoende mandaat."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.26", "incident response", "incidentafhandeling", "iso 27001"]
gerelateerd: ["annex-a-5-24-incidentbeheer-planning", "annex-a-5-27-leren-van-incidenten", "datalek-melden-stappenplan"]
faq:
  - vraag: "Wat zijn de vaste stappen van incidentrespons?"
    antwoord: "Beheersen (verspreiding stoppen: account blokkeren, systeem isoleren), bewijs veiligstellen, impact vaststellen, communiceren (intern, en waar nodig AP binnen 72 uur en betrokkenen), herstellen (schoon terugzetten, wachtwoorden vervangen) en registreren. De volgorde kan per incident verschillen; beheersing gaat vrijwel altijd voor."
  - vraag: "Wanneer schakel je externe hulp in?"
    antwoord: "Bij ransomware, een actieve aanvaller, forensische vragen of twijfel over de omvang: eerder te vroeg dan te laat. Leg vooraf vast wie je belt (IT-partner, incident-response-dienst, cyberverzekeraar met eigen responseteam) zodat dit tijdens het incident geen zoektocht is."
---

Annex A-maatregel 5.26 van ISO 27001, "Response to information security incidents", is de uitvoerende kern van het incidentproces: als het misgaat, handelt het aangewezen team volgens plan in plaats van in paniek.

## Wat eist de maatregel?

Incidenten worden afgehandeld conform de procedures uit 5.24, door het verantwoordelijke team. De norm benoemt de elementen: het incident beheersen, bewijsmateriaal verzamelen en veiligstellen (zie 5.28), gecontroleerd escaleren, interne en externe communicatie (inclusief autoriteiten en klanten waar vereist), herstel, en registratie van alle acties en besluiten voor de latere evaluatie.

## Zo vul je hem in

1. **Werk met een vaste volgorde**: beheersen, bewijs veiligstellen, impact bepalen, communiceren, herstellen, afsluiten. Maak per stap een korte checklist zodat onder druk niets wordt overgeslagen.
2. **Geef het team mandaat**: de coördinator mag systemen offline halen en kosten maken voor externe hulp zonder eerst een managementronde; leg de grens vast.
3. **Scheid rollen tijdens grote incidenten**: één iemand handelt technisch, één communiceert, één logt. De logboekrol wordt het vaakst vergeten en het hardst gemist.
4. **Communiceer volgens plan**: wie informeert de directie, wanneer gaat de melding naar de AP (72 uur), wat vertellen we klanten. Gebruik de voorbereide conceptteksten uit 5.24.

## Waar let de auditor op?

De auditor pakt het laatste echte incident en loopt de afhandeling na tegen de procedure: is er tijdig beheerst, gemeld waar dat moest, en is het dossier compleet (tijdlijn, acties, besluiten)? Een procedure die bij het laatste incident aantoonbaar niet is gevolgd, is een zwaardere bevinding dan een incident zelf; incidenten overkomen je, het negeren van je eigen proces is een keuze.
