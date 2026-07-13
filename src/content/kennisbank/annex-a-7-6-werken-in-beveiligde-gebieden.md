---
title: "Annex A 7.6: Werken in beveiligde gebieden"
description: "Maatregel 7.6 van ISO 27001 Annex A eist regels voor het werken in beveiligde gebieden zoals serverruimten: wie mag er wat, onder welke voorwaarden en met welk toezicht."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.6 eist beveiligingsmaatregelen voor het werken ín beveiligde gebieden: alleen wie er moet zijn kent het bestaan en krijgt toegang, werkzaamheden (ook door monteurs en schoonmaak) gebeuren onder toezicht of met vastgelegde afspraken, onbeheerd werken wordt vermeden en opname-apparatuur is zonder toestemming niet toegestaan."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.6", "beveiligde gebieden", "serverruimte", "werkzaamheden derden", "iso 27001"]
gerelateerd: ["annex-a-7-2-fysieke-toegang", "annex-a-7-1-fysieke-beveiligingszones", "annex-a-5-19-leveranciersrelaties"]
faq:
  - vraag: "Moet een monteur in de serverruimte altijd begeleid worden?"
    antwoord: "Uitgangspunt is toezicht, tenzij er goede afspraken zijn: een bekend bedrijf met contract en geheimhouding (5.20), aangemelde werkzaamheden en registratie van wie er wanneer was. Een onbekende monteur zonder afspraak hoort nooit alleen in de beperkte zone."
  - vraag: "Hoe zit het met de schoonmaak?"
    antwoord: "De beperkte zone (serverruimte, archief) bij voorkeur uitsluiten van de standaard schoonmaakronde en apart schoonmaken onder toezicht, of accepteer het risico expliciet met compenserende maatregelen zoals een clean desk in die ruimte en logging van de toegang."
---

Annex A-maatregel 7.6 van ISO 27001, "Working in secure areas", regelt wat er gebeurt áchter de deuren van 7.1 en 7.2: ook wie legitiem binnen is, kan bewust of onbewust schade aanrichten.

## Wat eist de maatregel?

Beveiligingsmaatregelen voor het werken in beveiligde gebieden: kennis van het gebied op need-to-know-basis, vermijden van onbeheerd werken (zowel voor veiligheid als tegen misbruik), lege gebieden afgesloten en periodiek gecontroleerd, en geen foto-, video- of andere opnameapparatuur zonder autorisatie.

## Zo vul je hem in

1. **Stel gebiedsregels op**: een korte set regels per beperkte zone: wie mag er zelfstandig in, wat mag er wel en niet (geen opnames, geen etenswaren bij apparatuur, deur altijd dicht), en hoe worden werkzaamheden aangemeld.
2. **Regel derden vooraf**: monteurs, installateurs en schoonmaak werken onder toezicht of onder contractuele afspraken met aanmelding en registratie; koppel dit aan het leveranciersbeheer (5.19).
3. **Registreer werkzaamheden**: een eenvoudige log van wie er wanneer in de beperkte zone werkte en waarvoor, zeker bij derden.
4. **Controleer de lege staat**: afgesloten wanneer er niemand is; neem de beperkte zone mee in de periodieke controlerondes (5.36).

## Waar let de auditor op?

De auditor vraagt hoe de laatste monteurswerkzaamheden in de serverruimte verliepen: aangemeld, begeleid, geregistreerd? De klassieke bevinding is de externe partij met een eigen sleutel die al jaren zelfstandig in en uit loopt zonder dat iemand weet wanneer, gecombineerd met een toegangsregister dat dat niet laat zien.
