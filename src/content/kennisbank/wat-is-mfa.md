---
title: "Wat is MFA (multifactorauthenticatie)?"
description: "MFA is inloggen met twee of meer bewijzen: iets dat je weet, hebt of bent. Waarom het de belangrijkste beveiligingsmaatregel is en welke vorm je kiest."
norm: "iso-27001"
categorie: "begrippen"
tldr: "MFA (multifactorauthenticatie) is inloggen met minimaal twee verschillende soorten bewijs: iets dat je weet (wachtwoord), iets dat je hebt (telefoon, hardwaresleutel) of iets dat je bent (vingerafdruk). Het maakt gestolen wachtwoorden grotendeels waardeloos en is daarmee de meest kosteneffectieve beveiligingsmaatregel die bestaat. De sterkste vormen zijn phishingbestendig: passkeys en FIDO2-hardwaresleutels; sms is de zwakste maar nog altijd veel beter dan niets."
publishDate: 2026-07-15
readTime: "3 min"
keywords: ["mfa", "multifactorauthenticatie", "tweestapsverificatie", "passkeys", "2fa"]
gerelateerd: ["annex-a-8-5-veilige-authenticatie", "annex-a-5-17-authenticatie-informatie", "wat-is-phishing"]
faq:
  - vraag: "Is MFA verplicht voor ISO 27001?"
    antwoord: "Niet letterlijk: de norm eist authenticatie passend bij het risico (maatregel 8.5 en 5.17). In de praktijk beschouwen auditors MFA op extern bereikbare systemen (e-mail, VPN, cloudbeheer) als de ondergrens; het ontbreken ervan wordt vrijwel zeker een bevinding. Ook cyberverzekeraars stellen MFA inmiddels standaard als polisvoorwaarde."
  - vraag: "Wat is het verschil tussen 2FA en MFA?"
    antwoord: "2FA (tweefactorauthenticatie) is MFA met precies twee factoren; MFA is de overkoepelende term voor twee of meer. In het dagelijks gebruik betekenen ze hetzelfde: niet alleen een wachtwoord, maar ook een tweede, onafhankelijk bewijs."
---

MFA (multifactorauthenticatie) betekent inloggen met minimaal twee verschillende sóórten bewijs: **iets dat je weet** (wachtwoord, pincode), **iets dat je hebt** (telefoon met authenticator-app, hardwaresleutel) en **iets dat je bent** (vingerafdruk, gezichtsherkenning). Twee wachtwoorden zijn dus geen MFA; wachtwoord plus app wel.

## Waarom is het zo effectief?

Vrijwel alle accountovernames beginnen met een gestolen, geraden of gelekt wachtwoord. MFA maakt dat wachtwoord alleen onvoldoende: de aanvaller heeft ook jouw telefoon of sleutel nodig. Onderzoek van grote platforms laat consequent zien dat MFA de overgrote meerderheid van geautomatiseerde accountaanvallen blokkeert. Geen enkele andere maatregel levert zoveel beveiliging voor zo weinig geld en moeite.

## De vormen, van zwak naar sterk

1. **Sms-codes**: beter dan niets, maar kwetsbaar voor sim-swapping en doorspeel-trucs.
2. **Authenticator-apps** (TOTP-codes of push met nummer-matching): de degelijke middenmoot en voor de meeste organisaties de standaard.
3. **Passkeys en FIDO2-hardwaresleutels**: phishingbestendig, want cryptografisch gebonden aan de echte website; een nepsite krijgt simpelweg geen geldige aanmelding. De aanbevolen vorm voor beheerders en gevoelige rollen.

Let op de zwakke plekken eromheen: **MFA-moeheid** (aanvallers spammen push-meldingen tot iemand op accepteren drukt; nummer-matching lost dit op), herstelprocedures die MFA omzeilen, en verouderde protocollen die zonder MFA blijven werken en dus uitgeschakeld moeten worden.

## Praktisch invoeren

Dwing MFA centraal af via de identiteitsprovider (Microsoft Entra, Google Workspace) voor alle gebruikers, zonder uitzonderingen; phishingbestendig voor beheerders (Annex A 8.2). Begin bij alles wat extern bereikbaar is: e-mail, VPN, cloudbeheer en kritische SaaS. De uitrol is in de meeste MKB-omgevingen een kwestie van dagen, en het is met afstand de beste eerste stap van elk beveiligingstraject.
