---
title: "Annex A 7.5: Beschermen tegen fysieke en omgevingsdreigingen"
description: "Maatregel 7.5 van ISO 27001 Annex A eist bescherming tegen brand, water, stroomuitval en andere fysieke en omgevingsdreigingen, op basis van een risicobeoordeling."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.5 eist dat bescherming tegen fysieke en omgevingsdreigingen wordt ontworpen en geïmplementeerd: brand, wateroverlast, stroomuitval, storm en waar relevant ook opzettelijke dreigingen. De aanpak begint met een risicobeoordeling per locatie (wat kan hier gebeuren en wat raakt het) en vertaalt zich in nuchtere voorzieningen: branddetectie en -blussing, waterdetectie bij kwetsbare ruimten, en apparatuur niet in de kelder naast de waterleiding."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.5", "omgevingsdreigingen", "brand", "wateroverlast", "iso 27001"]
gerelateerd: ["annex-a-7-11-ondersteunende-nutsvoorzieningen", "annex-a-5-30-ict-gereedheid-bedrijfscontinuiteit", "risicoanalyse-uitvoeren"]
faq:
  - vraag: "Welke dreigingen moet je minimaal beoordelen?"
    antwoord: "Brand, water (lekkage, overstroming), stroomuitval, klimaat (oververhitting van apparatuurruimten), storm- en bliksemschade, en opzettelijke dreigingen zoals vandalisme of inbraak. Weeg per locatie: een pand aan een rivier heeft een ander profiel dan een kantoor op de vierde verdieping."
  - vraag: "Hoe verhoudt dit zich tot gewone brandveiligheid (bouwbesluit, verzekering)?"
    antwoord: "De wettelijke brandveiligheid en verzekeringseisen zijn het vertrekpunt; deze maatregel kijkt specifiek naar de bescherming van informatie en apparatuur: staat de server onder een sprinkler, ligt het papieren archief in de kelder, overleeft de back-up een brand in het pand?"
---

Annex A-maatregel 7.5 van ISO 27001, "Protecting against physical and environmental threats", gaat over de dreigingen die geen aanvaller nodig hebben: brand, water, stroom en storm richten meer schade aan informatievoorziening aan dan menig hacker.

## Wat eist de maatregel?

Bescherming tegen fysieke en omgevingsdreigingen, ontworpen op basis van een risicobeoordeling: natuurrampen en omgevingsincidenten, maar ook opzettelijke fysieke dreigingen. De maatregelen betreffen de locatiekeuze, de inrichting en de voorzieningen.

## Zo vul je hem in

1. **Beoordeel per locatie**: welke dreigingen zijn hier reëel (ligging, ouderdom pand, buren zoals een restaurant of opslag) en wat raken ze: apparatuurruimten, archief, werkplekken.
2. **Tref nuchtere voorzieningen**: rook- en branddetectie ook in de apparatuurruimte, passende blusmiddelen (geen sprinkler recht boven de servers), waterdetectie bij risicoplekken, apparatuur en archief niet op de vloer van kelder of begane grond bij wateroverlastrisico.
3. **Denk aan de back-up**: minimaal één kopie buiten het pand of offline in de cloud, zodat één gebeurtenis niet productie én back-up raakt (5.30).
4. **Leg de koppeling met continuïteit**: de scenario's uit deze beoordeling voeden de continuïteitsplannen (5.29, 5.30).

## Waar let de auditor op?

De auditor bekijkt de apparatuurruimte met deze bril: detectie aanwezig, blusmiddel passend, geen wateraansluitingen erboven, geen brandbare opslag (dozen, archief) in dezelfde ruimte? De klassieker: de serverruimte die tevens opslaghok is, vol papier en kartonnen dozen tegen de warme apparatuur.
