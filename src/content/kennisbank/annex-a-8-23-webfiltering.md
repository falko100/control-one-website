---
title: "Annex A 8.23: Webfiltering"
description: "Maatregel 8.23 van ISO 27001 Annex A eist beheersing van de toegang tot externe websites: blokkeren van kwaadaardige sites en risicocategorieën, transparant voor medewerkers."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.23, nieuw in de 2022-versie, eist dat de toegang tot externe websites wordt beheerd om blootstelling aan kwaadaardige inhoud te verminderen: blokkeren van bekende malware- en phishingsites en van categorieën die de organisatie uitsluit, via DNS-filtering, de beveiligingsfuncties van browser en EDR, of de firewall. Transparantie naar medewerkers over wat en waarom er gefilterd wordt hoort erbij."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.23", "webfiltering", "dns-filtering", "url-filtering", "iso 27001"]
gerelateerd: ["annex-a-8-7-bescherming-tegen-malware", "annex-a-5-10-aanvaardbaar-gebruik", "annex-a-8-20-netwerkbeveiliging"]
faq:
  - vraag: "Wat is de lichtste zinvolle invulling?"
    antwoord: "DNS-filtering: alle apparaten gebruiken een filterende DNS-dienst die bekende malware-, phishing- en botnetdomeinen blokkeert. Het werkt ook buiten kantoor (mits op het apparaat geconfigureerd), kost weinig en vangt een groot deel van de web-gebaseerde aanvallen af. Browserbeveiliging en EDR vullen aan."
  - vraag: "Mag je zomaar bijhouden welke sites medewerkers bezoeken?"
    antwoord: "Filtering en logging van webverkeer raken de privacy van medewerkers. Wees transparant (vastgelegd in het gebruiksreglement, 5.10), filter op categorieën in plaats van individuen te volgen, en gebruik logs alleen gericht bij concrete incidenten of verdenkingen, conform een vastgelegde procedure."
---

Annex A-maatregel 8.23 van ISO 27001, "Web filtering", is nieuw in de 2022-versie en dicht een voordeur: het web is naast e-mail de grootste aanvoerroute van malware en phishing.

## Wat eist de maatregel?

De toegang tot externe websites wordt beheerd om de blootstelling aan kwaadaardige inhoud te verminderen: blokkering van sites met malware of phishing en van categorieën waarvan de organisatie het gebruik uitsluit, regels over welk webgebruik acceptabel is, en training van medewerkers over veilig webgebruik (6.3).

## Zo vul je hem in

1. **Start met DNS-filtering**: een filterende DNS-dienst op alle beheerde apparaten blokkeert bekende kwaadaardige domeinen, ook onderweg; dit is de beste prijs-kwaliteit van de hele maatregel.
2. **Benut wat er al is**: de beveiligingsfuncties van moderne browsers, de webbescherming van de EDR (8.7) en de filtering van de firewall (8.20) overlappen elkaar zinvol.
3. **Kies de categorieën bewust**: kwaadaardig en illegaal blokkeren is vanzelfsprekend; wees terughoudend en transparant met het blokkeren van meer, en leg de keuzes vast in het gebruiksreglement (5.10).
4. **Respecteer de privacy**: categoriegebaseerd filteren, geen individuele surveillance; gerichte loganalyse alleen bij incidenten volgens vaste afspraken.

## Waar let de auditor op?

De auditor vraagt wat er gebeurt als een medewerker op een phishinglink klikt: wordt de site geblokkeerd, door welke laag, en is dat getest? Een organisatie zonder enige webfiltering leunt volledig op de oplettendheid van medewerkers, en dat is precies wat de maatregel wil voorkomen. De combinatie DNS-filter plus browser- en EDR-bescherming is voor het MKB het gangbare, verdedigbare antwoord.
