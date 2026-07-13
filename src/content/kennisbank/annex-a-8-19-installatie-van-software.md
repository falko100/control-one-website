---
title: "Annex A 8.19: Installatie van software op operationele systemen"
description: "Maatregel 8.19 van ISO 27001 Annex A eist beheerste software-installatie: geen adminrechten voor gebruikers, goedgekeurde software en beheerde uitrol."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.19 eist procedures en maatregelen om de installatie van software op operationele systemen veilig te beheren: installatie alleen door geautoriseerde beheerders of via beheerde uitrol, gebruikers zonder lokale adminrechten, alleen goedgekeurde en ondersteunde software uit betrouwbare bron, en terugvalmogelijkheden bij mislukte updates."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.19", "software-installatie", "adminrechten", "software-uitrol", "iso 27001"]
gerelateerd: ["annex-a-8-1-eindgebruikersapparaten", "annex-a-8-18-speciale-hulpprogrammas", "annex-a-8-32-wijzigingsbeheer"]
faq:
  - vraag: "Waarom geen lokale adminrechten voor gebruikers?"
    antwoord: "Zonder adminrechten kan een gebruiker (en dus ook malware die zijn sessie kaapt) geen software installeren of systeeminstellingen wijzigen. Het is een van de effectiefste maatregelen tegen malware en tegen schaduw-IT, en hij kost niets behalve een goed proces voor legitieme software-aanvragen."
  - vraag: "Hoe faciliteer je legitieme softwarebehoeften?"
    antwoord: "Een bedrijfsportaal of self-service-catalogus met goedgekeurde software die gebruikers zelf kunnen installeren, plus een aanvraagroute voor nieuwe software die langs de selectiecriteria loopt (5.23 voor SaaS). Hoe soepeler dit werkt, hoe minder druk op de schaduwroute."
---

Annex A-maatregel 8.19 van ISO 27001, "Installation of software on operational systems", beheerst wat er op de systemen draait: elke installatie is een potentiële wijziging van het risicoprofiel.

## Wat eist de maatregel?

Procedures en maatregelen om de installatie van software op operationele systemen veilig te beheren: uitgevoerd door geautoriseerde en competente beheerders (of via beheerde mechanismen), alleen goedgekeurde en ondersteunde software, configuratie- en wijzigingsbeheer eromheen (8.9, 8.32), terugvalmogelijkheid bij problemen, en het bewaren van eerdere versies waar herstel dat vraagt.

## Zo vul je hem in

1. **Ontneem lokale adminrechten**: gebruikers installeren niets zelf; dit dekt in één klap malware-installatie, schaduw-IT en licentieproblemen (5.32) grotendeels af.
2. **Bied een goedgekeurde catalogus**: self-service voor de standaardsoftware, een aanvraagproces voor de rest; registreer wat is goedgekeurd (koppeling met het assetregister, 5.9).
3. **Beheer de uitrol**: installaties en updates via centrale tooling (MDM), getest waar de impact groot is, met een terugvalplan voor kritische systemen.
4. **Ruim op**: verwijder software die niet meer wordt gebruikt of ondersteund; end-of-life-software is een blijvend gat (8.8).

## Waar let de auditor op?

De auditor vraagt of gebruikers lokale adminrechten hebben; het antwoord kleurt meteen het hele malware- en configuratiegebied. Verder: hoe kwam de laatst geïnstalleerde applicatie op de systemen (proces gevolgd?) en draait er nog onondersteunde software. Werkplekken vol zelf geïnstalleerde tools zijn het zichtbare bewijs dat deze maatregel niet werkt.
