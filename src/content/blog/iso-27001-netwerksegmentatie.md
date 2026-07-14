---
title: 'Netwerksegmentatie voor het MKB: waterdichte schotten in je netwerk'
description: 'Ransomware verspreidt zich lateraal door een plat netwerk. Zo verdeel je je netwerk in segmenten die de schade van een besmetting beperken.'
publishDate: 2026-07-31
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['netwerksegmentatie', 'netwerk mkb beveiligen', 'vlan', 'laterale beweging']
---

Stel: één werkplek raakt besmet. In een plat netwerk kan de aanvaller (of de ransomware) van daaruit alles bereiken: servers, back-ups, andere werkplekken. In een gesegmenteerd netwerk stuit hij op een schot. Dat verschil bepaalt of een besmetting een incident of een ramp wordt. [Netwerksegmentatie](/kennis/iso-27001/annex-a-8-22-netwerksegmentatie/) (Annex A-maatregel 8.22) legt die schotten aan.

## Waarom segmentatie tegen ransomware werkt

[Ransomware](/kennis/iso-27001/wat-is-ransomware/) verspreidt zich lateraal: van de eerste besmette machine naar alles wat bereikbaar is. Segmentatie beperkt dat bereik. Als werkplekken, servers en back-upsystemen gescheiden zijn met alleen noodzakelijk verkeer ertussen, blijft een besmetting kleiner en blijft je back-up buiten schot.

## De MKB-basis in drie segmenten

1. **Gastnetwerk gescheiden.** Een gastnetwerk zonder enige route naar het bedrijfsnetwerk is de absolute ondergrens. Privé-apparaten van medewerkers horen bij gast.
2. **IoT en randapparatuur apart.** Camera's, printers, toegangssystemen en domotica in een eigen segment. Dit zijn de slechtst onderhouden apparaten in elk netwerk, en dus het geliefdste bruggenhoofd.
3. **De kern beschermd.** Servers, opslag en back-upsystemen in een eigen segment, met alleen noodzakelijk verkeer vanaf werkplekken.

## Hoe ver moet je gaan?

| Niveau | Voor wie |
|---|---|
| Gast gescheiden van bedrijf | Minimum, voor iedereen |
| IoT in eigen segment | Sterk aanbevolen |
| Servers en beheer gescheiden | Wenselijk bij eigen infrastructuur |
| Volledige microsegmentatie | Enterprise-territorium |

De norm vraagt proportionaliteit, geen microsegmentatie voor een kantoor van tien man.

> **Tip van Control One:** Segmentatie werkt samen met je [firewall](/kennis/iso-27001/wat-is-een-firewall/) en [netwerkbeveiliging](/kennis/iso-27001/annex-a-8-20-netwerkbeveiliging/). Schakel ongebruikte netwerkpoorten uit en zet publieke poorten (spreekkamer, hal) op het gastnetwerk. Dat haalt de angel uit het klassieke risico: iemand die in de wachtruimte een kabel inprikt en op je interne netwerk zit.

## Waar de auditor op let

De auditor toetst de basis: kan een gast bij bedrijfsdata, staan de camera's tussen de werkplekken, is de back-up bereikbaar vanaf elke besmette laptop? Bij een plat netwerk zonder enige scheiding wil de auditor ten minste een bewuste risicoafweging zien, en die is er zelden.

Segmentatie is één laag in een weerbare netwerkarchitectuur. Bekijk het geheel via de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/) of doe de [Quickscan](/quickscan).
