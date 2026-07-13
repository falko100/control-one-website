---
title: "Annex A 8.15: Logging"
description: "Maatregel 8.15 van ISO 27001 Annex A eist dat activiteiten, uitzonderingen en gebeurtenissen worden gelogd, beschermd en beoordeeld. Wat log je en hoe lang?"
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.15 eist dat logbestanden van activiteiten, uitzonderingen, fouten en relevante gebeurtenissen worden geproduceerd, opgeslagen, beschermd en geanalyseerd: inlogpogingen, beheerdershandelingen, toegang tot gevoelige gegevens en systeemfouten. Logs moeten beschermd zijn tegen manipulatie (ook door beheerders zelf), een vastgestelde bewaartermijn hebben en daadwerkelijk worden bekeken."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.15", "logging", "logbestanden", "audit trail", "iso 27001"]
gerelateerd: ["annex-a-8-16-monitoringactiviteiten", "annex-a-8-17-kloksynchronisatie", "annex-a-8-2-speciale-toegangsrechten"]
faq:
  - vraag: "Wat moet je minimaal loggen?"
    antwoord: "Aan- en afmeldingen (geslaagd en mislukt), beheerdershandelingen, wijzigingen in rechten en configuraties, toegang tot gevoelige gegevens en systeemfouten. Cloudplatforms loggen dit grotendeels automatisch; de vraag is vooral of de logging aanstaat, lang genoeg bewaard blijft en of iemand ernaar kijkt."
  - vraag: "Hoe lang moet je logs bewaren?"
    antwoord: "De norm noemt geen termijn. Gangbaar is 90 dagen tot een jaar voor beveiligingslogs; lang genoeg om een incident te onderzoeken dat pas maanden later wordt ontdekt. Let op de standaardtermijnen van clouddiensten: die zijn vaak maar 30 tot 90 dagen, soms korter in de goedkopere licenties."
---

Annex A-maatregel 8.15 van ISO 27001, "Logging", levert het geheugen van de IT-omgeving: zonder logs is elk incidentonderzoek gissen en elke aansprakelijkheidsvraag onbeantwoordbaar.

## Wat eist de maatregel?

Logs die activiteiten, uitzonderingen, fouten en andere relevante gebeurtenissen registreren, worden geproduceerd, opgeslagen, beschermd en geanalyseerd. Elementen: wat er gelogd wordt (gebruikers-ID's, tijdstippen, handelingen, bron), bescherming tegen wijziging en verwijdering (ook door beheerders, wier handelen juist gelogd moet worden), en analyse van de logs (dat is de brug naar 8.16).

## Zo vul je hem in

1. **Zet de logging aan en na**: controleer per kernsysteem (identiteitsprovider, kantooromgeving, kritische applicaties, firewall) of audit-logging aanstaat en wat de bewaartermijn is; verleng waar de standaard te kort is.
2. **Bescherm de logs**: beheerders mogen logs niet kunnen wissen of aanpassen; centrale of onveranderbare opslag voor de belangrijkste logs lost dit op.
3. **Synchroniseer de klokken** (8.17): logs zonder kloppende tijdstempels zijn bij incidentonderzoek onbruikbaar.
4. **Leg vast wat waar staat**: een kort overzicht per systeem: welke logs, waar, hoe lang; dat scheelt kostbare tijd tijdens een incident.

## Waar let de auditor op?

De auditor kiest een scenario ("een medewerker wordt verdacht van het inzien van dossiers waar hij niets te zoeken heeft; wat kun je aantonen?") en toetst of de logging dat aankan. Bekende bevindingen: logging die uitstaat op het kritische systeem, bewaartermijnen van twee weken, en beheerders die hun eigen sporen kunnen wissen.
