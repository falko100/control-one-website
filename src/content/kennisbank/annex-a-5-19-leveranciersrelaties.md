---
title: "Annex A 5.19: Informatiebeveiliging in leveranciersrelaties"
description: "Maatregel 5.19 van ISO 27001 Annex A eist processen om beveiligingsrisico's van leveranciers te beheersen. Zo zet je leveranciersbeheer praktisch op."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.19 eist processen en procedures om de informatiebeveiligingsrisico's van leveranciersrelaties te beheersen: welke leveranciers hebben toegang tot informatie of systemen, welk risico brengen ze mee, welke eisen stel je en hoe controleer je die. De basis is een leveranciersregister met risicoklassen en per klasse passende eisen en beoordelingen."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.19", "leveranciersrelaties", "leveranciersbeheer", "supplier management", "iso 27001"]
gerelateerd: ["annex-a-5-20-leveranciersovereenkomsten", "annex-a-5-22-monitoren-van-leveranciersdiensten", "annex-a-5-23-clouddiensten"]
faq:
  - vraag: "Welke leveranciers vallen onder deze maatregel?"
    antwoord: "Alle leveranciers die informatie van de organisatie verwerken, toegang hebben tot systemen of locaties, of diensten leveren waarvan de beschikbaarheid kritisch is: SaaS-leveranciers, hostingpartijen, IT-beheerders, maar ook de schoonmaker met een sleutel en de boekhouder met inzage."
  - vraag: "Hoe diep moet een leveranciersbeoordeling gaan?"
    antwoord: "Passend bij het risico. Voor een kritische SaaS-leverancier: certificaten opvragen (ISO 27001, SOC 2), verwerkersovereenkomst en jaarlijkse herbeoordeling. Voor een leverancier zonder toegang tot gevoelige informatie volstaat registratie."
---

Annex A-maatregel 5.19 van ISO 27001, "Information security in supplier relationships", eist dat de risico's die leveranciers meebrengen worden beheerst. Je beveiliging is zo sterk als de zwakste partij met toegang tot je gegevens; veel grote incidenten beginnen bij een leverancier.

## Wat eist de maatregel?

Processen en procedures om beveiligingsrisico's in leveranciersrelaties te beheersen, over de hele levenscyclus: selectie (welke eisen stel je vooraf), contractering (afspraken vastleggen, zie 5.20), gebruik (toegang beperken en monitoren) en beëindiging (toegang intrekken, gegevens terug of vernietigd).

## Zo vul je hem in

1. **Bouw een leveranciersregister**: alle leveranciers met toegang tot informatie, systemen of locaties, met per leverancier: welke gegevens of toegang, welke dienst en hoe kritisch.
2. **Deel in risicoklassen in**: hoog (verwerkt gevoelige gegevens of levert kritische diensten), midden en laag. De klasse bepaalt de zwaarte van eisen en beoordeling.
3. **Stel eisen per klasse**: voor hoog: aantoonbare certificering of ingevulde beveiligingsvragenlijst, verwerkersovereenkomst waar persoonsgegevens spelen, afspraken over incidentmelding. Voor laag: registratie en gezond verstand.
4. **Beoordeel periodiek**: jaarlijkse herbeoordeling van hoog-risico-leveranciers: certificaat nog geldig, incidenten geweest, dienstverlening conform afspraak.

## Waar let de auditor op?

De auditor vraagt het leveranciersregister op en pakt de kritische leveranciers eruit: zijn de eisen vastgelegd, is er bewijs van beoordeling, en wat gebeurde er bij de laatste onboarding van een nieuwe leverancier? Bekende bevindingen: het register mist recent aangeschafte SaaS-tools, en herbeoordelingen zijn gepland maar nooit uitgevoerd. Koppel nieuwe leveranciers daarom aan het inkoop- of projectproces (5.8).
