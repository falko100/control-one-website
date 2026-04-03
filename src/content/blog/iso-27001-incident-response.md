---
title: 'ISO 27001 incident response: van melding tot afhandeling'
description: "Een cyberincident is een kwestie van wanneer, niet of. Zo bouwt u een procedure conform ISO 27001."
publishDate: 2026-04-13
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'ISO 27001 incident response: van melding tot afhandeling — Control One'
keywords:
  - 'ISO 27001 incident response'
  - 'beveiligingsincident procedure'
  - 'ISMS incidentbeheer'
  - 'cyberincident afhandeling'
draft: false
---

Een ransomware-aanval om drie uur 's nachts. Een medewerker die per ongeluk klantgegevens naar het verkeerde e-mailadres stuurt. Een leverancier die meldt dat zijn systemen gecompromitteerd zijn. Beveiligingsincidenten zijn geen uitzondering meer — ze zijn de norm. De vraag is niet óf uw organisatie er mee te maken krijgt, maar hoe u reageert wanneer het zover is. ISO 27001 vereist dat u die vraag vooraf beantwoordt, niet op het moment van de crisis zelf.

## Wat vereist ISO 27001 voor incident response?

ISO 27001 behandelt incidentbeheer primair via de controls 5.24 tot en met 5.28 in Bijlage A. Samen vormen ze een volledig raamwerk voor het detecteren, rapporteren, beoordelen en afhandelen van beveiligingsincidenten.

| Control | Omschrijving |
|---------|-------------|
| 5.24 | Planning en voorbereiding van incidentbeheer |
| 5.25 | Beoordeling en besluitvorming over beveiligingsgebeurtenissen |
| 5.26 | Reactie op beveiligingsincidenten |
| 5.27 | Leren van beveiligingsincidenten |
| 5.28 | Verzamelen van bewijs |

De norm verwacht geen perfecte technische infrastructuur, maar wel een gedocumenteerde procedure die medewerkers kennen en kunnen volgen. Een incidentresponsprocedure die in een la ligt en nooit geoefend is, voldoet niet aan de geest van de norm.

## De vier fasen van een incident response procedure

Een solide incidentresponsprocedure volgt vier fasen die elkaar logisch opvolgen.

**Fase 1: Detectie en melding**
Incidenten worden niet altijd als zodanig herkend. Een medewerker die een verdachte e-mail ontvangt, een systeem dat trager dan normaal reageert of een onverwachte loginpoging: dit zijn signalen die tijdig moeten worden gemeld. Uw procedure begint met het laagdrempelig maken van melden. Stel een centraal meldpunt in — een e-mailadres, een ticketsysteem of een directe lijn naar de IT-verantwoordelijke — en communiceer dat actief naar alle medewerkers.

**Fase 2: Beoordeling en classificatie**
Niet elk gemeld incident is een beveiligingsincident. Een systeem dat offline gaat wegens onderhoud is iets anders dan een systeem dat offline gaat door een aanval. De procedure beschrijft hoe u een melding beoordeelt en classificeert. Gebruik een eenvoudige ernst-indeling: laag (geen directe impact), midden (beperkte impact, lokaal), hoog (brede impact of persoonsgegevens betrokken), kritiek (bedrijfsstilstand of ernstige datalek).

**Fase 3: Respons en inperking**
Zodra een incident is geclassificeerd, start de respons. De kern is inperking: voorkom dat het incident zich verder verspreidt. Isoleer getroffen systemen, reset gecompromitteerde accounts en informeer betrokken partijen. Documenteer elk actiestap met tijdstempel — niet alleen voor de auditor, maar ook voor uzelf bij de evaluatie achteraf.

**Fase 4: Herstel en evaluatie**
Nadat het incident is ingeperkt, volgt herstel van systemen en diensten. Daarna — en dit onderdeel wordt het vaakst overgeslagen — volgt een expliciete evaluatie: wat is er misgegaan, welke maatregel had dit kunnen voorkomen en welke verbeteractie wordt opgepakt? ISO 27001 verwacht dat u dit leert van incidenten (control 5.27) en de bevindingen terugkoppelt aan het ISMS.

> **Tip:** Oefen uw incidentresponseprocedure minimaal één keer per jaar met een tabletop-oefening. Bespreek een fictief scenario met de betrokken medewerkers en loop door de procedure. Zo ontdekt u hiaten voordat een echte crisis dat doet.

## Meldplichten die u niet mag vergeten

Naast uw interne procedure gelden er externe meldplichten die u bij ernstige incidenten moet nakomen.

**AVG-meldplicht.** Bij een datalek waarbij persoonsgegevens zijn betrokken, bent u verplicht dit binnen 72 uur te melden bij de Autoriteit Persoonsgegevens — tenzij het onwaarschijnlijk is dat het lek een risico oplevert voor betrokkenen. Betrokkenen zelf informeert u wanneer er een hoog risico is voor hun rechten en vrijheden.

**NIS2-meldplicht.** Valt uw organisatie onder NIS2? Dan geldt een aanvullende meldplicht bij significante verstoring van uw dienstverlening: een eerste melding binnen 24 uur, een gedetailleerdere melding binnen 72 uur.

Zorg dat uw incidentresponsprocedure expliciet verwijst naar deze externe meldverplichtingen, inclusief de contactgegevens van de relevante toezichthouders.

## Bewijs verzamelen conform control 5.28

Control 5.28 vereist dat u bij incidenten bewijsmateriaal verzamelt en bewaart. Dit is relevant wanneer een incident leidt tot juridische stappen, aangifte bij de politie of een claim bij uw cyberverzekering.

Praktische richtlijnen voor bewijsverzameling:
- Maak bij voorkeur een forensische kopie van getroffen systemen voordat u ze herstelt
- Bewaar logbestanden (systeemlogboeken, firewalllogs, e-mailheaders) en exporteer ze naar een veilige locatie
- Leg alle communicatie rondom het incident vast, inclusief tijdstippen
- Wijzig zo weinig mogelijk aan het systeem voordat het bewijs is veiliggesteld

Voor kleinere organisaties is een forensisch specialist inhuren niet altijd haalbaar. Schakel dan uw IT-leverancier in met expliciete instructie om bewijsmateriaal te bewaren.

## FAQ

**Moet elke medewerker de incidentresponsprocedure kennen?**
Medewerkers hoeven niet elke stap van de procedure te kennen, maar ze moeten wel weten hoe ze een verdacht incident melden en bij wie. Zorg dat het meldpunt bekend is en neem melden op als onderwerp in uw jaarlijkse security awareness training.

**Hoe gedetailleerd moet mijn incidentregistratie zijn?**
De auditor wil zien dat u incidenten registreert, classificeert, afhandelt en ervan leert. Een register met datum, omschrijving, classificatie, acties en uitkomst is voldoende. Het hoeft geen uitgebreid rapport te zijn; consistentie in registratie telt meer dan uitgebreidheid.

---

Een cyberincident is niet iets om te vermijden door te hopen dat het niet gebeurt. Het is iets om op voor te bereiden zodat u gecontroleerd kunt reageren wanneer het zover is. Een goed gedocumenteerde en geoefende incidentresponsprocedure is een van de meest zichtbare bewijzen van een volwassen ISMS.

Klaar om te starten? [Control One](/prijzen) begeleidt u door het hele implementatieproces.
