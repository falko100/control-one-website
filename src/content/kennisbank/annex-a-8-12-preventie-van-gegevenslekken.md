---
title: "Annex A 8.12: Preventie van gegevenslekken (DLP)"
description: "Maatregel 8.12 van ISO 27001 Annex A eist maatregelen tegen het weglekken van gevoelige gegevens via mail, deellinks en uploads. DLP praktisch en proportioneel."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.12, nieuw in de 2022-versie, eist dat maatregelen tegen gegevenslekken worden toegepast op systemen, netwerken en apparaten die gevoelige informatie verwerken: weten welke gegevens bescherming verdienen (classificatie), de uitstroomkanalen beheersen (mail, deellinks, USB, uploads naar externe diensten) en detecteren of blokkeren waar het risico dat vraagt. Proportionaliteit is het sleutelwoord: beginnen bij de gevoeligste gegevens en de breedste kanalen."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.12", "dlp", "data leakage prevention", "gegevenslekken", "iso 27001"]
gerelateerd: ["annex-a-5-12-classificatie-van-informatie", "annex-a-5-14-informatieoverdracht", "annex-a-8-16-monitoringactiviteiten"]
faq:
  - vraag: "Is een DLP-pakket verplicht?"
    antwoord: "Nee. De maatregel eist passende preventie; voor het MKB begint dat met de instellingen die er al zijn: deellinks standaard beperkt, waarschuwing bij externe ontvangers, USB-opslag beperkt (7.10), en de DLP-regels die Microsoft 365 of Google Workspace ingebouwd bieden voor herkenbare patronen zoals BSN's en creditcardnummers."
  - vraag: "Hoe ga je om met AI-tools als lekkanaal?"
    antwoord: "Het plakken van klantdata in publieke AI-tools is een modern lekkanaal: adresseer het in het gebruiksreglement (5.10), bied een goedgekeurd alternatief en overweeg technische beperking van niet-goedgekeurde diensten. Verbieden zonder alternatief verplaatst het gedrag alleen naar privé-apparaten."
---

Annex A-maatregel 8.12 van ISO 27001, "Data leakage prevention", is nieuw in de 2022-versie en richt zich op de uitstroom: gegevens die de organisatie verlaten via mail, deellinks, uploads of opslagmedia, per ongeluk of bewust.

## Wat eist de maatregel?

Maatregelen tegen gegevenslekken worden toegepast op systemen, netwerken en andere apparaten die gevoelige informatie verwerken, opslaan of verzenden. De opbouw: identificeren welke informatie bescherming verdient (classificatie, 5.12), de kanalen monitoren waarlangs zij kan weglekken, en handelen: waarschuwen, blokkeren of achteraf detecteren, passend bij het risico.

## Zo vul je hem in

1. **Begin bij de instellingen die er al zijn**: deellinks standaard intern en met verlooptijd, externe-ontvanger-waarschuwingen in de mail, beperkte exports uit kernsystemen, USB-opslag beheerst (7.10).
2. **Activeer ingebouwde DLP-regels**: de kantooromgevingen herkennen patronen (BSN, IBAN, creditcard) en kunnen bij extern delen waarschuwen of blokkeren; begin met waarschuwen om werkbaar te blijven.
3. **Koppel aan classificatie**: gevoeligheidslabels (5.13) maken DLP-beleid gericht: strikt voor vertrouwelijk, licht voor intern.
4. **Monitor en leer**: rapportages over geblokkeerde en gewaarschuwde acties voeden awareness (6.3) en laten zien waar de regels schuren.

## Waar let de auditor op?

De auditor vraagt hoe je zou merken dat een klantenlijst naar buiten gaat: via welke instelling, waarschuwing of rapportage. Een genuanceerd, proportioneel antwoord ("deze kanalen beheersen we technisch, deze via gedrag en logging, en dit accepteren we") overtuigt meer dan de aanschaf van een zwaar DLP-pakket dat op de plank ligt.
