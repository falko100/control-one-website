---
title: 'Sleutelbeheer: het onderschatte deel van cryptografie'
description: 'Versleuteling zonder goed sleutelbeheer beschermt vooral tegen jezelf. Zo beheer je cryptografische sleutels en herstelsleutels volgens ISO 27001.'
publishDate: 2026-08-12
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['sleutelbeheer', 'cryptografie iso 27001', 'herstelsleutels', 'key management']
---

Versleuteling is de sterkste beschermingslaag die er is. Maar er zit een addertje onder het gras: versleuteling zonder goed sleutelbeheer beschermt vooral tegen jezelf. De laptop die je niet meer kunt openen omdat de herstelsleutel nergens staat, is net zo onbereikbaar voor jou als voor een aanvaller.

## Wat vraagt ISO 27001?

[Annex A-maatregel 8.24](/kennis/iso-27001/annex-a-8-24-cryptografie/) vraagt regels voor het effectieve gebruik van cryptografie, inclusief het beheer van cryptografische sleutels door hun hele levenscyclus: genereren, opslaan, distribueren, vervangen en vernietigen.

## Het onderschatte onderdeel

Iedereen zet [versleuteling](/kennis/iso-27001/wat-is-versleuteling/) aan; weinigen denken na over de sleutels. Twee klassieke problemen:

- **Verloren herstelsleutels:** de herstelsleutels van versleutelde laptops die nergens zijn opgeslagen, waardoor data onbereikbaar wordt bij een probleem.
- **Verlopen certificaten:** het TLS-certificaat dat onverwacht verloopt en een dienst platlegt. De meest voorkomende zelfveroorzaakte storing.

## Zo regel je sleutelbeheer

1. **Bewaar herstelsleutels centraal en veilig.** De herstelsleutels van apparaatversleuteling horen in je MDM- of identiteitsomgeving, niet op een post-it of in iemands hoofd.
2. **Houd geheimen buiten scripts en code.** API-sleutels en wachtwoorden in een geheimenbeheerder, niet hardcoded.
3. **Beperk de toegang** tot sleutels; behandel ze als het gevoeligste dat je hebt.
4. **Bewaak certificaten** met een registertje met vervaldatums en automatische verlenging waar mogelijk.

## Kies actuele standaarden

Je hoeft niets zelf te bouwen: moderne platforms leveren sterke versleuteling ingebouwd. De taak is haar overal aanzetten (op [apparaten](/kennis/iso-27001/annex-a-8-1-eindgebruikersapparaten/), [back-ups](/kennis/iso-27001/annex-a-8-13-back-up-van-informatie/), verbindingen) en verouderde protocollen uitzetten. Volg de aanbevelingen van platforms en het NCSC in plaats van zelf te ontwerpen.

> **Tip van Control One:** De auditvraag is nooit "gebruiken jullie encryptie?" maar "waar staat versleuteling aan, waar bewust niet, en wie beheert de sleutels?" Zorg dat je op alle drie een helder antwoord hebt. Het middelste (bewust niet) is toegestaan, mits gedocumenteerd.

## Waar de auditor op let

De auditor toetst de dekking (staat versleuteling overal aan waar het beleid het zegt) en het sleutelbeheer: waar liggen de herstelsleutels, wie kan erbij, wat gebeurt er als de beheerder wegvalt? De klassiekers: laptops zonder geregistreerde herstelsleutel, en dat ene verouderde protocol dat nog aanstaat zonder gedocumenteerde afweging.

Cryptografie en sleutelbeheer zijn onderdeel van hoofdstuk 8. Bekijk het geheel via de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/) of doe de [Quickscan](/quickscan).
