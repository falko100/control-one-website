---
title: "Annex A 8.30: Uitbestede ontwikkeling"
description: "Maatregel 8.30 van ISO 27001 Annex A eist regie op uitbestede systeemontwikkeling: eisen, eigendom, toetsing en bewijsvoering bij ontwikkelpartners en bureaus."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.30 eist dat de organisatie de uitbestede ontwikkeling van systemen aanstuurt, monitort en beoordeelt: beveiligingseisen en veilige-ontwikkelpraktijken contractueel vastgelegd, duidelijkheid over eigendom van code en data, toetsing van het geleverde (reviews, tests, pentests) en bewijs dat de partner de afspraken naleeft. Uitbesteden verplaatst de verantwoordelijkheid niet."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.30", "uitbestede ontwikkeling", "ontwikkelpartner", "outsourcing", "iso 27001"]
gerelateerd: ["annex-a-8-25-veilige-ontwikkelcyclus", "annex-a-5-20-leveranciersovereenkomsten", "annex-a-8-29-beveiligingstesten"]
faq:
  - vraag: "Geldt dit ook voor een website of app die een bureau bouwt?"
    antwoord: "Ja, dat is voor het MKB het meest voorkomende geval. Stel eisen aan hosting en updates, spreek af wie na oplevering patcht en monitort (het klassieke gat), leg het eigendom van code en content vast, en laat extern bereikbare toepassingen toetsen vóór livegang."
  - vraag: "Welke afspraken horen minimaal in het contract?"
    antwoord: "De beveiligingseisen aan het product (8.26), veilige-ontwikkelpraktijken bij de partner, eigendom en escrow van broncode, geheimhouding en verwerkersafspraken waar data speelt, het recht om te (laten) testen, afspraken over kwetsbaarheden na oplevering, en onderhoudsverantwoordelijkheid."
---

Annex A-maatregel 8.30 van ISO 27001, "Outsourced development", regelt het geval waarin anderen jouw software bouwen: het werk kan worden uitbesteed, de verantwoordelijkheid niet.

## Wat eist de maatregel?

De organisatie stuurt de activiteiten van uitbestede systeemontwikkeling aan, monitort ze en beoordeelt ze: licentie- en eigendomsafspraken, contractuele eisen voor veilig ontwerpen, programmeren en testen (8.25 tot en met 8.29 doorvertaald naar de partner), acceptatietesten van het geleverde, en bewijs dat de partner aan de eisen voldoet.

## Zo vul je hem in

1. **Zet de eisen in het contract**: beveiligingseisen aan het product, ontwikkelpraktijken van de partner, eigendom van code, en de onderhouds- en patchverantwoordelijkheid na oplevering; sluit aan op de leveranciersovereenkomsten van 5.20.
2. **Toets het geleverde**: acceptatie met beveiligingscriteria (8.29) en voor extern bereikbare toepassingen een pentest vóór livegang; vertrouw niet op de eigen verklaring van de bouwer alleen.
3. **Regel de nazorg expliciet**: wie patcht het CMS en de plugins, wie monitort, wie reageert bij een kwetsbaarheid; het onbeheerde opgeleverde project is het grootste risico van uitbesteding.
4. **Beoordeel de partner periodiek**: mee in de leveranciersevaluatie van 5.22, inclusief hoe er met gemelde kwetsbaarheden is omgegaan.

## Waar let de auditor op?

De auditor pakt de uitbestede toepassing (vaak de website of klantportaal) en vraagt: wie onderhoudt dit, wanneer is het voor het laatst getest, wat staat er in het contract? De klassieke bevinding: een verouderd CMS vol niet-gepatchte plugins waar sinds de oplevering drie jaar geleden niemand meer naar heeft omgekeken.
