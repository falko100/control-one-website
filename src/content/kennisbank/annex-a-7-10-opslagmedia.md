---
title: "Annex A 7.10: Opslagmedia"
description: "Maatregel 7.10 van ISO 27001 Annex A eist beheer van verwijderbare opslagmedia over de hele levenscyclus: van uitgifte en gebruik tot transport en vernietiging."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.10 eist dat opslagmedia (USB-sticks, externe schijven, geheugenkaarten, tapes) worden beheerd over hun hele levenscyclus: aanschaf, gebruik, transport en afvoer, conform de classificatie van de informatie erop. Moderne invulling: het gebruik van verwijderbare media zoveel mogelijk beperken en technisch begrenzen, en wat overblijft versleutelen, registreren en aantoonbaar veilig vernietigen."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.10", "opslagmedia", "usb-sticks", "verwijderbare media", "iso 27001"]
gerelateerd: ["annex-a-7-14-veilig-verwijderen-van-apparatuur", "annex-a-5-12-classificatie-van-informatie", "annex-a-5-14-informatieoverdracht"]
faq:
  - vraag: "Is het verbieden van USB-sticks de beste oplossing?"
    antwoord: "Voor veel organisaties wel het overwegen waard: veilige deelalternatieven (5.14) maken sticks meestal overbodig, en technisch blokkeren of beperken tot goedgekeurde versleutelde sticks scheelt een heel risicogebied. Volledig verbieden zonder alternatief werkt averechts: dan verschijnen privé-sticks."
  - vraag: "Hoe vernietig je media veilig?"
    antwoord: "Versleutelde media: wissen van de sleutel plus formatteren volstaat praktisch. Onversleutelde media met gevoelige data: gecertificeerde vernietiging (shredden) via een gespecialiseerd bedrijf met vernietigingsverklaring, of aantoonbaar veilig wissen met daarvoor bestemde tooling. Weggooien of alleen 'formatteren' is onvoldoende."
---

Annex A-maatregel 7.10 van ISO 27001, "Storage media", beheerst een klein voorwerp met groot risico: op een USB-stick van tien euro past de complete klantendatabase, en hij past ook in elke jaszak en elke vondstenbak.

## Wat eist de maatregel?

Opslagmedia worden beheerd door hun levenscyclus heen: verwerving, gebruik, transport en verwijdering, in overeenstemming met het classificatieschema en de omgangseisen. Elementen: autorisatie voor het gebruik van verwijderbare media, registratie waar dat passend is, versleuteling van gevoelige inhoud, veilig transport en aantoonbaar veilige vernietiging (zie ook 7.14).

## Zo vul je hem in

1. **Beperk eerst**: bepaal of verwijderbare media überhaupt nodig zijn nu veilige deelmethoden bestaan; blokkeer of beperk USB-opslag via beleid op de werkplekken waar het kan.
2. **Standaardiseer wat overblijft**: alleen door de organisatie verstrekte, versleutelde media; registratie van uitgifte bij gevoelig gebruik.
3. **Regel transport**: gevoelige media niet onbeveiligd per post; versleuteling maakt fysiek transport pas acceptabel.
4. **Vernietig aantoonbaar**: ingeleverde en afgedankte media wissen of shredden met registratie; leg de route vast samen met 7.14.

## Waar let de auditor op?

De auditor vraagt naar het beleid en kijkt naar de praktijk: liggen er losse onversleutelde sticks in lades, wat gebeurt er met de externe schijf van de vertrokken collega? De sterkste positie is kunnen zeggen: "USB-opslag staat dicht, delen gaat via het platform, en de uitzonderingen staan in dit lijstje." Dat maakt van een diffuus risico een gesloten verhaal.
