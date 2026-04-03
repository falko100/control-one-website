---
title: 'Toegangsbeheer onder ISO 27001: praktische aanpak'
description: "Toegangsbeheer is de meest aangevallen beveiligingslaag. Zo voldoet u aan Annex A controls 5.15–5.18."
publishDate: 2026-04-12
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'Toegangsbeheer onder ISO 27001: praktische aanpak — Control One'
keywords:
  - 'ISO 27001 toegangsbeheer'
  - 'access control ISMS'
  - 'identity management ISO 27001'
  - 'Annex A 5.15'
draft: false
---

Meer dan 80 procent van alle datalekken heeft een misbruikt, gestolen of zwak credential als uitgangspunt. **Toegangsbeheer** is daarmee niet alleen de meest aangevallen beveiligingslaag, maar ook de laag waar u de meeste impact maakt met gerichte maatregelen. ISO 27001 besteedt in Bijlage A specifiek aandacht aan toegangsbeheer via de controls 5.15 tot en met 5.18. Dit artikel legt uit wat die controls vereisen en hoe u ze praktisch implementeert in een MKB-omgeving.

## Wat verstaat ISO 27001 onder toegangsbeheer?

ISO 27001 hanteert een brede definitie van toegangsbeheer. Het gaat niet alleen om wie op welk systeem mag inloggen, maar om het gehele proces van het vaststellen, verlenen, bewaken en intrekken van toegangsrechten tot informatie en systemen.

De vier relevante controls uit Bijlage A zijn:

- **Control 5.15 – Toegangsbeheer**: het beleid dat bepaalt welke principes u hanteert bij het verlenen van toegang
- **Control 5.16 – Identiteitsbeheer**: het beheren van de identiteiten van gebruikers gedurende hun gehele levenscyclus in de organisatie
- **Control 5.17 – Authenticatiegegevens**: het beleid rondom wachtwoorden, tokens en andere authenticatiemiddelen
- **Control 5.18 – Toegangsrechten**: het formele proces van aanvragen, verlenen, wijzigen en intrekken van specifieke toegangsrechten

Deze vier controls vormen samen een samenhangend geheel. Zwakheid in één onderdeel ondermijnt de andere.

## Het principe van minimale toegang

De kern van goed toegangsbeheer is het **principe van minimale toegang** (least privilege). Medewerkers krijgen uitsluitend toegang tot de systemen en gegevens die zij nodig hebben voor hun functie — niet meer.

In de praktijk is dit principe bij veel MKB-organisaties niet geïmplementeerd. Medewerkers die jarenlang actief zijn, stapelen rechten op. Iemand die ooit tijdelijk projectadministratie deed, heeft nog steeds toegang tot de financiële administratie. Iemand die vier jaar geleden in dienst trad en alle systemen nodig had voor zijn inwerkperiode, heeft die rechten nooit laten intrekken.

Een toegangsrechtenoverzicht — ook wel **access matrix** of rechtenmatrix genoemd — helpt u inzichtelijk te maken wie toegang heeft tot welke systemen en of dat nog klopt met de huidige functie.

| Systeem | Directie | Sales | Finance | IT | Medewerker |
|---|---|---|---|---|---|
| CRM | Lezen | Volledig | Lezen | Beheer | Geen |
| Financiële administratie | Lezen | Geen | Volledig | Beheer | Geen |
| HR-systeem | Volledig | Geen | Lezen | Beheer | Eigen gegevens |
| Productieomgeving | Geen | Geen | Geen | Volledig | Geen |
| E-mail | Volledig | Volledig | Volledig | Volledig | Volledig |

Maak een dergelijke matrix voor uw eigen organisatie en controleer elk kwartaal of de toegangen nog kloppen.

## Identiteitsbeheer: van onboarding tot offboarding

Control 5.16 richt zich op de volledige levenscyclus van gebruikersidentiteiten. In de praktijk zijn er twee momenten waarop het meest misgaat: bij de start en bij het vertrek van een medewerker.

**Onboarding.** Stel een standaardprocedure op die bepaalt welke accounts en toegangsrechten een nieuwe medewerker krijgt op basis van zijn of haar functie. Koppel dit aan een functieprofiel zodat het consistent is en niet afhankelijk van wie de aanvraag verwerkt.

