---
title: "Wat is een firewall?"
description: "Een firewall filtert netwerkverkeer op basis van regels: wat mag erin en eruit. Soorten (netwerk, host, cloud/NGFW), de basisregels en veelgemaakte fouten."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een firewall is de verkeersfilter tussen netwerken: hij laat verkeer door of blokkeert het op basis van regels (adressen, poorten, applicaties). Vormen: de netwerkfirewall op de rand van het bedrijfsnetwerk, de host-firewall op elk apparaat, en security groups in cloudomgevingen. De basisregels: inkomend staat alles dicht behalve wat expliciet nodig is, beheerinterfaces zijn nooit vanaf internet bereikbaar, en de regels worden periodiek opgeschoond."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["firewall", "netwerkbeveiliging", "poorten", "ngfw"]
gerelateerd: ["annex-a-8-20-netwerkbeveiliging", "annex-a-8-22-netwerksegmentatie", "wat-is-een-vpn"]
faq:
  - vraag: "Wat is een next-generation firewall (NGFW)?"
    antwoord: "Een firewall die verder kijkt dan adressen en poorten: hij herkent applicaties en gebruikers, inspecteert (ook versleuteld) verkeer op bedreigingen, en combineert filtering met intrusion prevention en webfiltering. Voor MKB-omgevingen zijn de UTM-varianten (unified threat management) van de bekende merken de gangbare invulling."
  - vraag: "Is een firewall nog relevant als alles in de cloud staat?"
    antwoord: "Ja, in twee gedaanten: het kantoornetwerk houdt een (bescheiden) firewall voor de internetverbinding en wifi-segmentatie, en in de cloud vervullen security groups en netwerkregels dezelfde functie rond je servers en diensten. De aandacht verschuift wel: identiteit (MFA, conditional access) is in cloudomgevingen de eerste verdedigingslinie geworden."
---

Een firewall is de portier van het netwerk: al het verkeer dat binnenkomt of vertrekt, wordt langs een regelset gelegd, en wat niet expliciet mag, komt er niet door. Het is een van de oudste beveiligingsmaatregelen en nog altijd een fundament, mits goed geconfigureerd.

## De vormen

**De netwerkfirewall** staat op de rand tussen het bedrijfsnetwerk en internet (vaak gecombineerd met de router) en tussen interne segmenten (8.22). **De host-firewall** draait op elk apparaat zelf (ingebouwd in Windows en macOS) en beschermt ook onderweg. **Cloudregels** (security groups, netwerk-ACL's) doen hetzelfde rond cloudservers en -diensten. Moderne **next-generation firewalls** voegen applicatieherkenning, inbraakdetectie en webfiltering toe.

## De basisregels die ertoe doen

1. **Default deny inkomend**: alles dicht behalve wat expliciet en beargumenteerd open moet. Elke open poort is aanvalsoppervlak.
2. **Beheer nooit vanaf internet**: de beheerinterface van firewall, router, NAS of server hoort niet publiek bereikbaar; dit is een van de meest misbruikte fouten.
3. **Ook uitgaand nadenken**: uitgaande filtering (of minimaal logging) beperkt wat malware naar buiten kan sturen.
4. **Opschonen en documenteren**: regels verouderen; de "tijdelijke" opening voor die leverancier van drie jaar geleden staat er nog. Periodieke review van de regelset hoort bij de zelfcontroles (5.36), en firmware-updates bij het patchproces (8.8).

## De plek binnen ISO 27001

De firewall is kerngereedschap voor netwerkbeveiliging (8.20) en segmentatie (8.22), en zijn logs voeden de monitoring (8.15, 8.16). De auditvragen zijn voorspelbaar: wie beheert hem, wanneer is de firmware bijgewerkt, welke poorten staan open naar binnen en waarom, en is de beheerinterface afgeschermd? Wie die vier vragen direct kan beantwoorden, heeft dit onderwerp op orde.
