---
title: 'Mobiele apparaten beveiligen onder ISO 27001 (MDM)'
description: 'Laptops en telefoons zijn de plek waar informatie, gebruiker en buitenwereld elkaar raken. Zo beveilig je eindgebruikersapparaten met een baseline en MDM.'
publishDate: 2026-07-27
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['mobiele apparaten beveiligen', 'mdm iso 27001', 'eindgebruikersapparaten', 'byod beleid']
---

De laptop en de telefoon zijn tegenwoordig de plek waar het risico het grootst is: daar komen informatie, gebruiker en buitenwereld samen. Een verloren apparaat, een gephishte gebruiker of een onbeheerde privé-telefoon kan een organisatie meer schade toebrengen dan menig serverincident. [Annex A-maatregel 8.1](/kennis/iso-27001/annex-a-8-1-eindgebruikersapparaten/) vraagt daarom om beheerste eindgebruikersapparaten.

## De veilige baseline

Definieer één vastgestelde veilige configuratie voor alle laptops en telefoons:

- Volledige [schijfversleuteling](/kennis/iso-27001/wat-is-versleuteling/)
- Automatische schermvergrendeling
- Automatische updates
- Malwarebescherming (EDR of goed geconfigureerde ingebouwde bescherming)
- Geen lokale adminrechten voor gebruikers
- Wissen op afstand bij verlies of diefstal

## Waarom MDM het verschil maakt

Met Mobile Device Management-tooling (zoals Microsoft Intune) dwing je die baseline centraal af, zie je in één scherm of de hele vloot voldoet, en kun je een verloren apparaat op afstand wissen. Zonder MDM is je baseline een belofte; met MDM is het een afgedwongen werkelijkheid. Koppel de apparaten aan je [assetregister](/kennis/iso-27001/annex-a-5-9-inventarisatie-van-bedrijfsmiddelen/), op naam.

## Het BYOD-vraagstuk

Privé-apparaten (Bring Your Own Device) zijn de lastigste categorie. Twee werkbare routes:

1. **Niet toestaan** voor toegang tot vertrouwelijke informatie.
2. **Onder voorwaarden toestaan** via een beheerd zakelijk profiel dat de organisatie kan wissen, met versleuteling en vergrendeling verplicht.

Onbeheerde privé-apparaten met volledige toegang zijn de facto onbeheersbaar. Leg de keuze vast in je [gebruiksreglement](/kennis/iso-27001/gebruiksreglement-opstellen/).

> **Tip van Control One:** Hoe minder er lokaal op het apparaat staat, hoe kleiner de schade bij verlies. Werken in de cloudomgeving in plaats van bestanden lokaal opslaan, is zelf een beveiligingsmaatregel. Combineer dat met versleuteling, en een gestolen laptop is een kostenpost, geen datalek.

## Waar de auditor op kijkt

De auditor vraagt het overzicht: hoeveel apparaten zijn er, voldoen ze aan de baseline, en hoe zie je dat? Een MDM-dashboard beantwoordt dat in één scherm. De klassieke bevindingen: de directielaptop die buiten het beheer valt, oude apparaten die nooit zijn gewist, en BYOD dat officieel niet bestaat maar overal is.

Eindgebruikersapparaten raken ook je [thuiswerkbeleid](/kennis/iso-27001/annex-a-6-7-werken-op-afstand/) en toegangsbeheer. Bekijk het geheel via de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/) of doe de [Quickscan](/quickscan).
