---
title: 'ISO 27001 Annex A: de 93 controls uitgelegd'
description: "Overzicht van alle 93 beveiligingsmaatregelen in de vier thema's van Annex A, met prioritering voor MKB."
publishDate: 2026-04-22
category: 'ISO 27001'
readTime: '8 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'ISO 27001 Annex A: de 93 controls uitgelegd — Control One'
keywords:
  - 'ISO 27001 Annex A controls'
  - '93 controls ISO 27001'
  - 'beveiligingsmaatregelen ISO 27001'
  - 'Annex A 2022'
draft: false
---

**Annex A** van ISO 27001:2022 bevat een referentiecatalogus van 93 beveiligingsmaatregelen — ook wel **controls** genoemd — verdeeld over vier thema's. Voor MKB-organisaties die voor het eerst met ISO 27001 te maken krijgen, kan dit aantal overweldigend lijken. Maar je hoeft niet alle 93 controls te implementeren: de norm vereist dat je beargumenteerd bepaalt welke controls relevant zijn voor je organisatie.

In dit artikel geven we een helder overzicht van de vier thema's, lichten we de meest kritieke controls toe en helpen we je prioriteiten te stellen.

## Van 114 naar 93 controls: de update van 2022

Tot en met ISO 27001:2013 telde Annex A 114 controls verdeeld over 14 categorieën. In de versie van **2022** is dit herzien naar 93 controls in vier thema's. De wijzigingen zijn niet alleen cosmetisch: er zijn 11 nieuwe controls toegevoegd (waaronder cloud-specifieke maatregelen), meerdere controls zijn samengevoegd en de indeling is gemoderniseerd.

Nieuwe controls in ISO 27001:2022 zijn onder andere:
- **5.7** Threat intelligence
- **5.23** Informatiebeveiliging voor het gebruik van clouddiensten
- **8.10** Verwijdering van informatie
- **8.11** Datamaskering
- **8.12** Preventie van datalekken

## De vier thema's van Annex A

### Thema 1: Organisatorische controls (5.1 t/m 5.37) — 37 controls

Organisatorische controls hebben betrekking op beleid, governance, risicobeheer en de organisatorische structuur rond informatiebeveiliging. Dit is het fundament van je ISMS.

| Control | Onderwerp |
|---|---|
| 5.1 | Beleid voor informatiebeveiliging |
| 5.2 | Rollen en verantwoordelijkheden |
| 5.9 | Inventarisatie van informatie en bijbehorende assets |
| 5.15 | Toegangsbeheer |
| 5.19 | Informatiebeveiliging in leveranciersrelaties |
| 5.23 | Clouddiensten |
| 5.29 | Informatiebeveiliging tijdens verstoring |
| 5.36 | Naleving van beleid, regels en normen |

Voor MKB is het verstandig om te beginnen met de organisatorische controls, omdat die de basis leggen voor alle overige maatregelen. Zonder een helder informatiebeveiligingsbeleid (5.1) en duidelijke rollen (5.2) is de rest moeilijk te implementeren.

### Thema 2: Persoonsgebonden controls (6.1 t/m 6.8) — 8 controls

Deze controls richten zich op medewerkers: van screening bij indiensttreding tot bewustwording en gedrag.

| Control | Onderwerp |
|---|---|
| 6.1 | Screening |
| 6.3 | Bewustwording, opleiding en training |
| 6.4 | Disciplinaire procedure |
| 6.5 | Verantwoordelijkheden bij beëindiging of wijziging dienstverband |
| 6.8 | Rapportage van beveiligingsgebeurtenissen |

**Bewustwording (6.3)** is voor MKB een van de meest kosteneffectieve maatregelen. Menselijk gedrag is verantwoordelijk voor een groot deel van de beveiligingsincidenten — van het klikken op phishingmails tot het gebruik van zwakke wachtwoorden.

> **Tip:** Voer jaarlijks een nep-phishingtest uit onder je medewerkers. De resultaten zijn vaak verrassend én vormen een uitstekende basis voor gerichte bewustwordingstraining. Veel e-mailplatforms (zoals Microsoft 365) bieden ingebouwde simulatietools.

### Thema 3: Fysieke controls (7.1 t/m 7.14) — 14 controls

