---
title: "Verklaring van Toepasselijkheid opstellen: zo doe je dat"
description: "De Verklaring van Toepasselijkheid (VvT) is het kerndocument van ISO 27001: per Annex A-maatregel leg je vast of hij van toepassing is en waarom. Stappenplan voor een auditklare VvT."
norm: "iso-27001"
categorie: "sjablonen"
tldr: "De Verklaring van Toepasselijkheid (VvT, Engels: Statement of Applicability) is een verplicht ISO 27001-document waarin je per Annex A-maatregel vastlegt of hij van toepassing is, waarom, en wat de implementatiestatus is. Je stelt de VvT op vanuit je risicoanalyse: elke gekozen maatregel moet herleidbaar zijn tot een risico, en elke uitsluiting moet onderbouwd zijn."
publishDate: 2026-07-13
readTime: "6 min"
keywords: ["verklaring van toepasselijkheid", "vvt", "statement of applicability", "soa", "annex a"]
gerelateerd: ["risicoanalyse-uitvoeren", "annex-a-5-1-beleid-voor-informatiebeveiliging", "wat-is-iso-27001"]
faq:
  - vraag: "Mag je Annex A-maatregelen uitsluiten?"
    antwoord: "Ja, mits onderbouwd. Als een maatregel niet relevant is voor jouw organisatie (bijvoorbeeld omdat een activiteit niet voorkomt), leg je uit waarom. De auditor toetst of de redenering klopt."
  - vraag: "Hoe vaak moet de VvT worden bijgewerkt?"
    antwoord: "Bij elke wijziging in de risicoanalyse of de maatregelen, en minimaal bij de jaarlijkse beoordelingscyclus. Een verouderde VvT is een klassieke auditbevinding."
  - vraag: "Is er een verplicht format voor de VvT?"
    antwoord: "Nee. Gebruikelijk is een tabel met per maatregel: van toepassing ja/nee, onderbouwing, implementatiestatus en verwijzing naar documentatie. Een export als PDF voor de auditor is voldoende."
---

De Verklaring van Toepasselijkheid (VvT) is het kerndocument van ISO 27001. Je legt er per Annex A-maatregel in vast of de maatregel van toepassing is op jouw organisatie, waarom wel of niet, en wat de implementatiestatus is. De VvT verbindt je risicoanalyse met je maatregelen en is bij elke certificeringsaudit het eerste document dat de auditor opvraagt.

## Wat moet er per maatregel in staan?

Voor elk van de 93 maatregelen uit Annex A noteer je:

1. **Van toepassing: ja of nee**
2. **Onderbouwing**: bij toepassing verwijs je naar het risico of de verplichting waaruit de maatregel volgt; bij uitsluiting leg je uit waarom de maatregel niet relevant is
3. **Implementatiestatus**: geïmplementeerd, deels, of gepland
4. **Verwijzing**: waar de maatregel is uitgewerkt (beleid, procedure of systeem)

## Stappenplan

1. **Begin bij je risicoanalyse.** Elke maatregel die je in het behandelplan hebt gekozen, komt als "van toepassing" in de VvT.
2. **Loop daarna alle 93 maatregelen langs.** Ook maatregelen die niet uit een risico volgen kunnen van toepassing zijn, bijvoorbeeld door wetgeving of contractuele eisen.
3. **Onderbouw elke uitsluiting.** "Niet relevant" is niet genoeg; schrijf op waarom, bijvoorbeeld: "wij ontwikkelen geen software, dus maatregelen over veilig ontwikkelen zijn niet van toepassing".
4. **Vul de status eerlijk in.** "Gepland" is een acceptabele status, zolang er een actie met deadline aan hangt.
5. **Houd de VvT actueel.** Werk hem bij wanneer de risicoanalyse verandert en bij de jaarlijkse cyclus.

## Waar letten auditors op?

De auditor controleert de consistentie tussen drie documenten: risicoanalyse, behandelplan en VvT. Een maatregel die in het behandelplan staat maar in de VvT als "niet van toepassing" is gemarkeerd, is een directe bevinding. Ook toetst de auditor steekproefsgewijs of de status klopt: staat een maatregel op "geïmplementeerd", dan moet het bewijs er zijn.
