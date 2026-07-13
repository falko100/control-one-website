---
title: "Annex A 5.15: Toegangsbeveiliging (access control)"
description: "Maatregel 5.15 van ISO 27001 Annex A eist regels voor fysieke en logische toegang op basis van bedrijfs- en beveiligingseisen. Zo stel je een toegangsbeleid op."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.15 eist dat regels voor fysieke en logische toegang tot informatie en bedrijfsmiddelen worden vastgesteld en geïmplementeerd op basis van bedrijfsbehoeften. De kernprincipes: need-to-know en least privilege (alleen de toegang die de functie vereist), toegang op basis van rollen, en een gedocumenteerd toegangsbeleid dat bepaalt wie waarover beslist."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.15", "toegangsbeveiliging", "access control", "least privilege", "iso 27001"]
gerelateerd: ["annex-a-5-16-identiteitsbeheer", "annex-a-5-18-toegangsrechten", "wat-is-annex-a"]
faq:
  - vraag: "Wat is het verschil tussen 5.15, 5.16, 5.17 en 5.18?"
    antwoord: "5.15 is het overkoepelende toegangsbeleid (de regels), 5.16 gaat over identiteitsbeheer (wie ben je), 5.17 over authenticatie-informatie (hoe bewijs je dat, wachtwoorden en MFA) en 5.18 over het toekennen, aanpassen en intrekken van concrete toegangsrechten (het proces)."
  - vraag: "Wat betekent least privilege praktisch?"
    antwoord: "Iedereen krijgt standaard de minimale toegang die de functie vereist, niets extra voor het gemak. Beheerrechten zijn gescheiden van dagelijkse accounts, en bredere toegang vereist een aanvraag met goedkeuring door de eigenaar."
---

Annex A-maatregel 5.15 van ISO 27001, "Access control", eist een vastgesteld kader voor wie toegang krijgt tot welke informatie, systemen en locaties. Dit is het beleid waar de operationele maatregelen 5.16 tot en met 5.18 op steunen.

## Wat eist de maatregel?

Regels voor het beheersen van fysieke en logische toegang, gebaseerd op bedrijfs- en beveiligingseisen. Uitgangspunten die de norm noemt: toegang op basis van need-to-know en least privilege, consistentie tussen toegangsrechten en informatieclassificatie, scheiding van functies (aanvragen versus goedkeuren), en formele processen voor toekenning en intrekking.

## Zo vul je hem in

1. **Schrijf een beknopt toegangsbeleid**: de principes (least privilege, need-to-know), wie over toegang beslist (de systeem- of informatie-eigenaar), en hoe aanvraag, wijziging en intrekking verlopen.
2. **Werk met rollen**: definieer per functie een standaard toegangsprofiel (welke systemen en mappen horen bij sales, bij finance). Dat maakt toekennen en controleren beheersbaar.
3. **Scheid beheer van gebruik**: aparte beheeraccounts voor adminwerk, dagelijks werken met een standaardaccount.
4. **Dek fysiek en logisch**: het beleid geldt ook voor toegangspassen, sleutels en de serverruimte.

## Waar let de auditor op?

De auditor toetst of het beleid bestaat en of de praktijk het volgt, meestal via een steekproef: "waarom heeft deze medewerker toegang tot dit systeem, en wie heeft dat goedgekeurd?" De klassieke bevindingen: iedereen is domain admin "omdat dat makkelijk werkt", rechten die meegroeien met elke functiewissel maar nooit krimpen, en het ontbreken van een aanwijsbare beslisser per systeem.
