---
title: "Een incidentresponsplan opstellen in 6 stappen"
description: "Zo stel je een incidentresponsplan op dat werkt onder druk: rollen, scenario's, communicatie, de 72-uurs datalekmelding en de jaarlijkse oefening."
norm: "iso-27001"
categorie: "stappenplannen"
tldr: "Een incidentresponsplan beschrijft wie wat doet als het misgaat: het incidentteam met mandaat en bereikbaarheid, de vaste responsstappen (beheersen, bewijs veiligstellen, impact bepalen, communiceren, herstellen, evalueren), de meldroutes inclusief de 72-uurs datalekmelding aan de AP, en voorbereide contactlijsten en conceptteksten. Stel het op in 6 stappen en oefen het jaarlijks met een tabletop-scenario; een ongeoefend plan is een hypothese."
publishDate: 2026-07-15
readTime: "5 min"
keywords: ["incidentresponsplan", "incident response", "datalek", "iso 27001"]
gerelateerd: ["annex-a-5-24-incidentbeheer-planning", "annex-a-5-26-reageren-op-incidenten", "datalek-melden-stappenplan"]
faq:
  - vraag: "Hoe uitgebreid moet een incidentresponsplan zijn voor het MKB?"
    antwoord: "Vijf tot tien pagina's: het team en de bereikbaarheid, de vaste stappen, de meldcriteria en -routes, drie tot vijf uitgewerkte scenario's en de bijlagen (contactlijst, conceptteksten, logboeksjabloon). Onder druk lees je geen vijftig pagina's; elke pagina moet in een crisis bruikbaar zijn."
  - vraag: "Welke scenario's werk je minimaal uit?"
    antwoord: "De vier die het MKB het vaakst raken: ransomware (inclusief de back-up-herstelroute), een gecompromitteerd e-mailaccount (business email compromise), een datalek met persoonsgegevens (inclusief de AP-melding) en uitval van een kritieke leverancier of dienst. Per scenario: eerste stappen, beslispunten en wie belt wie."
---

Een incidentresponsplan is het draaiboek voor de slechtste dag van het jaar. Het doel: dat niemand tijdens een crisis hoeft na te denken over wíe er moet beslissen en wát eerst moet, want dat is dan al bedacht.

## Stap 1: Stel het incidentteam samen

Benoem een incidentcoördinator plus vervanger, met expliciet mandaat: systemen mogen isoleren, externe hulp mogen inschakelen en kosten mogen maken tot een afgesproken grens zonder vooraf overleg. Vul aan met de rollen communicatie (directie, klanten) en logboek (wie schrijft alles op). Vermeld bereikbaarheid buiten kantoortijden; incidenten houden geen kantooruren aan.

## Stap 2: Leg de vaste responsstappen vast

De zes stappen die elk incident doorloopt: **beheersen** (verspreiding stoppen: account blokkeren, systeem isoleren, wachtwoorden resetten), **bewijs veiligstellen** (logs exporteren vóór het opschonen, Annex A 5.28), **impact bepalen** (welke systemen en gegevens, en: zijn er persoonsgegevens geraakt?), **communiceren** (intern, AP, betrokkenen, klanten), **herstellen** (schoon terugzetten, verifiëren) en **evalueren** (5.27). Maak van elke stap een korte checklist.

## Stap 3: Regel de meldroutes en termijnen

Het interne meldpunt (6.8) is de ingang; leg vervolgens vast: de datalek-check als vaste beoordelingsvraag (5.25), de 72-uurs meldtermijn aan de Autoriteit Persoonsgegevens met de meldroute, de melding aan betrokkenen bij hoog risico, en waar van toepassing NIS2- of sectorale meldplichten en contractuele meldtermijnen richting klanten.

## Stap 4: Werk de kernscenario's uit

Drie tot vijf scenario's op één pagina elk: ransomware, gecompromitteerd mailaccount, datalek, leveranciersuitval. Per scenario de eerste vijf acties, de beslispunten (wanneer extern hulp, wanneer systemen plat) en de specifieke contacten.

## Stap 5: Bereid de bijlagen voor

De contactlijst (AP, cyberverzekeraar met polisnummer, IT-partner, forensisch responder, hostingpartij, juridisch adviseur), conceptteksten voor klant- en medewerkercommunicatie, het logboeksjabloon en de afspraak waar het plan zelf staat: óók offline of buiten de eigen omgeving bereikbaar, want bij ransomware is het intranet weg.

## Stap 6: Oefen jaarlijks en stel bij

Een tabletop-oefening van een tot twee uur: loop een scenario door met het team en noteer wat schuurt (onbekende beslissers, ontbrekende contacten, onduidelijke mandaten). Werk het plan bij na elke oefening en elk echt incident. Voor de auditor is de oefenregistratie het bewijs dat 5.24 en 5.26 leven; voor jezelf is het de enige manier om te weten of het plan werkt.
