---
title: "Annex A 7.12: Beveiliging van bekabeling"
description: "Maatregel 7.12 van ISO 27001 Annex A eist bescherming van stroom- en datakabels tegen interceptie, interferentie en schade. Nuchtere invulling voor kantooromgevingen."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.12 eist dat kabels voor stroom en data worden beschermd tegen interceptie, interferentie en beschadiging: patchkasten op slot, geen bereikbare netwerkpoorten en kabels in publieke ruimtes, nette en gedocumenteerde bekabeling, en scheiding van stroom- en datakabels tegen interferentie. Voor het MKB vooral een kwestie van opgeruimd en afgesloten."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.12", "bekabeling", "patchkast", "netwerkpoorten", "iso 27001"]
gerelateerd: ["annex-a-7-8-plaatsing-en-bescherming-apparatuur", "annex-a-7-2-fysieke-toegang", "annex-a-5-15-toegangsbeveiliging"]
faq:
  - vraag: "Wat is het grootste bekabelingsrisico in een gewoon kantoor?"
    antwoord: "Actieve netwerkpoorten in publiek toegankelijke ruimtes: de spreekkamer of hal waar iedereen een kabel kan inprikken en op het interne netwerk zit. Oplossing: ongebruikte poorten uitschakelen (op de switch of via netwerktoegangscontrole) en publieke poorten op een gastnetwerk zetten."
  - vraag: "Moet bekabeling gedocumenteerd zijn?"
    antwoord: "Een actueel patchschema en gelabelde kabels in de patchkast schelen fouten en zoektijd bij storingen en wijzigingen. Voor kleine omgevingen volstaat een eenvoudig overzicht van wat waar naartoe loopt."
---

Annex A-maatregel 7.12 van ISO 27001, "Cabling security", beschermt de fysieke aders van het netwerk. Onopvallend, tot iemand in de spreekkamer een kabel inprikt of een graafmachine de glasvezel raakt.

## Wat eist de maatregel?

Kabels die stroom of data transporteren of informatiediensten ondersteunen, worden beschermd tegen interceptie, interferentie en schade: leidingen waar mogelijk inpandig en afgeschermd, netwerk- en stroomkabels gescheiden tegen interferentie, toegang tot patchpanelen en kabelruimten beperkt, en bekabeling gedocumenteerd.

## Zo vul je hem in

1. **Sluit de toegangspunten af**: patchkasten op slot (ook die ene in de gang), kabelruimten in de beperkte zone, en zichtbare kabels in publieke ruimtes vermijden.
2. **Beheers de poorten**: ongebruikte netwerkpoorten uit, publieke poorten op een gescheiden gastnetwerk; dat haalt de angel uit het inprik-risico.
3. **Houd het netjes en gedocumenteerd**: gelabelde kabels en een actueel patchschema voorkomen fouten en maken manipulatie opvallender.
4. **Denk aan de aanvoer**: weet waar de externe verbindingen het pand binnenkomen en bescherm dat punt; bij hoge beschikbaarheidseisen een tweede route via een ander tracé (7.11).

## Waar let de auditor op?

De auditor kijkt bij de rondgang naar de patchkast (open of dicht, spaghetti of gelabeld) en let op netwerkpoorten in publieke ruimtes. Voor een gemiddeld kantoor is dit een lichte maatregel: een slot, een opgeruimde kast en uitgeschakelde poorten dekken vrijwel alles af.
