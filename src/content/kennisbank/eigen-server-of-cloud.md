---
title: "Eigen server of cloud: wat is veiliger?"
description: "On-premise of cloud vanuit beveiligingsoogpunt: waar de risico's echt zitten, wat het voor je ISO 27001-maatregelen betekent en de eerlijke afweging voor het MKB."
norm: "iso-27001"
categorie: "vergelijkingen"
tldr: "Voor vrijwel elk MKB-bedrijf is een grote cloudaanbieder veiliger dan een eigen server: de leverancier levert beveiligingsspecialisten, fysieke beveiliging, redundantie en patching op een niveau dat geen klein bedrijf zelf haalt. Maar de cloud verplaatst de risico's in plaats van ze op te lossen: identiteit (MFA, phishing), configuratiefouten en leveranciersafhankelijkheid worden jouw front. On-premise blijft verdedigbaar bij specifieke eisen (latency, soevereiniteit, legacy), mits je de serverruimte-maatregelen echt waarmaakt."
publishDate: 2026-07-17
readTime: "4 min"
keywords: ["cloud of eigen server", "on-premise vs cloud", "cloud veiligheid", "iso 27001"]
gerelateerd: ["annex-a-5-23-clouddiensten", "wat-is-zero-trust", "annex-a-7-8-plaatsing-en-bescherming-apparatuur"]
faq:
  - vraag: "Is data in de cloud van de leverancier of van jou?"
    antwoord: "Van jou: de leverancier is verwerker of bewerker van jouw data, en de afspraken (verwerkersovereenkomst, datalocatie, exit) horen dat te bevestigen. Het misverstand zit in de verantwoordelijkheid: de leverancier beveiligt het platform, maar jouw configuratie, toegangsbeheer en back-up van eigen data blijven jouw taak (het shared responsibility model van maatregel 5.23)."
  - vraag: "Wat betekent de keuze voor de ISO 27001-audit?"
    antwoord: "De maatregelverdeling verschuift: bij cloud toon je leveranciersbeheersing (5.19 tot en met 5.23), configuratie (8.9) en identiteit (8.5) aan, en steunen de fysieke maatregelen op de certificaten van de leverancier. Bij on-premise moet je de fysieke keten (hoofdstuk 7), patching en redundantie zélf bewijzen, en daar vallen bij kleine serverruimtes de meeste bevindingen."
---

"De cloud is eng, onze eigen server staat tenminste hier" is gevoelsmatig logisch en feitelijk meestal omgekeerd: de vraag is niet wáár de server staat, maar wie hem beter beveiligt, en dat gevecht wint een klein bedrijf zelden van een hyperscaler.

## De eerlijke vergelijking

| | Eigen server | Grote cloudaanbieder |
|---|---|---|
| Fysieke beveiliging | Jouw serverruimte (slot, koeling, brand) | Datacenters met certificering en bewaking |
| Patching en hardening | Jouw discipline, buiten kantooruren | Platform continu gepatcht; jouw workloads blijven jouw taak |
| Redundantie en back-up | Zelf bouwen en testen | Ingebouwd of één vinkje, maar bewust configureren |
| Beveiligingsexpertise | De IT-partner of niemand | Duizenden specialisten, maar niet voor jouw configuratie |
| Grootste risico | Verwaarlozing: verlopen patches, geen test-herstel | Identiteit en configuratie: gephishte accounts, open buckets |
| Afhankelijkheid | Hardware en die ene beheerder | Leverancier: prijs, voorwaarden, exit |

## Waar de risico's echt zitten

De praktijkincidenten vertellen het verhaal: on-premise-omgevingen vallen door ongepatchte systemen, ontbrekende segmentatie en back-ups die nooit zijn getest; cloudomgevingen vallen door gestolen inloggegevens zonder MFA en configuratiefouten (te ruime rechten, publiek gezette opslag). De cloud lost dus de infrastructuurrisico's grotendeels op en maakt identiteit en configuratie het front, en precies daarom verschuift het zwaartepunt van je maatregelen: MFA en conditional access (8.5), veilige baselines (8.9), leveranciersbeheer (5.23) en een eigen back-up van kritische SaaS-data (8.13).

## Wanneer eigen ijzer verdedigbaar blijft

Drie legitieme redenen: harde latency- of machinekoppelingseisen (productieomgevingen), expliciete soevereiniteits- of contracteisen die cloud uitsluiten, en legacy-applicaties die niet kunnen migreren. Kies dan bewust en maak de bijbehorende maatregelen echt af: een afgesloten, gekoelde ruimte (7.8), UPS (7.11), patchdiscipline (8.8), en een gescheiden, geteste back-up. De hybride tussenvorm is voor veel MKB-bedrijven het eindplaatje: de kantoorautomatisering in de cloud, het ene bijzondere systeem lokaal, en één beveiligingsregime (identiteit, monitoring, back-up) over beide.
