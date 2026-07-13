---
title: "Annex A 8.29: Beveiligingstesten bij ontwikkeling en acceptatie"
description: "Maatregel 8.29 van ISO 27001 Annex A eist dat beveiligingstests in de ontwikkelcyclus zijn gedefinieerd en uitgevoerd: van pipeline-scans tot pentests en acceptatiecriteria."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.29 eist dat beveiligingstestprocessen worden gedefinieerd en geïmplementeerd in de ontwikkelcyclus: testen of de beveiligingseisen (8.26) worden waargemaakt, met geautomatiseerde tests in de pipeline, beveiligingschecks in de acceptatietest en periodieke of wijzigingsgedreven pentests. Nieuwe systemen worden niet geaccepteerd zonder dat de beveiligingscriteria zijn getoetst."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.29", "beveiligingstesten", "pentest", "acceptatietest", "iso 27001"]
gerelateerd: ["annex-a-8-26-beveiligingseisen-applicaties", "annex-a-8-28-veilig-programmeren", "annex-a-5-35-onafhankelijke-beoordeling"]
faq:
  - vraag: "Wat is het verschil tussen de pipeline-scans van 8.28 en de tests van 8.29?"
    antwoord: "8.28 gaat over veilig bouwen (statische analyse, dependency-checks tijdens het schrijven); 8.29 over het toetsen van het resultaat: doet het systeem wat de beveiligingseisen beloven? Dat omvat functionele beveiligingstests (werkt de autorisatie echt), dynamische tests tegen de draaiende applicatie en pentests door een onafhankelijke partij."
  - vraag: "Wanneer is een pentest nodig?"
    antwoord: "Gangbaar: bij de livegang van een nieuw extern bereikbaar systeem, na grote architecturale wijzigingen, en periodiek (jaarlijks) voor de kritische toepassingen. De scope en diepgang volgen het risico; een gerichte test op de kroonjuwelen levert meer op dan een brede oppervlakkige scan."
---

Annex A-maatregel 8.29 van ISO 27001, "Security testing in development and acceptance", sluit de cirkel die bij 8.26 begon: eisen stellen is stap één, aantonen dat ze zijn waargemaakt is de toets.

## Wat eist de maatregel?

Beveiligingstestprocessen worden gedefinieerd en geïmplementeerd in de ontwikkelcyclus: tests die verifiëren dat aan de beveiligingseisen is voldaan wanneer applicaties of code worden uitgerold, met testplannen, criteria en tooling die passen bij het risico. Voor acceptatie van nieuwe of gewijzigde systemen zijn beveiligingscriteria onderdeel van de acceptatietest.

## Zo vul je hem in

1. **Test tegen de eisen van 8.26**: per beveiligingseis een toets: probeert de test echt of een gebruiker zonder rol bij de data kan, of alleen of het inloggen werkt?
2. **Bouw lagen op**: geautomatiseerd in de pipeline (8.28), functionele beveiligingstests in de acceptatie, en onafhankelijke pentests voor de kritische en extern bereikbare systemen (ondersteunt ook 5.35).
3. **Maak acceptatie expliciet**: livegang alleen na afgetekende beveiligingscriteria; bevindingen boven een drempel blokkeren of krijgen een geaccepteerde-risico-registratie.
4. **Sluit de lus**: testbevindingen en pentestresultaten krijgen eigenaren en deadlines, en hertest bevestigt de oplossing.

## Waar let de auditor op?

De auditor vraagt het laatste pentestrapport en de opvolging van de bevindingen: dat rapport met drie kritieke bevindingen van acht maanden geleden zonder aantoonbare actie is een klassieke non-conformiteit. Verder: zijn er beveiligingscriteria in de acceptatie, of gaat alles live zodra het functioneel werkt?
