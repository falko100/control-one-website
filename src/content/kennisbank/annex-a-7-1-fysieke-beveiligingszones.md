---
title: "Annex A 7.1: Fysieke beveiligingszones"
description: "Maatregel 7.1 van ISO 27001 Annex A eist gedefinieerde beveiligingszones rond informatie en systemen. Zo deel je je pand in zones in, van openbaar tot serverruimte."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.1 eist dat beveiligingszones worden gedefinieerd en gebruikt om gebieden met informatie en informatieverwerkende middelen te beschermen. Praktisch: deel het pand in zones met oplopende beveiliging, bijvoorbeeld openbaar (receptie), intern (kantoor, alleen medewerkers en begeleide bezoekers) en beperkt (serverruimte en archief, alleen geautoriseerden), met per overgang een fysieke barrière en toegangscontrole."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.1", "beveiligingszones", "fysieke beveiliging", "zonering", "iso 27001"]
gerelateerd: ["annex-a-7-2-fysieke-toegang", "annex-a-7-3-beveiliging-van-ruimten", "wat-is-annex-a"]
faq:
  - vraag: "Hoeveel zones heeft een gemiddeld MKB-kantoor nodig?"
    antwoord: "Meestal drie: een openbare zone (entree, spreekkamers voor bezoek), de interne kantoorzone (achter een afgesloten deur, alleen medewerkers en begeleide bezoekers) en een beperkte zone voor de serverruimte, patchkast en gevoelig archief. Volledig in de cloud werkende organisaties komen soms met twee zones uit."
  - vraag: "Geldt dit ook als alles in de cloud staat?"
    antwoord: "Ja, maar lichter: er blijven werkplekken, netwerkapparatuur (patchkast), documenten en apparaten te beschermen. De zwaarste zone wordt dan de ruimte met netwerk- en opslagapparatuur, en de eisen aan het datacenter liggen bij de cloudleverancier (5.23)."
---

Annex A-maatregel 7.1 van ISO 27001, "Physical security perimeters", opent het fysieke hoofdstuk met het basisprincipe: leg vast waar de grenzen liggen. Wie overal zomaar kan binnenlopen, heeft geen fysieke beveiliging, hoe goed de firewall ook is.

## Wat eist de maatregel?

Beveiligingszones worden gedefinieerd en gebruikt om gebieden te beschermen waar zich informatie en informatieverwerkende middelen bevinden. De zwaarte van elke zone past bij wat erbinnen staat: de barrières zijn deugdelijk (geen loze plafonds waar je overheen kunt klimmen naar de serverruimte), en overgangen tussen zones zijn gecontroleerd.

## Zo vul je hem in

1. **Teken de zones uit**: een eenvoudige plattegrond met de zones en hun grenzen: openbaar, intern, beperkt. Benoem per zone wie er mag komen en onder welke voorwaarden.
2. **Maak de grenzen echt**: afsluitbare deuren tussen zones, geen vertrouwelijke werkplekken of apparatuur in de openbare zone, en de serverruimte of patchkast standaard op slot.
3. **Regel de overgangen**: toegangscontrole per zonegrens (zie 7.2): van een gesloten voordeur met bel tot tags of sleutelbeheer voor de beperkte zone.
4. **Herzie bij verandering**: verbouwing, verhuizing of nieuwe apparatuur betekent de zonering opnieuw bekijken.

## Waar let de auditor op?

De auditor loopt letterlijk rond: kom je vanaf de receptie ongehinderd bij werkplekken of de patchkast, staat de serverruimtedeur open "voor de ventilatie", hangt de netwerkapparatuur in de openbare gang? De rondgang is de toets; de plattegrond is alleen het startpunt van het gesprek.
