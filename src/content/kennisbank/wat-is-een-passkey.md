---
title: "Wat is een passkey?"
description: "Passkeys vervangen wachtwoorden door cryptografische sleutels, ontgrendeld met vingerafdruk of gezicht: phishingbestendig en niet te lekken. Zo werkt de overstap."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een passkey is een wachtwoordvervanger op basis van cryptografische sleutelparen (FIDO2/WebAuthn): de privésleutel blijft op je apparaat en wordt ontgrendeld met biometrie of pincode, de dienst kent alleen de publieke sleutel. Daardoor valt er niets te phishen (de passkey werkt alleen op het echte domein), niets te raden en bij de dienst niets te lekken. Grote platforms ondersteunen passkeys al; voor organisaties zijn ze de logische opvolger van wachtwoord-plus-MFA, te beginnen bij beheerders."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["passkey", "fido2", "webauthn", "wachtwoordloos"]
gerelateerd: ["wat-is-mfa", "annex-a-8-5-veilige-authenticatie", "wat-is-een-wachtwoordmanager"]
faq:
  - vraag: "Wat als je je telefoon met passkeys kwijtraakt?"
    antwoord: "Passkeys synchroniseren binnen je ecosysteem (Apple, Google) of wachtwoordmanager, dus een nieuw apparaat herstelt ze uit de versleutelde back-up. Zorg wel voor een tweede route per kritieke dienst: een hardwaresleutel als reserve of een beheerde herstelprocedure; en behandel het herstelproces zelf als beveiligingskritisch, want daar verplaatst het risico zich naartoe."
  - vraag: "Is een passkey hetzelfde als MFA?"
    antwoord: "Een passkey combineert in één handeling twee factoren: iets dat je hebt (het apparaat met de privésleutel) en iets dat je bent of weet (biometrie of pincode om hem te ontgrendelen). Veel diensten en de gangbare richtlijnen beschouwen een passkey daarom als volwaardige multifactorauthenticatie, en wel de phishingbestendige soort."
---

De passkey is het serieuze einde van het wachtwoord: geen geheim meer dat je moet onthouden, kunt lekken of kunt afstaan aan een phishing-site, maar een cryptografisch sleutelpaar dat alleen werkt waar het hoort.

## Hoe het werkt

Bij het aanmaken van een passkey genereert je apparaat een sleutelpaar: de **publieke sleutel** gaat naar de dienst, de **privésleutel** blijft in de beveiligde chip van je apparaat en synchroniseert versleuteld binnen je ecosysteem of wachtwoordmanager. Inloggen is een cryptografische handdruk: de dienst stuurt een uitdaging, jouw apparaat ondertekent die met de privésleutel na ontgrendeling met vingerafdruk, gezicht of pincode. 

De drie gevolgen: **niets te phishen** (de passkey is gebonden aan het echte domein; een nepsite krijgt simpelweg geen geldige handtekening, en ook de gebruiker die erin trapt kan niets afstaan), **niets te raden of te hergebruiken**, en **niets te lekken bij de dienst** (de publieke sleutel is waardeloos voor een aanvaller).

## Wat dit voor organisaties betekent

De grote platforms (Microsoft, Google, Apple) en steeds meer SaaS-diensten ondersteunen passkeys; hardwaresleutels (YubiKey en verwanten) zijn de FIDO2-variant voor wie de sleutel fysiek los wil. De praktische route: begin bij de **beheerders en gevoelige rollen** (Annex A 8.2 vraagt daar toch al phishingbestendige authenticatie), stel passkeys beschikbaar via de identiteitsprovider, en laat wachtwoord-plus-authenticator-app als terugvaloptie geleidelijk uitfaseren. Let op het herstelproces: waar de passkey niet meer te phishen is, richten aanvallers zich op de reset-route, dus die verdient dezelfde strengheid (identiteitsverificatie, 5.17).

Binnen ISO 27001 zijn passkeys de sterkste invulling van veilige authenticatie (8.5): in de audit is "beheerders werken met passkeys of hardwaresleutels" het antwoord dat elke vervolgvraag overbodig maakt.
