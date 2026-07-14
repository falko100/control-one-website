---
title: 'Het shared responsibility model begrijpen: wie beveiligt wat in de cloud?'
description: '"De cloud is toch veilig?" Zo werkt het gedeelde verantwoordelijkheidsmodel, en waarom de leverancier het platform beveiligt maar jij je eigen data.'
publishDate: 2026-10-07
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['shared responsibility', 'cloud verantwoordelijkheid', 'clouddiensten iso 27001', 'cloud beveiliging']
---

"Onze data staat in de cloud, dus die is veilig" is een van de gevaarlijkste aannames in het MKB. De waarheid: de cloudleverancier beveiligt het platform, maar een groot deel blijft jouw verantwoordelijkheid. Dat verschil heet het shared responsibility model, en misverstanden erover zijn een hoofdoorzaak van cloudincidenten.

## Wat de leverancier doet, en wat jij doet

[Annex A-maatregel 5.23](/kennis/iso-27001/annex-a-5-23-clouddiensten/) vraagt dat je de verantwoordelijkheidsverdeling kent. Grofweg:

| Leverancier beveiligt | Jij beveiligt |
|---|---|
| De fysieke datacenters | Je gebruikers en toegang (MFA) |
| De infrastructuur en het platform | Je configuratie en instellingen |
| De beschikbaarheid van de dienst | Je dataclassificatie |
| Platform-patches | Meestal: back-up van je eigen data |

De exacte grens verschilt per dienst (IaaS, PaaS, SaaS), maar de kern blijft: identiteit, configuratie en databeheer zijn vrijwel altijd van jou.

## De drie klassieke misverstanden

1. **"De leverancier maakt back-up van mijn data."** Meestal niet tegen jouw fouten of ransomware. De [back-up](/kennis/iso-27001/annex-a-8-13-back-up-van-informatie/) van je eigen data is jouw taak.
2. **"De standaardinstellingen zijn veilig."** Zelden. Cloudomgevingen komen vaak met ruime standaardrechten en open deelopties. [Configureer bewust](/kennis/iso-27001/annex-a-8-9-configuratiebeheer/).
3. **"Inloggen is veilig genoeg."** Zonder [MFA](/kennis/iso-27001/wat-is-mfa/) is een cloudaccount met alleen een wachtwoord de makkelijkste ingang die er is.

## Zo pak je het aan

Bij elke kritische clouddienst: leg vast wat de leverancier doet en wat jij moet regelen. Configureer de beveiligingsbaseline (MFA verplicht, extern delen beperkt, [logging](/kennis/iso-27001/annex-a-8-15-logging/) aan), en regel de [exit-strategie](/kennis/iso-27001/eigen-server-of-cloud/): hoe krijg je je data eruit als het moet?

> **Tip van Control One:** De verschuiving naar de cloud lost de infrastructuurrisico's grotendeels op, maar maakt identiteit en configuratie het nieuwe front. Verleg je aandacht daarheen: MFA en conditional access, veilige configuratie, en zicht op wie waarbij kan. Dat is waar cloudincidenten in de praktijk ontstaan.

## Waar de auditor op let

De auditor pakt je kritische clouddiensten en toetst: ken je de verantwoordelijkheidsverdeling, is de dienst bewust geconfigureerd, en heb je een antwoord op de exitvraag? "Dat regelt de leverancier wel" is geen antwoord.

Wil je weten of jouw cloudgebruik beheerst is? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
