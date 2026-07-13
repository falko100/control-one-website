---
title: "Annex A 5.9: Inventarisatie van informatie en bedrijfsmiddelen"
description: "Maatregel 5.9 van ISO 27001 Annex A eist een actuele inventaris van informatie en bedrijfsmiddelen met eigenaren. Zo bouw en onderhoud je het assetregister."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.9 eist een inventaris van informatie en andere gerelateerde bedrijfsmiddelen, inclusief eigenaren. Het assetregister omvat hardware, software en SaaS-diensten, informatiesoorten en waar nodig diensten en mensen met sleutelkennis. Elk middel heeft een eigenaar die verantwoordelijk is voor passende bescherming. Zonder dit register kan de risicoanalyse niet volledig zijn."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.9", "assetregister", "bedrijfsmiddelen", "inventarisatie", "iso 27001"]
gerelateerd: ["risicoanalyse-uitvoeren", "annex-a-5-10-aanvaardbaar-gebruik", "scope-bepalen-iso-27001"]
faq:
  - vraag: "Hoe gedetailleerd moet het assetregister zijn?"
    antwoord: "Werk met categorieën waar dat kan: alle standaard-laptops als één regel, kritische servers en systemen afzonderlijk. Het register moet volledig genoeg zijn om risico's te beoordelen, niet elke muis en kabel bevatten."
  - vraag: "Vallen SaaS-diensten ook onder het register?"
    antwoord: "Ja, juist die. Bij het MKB draait vaak het grootste deel van de informatie in clouddiensten. Registreer per dienst welke informatie erin staat, wie de eigenaar is en wat de leveranciersafspraken zijn."
  - vraag: "Wie is de eigenaar van een asset?"
    antwoord: "De functionaris die beslist over het gebruik en de beveiliging ervan, niet per se degene die het middel gebruikt of beheert. De eigenaar bepaalt classificatie, toegang en beschermingseisen."
---

Annex A-maatregel 5.9 van ISO 27001, "Inventory of information and other associated assets", eist een actuele inventaris van alles wat informatie draagt of verwerkt, met per middel een eigenaar. Je kunt niet beschermen wat je niet in beeld hebt: het assetregister is het fundament onder de risicoanalyse.

## Wat eist de maatregel?

Een geïdentificeerde, gedocumenteerde en onderhouden inventaris van informatie en gerelateerde bedrijfsmiddelen: **informatie** (klantgegevens, personeelsdossiers, broncode, contracten), **hardware** (laptops, servers, telefoons, netwerkapparatuur), **software en SaaS-diensten**, en waar relevant **diensten, locaties en sleutelfuncties**. Elk middel heeft een toegewezen eigenaar.

## Zo vul je hem in

1. **Start vanuit de informatie**: welke informatiesoorten zijn er, waar staan ze, hoe gevoelig zijn ze? Volg daarna de dragers: systemen, apparaten, diensten.
2. **Groepeer slim**: standaardwerkplekken als categorie, kritische systemen individueel. Detail volgt risico.
3. **Wijs eigenaren toe**: per asset of categorie de functionaris die over toegang en bescherming beslist.
4. **Automatiseer waar mogelijk**: MDM-tooling voor apparaten, de facturenlijst en SSO-overzichten voor het opsporen van SaaS-diensten (en schaduw-IT).
5. **Onderhoud structureel**: koppel het register aan in- en uitdienstprocessen en aan de aanschaf van nieuwe tooling; controleer het minimaal jaarlijks.

## Waar let de auditor op?

De auditor vergelijkt het register met de werkelijkheid: staat de SaaS-tool die in het teamoverleg werd genoemd erin, en de laptop van de nieuwste medewerker? Verouderde registers en ontbrekende cloud-diensten zijn de meest voorkomende bevindingen. Ook wordt de koppeling met de risicoanalyse getoetst: elk kritisch asset moet daarin terugkomen.
