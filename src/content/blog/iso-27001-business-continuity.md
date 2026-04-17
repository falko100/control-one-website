---
title: 'Business continuity en ISO 27001: zo leg je de link'
description: "ISO 27001 en bedrijfscontinuïteit zijn onlosmakelijk verbonden. Zo integreert je BCP in je ISMS."
publishDate: 2026-04-23
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'Business continuity en ISO 27001: zo leg je de link — Control One'
keywords:
  - 'business continuity ISO 27001'
  - 'bedrijfscontinuïteit ISMS'
  - 'BCP ISO 27001'
  - 'Annex A 5.29'
draft: false
---

Wat doe je organisatie als de e-mail uitvalt, het boekhoudpakket onbereikbaar is of een ransomware-aanval je systemen treft? Voor veel MKB-organisaties is het antwoord: improviserend handelen. **ISO 27001** verwacht echter meer: een structurele aanpak van **bedrijfscontinuïteit** die is ingebed in je informatiebeveiligingsmanagementsysteem.

Bedrijfscontinuïteit en informatiebeveiliging worden vaak als aparte disciplines behandeld, maar in ISO 27001 zijn ze onlosmakelijk verbonden. In dit artikel lees je hoe je de koppeling legt, welke documenten je nodig heeft en hoe je dit praktisch aanpakt als MKB.

## Waarom ISO 27001 en business continuity samenhangen

**Informatiebeveiliging** gaat over de bescherming van de vertrouwelijkheid, integriteit en beschikbaarheid van informatie. Die derde pijler — **beschikbaarheid** — is precies waar business continuity over gaat. Als je systemen uitvallen, is je informatie niet beschikbaar, wat directe bedrijfsschade veroorzaakt.

ISO 27001 vereist via Annex A dat je nadenkt over wat er gebeurt als je informatiesystemen uitvallen:

- **Control 5.29**: Informatiebeveiliging tijdens verstoring — plannen voor continuïteit van informatiebeveiliging
- **Control 5.30**: ICT-gereedheid voor bedrijfscontinuïteit — technische maatregelen voor herstel

Daarnaast stelt clausule 6.1 van de norm dat je risico's moet identificeren, inclusief risico's die leiden tot verstoring van bedrijfsprocessen.

## De kern: Business Impact Analysis (BIA)

Het startpunt van elk continuïteitsplan is een **Business Impact Analysis (BIA)**. Hierin analyseert je welke processen kritiek zijn voor je organisatie en wat de gevolgen zijn van uitval.

Stel jezelf per kritiek proces de volgende vragen:

| Vraag | Doel |
|---|---|
| Wat is de maximaal acceptabele uitvalduur (RTO)? | Bepaalt hoe snel je moet kunnen herstellen |
| Wat is het maximale dataverlies dat acceptabel is (RPO)? | Bepaalt hoe frequent je backups nodig heeft |
| Welke systemen zijn nodig voor dit proces? | Bepaalt de scope van je continuïteitsmaatregelen |
| Wat zijn de financiële gevolgen per uur uitval? | Rechtvaardigt de investering in continuïteitsmaatregelen |

**RTO** staat voor Recovery Time Objective: de maximale tijd die mag verstrijken voordat een systeem of proces hersteld moet zijn. **RPO** staat voor Recovery Point Objective: de maximale hoeveelheid data die je bereid bent te verliezen, uitgedrukt in tijd (bijv. maximaal 4 uur aan verloren transacties).

## Het Business Continuity Plan (BCP)

Op basis van je BIA stel je een **Business Continuity Plan (BCP)** op. Dit plan beschrijft wat er moet gebeuren als een verstoring plaatsvindt. Een goed BCP bevat minimaal:

### 1. Activeringsprotocol

Wie besluit dat het BCP in werking treedt? Definieer drempelwaarden (bijv. uitval langer dan X uur) en benoem een crisiscoördinator met mandaat om beslissingen te nemen.

### 2. Communicatieplan

Wie informeert je, in welke volgorde, via welk kanaal? Stel een communicatieboom op met contactgegevens van medewerkers, leidinggevenden, klanten en leveranciers. Zorg dat dit plan ook toegankelijk is als je reguliere communicatiemiddelen uitvallen.

### 3. Uitwijkprocedures

