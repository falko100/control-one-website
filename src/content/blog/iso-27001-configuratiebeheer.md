---
title: 'Configuratiebeheer en hardening: de vergeten basismaatregel'
description: 'De meeste inbraken benutten geen exotische kwetsbaarheid maar een verkeerde instelling. Zo richt je configuratiebeheer en hardening in volgens ISO 27001.'
publishDate: 2026-09-19
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['configuratiebeheer', 'hardening', 'security baseline', 'veilige configuratie']
---

De meeste inbraken benutten geen exotische zero-day, maar een verkeerde instelling die er altijd al stond: een fabriekswachtwoord, een open beheerpoort, een cloudomgeving op de onveilige standaardinstellingen. [Configuratiebeheer](/kennis/iso-27001/annex-a-8-9-configuratiebeheer/) (Annex A-maatregel 8.9) pakt precies dat aan.

## Wat is hardening?

Hardening is het dichttimmeren van systemen: standaardwachtwoorden wijzigen, onnodige diensten en poorten uitschakelen, ongebruikte accounts verwijderen, en veilige standaardinstellingen afdwingen. Het is de basismaatregel die audits én aanvallers als eerste vinden.

## Werk met security baselines

Een security baseline is een vastgestelde set veilige instellingen per systeemtype: wat staat aan en uit op een werkplek, server, firewall of cloudomgeving. Je hoeft hem niet zelf te verzinnen:

- Leveranciers en instanties zoals CIS publiceren baselines die je overneemt
- Voor Microsoft 365 zijn de secure score en aanbevolen beleidsregels een praktisch startpunt

## Dwing centraal af

| Handwerk | Centraal afgedwongen |
|---|---|
| Verzandt in drift | Zelfhandhavend |
| Per apparaat verschillend | Consistent |
| Niet toetsbaar | Compliance-rapportage |

MDM-profielen en centraal beleid maken de baseline zelfhandhavend. Handmatig configureren leidt tot "drift": systemen die langzaam afwijken van de norm.

> **Tip van Control One:** Configuratiebeheer werkt samen met [kwetsbaarhedenbeheer](/kennis/iso-27001/annex-a-8-8-technische-kwetsbaarheden/) (8.8). Patchen dicht bekende gaten, hardening voorkomt dat verkeerde instellingen nieuwe gaten creëren. Samen vormen ze de technische basishygiëne. Wijzigingen lopen via [wijzigingsbeheer](/kennis/iso-27001/annex-a-8-32-wijzigingsbeheer/) (8.32).

## Controleer periodiek

Een compliance-dashboard of secure-score-meting tegen de baseline maakt zichtbaar wat de praktijk is in plaats van de bedoeling. Afwijkingen behandel je als bevinding. De auditvraag: hoe weet je dat alle werkplekken versleuteld zijn en de firewall geen open beheerpoort naar internet heeft? Een dashboard is het sterkste antwoord.

Hardening is de goedkoopste risicoreductie die er is: het kost vooral discipline, geen geld. Wil je weten waar jouw configuraties staan? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
