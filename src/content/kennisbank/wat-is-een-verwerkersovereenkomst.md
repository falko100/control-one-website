---
title: "Wat is een verwerkersovereenkomst?"
description: "Een verwerkersovereenkomst is het wettelijk verplichte contract tussen verwerkingsverantwoordelijke en verwerker van persoonsgegevens. Wanneer nodig en wat erin moet."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een verwerkersovereenkomst is het contract dat de AVG verplicht stelt wanneer een organisatie (de verwerkingsverantwoordelijke) persoonsgegevens laat verwerken door een andere partij (de verwerker), zoals een SaaS-leverancier, hostingpartij of salarisverwerker. Erin staan onder meer het onderwerp en doel van de verwerking, beveiligingsmaatregelen, sub-verwerkers, bijstand bij datalekken en betrokkenenrechten, en wat er bij einde contract met de data gebeurt."
publishDate: 2026-07-15
readTime: "3 min"
keywords: ["verwerkersovereenkomst", "avg", "verwerker", "verwerkingsverantwoordelijke"]
gerelateerd: ["annex-a-5-34-privacy-en-persoonsgegevens", "annex-a-5-20-leveranciersovereenkomsten", "wat-is-een-datalek"]
faq:
  - vraag: "Wanneer is een verwerkersovereenkomst verplicht?"
    antwoord: "Zodra een externe partij persoonsgegevens verwerkt in jouw opdracht en voor jouw doel: de e-mailmarketingtool met je klantenbestand, de hostingpartij met je database, het administratiekantoor met personeelsgegevens, de SaaS-planningstool met medewerkerdata. Niet nodig bij partijen die zelf verantwoordelijke zijn voor hun eigen doel, zoals een accountant in zijn wettelijke controlerol of een koeriersdienst."
  - vraag: "Wie levert de verwerkersovereenkomst aan?"
    antwoord: "Bij grote SaaS-leveranciers teken je hun standaardovereenkomst (vaak onderdeel van de voorwaarden); onderhandelen is zelden mogelijk, beoordelen wel verstandig. Bij kleinere leveranciers en maatwerkrelaties gebruik je een eigen model. Belangrijker dan wie hem levert: dát hij er is en dat je weet wat erin staat, vooral over sub-verwerkers en datalek-melding."
---

Een verwerkersovereenkomst is het contract dat de AVG (artikel 28) verplicht stelt tussen de **verwerkingsverantwoordelijke** (de organisatie die doel en middelen van de verwerking bepaalt) en de **verwerker** (de partij die persoonsgegevens verwerkt in opdracht van die verantwoordelijke). Zonder deze overeenkomst is het uitbesteden van gegevensverwerking simpelweg niet toegestaan.

## Wat moet erin staan?

De AVG schrijft de kern voor: het onderwerp, de duur, de aard en het doel van de verwerking, het soort persoonsgegevens en de categorieën betrokkenen, en de verplichtingen van de verwerker: alleen verwerken op instructie, geheimhouding, passende beveiligingsmaatregelen, voorwaarden voor het inschakelen van **sub-verwerkers** (met doorvertaling van de afspraken), bijstand bij datalekken en verzoeken van betrokkenen, meewerken aan audits, en het wissen of retourneren van de gegevens bij het einde van de dienstverlening.

## De praktijk

Voor het MKB is de checklist simpel: loop het leveranciersregister langs (Annex A 5.19) en markeer elke partij die persoonsgegevens voor je verwerkt. Elk van die partijen heeft een getekende of geaccepteerde verwerkersovereenkomst nodig; bewaar ze centraal en vindbaar. Let bij de beoordeling vooral op: de meldtermijn bij datalekken (jij moet binnen 72 uur bij de AP kunnen melden, dus de verwerker moet sneller bij jou melden), de sub-verwerkerslijst en de wijzigingsprocedure daarvan, en de exit-afspraken.

## De koppeling met ISO 27001

De verwerkersovereenkomst is de privacyrechtelijke laag bovenop het leveranciersbeheer: maatregel 5.20 (leveranciersovereenkomsten) en 5.34 (privacy) eisen samen precies dit. In een audit is de combinatie leveranciersregister plus bijbehorende verwerkersovereenkomsten een vast controlepunt: elke verwerker in het register zonder overeenkomst is een dubbele bevinding, voor de norm én de AVG.
