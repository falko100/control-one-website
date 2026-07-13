---
title: "Annex A 8.33: Testgegevens"
description: "Maatregel 8.33 van ISO 27001 Annex A eist dat testgegevens passend worden geselecteerd en beschermd: geen productiedata in testomgevingen, anonimiseren en opruimen."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.33 eist dat testgegevens passend worden geselecteerd, beschermd en beheerd: bij voorkeur synthetische of geanonimiseerde data in plaats van productiekopieën, en als productiedata onvermijdelijk is, dan met autorisatie, dezelfde bescherming als productie, en verwijdering direct na de test. Testomgevingen met echte klantdata zijn een klassieke bron van datalekken."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.33", "testgegevens", "testdata", "anonimiseren", "iso 27001"]
gerelateerd: ["annex-a-8-31-scheiding-van-omgevingen", "annex-a-8-11-gegevensmaskering", "annex-a-5-34-privacy-en-persoonsgegevens"]
faq:
  - vraag: "Waarom is een productiekopie in test zo riskant?"
    antwoord: "Testomgevingen hebben zwakkere beveiliging (bredere toegang, minder monitoring, soms publiek bereikbaar), terwijl de data even gevoelig is als productie. Bovendien is het gebruik van persoonsgegevens voor testen zonder noodzaak een AVG-probleem: het doel (testen) rechtvaardigt de verwerking meestal niet."
  - vraag: "Wat als je echt met productiedata moet testen?"
    antwoord: "Soms is het onvermijdelijk (migratietests, productie-incidenten reproduceren). Dan: expliciete autorisatie per keer, dezelfde toegangsbeperkingen en bescherming als productie, logging van het gebruik, en aantoonbare verwijdering direct na afloop. Maak het de uitzondering met papierwerk, niet de gewoonte."
---

Annex A-maatregel 8.33 van ISO 27001, "Test information", beschermt tegen een onderschat lek: de kopie van de klantendatabase die "even" in de testomgeving werd gezet en daar jaren bleef staan, breed toegankelijk en door niemand bewaakt.

## Wat eist de maatregel?

Testgegevens worden passend geselecteerd, beschermd en beheerd: de data past bij het testdoel, gevoelige productiegegevens worden vermeden of beschermd door anonimisering of maskering (8.11), gebruik van productiedata vereist autorisatie en gelijke bescherming als in productie, en testdata wordt na gebruik verwijderd.

## Zo vul je hem in

1. **Maak synthetisch de standaard**: gegenereerde testdata of een geanonimiseerde subset als vaste voorziening voor ontwikkel- en testwerk; eenmalig inrichten, blijvend profijt.
2. **Anonimiseer echt**: namen vervangen is geen anonimisering als adres en geboortedatum blijven staan; masker alle herleidbare velden (8.11).
3. **Reguleer de uitzondering**: productiedata in test alleen met autorisatie, beperkte toegang, en een opruimafspraak met deadline; registreer het.
4. **Ruim periodiek op**: een jaarlijkse check van test- en ontwikkelomgevingen op achtergebleven echte data; oude testdatabases zijn vergeetputten.

## Waar let de auditor op?

De auditor vraagt wat er in de testomgeving staat en waar het vandaan komt; het antwoord "een kopie van productie van vorig jaar" opent meteen drie bevindingen (deze maatregel, 8.31 en de AVG via 5.34). Een demonstratie van de synthetische-datavoorziening sluit het onderwerp in één keer af.
