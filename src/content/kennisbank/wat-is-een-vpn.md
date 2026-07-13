---
title: "Wat is een VPN?"
description: "Een VPN maakt een versleutelde tunnel tussen apparaat en netwerk: voor thuiswerkers naar kantoor of tussen vestigingen. Nut, grenzen en het verschil met ZTNA."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een VPN (virtual private network) maakt een versleutelde tunnel over internet, waardoor een apparaat veilig deel wordt van een ander netwerk: de thuiswerker die bij interne systemen op kantoor moet, of twee vestigingen die gekoppeld worden. Kernregels: MFA verplicht op de VPN-toegang, de VPN-software zelf razendsnel patchen (een favoriet doelwit), en de toegang zo smal mogelijk. Commerciële privacy-VPN's zijn een ander product en geen bedrijfsbeveiligingsmaatregel."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["vpn", "virtual private network", "remote access", "thuiswerken"]
gerelateerd: ["annex-a-6-7-werken-op-afstand", "wat-is-zero-trust", "annex-a-8-21-beveiliging-van-netwerkdiensten"]
faq:
  - vraag: "Heb je een VPN nodig als alles in de cloud staat?"
    antwoord: "Meestal niet voor het dagelijkse werk: SaaS-diensten zijn via TLS al versleuteld bereikbaar en worden beschermd met SSO en MFA. Een VPN blijft nodig voor het restje interne systemen (een lokale server, beheerinterfaces) en is als extra laag zinvol op onvertrouwde netwerken; voor dat interne restje is ZTNA het modernere alternatief."
  - vraag: "Waarom zijn VPN-servers zo'n geliefd doelwit?"
    antwoord: "Ze staan per definitie open naar internet en geven na inbraak brede netwerktoegang: kwetsbaarheden in bekende VPN-producten worden binnen dagen massaal misbruikt. Daarom: MFA verplicht, patches binnen dagen (8.8), en monitoring op inlogpatronen (8.16)."
---

Een VPN legt een versleutelde tunnel over het openbare internet: het apparaat van de gebruiker gedraagt zich alsof het in het bedrijfsnetwerk zit, waar het fysiek ook is. Decennialang was dit dé oplossing voor thuiswerken; inmiddels is het één van de gereedschappen, met duidelijke grenzen.

## De twee bedrijfstoepassingen

**Remote access-VPN**: medewerkers verbinden vanaf laptop of telefoon met het bedrijfsnetwerk voor de systemen die niet als clouddienst bereikbaar zijn: de lokale fileserver, het ERP op eigen ijzer, beheerinterfaces. **Site-to-site-VPN**: twee locaties (of een kantoor en een cloudomgeving) worden permanent versleuteld gekoppeld tot één netwerk.

Het derde product met dezelfde naam, de **commerciële privacy-VPN** uit de reclames, is iets anders: die verlegt alleen je internetverkeer via de aanbieder (nuttig tegen meekijken op openbare wifi, maar je verplaatst het vertrouwen naar de VPN-boer) en is geen bedrijfsbeveiligingsmaatregel.

## De regels die de VPN veilig houden

1. **MFA, zonder uitzondering**: een VPN met alleen wachtwoord is een voordeur met briefjesslot; gestolen inloggegevens zijn de nummer één-ingang voor ransomware.
2. **Patchen binnen dagen**: kwetsbaarheden in VPN-producten worden razendsnel en massaal misbruikt; dit is de categorie waarvoor je patchproces (8.8) zijn spoedprocedure heeft.
3. **Smalle toegang**: geef VPN-gebruikers toegang tot wat ze nodig hebben, niet tot het platte hele netwerk; segmentatie (8.22) geldt ook hier.
4. **Monitoring**: inlogtijden, -locaties en mislukte pogingen loggen en bewaken (8.15, 8.16).

## VPN of ZTNA?

De opvolger-trend is ZTNA (zie het zero-trust-artikel): toegang per applicatie op basis van identiteit en apparaatstatus, in plaats van brede netwerktoegang. Voor cloud-first MKB-organisaties is de praktische mix: SaaS via SSO met MFA, en voor het interne restje een strak geconfigureerde VPN of een ZTNA-dienst. De auditvraag blijft dezelfde: wie kan van buiten bij wat, en hoe is dat beschermd?
