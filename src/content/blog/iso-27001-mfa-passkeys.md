---
title: 'Van MFA naar phishing-bestendige MFA en passkeys'
description: 'Niet alle MFA is gelijk. Zo maak je de stap van sms-codes naar phishing-bestendige authenticatie met passkeys, de sterkste bescherming die er is.'
publishDate: 2026-08-18
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['phishing bestendige mfa', 'passkeys', 'mfa moeheid', 'sterke authenticatie']
---

[Multifactorauthenticatie](/kennis/iso-27001/wat-is-mfa/) is de meest kosteneffectieve beveiligingsmaatregel die er is. Maar niet alle MFA is gelijk, en moderne aanvallers hebben manieren gevonden om de zwakkere varianten te omzeilen. De volgende stap is phishing-bestendige authenticatie, en die is inmiddels binnen handbereik van elk MKB.

## De MFA-vormen, van zwak naar sterk

| Vorm | Sterkte | Kwetsbaarheid |
|---|---|---|
| Sms-codes | Zwakst | Sim-swapping, doorspelen |
| Authenticator-app (code) | Degelijk | Phishing van de code |
| App met nummer-matching | Goed | MFA-moeheid grotendeels opgelost |
| [Passkeys](/kennis/iso-27001/wat-is-een-passkey/) / hardwaresleutels | Sterkst | Phishing-bestendig |

## Het probleem: MFA-moeheid en real-time phishing

Twee aanvalstechnieken omzeilen zwakke MFA. **MFA-moeheid:** de aanvaller spamt push-meldingen tot iemand op accepteren drukt (nummer-matching lost dit op). **Real-time phishing:** een nepsite sluist je hele sessie live door, inclusief de MFA-code. Tegen dat laatste helpen codes en push níet; passkeys wél.

## Waarom passkeys phishing-bestendig zijn

Een passkey is cryptografisch gebonden aan het echte domein. Een nepsite krijgt simpelweg geen geldige aanmelding, en ook de gebruiker die erin trapt, kan niets afstaan. Er valt niets te phishen, niets te raden, en bij de dienst niets te lekken.

## De praktische route

1. **Begin bij de beheerders.** [Admin-accounts](/kennis/iso-27001/annex-a-8-2-speciale-toegangsrechten/) verdienen de sterkste bescherming; Annex A vraagt daar toch al phishing-bestendige authenticatie.
2. **Stel passkeys beschikbaar** via je identiteitsprovider.
3. **Fase wachtwoord-plus-app geleidelijk uit** als terugvaloptie.
4. **Let op het herstelproces.** Waar de passkey niet meer te phishen is, richten aanvallers zich op de reset-route. Die verdient dezelfde strengheid.

> **Tip van Control One:** In de audit is "beheerders werken met passkeys of hardwaresleutels" het antwoord dat elke vervolgvraag over [veilige authenticatie](/kennis/iso-27001/annex-a-8-5-veilige-authenticatie/) overbodig maakt. Het is bovendien gebruiksvriendelijker: geen codes overtypen, alleen een vingerafdruk of gezicht.

## De verzekeraar kijkt mee

Cyberverzekeraars stellen MFA inmiddels standaard als polisvoorwaarde. Phishing-bestendige MFA op je gevoelige accounts is niet alleen goede beveiliging, maar ook een sterk argument bij je [cyberverzekering](/kennis/iso-27001/wat-is-een-cyberverzekering/).

Sterke authenticatie is de goedkoopste grote stap in beveiliging. Wil je weten waar jouw authenticatie staat? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
