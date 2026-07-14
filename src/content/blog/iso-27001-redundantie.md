---
title: 'Redundantie: single points of failure elimineren'
description: 'Eén internetlijn, één firewall, één beheerder met alle wachtwoorden. Zo spoor je single points of failure op en bouw je redundantie waar de beschikbaarheid het vraagt.'
publishDate: 2026-10-09
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['redundantie', 'single point of failure', 'beschikbaarheid', 'failover']
---

Elk systeem heeft een zwakste schakel. De ene internetlijn die uitvalt, de ene firewall die kapotgaat, de ene beheerder die met alle wachtwoorden op vakantie is. [Redundantie](/kennis/iso-27001/annex-a-8-14-redundantie/) (Annex A-maatregel 8.14) gaat over niet-uitvallen in plaats van herstellen: waar stilstand onacceptabel is, voer je dubbel uit.

## Back-up versus redundantie

Twee verschillende dingen:

- **[Back-up](/kennis/iso-27001/annex-a-8-13-back-up-van-informatie/)** beschermt je data en maakt herstel mogelijk ná uitval.
- **Redundantie** voorkomt de uitval zelf door dubbele uitvoering.

Back-up is verplicht voor iedereen; redundantie alleen waar de beschikbaarheidseis het rechtvaardigt.

## Zoek de single points of failure

De kernvraag: waar hangt alles aan één schakel?

- De ene internetverbinding (terwijl alles in de cloud draait)
- De ene firewall of switch
- De ene beheerder met alle kennis en wachtwoorden
- De ene leverancier zonder alternatief

Benoem ze expliciet, en besluit per stuk: verdubbelen of bewust accepteren.

## Laat de eisen leidend zijn

Alles verdubbelen is onbetaalbaar en onnodig. Uit je [risicoanalyse](/kennis/iso-27001/risicoanalyse-uitvoeren/) en je hersteldoelen (RTO's) volgt welke onderdelen redundant moeten. Voor cloud-first organisaties is de internetverbinding vaak de levensader; een tweede route (4G/5G-failover) is relatief goedkoop.

| Onderdeel | Redundantie-optie |
|---|---|
| Internet | Tweede route via ander medium |
| Cloudplatform | Ingebouwd bij grote leveranciers |
| Menselijke kennis | Minstens twee mensen die bij kritische systemen kunnen |
| Stroom | UPS op kritieke apparatuur |

> **Tip van Control One:** De menselijke single point of failure wordt het vaakst vergeten. Eén beheerder die als enige de wachtwoorden en de kennis heeft, is net zo'n risico als één internetlijn. Zorg dat minstens twee mensen bij de kritische [beheeromgevingen](/kennis/iso-27001/annex-a-8-2-speciale-toegangsrechten/) kunnen, en documenteer de [bedieningsprocedures](/kennis/iso-27001/annex-a-5-37-gedocumenteerde-bedieningsprocedures/).

## Test de omschakeling

Een failover die nooit is omgeschakeld, bestaat niet. Test de redundante componenten periodiek: wanneer is de tweede verbinding voor het laatst echt gebruikt? Een bewuste acceptatie ("dit is enkelvoudig, herstel binnen een dag is acceptabel") is prima; niet weten waar de zwakke plekken zitten niet.

Wil je je continuïteit versterken? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
