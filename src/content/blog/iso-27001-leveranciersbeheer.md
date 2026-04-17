---
title: 'Leveranciersbeheer in ISO 27001: zo pakt je het aan'
description: "Je leveranciers zijn onderdeel van je risicolandschap. Zo beheert je ketenrisico's conform ISO 27001."
publishDate: 2026-04-15
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'Leveranciersbeheer in ISO 27001: zo pakt je het aan — Control One'
keywords:
  - 'ISO 27001 leveranciersbeheer'
  - 'supply chain security ISO 27001'
  - 'leveranciersrisico informatiebeveiliging'
  - 'Annex A 5.19'
draft: false
---

Je organisatie werkt waarschijnlijk samen met tientallen externe partijen: cloudleveranciers, softwarebedrijven, accountants, schoonmaakdiensten, IT-beheerders. Elk van die leveranciers heeft toegang tot bepaalde informatie of systemen. En daarmee zijn ze ook een risicofactor. ISO 27001 erkent dit expliciet: leveranciersbeheer is een integraal onderdeel van een volwassen ISMS. Wie ketenrisico's negeert, heeft geen compleet beveiligingslandschap.

## Waarom leveranciers een beveiligingsrisico vormen

De meest spraakmakende cyberaanvallen van de afgelopen jaren waren geen directe aanvallen op het einddoelwit, maar aanvallen via een leverancier. De SolarWinds-aanval in 2020, waarbij software-updates werden misbruikt om duizenden organisaties te infiltreren, is het meest bekende voorbeeld. Maar ook kleinere incidenten zijn schering en inslag: een IT-beheerder die met een gecompromitteerde laptop toegang heeft tot je netwerk, een SaaS-leverancier die klantdata uitlekt, een drukker die vergeet een oud bestand te wissen.

ISO 27001 adresseert dit via controls 5.19 tot en met 5.22 in Bijlage A:

| Control | Onderwerp |
|---------|-----------|
| 5.19 | Informatiebeveiliging in leveranciersrelaties |
| 5.20 | Informatiebeveiliging in leveranciersovereenkomsten |
| 5.21 | ICT-ketenbeveiliging |
| 5.22 | Bewaking, beoordeling en wijzigingsbeheer van leveranciersdiensten |

Samen vereisen deze controls dat je leveranciers identificeert, beoordeelt, contractueel afspreekt wat je beveiligingsverwachtingen zijn, en die naleving periodiek monitort.

## Stap 1: inventariseer je leverancierslandschap

Begin met een overzicht. Welke externe partijen hebben toegang tot je informatie of systemen? Maak onderscheid naar het type toegang:

- **Directe systeemtoegang**: IT-beheerders, cloudproviders, hostingpartijen
- **Gegevensverwerking**: accountants, HR-dienstverleners, marketingbureaus
- **Fysieke toegang tot je locaties**: beveiliging, schoonmaak, onderhoud
- **Indirecte toegang via software**: SaaS-applicaties die bedrijfsdata verwerken

Niet elke leverancier vormt hetzelfde risico. Een leverancier die uitsluitend je kantoorbenodigdheden levert, vraagt een andere aanpak dan een cloudleverancier die je klantendatabase beheert.

> **Tip:** Gebruik een risicocategorisering voor leveranciers: laag (geen toegang tot gevoelige informatie), midden (beperkte toegang of verwerking van persoonsgegevens), hoog (uitgebreide toegang tot kritieke systemen of gevoelige bedrijfsinformatie). Pas je beheersmaatregelen aan op de categorie.

## Stap 2: stel beveiligingsvereisten in overeenkomsten

Control 5.20 vereist dat je in je leveranciersovereenkomsten expliciete afspraken maakt over informatiebeveiliging. Voor hoog-risico leveranciers zijn de minimale vereisten:

