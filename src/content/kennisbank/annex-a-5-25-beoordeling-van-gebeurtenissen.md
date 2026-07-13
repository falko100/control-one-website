---
title: "Annex A 5.25: Beoordeling van beveiligingsgebeurtenissen"
description: "Maatregel 5.25 van ISO 27001 Annex A eist dat gebeurtenissen worden beoordeeld en geclassificeerd: is dit een incident of niet? Zo richt je de triage in."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.25 eist dat informatiebeveiligingsgebeurtenissen worden beoordeeld en dat wordt besloten of ze als incident worden geclassificeerd. Niet elke melding is een incident: een tegengehouden phishingmail is een gebeurtenis, een geopende bijlage met malware een incident. Vaste criteria en een aangewezen beoordelaar zorgen dat de triage snel en consistent verloopt."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 5.25", "beveiligingsgebeurtenis", "incident classificatie", "triage", "iso 27001"]
gerelateerd: ["annex-a-5-24-incidentbeheer-planning", "annex-a-5-26-reageren-op-incidenten", "wat-is-een-datalek"]
faq:
  - vraag: "Wat is het verschil tussen een gebeurtenis en een incident?"
    antwoord: "Een gebeurtenis (event) is elk waargenomen signaal dat de beveiliging kan raken: een vreemde inlogpoging, een phishingmail, een kwijtgeraakte telefoon. Een incident is een gebeurtenis met (waarschijnlijke) daadwerkelijke schade aan vertrouwelijkheid, integriteit of beschikbaarheid. De beoordeling van 5.25 maakt precies dat onderscheid."
  - vraag: "Wie moet gebeurtenissen beoordelen?"
    antwoord: "Een aangewezen rol, meestal de incidentcoördinator of IT-verantwoordelijke, met vastgelegde criteria en de bevoegdheid om op te schalen. Ook de beslissing 'geen incident' wordt kort geregistreerd."
---

Annex A-maatregel 5.25 van ISO 27001, "Assessment and decision on information security events", is de triagestap van het incidentproces: bepalen wat een melding werkelijk is voordat je het hele respons-apparaat optuigt.

## Wat eist de maatregel?

Gebeurtenissen moeten worden beoordeeld tegen vastgestelde criteria, met als uitkomst een besluit: incident of geen incident, en bij een incident de prioriteit. De beoordeling gebeurt door een daartoe aangewezen rol en wordt geregistreerd, ook als de conclusie "vals alarm" is.

## Zo vul je hem in

1. **Stel classificatiecriteria vast**: wanneer is iets een incident (daadwerkelijke of waarschijnlijke schade aan vertrouwelijkheid, integriteit of beschikbaarheid) en welke prioriteiten hanteer je (bijvoorbeeld kritiek, hoog, normaal, op basis van impact en urgentie).
2. **Benoem de beoordelaar**: de incidentcoördinator beoordeelt binnen een afgesproken termijn (bijvoorbeeld dezelfde werkdag; direct bij spoedsignalen).
3. **Check standaard op datalek**: bij elke beoordeling expliciet de vraag of er persoonsgegevens in het spel zijn; dat activeert de 72-uurs meldtermijn van de AVG.
4. **Registreer alles**: gebeurtenis, beoordeling, besluit en motivering in het incidentregister. De niet-incidenten vormen waardevolle trendinformatie (5.27).

## Waar let de auditor op?

De auditor bekijkt het incidentregister en toetst de consistentie: worden gebeurtenissen volgens de criteria beoordeeld, binnen de afgesproken termijn, en is de datalek-check zichtbaar? De valkuil: een register met alleen grote incidenten, waaruit blijkt dat kleine gebeurtenissen nergens worden vastgelegd en de triage feitelijk ontbreekt.