**Offboarding.** Wanneer een medewerker de organisatie verlaat, moeten alle accounts op de dag van vertrek worden uitgeschakeld — niet de week erna. Dit geldt ook voor accounts bij externe diensten (Office 365, Slack, CRM, cloudopslag) die buiten uw eigen netwerk vallen. Stel een offboardingchecklist op die dit afdwingt.

> **Tip:** Koppel uw identity management aan uw HR-systeem. Wanneer iemand uit dienst wordt gemeld in HR, triggert dat automatisch een offboardingtaak in het ISMS-platform. Dit voorkomt dat accounts maanden na vertrek nog actief zijn.

## Authenticatie: verder dan alleen wachtwoorden

Control 5.17 gaat over authenticatiegegevens. De norm verwacht dat u een beleid heeft voor sterke authenticatie. De minimale vereisten voor een ISO 27001-compliant wachtwoordbeleid zijn:

- Minimale wachtwoordlengte (aanbevolen: 12 tekens of meer)
- Verbod op hergebruik van recente wachtwoorden
- Geen standaardwachtwoorden bij inrichting van systemen
- Verplichting tot wachtwoordwijziging bij vermoeden van compromittering

Naast wachtwoorden verwacht ISO 27001 dat u **multifactorauthenticatie** (MFA) toepast op alle systemen die toegang bieden tot gevoelige informatie of die op afstand bereikbaar zijn. Voor cloudgebaseerde omgevingen — zoals Microsoft 365, Google Workspace of AWS — is MFA inmiddels de standaard.

Een praktische aanvulling is het gebruik van een **wachtwoordmanager** voor de organisatie. Dit verlaagt de drempel voor medewerkers om sterke, unieke wachtwoorden te gebruiken, en vermindert het risico van wachtwoordhergebruik drastisch.

## Toegangsrechtenbeheer: het formele proces

Control 5.18 vereist een gedocumenteerd proces voor het aanvragen en verlenen van toegangsrechten. In de praktijk betekent dit:

1. Een aanvraagformulier (digitaal of schriftelijk) waarop de gevraagde toegang en de zakelijke reden zijn vermeld
2. Goedkeuring door een verantwoordelijke manager of systeemeigenaar
3. Uitvoering van de wijziging door IT
4. Registratie van de verleende rechten in een toegangsregister
5. Periodieke review (minimaal jaarlijks) van alle verleende rechten

Dit klinkt formeler dan de meeste kleine organisaties gewend zijn. Maar het hoeft geen bureaucratisch proces te zijn: een eenvoudige workflow in een ISMS-platform of zelfs een goedgekeurde e-mail met registratie in een spreadsheet volstaat voor veel MKB-omgevingen, zolang het consistent wordt toegepast.

## Veelgestelde vragen

**Is single sign-on (SSO) toegestaan onder ISO 27001?**
Ja, SSO is niet alleen toegestaan maar wordt aangemoedigd vanuit beveiligingsperspectief. SSO gecombineerd met MFA op het centrale identiteitsplatform biedt een sterke en beheersbare authenticatieoplossing. Zorg wel dat uw SSO-omgeving zelf adequaat beveiligd is, inclusief monitoring op verdachte inlogpogingen.

**Hoe vaak moet ik toegangsrechten reviewen?**
ISO 27001 schrijft geen specifieke frequentie voor, maar de norm verwacht dat u rechten periodiek beoordeelt en aanpast aan wijzigingen in functie of dienstverband. Een jaarlijkse review is minimaal; voor gevoelige systemen (financieel, HR, productie) is een halfjaarlijkse of kwartaalreview verstandiger.

**Moet ik privileged accounts (beheerdersaccounts) apart beheren?**
Ja. ISO 27001 verwacht dat u beheerdersaccounts (accounts met verhoogde rechten) apart registreert en beheert. Beheerdersaccounts mogen alleen worden gebruikt voor beheertaken en niet voor dagelijks gebruik zoals e-mail of browsen. Richtlijn: elke beheerder heeft een persoonlijk standaardaccount en een apart beheerdersaccount.

---

Klaar om te starten? [Control One](/prijzen) begeleidt u door het volledige implementatieproces.