Fysieke controls betreffen de beveiliging van gebouwen, werkruimtes en apparatuur.

| Control | Onderwerp |
|---|---|
| 7.1 | Fysieke beveiligingsperimeters |
| 7.2 | Fysieke toegang |
| 7.4 | Bewaking van fysieke beveiliging |
| 7.9 | Beveiliging van assets buiten het terrein |
| 7.14 | Veilig verwijderen of hergebruik van apparatuur |

Voor veel MKB-organisaties zijn de fysieke controls relatief eenvoudig te implementeren: toegangspassen, camerabeveiliging en een clean-desk-beleid zijn de meest voorkomende maatregelen.

### Thema 4: Technologische controls (8.1 t/m 8.34) — 34 controls

De technologische controls zijn het meest uitgebreid en richten zich op IT-systemen, netwerken, software en data.

| Control | Onderwerp |
|---|---|
| 8.2 | Geprivilegieerde toegangsrechten |
| 8.5 | Veilige authenticatie |
| 8.8 | Beheer van technische kwetsbaarheden |
| 8.12 | Preventie van datalekken |
| 8.15 | Logging |
| 8.24 | Gebruik van cryptografie |
| 8.28 | Veilig programmeren |

## Hoe bepaal je welke controls van toepassing zijn?

ISO 27001 vereist dat je voor elke control in Annex A aangeeft of die van toepassing is op je organisatie, en zo niet, waarom niet. Dit leg je vast in het **Statement of Applicability (SoA)**.

Een control is doorgaans van toepassing als:
- Je risicoanalyse een risico identificeert dat door de control wordt beheerst
- Wet- of regelgeving de maatregel vereist
- Contractuele verplichtingen ernaar verwijzen

Een control mag worden uitgesloten als het risico simpelweg niet bestaat (bijv. fysieke bewaking van een serverruimte als je geen eigen servers heeft) of als er een goed gedocumenteerde alternatieve maatregel voor is.

## Prioritering voor MKB: waar begint je?

Voor een MKB-organisatie die net begint, raden wij de volgende prioriteringsvolgorde aan:

**Fase 1 — Fundament (eerste 3 maanden):**
- Informatiebeveiligingsbeleid (5.1)
- Rollen en verantwoordelijkheden (5.2)
- Assetinventaris (5.9)
- Toegangsbeheer (5.15)
- Bewustwording en training (6.3)

**Fase 2 — Risicobeheersing (maanden 3–6):**
- Risicobeoordeling en risicobehandelplan
- Incidentbeheer (5.24–5.26)
- Patchmanagement / kwetsbaarheidsbeheer (8.8)
- Logging en monitoring (8.15, 8.16)
- Backup en herstel (8.13)

**Fase 3 — Verdieping (maanden 6–12):**
- Leveranciersbeheer (5.19, 5.20)
- Business continuity (5.29, 5.30)
- Cryptografie (8.24)
- Cloud-specifieke controls (5.23)
- Penetratietesten (8.8)

## Veelgestelde vragen

**Moeten wij alle 93 controls implementeren?**
Nee. Je moet alle 93 controls beoordelen en documenteren in je Statement of Applicability. Voor elke relevante control bepaal je een passende maatregel; irrelevante controls worden gemotiveerd uitgesloten.

**Hoe verschilt Annex A van de hoofdtekst van de norm?**
De hoofdtekst van ISO 27001 (clausules 4–10) beschrijft het managementsysteem zelf: hoe je het opzet, onderhoudt en verbetert. Annex A is een referentielijst van beveiligingsmaatregelen die je selecteert op basis van je risicoanalyse.

**Waar vind ik de volledige beschrijving van elke control?**
De uitgebreide implementatieguidance voor alle controls staat in ISO 27002:2022. Dit is een apart document dat je aanschaft naast ISO 27001. Control One verwerkt de relevante implementatierichtlijnen direct in je ISMS-templates.

---

Wil je weten welke van de 93 Annex A controls specifiek van toepassing zijn op je organisatie? Bekijk hoe Control One je helpt bij het opstellen van een volledig en verdedigbaar Statement of Applicability via onze [prijzenpagina](/prijzen).
