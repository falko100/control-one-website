---
title: "Annex A 8.20: Netwerkbeveiliging"
description: "Maatregel 8.20 van ISO 27001 Annex A eist dat netwerken en netwerkapparatuur worden beveiligd, beheerd en beheerst: firewall, wifi, beheertoegang en documentatie."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.20 eist dat netwerken en netwerkapparaten worden beveiligd, beheerd en beheerst om de informatie die erover loopt te beschermen: een goed geconfigureerde firewall, beveiligd wifi met gescheiden gastnetwerk, beheertoegang tot netwerkapparatuur beperkt en met MFA, actuele firmware en een actueel netwerkoverzicht. De verantwoordelijkheid voor netwerkbeheer is expliciet belegd."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.20", "netwerkbeveiliging", "firewall", "wifi", "iso 27001"]
gerelateerd: ["annex-a-8-21-beveiliging-van-netwerkdiensten", "annex-a-8-22-netwerksegmentatie", "annex-a-7-12-beveiliging-van-bekabeling"]
faq:
  - vraag: "Wat zijn de basiselementen van netwerkbeveiliging voor het MKB?"
    antwoord: "Een onderhouden firewall met dichte inkomende poorten en geen open beheerinterface naar internet, WPA2/WPA3-wifi met een gescheiden gastnetwerk, gewijzigde standaardwachtwoorden en actuele firmware op alle netwerkapparatuur, beheertoegang beperkt en gelogd, en een eenvoudig actueel netwerkschema."
  - vraag: "Geldt deze maatregel nog als alles in de cloud staat?"
    antwoord: "Ja: het kantoornetwerk blijft de toegangsweg (router, wifi, switches), en de netwerkkant van de cloudomgeving (virtuele netwerken, security groups) valt er ook onder. De aandacht verschuift van servers naar de verbinding en de identiteit, maar verdwijnt niet."
---

Annex A-maatregel 8.20 van ISO 27001, "Networks security", beveiligt de wegen waarover alle informatie reist: van de kantoorrouter tot de virtuele netwerken in de cloud.

## Wat eist de maatregel?

Netwerken en netwerkapparaten worden beveiligd, beheerd en beheerst: verantwoordelijkheden voor netwerkbeheer belegd, netwerkapparatuur veilig geconfigureerd (8.9 geldt ook hier), beheertoegang beschermd, logging van relevante gebeurtenissen (8.15), en actuele documentatie van de netwerkopbouw.

## Zo vul je hem in

1. **Hard de rand**: firewall met alleen de noodzakelijke inkomende openingen, geen beheerinterfaces bereikbaar vanaf internet, en firmware in de patchcyclus (8.8).
2. **Beveilig het draadloze net**: sterk beveiligd bedrijfs-wifi, een volledig gescheiden gastnetwerk voor bezoekers en privé-apparaten, en geen vergeten test-SSID's.
3. **Beheers het beheer**: toegang tot netwerkapparatuur alleen voor benoemde beheerders met MFA en gewijzigde standaardwachtwoorden; wijzigingen via het wijzigingsproces (8.32).
4. **Documenteer**: een actueel netwerkschema en een overzicht van de apparatuur (gekoppeld aan 5.9); onmisbaar bij storingen en incidenten.

## Waar let de auditor op?

De auditor vraagt het netwerkschema en toetst de basis: staan er beheerinterfaces open naar internet, is het gastnetwerk echt gescheiden, wanneer kreeg de firewall voor het laatst een update? De klassiekers: de router met het fabriekswachtwoord, het gastnetwerk dat gewoon in het bedrijfsnetwerk hangt, en niemand die formeel verantwoordelijk is voor het netwerk omdat "de IT-partner dat doet" zonder dat het ergens staat.