Wat zijn de alternatieve werkwijzen als systemen uitvallen? Denk aan:
- Handmatige verwerking van orders
- Gebruik van mobiele data als het netwerk uitvalt
- Werken vanuit een alternatieve locatie

### 4. Herstelprocedures

Hoe herstelt je systemen na een incident? Documenteer stap voor stap hoe kritieke systemen worden hersteld, wie daarvoor verantwoordelijk is en hoe je verifieert dat het herstel succesvol is.

> **Tip:** Zorg dat je BCP ook gedrukt beschikbaar is (of op een locatie buiten je eigen systemen), zodat je het ook kunt raadplegen als je IT-systemen volledig uitgevallen zijn. Een continuïteitsplan dat alleen digitaal beschikbaar is, verliest zijn waarde op het moment dat je het het hardst nodig heeft.

## Technische maatregelen: de ICT-component

ISO 27001 control 5.30 richt zich specifiek op de ICT-gereedheid. Concrete technische maatregelen voor MKB:

| Maatregel | Wat het doet | Prioriteit |
|---|---|---|
| Offsite backups | Data bewaard buiten primaire locatie | Hoog |
| Automatische backupverificatie | Zekerheid dat backups herstelbaar zijn | Hoog |
| Redundante internetverbinding | Fallback als primaire verbinding uitvalt | Middel |
| Cloud-gebaseerde systemen | Minder afhankelijkheid van lokale hardware | Middel |
| UPS voor kritieke apparatuur | Bescherming tegen korte stroomuitval | Laag-middel |

Een veelgemaakte fout: **backups maken maar nooit testen**. Een backup is pas waardevol als je zeker weet dat je er ook daadwerkelijk uit kunt herstellen. Test je herstelprocedure minstens één keer per jaar volledig — en documenteer de testresultaten.

## Oefenen: de continuïteitstest

ISO 27001 verwacht dat je je continuïteitsplannen periodiek test en oefent. Dit kan op verschillende manieren:

- **Deskoefening (tabletop exercise)**: het team bespreekt een scenario door zonder systemen daadwerkelijk te raken
- **Technische hersteltest**: je herstelt daadwerkelijk een systeem vanuit backup op een testomgeving
- **Volledige simulatie**: je simuleert een uitval en voert de complete BCP-procedure uit

Begin met een deskoefening — die kost weinig tijd maar levert veel inzicht op in hiaten in je plan.

## Koppeling met je ISMS-documentatie

Je continuïteitsplannen zijn onderdeel van je ISMS-documentatie. Zorg dat:
- Het BCP is opgenomen in je ISMS als beheerd document
- De BIA input levert aan je risicoanalyse
- Testresultaten worden gedocumenteerd en besproken in de directiebeoordeling
- Het BCP jaarlijks wordt herzien en waar nodig bijgewerkt

## Veelgestelde vragen

**Heeft ISO 27001 een aparte eis voor een Disaster Recovery Plan (DRP)?**
ISO 27001 spreekt van continuïteitsplannen in brede zin. Een DRP — gericht op het technisch herstel van IT-systemen — is een logisch onderdeel hiervan, maar geen apart vereiste. In de praktijk zult je een BCP (organisatorisch) en een DRP (technisch) samen willen documenteren.

**Hoe verhoudt ISO 27001 zich tot ISO 22301 (business continuity management)?**
ISO 22301 is een volledige norm voor business continuity management. ISO 27001 raakt dit thema, maar gaat minder diep. Als bedrijfscontinuïteit een kernrisico is voor je organisatie (bijv. bij kritieke infrastructuur of financiële dienstverlening), overweeg dan een gecombineerde implementatie van beide normen.

**Moeten wij ook een pandemieplan hebben?**
ISO 27001 vereist dat je nadenkt over continuïteit bij alle relevante verstoringen — en een pandemie kan daar zeker onder vallen. Na de ervaringen van de afgelopen jaren beschouwt bijna elke auditor een scenario voor grootschalige personeelsuitval als onderdeel van een volwassen BCP.

---

Wil je je bedrijfscontinuïteitsplanning integreren in een compleet ISMS, zonder een dure consultant in te huren? Bekijk hoe Control One dit mogelijk maakt op onze [prijzenpagina](/prijzen).
