---
title: "Annex A 7.13: Onderhoud van apparatuur"
description: "Maatregel 7.13 van ISO 27001 Annex A eist correct onderhoud van apparatuur voor beschikbaarheid en integriteit, inclusief beveiligingseisen bij onderhoud door derden."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.13 eist dat apparatuur correct wordt onderhouden om beschikbaarheid, integriteit en vertrouwelijkheid te waarborgen: onderhoud volgens leveranciersvoorschriften, uitgevoerd door geautoriseerd personeel, met registratie van (vermoede) gebreken en al het onderhoud, en beveiligingsmaatregelen wanneer apparatuur voor reparatie de deur uit gaat (gegevens wissen of versleuteld houden)."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.13", "onderhoud apparatuur", "reparatie", "iso 27001"]
gerelateerd: ["annex-a-7-14-veilig-verwijderen-van-apparatuur", "annex-a-7-11-ondersteunende-nutsvoorzieningen", "annex-a-5-19-leveranciersrelaties"]
faq:
  - vraag: "Wat is het beveiligingsrisico van een reparatie?"
    antwoord: "Een laptop of server die ter reparatie gaat, bevat bedrijfsgegevens die bij de reparateur voor het grijpen liggen. Versleuteling van de schijf dekt veel af; bij gevoelige systemen geldt: schijf eruit of data gewist vóór verzending, en een geheimhoudingsafspraak met de reparatiepartij (5.20)."
  - vraag: "Welk onderhoud is relevant voor een cloud-first MKB?"
    antwoord: "De eigen apparatuur die overblijft: laptops (accu, schade), netwerkapparatuur (firmware hoort bij 8.8, fysieke staat hier), UPS-accu's, airco van de apparatuurruimte en toegangs- en alarmsystemen. Plan het jaarlijks en registreer het kort."
---

Annex A-maatregel 7.13 van ISO 27001, "Equipment maintenance", borgt dat apparatuur blijft doen wat ze moet doen, en dat onderhoud zelf geen lek wordt.

## Wat eist de maatregel?

Apparatuur wordt correct onderhouden: volgens de aanbevolen intervallen en voorschriften van de leverancier, door geautoriseerd onderhoudspersoneel, met registratie van storingen, vermoede gebreken en al het uitgevoerde onderhoud. Bij onderhoud op locatie gelden de regels voor werken in beveiligde gebieden (7.6); bij onderhoud buiten de deur worden de gegevens beschermd.

## Zo vul je hem in

1. **Maak een onderhoudskalender**: UPS-accu's, koeling, alarmsysteem, brandblussers en kritische apparatuur met hun intervallen; registreer uitvoering en bevindingen.
2. **Beheers reparaties buiten de deur**: schijfversleuteling standaard aan (dan is verzending acceptabel), bij gevoelige systemen data of schijf eruit vóór verzending, en geheimhoudingsafspraken met de reparateur.
3. **Begeleid onderhoud op locatie**: aangemeld en onder toezicht in de beperkte zone (7.6), met registratie van wat er is gedaan.
4. **Volg gebreken op**: storingen en vermoede manipulatie worden gemeld (6.8) en beoordeeld; een kapot slot of haperende deurdranger is ook een beveiligingsgebrek.

## Waar let de auditor op?

De auditor vraagt naar de onderhoudsregistratie van de kritieke voorzieningen (UPS, koeling, alarm) en naar de route bij reparaties: wat gebeurde er met de data op dat apparaat dat vorig kwartaal ter reparatie ging? Verlopen onderhoud van UPS en blusmiddelen en reparaties zonder enige gegevensafweging zijn de gangbare bevindingen.
