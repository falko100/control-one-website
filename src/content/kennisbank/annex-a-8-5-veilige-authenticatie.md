---
title: "Annex A 8.5: Veilige authenticatie"
description: "Maatregel 8.5 van ISO 27001 Annex A eist veilige authenticatietechnologie en -procedures passend bij het risico: MFA, veilige inlogprocedures en sessiebeheer."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.5 eist dat veilige authenticatietechnologie en -procedures zijn geïmplementeerd, passend bij de toegangsbeperkingen en het toegangsbeleid: multifactorauthenticatie waar het risico dat vraagt, inlogprocedures die geen onnodige informatie prijsgeven, bescherming tegen brute force (vertraging, lockout), en sessies die verlopen bij inactiviteit."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.5", "veilige authenticatie", "mfa", "inloggen", "iso 27001"]
gerelateerd: ["annex-a-5-17-authenticatie-informatie", "annex-a-8-2-speciale-toegangsrechten", "annex-a-5-16-identiteitsbeheer"]
faq:
  - vraag: "Wat is het verschil met maatregel 5.17?"
    antwoord: "5.17 gaat over de authenticatie-informatie zelf (wachtwoorden en tokens: uitgifte, beheer, gebruikersplichten); 8.5 over de technologie en procedures van het inloggen: MFA-afdwinging, veilige inlogschermen, brute-force-bescherming en sessiebeheer. Samen dekken ze het hele inlogproces."
  - vraag: "Welke vorm van MFA is het sterkst?"
    antwoord: "Phishingbestendige methoden: hardwaresleutels (FIDO2) en platform-passkeys. Authenticator-apps met nummer-matching zijn een goede middenweg; sms is de zwakste vorm maar nog altijd veel beter dan niets. Kies per risiconiveau: hardwaresleutels of passkeys voor beheerders, apps voor de rest."
---

Annex A-maatregel 8.5 van ISO 27001, "Secure authentication", regelt de technologie van het inloggen zelf: het moment waarop een identiteit toegang wordt verleend, en het favoriete aanvalspunt van vrijwel elke aanvaller.

## Wat eist de maatregel?

Veilige authenticatietechnologie en -procedures, passend bij het toegangsbeleid: sterke authenticatie (MFA) waar de informatie of het risico dat vraagt, inlogprocedures die minimale informatie prijsgeven (geen hints of het account bestaat), bescherming tegen geautomatiseerde aanvallen (lockout of vertraging na mislukte pogingen), logging van inlogpogingen, en sessiebeëindiging na inactiviteit.

## Zo vul je hem in

1. **Dwing MFA centraal af**: via de identiteitsprovider (SSO) voor alle diensten tegelijk; phishingbestendig voor beheerders (8.2), app-gebaseerd voor iedereen; geen uitzonderingen "voor het gemak".
2. **Gebruik moderne inlogbescherming**: de conditional-access-mogelijkheden van de identiteitsprovider: blokkeer verouderde protocollen zonder MFA-ondersteuning, en beperk of monitor inlog vanaf onverwachte locaties.
3. **Configureer sessies bewust**: automatische afmelding of hersessie bij inactiviteit, strakker voor gevoelige applicaties en beheeromgevingen.
4. **Log en signaleer**: mislukte en verdachte inlogpogingen worden gelogd (8.15) en bij patronen onderzocht (5.25).

## Waar let de auditor op?

De auditor toetst de daadwerkelijke afdwinging: het MFA-dekkingsrapport uit de identiteitsprovider, de uitzonderingenlijst en de behandeling van oude protocollen. De klassieke bevindingen: MFA aan voor iedereen behalve drie serviceaccounts en één directeur, en verouderde inlogmethoden die de hele MFA-laag omzeilen.
