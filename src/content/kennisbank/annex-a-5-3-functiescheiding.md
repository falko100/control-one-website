---
title: "Annex A 5.3: Functiescheiding"
description: "Maatregel 5.3 van ISO 27001 Annex A eist dat conflicterende taken en verantwoordelijkheden gescheiden worden. Uitleg met praktische invulling voor kleine teams."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.3 eist functiescheiding: conflicterende taken en verantwoordelijkheidsgebieden worden gescheiden om fraude, fouten en misbruik te voorkomen. Klassiek voorbeeld: wie een wijziging aanvraagt, keurt hem niet zelf goed. In kleine teams waar volledige scheiding onmogelijk is, zijn compenserende maatregelen zoals vier-ogen-controle en logging toegestaan."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.3", "functiescheiding", "segregation of duties", "iso 27001"]
gerelateerd: ["annex-a-5-2-rollen-en-verantwoordelijkheden", "wat-is-annex-a", "risicoanalyse-uitvoeren"]
faq:
  - vraag: "Hoe pas je functiescheiding toe in een klein team?"
    antwoord: "Volledige scheiding is in het MKB vaak onmogelijk. De norm accepteert compenserende maatregelen: vier-ogen-principe bij kritische handelingen, logging en periodieke controle van die logs door iemand anders, en goedkeuring door de directie bij gevoelige wijzigingen."
  - vraag: "Welke taken moeten typisch gescheiden worden?"
    antwoord: "Aanvragen versus goedkeuren van toegangsrechten, ontwikkelen versus naar productie brengen van code, betalingen invoeren versus autoriseren, en beveiliging uitvoeren versus controleren (wie het ISMS beheert, auditeert niet het eigen werk)."
---

Annex A-maatregel 5.3 van ISO 27001, "Segregation of duties", eist dat conflicterende taken en verantwoordelijkheden worden gescheiden. Het doel: voorkomen dat één persoon ongecontroleerd fouten kan maken of misbruik kan plegen.

## Wat eist de maatregel?

Bepaal welke taken conflicteren wanneer ze bij dezelfde persoon liggen, en scheid ze. De bekende conflictparen: aanvragen en goedkeuren van toegang, ontwikkelen en deployen van software, invoeren en autoriseren van betalingen, uitvoeren en controleren van beveiligingstaken.

## Zo vul je hem in

1. **Inventariseer kritische processen**: waar kan één persoon schade aanrichten zonder dat iemand het merkt? Denk aan toegangsbeheer, wijzigingsbeheer, financiële transacties en back-upbeheer.
2. **Scheid waar het kan**: leg in procedures vast dat goedkeuring door een ander gebeurt dan de aanvraag, en dwing het af in tooling waar mogelijk (workflow-goedkeuring, protected branches, betaallimieten).
3. **Compenseer waar het niet kan**: in kleine teams zijn logging plus periodieke controle door een tweede persoon, het vier-ogen-principe bij kritische acties en steekproefcontroles door de directie geaccepteerde alternatieven. Leg de afweging vast in de risicoanalyse.

## Waar let de auditor op?

De auditor zoekt naar de plekken waar één persoon de hele keten beheerst: de systeembeheerder die zichzelf rechten geeft, de ontwikkelaar die eigen code ongecontroleerd live zet. Kunnen aantonen dat je die situaties kent en bewust hebt gecompenseerd, is bij het MKB belangrijker dan volledige scheiding. Een gedocumenteerde afweging plus werkende compenserende controle overtuigt; ontkennen dat het probleem bestaat niet.
