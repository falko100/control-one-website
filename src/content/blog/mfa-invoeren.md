---
title: 'Multi-factor authenticatie (MFA) invoeren: zo doet u het'
description: "MFA blokkeert 99% van geautomatiseerde aanvallen. Hoe implementeert u het organisatiebreed?"
publishDate: 2026-06-27
category: 'Cybersecurity'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-cybersecurity.svg'
imageAlt: 'Multi-factor authenticatie (MFA) invoeren — Control One'
keywords:
  - MFA invoeren
  - multi-factor authenticatie organisatie
  - tweestapsverificatie MKB
  - MFA implementatie
draft: false
---

Microsoft analyseerde meer dan 25 miljard authenticatiepogingen en concludeerde: **MFA blokkeert 99,9% van alle geautomatiseerde aanvallen op accounts**. Toch heeft een groot deel van het Nederlandse MKB multi-factor authenticatie nog niet volledig uitgerold. De reden is meestal niet onwil, maar onduidelijkheid over hoe een organisatiebrede implementatie er in de praktijk uitziet.

In dit artikel leert u wat **multi-factor authenticatie** precies is, welke methoden beschikbaar zijn, hoe u de uitrol organiseert en welke valkuilen u moet vermijden.

## Wat is multi-factor authenticatie?

**Multi-factor authenticatie (MFA)** — ook wel tweestapsverificatie of two-factor authentication (2FA) genoemd — vereist dat een gebruiker bij het inloggen minimaal twee van de volgende factoren bewijst:

1. **Iets wat u weet** — wachtwoord, pincode
2. **Iets wat u heeft** — telefoon, hardwaretoken, smartcard
3. **Iets wat u bent** — vingerafdruk, gezichtsherkenning

Zelfs als een aanvaller uw wachtwoord kent, kan hij zonder de tweede factor niet inloggen. Dit maakt MFA een van de meest effectieve beveiligingsmaatregelen die u kunt nemen.

### MFA vs. 2FA: wat is het verschil?

**2FA** is een subset van MFA: het gebruikt precies twee factoren. **MFA** kan twee of meer factoren gebruiken. In de praktijk worden de termen door elkaar gebruikt. Voor de meeste MKB-organisaties is 2FA voldoende.

## Welke MFA-methoden zijn er?

Niet alle MFA-methoden zijn even veilig. Hier een overzicht:

| Methode | Veiligheidsniveau | Gebruiksgemak | Geschikt voor MKB |
|---|---|---|---|
| SMS/tekstbericht | Laag (SIM-swap risico) | Hoog | Beperkt |
| E-mailcode | Laag | Hoog | Beperkt |
| Authenticator-app (TOTP) | Hoog | Gemiddeld | Ja |
| Push-notificatie (bijv. Microsoft Authenticator) | Hoog | Hoog | Ja |
| Hardwaretoken (FIDO2/YubiKey) | Zeer hoog | Gemiddeld | Voor risicovolle rollen |
| Biometrie (vingerafdruk/gezicht) | Hoog | Zeer hoog | Aanvullend |

> **Tip:** Vermijd SMS als primaire MFA-methode voor zakelijke accounts. SIM-swapping — waarbij een aanvaller uw telefoonnummer overneemt — is een reëel risico. Gebruik bij voorkeur een authenticator-app of push-notificaties.

### Authenticator-apps: de beste keuze voor MKB

Apps zoals **Microsoft Authenticator**, **Google Authenticator** of **Authy** genereren een tijdelijke 6-cijferige code (TOTP) die elke 30 seconden verandert. Ze zijn gratis, werken zonder internetverbinding en zijn significant veiliger dan SMS.

Microsoft Authenticator biedt bovendien **number matching** — een extra beschermingslaag waarbij de gebruiker een getal moet bevestigen dat ook op het inlogscherm staat. Dit voorkomt dat medewerkers per ongeluk een frauduleuze MFA-verzoek goedkeuren (MFA fatigue).

## MFA organisatiebreed uitrollen: stap voor stap

Een succesvolle MFA-implementatie vraagt om voorbereiding. Hier is hoe u het aanpakt:

### Stap 1: Inventariseer uw systemen

Breng in kaart welke systemen MFA ondersteunen. Denk aan: Microsoft 365, Google Workspace, VPN, CRM, boekhoudpakket, clouddiensten. De meeste moderne SaaS-platformen ondersteunen MFA via SAML, OAuth of ingebouwde instellingen.

