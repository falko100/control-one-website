---
title: "Wat is een SLA (service level agreement)?"
description: "Een SLA legt meetbare afspraken over dienstverlening vast: beschikbaarheid, reactietijden en consequenties. Wat erin hoort en hoe je SLA's van leveranciers beoordeelt."
norm: "algemeen"
categorie: "begrippen"
tldr: "Een SLA (service level agreement) is het contractdeel dat de kwaliteit van een dienst meetbaar vastlegt: beschikbaarheid (uptime-percentage), reactie- en oplostijden per prioriteit, onderhoudsvensters, rapportage en de consequenties bij niet-halen (meestal servicecredits). Voor ISO-systemen zijn SLA's tweerichtingsverkeer: de SLA's van je leveranciers moeten passen bij je eigen hersteldoelen (RTO), en de SLA's die je zelf afgeeft, moeten waargemaakt kunnen worden door je processen."
publishDate: 2026-07-18
readTime: "3 min"
keywords: ["sla", "service level agreement", "uptime", "reactietijd"]
gerelateerd: ["annex-a-8-21-beveiliging-van-netwerkdiensten", "annex-a-5-22-monitoren-van-leveranciersdiensten", "bedrijfscontinuiteitsplan-opstellen"]
faq:
  - vraag: "Wat betekent 99,9 procent uptime concreet?"
    antwoord: "Maximaal circa 43 minuten downtime per maand (8,7 uur per jaar); 99,99 procent is ruim 4 minuten per maand. Let op de kleine lettertjes: gepland onderhoud telt vaak niet mee, de meetperiode (maand of jaar) maakt uit, en de compensatie bij niet-halen is meestal een servicecredit van enkele procenten van de maandfee: een korting, geen schadevergoeding voor jouw omzetverlies."
  - vraag: "Wat is het verschil tussen SLA, OLA en contract?"
    antwoord: "Het contract regelt de juridische relatie, de SLA daarbinnen de meetbare dienstniveaus richting de klant, en een OLA (operational level agreement) de interne afspraken tussen teams of met onderaannemers die nodig zijn om de SLA waar te maken. Wie een 4-uurs oplostijd belooft terwijl zijn hostingpartij 24 uur mag doen over een storing, heeft een OLA-gat."
---

Een SLA maakt van "goede service" een getal: hoeveel mag de dienst eruit liggen, hoe snel wordt er gereageerd, en wat gebeurt er als het niet lukt. Het is de plek waar verwachtingen en werkelijkheid contractueel elkaar ontmoeten, in beide richtingen.

## Wat er in een goede SLA staat

De kernelementen: **beschikbaarheid** (uptime-percentage, met de definitie: wat telt als down, telt onderhoud mee, over welke periode wordt gemeten), **reactie- en oplostijden** per prioriteit (een P1-storing binnen een uur opgepakt, binnen vier uur opgelost; een wens binnen vijf werkdagen), **onderhoudsvensters** en aankondigingstermijnen, **support-bereikbaarheid** (kantooruren of 24/7), **rapportage** (periodieke servicerapporten) en de **consequenties**: servicecredits, escalatieroutes en bij structureel falen een ontbindingsgrond. Voor beveiligingskritische diensten horen er beveiligingsniveaus bij: patchtermijnen, incidentmelding aan jou binnen afgesproken uren, en herstelgaranties.

## SLA's beoordelen als klant

De toets is simpel en wordt zelden gedaan: leg de SLA van de leverancier naast je eigen hersteldoelen. Als jouw bedrijfscontinuïteitsplan zegt dat het systeem binnen vier uur terug moet (RTO), en de hosting-SLA belooft "best effort, herstel doorgaans binnen 24 uur", heb je een gat dat pas zichtbaar wordt tijdens de storing. Precies dit is de kern van Annex A 8.21 en de leveranciersmonitoring van 5.22: eisen vaststellen, contractueel dekken en periodiek toetsen of de rapportages de belofte waarmaken.

## SLA's afgeven als leverancier

Andersom geldt de spiegelregel: beloof wat je processen aankunnen. Elke afgegeven SLA is een eis aan je eigen systeem (bezetting, monitoring, escalatie, de OLA's met jouw onderaannemers) en een toetssteen in ISO 9001-termen: de contractreview (8.2.3) hoort de vraag te stellen of de beloofde niveaus haalbaar zijn, en de servicerapportages zijn monitoring-input (9.1). De duurste SLA is de te mooie: servicecredits zijn overkomelijk, reputatieschade bij structureel niet-halen niet.
