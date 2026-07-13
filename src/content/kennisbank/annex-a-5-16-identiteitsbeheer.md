---
title: "Annex A 5.16: Identiteitsbeheer"
description: "Maatregel 5.16 van ISO 27001 Annex A eist beheer van de volledige levenscyclus van identiteiten. Persoonlijke accounts, gedeelde accounts en systeemaccounts uitgelegd."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.16 eist beheer van de volledige levenscyclus van identiteiten: elke gebruiker heeft een unieke, tot een persoon herleidbare identiteit; gedeelde accounts zijn alleen toegestaan met expliciete motivering; systeemaccounts hebben een eigenaar; en identiteiten van vertrokken gebruikers worden direct gedeactiveerd. Eén centrale identiteitsbron (SSO) maakt dit beheersbaar."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.16", "identiteitsbeheer", "identity management", "sso", "iso 27001"]
gerelateerd: ["annex-a-5-15-toegangsbeveiliging", "annex-a-5-17-authenticatie-informatie", "annex-a-5-18-toegangsrechten"]
faq:
  - vraag: "Zijn gedeelde accounts verboden?"
    antwoord: "Niet absoluut, maar ze mogen alleen als het echt niet anders kan en moeten expliciet gemotiveerd en geregistreerd zijn, met compenserende maatregelen. Denk aan een gedeelde social-media-login via een wachtwoordmanager met logging van wie er wanneer bij kon."
  - vraag: "Wat zijn systeem- of serviceaccounts en waarom verdienen ze aandacht?"
    antwoord: "Accounts waarmee applicaties en koppelingen draaien, niet gebonden aan een persoon. Ze hebben vaak brede rechten en wachtwoorden die nooit verlopen, waardoor ze geliefd zijn bij aanvallers. Elk serviceaccount hoort een eigenaar, een doel en minimale rechten te hebben."
---

Annex A-maatregel 5.16 van ISO 27001, "Identity management", eist dat de volledige levenscyclus van identiteiten wordt beheerd: aanmaken, wijzigen en verwijderen. Zonder betrouwbare identiteiten is elke andere toegangsmaatregel bouwen op drijfzand.

## Wat eist de maatregel?

Identiteiten moeten uniek en herleidbaar zijn tot één persoon (of één systeem), zodat handelingen toewijsbaar zijn. Gedeelde identiteiten zijn alleen toegestaan bij bedrijfsmatige of operationele noodzaak, met expliciete goedkeuring en registratie. Identiteiten die niet meer nodig zijn, worden direct verwijderd of gedeactiveerd, en er is een controleerbaar spoor van belangrijke gebeurtenissen in de levenscyclus.

## Zo vul je hem in

1. **Centraliseer**: één identiteitsbron (Microsoft Entra ID, Google Workspace) met SSO naar zoveel mogelijk applicaties. Elke applicatie met eigen losse accounts is een extra plek waar offboarding kan mislukken.
2. **Koppel aan in- en uitdienst**: indiensttreding triggert accountcreatie volgens het functieprofiel; vertrek triggert deactivering op de laatste werkdag.
3. **Saneer gedeelde accounts**: inventariseer ze, hef op wat kan, en beheer de rest via een wachtwoordmanager met logging en een vastgelegde motivering.
4. **Registreer systeemaccounts**: per serviceaccount een eigenaar, doel en rechtenniveau; periodiek beoordelen of ze nog nodig zijn.

## Waar let de auditor op?

De auditor vergelijkt de accountlijst met de personeelslijst: accounts van vertrokken medewerkers die nog actief zijn, is de snelst gevonden en meest voorkomende bevinding van dit hele hoofdstuk. Daarnaast: onbeheerde gedeelde accounts ("iedereen kent het wachtwoord van info@") en serviceaccounts waarvan niemand weet waarvoor ze dienen.
