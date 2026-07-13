---
title: "Annex A 8.24: Gebruik van cryptografie"
description: "Maatregel 8.24 van ISO 27001 Annex A eist regels voor effectief gebruik van cryptografie en sleutelbeheer. Versleuteling in rust, onderweg en het beheer van sleutels."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.24 eist dat regels voor het effectieve gebruik van cryptografie, inclusief sleutelbeheer, zijn gedefinieerd en geïmplementeerd: welke informatie wordt waar versleuteld (in rust en onderweg), met welke actuele standaarden, en hoe worden sleutels en certificaten beheerd door hun levenscyclus heen. Voor het MKB: versleuteling overal aanzetten waar het platform het biedt, en een klein maar bewaakt register van certificaten en sleutels."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.24", "cryptografie", "versleuteling", "sleutelbeheer", "iso 27001"]
gerelateerd: ["annex-a-8-1-eindgebruikersapparaten", "annex-a-5-14-informatieoverdracht", "annex-a-8-13-back-up-van-informatie"]
faq:
  - vraag: "Wat moet er in een cryptografiebeleid staan?"
    antwoord: "Kort en concreet: welke informatie versleuteld wordt (apparaten, back-ups, gevoelige overdracht), welke standaarden acceptabel zijn (actuele TLS-versies, AES-256, geen verouderde protocollen), wie sleutels en certificaten beheert, en hoe verlies van sleutels wordt voorkomen (herstelsleutels veilig bewaard). Een tot twee pagina's volstaan."
  - vraag: "Wat is het meest onderschatte onderdeel?"
    antwoord: "Sleutelbeheer: de herstelsleutels van versleutelde laptops die nergens zijn opgeslagen (waardoor data onbereikbaar wordt), en certificaten die onverwacht verlopen en diensten platleggen. Een register met vervaldatums en een bewaarplek voor herstelsleutels lost beide op."
---

Annex A-maatregel 8.24 van ISO 27001, "Use of cryptography", regelt de sterkste beschermingslaag die er is, en het beheer eromheen dat bepaalt of hij werkt: versleuteling zonder sleutelbeheer beschermt vooral tegen jezelf.

## Wat eist de maatregel?

Regels voor het effectieve gebruik van cryptografie, inclusief het beheer van cryptografische sleutels, zijn gedefinieerd en geïmplementeerd: waar versleuteling wordt toegepast (op basis van classificatie en risico), welke algoritmen en protocollen acceptabel zijn, en de volledige levenscyclus van sleutels: genereren, opslaan, distribueren, vervangen en vernietigen. Wettelijke eisen rond cryptografie tellen mee.

## Zo vul je hem in

1. **Versleutel de standaardlagen**: volledige schijfversleuteling op alle apparaten (8.1), TLS op alle verbindingen, versleutelde back-ups (8.13) en versleutelde gevoelige overdracht (5.14); moderne platforms bieden dit ingebouwd, het moet vooral áán staan.
2. **Kies actuele standaarden**: actuele TLS-versies, sterke algoritmen, verouderde protocollen uitgezet; volg de aanbevelingen van platforms en het NCSC in plaats van zelf te ontwerpen.
3. **Beheer de sleutels**: herstelsleutels van apparaatversleuteling centraal en veilig bewaard (in de MDM of identiteitsomgeving), geheimen in een geheimenbeheerder in plaats van in scripts, en toegang tot sleutels beperkt.
4. **Bewaak de certificaten**: een registertje met vervaldatums en automatische verlenging waar mogelijk; het verlopen certificaat is de meest voorkomende zelfveroorzaakte storing.

## Waar let de auditor op?

De auditor toetst de dekking (staat versleuteling overal aan waar het beleid het zegt) en het sleutelbeheer: waar liggen de herstelsleutels, wie kan erbij, wat gebeurt er als de beheerder wegvalt? De klassiekers: laptops zonder geregistreerde herstelsleutel, en dat ene verouderde protocol dat nog aanstaat omdat een oud systeem het nodig heeft, zonder gedocumenteerde afweging.
