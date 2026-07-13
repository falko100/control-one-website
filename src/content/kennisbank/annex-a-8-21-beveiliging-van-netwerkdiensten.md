---
title: "Annex A 8.21: Beveiliging van netwerkdiensten"
description: "Maatregel 8.21 van ISO 27001 Annex A eist dat beveiligingseisen aan netwerkdiensten (internet, VPN, wifi-beheer) zijn vastgesteld en in afspraken met leveranciers geborgd."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.21 eist dat beveiligingsmechanismen, dienstverleningsniveaus en eisen aan netwerkdiensten worden geïdentificeerd, geïmplementeerd en gemonitord: welke eisen stel je aan de internetverbinding, VPN-dienst, beheerde wifi of SD-WAN van een leverancier, staan die in het contract, en controleer je of ze worden waargemaakt. De netwerktegenhanger van het leveranciersbeheer uit 5.19 tot en met 5.22."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.21", "netwerkdiensten", "internetprovider", "vpn", "iso 27001"]
gerelateerd: ["annex-a-8-20-netwerkbeveiliging", "annex-a-5-22-monitoren-van-leveranciersdiensten", "annex-a-7-11-ondersteunende-nutsvoorzieningen"]
faq:
  - vraag: "Welke netwerkdiensten vallen hieronder?"
    antwoord: "Alles wat je als dienst afneemt en waar informatie overheen loopt: de internetverbinding(en), VPN- en remote-access-diensten, beheerde wifi of netwerkbeheer door een IT-partner, SD-WAN, en de netwerkkant van clouddiensten. Ook intern geleverde netwerkdiensten tellen mee."
  - vraag: "Welke eisen leg je vast met de leverancier?"
    antwoord: "Beschikbaarheid en hersteltijden (aansluitend op je RTO's), beveiligingskenmerken van de dienst (versleuteling, authenticatie), incidentmelding door de leverancier, en wie wat beheert. Voor de kritische internetverbinding hoort daar de redundantievraag bij (8.14)."
---

Annex A-maatregel 8.21 van ISO 27001, "Security of network services", trekt het leveranciersbeheer door naar de netwerklaag: de meeste organisaties nemen hun netwerk grotendeels als dienst af, en de eisen daaraan horen vastgelegd en gecontroleerd.

## Wat eist de maatregel?

Beveiligingsmechanismen, dienstverleningsniveaus en eisen van netwerkdiensten worden geïdentificeerd, geïmplementeerd en gemonitord, ongeacht of de diensten intern of extern worden geleverd: de beveiligingskenmerken van de dienst, de afspraken erover, en het vermogen van de leverancier om ze waar te maken.

## Zo vul je hem in

1. **Inventariseer de netwerkdiensten**: internetverbindingen, VPN, beheerde wifi en netwerkbeheer, met per dienst de leverancier en het belang; neem ze op in het leveranciersregister (5.19).
2. **Leg de eisen vast**: beschikbaarheid, hersteltijd, beveiligingskenmerken en incidentmelding in het contract of de dienstbeschrijving (5.20); toets wat de standaardvoorwaarden echt beloven.
3. **Monitor de praktijk**: storingen en prestaties bijhouden en meenemen in de jaarlijkse leveranciersevaluatie (5.22); bij structurele problemen: afspraken aanscherpen of overstappen.
4. **Ken de verantwoordelijkheidsgrens**: wie beheert de router, wie de firewallregels, wie het wifi; onduidelijkheid hierover is zelf een risico.

## Waar let de auditor op?

De auditor vraagt welke netwerkdiensten kritisch zijn en wat er is afgesproken: "jullie RTO zegt vier uur, wat garandeert de internetprovider?" De klassieke bevinding is het gat tussen eigen hersteldoelen en de werkelijke contractvoorwaarden (best effort, hersteltijd van dagen), zonder dat iemand dat gat kende of accepteerde.
