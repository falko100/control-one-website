---
title: "Wat is zero trust?"
description: "Zero trust is het beveiligingsprincipe 'nooit vertrouwen, altijd verifiëren': geen impliciet vertrouwen op basis van netwerklocatie. De principes en de MKB-vertaling."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Zero trust is een beveiligingsmodel dat impliciet vertrouwen afschaft: niet langer 'binnen het kantoornetwerk is veilig', maar elke toegang expliciet verifiëren op identiteit, apparaat en context, met minimale rechten en de aanname dat een aanvaller al binnen kan zijn. Voor het MKB is zero trust geen product maar een richting: sterke identiteit met MFA en conditional access, beheerde en gezonde apparaten als toegangsvoorwaarde, least privilege, segmentatie en doorlopende monitoring."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["zero trust", "never trust always verify", "conditional access", "beveiligingsmodel"]
gerelateerd: ["wat-is-mfa", "annex-a-8-5-veilige-authenticatie", "annex-a-8-22-netwerksegmentatie"]
faq:
  - vraag: "Is zero trust een product dat je kunt kopen?"
    antwoord: "Nee, het is een architectuurprincipe; leveranciers verkopen bouwstenen (identiteitsplatforms, conditional access, ZTNA als VPN-vervanger, EDR), geen 'zero trust in een doos'. Wantrouw aanbiedingen die het als één aanschaf presenteren; de kern is hoe je identiteit, apparaten en toegang inricht."
  - vraag: "Vervangt zero trust de VPN?"
    antwoord: "Vaak wel op termijn: ZTNA-oplossingen (Zero Trust Network Access) geven toegang per applicatie op basis van identiteit en apparaatstatus, in plaats van de brede netwerktoegang die een klassieke VPN geeft. Voor cloud-first MKB-omgevingen is de praktische route: SSO met MFA en conditional access voor SaaS, en ZTNA of een strak geconfigureerde VPN alleen voor het restje interne systemen."
---

Zero trust is het beveiligingsmodel dat de oude burcht-gedachte vervangt. Klassiek gold: wie binnen de muren is (het kantoornetwerk, de VPN), wordt vertrouwd. Dat model is dood: de data staat in de cloud, de mensen werken overal, en aanvallers die één keer binnenkomen bewegen in het oude model vrij rond.

## De kernprincipes

1. **Verifieer expliciet**: elke toegangsvraag wordt beoordeeld op wie (identiteit, sterk geverifieerd met MFA), waarmee (is het apparaat beheerd, versleuteld en gezond?) en in welke context (locatie, tijdstip, risicosignalen), niet op netwerklocatie.
2. **Least privilege**: minimale rechten, per applicatie en per sessie; brede netwerktoegang wordt toegang tot precies de dienst die nodig is.
3. **Ga uit van een inbraak** (assume breach): ontwerp alsof de aanvaller al binnen is: segmenteer, beperk de bewegingsruimte, log en monitor doorlopend, en maak detectie en respons net zo belangrijk als preventie.

## De MKB-vertaling

Zero trust klinkt als enterprise-architectuur, maar de bouwstenen zijn voor het MKB direct beschikbaar en grotendeels aanwezig in de bestaande licenties:

- **Identiteit als fundament**: één identiteitsprovider met SSO, MFA overal, en conditional-access-regels (geen toegang vanaf onbeheerde apparaten of onverwachte locaties naar gevoelige systemen).
- **Apparaatstatus als voorwaarde**: MDM-beheer met versleuteling en updates als toegangseis (Annex A 8.1).
- **Toegang per applicatie**: SaaS via SSO, interne systemen via ZTNA of strak beperkte VPN; geen platte netwerktoegang meer.
- **Segmentatie en monitoring**: het netwerk in compartimenten (8.22) en de detectie aan (8.16).

## De relatie met ISO 27001

Zero trust en ISO 27001 zijn geen concurrenten maar lagen: de norm eist wát (toegangsbeleid, authenticatie passend bij risico, segmentatie, monitoring), zero trust is een modern antwoord op hóe. Wie zijn Annex A-maatregelen 5.15 tot en met 5.18, 8.1, 8.5, 8.16 en 8.22 langs zero-trust-lijnen invult, heeft een toekomstvaste architectuur én een sterk auditverhaal.
