---
title: "Annex A 8.3: Beperking van toegang tot informatie"
description: "Maatregel 8.3 van ISO 27001 Annex A eist dat toegang tot informatie en systeemfuncties wordt beperkt conform het toegangsbeleid. Van mappenstructuur tot applicatierollen."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.3 eist dat de toegang tot informatie en applicatiefuncties daadwerkelijk technisch wordt beperkt volgens het toegangsbeleid uit 5.15: rechten per rol op mappen, systemen en functies binnen applicaties, geen open interne omgevingen waar iedereen alles kan lezen, en beheersing van anonieme en publieke toegang."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.3", "informatietoegang", "autorisaties", "toegangsbeperking", "iso 27001"]
gerelateerd: ["annex-a-5-15-toegangsbeveiliging", "annex-a-5-12-classificatie-van-informatie", "annex-a-8-2-speciale-toegangsrechten"]
faq:
  - vraag: "Wat is het verschil met 5.15 en 5.18?"
    antwoord: "5.15 is het beleid (de regels), 5.18 het proces (rechten toekennen en intrekken), en 8.3 de technische afdwinging: de daadwerkelijke autorisaties op mappen, applicaties en functies die zorgen dat het beleid ook echt geldt. De drie moeten op elkaar aansluiten."
  - vraag: "Hoe pak je een historisch gegroeide open mappenstructuur aan?"
    antwoord: "Begin bij de gevoeligste informatie: HR, financiën, klantdata. Richt daarvoor besloten omgevingen in met toegang per rol, verplaats de data en werk daarna de rest bij. Een migratie naar een nieuwe samenwerkingsomgeving is het natuurlijke moment om rechten opnieuw op te bouwen in plaats van mee te verhuizen."
---

Annex A-maatregel 8.3 van ISO 27001, "Information access restriction", maakt het toegangsbeleid technisch waar: op papier heeft niemand toegang tot de personeelsdossiers, maar de vraag is wat het systeem zegt.

## Wat eist de maatregel?

Toegang tot informatie en andere bedrijfsmiddelen wordt beperkt in overeenstemming met het vastgestelde toegangsbeleid: geen toegang tot gevoelige informatie voor ongeautoriseerden, beheersing van welke identiteit welke gegevens en functies kan benaderen (lezen, schrijven, verwijderen, uitvoeren), en beperking van wat er zonder authenticatie (anoniem of publiek) toegankelijk is.

## Zo vul je hem in

1. **Autoriseer per rol op de opslag**: mappen- en sitestructuur volgt de organisatie: HR alleen voor HR, financiën alleen voor finance, projectomgevingen per team; geen organisatiebrede open schijf met alles erop.
2. **Gebruik applicatierollen**: binnen systemen (CRM, boekhouding, de portal) krijgen gebruikers de rol die bij hun functie past, niet standaard de hoogste.
3. **Beheers het delen**: standaardinstellingen voor deellinks (niet publiek, verlooptijd), en periodieke controle op wat er extern gedeeld staat.
4. **Toets tegen de classificatie**: vertrouwelijke informatie (5.12) hoort aantoonbaar achter beperkte toegang; steekproeven in de zelfcontroles (5.36).

## Waar let de auditor op?

De auditor kiest een gevoelige informatiesoort en vraagt: wie kan hier feitelijk bij, laat het zien. Het antwoord komt uit het systeem, niet uit het beleid. De klassieke bevindingen: de "algemene schijf" waar salarisoverzichten tussen de projectdocumenten staan, en deellinks naar vertrouwelijke bestanden die voor iedereen met de link toegankelijk zijn.
