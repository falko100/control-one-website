---
title: "Wat is de BIV-driehoek (beschikbaarheid, integriteit, vertrouwelijkheid)?"
description: "De BIV-driehoek (CIA-triad) is het fundament van informatiebeveiliging: beschikbaarheid, integriteit en vertrouwelijkheid. Wat elk begrip betekent en hoe je ermee werkt."
norm: "iso-27001"
categorie: "begrippen"
tldr: "De BIV-driehoek (internationaal: CIA-triad) beschrijft de drie eigenschappen die informatiebeveiliging beschermt: Beschikbaarheid (informatie is toegankelijk wanneer nodig), Integriteit (informatie is juist en volledig) en Vertrouwelijkheid (alleen geautoriseerden hebben toegang). Elke beveiligingsmaatregel dient minimaal één van de drie, en elke risicoanalyse en classificatie binnen ISO 27001 weegt ze alle drie."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["biv", "biv-driehoek", "cia-triad", "beschikbaarheid integriteit vertrouwelijkheid"]
gerelateerd: ["wat-is-iso-27001", "risicoanalyse-uitvoeren", "annex-a-5-12-classificatie-van-informatie"]
faq:
  - vraag: "Waarom heten de begrippen in het Engels CIA?"
    antwoord: "Confidentiality, Integrity, Availability: dezelfde drie eigenschappen in een andere volgorde. Nederlands vakjargon gebruikt BIV (of soms BIC); de volgorde zegt niets over prioriteit, die verschilt per informatiesoort."
  - vraag: "Welke van de drie is het belangrijkst?"
    antwoord: "Dat hangt van de informatie af, en precies die weging is het nut van het model: voor een webshop-voorraadsysteem weegt beschikbaarheid het zwaarst, voor een medisch dossier vertrouwelijkheid én integriteit, voor financiële rapportages integriteit. De classificatie (Annex A 5.12) legt die weging per informatiesoort vast."
---

De BIV-driehoek is het denkraam waar alle informatiebeveiliging op teruggaat: welke drie dingen kunnen er eigenlijk misgaan met informatie? Het antwoord: ze is er niet als je haar nodig hebt, ze klopt niet, of de verkeerde mensen kunnen erbij.

## De drie eigenschappen

**Beschikbaarheid**: informatie en systemen zijn toegankelijk wanneer het werk erom vraagt. Bedreigingen: storingen, ransomware, stroomuitval, een volgelopen schijf. Maatregelen: back-ups, redundantie, capaciteitsbeheer, continuïteitsplannen.

**Integriteit**: informatie is juist, volledig en alleen via geautoriseerde weg gewijzigd. Bedreigingen: fouten bij invoer, manipulatie, synchronisatieproblemen, malware die data aanpast. Maatregelen: invoercontroles, versiebeheer, logging, functiescheiding, checksums.

**Vertrouwelijkheid**: alleen geautoriseerden hebben toegang. Bedreigingen: datalekken, meelezen, verkeerd delen, gestolen apparaten. Maatregelen: toegangsbeheer, versleuteling, classificatie, clear desk.

## Hoe je ermee werkt binnen ISO 27001

De driehoek is geen theorie maar gereedschap op drie plekken. In de **risicoanalyse**: elk risico raakt één of meer van de drie; expliciet benoemen welke, scherpt de maatregelkeuze (een back-up helpt niets tegen een vertrouwelijkheidsrisico). In de **classificatie** (5.12): informatie wordt gewogen op alle drie de assen, want de gevoeligste data is niet altijd de meest beschikbaarheidskritische. En in de **hersteldoelen**: RTO en RPO (5.30) zijn de beschikbaarheids- en integriteitseisen in getallen.

Moderne uitbreidingen voegen soms eigenschappen toe (authenticiteit, onweerlegbaarheid, privacy), maar de kern blijft de driehoek: als je van elke maatregel kunt zeggen welke van de drie hij beschermt, en van elke informatiesoort welke van de drie het zwaarst weegt, denk je zoals de norm het bedoelt.
