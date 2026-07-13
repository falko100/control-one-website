---
title: "Annex A 5.21: Beveiliging in de ICT-toeleveringsketen"
description: "Maatregel 5.21 van ISO 27001 Annex A eist beheersing van risico's dieper in de ICT-keten: onderaannemers, componenten en doorlevering. Praktische invulling voor het MKB."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.21 eist dat risico's in de ICT-toeleveringsketen worden beheerst: niet alleen je directe leverancier, maar ook diens onderaannemers en de componenten in geleverde producten en diensten. Praktisch: weet welke sub-verwerkers je kritische leveranciers gebruiken, eis doorvertaling van beveiligingseisen in de keten en let op de herkomst van soft- en hardware."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.21", "toeleveringsketen", "supply chain", "sub-verwerkers", "iso 27001"]
gerelateerd: ["annex-a-5-19-leveranciersrelaties", "annex-a-5-20-leveranciersovereenkomsten", "wat-is-nis2"]
faq:
  - vraag: "Wat is het verschil met 5.19 en 5.20?"
    antwoord: "5.19 en 5.20 gaan over je directe leveranciers; 5.21 kijkt een laag dieper: de leveranciers van je leveranciers, en de componenten waaruit geleverde ICT-producten en -diensten zijn opgebouwd. Ketenincidenten zoals bij grote supply-chain-aanvallen komen juist uit die diepere lagen."
  - vraag: "Hoe beheers je als MKB iets dat zo ver weg ligt?"
    antwoord: "Via je directe leverancier: eis inzicht in sub-verwerkers (staat vaak in de verwerkersovereenkomst), eis dat beveiligingseisen worden doorgelegd, en kies waar mogelijk leveranciers die hun keten aantoonbaar beheersen via certificering. Volledige controle is onhaalbaar; aantoonbare aandacht is de eis."
---

Annex A-maatregel 5.21 van ISO 27001, "Managing information security in the ICT supply chain", kijkt voorbij de directe leverancier naar de hele keten. Moderne aanvallen komen vaak binnen via een update van een vertrouwde leverancier of een gecompromitteerd component diep in de keten.

## Wat eist de maatregel?

Processen om risico's in de ICT-toeleveringsketen te beheersen, aanvullend op het gewone leveranciersbeheer: eisen doorleggen naar onderaannemers, inzicht in de opbouw van kritische producten en diensten, en het kunnen volgen van kritieke componenten tot hun oorsprong waar dat relevant is.

## Zo vul je hem in

1. **Breng sub-verwerkers in beeld**: van je kritische leveranciers wil je weten welke partijen zij inschakelen (hosting, support, datacenters). Verwerkersovereenkomsten bevatten meestal een sub-verwerkerslijst; bewaar en beoordeel die.
2. **Leg ketendoorwerking contractueel vast**: neem in de standaardvoorwaarden (5.20) op dat de leverancier gelijkwaardige eisen aan zijn onderaannemers stelt en wijzigingen in sub-verwerkers meldt.
3. **Let op herkomst bij aanschaf**: betrek bij de selectie van soft- en hardware de betrouwbaarheid van de bron: officiële kanalen, ondersteunde versies, reputatie van de leverancier.
4. **Beoordeel updatekanalen**: automatische updates van kritische software zijn een ketenrisico; beperk beheerdersrechten en monitor wat er binnenkomt.

## Waar let de auditor op?

Voor het MKB toetst de auditor vooral bewustzijn en de contractuele doorvertaling: weet je wie de sub-verwerkers van je kritische SaaS-leveranciers zijn, en staat ketendoorwerking in je leverancierseisen? Volledig ketenonderzoek wordt niet verwacht; geen enkel idee hebben van wat er onder je kritische diensten hangt, is wel een bevinding.
