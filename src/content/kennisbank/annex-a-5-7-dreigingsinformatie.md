---
title: "Annex A 5.7: Dreigingsinformatie (threat intelligence)"
description: "Maatregel 5.7 van ISO 27001 Annex A eist dat informatie over dreigingen wordt verzameld en geanalyseerd. Zo richt je threat intelligence MKB-proof in."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.7 eist dat de organisatie informatie over dreigingen verzamelt, analyseert en gebruikt: welke aanvallen en kwetsbaarheden zijn relevant voor ons, en wat doen we ermee? Nieuw in de 2022-versie. Voor het MKB betekent dit: gestructureerd bronnen volgen (NCSC, leveranciersbulletins), relevantie beoordelen en aantoonbaar actie nemen, bijvoorbeeld patches of aangescherpte filters."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.7", "threat intelligence", "dreigingsinformatie", "iso 27001"]
gerelateerd: ["annex-a-5-6-contact-met-belangengroepen", "risicoanalyse-uitvoeren", "wat-is-annex-a"]
faq:
  - vraag: "Is een duur threat intelligence-platform nodig?"
    antwoord: "Nee. De norm eist een proces dat past bij de organisatie. Voor het MKB volstaat een combinatie van gratis bronnen (NCSC-adviezen, Digital Trust Center, leveranciersbulletins), een vaste beoordelaar en registratie van wat er met relevante dreigingen is gedaan."
  - vraag: "Wat is het verschil met maatregel 5.6?"
    antwoord: "5.6 gaat over het onderhouden van contacten en kennisbronnen; 5.7 gaat over wat je met de informatie doet: verzamelen, analyseren op relevantie en omzetten in actie, van strategisch (risicoanalyse voeden) tot operationeel (patchen, blokkeren)."
---

Annex A-maatregel 5.7 van ISO 27001, "Threat intelligence", is een van de nieuwe maatregelen uit de 2022-versie. De eis: verzamel en analyseer informatie over dreigingen en gebruik die om de eigen beveiliging te verbeteren.

## Wat eist de maatregel?

Dreigingsinformatie moet worden verzameld op drie niveaus: **strategisch** (welke soorten aanvallers en trends zijn relevant voor onze sector), **tactisch** (welke aanvalstechnieken worden gebruikt) en **operationeel** (concrete indicatoren zoals kwaadaardige IP-adressen of phishingcampagnes). De informatie moet relevant, contextueel en bruikbaar zijn: analyseren en handelen, niet alleen lezen.

## Zo vul je hem in

1. **Kies je bronnen**: NCSC-beveiligingsadviezen, het Digital Trust Center, securitybulletins van je leveranciers en eventueel de feeds van je securitytooling (EDR, firewall, e-mailfilter doen operationele threat intelligence vaak al automatisch).
2. **Beleg de beoordeling**: één rol beoordeelt binnenkomende adviezen op relevantie: raakt dit onze systemen? Registreer kort de conclusie en de actie.
3. **Koppel aan bestaande processen**: relevante dreigingen leiden tot patches (wijzigingsbeheer), aangescherpte instellingen, een waarschuwing aan medewerkers of een update van de risicoanalyse.
4. **Voed de risicoanalyse**: neem trends uit dreigingsinformatie mee in de periodieke risicobeoordeling, bijvoorbeeld de toename van ransomware of MFA-omzeiling.

## Waar let de auditor op?

De auditor wil de keten zien van informatie naar actie: welk advies kwam binnen, wie beoordeelde het, wat is er gedaan? Een map met ongelezen NCSC-mails is de klassieke bevinding. Een eenvoudig logboekje met vijf regels per maand ("advies X beoordeeld, niet relevant want geen Exchange on-premise" of "spoedpatch uitgevoerd op...") bewijst meer dan een abonnement op tien feeds.
