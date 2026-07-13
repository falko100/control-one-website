---
title: "Annex A 8.28: Veilig programmeren"
description: "Maatregel 8.28 van ISO 27001 Annex A eist toepassing van veilige codeerprincipes: code review, OWASP, afhankelijkhedenbeheer en de omgang met AI-gegenereerde code."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.28, nieuw in de 2022-versie, eist dat principes voor veilig programmeren worden toegepast: vastgestelde codeerstandaarden (denk aan OWASP), code review vóór merge, beheer van afhankelijkheden en bibliotheken (actueel en uit betrouwbare bron), statische analyse en secret-scanning in de pipeline, en bewuste omgang met hergebruikte en AI-gegenereerde code."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.28", "veilig programmeren", "secure coding", "owasp", "iso 27001"]
gerelateerd: ["annex-a-8-25-veilige-ontwikkelcyclus", "annex-a-8-4-toegang-tot-broncode", "annex-a-8-29-beveiligingstesten"]
faq:
  - vraag: "Welke standaarden gebruik je als basis?"
    antwoord: "De OWASP Top 10 en de OWASP-cheatsheets zijn de gangbare referentie voor webapplicaties; taal- en frameworkspecifieke richtlijnen vullen aan. Belangrijker dan de keuze is de verankering: de standaard is onderdeel van de review-criteria en de linter-configuratie, niet een los document."
  - vraag: "Hoe ga je om met AI-gegenereerde code?"
    antwoord: "Zelfde regime als menselijke code, met extra aandacht: review verplicht (AI-code oogt overtuigend maar bevat aantoonbaar vaker subtiele fouten en verouderde patronen), geen geheimen of gevoelige context in prompts naar externe tools, en afhankelijkheden die de AI voorstelt verifiëren vóór gebruik."
---

Annex A-maatregel 8.28 van ISO 27001, "Secure coding", is nieuw in de 2022-versie en brengt de norm naar de regel code: de meeste applicatiekwetsbaarheden zijn programmeerfouten uit bekende categorieën die bekende tegenmaatregelen hebben.

## Wat eist de maatregel?

Principes voor veilig programmeren worden toegepast, over drie fasen: **vooraf** (standaarden vaststellen, dreigingen kennen, tooling inrichten), **tijdens** (veilige patronen, geen geheimen in code, invoervalidatie, foutafhandeling die niets prijsgeeft) en **erna** (updates veilig uitrollen, kwetsbaarheden in eigen code afhandelen, 8.8). Ook externe componenten, bibliotheken en hergebruikte code vallen onder het regime.

## Zo vul je hem in

1. **Kies en veranker een standaard**: OWASP als referentie, vertaald naar review-criteria en linter-regels; zo wordt de standaard afgedwongen in plaats van onthouden.
2. **Automatiseer in de pipeline**: statische analyse, secret-scanning en dependency-scanning bij elke merge; bevindingen boven een drempel blokkeren de release.
3. **Review verplicht**: geen code naar de hoofdbranch zonder tweede paar ogen (8.4), met beveiliging als expliciet review-punt.
4. **Beheer de afhankelijkheden**: bibliotheken uit betrouwbare bron, actueel gehouden, en gemonitord op bekende kwetsbaarheden; de eigen code is vaak het kleinste deel van het aanvalsoppervlak.

## Waar let de auditor op?

De auditor kijkt naar de afdwinging: branch protection, pipeline-checks en een steekproef uit de merge-historie ("deze kritieke dependency-melding, wat is ermee gebeurd?"). De klassieke bevinding: de scanner draait en rapporteert al maanden dezelfde kwetsbaarheden zonder dat iemand ze oppakt.
