---
title: "Annex A 8.10: Verwijderen van informatie"
description: "Maatregel 8.10 van ISO 27001 Annex A eist dat informatie wordt verwijderd zodra ze niet meer nodig is, uit systemen, apparaten en clouddiensten. AVG-proof opruimen."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.10, nieuw in de 2022-versie, eist dat informatie in systemen, apparaten en opslagmedia wordt verwijderd wanneer ze niet langer nodig is: volgens de bewaartermijnen, met methoden die passen bij de gevoeligheid, ook bij cloudleveranciers (verwijderafspraken en -bewijs), en aantoonbaar. De maatregel verbindt de AVG-plicht tot dataminimalisatie met de praktijk van opruimen."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.10", "informatie verwijderen", "bewaartermijnen", "dataminimalisatie", "iso 27001"]
gerelateerd: ["annex-a-5-33-beschermen-van-registraties", "annex-a-7-14-veilig-verwijderen-van-apparatuur", "annex-a-5-34-privacy-en-persoonsgegevens"]
faq:
  - vraag: "Waarom is bewaren tot in de eeuwigheid een risico?"
    antwoord: "Elke bewaarde dataset is bij een datalek onderdeel van de schade en bij een AVG-verzoek onderdeel van het werk. Persoonsgegevens langer bewaren dan noodzakelijk is bovendien zelf een AVG-overtreding. Wat je niet hebt, kan niet lekken: verwijderen is een beveiligingsmaatregel."
  - vraag: "Hoe regel je verwijdering bij clouddiensten?"
    antwoord: "Via afspraken (5.20): wat gebeurt er met data bij verwijdering en bij het einde van het contract, binnen welke termijn is het echt weg (inclusief back-ups van de leverancier) en welk bewijs krijg je. Grote leveranciers documenteren hun bewaar- en verwijderbeleid; leg de beoordeling vast."
---

Annex A-maatregel 8.10 van ISO 27001, "Information deletion", is nieuw in de 2022-versie en maakt van opruimen een expliciete plicht: informatie die haar doel heeft gediend, gaat weg.

## Wat eist de maatregel?

Informatie opgeslagen in informatiesystemen, apparaten en andere opslagmedia wordt verwijderd wanneer ze niet langer vereist is: conform de bewaartermijnen (5.33) en wettelijke eisen, met verwijdermethoden passend bij de gevoeligheid, inclusief de informatie bij externe leveranciers, en met bewijs waar dat nodig is.

## Zo vul je hem in

1. **Werk vanuit de bewaartermijnentabel**: de termijnen van 5.33 krijgen hier hun uitvoering: wie verwijdert wat, wanneer en hoe; plan een jaarlijkse opruimronde per informatiesoort.
2. **Automatiseer waar het kan**: retentiebeleid in de mail- en documentomgeving verwijdert of archiveert automatisch; dat is betrouwbaarder dan geheugensteuntjes.
3. **Verwijder passend bij gevoeligheid**: van prullenbak legen tot veilig wissen (7.10, 7.14); let op kopieën in mail, downloads en exports.
4. **Dek de keten**: verwijderafspraken met cloudleveranciers en verwerkers, inclusief het einde-contract-scenario (5.23).

## Waar let de auditor op?

De auditor pakt de bewaartermijnentabel en toetst een steekproef: sollicitatiebrieven van drie jaar geleden, oud-klantdossiers, de mailbox van een vertrokken directeur. Aanwezig terwijl de termijn zegt verwijderd: bevinding, en tegelijk een AVG-risico. Automatisch retentiebeleid is het antwoord dat zowel de auditor als de Autoriteit Persoonsgegevens overtuigt.
