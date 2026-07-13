---
title: "Annex A 7.14: Veilig verwijderen of hergebruiken van apparatuur"
description: "Maatregel 7.14 van ISO 27001 Annex A eist dat apparatuur vóór afvoer of hergebruik aantoonbaar wordt gewist. Wissen, vernietigen en de bewijsvoering uitgelegd."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.14 eist dat apparatuur met opslagmedia vóór verwijdering of hergebruik wordt gecontroleerd en dat gevoelige gegevens en gelicentieerde software aantoonbaar zijn verwijderd of veilig overschreven. Praktisch: een vaste afvoerprocedure met veilig wissen of fysieke vernietiging, een vernietigingsverklaring bij uitbesteding, en registratie per afgevoerd apparaat in het assetregister."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.14", "apparatuur afvoeren", "veilig wissen", "vernietiging", "iso 27001"]
gerelateerd: ["annex-a-7-10-opslagmedia", "annex-a-5-9-inventarisatie-van-bedrijfsmiddelen", "annex-a-7-13-onderhoud-van-apparatuur"]
faq:
  - vraag: "Is formatteren voldoende om een schijf te wissen?"
    antwoord: "Nee. Een gewone format verwijdert alleen de verwijzingen; de data blijft terughaalbaar. Veilig wissen betekent: cryptografisch wissen (de sleutel van een versleutelde schijf vernietigen), overschrijven met daarvoor bestemde tooling, of fysieke vernietiging. Voor moderne versleutelde apparaten is het wissen van de sleutel de snelste route."
  - vraag: "Wat moet je bewaren als bewijs?"
    antwoord: "Per afgevoerd apparaat: wat het was (serienummer, koppeling met het assetregister), wanneer en hoe het is gewist of vernietigd, en door wie. Bij uitbesteding aan een recyclingpartij: de vernietigingsverklaring met serienummers."
---

Annex A-maatregel 7.14 van ISO 27001, "Secure disposal or re-use of equipment", sluit het fysieke hoofdstuk af bij het einde van de levenscyclus: de afgedankte laptop op Marktplaats met de klantendatabase er nog op is een klassieker onder de datalekken.

## Wat eist de maatregel?

Apparatuur die opslagmedia bevat, wordt vóór verwijdering of hergebruik gecontroleerd om te waarborgen dat gevoelige gegevens en gelicentieerde software zijn verwijderd of veilig zijn overschreven. Ook bij hergebruik binnen de organisatie (apparaat naar een andere medewerker) geldt dat de vorige inhoud niet toegankelijk mag zijn.

## Zo vul je hem in

1. **Maak één afvoerroute**: alle af te voeren apparatuur (laptops, telefoons, servers, maar ook printers en netwerkapparatuur met opslag of configuratie) gaat door dezelfde procedure: wissen of vernietigen, registreren, afmelden in het assetregister (5.9).
2. **Kies de wismethode**: versleutelde apparaten cryptografisch wissen (fabrieksreset bij moderne telefoons en laptops met versleuteling); onversleutelde of defecte schijven fysiek vernietigen via een gecertificeerde partij met verklaring.
3. **Vergeet de randapparatuur niet**: multifunctionals met interne opslag, netwerkapparatuur met configuraties en wachtwoorden, en NAS-en uit de meterkast.
4. **Registreer per apparaat**: serienummer, methode, datum, uitvoerder of vernietigingsverklaring; dat is het auditbewijs.

## Waar let de auditor op?

De auditor pakt afgevoerde apparaten uit het assetregister en vraagt het wisbewijs. De bevindingen die hier vallen: een doos "nog af te voeren" oude laptops die al twee jaar in een kast staat (niet gewist, niet geregistreerd, wel toegankelijk), en afvoer via een medewerker die "hem nog wel kon gebruiken" zonder enige procedure.
