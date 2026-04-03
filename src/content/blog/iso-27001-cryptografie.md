---
title: 'Cryptografie in ISO 27001: beleid en implementatie'
description: "Encryptie, sleutelbeheer en cryptografisch beleid — wat eist ISO 27001 en hoe implementeert u het?"
publishDate: 2026-04-24
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'Cryptografie in ISO 27001: beleid en implementatie — Control One'
keywords:
  - 'ISO 27001 cryptografie'
  - 'encryptie beleid ISMS'
  - 'sleutelbeheer ISO 27001'
  - 'Annex A 8.24'
draft: false
---

**Cryptografie** is de technologische ruggengraat van moderne informatiebeveiliging. Versleuteling van gegevens, beveiligde communicatieprotocollen, digitale handtekeningen en certificaten: ze zijn allemaal gebaseerd op cryptografische principes. ISO 27001 verplicht organisaties een cryptografisch beleid te hebben via Bijlage A control 8.24. Maar wat betekent dat in de praktijk voor een MKB-organisatie die geen cryptograaf in dienst heeft? Dit artikel geeft u een helder overzicht.

## Wat vereist ISO 27001 op het gebied van cryptografie?

Control 8.24 van Bijlage A stelt dat een organisatie regels moet vaststellen voor het effectieve gebruik van cryptografie, inclusief **sleutelbeheer**. De norm stelt geen technische eisen aan de gebruikte algoritmen of sleutellengtes — dat is bewust, omdat technologie snel verandert. Wat de norm wel vereist:

- Een gedocumenteerd cryptografisch beleid dat bepaalt wanneer en hoe cryptografie wordt toegepast
- Regels voor sleutelbeheer: aanmaak, distributie, opslag, gebruik, archivering en verwijdering van cryptografische sleutels
- Toepassing van cryptografie op basis van de risico's voor de te beschermen informatie

Het gaat dus niet alleen over techniek, maar over beleid: wie beslist wanneer encryptie vereist is, hoe sleutels worden beheerd en wie verantwoordelijk is.

## Wanneer is encryptie vereist?

Een praktische manier om te bepalen wanneer encryptie vereist is, is het koppelen aan de vertrouwelijkheidsclassificatie van informatie. Stel een beleid op dat voor elk classificatieniveau beschrijft welke cryptografische maatregelen gelden.

| Informatieclassificatie | Opslagencryptie | Transportencryptie | Voorbeelden |
|---|---|---|---|
| Openbaar | Niet vereist | Niet vereist | Persberichten, publieke website |
| Intern | Aanbevolen | Vereist (HTTPS) | Interne memo's, handleidingen |
| Vertrouwelijk | Vereist | Vereist | Klantgegevens, contracten, HR-dossiers |
| Strikt vertrouwelijk | Vereist (versterkt) | Vereist | Financiële prognoses, M&A-informatie |

Voor de meeste MKB-organisaties zijn "intern" en "vertrouwelijk" de meest relevante categorieën. Klantgegevens, persoonsgegevens en financiële informatie vallen standaard in de categorie vertrouwelijk en vereisen daarmee encryptie zowel in opslag als in transport.

## Encryptie in de praktijk: wat u minimaal moet regelen

Voor de meeste MKB-organisaties zijn er een beperkt aantal praktische gebieden waarop encryptie direct van toepassing is.

**Encryptie van opgeslagen gegevens (data at rest)**

- Volledige schijfversleuteling op laptops en werkstations (BitLocker op Windows, FileVault op macOS)
- Versleuteling van externe opslagmedia (USB-sticks, externe schijven)
- Versleuteling van gevoelige data in cloudomgevingen (standaard bij professionele cloudproviders, maar controleer de instellingen)
- Databaseencryptie voor applicaties die persoonsgegevens of gevoelige bedrijfsgegevens bevatten

**Encryptie van data in transport (data in transit)**

- HTTPS voor alle webapplicaties en portals (TLS 1.2 of hoger)
- Versleutelde e-mailverbindingen (STARTTLS, S/MIME voor gevoelige berichten)
- VPN voor toegang op afstand tot interne systemen
- Versleutelde verbindingen met cloudopslag en SaaS-applicaties (dit is standaard bij betrouwbare providers)

> **Tip:** Controleer of uw cloudproviders encryptie-at-rest standaard inschakelen of dat het een optie is die u zelf moet activeren. Bij Microsoft 365, Google Workspace en AWS is encryptie-at-rest standaard ingeschakeld. Bij kleinere providers is dit niet altijd het geval.

