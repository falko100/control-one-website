---
title: "Wat is shadow IT?"
description: "Shadow IT is alle software en dienstverlening die buiten het zicht van de organisatie om wordt gebruikt: van privé-Dropbox tot AI-tools. Risico's en de aanpak die werkt."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Shadow IT is het gebruik van applicaties, clouddiensten en apparaten zonder medeweten of goedkeuring van de organisatie: het team dat 'even' een gratis tool aanschaft, bestanden via privé-accounts deelt of bedrijfsdata in een AI-chatbot plakt. De risico's: data buiten elke beveiliging en back-up, geen verwerkersovereenkomst, en accounts die bij vertrek niemand intrekt. De werkende aanpak is niet verbieden maar kanaliseren: een makkelijk aanvraagproces, goede goedgekeurde alternatieven en periodiek opsporen."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["shadow it", "schaduw-it", "ongeautoriseerde software", "saas-wildgroei"]
gerelateerd: ["annex-a-5-9-inventarisatie-van-bedrijfsmiddelen", "annex-a-8-19-installatie-van-software", "annex-a-5-23-clouddiensten"]
faq:
  - vraag: "Hoe spoor je shadow IT op?"
    antwoord: "Vier bronnen: de creditcard- en declaratieadministratie (abonnementen), de SSO- en mailomgeving (OAuth-toestemmingen en registratiemails aan bedrijfsadressen), DNS- of firewall-logs (welke diensten worden benaderd), en simpelweg vragen in teamoverleggen, zonder afrekencultuur. Een jaarlijkse ronde langs deze vier vangt het meeste."
  - vraag: "Waarom ontstaat shadow IT?"
    antwoord: "Omdat mensen hun werk willen doen en de officiële weg te traag, te streng of onbekend is. Shadow IT is daarmee vooral een signaal: elk schaduw-abonnement wijst op een behoefte die het officiële aanbod niet dekt. Wie alleen verbiedt zonder de behoefte op te lossen, drijft het gebruik verder ondergronds."
---

Shadow IT is alles wat er digitaal gebeurt buiten het zicht van de organisatie: de projectmanagementtool die een team zelf aanschafte, de privé-Dropbox waar de offertes in staan, de gratis PDF-converter waar contracten doorheen gaan, en tegenwoordig vooral: bedrijfsinformatie in niet-goedgekeurde AI-tools.

## Waarom het een risico is

De data in schaduwdiensten valt buiten alles wat het ISMS regelt: geen toegangsbeheer of MFA-afdwinging, geen back-up, geen verwerkersovereenkomst (een direct AVG-probleem bij persoonsgegevens), geen offboarding (de vertrokken collega heeft nog toegang), en geen zicht bij een incident: je kunt geen datalek melden dat je niet kent. Het assetregister (5.9) en het verwerkingsregister kloppen niet meer, en elke audit-claim over "al onze data" staat op los zand.

## De aanpak die werkt

Verbieden alleen werkt aantoonbaar niet; de combinatie wel:

1. **Maak de officiële weg makkelijk**: een licht aanvraagproces voor nieuwe tooling (de selectiecriteria van 5.23 als korte checklist) met snelle doorlooptijd, en goede goedgekeurde alternatieven voor de veelvoorkomende behoeften: bestandsdeling, notities, AI-assistentie.
2. **Beperk technisch wat te beperken valt**: geen lokale adminrechten (8.19), OAuth-toestemmingen voor onbekende apps beheerd, en waar passend blokkering van bekende risicodiensten.
3. **Spoor periodiek op**: declaraties, SSO-logs en netwerkdata jaarlijks langs (zie FAQ), gevonden diensten beoordelen: legaliseren (netjes onderbrengen met contract en SSO) of uitfaseren met een alternatief.
4. **Houd het veilig om te melden**: wie zelf meldt "wij gebruiken tool X" krijgt hulp, geen reprimande; anders zie je alleen de tweede helft nooit.

Binnen ISO 27001 raakt shadow IT vrijwel alles: het assetregister (5.9), clouddiensten (5.23), software-installatie (8.19) en het gebruiksreglement (5.10). De auditor test het graag met één vraag aan een willekeurig team: "welke tools gebruiken jullie eigenlijk?", en vergelijkt het antwoord met het register.
