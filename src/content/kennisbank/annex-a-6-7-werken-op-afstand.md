---
title: "Annex A 6.7: Werken op afstand"
description: "Maatregel 6.7 van ISO 27001 Annex A eist beveiligingsmaatregelen voor thuiswerken en werken onderweg. Zo stel je een remote-werkbeleid op dat auditproof is."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 6.7 eist dat er beveiligingsmaatregelen zijn voor werken op afstand: beleid en voorzieningen die informatie beschermen buiten de kantooromgeving. Kernonderdelen: versleutelde en beheerde apparaten, veilige verbindingen, MFA, regels voor de fysieke werkomgeving (schermen, gesprekken, papier) en duidelijkheid over privé-apparaten en openbare netwerken."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 6.7", "werken op afstand", "thuiswerken", "remote work", "iso 27001"]
gerelateerd: ["annex-a-5-10-aanvaardbaar-gebruik", "annex-a-5-17-authenticatie-informatie", "annex-a-6-3-bewustzijn-opleiding-training"]
faq:
  - vraag: "Wat hoort er in een thuiswerkbeleid?"
    antwoord: "Welke apparaten zijn toegestaan (beheerd zakelijk, of BYOD onder voorwaarden), eisen aan de verbinding (geen onbeveiligde openbare wifi zonder VPN), schermvergrendeling en privacy in huis (meekijkende huisgenoten, videobellen), omgang met papier en printen thuis, en hoe verlies of diefstal direct gemeld wordt."
  - vraag: "Is een VPN verplicht voor thuiswerken?"
    antwoord: "Niet per definitie. Bij moderne cloudomgevingen met MFA en versleutelde verbindingen (TLS) is een klassieke VPN niet altijd nodig; de norm eist passende bescherming, geen specifieke techniek. Voor toegang tot interne systemen of bij onvertrouwde netwerken blijft VPN of een zero-trust-oplossing de standaard."
---

Annex A-maatregel 6.7 van ISO 27001, "Remote working", erkent dat de kantoormuren geen beveiligingsgrens meer zijn. Thuis, onderweg en op locatie bij klanten moet informatie even goed beschermd zijn, met andere middelen.

## Wat eist de maatregel?

Beveiligingsmaatregelen wanneer personeel op afstand werkt, ter bescherming van informatie die buiten de locaties van de organisatie wordt benaderd, verwerkt of opgeslagen. De norm noemt onder meer: de fysieke omgeving, communicatiebeveiliging, dreigingen van huisgenoten en bezoekers, en het gebruik van privénetwerken en -apparaten.

## Zo vul je hem in

1. **Beheer de apparaten**: zakelijk beheerde laptops en telefoons met versleuteling, automatische vergrendeling, updates en wisbaarheid op afstand (MDM); BYOD alleen onder vastgelegde voorwaarden.
2. **Beveilig de verbinding**: MFA op alle diensten, versleutelde verbindingen, en VPN of gelijkwaardig voor interne systemen; waarschuw voor onbeveiligde openbare wifi.
3. **Stel omgevingsregels**: scherm niet zichtbaar voor derden (privacyfilter in trein en openbare ruimtes), vergrendelen bij weglopen, vertrouwelijke gesprekken niet in het openbaar, papier thuis beperken en veilig afvoeren.
4. **Regel de meldroute**: verlies of diefstal van een apparaat wordt direct gemeld (6.8), waarna op afstand wissen volgt.
5. **Neem het op in awareness**: thuiswerkscenario's zijn vast onderdeel van de training (6.3).

## Waar let de auditor op?

De auditor toetst het beleid en de technische afdwinging: staat versleuteling echt aan op alle laptops, werkt de wis-op-afstand, is MFA overal actief? Interviews leggen de praktijk bloot: de medewerker die vanaf de privé-pc van het gezin in de klantomgeving werkt, is de klassieke vondst. Technisch afdwingen wat af te dwingen valt, scheelt hier de meeste bevindingen.
