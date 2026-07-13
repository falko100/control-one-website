---
title: "Annex A 5.23: Informatiebeveiliging bij clouddiensten"
description: "Maatregel 5.23 van ISO 27001 Annex A eist processen voor het selecteren, gebruiken, beheren en verlaten van clouddiensten. Zo beheers je cloudgebruik MKB-proof."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.23, nieuw in de 2022-versie, eist processen voor de aanschaf, het gebruik, het beheer en het verlaten van clouddiensten: selectiecriteria en beveiligingseisen vooraf, duidelijkheid over de verantwoordelijkheidsverdeling tussen leverancier en klant, veilige configuratie, en een exitstrategie per kritische dienst. De klant blijft altijd zelf verantwoordelijk voor toegangsbeheer en dataclassificatie."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.23", "clouddiensten", "cloud security", "shared responsibility", "iso 27001"]
gerelateerd: ["annex-a-5-19-leveranciersrelaties", "annex-a-5-20-leveranciersovereenkomsten", "annex-a-5-9-inventarisatie-van-bedrijfsmiddelen"]
faq:
  - vraag: "Wat is het shared responsibility model?"
    antwoord: "De verdeling van beveiligingstaken tussen cloudleverancier en klant. De leverancier beveiligt de infrastructuur en het platform; de klant blijft verantwoordelijk voor gebruikers en toegang (MFA), configuratie, dataclassificatie en meestal ook back-up van de eigen data. Misverstanden hierover zijn een hoofdoorzaak van cloudincidenten."
  - vraag: "Wat hoort er in een exitstrategie voor een clouddienst?"
    antwoord: "Hoe je je data eruit krijgt (exportformaat, wie kan dat), wat het alternatief is, hoe lang migratie duurt en wat de leverancier bij beëindiging met je data doet (verwijderbewijs). Voor kritische diensten wil je dit vooraf weten, niet op het moment dat het moet."
---

Annex A-maatregel 5.23 van ISO 27001, "Information security for use of cloud services", is nieuw in de 2022-versie en erkent de realiteit dat vrijwel alle bedrijfsinformatie tegenwoordig in clouddiensten staat. De eis: beheers de hele levenscyclus, van aanschaf tot exit.

## Wat eist de maatregel?

Processen voor het verwerven, gebruiken, beheren en beëindigen van clouddiensten, in lijn met de beveiligingseisen van de organisatie: selectiecriteria, de verantwoordelijkheidsverdeling tussen leverancier en klant, beveiligingseisen aan de dienst, en de afspraken over incidenten, support en exit.

## Zo vul je hem in

1. **Stel selectiecriteria vast**: certificering (ISO 27001, SOC 2), datalocatie (EU), verwerkersovereenkomst, MFA- en SSO-ondersteuning, exportmogelijkheden. Nieuwe diensten gaan langs deze lat vóór aanschaf.
2. **Leg de verantwoordelijkheidsverdeling vast**: per kritische dienst benoemen wat de leverancier doet en wat jij zelf moet regelen: toegangsbeheer, MFA, configuratie, back-up van eigen data.
3. **Configureer veilig**: standaardinstellingen zijn zelden veilig genoeg; loop de security-baseline van de dienst na (MFA verplicht, extern delen beperkt, logging aan).
4. **Bepaal de exit per kritische dienst**: exportroute, alternatief en verwijderafspraken, vastgelegd in het leveranciersdossier.

## Waar let de auditor op?

De auditor pakt je kritische clouddiensten en toetst: bewuste selectie (criteria, beoordeling), heldere verantwoordelijkheidsverdeling en een antwoord op de exitvraag. De klassieke bevindingen: schaduw-IT die buiten elk proces om is aangeschaft, en de aanname dat "de leverancier de back-up wel regelt" terwijl het contract dat niet zegt.