### Stap 2: Prioriteer op basis van risico

Begin met de meest kritieke systemen: e-mail, financiële systemen, toegang op afstand (VPN, RDP). Daarna volgen secundaire systemen. Dit voorkomt overbelasting en geeft snel de grootste risicowinst.

### Stap 3: Kies uw MFA-methode

Voor de meeste MKB-organisaties is een **authenticator-app** de beste keuze. Overweeg hardwaretokens (YubiKey) voor directie, IT-beheerders en medewerkers met toegang tot gevoelige data.

### Stap 4: Communiceer en train medewerkers

Verrassingen werken niet. Kondig de uitrol ruim van tevoren aan, leg uit waarom MFA nodig is en geef medewerkers duidelijke instructies. Stel een helpdesk of aanspreekpunt in voor vragen in de eerste weken.

### Stap 5: Faseer de uitrol

Rol MFA gefaseerd uit — begin met een pilotgroep van 10-15 medewerkers. Los problemen op voordat u organisatiebreed gaat. Dit bespaart u een stroom aan helpdeskvragen op dag één van de volledige uitrol.

### Stap 6: Maak MFA verplicht

Na de pilotfase maakt u MFA **verplicht** — niet optioneel. Gebruik conditional access policies (in Microsoft Entra ID / Azure AD) om inloggen zonder MFA te blokkeren voor zakelijke systemen.

## MFA en ISO 27001

[ISO 27001](/iso-27001) vereist in Annex A.9 dat organisaties toegang tot systemen adequaat beveiligen. MFA is daarvoor een directe vereiste voor systemen die gevoelige data verwerken of toegang geven tot kritieke infrastructuur. Tijdens een certificeringsaudit zullen auditoren vragen naar uw authenticatiebeleid en de technische implementatie ervan.

Documenteer uw MFA-beleid — welke systemen vereisen MFA, welke methoden zijn toegestaan, hoe uitzonderingen worden beheerd — in uw informatiebeveiligingsbeleid. Via het Control One platform kunt u dit documenteren en bijhouden wie het beleid heeft gelezen en geaccepteerd. Meer weten? Bekijk de [prijzen](/prijzen).

## Veelvoorkomende valkuilen

**MFA-moeheid (MFA fatigue):** Aanvallers bombarderen een account met MFA-pushverzoeken, in de hoop dat de medewerker er één per ongeluk goedkeurt. Gebruik number matching of FIDO2-tokens om dit te voorkomen.

**Backup-codes niet beveiligd bewaard:** Elke MFA-methode genereert backup-codes voor noodtoegang. Zorg dat medewerkers deze veilig opslaan (in de wachtwoordbeheerder, niet in een onbeveiligd document).

**Uitgesloten service-accounts:** Vergeet niet dat ook service-accounts, API-verbindingen en geautomatiseerde processen een beveiligingsstrategie nodig hebben — ook al is MFA hier niet altijd direct toepasbaar.

**Geen herstelproces:** Wat gebeurt er als een medewerker zijn telefoon kwijtraakt? Documenteer een helder herstelproces dat veilig is maar ook werkbaar.

## FAQ

**Is MFA verplicht onder de AVG of NIS2?**
De AVG verplicht MFA niet expliciet, maar eist wel "passende technische maatregelen". MFA is inmiddels de standaard voor zakelijke accounts en wordt door toezichthouders als basisvereiste beschouwd. NIS2, die van toepassing is op middelgrote en grote organisaties in kritieke sectoren, vereist sterke authenticatie nadrukkelijk.

**Wat als een medewerker geen smartphone heeft?**
Gebruik een hardwaretoken (YubiKey of vergelijkbaar) als alternatief. Deze pluggen in via USB en genereren een eenmalige code zonder smartphone.

**Hoe lang duurt een MFA-implementatie voor een MKB van 50 medewerkers?**
Met goede voorbereiding is een uitrol voor 50 medewerkers in 2-4 weken haalbaar. Reken op een week voorbereiding, een week pilot, een week communicatie en een week gefaseerde uitrol. De technische configuratie zelf duurt voor Microsoft 365 doorgaans een halve dag.

---

MFA invoeren is een van de hoogste-rendement beveiligingsinvesteringen die u kunt doen — de impact is enorm, de kosten zijn minimaal. Klaar om ook uw ISO 27001-compliance op orde te brengen? Ontdek hoe Control One u helpt op de [prijzenpagina](/prijzen).
