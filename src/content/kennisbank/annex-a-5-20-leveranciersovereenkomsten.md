---
title: "Annex A 5.20: Beveiligingseisen in leveranciersovereenkomsten"
description: "Maatregel 5.20 van ISO 27001 Annex A eist dat beveiligingseisen contractueel worden vastgelegd met leveranciers. Welke afspraken horen er minimaal in?"
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.20 eist dat relevante informatiebeveiligingseisen worden vastgelegd in de overeenkomst met elke leverancier die informatie van de organisatie raakt: welke gegevens, welke beveiligingsmaatregelen, geheimhouding, incidentmelding, auditrecht en de afwikkeling bij contracteinde. Bij verwerking van persoonsgegevens komt daar de verplichte verwerkersovereenkomst bij."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.20", "leveranciersovereenkomsten", "verwerkersovereenkomst", "contracteisen", "iso 27001"]
gerelateerd: ["annex-a-5-19-leveranciersrelaties", "annex-a-5-21-ict-toeleveringsketen", "annex-a-5-22-monitoren-van-leveranciersdiensten"]
faq:
  - vraag: "Wat als een grote SaaS-leverancier geen maatwerkcontract accepteert?"
    antwoord: "Bij grote leveranciers teken je hun standaardvoorwaarden en verwerkersovereenkomst. Beoordeel die dan tegen je eisen en leg de conclusie vast; het bewijs dat je de voorwaarden hebt getoetst en geaccepteerd op basis van risico is dan je invulling van de maatregel."
  - vraag: "Is een verwerkersovereenkomst hetzelfde als deze maatregel?"
    antwoord: "Nee. De verwerkersovereenkomst is een AVG-verplichting voor persoonsgegevens; maatregel 5.20 is breder en dekt alle informatiebeveiligingsafspraken, ook waar geen persoonsgegevens spelen, zoals beschikbaarheidsgaranties en incidentmelding."
---

Annex A-maatregel 5.20 van ISO 27001, "Addressing information security within supplier agreements", eist dat beveiligingsafspraken met leveranciers zwart op wit staan. Zonder contract heb je bij een incident geen grond om iets af te dwingen.

## Wat eist de maatregel?

Per leverancier moeten, passend bij het risico, relevante beveiligingseisen in de overeenkomst staan. De norm noemt onder meer: beschrijving van de informatie en de toegang, classificatie- en omgangseisen, wettelijke verplichtingen (zoals de AVG), geheimhouding, eisen aan personeel van de leverancier, incidentmelding en samenwerkingsplicht, auditrecht of bewijs via certificering, onderaannemers, en teruggave of vernietiging van informatie bij het einde van het contract.

## Zo vul je hem in

1. **Maak een standaardbijlage**: een vaste set beveiligingsvoorwaarden die je aan contracten toevoegt, geschaald naar risicoklasse uit het leveranciersregister.
2. **Regel de verwerkersovereenkomst**: verplicht bij elke leverancier die persoonsgegevens voor je verwerkt; vaak biedt de leverancier er zelf een aan, beoordeel die dan.
3. **Accepteer bewust bij standaardvoorwaarden**: bij grote cloudleveranciers beoordeel je hun voorwaarden en certificeringen en leg je de acceptatie vast, in plaats van te onderhandelen.
4. **Vergeet de exit niet**: afspraken over data-teruggave, verwijderbewijs en overdracht bij contracteinde voorkomen dat je gegevens achterblijven.

## Waar let de auditor op?

De auditor pakt kritische leveranciers uit het register en vraagt de contracten erbij: staan de beveiligingsafspraken erin, is er een verwerkersovereenkomst waar dat moet? De gangbare bevinding: langlopende relaties op basis van een offerte uit 2018 zonder enige beveiligingsafspraak, en SaaS-diensten waarvan niemand de voorwaarden ooit heeft beoordeeld.
