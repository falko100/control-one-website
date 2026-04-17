---
title: 'ISO 27001:2022: Wat is er veranderd in Annex A?'
description: "De 2022-revisie bracht 93 controls en 4 nieuwe categorieën. Wat veranderde er en wat moet je aanpassen?"
publishDate: 2026-04-03
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'ISO 27001:2022 Annex A wijzigingen — Control One'
keywords:
  - 'ISO 27001 2022'
  - 'Annex A wijzigingen'
  - 'ISO 27001 revisie'
  - 'nieuwe controls ISO 27001'
draft: false
---

In oktober 2022 verscheen de herziene versie van **ISO/IEC 27001**, de internationale standaard voor informatiebeveiliging. De revisie bracht de meest ingrijpende wijziging van Annex A in jaren: van 114 controls verdeeld over 14 domeinen naar 93 controls verdeeld over 4 thematische categorieën. Voor organisaties die al gecertificeerd zijn of bezig zijn met implementatie, roept dit een dringende vraag op: wat moet je nu precies aanpassen?

In dit artikel krijg je een helder overzicht van alle relevante wijzigingen, wat ze betekenen voor je **Information Security Management System (ISMS)**, en hoe je de overgang praktisch aanpakt.

## Van 114 naar 93 controls: hoe zit dat?

De daling van 114 naar 93 controls betekent niet dat er controls zijn geschrapt en het er allemaal makkelijker op is geworden. In de praktijk zijn er:

- **11 nieuwe controls** toegevoegd die inspelen op moderne dreigingen
- **24 controls** samengevoegd uit de 2013-versie
- **57 controls** ongewijzigd of licht herzien overgenomen

De 4 nieuwe categorieën vervangen de 14 oude domeinen:

| Categorie | Code | Aantal controls |
|-----------|------|----------------|
| Organisatorische controls | 5 | 37 |
| Persoonsgebonden controls | 6 | 8 |
| Fysieke controls | 7 | 14 |
| Technologische controls | 8 | 34 |

Deze indeling is bewust thematisch in plaats van functioneel. Het maakt het makkelijker om verantwoordelijkheden toe te wijzen: organisatie, mensen, locaties en systemen.

## De 11 nieuwe controls uitgelegd

De 11 nieuwe controls zijn de meest besproken toevoeging van de 2022-revisie. Ze reflecteren ontwikkelingen in het dreigingslandschap die in 2013 nog niet relevant waren.

### Technologisch georiënteerde nieuwe controls

**Control 8.23 – Web filtering** verplicht organisaties om het gebruik van externe websites te beheren en te monitoren. Dit gaat verder dan simpelweg verdachte sites blokkeren; je moet aantonen dat je een beleid heeft en dat dit wordt gehandhaafd.

**Control 8.28 – Veilige codering** is relevant voor alle organisaties die software ontwikkelen of laten ontwikkelen. Het vereist een gedocumenteerde aanpak voor secure coding practices.

**Control 8.12 – Preventie van datalekkage (DLP)** verplicht technische en organisatorische maatregelen om ongeautoriseerde uitstroom van gevoelige informatie te detecteren en te voorkomen.

### Organisatorisch georiënteerde nieuwe controls

**Control 5.7 – Dreigingsinformatie** schrijft voor dat organisaties actuele informatie over cyberdreigingen verzamelen, analyseren en toepassen. Voor MKB betekent dit minimaal een abonnement op een betrouwbare dreigingsfeed.

**Control 5.30 – ICT-gereedheid voor bedrijfscontinuïteit** sluit aan op de bestaande eisen rondom business continuity, maar legt een specifieke nadruk op de ICT-component van je BCP.

**Control 5.23 – Informatiebeveiliging voor gebruik van clouddiensten** is voor vrijwel elke moderne organisatie direct relevant. Je moet je cloudleveranciers beoordelen en de beveiligingseisen contractueel vastleggen.

## Wat betekent dit voor je Verklaring van Toepasselijkheid?

