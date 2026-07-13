---
title: "Annex A 5.11: Retournering van bedrijfsmiddelen"
description: "Maatregel 5.11 van ISO 27001 Annex A eist dat medewerkers en externen bij vertrek alle bedrijfsmiddelen inleveren. Zo richt je een sluitend offboarding-proces in."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.11 eist dat medewerkers, contractors en andere externen bij beëindiging van hun dienstverband of contract alle bedrijfsmiddelen retourneren: laptops, telefoons, toegangspassen, tokens en informatiedragers. De praktische invulling is een offboarding-checklist gekoppeld aan het assetregister, uitgevoerd vóór of op de laatste werkdag."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 5.11", "retournering bedrijfsmiddelen", "offboarding", "iso 27001"]
gerelateerd: ["annex-a-5-9-inventarisatie-van-bedrijfsmiddelen", "annex-a-5-18-toegangsrechten", "wat-is-annex-a"]
faq:
  - vraag: "Hoe ga je om met kennis die vertrekkende medewerkers meenemen?"
    antwoord: "De maatregel noemt ook informatie en kennis: leg vast dat vertrekkende medewerkers lopende werkzaamheden documenteren en overdragen, en dat de geheimhoudingsplicht na vertrek doorloopt (vastgelegd in de arbeidsovereenkomst)."
  - vraag: "Wat als een ex-medewerker apparatuur niet inlevert?"
    antwoord: "Zorg dat je op afstand kunt handelen: MDM-tooling om apparaten te wissen of blokkeren, en directe intrekking van alle accounts. Registreer het niet-geretourneerde middel en de genomen actie; neem de afspraak over inlevering en eventuele verrekening op in de arbeidsvoorwaarden."
---

Annex A-maatregel 5.11 van ISO 27001, "Return of assets", eist dat alle bedrijfsmiddelen worden geretourneerd wanneer een dienstverband, contract of overeenkomst eindigt. Elk niet-ingeleverd apparaat is een sluimerend datalek.

## Wat eist de maatregel?

Medewerkers en externe gebruikers moeten bij beëindiging alle bedrijfsmiddelen inleveren die zij in bezit hebben: apparatuur (laptop, telefoon, tokens), fysieke toegangsmiddelen (passen, sleutels), informatiedragers (USB-sticks, externe schijven) en documentatie. Ook informatie op privé-apparaten valt eronder: die moet worden overgedragen en verwijderd.

## Zo vul je hem in

1. **Maak een offboarding-checklist**: alle in te nemen middelen per vertrekkende medewerker, afgevinkt en gedateerd. Genereer de lijst vanuit het assetregister zodat niets wordt vergeten.
2. **Koppel aan het uitdienstproces**: HR meldt het vertrek, IT voert de checklist uit vóór of op de laatste werkdag, samen met het intrekken van toegangsrechten (maatregel 5.18).
3. **Regel BYOD en thuiswerkers**: spreek af hoe bedrijfsdata van privé-apparaten wordt verwijderd (MDM-wipe van het zakelijke profiel) en hoe apparatuur van thuiswerkers wordt geretourneerd.
4. **Registreer**: bewaar de afgetekende checklist als bewijs.

## Waar let de auditor op?

De auditor pakt de laatst vertrokken medewerkers en vraagt het bewijs: ingevulde checklist, ingenomen middelen, ingetrokken toegang. De klassieke bevinding is het gat tussen HR en IT: het vertrek was bij IT pas weken later bekend, de laptop lag nog thuis en het account stond nog open. Een vaste meldroute van HR naar IT met een doorlooptijd van dezelfde dag voorkomt dit.
