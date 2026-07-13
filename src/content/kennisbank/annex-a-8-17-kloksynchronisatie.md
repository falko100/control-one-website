---
title: "Annex A 8.17: Kloksynchronisatie"
description: "Maatregel 8.17 van ISO 27001 Annex A eist gesynchroniseerde klokken op alle systemen via een betrouwbare tijdbron. Klein detail, groot belang voor logs en forensisch onderzoek."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.17 eist dat de klokken van informatiesystemen worden gesynchroniseerd met goedgekeurde, betrouwbare tijdbronnen (NTP): zonder kloppende tijdstempels zijn logs uit verschillende systemen niet te correleren en verliest bewijs zijn waarde. Praktisch geregeld in minuten: NTP centraal geconfigureerd, één tijdzone-afspraak, en cloudsystemen doen het automatisch."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.17", "kloksynchronisatie", "ntp", "tijdstempels", "iso 27001"]
gerelateerd: ["annex-a-8-15-logging", "annex-a-5-28-verzamelen-van-bewijsmateriaal", "wat-is-annex-a"]
faq:
  - vraag: "Waarom is een afwijkende klok een beveiligingsprobleem?"
    antwoord: "Bij een incident moet je gebeurtenissen uit meerdere systemen (firewall, server, applicatie) op een tijdlijn leggen. Loopt één klok tien minuten achter, dan klopt de volgorde niet meer en kan bewijs juridisch worden betwist. Ook authenticatieprotocollen en certificaatvalidatie kunnen falen bij grote klokafwijkingen."
  - vraag: "Wat moet je praktisch instellen?"
    antwoord: "Alle eigen systemen (servers, netwerkapparatuur, camera- en toegangssystemen) op NTP tegen een betrouwbare bron, en een vaste afspraak over de tijdzone in logs. Cloud- en moderne besturingssystemen synchroniseren standaard; de vergeethoeken zijn lokale apparatuur zoals camera's, toegangscontrole en oudere netwerkapparatuur."
---

Annex A-maatregel 8.17 van ISO 27001, "Clock synchronization", is de kleinste maatregel van hoofdstuk 8, met onevenredig belang op het moment dat het erop aankomt: tijdens incidentonderzoek.

## Wat eist de maatregel?

De klokken van informatieverwerkende systemen worden gesynchroniseerd met goedgekeurde tijdbronnen: een consistente, betrouwbare tijd over alle systemen heen, zodat logbestanden correleerbaar zijn en tijdstempels als bewijs bruikbaar blijven (5.28). Eisen uit wet- en regelgeving of contracten over tijdregistratie tellen mee.

## Zo vul je hem in

1. **Configureer NTP overal**: eigen servers en netwerkapparatuur tegen een betrouwbare tijdbron; moderne systemen en clouddiensten doen dit standaard.
2. **Vergeet de randapparatuur niet**: camerasystemen (7.4), toegangscontrole, telefooncentrales en oudere apparatuur lopen het vaakst uit de pas, precies de systemen waarvan je beelden en logs naast elkaar wilt leggen.
3. **Spreek een tijdzone af**: één afspraak over tijdzone en zomertijd in logs voorkomt interpretatiefouten bij analyse.
4. **Controleer periodiek**: een korte check in de jaarlijkse controleronde (5.36): lopen de klokken van de kernsystemen gelijk?

## Waar let de auditor op?

Dit is zelden een diepgravend auditonderwerp, maar het wordt zichtbaar bij de buren: als tijdens de bespreking van een incident blijkt dat de cameratijd twintig minuten afweek van de systeemlogs, is dat de bevinding. Eén keer goed instellen en jaarlijks controleren volstaat.