Je **Verklaring van Toepasselijkheid (VvT)**, ook wel Statement of Applicability (SoA) genoemd, moet worden bijgewerkt naar de 2022-structuur. Dat betekent concreet:

1. De mapping van je huidige controls naar de nieuwe Annex A-nummering documenteren
2. Voor elk van de 11 nieuwe controls beslissen of deze van toepassing is en waarom
3. Uitsluitingen opnieuw motiveren op basis van de nieuwe categoriestructuur

> **Tip:** Maak voor jezelf een transitiematrix: zet links de oude controls (2013) en rechts de bijbehorende nieuwe controls (2022). Zo zie je direct wat samengevoegd is en wat nieuw is. Control One genereert deze matrix automatisch binnen het platform.

Meer over het correct invullen van de VvT lees je in ons artikel over de [Verklaring van Toepasselijkheid](/iso-27001).

## De overgangsperiode: wanneer moet je voldoen?

Organisaties die vóór november 2022 gecertificeerd waren op basis van ISO 27001:2013 hadden tot **31 oktober 2025** de tijd om te transitioneren naar de 2022-versie. Nieuwe certificeringen worden uitsluitend afgegeven op basis van de 2022-versie.

Als je nu met een implementatie begint, werk je direct met de 2022-versie. Je hoeft geen transitietraject te doorlopen, maar je moet wel vertrouwd zijn met de nieuwe structuur vanaf dag één.

## Praktische aanpak voor MKB

Voor een kleinere organisatie kan de overgang overweldigend lijken. In de praktijk valt het mee, mits je de aanpak structureert.

**Stap 1: Gap-analyse uitvoeren**
Vergelijk je bestaande controls met de 93 nieuwe controls. Welke zijn al gedekt? Welke zijn nieuw? Gebruik de officiële ISO 27002:2022 als leidraad voor implementatiebegeleiding per control.

**Stap 2: Focus op de 11 nieuwe controls**
Bepaal voor elk van de 11 nieuwe controls of deze van toepassing is op je organisatie. Veel organisaties kunnen een deel uitsluiten met een gedocumenteerde motivatie (bijvoorbeeld control 8.28 als je zelf geen software ontwikkelt).

**Stap 3: VvT bijwerken**
Pas je Verklaring van Toepasselijkheid aan op de nieuwe structuur. Dit document is het hart van je ISMS en de basis voor elke audit.

**Stap 4: Beleid en procedures aanpassen**
Pas bestaande beleidsdocumenten aan waar nodig. Nieuwe controls vereisen doorgaans nieuwe procedurebeschrijvingen.

## Veelgestelde vragen

**Moet ik als nieuw gecertificeerde organisatie ook iets doen met de overgangsperiode?**
Nee. Als je nu begint, implementeer je direct op basis van ISO 27001:2022. De overgangsperiode gold alleen voor organisaties die al gecertificeerd waren op de 2013-versie.

**Zijn de 11 nieuwe controls allemaal verplicht?**
Nee. Net als bij alle Annex A-controls kun je een control als niet-van-toepassing verklaren, mits je dit in je VvT gemotiveerd onderbouwt. Een externe auditor zal deze motivaties wel kritisch beoordelen.

**Wat gebeurt er als ik de nieuwe controls negeer?**
Als je voor een externe audit gaat, zal de auditor de 2022-versie als referentie gebruiken. Ontbrekende controls zonder motivatie leiden tot afwijkingen (non-conformities) die gecertificeerd worden hersteld voor certificaatverlening.

---

De overgang naar ISO 27001:2022 is voor de meeste MKB-organisaties goed te beheren, zeker als je een gestructureerde aanpak hanteert. Control One begeleidt je automatisch door deze transitie, van gap-analyse tot bijgewerkte VvT.

Bekijk onze [prijzen en pakketten](/prijzen) en ontdek hoe je ISO 27001:2022 compliancy bereikt zonder dure consultants.
