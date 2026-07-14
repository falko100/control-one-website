---
title: 'Conditional access instellen: toegang op basis van context'
description: 'Niet elke inlog is gelijk. Zo gebruik je conditional access om toegang te beoordelen op identiteit, apparaat en context, de kern van zero trust in de praktijk.'
publishDate: 2026-08-14
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['conditional access', 'voorwaardelijke toegang', 'microsoft 365 beveiliging', 'zero trust praktijk']
---

Een medewerker die vanaf zijn beheerde laptop op kantoor inlogt, is iets heel anders dan een inlog vanaf een onbekend apparaat in een ander werelddeel, ook al gebruiken ze hetzelfde wachtwoord. Conditional access maakt dat onderscheid: het beoordeelt elke toegangsaanvraag op context, en is daarmee de praktische kern van [zero trust](/kennis/iso-27001/wat-is-zero-trust/).

## Wat is conditional access?

Conditional access (voorwaardelijke toegang) is een set beleidsregels in je identiteitsprovider (zoals Microsoft Entra of Google Workspace) die bepalen onder welke omstandigheden toegang wordt verleend, en met welke aanvullende eisen. Het is de moderne invulling van [veilige authenticatie](/kennis/iso-27001/annex-a-8-5-veilige-authenticatie/).

## De signalen die meewegen

- **Wie:** de geverifieerde identiteit, met [MFA](/kennis/iso-27001/wat-is-mfa/)
- **Waarmee:** is het apparaat beheerd, versleuteld en gezond?
- **Waar en wanneer:** locatie, tijdstip, risicosignalen

Op basis daarvan kan het beleid toegang toestaan, blokkeren, of aanvullende verificatie eisen.

## Praktische beleidsregels om mee te starten

1. **MFA verplicht voor iedereen,** overal. De ondergrens.
2. **Blokkeer verouderde protocollen** die MFA omzeilen (legacy authentication).
3. **Vereis een beheerd of compliant apparaat** voor toegang tot gevoelige systemen.
4. **Scherp de eisen aan bij risicosignalen:** onmogelijke reislocaties, onbekende apparaten.
5. **Bescherm beheerders extra:** [phishing-bestendige MFA](/kennis/iso-27001/wat-is-een-passkey/) voor [admin-accounts](/kennis/iso-27001/annex-a-8-2-speciale-toegangsrechten/).

## Begin zonder iedereen buiten te sluiten

| Fase | Aanpak |
|---|---|
| Start | MFA voor iedereen, legacy geblokkeerd |
| Uitbouw | Compliant-device-eis voor gevoelige apps |
| Volwassen | Risicogebaseerde policies, sessiecontrole |

Test nieuwe policies eerst in rapportagemodus of op een pilotgroep, zodat je niemand per ongeluk buitensluit.

> **Tip van Control One:** Conditional access is geen product dat je koopt, maar een architectuur die je inricht met bouwstenen die vaak al in je licentie zitten. Voor cloud-first MKB-organisaties is dit de meest kosteneffectieve stap richting zero trust: SSO met MFA en conditional access voor je SaaS-diensten.

## Waar de auditor op let

De auditor toetst de daadwerkelijke afdwinging: het MFA-dekkingsrapport, de uitzonderingenlijst en de behandeling van oude protocollen. De klassieke bevindingen: MFA aan voor iedereen behalve drie serviceaccounts en één directeur, en verouderde inlogmethoden die de hele MFA-laag omzeilen.

Conditional access is de praktische kant van toegangsbeveiliging. Wil je weten hoe volwassen jouw toegangsbeheer is? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
