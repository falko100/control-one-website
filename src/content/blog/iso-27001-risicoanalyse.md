---
title: 'Hoe voert u een risicoanalyse uit voor ISO 27001?'
description: "Stap voor stap door het identificeren van assets, dreigingen, kwetsbaarheden en risicobehandeling."
publishDate: 2026-04-04
category: 'ISO 27001'
readTime: '8 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'ISO 27001 risicoanalyse — Control One'
keywords:
  - 'ISO 27001 risicoanalyse'
  - 'risicobehandeling ISMS'
  - 'assets inventarisatie'
  - 'risicobeoordeling informatiebeveiliging'
draft: false
---

De **risicoanalyse** is het fundament van elk ISO 27001-implementatietraject. Zonder een gedegen risicoanalyse kunt u geen gerichte beveiligingsmaatregelen kiezen en geen goed onderbouwde Verklaring van Toepasselijkheid opstellen. Toch is dit ook het onderdeel waar veel MKB-organisaties vastlopen: te abstract, te complex, of simpelweg niet wetend waar te beginnen.

In dit artikel legt de Control One Redactie stap voor stap uit hoe u een praktische en ISO 27001-conforme risicoanalyse uitvoert — zonder een consultant in te huren voor elke stap.

## Wat vereist ISO 27001 precies?

ISO 27001 stelt in clausule 6.1.2 dat u een **risicobeoordeling van informatiebeveiliging** moet uitvoeren die:

- Criteria voor risicoaanvaarding vaststelt
- Informatiebeveiligingsrisico's identificeert
- De kans en impact van risico's analyseert
- Risico's prioriteert op basis van de risicoanalyseresultaten

De norm schrijft bewust geen specifieke methode voor. U mag zelf bepalen of u werkt met een kwantitatieve of kwalitatieve methode, zolang u maar consistent bent en uw aanpak gedocumenteerd heeft.

## Stap 1: Assetinventarisatie

Voordat u risico's kunt identificeren, moet u weten wat u te beschermen heeft. Een **assetinventaris** bevat alle informatieassets van uw organisatie.

Assets zijn breder dan alleen systemen. Denk aan:

| Categorie | Voorbeelden |
|-----------|-------------|
| Informatieactiva | Klantgegevens, contracten, financiële data, IP |
| Softwareactiva | ERP-systeem, CRM, e-mailomgeving, SaaS-tools |
| Hardwareactiva | Servers, laptops, smartphones, netwerkapparatuur |
| Dienstverlenende activa | Internetverbinding, hostingprovider, clouddiensten |
| Menselijke activa | Medewerkers met specialistische kennis of toegang |
| Immateriële activa | Reputatie, klantvertrouwen, merkwaarde |

Per asset legt u vast: wie de **eigenaar** is, hoe kritisch het asset is (beschikbaarheid, integriteit, vertrouwelijkheid — ook wel BIV-classificatie), en welke systemen ervan afhankelijk zijn.

## Stap 2: Dreigingen en kwetsbaarheden identificeren

Bij elk asset analyseert u welke **dreigingen** van toepassing zijn en welke **kwetsbaarheden** deze dreigingen kunnen benutten.

Een dreiging is een potentiële oorzaak van een ongewenste gebeurtenis. Kwetsbaarheden zijn zwakheden die een dreiging de kans geven om daadwerkelijk schade te veroorzaken.

Veelvoorkomende dreigingen voor MKB:

- Phishing en social engineering
- Ransomware en malware
- Ongeautoriseerde toegang door (ex-)medewerkers
- Datalekken via leveranciers
- Uitval van cloudinfrastructuur
- Menselijke fouten bij configuratie

> **Tip:** Gebruik de ISO 27005 of de ENISA Threat Landscape als referentie voor een complete dreigingslijst. U hoeft niet elk risico zelf te verzinnen — bestaande catalogi geven een uitstekend startpunt.

## Stap 3: Risiconiveau bepalen

Voor elk geïdentificeerd risico berekent u het risiconiveau. De meest gebruikte formule is:

**Risico = Kans × Impact**