## Sleutelbeheer: het meest onderschatte onderdeel

Encryptie is alleen zo sterk als het beheer van de sleutels waarmee u versleutelt. Een versleuteld bestand is waardeloos als de sleutel verloren gaat — en een beveiligingslek als de sleutel in de verkeerde handen valt.

ISO 27001 vereist dat u beleid heeft voor de volledige levenscyclus van cryptografische sleutels. In de praktijk betekent dit voor MKB-organisaties:

**Aanmaak.** Gebruik veilige, door de software gegenereerde sleutels in plaats van zelfgekozen wachtwoorden als encryptiesleutel. De meeste moderne versleutelingssoftware doet dit automatisch.

**Opslag.** Bewaar sleutels nooit op dezelfde locatie als de data die ze versleutelen. Gebruik een wachtwoordmanager, een sleutelkluis (key vault) of een beveiligde hardwareopslag voor kritieke sleutels.

**Toegang en distributie.** Beperk wie toegang heeft tot cryptografische sleutels. Documenteer wie welke sleutels beheert.

**Verlenging en vervanging.** Cryptografische sleutels hebben een beperkte levensduur. Stel een beleid op voor de periodieke vernieuwing van sleutels, met name voor PKI-certificaten die een vaste verloopdatum hebben.

**Intrekking en verwijdering.** Wanneer een medewerker de organisatie verlaat of wanneer een sleutel mogelijk gecompromitteerd is, moet u de sleutel kunnen intrekken. Documenteer dit proces.

## Algoritmen en sleutellengtes: welke keuzes zijn veilig?

ISO 27001 schrijft geen specifieke algoritmen voor, maar u bent verantwoordelijk voor het gebruik van cryptografische methoden die als veilig worden beschouwd op het moment van gebruik. De Nederlandse overheid volgt hierin de aanbevelingen van het NCSC en internationale organen zoals NIST.

Veilige keuzes per categorie (stand van zaken 2025–2026):

| Toepassingsgebied | Aanbevolen | Te vermijden |
|---|---|---|
| Symmetrische encryptie | AES-256 | DES, 3DES, RC4 |
| Asymmetrische encryptie | RSA-3072+, ECDSA P-256+ | RSA-1024, MD5 |
| Hashfuncties | SHA-256, SHA-3 | MD5, SHA-1 |
| TLS-protocol | TLS 1.2, TLS 1.3 | SSL 2.0/3.0, TLS 1.0/1.1 |
| Certificaattype | X.509 v3, minimaal SHA-256 | Zelfondertekend in productie |

Maak in uw cryptografisch beleid een keuze voor de algoritmen en sleutellengtes die uw organisatie gebruikt, gebaseerd op de actuele aanbevelingen van het NCSC of een vergelijkbare betrouwbare bron.

## Veelgestelde vragen

**Moet ik een aparte cryptograaf inhuren voor ISO 27001?**
Nee. ISO 27001 vereist cryptografisch beleid en sleutelbeheer, maar de uitvoering hoeft niet door een specialist te worden gedaan. De meeste moderne systemen (besturingssystemen, cloudplatformen, e-mailclients) bieden encryptie aan als ingebouwde functie die met beleid en configuratie kan worden ingeschakeld. Wat u nodig heeft, is iemand die begrijpt wanneer encryptie vereist is en die de systemen correct configureert.

**Geldt het cryptografiebeleid ook voor e-mail?**
Ja, voor gevoelige informatie die per e-mail wordt verzonden. In de praktijk zijn er twee niveaus: transportbeveiliging (TLS, standaard bij de meeste e-mailproviders) en end-to-end versleuteling (S/MIME of PGP). Voor de meeste MKB-organisaties volstaat transportbeveiliging; voor het versturen van strikt vertrouwelijke documenten per e-mail is het verstandig om bestanden afzonderlijk te versleutelen.

**Wat als onze leverancier een zwak cryptografisch protocol gebruikt?**
Dit is een leveranciersrisico dat u moet adresseren in uw leveranciersbeheer (Bijlage A 5.19–5.22). Als een leverancier verouderde protocollen gebruikt (zoals TLS 1.0 of onversleutelde verbindingen), documenteert u dit als risico en vraagt u de leverancier om herstel. Weigert de leverancier dat, dan is dit reden voor een risicobeslissing: accepteer het risico met een mitigerende maatregel, of zoek een alternatieve leverancier.

---

Klaar om te starten? [Control One](/prijzen) begeleidt u door het volledige implementatieproces.
