---
title: 'De Verklaring van Toepasselijkheid (VvT) invullen'
description: "De Statement of Applicability is het hart van je ISO 27001-implementatie. Zo vul je hem correct in."
publishDate: 2026-04-05
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'Verklaring van Toepasselijkheid ISO 27001 — Control One'
keywords:
  - 'Verklaring van Toepasselijkheid'
  - 'Statement of Applicability SoA'
  - 'ISO 27001 VvT'
  - 'Annex A controls toepasselijkheid'
draft: false
---

Geen enkel document binnen ISO 27001 wordt door auditoren zo aandachtig doorgelicht als de **Verklaring van Toepasselijkheid (VvT)**. Toch begrijpen veel organisaties dit document niet volledig, waardoor ze óf te veel controls opnemen (wat onnodige werkdruk creëert) óf te weinig controls opnemen (wat leidt tot afwijkingen tijdens de audit).

De VvT — in het Engels de **Statement of Applicability (SoA)** — is het document waarin je voor elk van de 93 Annex A-controls van ISO 27001:2022 aangeeft of deze van toepassing is op je organisatie, waarom, en in welke mate je deze geïmplementeerd heeft. In dit artikel leer je hoe je dit document stap voor stap correct invult.

## Wat is de Verklaring van Toepasselijkheid precies?

De VvT is verplicht gesteld in clausule 6.1.3d van ISO 27001. Het document dient als brug tussen je risicoanalyse en je daadwerkelijke beveiligingsmaatregelen. Het laat een auditor zien:

- Welke controls je hebt geselecteerd en waarom
- Welke controls je hebt uitgesloten en waarom
- In hoeverre de geselecteerde controls zijn geïmplementeerd

De VvT is daarmee ook een beheersinstrument: het geeft op één pagina (of één spreadsheet) inzicht in de volledige staat van je informatiebeveiliging.

## De verplichte inhoud van de VvT

ISO 27001 stelt dat je VvT minimaal het volgende moet bevatten:

| Element | Omschrijving |
|---------|-------------|
| Control referentie | Het Annex A-nummer (bijv. 5.1, 8.12) |
| Control naam | De officiële naam conform ISO 27001:2022 |
| Toepasselijkheid | Wel of niet van toepassing (ja/nee) |
| Motivatie | Reden van opname of uitsluiting |
| Implementatiestatus | Niet geïmplementeerd / gedeeltelijk / volledig |
| Link naar bewijs | Verwijzing naar beleidsdocument, procedure of technische maatregel |

Sommige organisaties voegen ook een kolom toe voor de verantwoordelijke eigenaar en de geplande implementatiedatum. Dit is geen vereiste, maar wel aan te bevelen.

## Stap 1: Begin met je risicoanalyse

Je kunt de VvT niet invullen zonder een [afgeronde risicoanalyse](/iso-27001). De controls die je in je VvT opneemt, moeten namelijk afgeleid zijn van de risico's die je hebt geïdentificeerd. Dit is de logische volgorde:

1. Voer de risicoanalyse uit
2. Stel het risicobehandelplan op
3. Bepaal welke controls je nodig heeft om risico's te mitigeren
4. Neem deze controls op in de VvT

Controls die je opneemt om een andere reden dan risicomitigatie — bijvoorbeeld wettelijke verplichtingen of contractuele eisen van klanten — vermeldt je met die motivatie in de VvT.

## Stap 2: Loop alle 93 controls systematisch langs

De VvT dekt alle 93 controls van Annex A, verdeeld over 4 categorieën:

- **Categorie 5:** 37 organisatorische controls
- **Categorie 6:** 8 persoonsgebonden controls
- **Categorie 7:** 14 fysieke controls
- **Categorie 8:** 34 technologische controls

Voor elke control neem je een beslissing: van toepassing of niet. De meeste controls zullen voor MKB-organisaties van toepassing zijn. Uitzonderingen zijn er wel — denk aan control 7.4 (fysieke beveiligingsmonitoring) voor een volledig remote team zonder eigen kantoorruimte, of control 8.28 (veilige codering) voor een organisatie die zelf geen software ontwikkelt.

> **Tip:** Sla nooit controls over omdat ze lastig zijn om te implementeren. Uitsluiting is alleen geldig als een control écht niet relevant is voor je organisatiecontext. Een auditor ziet direct wanneer uitsluitingen gemotiveerd zijn vanuit gemakzucht in plaats van context.

## Stap 3: Motiveer elk besluit

Voor elke control — of het nu gaat om opname of uitsluiting — documenteer je de motivatie. Goede motivatietypen zijn:

**Voor opname:**
- Risicobehandeling (met verwijzing naar het specifieke risico)
- Wettelijke of regelgevende verplichting (bijv. AVG, NIS2)
- Contractuele verplichting (bijv. klanteis)
- Best practice (gebruik dit spaarzaam — een auditor verwacht een concretere motivatie)

**Voor uitsluiting:**
- Niet relevant voor de organisatiecontext (met toelichting)
- Niet binnen de ISMS-scope (met verwijzing naar scopedocument)

## Stap 4: Documenteer de implementatiestatus

Een VvT is pas volledig als je ook bijhoudt in hoeverre elke geselecteerde control daadwerkelijk is geïmplementeerd. Gebruik een eenvoudige statusschaal:

- **Niet geïmplementeerd** — control is geselecteerd maar nog niet ingevoerd
- **Gedeeltelijk geïmplementeerd** — control is deels ingevoerd, aanvullende acties staan open
- **Volledig geïmplementeerd** — control is operationeel en aantoonbaar

Voor de externe audit verwacht de auditor dat alle geselecteerde controls volledig geïmplementeerd zijn. Een hoge mate van "gedeeltelijk geïmplementeerd" vlak voor de audit is een waarschuwingssignaal.

## Stap 5: Koppel aan bewijsdocumenten

Per control verwijst je naar het document, de procedure of de technische maatregel die aantoont dat de control is geïmplementeerd. Voorbeelden:

- Control 5.10 (Aanvaardbaar gebruik van informatie en andere activa) → Verwijzing naar je Acceptable Use Policy
- Control 8.5 (Veilige authenticatie) → Verwijzing naar je wachtwoordbeleid en MFA-configuratie
- Control 6.3 (Bewustwording, opleiding en training) → Verwijzing naar trainingsregistraties

## Veelgestelde vragen

**Mag de VvT een spreadsheet zijn?**
Ja. ISO 27001 schrijft geen specifiek format voor. Een goed ingevulde spreadsheet voldoet prima. Zorg wel dat het document versiegecontroleerd is en dat de datum van laatste update zichtbaar is.

**Hoe lang is een VvT gemiddeld?**
Een volledige VvT bevat 93 rijen (één per control) plus een headerrij met de kolomnamen. Bij gebruik van subcontrols of extra kolommen kan dit oplopen, maar de kern blijft 93 controls.

**Moet de directie de VvT ondertekenen?**
ISO 27001 vereist dit niet expliciet, maar auditoren zien een directiehandtekening graag als bewijs van management commitment. Het is een kleine moeite die je als professioneel overkomt.

---

De Verklaring van Toepasselijkheid is het document waarmee je aantoont dat je ISMS doordacht en risicogebaseerd is ingericht. In Control One vul je de VvT in via een interactieve tabel, gekoppeld aan je risicoanalyse, en exporteer je hem als PDF voor de externe audit.

Bekijk onze [prijzen en pakketten](/prijzen) en start vandaag nog met je ISO 27001-implementatie.
