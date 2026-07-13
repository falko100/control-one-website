---
title: "Annex A 8.4: Toegang tot broncode"
description: "Maatregel 8.4 van ISO 27001 Annex A eist beheer van lees- en schrijftoegang tot broncode, ontwikkeltools en softwarebibliotheken. Praktisch ingevuld met git-platforms."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.4 eist dat lees- en schrijftoegang tot broncode, ontwikkeltools en softwarebibliotheken passend wordt beheerd: repository-toegang per rol, wijzigingen via een gecontroleerd proces (branch protection, reviews), geen geheimen in de code, en beheersing van wie code naar productie kan brengen. Voor organisaties zonder eigen softwareontwikkeling is deze maatregel meestal niet van toepassing."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.4", "broncode", "source code", "repository", "iso 27001"]
gerelateerd: ["annex-a-8-2-speciale-toegangsrechten", "annex-a-5-15-toegangsbeveiliging", "wat-is-annex-a"]
faq:
  - vraag: "Is deze maatregel van toepassing als we geen software ontwikkelen?"
    antwoord: "Meestal niet; sluit hem dan gemotiveerd uit in de Verklaring van Toepasselijkheid. Let op randgevallen: eigen scripts, macro's, infrastructuur-als-code en low-code-configuraties zijn ook 'broncode' als de organisatie erop draait."
  - vraag: "Wat zijn de basismaatregelen op een git-platform?"
    antwoord: "Toegang per team of rol met MFA, branch protection op de hoofdbranch (verplichte review vóór merge), geen wachtwoorden of API-sleutels in de code (secret scanning aan), en beheer van wie releases naar productie kan uitrollen. GitHub, GitLab en vergelijkbare platforms bieden dit ingebouwd."
---

Annex A-maatregel 8.4 van ISO 27001, "Access to source code", beschermt de kroonjuwelen van softwarebouwende organisaties: wie de code kan wijzigen, kan het product en daarmee alle klanten raken.

## Wat eist de maatregel?

Lees- en schrijftoegang tot broncode, ontwikkeltools en softwarebibliotheken wordt passend beheerd: toegang op basis van noodzaak, schrijftoegang strikter dan leestoegang, wijzigingen via een gecontroleerd proces met logging, en aandacht voor de integriteit van wat er uiteindelijk naar productie gaat.

## Zo vul je hem in

1. **Regel repository-toegang per rol**: ontwikkelaars bij hun eigen projecten, externen tijdelijk en beperkt, iedereen met MFA; toegang ingetrokken bij vertrek (5.18 geldt ook hier).
2. **Bescherm de hoofdbranch**: branch protection met verplichte review vóór merge; niemand pusht direct naar productiecode, ook de lead niet.
3. **Houd geheimen buiten de code**: secret scanning aan, sleutels en wachtwoorden in een geheimenbeheerder in plaats van in de repository.
4. **Beheers de route naar productie**: wie kan deployen is een aparte, kleinere groep; releases zijn herleidbaar tot goedgekeurde wijzigingen (8.32).

## Waar let de auditor op?

Bij softwarebouwers: de instellingen van het git-platform zijn het bewijs. De auditor kijkt naar branch protection, de toegangslijst (staan er vertrokken ontwikkelaars of oud-leveranciers in?) en hoe geheimen worden beheerd. Bij niet-ontwikkelaars: een consistente uitsluiting in de Verklaring van Toepasselijkheid, die niet botst met de aanwezigheid van dat ene bedrijfskritische maatwerkscript.
