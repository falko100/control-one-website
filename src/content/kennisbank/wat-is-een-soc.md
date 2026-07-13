---
title: "Wat is een SOC (Security Operations Center)?"
description: "Een SOC bewaakt de IT-omgeving doorlopend op aanvallen: mensen, processen en tooling (SIEM, EDR). Wanneer heeft het MKB er een nodig en wat kost een uitbesteed SOC?"
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een SOC (Security Operations Center) is het team dat een IT-omgeving doorlopend bewaakt op beveiligingsincidenten: alerts uit SIEM- en EDR-tooling beoordelen, aanvallen detecteren en de eerste respons coördineren, vaak 24/7. Vrijwel geen MKB-bedrijf heeft een eigen SOC; de gangbare route is een uitbesteed SOC of MDR-dienst (Managed Detection & Response) vanaf enkele honderden tot duizenden euro's per maand. Verwar het niet met SOC 2: dat is een Amerikaans auditrapport."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["soc", "security operations center", "mdr", "siem", "monitoring"]
gerelateerd: ["annex-a-8-16-monitoringactiviteiten", "annex-a-8-15-logging", "iso-27001-vs-soc-2"]
faq:
  - vraag: "Wat is het verschil tussen SOC, SIEM en MDR?"
    antwoord: "Het SOC is het team (mensen en processen), de SIEM is hun kerngereedschap (het systeem dat logs uit alle bronnen verzamelt en correleert tot alerts), en MDR is de uitbestede dienstvorm: een externe partij die met eigen SOC en tooling jouw omgeving bewaakt en bij incidenten reageert. Voor het MKB is MDR meestal de logische vorm."
  - vraag: "Heeft een MKB-bedrijf een SOC nodig voor ISO 27001?"
    antwoord: "Nee: maatregel 8.16 eist monitoring passend bij het risico, en voor veel MKB-bedrijven volstaat goed geconfigureerde EDR- en identiteitsmonitoring met een bemande opvolgroutine. Een uitbesteed SOC/MDR wordt logisch bij verhoogd risicoprofiel, NIS2-plicht, 24/7-dienstverlening aan klanten of simpelweg het ontbreken van iemand die alerts kan beoordelen."
---

Een SOC (Security Operations Center) is de bewakingscentrale van de digitale omgeving: het team dat dag en nacht kijkt of er wordt ingebroken, en ingrijpt als het gebeurt. Niet te verwarren met SOC 2, het Amerikaanse assurance-rapport; de afkortingen delen alleen de letters.

## Wat doet een SOC?

De kern is de keten van signaal naar actie: **verzamelen** (logs en telemetrie uit endpoints, identiteit, netwerk en cloud, meestal samengebracht in een SIEM), **detecteren** (regels, correlatie en gedragsanalyse die van miljoenen events een handvol serieuze alerts maken), **beoordelen** (analisten die alerts onderzoeken: echt of vals alarm, hoe erg), en **reageren** (isoleren van systemen, blokkeren van accounts, en escaleren naar het incidentproces van de organisatie). Volwassen SOC's doen daarnaast threat hunting: actief zoeken naar sporen die de detectieregels misten.

## Eigen SOC of uitbesteed?

Een eigen 24/7-SOC vraagt minimaal acht tot tien analisten plus tooling; dat is enterprise-territorium. Het MKB kiest tussen twee realistische opties: **zelf monitoren op kantooruren** (de ingebouwde detectie van EDR en identiteitsplatform, alerts naar een bemande mailbox, een opvolgafspraak; zie maatregel 8.16) of een **uitbesteed SOC / MDR-dienst**: een gespecialiseerde partij die de omgeving doorlopend bewaakt, alerts triageert en bij een incident direct handelt, vanaf enkele honderden euro's per maand voor kleine omgevingen tot enkele duizenden voor bredere dekking.

De afweging: hoe erg is een nacht of weekend vertraging in detectie? Voor een lokale dienstverlener acceptabel; voor een SaaS-leverancier met klantdata of een NIS2-plichtige organisatie steeds vaker niet.

## De plek binnen ISO 27001

Het SOC (eigen of uitbesteed) is de zwaarste invulling van maatregel 8.16 (monitoring) en leunt op 8.15 (logging: zonder goede logs is er niets te bewaken). Bij uitbesteding gelden de leveranciersmaatregelen (5.19 tot en met 5.22): afspraken over reactietijden, rapportage en de aansluiting op je eigen incidentproces (5.24 tot en met 5.26), want de MDR-partij detecteert en isoleert, maar de organisatie blijft eigenaar van het incident, de melding aan de AP en de communicatie.
