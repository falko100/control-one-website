---
title: 'ISO 27001 scope bepalen: de complete handleiding'
description: "Hoe bepaal je de juiste scope voor je ISMS? Te breed of te smal — beide kosten je geld."
publishDate: 2026-04-08
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'ISO 27001 scope bepalen — Control One'
keywords:
  - 'ISO 27001 scope'
  - 'ISMS scope bepalen'
  - 'scopedocument ISO 27001'
  - 'informatiebeveiliging reikwijdte'
draft: false
---

De **ISMS-scope** is het eerste strategische besluit dat je neemt bij een ISO 27001-implementatie. Het bepaalt welke delen van je organisatie, welke processen en welke informatiesystemen onder het managementsysteem vallen. Een te brede scope maak je implementatie onnodig complex en duur. Een te smalle scope kan klanten en auditoren teleurstellen — en leidt zelfs tot afwijkingen als je interfaces met buiten-scopegebieden onvoldoende heeft gedocumenteerd.

In dit artikel lees je hoe je de juiste scope bepaalt, wat je moet documenteren en welke veelgemaakte fouten je kunt vermijden.

## Waarom de scope zo belangrijk is

De scope definieert de grenzen van je ISMS. Alles wat binnen de scope valt, moet voldoen aan alle eisen van ISO 27001. Alles erbuiten niet — maar de interfaces daarmee moeten wel gedocumenteerd zijn.

Praktische impact van de scopekeuze:

- **Breedte bepaalt auditdagen:** Certificeringsinstanties baseren het aantal auditdagen op de scopegrootte. Meer medewerkers en systemen in scope = meer auditdagen = hogere kosten.
- **Scope stuur je risicoanalyse:** Alleen assets binnen de scope hoeven in je risicoanalyse opgenomen te worden.
- **Klanten kijken naar de scope:** Je certificaat vermeldt de scope. Een klant die je SaaS-omgeving wil beoordelen, wil die omgeving in de scope zien.

## Wat zegt ISO 27001 over de scope?

Clausule 4.3 van ISO 27001 vereist dat je de grenzen en toepasselijkheid van het ISMS bepaalt en documenteert. Hierbij houdt je rekening met:

- De externe en interne context van de organisatie (clausule 4.1)
- De eisen van belanghebbende partijen (clausule 4.2)
- Interfaces en afhankelijkheden tussen activiteiten die je organisatie uitvoert en activiteiten die worden uitgevoerd door andere organisaties

De derde factor is cruciaal: ook als een leverancier buiten je scope valt, moet je de interface met die leverancier beschrijven. Dit voorkomt dat een auditor een "scope gap" constateert.

## Stap 1: Begrijp je organisatiecontext

Voordat je de scopegrenzen tekent, analyseert je je organisatiecontext. Relevante vragen:

- Welke diensten of producten levert je?
- Welke locaties heb je?
- Welke informatiesystemen zijn kritisch voor je bedrijfsvoering?
- Welke externe partijen hebben toegang tot je informatie?
- Welke wettelijke, regelgevende of contractuele verplichtingen heb je?

Dit is de input voor je scopebeslissing. Een softwarebedrijf dat een SaaS-platform levert aan B2B-klanten heeft een fundamenteel andere context dan een retailorganisatie met meerdere fysieke vestigingen.

## Stap 2: Identificeer de scopeopties

Er zijn vier gangbare benaderingen voor scopebepaling:

| Benadering | Beschrijving | Geschikt voor |
|-----------|-------------|---------------|
| Volledige organisatie | Alle processen, locaties en medewerkers | Kleine organisaties, eerste certificering |
| Specifieke dienst | Alleen de processen rondom één dienst | SaaS-bedrijven, gespecialiseerde dienstverleners |
| Specifieke afdeling | Bijv. alleen IT of alleen R&D | Grote organisaties met een duidelijk af te grenzen divisie |
| Specifieke locatie | Alleen hoofdkantoor of datacentrum | Multinationals die stapsgewijs certificeren |

