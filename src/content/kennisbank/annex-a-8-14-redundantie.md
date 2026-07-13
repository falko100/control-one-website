---
title: "Annex A 8.14: Redundantie van informatieverwerkende faciliteiten"
description: "Maatregel 8.14 van ISO 27001 Annex A eist redundantie waar de beschikbaarheidseisen dat vragen: dubbel uitgevoerde systemen, verbindingen en diensten, getest en proportioneel."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.14 eist dat informatieverwerkende faciliteiten met voldoende redundantie worden geïmplementeerd om aan de beschikbaarheidseisen te voldoen: dubbele uitvoering van componenten waarvan uitval onacceptabel is, van internetverbinding en stroomvoorziening tot cloudregio's en sleutelpersonen. De beschikbaarheidseisen uit de risicoanalyse bepalen wat redundant moet; redundantie zonder failover-test is schijnzekerheid."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.14", "redundantie", "beschikbaarheid", "failover", "iso 27001"]
gerelateerd: ["annex-a-5-30-ict-gereedheid-bedrijfscontinuiteit", "annex-a-7-11-ondersteunende-nutsvoorzieningen", "annex-a-8-13-back-up-van-informatie"]
faq:
  - vraag: "Wat is het verschil tussen back-up en redundantie?"
    antwoord: "Back-up (8.13) beschermt de data en maakt herstel mogelijk ná uitval; redundantie voorkomt de uitval zelf door dubbele uitvoering: een tweede internetverbinding, een gespiegelde server, een cloudplatform over meerdere datacenters. Back-up is verplicht voor iedereen; redundantie alleen waar de beschikbaarheidseis het rechtvaardigt."
  - vraag: "Welke redundantie is voor een cloud-first MKB relevant?"
    antwoord: "De cloudleverancier regelt de platformredundantie (staat in de dienstbeschrijving, beoordeel die via 5.23); zelf regel je vooral de toegangsketen: een tweede internetroute (4G/5G-failover), en denk aan menselijke redundantie: minstens twee mensen die bij de kritische beheeromgevingen kunnen."
---

Annex A-maatregel 8.14 van ISO 27001, "Redundancy of information processing facilities", gaat over niet-uitvallen in plaats van herstellen: waar de organisatie stilstand niet kan dragen, wordt dubbel uitgevoerd.

## Wat eist de maatregel?

Informatieverwerkende faciliteiten worden geïmplementeerd met voldoende redundantie om aan de beschikbaarheidseisen te voldoen. De keten is zo sterk als de zwakste schakel: systemen, verbindingen, stroom, locaties en waar relevant ook diensten van leveranciers en menselijke kennis. Redundante componenten worden getest: een failover die nooit is omgeschakeld, bestaat niet.

## Zo vul je hem in

1. **Laat de eisen leidend zijn**: uit de risicoanalyse en de RTO's (5.30) volgt welke onderdelen redundant moeten; alles verdubbelen is onbetaalbaar en onnodig.
2. **Zoek de single points of failure**: de ene internetverbinding, de ene firewall, de ene beheerder met alle wachtwoorden, de ene leverancier; benoem ze expliciet en besluit per stuk: verdubbelen of accepteren.
3. **Benut de cloud**: platformredundantie is bij grote leveranciers ingebouwd; controleer wat de dienst belooft en wat je zelf moet configureren.
4. **Test de omschakeling**: periodieke failover-tests van de redundante componenten (verbinding, stroom, systemen), geregistreerd met de uitkomst.

## Waar let de auditor op?

De auditor vraagt naar de single points of failure en het bewijs dat de redundantie werkt: wanneer is de tweede verbinding voor het laatst echt gebruikt? Een bewuste acceptatie ("dit is enkelvoudig, dat weten we, herstel binnen een dag is acceptabel") is een prima antwoord; niet weten waar de zwakke plekken zitten niet.
