---
title: "Wat is een wachtwoordmanager en waarom wil je er een voor het hele team?"
description: "Een wachtwoordmanager genereert en bewaart unieke sterke wachtwoorden achter één hoofdwachtwoord. Waarom hij onmisbaar is en hoe je hem zakelijk uitrolt."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een wachtwoordmanager is een versleutelde kluis die voor elke dienst een uniek, sterk wachtwoord genereert, bewaart en invult, ontgrendeld met één sterk hoofdwachtwoord plus MFA. Het is de enige realistische manier om de eis 'uniek en sterk per dienst' waar te maken, en de zakelijke variant voegt gedeelde kluizen voor teamwachtwoorden, beheer en offboarding toe. Voor ISO 27001 is hij de praktische kern van maatregel 5.17."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["wachtwoordmanager", "password manager", "wachtwoordkluis", "wachtwoordbeleid"]
gerelateerd: ["annex-a-5-17-authenticatie-informatie", "wat-is-mfa", "wat-is-phishing"]
faq:
  - vraag: "Is één hoofdwachtwoord voor alles niet juist riskant?"
    antwoord: "Het is een geconcentreerd risico, maar een veel kleiner dan het alternatief: tientallen hergebruikte zwakke wachtwoorden die bij elk lek van elke dienst op straat liggen. Beheers het restrisico: een lange wachtzin als hoofdwachtwoord, MFA op de kluis zelf, en een aanbieder met zero-knowledge-architectuur (die je kluis zelf niet kan lezen)."
  - vraag: "Wat doe je met gedeelde accounts zoals info@ of social media?"
    antwoord: "Precies daarvoor zijn gedeelde kluizen: het teamwachtwoord staat op één beheerde plek, wie het mag gebruiken zit in de kluisgroep, en bij vertrek van een collega trek je de kluistoegang in en roteer je het wachtwoord. Dat is de nette invulling van de gedeelde-accounts-eis uit Annex A 5.16."
---

Een wachtwoordmanager lost het onmogelijke dilemma van wachtwoorden op: de mens kan geen veertig unieke sterke wachtwoorden onthouden, dus zonder hulpmiddel wordt het hergebruik, en hergebruik betekent dat één gelekt wachtwoord overal past. De kluis onthoudt ze allemaal; jij onthoudt er één.

## Hoe het werkt

De manager genereert per dienst een lang willekeurig wachtwoord, bewaart het versleuteld en vult het automatisch in. De kluis ontgrendel je met een sterk hoofdwachtwoord (een lange wachtzin) plus MFA. Serieuze aanbieders werken zero-knowledge: de versleuteling gebeurt op jouw apparaat, en de aanbieder kan de inhoud zelf niet lezen. Een onderschat voordeel: de autofill werkt alleen op het échte domein, waardoor de manager weigert je wachtwoord in te vullen op een phishing-kloon: gratis phishingbescherming.

## Waarom zakelijk uitrollen

De zakelijke of teamversie voegt toe wat organisaties nodig hebben: **gedeelde kluizen** per team of functie (het social-media-wachtwoord, leveranciersportalen), **beheer** (wie heeft toegang tot welke kluis, afgedwongen MFA, rapportage over zwakke of gelekte wachtwoorden) en **offboarding**: bij vertrek trek je de kluistoegang in en zie je welke gedeelde wachtwoorden geroteerd moeten worden (sluit aan op 5.11 en 5.18). De kosten zijn per gebruiker per maand koffiegeld; er is geen beveiligingsmaatregel met een betere prijs-batenverhouding na MFA.

## De plek binnen ISO 27001

Maatregel 5.17 eist sterke, unieke, geheime authenticatie-informatie; de wachtwoordmanager is daar de enige schaalbare invulling van, en de auditor herkent dat: "iedereen heeft een wachtwoordmanager, uniek per dienst wordt afgedwongen, gedeelde accounts staan in beheerde kluizen" is een sterk antwoord. Waar mogelijk vervang je wachtwoorden bovendien geheel door passkeys; ook die bewaart de moderne manager.