Voor MKB-organisaties is de keuze vaak eenvoudig: als je een relatief kleine organisatie bent met één kernproduct of -dienst, is de volledige organisatie als scope het meest transparant en makkelijker te verdedigen bij klanten.

> **Tip:** Bepaal je scope mede op basis van wat je klanten willen zien. Als je grootste klant vraagt om certificering voor je cloudomgeving, heeft het weinig zin om die omgeving buiten de scope te houden. Een certificaat dat niet aansluit bij klantbehoeften heeft beperkte commerciële waarde.

## Stap 3: Bepaal de precieze grenzen

Eenmaal gekozen voor een scopebenadering, tekent je de precieze grenzen. Leg voor elke grens vast:

**Organisatorische grenzen**
Welke afdelingen, teams of medewerkers vallen binnen de scope? Externe medewerkers, uitzendkrachten en freelancers die toegang hebben tot in-scope systemen, vallen doorgaans ook onder de scope.

**Geografische grenzen**
Welke locaties of landen vallen binnen de scope? Bij volledig remote werken is dit relevant: zijn thuiswerkplekken in scope?

**Technologische grenzen**
Welke informatiesystemen, netwerken, applicaties en cloudservices vallen binnen de scope? Maak een expliciete lijst.

**Procesgebonden grenzen**
Welke bedrijfsprocessen vallen binnen de scope? Denk aan: productontwikkeling, klantenservice, facturering, HR.

## Stap 4: Documenteer interfaces met buiten-scopegebieden

Een veelgemaakte fout is het volledig negeren van de grenzen. ISO 27001 vereist dat je interfaces met buiten-scopegebieden documenteert. Voorbeelden van interfaces:

- Een cloudleverancier (buiten scope) die je klantdata opslaat (in scope)
- Een externe accountant (buiten scope) die toegang heeft tot financiële systemen (in scope)
- Een moedermaatschappij (buiten scope) die je IT-infrastructuur beheert (in scope)

Bij elke interface beschrijft je welke informatie er uitgewisseld wordt, welke beveiligingsmaatregelen van toepassing zijn en hoe de afhankelijkheid beheerd wordt.

## Het scopedocument

Je scopebepaling leg je vast in een **scopedocument**. Dit is een beknopt document (1–3 pagina's) dat beschrijft:

- De naam van de organisatie en het ISMS
- Een beschrijving van de activiteiten binnen de scope
- De geografische locaties
- De informatiesystemen en -diensten
- De externe interfaces
- Wat expliciet buiten de scope valt en waarom

Het scopedocument is een verplicht document onder ISO 27001 (clausule 4.3) en wordt door de externe auditor beoordeeld aan het begin van de fase 1-audit.

## Veelgestelde vragen

**Kan ik mijn scope later uitbreiden?**
Ja, maar een scopewijziging vereist een nieuwe scopebeoordeling, aanpassing van de risicoanalyse en doorgaans een aanvullende audit. Plan de scope vooraf zo goed mogelijk om tussentijdse wijzigingen te vermijden.

**Moet elke medewerker in scope zijn?**
Niet per definitie. Medewerkers die geen toegang hebben tot in-scope informatie of systemen kunnen buiten de scope vallen. In de praktijk vallen bij de meeste MKB-organisaties alle medewerkers wel binnen de scope.

**Wat als mijn scope te smal is voor mijn klanten?**
Dan heb je een certificaat dat commercieel minder waarde heeft. Kijk vóór de scopebepaling goed naar wat je klanten en prospects verwachten van je certificering.

---

De juiste scope is de basis van een efficiënte en effectieve ISO 27001-implementatie. Een doordachte scopekeuze bespaart je auditdagen, implementatieinspanning en onderhoudskosten.

Control One begeleidt je stap voor stap door de scopebepaling en zorgt dat je scopedocument direct klaar is voor de externe audit. Bekijk onze [prijzen en pakketten](/prijzen).
