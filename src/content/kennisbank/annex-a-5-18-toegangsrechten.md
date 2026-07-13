---
title: "Annex A 5.18: Toegangsrechten"
description: "Maatregel 5.18 van ISO 27001 Annex A eist een beheerst proces voor het toekennen, wijzigen, beoordelen en intrekken van toegangsrechten. Zo richt je het proces in."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.18 eist dat toegangsrechten worden toegekend, gewijzigd en ingetrokken volgens het toegangsbeleid: aanvraag met goedkeuring door de eigenaar, aanpassing bij functiewijziging, directe intrekking bij vertrek en periodieke beoordeling van alle rechten. De periodieke toegangsreview, minimaal jaarlijks, is het sluitstuk dat sluipende rechtenophoping corrigeert."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.18", "toegangsrechten", "access review", "autorisatiebeheer", "iso 27001"]
gerelateerd: ["annex-a-5-15-toegangsbeveiliging", "annex-a-5-16-identiteitsbeheer", "annex-a-5-11-retournering-van-bedrijfsmiddelen"]
faq:
  - vraag: "Hoe vaak moet een toegangsreview plaatsvinden?"
    antwoord: "De norm noemt geen frequentie; gangbaar is minimaal jaarlijks voor alle systemen en vaker (per kwartaal) voor kritische systemen en beheerrechten. Ook na organisatiewijzigingen is een review op zijn plaats."
  - vraag: "Hoe voer je een toegangsreview praktisch uit?"
    antwoord: "Exporteer per systeem de gebruikers en rechten, laat de systeemeigenaar per regel bevestigen of de toegang nog nodig is, trek overbodige rechten direct in en registreer de uitkomst. Begin bij de kritische systemen en beheerrechten."
---

Annex A-maatregel 5.18 van ISO 27001, "Access rights", is het operationele proces achter het toegangsbeleid: rechten toekennen, aanpassen, beoordelen en intrekken. Rechten hebben de neiging alleen maar te groeien; dit proces houdt ze in lijn met wat de functie vereist.

## Wat eist de maatregel?

Toekenning en intrekking volgens het beleid uit 5.15: aanvraag en goedkeuring door de eigenaar (niet door de aanvrager zelf), rechten passend bij de rol, aanpassing bij functiewijziging, directe intrekking of aanpassing bij vertrek of contracteinde, en periodieke beoordeling van bestaande rechten.

## Zo vul je hem in

1. **Richt een aanvraagproces in**: toegang wordt aangevraagd (ticket, formulier), goedgekeurd door de systeem- of informatie-eigenaar en geregistreerd. Standaardprofielen per functie dekken het gros automatisch af.
2. **Vang functiewissels af**: bij interne overstap worden oude rechten ingetrokken, niet alleen nieuwe toegevoegd; dit is het meest gemiste scenario.
3. **Koppel intrekking aan offboarding**: accounts en rechten geblokkeerd op de laatste werkdag, samen met de inname van middelen (5.11).
4. **Voer periodieke reviews uit**: minimaal jaarlijks per systeem, door de eigenaar, met registratie van de uitkomst en directe opschoning. Beheerrechten vaker.

## Waar let de auditor op?

De auditor loopt de keten na met steekproeven: een recente indiensttreding (is de toekenning goedgekeurd en geregistreerd?), een vertrokken medewerker (wanneer is de toegang ingetrokken?) en het bewijs van de laatste toegangsreview. Reviews die wel gepland maar nooit uitgevoerd zijn, en de rechtenophoping bij langzittende medewerkers, zijn de bevindingen die hier het vaakst vallen.
