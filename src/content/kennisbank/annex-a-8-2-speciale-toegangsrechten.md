---
title: "Annex A 8.2: Speciale toegangsrechten"
description: "Maatregel 8.2 van ISO 27001 Annex A eist strikte beperking en beheer van beheerrechten en andere speciale toegangsrechten. Admin-accounts goed geregeld."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.2 eist dat de toewijzing en het gebruik van speciale toegangsrechten (beheerrechten) worden beperkt en beheerd: alleen wie ze functioneel nodig heeft, op naam en gescheiden van het dagelijkse account, met een vervaldatum of periodieke herbeoordeling, extra sterke authenticatie en logging van het gebruik. Beheerrechten zijn het hoofddoelwit van elke aanvaller."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.2", "beheerrechten", "privileged access", "admin-accounts", "iso 27001"]
gerelateerd: ["annex-a-5-15-toegangsbeveiliging", "annex-a-5-18-toegangsrechten", "annex-a-8-5-veilige-authenticatie"]
faq:
  - vraag: "Waarom een apart admin-account naast het gewone account?"
    antwoord: "Wie de hele dag met beheerrechten werkt, geeft elke phishingmail en elk malware-incident meteen de hoogste rechten. Een gescheiden admin-account dat alleen voor beheertaken wordt gebruikt, beperkt de schade van een gecompromitteerd dagelijks account drastisch."
  - vraag: "Hoe vaak moeten speciale rechten worden herbeoordeeld?"
    antwoord: "Vaker dan gewone rechten: gangbaar is per kwartaal of halfjaar. De vraag per account: is dit recht nog functioneel nodig, en kan het smaller (alleen de specifieke rol in plaats van globale admin)? Tijdelijke rechten krijgen bij voorkeur een automatische vervaldatum."
---

Annex A-maatregel 8.2 van ISO 27001, "Privileged access rights", beschermt de kroonjuwelen van elke IT-omgeving: de accounts die alles kunnen. Vrijwel elke serieuze aanval draait om het bemachtigen van precies deze rechten.

## Wat eist de maatregel?

De toewijzing en het gebruik van speciale toegangsrechten worden beperkt en beheerd: toekenning per gebeurtenis op basis van functionele noodzaak (least privilege), op naam herleidbaar, met een autorisatieproces en registratie, een vervaltermijn of periodieke herbeoordeling, sterke(re) authenticatie, en gescheiden van de identiteit voor dagelijks werk.

## Zo vul je hem in

1. **Scheid de accounts**: beheerders krijgen een apart admin-account naast hun gewone account; het admin-account heeft geen mailbox en wordt alleen voor beheertaken gebruikt.
2. **Minimaliseer en verklein**: zo min mogelijk mensen met zo smal mogelijke rollen (rolgebaseerde admin-rollen in plaats van globale admin); noodtoegang via een beheerde break-glass-procedure.
3. **Versterk de authenticatie**: phishingbestendige MFA op alle beheeraccounts, zonder uitzonderingen.
4. **Registreer en beoordeel**: een actueel overzicht van wie welke speciale rechten heeft, gebruik gelogd (8.15), en herbeoordeling per kwartaal of halfjaar als onderdeel van de toegangsreview (5.18).

## Waar let de auditor op?

De auditor vraagt de lijst met beheerrechten en telt: zeven globale admins op vijfentwintig medewerkers vertelt het verhaal al. Verder: gedeelde admin-accounts, beheerrechten van vertrokken IT-partners die nog actief zijn, en dagelijks werken onder adminrechten. Dit is een van de zwaarst wegende controlegebieden in elke ISO 27001-audit.
