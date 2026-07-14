---
title: 'Admin-accounts beheren: bescherm de kroonjuwelen'
description: 'Beheerrechten zijn het hoofddoelwit van elke aanvaller. Zo beheer je privileged access volgens ISO 27001, met gescheiden accounts en phishing-bestendige MFA.'
publishDate: 2026-08-16
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['privileged access', 'admin accounts beheren', 'beheerrechten iso 27001', 'pam']
---

Vrijwel elke serieuze cyberaanval draait om één doel: het bemachtigen van beheerrechten. Wie admin is, kan alles. Daarom zijn admin-accounts de kroonjuwelen van je IT-omgeving, en verdienen ze bescherming die verder gaat dan een gewoon account.

## Wat vraagt ISO 27001?

[Annex A-maatregel 8.2](/kennis/iso-27001/annex-a-8-2-speciale-toegangsrechten/) vraagt dat speciale toegangsrechten worden beperkt en beheerd: alleen wie ze functioneel nodig heeft, op naam, gescheiden van het dagelijkse account, met een vervaldatum of periodieke herbeoordeling, en extra sterke authenticatie.

## De belangrijkste maatregel: scheid de accounts

Wie de hele dag met beheerrechten werkt, geeft elke [phishingmail](/kennis/iso-27001/wat-is-phishing/) en elk malware-incident meteen de hoogste rechten. Een gescheiden admin-account, alleen gebruikt voor beheertaken en zonder mailbox, beperkt de schade van een gecompromitteerd dagelijks account drastisch.

| Slecht | Goed |
|---|---|
| Één account voor werk én beheer | Apart admin-account naast dagelijks account |
| Zeven globale admins | Zo min mogelijk, met smalle rollen |
| Wachtwoord op admin-account | Phishing-bestendige MFA |
| Beheerrechten van oud-partner nog actief | Periodieke herbeoordeling |

## De vier regels

1. **Minimaliseer en verklein:** zo min mogelijk mensen, met zo smal mogelijke rollen (rolgebaseerde admin in plaats van globaal admin).
2. **Versterk de authenticatie:** [phishing-bestendige MFA](/kennis/iso-27001/wat-is-een-passkey/) op alle beheeraccounts, zonder uitzondering.
3. **Registreer en beoordeel:** een actueel overzicht van wie welke speciale rechten heeft, met het gebruik [gelogd](/kennis/iso-27001/annex-a-8-15-logging/).
4. **Beheers noodtoegang** via een break-glass-procedure.

> **Tip van Control One:** De auditor vraagt de lijst met beheerrechten en telt: zeven globale admins op vijfentwintig medewerkers vertelt het verhaal al. Dagelijks werken onder adminrechten is de klassieke bevinding, en gelukkig ook de makkelijkst op te lossen: maak aparte admin-accounts aan.

## Vergeet de leveranciers niet

Beheerrechten van je IT-partner tellen ook mee. De toegang van een [managed service provider](/kennis/iso-27001/annex-a-5-21-ict-toeleveringsketen/) tot jouw omgeving is het kroonjuweel onder de kroonjuwelen: als de MSP wordt gecompromitteerd, ligt jouw omgeving open. Beperk, log en beoordeel ook die toegang.

Privileged access is een van de zwaarst wegende controlegebieden in elke audit. Wil je weten of jouw beheerrechten op orde zijn? Doe de [Quickscan](/quickscan) of bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/).
