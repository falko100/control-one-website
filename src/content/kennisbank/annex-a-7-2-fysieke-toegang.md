---
title: "Annex A 7.2: Fysieke toegang"
description: "Maatregel 7.2 van ISO 27001 Annex A eist toegangscontrole op beveiligde gebieden en een beheerst bezoekersproces. Sleutelbeheer, tags en bezoekersregistratie uitgelegd."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.2 eist dat beveiligde gebieden worden beschermd met passende toegangscontrole: alleen geautoriseerden komen binnen, toegangsmiddelen (sleutels, tags, codes) worden beheerd en periodiek herzien, en bezoekers worden geregistreerd en begeleid. De toegangsrechten voor fysieke ruimtes volgen dezelfde levenscyclus als digitale rechten: toekennen, herzien, intrekken bij vertrek."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.2", "fysieke toegang", "toegangscontrole", "bezoekersregistratie", "iso 27001"]
gerelateerd: ["annex-a-7-1-fysieke-beveiligingszones", "annex-a-5-18-toegangsrechten", "annex-a-7-6-werken-in-beveiligde-gebieden"]
faq:
  - vraag: "Is een elektronisch toegangssysteem verplicht?"
    antwoord: "Nee. Sleutels met een beheerd uitgifteregister voldoen ook. Elektronische tags hebben wel voordelen: individueel intrekbaar bij vertrek of verlies, en logging van wie wanneer binnenkwam. Bij sleutels is het risico dat één verloren sleutel het vervangen van sloten betekent."
  - vraag: "Wat hoort er in een bezoekersproces?"
    antwoord: "Aanmelden (wie, voor wie, wanneer), registratie bij aankomst, een herkenbaar bezoekersmiddel waar dat past, begeleiding in interne en beperkte zones, en afmelden bij vertrek. Voor het MKB volstaat een digitale of papieren bezoekerslijst plus de afspraak dat bezoek nooit onbegeleid rondloopt."
---

Annex A-maatregel 7.2 van ISO 27001, "Physical entry", regelt wie de zones uit 7.1 daadwerkelijk binnenkomt: de deuren, de sleutels en de bezoekers.

## Wat eist de maatregel?

Beveiligde gebieden worden beschermd door passende toegangsbeveiliging en toegangspunten: alleen geautoriseerd personeel krijgt toegang, toegangsmiddelen worden beheerd (uitgifte, register, intrekking), toegang tot gevoelige zones wordt waar passend gelogd, en bezoekers worden geïdentificeerd, geregistreerd en begeleid. Ook laad- en losplekken en andere ingangen vallen eronder.

## Zo vul je hem in

1. **Beheer de toegangsmiddelen**: een register van wie welke sleutel, tag of code heeft; uitgifte en inname gekoppeld aan in- en uitdienst (5.11, 5.18); codes wijzigen bij vertrek van iemand die ze kende.
2. **Beperk de beperkte zone**: serverruimte en patchkast alleen toegankelijk voor benoemde personen; log de toegang waar het systeem dat kan.
3. **Richt het bezoekersproces in**: registratie, begeleiding en het gesprek aan de deur; train medewerkers om onbekenden vriendelijk aan te spreken (social engineering komt binnen via de achterdeur en een doos in de handen).
4. **Herzie periodiek**: de fysieke toegangslijst gaat mee in de periodieke toegangsreview van 5.18.

## Waar let de auditor op?

De auditor toetst het register tegen de praktijk: wie heeft toegang tot de serverruimte en klopt dat met de lijst, wat gebeurde er met de tag van de laatst vertrokken medewerker? En de praktijkproef: loopt er iemand achter de auditor aan naar binnen zonder vragen te stellen? Bezoekersregistraties die maanden leeg zijn terwijl er dagelijks bezoek komt, vertellen hun eigen verhaal.
