---
title: "Annex A 8.11: Gegevensmaskering"
description: "Maatregel 8.11 van ISO 27001 Annex A eist maskering van gevoelige gegevens waar volledige zichtbaarheid niet nodig is: pseudonimisering, maskering en testdata."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.11, nieuw in de 2022-versie, eist dat gegevensmaskering wordt toegepast in lijn met het toegangsbeleid en de bedrijfseisen: gevoelige gegevens onherkenbaar of gedeeltelijk zichtbaar maken waar volledige zichtbaarheid niet nodig is. Denk aan gemaskeerde rekeningnummers in schermen, gepseudonimiseerde data voor analyses en geanonimiseerde of synthetische data in testomgevingen."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.11", "gegevensmaskering", "pseudonimisering", "anonimisering", "iso 27001"]
gerelateerd: ["annex-a-5-34-privacy-en-persoonsgegevens", "annex-a-8-33-testgegevens", "annex-a-5-12-classificatie-van-informatie"]
faq:
  - vraag: "Wat is het verschil tussen anonimiseren en pseudonimiseren?"
    antwoord: "Geanonimiseerde gegevens zijn onherleidbaar tot een persoon en vallen buiten de AVG; gepseudonimiseerde gegevens zijn vervangen door een pseudoniem maar met een sleutel nog herleidbaar, en blijven persoonsgegevens. Pseudonimisering is een beveiligingsmaatregel, geen ontsnapping aan de AVG."
  - vraag: "Waar is maskering voor het MKB het meest relevant?"
    antwoord: "Testomgevingen (geen productiekopieën met echte klantdata, zie 8.33), rapportages en analyses die geen namen nodig hebben, schermen van medewerkers met beperkte rol (alleen de laatste cijfers van een rekeningnummer) en datasets die met derden worden gedeeld."
---

Annex A-maatregel 8.11 van ISO 27001, "Data masking", is nieuw in de 2022-versie en volgt een simpel principe: wie de echte gegevens niet nodig heeft, krijgt ze ook niet te zien, zelfs mét toegang tot het systeem.

## Wat eist de maatregel?

Gegevensmaskering wordt gebruikt in overeenstemming met het toegangsbeleid en de bedrijfs- en wettelijke eisen: technieken als maskering (deels afschermen), pseudonimisering en anonimisering, toegepast waar gevoelige gegevens verwerkt of getoond worden zonder dat de volledige waarde nodig is.

## Zo vul je hem in

1. **Identificeer de kandidaten**: waar circuleren gevoelige gegevens terwijl een deel of pseudoniem volstaat? Testomgevingen, rapportages, dashboards, exports naar derden en schermen van rollen met beperkte noodzaak.
2. **Maskeer in de systemen**: gebruik de mogelijkheden van applicaties en platforms: rolafhankelijke veldweergave, gemaskeerde identificatienummers, beperkte exports.
3. **Regel de testdata**: geen productiekopieën in test- en ontwikkelomgevingen; geanonimiseerde of synthetische data (dit is tevens 8.33).
4. **Documenteer de keuzes**: waar maskering is toegepast en waar bewust niet (met motivering); dat maakt de maatregel toetsbaar.

## Waar let de auditor op?

De auditor kijkt vooral naar de testomgeving ("staat hier productiedata in?") en naar brede zichtbaarheid van gevoelige velden: kan de stagiair alle BSN's zien? Voor veel MKB-organisaties is de eerlijke invulling beperkt (testdata en rolweergave); leg dat vast in de Verklaring van Toepasselijkheid met de motivering erbij.