Beide factoren beoordeelt u op een schaal, doorgaans van 1 tot 3 of 1 tot 5. Definieer deze schalen vooraf en documenteer de definities. Zo is uw beoordeling consistent en reproduceerbaar.

Voorbeeld van een kansschaal:

| Score | Omschrijving |
|-------|-------------|
| 1 | Zeer onwaarschijnlijk (< 1x per 5 jaar) |
| 2 | Onwaarschijnlijk (1x per 2–5 jaar) |
| 3 | Mogelijk (1x per jaar) |
| 4 | Waarschijnlijk (meerdere keren per jaar) |
| 5 | Vrijwel zeker (regelmatig) |

Een risico met kans 4 en impact 5 heeft een risiconiveau van 20 — een hoog risico dat prioriteit verdient in de behandeling.

## Stap 4: Risicobehandeling kiezen

Voor elk risico kiest u een van de vier behandelingsopties die ISO 27001 beschrijft:

**Risico mitigeren** — u implementeert beveiligingsmaatregelen (controls) om kans en/of impact te verlagen. Dit is de meest gebruikte optie.

**Risico overdragen** — u brengt het risico onder bij een derde partij, bijvoorbeeld via een cyberverzekering of door diensten uit te besteden.

**Risico vermijden** — u stopt met de activiteit die het risico veroorzaakt. Niet altijd haalbaar, maar soms de slimste keuze.

**Risico accepteren** — u aanvaardt het risico bewust, omdat de kosten van mitigatie niet opwegen tegen de potentiële schade. Dit vereist expliciete goedkeuring van het management.

### Van risico naar control

Kiest u voor mitigatie, dan selecteert u passende controls uit Annex A van ISO 27001:2022. Dit is de directe verbinding tussen uw risicoanalyse en uw **Verklaring van Toepasselijkheid**: elke control die u toepast, moet terug te herleiden zijn naar een geïdentificeerd risico.

## Stap 5: Risicobehandelplan opstellen

Het **risicobehandelplan (RTP)** is het document waarin u per risico vastlegt:

- Welke behandelingsoptie u kiest
- Welke controls u implementeert
- Wie verantwoordelijk is voor implementatie
- Wanneer de implementatie gereed is
- Wat het residuele risiconiveau is na implementatie

Het RTP is een levend document. U evalueert het minimaal jaarlijks en na significante wijzigingen in uw organisatie of het dreigingslandschap.

## Stap 6: Goedkeuring door management

ISO 27001 vereist expliciete betrokkenheid van het topmanagement. Het management moet:

- Het risicobehandelplan goedkeuren
- Residuele risico's formeel accepteren
- Middelen beschikbaar stellen voor implementatie

Zonder deze stap is uw risicomanagementproces niet ISO 27001-conform. Leg de goedkeuring schriftelijk vast, bijvoorbeeld via notulen van een directievergadering.

## Veelgestelde vragen

**Hoe vaak moet ik de risicoanalyse herhalen?**
ISO 27001 vereist dat u de risicobeoordeling op geplande tijdstippen uitvoert én wanneer er significante wijzigingen plaatsvinden. In de praktijk doet u dit minimaal jaarlijks als onderdeel van uw managementreview.

**Moet ik alle 93 Annex A-controls evalueren?**
Nee. U kiest controls op basis van uw risicoanalyse. Wel moet u in uw VvT alle 93 controls langslopen en voor elke control documenteren of deze van toepassing is — en zo niet, waarom niet.

**Wat is een acceptabel risiconiveau?**
Dat bepaalt u zelf, op basis van uw risicobereidheid (risk appetite). Stel deze drempel vooraf vast en documenteer hem. Alles boven de drempel vereist behandeling; alles eronder kunt u formeel accepteren.

---

Een goed uitgevoerde risicoanalyse bespaart u tijd en geld bij de externe audit. Het is de basis van uw gehele ISMS. Met Control One doorloopt u het volledige risicoanalyseproces gestructureerd, met automatische koppeling naar de juiste Annex A-controls.

Ontdek hoe Control One uw risicoanalyse vereenvoudigt. Bekijk onze [prijzen en pakketten](/prijzen).
