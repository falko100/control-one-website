---
title: "Een bedrijfscontinuïteitsplan opstellen in 6 stappen"
description: "Zo stel je een BCP op dat past bij het MKB: bedrijfsimpactanalyse, RTO en RPO per proces, uitwijkscenario's, en de koppeling met ISO 27001-maatregel 5.30."
norm: "iso-27001"
categorie: "stappenplannen"
tldr: "Een bedrijfscontinuïteitsplan (BCP) beschrijft hoe de organisatie doordraait bij ernstige verstoring: welke processen het eerst terug moeten (bedrijfsimpactanalyse met RTO en RPO), welke scenario's zijn uitgewerkt (systemen plat, pand onbruikbaar, leverancier weg, sleutelpersoon uitgevallen), welke voorzieningen dat mogelijk maken (back-ups, uitwijk, noodprocedures) en wie de leiding heeft. Bouw het in 6 stappen en test jaarlijks; het vult de ISO 27001-maatregelen 5.29 en 5.30 in."
publishDate: 2026-07-15
readTime: "5 min"
keywords: ["bedrijfscontinuïteitsplan", "bcp", "bedrijfsimpactanalyse", "rto rpo", "iso 27001"]
gerelateerd: ["annex-a-5-30-ict-gereedheid-bedrijfscontinuiteit", "annex-a-5-29-beveiliging-tijdens-verstoring", "annex-a-8-13-back-up-van-informatie"]
faq:
  - vraag: "Wat is een bedrijfsimpactanalyse (BIA)?"
    antwoord: "De analyse die bepaalt welke processen en systemen hoe snel terug moeten: per proces de impact van uitval over de tijd (na een uur, een dag, een week), waaruit de hersteldoelen volgen: RTO (maximale hersteltijd) en RPO (maximaal dataverlies). De BIA maakt continuïteit een zakelijke afweging in plaats van een IT-onderbuikgevoel."
  - vraag: "Is een BCP verplicht voor ISO 27001?"
    antwoord: "De norm eist geen document met die naam, maar wel de inhoud: beveiliging tijdens verstoring (Annex A 5.29) en geplande, geteste ICT-gereedheid voor continuïteit op basis van hersteldoelen (5.30). Een compact BCP is de gangbare manier om beide aantoonbaar in te vullen; NIS2 stelt vergelijkbare eisen aan wie eronder valt."
---

Een bedrijfscontinuïteitsplan beantwoordt de vraag die elke directie zich één keer te laat stelt: wat doen we als het echt stilvalt? Zo bouw je een MKB-proof plan in zes stappen.

## Stap 1: Voer een bedrijfsimpactanalyse uit

Loop de kernprocessen langs (uit het procesmodel of gewoon: waar verdienen we het geld mee) en bepaal per proces: wat is de schade na een uur, een dag, een week stilstand (omzet, klanten, contracten, reputatie, wettelijke plichten), welke systemen, mensen en leveranciers zijn ervoor nodig, en zijn er piekmomenten (maandafsluiting, seizoen). Hieruit volgen de prioriteiten.

## Stap 2: Stel RTO en RPO vast

Per kritisch proces en systeem: de **RTO** (hoe snel moet het hersteld zijn) en **RPO** (hoeveel dataverlies is draaglijk, uitgedrukt in tijd). Laat de business beslissen, niet IT: de kosten van snellere voorzieningen moeten opwegen tegen de schade van langere uitval. Deze doelen zijn de eisen waar back-up (8.13) en redundantie (8.14) aan moeten voldoen.

## Stap 3: Werk de scenario's uit

Vier archetypen dekken vrijwel alles: **ICT plat** (ransomware, storing, cloudleverancier down), **pand onbruikbaar** (brand, water, geen toegang), **mensen weg** (sleutelpersoon valt uit, pandemie-achtige uitval) en **leverancier weg** (faillissement of langdurige storing van een kritieke partij). Per scenario: de eerste acties, de uitwijkstrategie en wie beslist.

## Stap 4: Richt de voorzieningen in

De maatregelen die de hersteldoelen waarmaken: back-ups conform 3-2-1 met geteste terugzetprocedures, uitwijkmogelijkheden (thuiswerken als pand-uitwijk is voor kantoororganisaties vaak voldoende, mits toegang en telefonie geregeld zijn), noodprocedures voor het werken zonder systemen (papieren fallback voor de kernhandelingen), toegang tot wachtwoorden en sleutels als de primaire omgeving weg is, en exit- of alternatiefafspraken bij kritieke leveranciers (5.23).

## Stap 5: Schrijf het plan compact op

Tien pagina's volstaan: het crisisteam met mandaat en bereikbaarheid, de scenario's met eerste acties, de herstelvolgorde (welke systemen eerst), de communicatie (medewerkers, klanten, leveranciers) en de bijlagen met contactlijsten. Bewaar het óók buiten de eigen systemen; een BCP dat alleen op de versleutelde server staat, is een grap die zichzelf schrijft.

## Stap 6: Test en onderhoud

Jaarlijks minimaal: een hersteltest van de kritische systemen (haalt de praktijk de RTO en RPO?) en een tabletop-oefening van één scenario met het crisisteam. Werk het plan bij na tests, incidenten en organisatiewijzigingen, en rapporteer de testresultaten in de directiebeoordeling. Voor de auditor zijn de geteste hersteltijden het verschil tussen een plan en een belofte.
