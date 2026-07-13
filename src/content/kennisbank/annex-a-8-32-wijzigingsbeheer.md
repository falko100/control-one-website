---
title: "Annex A 8.32: Wijzigingsbeheer"
description: "Maatregel 8.32 van ISO 27001 Annex A eist dat wijzigingen aan systemen en informatievoorziening via een beheerst proces lopen: impact, goedkeuring, test en terugvalplan."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.32 eist dat wijzigingen aan informatieverwerkende faciliteiten en systemen via een wijzigingsbeheerproces lopen: de wijziging is gespecificeerd, de impact op beveiliging en continuïteit beoordeeld, er is goedkeuring en een testmoment, een terugvalplan voor als het misgaat, en registratie. De zwaarte schaalt met het risico: een strak proces voor kritische systemen, een lichte routine voor kleine aanpassingen."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.32", "wijzigingsbeheer", "change management", "iso 27001"]
gerelateerd: ["annex-a-8-31-scheiding-van-omgevingen", "annex-a-8-9-configuratiebeheer", "annex-a-8-19-installatie-van-software"]
faq:
  - vraag: "Moet elke wijziging door een formeel proces?"
    antwoord: "De zwaarte mag schalen: standaardwijzigingen (goedgekeurde, repeteerbare aanpassingen zoals een gebruiker toevoegen) volgen een lichte vaste routine; significante wijzigingen (nieuwe systemen, migraties, firewall- en rechtenwijzigingen) krijgen expliciete impactbeoordeling, goedkeuring en terugvalplan. Leg de indeling vast."
  - vraag: "Wat is het minimum aan registratie?"
    antwoord: "Wat is er gewijzigd, waarom, door wie, wanneer, met welke goedkeuring en wat was het resultaat. Een ticketsysteem of zelfs een gedeeld logboek volstaat; het doel is dat je bij een storing of incident kunt terugvinden wat er recent is veranderd, want dat is bijna altijd de eerste vraag."
---

Annex A-maatregel 8.32 van ISO 27001, "Change management", adresseert de statistische waarheid van IT-beheer: de meeste storingen en veel beveiligingsgaten ontstaan direct na een wijziging.

## Wat eist de maatregel?

Wijzigingen aan informatieverwerkende faciliteiten en informatiesystemen zijn onderworpen aan wijzigingsbeheerprocedures: specificatie en planning van de wijziging, beoordeling van de mogelijke impact (ook op beveiliging), autorisatie, testen en acceptatie, communicatie naar betrokkenen, terugvalprocedures en registratie. Het geldt voor software, infrastructuur, configuraties (8.9) én processen.

## Zo vul je hem in

1. **Deel wijzigingen in**: standaard (lichte routine), significant (impactbeoordeling, goedkeuring, terugvalplan) en nood (achteraf gedocumenteerd en beoordeeld); de indeling voorkomt dat het proces bureaucratie wordt.
2. **Beoordeel de beveiligingsimpact expliciet**: raakt de wijziging toegangen, dataflows, de baseline (8.9) of leveranciers? Eén vaste vraag in het wijzigingsformulier dekt het af.
3. **Plan de terugweg**: back-up of snapshot vóór de wijziging, een beschreven terugvalstap en een gekozen moment met lage impact.
4. **Registreer centraal**: één plek (ticketsysteem) waar alle wijzigingen staan; bij incidenten is "wat is er recent veranderd" de eerste onderzoeksvraag (5.26).

## Waar let de auditor op?

De auditor pakt een recente significante wijziging (die migratie, die nieuwe firewall) en vraagt het spoor: impactbeoordeling, goedkeuring, test, terugvalplan. De klassieke bevinding: het proces bestaat, maar de helft van de wijzigingen gaat er buitenom, zichtbaar doordat de configuratie afwijkt van de laatst geregistreerde stand.