- Geheimhoudingsclausule (NDA)
- Verwerkersovereenkomst wanneer persoonsgegevens worden verwerkt (AVG-verplichting)
- Meldplicht bij beveiligingsincidenten die je data of systemen kunnen raken
- Recht op audit of inzage in beveiligingscertificaten (zoals ISO 27001 of SOC 2)
- Afspraken over subverwerkers: mag de leverancier je data doorgeven aan derden?
- Beleid voor veilig verwijderen van data bij beëindiging van de samenwerking

Voor laag-risico leveranciers volstaan doorgaans een NDA en een verwijzing naar je algemene beveiligingsvereisten in de inkoopvoorwaarden.

## Stap 3: beoordeel leveranciers bij aanvang en periodiek

Voordat je een nieuwe leverancier met toegang tot gevoelige informatie inschakelt, voert je een initiële beoordeling uit. Dit hoeft geen uitgebreide due diligence te zijn, maar omvat minimaal:

- Heeft de leverancier een ISO 27001-certificaat, SOC 2-rapport of vergelijkbaar bewijs van beveiligingsrijpheid?
- Is er een verwerkersovereenkomst of beveiligingsaddendum beschikbaar?
- Heeft de leverancier een eigen incidentmeldsysteem?
- Zijn er bekende beveiligingsincidenten in het verleden?

Na aanvang beoordeelt je de leverancier periodiek — minimaal jaarlijks voor hoog-risico leveranciers. Dit kan via een korte vragenlijst, een review van hun certificaten of een formeel auditgesprek.

## Stap 4: bewaken en bijsturen

Control 5.22 vereist dat je leveranciersprestaties bewaakt. In de praktijk betekent dit:

- Bijhouden of de leverancier zijn beveiligingsverplichtingen nakomt
- Registreren van incidenten die de leverancier heeft gemeld of die via de leverancier zijn ontstaan
- Beoordelen of wijzigingen bij de leverancier (nieuwe subverwerkers, nieuwe datacenters, wijzigingen in software) invloed hebben op je risicoprofiel

Houd een actueel leveranciersregister bij, inclusief de contactpersoon voor beveiligingszaken en de datum van de laatste beoordeling.

| Leverancier | Categorie | Laatste beoordeling | Certificaat | Actie vereist |
|------------|----------|-------------------|------------|--------------|
| Cloudopslag XYZ | Hoog | 2025-11-01 | ISO 27001 | Nee |
| IT-beheer ABC | Hoog | 2025-09-15 | SOC 2 Type II | Nee |
| Marketing bureau | Midden | 2025-06-01 | Geen | NDA verlengen |
| Schoonmaakdienst | Laag | 2024-12-01 | n.v.t. | Ja: verouderd |

## FAQ

**Moet ik van alle leveranciers een ISO 27001-certificaat eisen?**
Nee, dat is niet realistisch en ook niet wat ISO 27001 vereist. De norm vraagt dat je risico-gebaseerd te werk gaat. Van hoog-risico leveranciers mag je beveiligingsbewijs verwachten; van laag-risico leveranciers volstaan contractuele afspraken. Pas je eisen aan op het werkelijke risico.

**Geldt leveranciersbeheer ook voor gratis cloudtools die medewerkers zelf gebruiken (schaduw-IT)?**
Ja, en dit is een veelgenegeerd risico. Als medewerkers eigen cloudtools gebruiken om bedrijfsdata op te slaan of te delen — denk aan persoonlijke Google Drive, Dropbox of WeTransfer — vallen die tools buiten je contractuele beheer maar wél binnen je risicolandschap. Stel een beleid op voor goedgekeurde tools en maak duidelijk welke alternatieven niet zijn toegestaan.

---

Leveranciersbeheer is geen eenmalige formaliteit maar een doorlopend proces. Wie zijn ketenrisico's serieus neemt, bouwt niet alleen aan een robuuster ISMS, maar ook aan duurzamere en betrouwbaardere samenwerkingsrelaties.

Klaar om te starten? [Control One](/prijzen) begeleidt je door het hele implementatieproces.
