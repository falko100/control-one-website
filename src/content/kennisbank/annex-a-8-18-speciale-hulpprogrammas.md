---
title: "Annex A 8.18: Gebruik van speciale hulpprogramma's"
description: "Maatregel 8.18 van ISO 27001 Annex A eist beperking en beheersing van krachtige hulpprogramma's die beveiliging kunnen omzeilen: admin-tools, scripts en systeemutilities."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.18 eist dat het gebruik van hulpprogramma's die systeem- en applicatiebeveiliging kunnen omzeilen (systeemtools, scripts, remote-access- en beheertools) wordt beperkt en strak wordt beheerst: alleen voor geautoriseerde gebruikers, alleen wanneer nodig, met logging van het gebruik en verwijdering van wat niet nodig is."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.18", "hulpprogramma's", "admin-tools", "utilities", "iso 27001"]
gerelateerd: ["annex-a-8-2-speciale-toegangsrechten", "annex-a-8-19-installatie-van-software", "annex-a-8-15-logging"]
faq:
  - vraag: "Welke programma's vallen hieronder?"
    antwoord: "Alles wat normale beveiligingscontroles kan passeren: systeembeheer-tools, PowerShell en andere scripting-omgevingen met verhoogde rechten, remote-access-tools, wachtwoord- en herstelhulpmiddelen, netwerk- en schijftools. Ook de tools die aanvallers graag gebruiken ('living off the land') horen op deze lijst."
  - vraag: "Hoe beheers je dit zonder beheerders te verlammen?"
    antwoord: "Koppel het aan de gescheiden admin-accounts (8.2): de tools werken alleen onder beheerrechten die gewone gebruikers niet hebben, het gebruik wordt gelogd (8.15), en op werkplekken van eindgebruikers zijn de tools geblokkeerd of afwezig. Beheerders behouden hun gereedschap, maar herleidbaar en gescheiden van het dagelijkse werk."
---

Annex A-maatregel 8.18 van ISO 27001, "Use of privileged utility programs", beheerst het gereedschap dat sloten opent: de systeemtools waarmee een beheerder alles kan, en een aanvaller dus ook.

## Wat eist de maatregel?

Het gebruik van hulpprogramma's die in staat kunnen zijn om systeem- en applicatiemaatregelen te omzeilen, wordt beperkt en strak beheerst: identificatie en autorisatie van de gebruikers, scheiding van gewone applicaties, beperking tot het minimum aan personen, logging van het gebruik, en verwijdering of blokkering van onnodige utilities.

## Zo vul je hem in

1. **Inventariseer het gereedschap**: welke beheer-, script- en remote-tools zijn in gebruik, door wie en waarvoor; verwijder of blokkeer wat niet nodig is.
2. **Bind ze aan admin-accounts**: de tools functioneren alleen onder de gescheiden beheerrechten van 8.2; eindgebruikers zonder adminrechten (8.19) kunnen ze niet uitvoeren of installeren.
3. **Beperk scripting op werkplekken**: uitvoeringsbeleid voor scripts en beperkte PowerShell-mogelijkheden voor gewone gebruikers; de EDR (8.7) signaleert misbruikpatronen.
4. **Log en beoordeel**: gebruik van krachtige tools is herleidbaar (8.15) en telt mee in de periodieke beoordeling van beheerrechten.

## Waar let de auditor op?

De auditor vraagt welke remote-access- en beheertools er zijn en wie ze kan gebruiken. De klassieke bevindingen: een oud remote-access-programma dat nog voor iedereen bereikbaar is, script-uitvoering zonder enige beperking op werkplekken, en beheertools waarvan het gebruik nergens wordt gelogd. De koppeling met 8.2 en 8.19 doet hier het meeste werk.
