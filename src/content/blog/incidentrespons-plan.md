---
title: 'Incidentresponsplan opstellen: stap voor stap'
description: 'Een incidentresponsplan beslist het verschil tussen herstel in uren of weken. Zo stelt u er een op.'
publishDate: 2026-07-04
category: 'Cybersecurity'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-cybersecurity.svg'
keywords: ['incidentresponsplan opstellen', 'incident response plan', 'cyberincident respons', 'incident response procedure ISO']
---

Een cyberincident treft uw organisatie altijd op het slechtste moment. Systemen liggen plat, medewerkers weten niet wat ze moeten doen, het management wil antwoorden en klanten wachten. In die chaos maakt één ding het verschil tussen herstel in uren en herstel in weken: een goed opgesteld en gerepeteerd incidentresponsplan. Toch heeft meer dan de helft van de Nederlandse MKB-organisaties geen schriftelijk plan voor als het misgaat. Dit artikel leidt u stap voor stap door het opstellen van een werkend incidentresponsplan.

## Waarom improviseren tijdens een incident altijd faalt

Onder druk neemt het menselijk brein slechter beslissingen. Stress, tijdsdruk en onzekerheid leiden tot impulsieve acties die een incident kunnen verergeren. Klassieke fouten zonder plan:

- Systemen direct uitzetten waardoor forensisch bewijs verloren gaat
- Intern communiceren via gehackte kanalen die de aanvaller meeleest
- Klanten en toezichthouders te laat of incorrect informeren
- Geen duidelijkheid over wie welke beslissingen neemt

Een incidentresponsplan elimineert de noodzaak om onder druk na te denken over procesvragen. Het team weet wie wat doet, in welke volgorde, via welke kanalen en met welke bevoegdheden.

| Incidentfase | Zonder plan | Met plan |
|---|---|---|
| Detectie | Uren tot dagen | Minuten tot uren |
| Eerste respons | Chaotisch, impulsief | Gestructureerd, gefocust |
| Communicatie | Inconsistent, te laat | Tijdig, gecontroleerd |
| Herstel | Weken | Dagen |
| Lessen trekken | Zelden | Standaard |

## De zes fasen van een incidentresponsplan

Een compleet incidentresponsplan volgt de levenscyclus van een incident. Elk fase bevat concrete acties, verantwoordelijken en beslissingscriteria:

**Fase 1 — Voorbereiding:** Alles wat u doet voordat een incident plaatsvindt. Opstellen van het plan, trainen van het team, inrichten van tools voor detectie en logging, vastleggen van contactgegevens en communicatiesjablonen.

**Fase 2 — Detectie en classificatie:** Het moment waarop een incident wordt ontdekt. Definieer wat een incident is (versus een storing) en classificeer de ernst: laag, gemiddeld, hoog, kritiek. De classificatie bepaalt de escalatie.

**Fase 3 — Inperking:** Beperk de schade. Isoleer getroffen systemen van het netwerk zonder ze uit te zetten (tenzij absoluut noodzakelijk). Blokkeer aanvallersaccounts. Documenteer alle acties met tijdstempel voor latere forensische analyse.

**Fase 4 — Eradicatie:** Verwijder de oorzaak. Identificeer de initiële aanvalsvector, verwijder malware, herstel kwetsbaarheden die de aanval mogelijk maakten.

**Fase 5 — Herstel:** Zet systemen veilig terug in productie. Verifieer integriteit van data. Monitor intensief op tekenen van herinfectie.

**Fase 6 — Evaluatie (lessons learned):** Analyseer het incident binnen 72 uur na afronding. Wat ging goed? Wat ging mis? Welke procesverbeteringen zijn noodzakelijk? Documenteer en verwerk in het plan.

> **Tip van Control One:** Sla uw incidentresponsplan op buiten uw primaire IT-systemen. Als uw netwerk platligt door ransomware, moet u het plan nog steeds kunnen raadplegen. Een papieren exemplaar in de kluis of een kopie op een niet-verbonden systeem is geen overkill — het is basisvoorbereiding.

## Rollen en verantwoordelijkheden

Een incidentresponsplan zonder duidelijke rolverdeling is een document, geen plan. Definieer minimaal de volgende rollen:

**Incident Response Manager (IRM):** Coördineert de algehele respons. Neemt beslissingen over escalatie, communicatie en herstelstrategie. Dit is bij voorkeur een senior manager met beslissingsbevoegdheid.

**Technisch respons team:** Voert de technische inperking, analyse en herstel uit. Bestaat uit IT-medewerkers of de externe managed service provider.

**Communicatieverantwoordelijke:** Coördineert alle interne en externe communicatie. Stelt persberichten op, informeert klanten en rapporteert aan toezichthouders.

**Juridisch adviseur / DPO:** Beoordeelt meldverplichtingen richting de Autoriteit Persoonsgegevens (AVG) en andere toezichthouders.

Zorg dat voor elke rol ook een vervanger gedefinieerd is. Incidenten vinden niet altijd plaats als de primaire verantwoordelijke beschikbaar is.

## Testen en onderhouden van het plan

Een plan dat nooit getest is, faalt op het moment van de waarheid. Test uw incidentresponsplan minimaal jaarlijks met een tabletop-oefening: een gesimuleerd incident waarbij het team beslissingen neemt alsof het echt is, zonder de systemen daadwerkelijk te beïnvloeden.

Pas het plan na elke oefening en na elk echt incident aan op basis van de lessons learned. Een plan uit 2022 dat sindsdien niet is aangepast, sluit niet meer aan bij uw huidige infrastructuur, team en dreigingslandschap.

## Veelgestelde vragen

**Hoe lang duurt het opstellen van een incidentresponsplan?**
Een basisdocument voor MKB kunt u in twee tot vier werkdagen opstellen met de juiste begeleiding. De complexiteit neemt toe met de omvang van de organisatie.

**Is een incidentresponsplan verplicht onder ISO 27001?**
Ja. Annex A-maatregel 5.26 vereist het management van informatiebeveiligingsincidenten, inclusief gedocumenteerde procedures voor respons. Veel auditors vragen specifiek naar het incidentresponsplan.

**Wat is het verschil tussen een incidentresponsplan en een BCP?**
Een incidentresponsplan (IRP) richt zich op de technische en operationele respons op een beveiligingsincident. Een Business Continuity Plan (BCP) richt zich op het voortzetten van bedrijfsprocessen bij verstoringen in het algemeen. Ze overlappen en moeten op elkaar aansluiten.

**Moet ik een cyberincident melden bij de Autoriteit Persoonsgegevens?**
Bij een datalek waarbij persoonsgegevens zijn gelekt of verloren zijn gegaan, bent u onder de AVG verplicht dit binnen 72 uur te melden bij de AP. Uw incidentresponsplan moet dit proces automatisch triggeren.

**Hoe betrek ik de directie bij het incidentresponsplan?**
Leg de directie een risicoanalyse voor van de kosten van een niet-gemanaged incident versus de investering in voorbereiding. Betrek hen als beslisser in de tabletop-oefeningen.

---

Wilt u hulp bij het opstellen van een incidentresponsplan dat past bij uw organisatie en aansluit op ISO 27001? Bekijk onze aanpak en pakketten op [de prijzenpagina](/prijzen) en ontdek hoe Control One u helpt voorbereid te zijn als het misgaat.
