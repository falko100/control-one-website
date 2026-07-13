---
title: "Annex A 8.27: Veilige systeemarchitectuur en engineeringprincipes"
description: "Maatregel 8.27 van ISO 27001 Annex A eist vastgestelde principes voor veilig ontwerpen van systemen: defense in depth, least privilege, fail secure en zero trust."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.27 eist dat principes voor het ontwerpen van veilige systemen zijn vastgesteld, gedocumenteerd, onderhouden en toegepast bij alle ontwikkelactiviteiten: denk aan defense in depth (meerdere lagen), least privilege, fail secure (veilig falen), input wantrouwen, en het minimaliseren van het aanvalsoppervlak. De principes gelden voor nieuwe systemen én bij grote wijzigingen aan bestaande."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.27", "systeemarchitectuur", "security engineering", "defense in depth", "iso 27001"]
gerelateerd: ["annex-a-8-25-veilige-ontwikkelcyclus", "annex-a-8-26-beveiligingseisen-applicaties", "annex-a-8-28-veilig-programmeren"]
faq:
  - vraag: "Welke ontwerpprincipes horen minimaal in de lijst?"
    antwoord: "De klassiekers: least privilege (minimale rechten, ook tussen componenten), defense in depth (nooit één enkele barrière), fail secure (bij falen dicht in plaats van open), input nooit vertrouwen (validatie overal), veilige defaults, en het klein houden van het aanvalsoppervlak (alleen noodzakelijke diensten en endpoints). Zero-trust-principes zijn de moderne samenvatting."
  - vraag: "Hoe maak je dit concreet voor een klein team?"
    antwoord: "Een A4 met de principes en per principe één regel wat het bij jullie betekent (bijvoorbeeld: 'elke API-endpoint vereist authenticatie, ook intern'), toegepast als vaste toets bij design reviews van nieuwe features en architectuurkeuzes."
---

Annex A-maatregel 8.27 van ISO 27001, "Secure system architecture and engineering principles", legt de ontwerpfilosofie vast: goede beveiliging is geen feature maar een eigenschap van de architectuur.

## Wat eist de maatregel?

Principes voor het engineeren van veilige systemen worden vastgesteld, gedocumenteerd, onderhouden en toegepast op alle ontwikkelactiviteiten: de beveiliging wordt over alle architectuurlagen ontworpen (data, applicatie, infrastructuur), nieuwe techniek wordt op beveiligingsrisico's geanalyseerd, en de principes worden periodiek herzien tegen nieuwe dreigingen.

## Zo vul je hem in

1. **Stel de principeslijst vast**: least privilege, defense in depth, fail secure, valideer alle input, veilige defaults, minimaal aanvalsoppervlak; kort gedocumenteerd met de eigen vertaling per principe.
2. **Pas toe op beslismomenten**: design reviews, architectuurkeuzes en de introductie van nieuwe techniek toetsen expliciet aan de principes; leg de afweging kort vast.
3. **Herzie periodiek**: nieuwe dreigingen (bijvoorbeeld rond AI-componenten of supply-chain-risico's) kunnen nieuwe principes of aanscherpingen vragen; neem het mee in de jaarlijkse beleidsreview.
4. **Geldt ook voor inkoop**: toets bij belangrijke aanschaf of de leverancier aantoonbaar volgens zulke principes bouwt (certificering, documentatie).

## Waar let de auditor op?

De auditor vraagt naar de principes en een voorbeeld waar ze een ontwerp hebben gestuurd: "waar heeft dit document voor het laatst een beslissing veranderd?" Een levend A4 met een aanwijsbaar voorbeeld overtuigt; een uitgebreid framework-document dat niemand kent niet.
