---
title: "Een toegangsbeleid opstellen in 5 stappen"
description: "Zo schrijf je een toegangsbeleid dat ISO 27001 (5.15) vraagt: principes, rollenmodel, de levenscyclus van rechten en de reviewcyclus, in enkele pagina's."
norm: "iso-27001"
categorie: "sjablonen"
tldr: "Een toegangsbeleid voor ISO 27001 legt in enkele pagina's vast: de principes (least privilege, need-to-know, functiescheiding), het rollenmodel (standaardprofielen per functie), de levenscyclus (aanvragen met goedkeuring door de eigenaar, aanpassen bij functiewissel, intrekken bij vertrek), de regels voor speciale rechten en gedeelde accounts, en de reviewcyclus. Schrijf het in 5 stappen en houd het kort: de technische afdwinging zit in de systemen, het beleid geeft de regels."
publishDate: 2026-07-17
readTime: "4 min"
keywords: ["toegangsbeleid", "access control policy", "autorisatiebeleid", "iso 27001"]
gerelateerd: ["annex-a-5-15-toegangsbeveiliging", "annex-a-5-18-toegangsrechten", "annex-a-8-2-speciale-toegangsrechten"]
faq:
  - vraag: "Hoe gedetailleerd moet een toegangsbeleid zijn?"
    antwoord: "Twee tot vier pagina's beleid plus een bijlage met het rollenmodel (de autorisatiematrix). Het beleid bevat de regels en verantwoordelijkheden; wélke persoon welke rechten heeft, staat in de systemen en de matrix, niet in het beleid. Zo blijft het document jaren geldig terwijl de matrix meebeweegt."
  - vraag: "Wat is een autorisatiematrix?"
    antwoord: "De tabel die per functie(groep) de standaardtoegang vastlegt: welke systemen, welke rol daarbinnen, en wie de eigenaar is die uitzonderingen goedkeurt. Hij is het hart van het rollenmodel: onboarding wordt 'ken het profiel toe', en de periodieke review wordt 'vergelijk de werkelijkheid met de matrix'."
---

Het toegangsbeleid beantwoordt de vraag die achter de helft van alle beveiligingsincidenten zit: wie mag eigenlijk waarbij, en wie besliste dat? ISO 27001 (maatregel 5.15) eist dat de regels zijn vastgesteld; zo schrijf je een versie die werkt.

## Stap 1: Leg de principes vast

De drie dragende principes in gewone taal: **least privilege** (iedereen krijgt de minimale toegang die de functie vereist; niets "voor het gemak"), **need-to-know** (toegang tot informatie volgt uit de taak, niet uit nieuwsgierigheid of rang) en **functiescheiding** (aanvragen en goedkeuren gescheiden; beheerrechten gescheiden van dagelijks werk). Voeg de uitgangspunten toe: toegang is persoonsgebonden, gedeelde accounts alleen met vastgelegde motivering, en alles herleidbaar.

## Stap 2: Bouw het rollenmodel

Definieer per functiegroep een standaardprofiel in de autorisatiematrix: sales krijgt CRM en de salesomgeving, finance de boekhouding en bank, iedereen de basisset. Benoem per systeem de **eigenaar** die over toegang beslist (5.9). Het model maakt toekennen reproduceerbaar en de review toetsbaar; uitzonderingen op het profiel vragen expliciete goedkeuring van de eigenaar, met registratie.

## Stap 3: Beschrijf de levenscyclus

De vier momenten: **instroom** (profiel toekennen bij indiensttreding, pas na getekende afspraken), **wijziging** (bij functiewissel: oude rechten intrekken, niet alleen nieuwe toevoegen), **uitstroom** (blokkeren op de laatste werkdag, gekoppeld aan de offboarding-checklist) en **uitzonderingen** (tijdelijke rechten met einddatum). Verwijs naar de systemen waar dit gebeurt (identiteitsprovider, ticketsysteem) in plaats van formulieren te verzinnen.

## Stap 4: Regel de bijzondere categorieën

Drie paragrafen: **speciale rechten** (aparte admin-accounts, phishingbestendige MFA, kwartaalreview; zie 8.2), **gedeelde en serviceaccounts** (alleen met motivering, in de wachtwoordmanager, met eigenaar) en **externen** (leveranciers en inhuur: tijdelijk, minimaal, gelogd, gekoppeld aan de contractafspraken van 5.20).

## Stap 5: Veranker de review

De periodieke toegangsreview (5.18): minimaal jaarlijks alle systemen, per kwartaal de kritische systemen en beheerrechten, uitgevoerd door de eigenaar, met registratie en directe opschoning. Sluit af met de beleidsparagrafen: naleving (afwijkingen zijn incidenten), eigenaarschap van het beleid en de jaarlijkse review.

De valkuil is het beleid dat strenger is dan de praktijk kan waarmaken: beloof geen kwartaalreviews die je niet gaat doen, want elke belofte is een auditcriterium. In de Control One-portal ligt een Nederlands sjabloon klaar, gekoppeld aan de maatregelen 5.15 tot en met 5.18.
