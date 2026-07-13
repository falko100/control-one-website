---
title: "Annex A 8.25: Veilige ontwikkelcyclus"
description: "Maatregel 8.25 van ISO 27001 Annex A eist regels voor veilige ontwikkeling van software en systemen over de hele levenscyclus. Security by design praktisch ingericht."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.25 eist dat regels voor de veilige ontwikkeling van software en systemen worden vastgesteld en toegepast over de hele ontwikkelcyclus: beveiligingseisen in de ontwerpfase, veilige codeerpraktijken, beveiligingstests, gescheiden omgevingen en beheer van wijzigingen. De maatregelen 8.26 tot en met 8.34 werken de onderdelen uit; 8.25 is het overkoepelende kader."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.25", "veilige ontwikkeling", "sdlc", "security by design", "iso 27001"]
gerelateerd: ["annex-a-8-26-beveiligingseisen-applicaties", "annex-a-8-28-veilig-programmeren", "annex-a-8-31-scheiding-van-omgevingen"]
faq:
  - vraag: "Is dit hoofdstuk relevant zonder eigen ontwikkelteam?"
    antwoord: "Deels. Zonder enige ontwikkeling sluit je 8.25 tot en met 8.31 en 8.33 gemotiveerd uit in de Verklaring van Toepasselijkheid. Let op de grens: wie configuraties bouwt in low-code-platforms, macro's en scripts schrijft of een website laat bouwen (8.30, uitbestede ontwikkeling), heeft wel degelijk een ontwikkelcomponent."
  - vraag: "Wat is de kern van een veilige ontwikkelcyclus voor een klein team?"
    antwoord: "Beveiligingseisen meenemen bij het ontwerp (8.26), branch protection en code review (8.4, 8.28), geautomatiseerde afhankelijkheden- en kwetsbaarheidsscans in de pipeline, gescheiden ontwikkel-, test- en productieomgevingen (8.31), en wijzigingen via een vast proces (8.32)."
---

Annex A-maatregel 8.25 van ISO 27001, "Secure development life cycle", opent de ontwikkelreeks van Annex A: beveiliging die achteraf op software wordt geplakt, is duurder en slechter dan beveiliging die er vanaf het ontwerp in zit.

## Wat eist de maatregel?

Regels voor de veilige ontwikkeling van software en systemen worden vastgesteld en toegepast: de scheiding van omgevingen (8.31), beveiligingseisen in de specificatiefase (8.26), veilige architectuurprincipes (8.27) en codeerpraktijken (8.28), beveiligingstests (8.29), beheerde repositories (8.4) en wijzigingsbeheer (8.32). Ook uitbestede ontwikkeling valt onder het regime (8.30).

## Zo vul je hem in

1. **Leg de ontwikkelrichtlijn vast**: een compact document dat de keten beschrijft: hoe komen eisen tot stand, hoe wordt gebouwd (review, standaarden), getest en uitgerold; verwijs naar de tooling die het afdwingt.
2. **Automatiseer de controles**: dependency-scanning, secret-scanning en statische analyse in de CI-pipeline maken de richtlijn zelfhandhavend.
3. **Borg de menselijke kant**: code review als vaste stap (geen merge zonder tweede paar ogen) en periodieke aandacht voor veilig programmeren in het team (6.3).
4. **Dek de randen**: scripts, macro's, low-code en de uitbestede website horen ook bij "ontwikkeling"; bepaal bewust wat onder het regime valt.

## Waar let de auditor op?

De auditor volgt een recente feature van idee tot productie: waar zaten de beveiligingsmomenten? De pipeline-instellingen en repository-regels zijn het tastbare bewijs. De klassieke bevinding bij kleine teams: een prima gereedschapskist (scans, reviews) die onder deadline-druk structureel wordt overgeslagen, zichtbaar in de merge-historie.
