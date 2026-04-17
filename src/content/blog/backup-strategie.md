---
title: 'Back-upstrategie: de 3-2-1 regel uitgelegd'
description: 'De 3-2-1 back-upregel is de gouden standaard tegen ransomware. Hoe implementeer je hem?'
publishDate: 2026-06-30
category: 'Cybersecurity'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-cybersecurity.svg'
keywords: ['3-2-1 back-up regel', 'back-upstrategie organisatie', 'ransomware bescherming backup', 'ISO 27001 back-up']
---

Ransomware treft dagelijks organisaties wereldwijd. De aanvallers versleutelen je bestanden en eisen losgeld voor de sleutel. De enige echte verdediging tegen ransomware is niet een betere firewall — het is een betrouwbare back-up die buiten het bereik van de aanvaller ligt. De 3-2-1 back-upregel is al tientallen jaren de gouden standaard voor gegevensherstel en is relevanter dan ooit. Toch implementeren veel organisaties hem onvolledig of incorrectly, waardoor ze ontdekken dat hun back-up waardeloos is op het moment dat ze hem het meest nodig hebben.

## De 3-2-1 regel: wat betekent hij precies?

De 3-2-1 regel is simpel in formulering, maar veeleisend in uitvoering:

- **3** kopieën van je data bewaren (de originele data plus twee back-ups)
- **2** verschillende opslagmedia gebruiken (bijvoorbeeld interne schijf én externe schijf of tapesysteem)
- **1** kopie offsite bewaren (geografisch gescheiden van je primaire locatie)

De kracht van deze regel zit in redundantie. Als één kopie verloren gaat door ransomware, hardware-uitval of brand, beschikt je altijd nog over minimaal twee andere kopieën. De offsite-kopie beschermt je specifiek tegen fysieke calamiteiten en tegen ransomware die zich door het netwerk verspreidt.

| Kopie | Locatie | Medium | Doel |
|---|---|---|---|
| Primaire data | Productieomgeving | SAN / NAS / Cloud | Dagelijkse bedrijfsvoering |
| Back-up 1 | Lokaal (apart segment) | NAS / tapebibliotheek | Snelle herstel |
| Back-up 2 (offsite) | Extern datacenter / cloud | Cloud-opslag / tape offsite | Bescherming bij calamiteit |

## De uitbreiding: 3-2-1-1-0

Moderne dreigingen, in het bijzonder ransomware, hebben de klassieke 3-2-1 regel onvoldoende gemaakt voor veel organisaties. De industrie heeft hierop gereageerd met de uitbreiding tot 3-2-1-1-0:

**+1 immutable (onveranderbare) back-up:** Een back-up die voor een bepaalde periode niet gewijzigd of verwijderd kan worden, ook niet door een beheerder met verhoogde rechten. Object storage met WORM-functionaliteit (Write Once, Read Many) of cloudback-up met immutability-instellingen voldoet hieraan.

**+0 fouten bij hersteltests:** De nul verwijst naar het doel: nul fouten bij periodieke hersteltests. Een back-up is pas betrouwbaar als bewezen is dat herstel werkt. Sla testresultaten op als aantoonbaar bewijs.

> **Tip van Control One:** Test je back-upherstel minimaal elk kwartaal. Simuleer een volledig scenario: herstel een kritisch systeem volledig uit back-up en meet de hersteltijd (RTO). Je ontdekt hiermee problemen voordat een incident dat voor je doet.

## Implementatie stap voor stap

Een goede back-upstrategie begint met het definiëren van twee parameters per systeem of dataset:

**RPO (Recovery Point Objective):** Hoeveel dataverlies accepteert je? Als je RPO vier uur is, moet je minimaal elke vier uur een back-up maken.

**RTO (Recovery Time Objective):** Hoe snel moet je hersteld zijn? Als je RTO acht uur is, moet je herstelproces binnen die tijd uitvoerbaar zijn, inclusief verificatie.

Op basis van deze parameters kies je je back-upfrequentie, retentiebeleid en herstelmethode. Kritieke systemen verdienen een hogere frequentie en kortere hersteltime dan minder kritieke data.

Praktische aandachtspunten bij implementatie:

- **Encrypteer alle back-ups** — zowel in transit als at rest. Een onversleutelde back-up is een datalek in wachttijd.
- **Isoleer back-upsystemen** van de productieomgeving. Een back-upserver die via hetzelfde netwerksegment bereikbaar is, wordt meegenomen in een ransomware-aanval.
- **Documenteer herstelprocedures** stap voor stap, zodat herstel uitvoerbaar is ook als je hoofd-IT-er niet beschikbaar is.
- **Monitor back-uptaken actief** en ontvang alerts bij mislukte back-ups. Een back-up die weken lang gefaald heeft zonder dat iemand het wist, is geen back-up.

## Back-up en ISO 27001

ISO 27001 Annex A-beheersmaatregel 8.13 vereist expliciet het beschermen van informatie via back-ups. Een auditor verwacht een gedocumenteerd back-upbeleid dat de frequentie, retentie, locatie, testprocedures en verantwoordelijkheden beschrijft.

Naast de norm is er ook de AVG: verlies van persoonsgegevens door een inadequate back-upstrategie kan resulteren in een meldplichtig datalek. Een aantoonbaar functionerende back-up is daarmee ook compliance-vereiste.

Voor organisaties die ISO 27001 nastreven, is het back-upbeleid een van de eerste documenten die een auditor opvraagt. Zorg dat het beleid aansluit op je daadwerkelijke praktijk — een papieren tiger is erger dan geen beleid, omdat het bij een incident aantoonbaar tekortschiet.

## Veelgestelde vragen

**Is cloudopslag voldoende als back-up?**
Niet als enige back-up. Cloudopslag (zoals OneDrive of Google Drive) synchroniseert bestanden, inclusief versleutelde bestanden na ransomware. Gebruik cloud als een van de lagen, niet als enige laag.

**Hoe lang moet ik back-ups bewaren?**
Afhankelijk van je branche en je RPO/RTO-definities. Een gangbare retentie is dagelijkse back-ups voor 30 dagen, wekelijkse voor 12 weken en maandelijkse voor 12 maanden.

**Wat kost een goede back-upoplossing voor MKB?**
Oplossingen zoals Veeam, Acronis of Azure Backup beginnen bij enkele honderden euro's per jaar voor kleinere omgevingen. De kosten van herstel na ransomware zonder back-up liggen gemiddeld tientallen tot honderdduizenden euro's hoger.

**Moet ik ook applicatiedata back-uppen, of alleen bestanden?**
Ja. Databases, e-mailservers en bedrijfsapplicaties vereisen applicatieconsistente back-ups. Reguliere bestandsback-ups zijn onvoldoende voor het herstel van complexe systemen.

**Wie is verantwoordelijk voor back-ups bij cloudhosting?**
Dit valt onder het "gedeelde verantwoordelijkheidsmodel." De cloudleverancier beschermt de infrastructuur; je bent verantwoordelijk voor het back-uppen van je eigen data.

---

Wil je je back-upstrategie laten toetsen op volledigheid en aansluiting bij ISO 27001? Bekijk onze aanpak op [de prijzenpagina](/prijzen) en ontdek hoe Control One je helpt je continuïteit te borgen.
