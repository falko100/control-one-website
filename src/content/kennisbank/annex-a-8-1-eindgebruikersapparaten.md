---
title: "Annex A 8.1: Eindgebruikersapparaten"
description: "Maatregel 8.1 van ISO 27001 Annex A eist bescherming van informatie op laptops, telefoons en andere eindgebruikersapparaten. Baseline, MDM en BYOD uitgelegd."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.1 eist dat informatie op eindgebruikersapparaten (laptops, telefoons, tablets) wordt beschermd: een vastgestelde veilige basisconfiguratie met versleuteling, schermvergrendeling, updates en malwarebescherming, centraal beheer via MDM waar mogelijk, wissen-op-afstand bij verlies, en duidelijke regels voor privé-apparaten (BYOD)."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.1", "eindgebruikersapparaten", "mdm", "byod", "iso 27001"]
gerelateerd: ["annex-a-7-9-bedrijfsmiddelen-buiten-het-terrein", "annex-a-5-10-aanvaardbaar-gebruik", "annex-a-6-7-werken-op-afstand"]
faq:
  - vraag: "Wat hoort er in een veilige apparaat-baseline?"
    antwoord: "Volledige schijfversleuteling, automatische schermvergrendeling, automatische updates, malwarebescherming (EDR of ten minste de ingebouwde beveiliging goed geconfigureerd), geen lokale adminrechten voor gebruikers, wissen-op-afstand en een gescheiden zakelijk profiel op telefoons."
  - vraag: "Hoe ga je om met BYOD?"
    antwoord: "Of niet toestaan voor toegang tot vertrouwelijke informatie, of onder voorwaarden: een beheerd zakelijk profiel (MAM/MDM) dat de organisatie kan wissen, versleuteling en vergrendeling verplicht, en vastgelegd in het gebruiksreglement. Onbeheerde privé-apparaten met volledige toegang zijn de facto onbeheersbaar."
---

Annex A-maatregel 8.1 van ISO 27001, "User endpoint devices", opent het technologische hoofdstuk waar het risico tegenwoordig het grootst is: de laptop en de telefoon zijn de plek waar informatie, gebruiker en buitenwereld elkaar raken.

## Wat eist de maatregel?

Informatie die is opgeslagen op, wordt verwerkt door of toegankelijk is via eindgebruikersapparaten wordt beschermd. Dat omvat: registratie van de apparaten, een veilige standaardconfiguratie, fysieke bescherming, versleuteling, malwarebescherming, updates, wissen op afstand, back-up van wat lokaal staat, en regels voor het gebruik (waaronder BYOD).

## Zo vul je hem in

1. **Definieer een baseline**: één vastgestelde veilige configuratie voor alle laptops en telefoons: versleuteling aan, automatische vergrendeling, automatische updates, malwarebescherming, geen lokale adminrechten.
2. **Beheer centraal**: MDM-tooling (bijvoorbeeld Intune of gelijkwaardig) dwingt de baseline af, geeft zicht op de vloot en maakt wissen-op-afstand mogelijk; koppel het aan het assetregister (5.9).
3. **Regel BYOD expliciet**: een beheerd zakelijk profiel als voorwaarde voor toegang, of geen toegang tot vertrouwelijke informatie vanaf privé-apparaten; leg het vast in het gebruiksreglement (5.10).
4. **Minimaliseer lokaal**: hoe minder er op het apparaat zelf staat (werken in de cloudomgeving), hoe kleiner de schade bij verlies.

## Waar let de auditor op?

De auditor vraagt het overzicht: hoeveel apparaten zijn er, voldoen ze aan de baseline, en hoe zie je dat? Een MDM-dashboard beantwoordt dat in één scherm. De klassieke bevindingen: de directielaptop die buiten het beheer valt, oude apparaten die nooit zijn gewist, en BYOD dat officieel niet bestaat maar in de praktijk overal is.
