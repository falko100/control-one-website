---
title: "Annex A 5.33: Beschermen van registraties"
description: "Maatregel 5.33 van ISO 27001 Annex A eist dat records beschermd worden tegen verlies, vervalsing en ongeautoriseerde toegang, conform bewaartermijnen. Zo regel je het."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.33 eist dat registraties (records) worden beschermd tegen verlies, vernietiging, vervalsing en ongeautoriseerde toegang of vrijgave, gedurende hun hele bewaartermijn. Praktisch: een bewaartermijnentabel per recordsoort (van financiële administratie tot logbestanden), passende opslag met toegangsbeperking en integriteitsborging, en gecontroleerde vernietiging na afloop."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.33", "registraties", "records", "bewaartermijnen", "iso 27001"]
gerelateerd: ["annex-a-5-31-wettelijke-en-contractuele-eisen", "annex-a-5-34-privacy-en-persoonsgegevens", "annex-a-5-12-classificatie-van-informatie"]
faq:
  - vraag: "Welke bewaartermijnen gelden er in Nederland?"
    antwoord: "De bekendste: 7 jaar voor de fiscale administratie (10 jaar bij onroerend goed), 5 jaar voor loonbelastinggegevens na uitdiensttreding, 2 jaar voor de meeste personeelsdossiergegevens na vertrek. Voor persoonsgegevens geldt daarnaast de AVG: niet langer bewaren dan noodzakelijk, dus ook een maximumtermijn."
  - vraag: "Vallen systeemlogs ook onder records?"
    antwoord: "Ja, voor zover ze als bewijs dienen (beveiligingslogs, auditsporen, incidentdossiers). Bepaal ook daarvoor een bewaartermijn: lang genoeg voor onderzoek en verantwoording, niet zo lang dat het een privacyrisico wordt."
---

Annex A-maatregel 5.33 van ISO 27001, "Protection of records", gaat over de registraties waarmee de organisatie haar verplichtingen en gebeurtenissen kan aantonen: contracten, administratie, personeelsdossiers, logbestanden, incidentdossiers. Die moeten intact, vindbaar en beschermd blijven, precies zo lang als nodig.

## Wat eist de maatregel?

Records worden beschermd tegen verlies, vernietiging, vervalsing en ongeautoriseerde toegang of publicatie, in lijn met wettelijke, contractuele en bedrijfseisen. Dat omvat: een bewaarschema, opslag die de leesbaarheid gedurende de hele termijn garandeert (ook bij technologiewisselingen), en verantwoorde vernietiging na afloop.

## Zo vul je hem in

1. **Maak een bewaartermijnentabel**: per recordsoort de termijn, de wettelijke bron, de opslaglocatie en de eigenaar. Combineer de fiscale minimumtermijnen met de AVG-maximumtermijnen.
2. **Bescherm naar classificatie**: records met persoonsgegevens of bedrijfsgevoelige inhoud krijgen toegangsbeperking, back-up en waar nodig onveranderbaarheid (versiegeschiedenis, write-once-opslag voor kritieke logs).
3. **Borg de leesbaarheid**: records in verouderde formaten of op oude dragers tijdig migreren; een onleesbare back-up telt niet.
4. **Vernietig gecontroleerd**: na de termijn worden records aantoonbaar verwijderd, ook uit back-ups en archieven waar dat redelijkerwijs kan.

## Waar let de auditor op?

De auditor vraagt de bewaartermijnentabel en toetst een steekproef: is dit personeelsdossier van iemand die vijf jaar weg is er nog, en waarom? Bekende bevindingen: geen vastgestelde termijnen (alles wordt eeuwig bewaard, wat botst met de AVG), en incidentdossiers of logs die juist te kort worden bewaard om nog iets te kunnen aantonen.
