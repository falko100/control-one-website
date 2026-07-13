---
title: "Annex A 8.22: Netwerksegmentatie"
description: "Maatregel 8.22 van ISO 27001 Annex A eist scheiding van netwerken in domeinen: gast, kantoor, servers en IoT gescheiden. Proportionele segmentatie voor het MKB."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.22 eist dat groepen informatiediensten, gebruikers en systemen in het netwerk worden gescheiden: aparte domeinen of segmenten naar vertrouwensniveau, zodat een besmetting of indringer zich niet vrij door het hele netwerk beweegt. MKB-basis: gastnetwerk volledig gescheiden, IoT en randapparatuur (camera's, printers) in een eigen segment, servers en beheer gescheiden van werkplekken."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.22", "netwerksegmentatie", "vlan", "netwerkscheiding", "iso 27001"]
gerelateerd: ["annex-a-8-20-netwerkbeveiliging", "annex-a-8-7-bescherming-tegen-malware", "annex-a-8-16-monitoringactiviteiten"]
faq:
  - vraag: "Waarom is segmentatie belangrijk tegen ransomware?"
    antwoord: "Ransomware verspreidt zich lateraal: van de eerste besmette werkplek naar alles wat bereikbaar is. Segmentatie beperkt dat bereik: als werkplekken, servers en back-upsystemen gescheiden zijn met alleen noodzakelijk verkeer ertussen, blijft een besmetting kleiner en blijft de back-up buiten schot."
  - vraag: "Hoe ver moet een klein bedrijf hierin gaan?"
    antwoord: "Minimaal: gast gescheiden van bedrijf, en slimme apparaten (camera's, printers, domotica) niet tussen de werkplekken. Wenselijk: servers/opslag en beheerinterfaces in een eigen segment. Volledige microsegmentatie is enterprise-territorium; de norm vraagt proportionaliteit."
---

Annex A-maatregel 8.22 van ISO 27001, "Segregation of networks", verdeelt het netwerk in compartimenten: net als waterdichte schotten in een schip beperken ze de schade als er één volloopt.

## Wat eist de maatregel?

Groepen informatiediensten, gebruikers en informatiesystemen worden in de netwerken van de organisatie gescheiden: domeinen naar vertrouwensniveau en functie, met beheerste overgangen (firewallregels) ertussen. Draadloze netwerken en gastverkeer krijgen expliciete aandacht, evenals verbindingen met partnernetwerken.

## Zo vul je hem in

1. **Scheid het vreemde verkeer**: een gastnetwerk zonder enige route naar het bedrijfsnetwerk is de absolute basis; privé-apparaten van medewerkers horen bij gast.
2. **Isoleer de zwakke apparaten**: camera's, printers, toegangssystemen en ander IoT in een eigen segment; dit zijn de slechtst onderhouden apparaten in elk netwerk (8.8) en dus het geliefdste bruggenhoofd.
3. **Bescherm de kern**: servers, NAS en back-upsystemen in een eigen segment met alleen noodzakelijk verkeer vanaf werkplekken; beheerinterfaces alleen bereikbaar vanaf beheerwerkplekken.
4. **Documenteer de segmenten**: het netwerkschema (8.20) toont de segmenten en de regels ertussen; wijzigingen via wijzigingsbeheer (8.32).

## Waar let de auditor op?

De auditor toetst de basis: kan een gast bij bedrijfsdata, staan de camera's tussen de werkplekken, is de back-up bereikbaar vanaf elke besmette laptop? Bij een plat netwerk zonder enige scheiding wil de auditor ten minste een bewuste risicoafweging zien; die is er zelden, en dan is het een bevinding.
