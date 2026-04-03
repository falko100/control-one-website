---
title: 'Penetratietesten en ISO 27001: wat zijn de eisen?'
description: "Is een pentest verplicht voor ISO 27001? Wanneer is het zinvol en hoe verwerkt u de resultaten in uw ISMS?"
publishDate: 2026-04-26
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'Penetratietesten en ISO 27001: wat zijn de eisen? — Control One'
keywords:
  - 'penetratietest ISO 27001'
  - 'pentest ISMS'
  - 'kwetsbaarheidstest informatiebeveiliging'
  - 'ISO 27001 Annex A 8.8'
draft: false
---

"Moeten wij een penetratietest doen voor ISO 27001?" is een vraag die regelmatig terugkeert tijdens ISMS-implementaties. Het antwoord is genuanceerder dan ja of nee: een **penetratietest** (pentest) is niet expliciet verplicht gesteld door ISO 27001, maar de norm verwacht wel dat u uw systemen actief test op kwetsbaarheden. En in de praktijk is een professionele pentest vaak het sterkste bewijs dat u dat serieus doet. Dit artikel legt uit wat de norm vraagt, wanneer een pentest zinvol is en hoe u de resultaten in uw ISMS verwerkt.

## Wat zegt ISO 27001 over technische tests?

ISO 27001 behandelt technisch testen via twee controls in Bijlage A:

**Control 8.8 – Beheer van technische kwetsbaarheden.** Deze control vereist dat u tijdig informatie verkrijgt over technische kwetsbaarheden in de informatiesystemen die u gebruikt, en dat u gepaste maatregelen treft. Dit omvat het monitoren van kwetsbaarheidsmeldingen van leveranciers, het toepassen van patches en het beoordelen van de blootstelling van uw systemen aan bekende kwetsbaarheden.

**Control 8.29 – Beveiligingstesten bij ontwikkeling en acceptatie.** Als uw organisatie software ontwikkelt of aanpast, verwacht de norm dat u beveiligingstesten uitvoert tijdens het ontwikkelproces en bij acceptatie.

Een penetratietest valt onder de geest van control 8.8: het is een actieve manier om te verifiëren of uw systemen kwetsbaar zijn voor bekende en onbekende aanvalstechnieken. De norm schrijft niet voor hoe often u dit doet of in welke vorm, maar verwacht wel dat u kunt aantonen dat u uw blootstelling aan kwetsbaarheden beoordeelt.

## Penetratietest versus kwetsbaarheidsscan: het verschil

Veel organisaties gebruiken de termen "pentest" en "kwetsbaarheidsscan" door elkaar. Ze zijn echter fundamenteel verschillend.

| Kenmerk | Kwetsbaarheidsscan | Penetratietest |
|---|---|---|
| Uitvoering | Geautomatiseerd | Handmatig + geautomatiseerd |
| Diepgang | Beperkt (bekende kwetsbaarheden) | Diep (exploitatie en ketenonderzoek) |
| Duur | Uren tot één dag | Dagen tot weken |
| Kosten | € 500–€ 3.000 | € 5.000–€ 30.000 |
| Uitvoerder | Tool (intern of extern) | Gecertificeerde ethisch hacker |
| Rapport | Lijst van bevindingen | Gedetailleerd rapport met risicoduiding |
| Frequentie | Maandelijks tot kwartaal | Jaarlijks of bij grote wijzigingen |

Een **kwetsbaarheidsscan** identificeert bekende kwetsbaarheden door systemen te vergelijken met databases van bekende lekken (zoals CVE-databases). Een penetratietest gaat verder: een ethisch hacker probeert actief in te breken, waarbij hij technieken combineert, kwetsbaarheden koppelt en zoekt naar onverwachte aanvalspaden die een geautomatiseerde scan mist.

Voor ISO 27001-doeleinden kan een kwetsbaarheidsscan in veel gevallen volstaan. Een penetratietest voegt waarde toe wanneer uw systemen complex zijn, wanneer klanten of contracten het eisen, of wanneer u een grondigere risicovalidatie wilt.

> **Tip:** Voer minimaal twee keer per jaar een kwetsbaarheidsscan uit op uw extern bereikbare systemen. Combineer dit met een jaarlijkse penetratietest als u webaplicaties beheert, klantdata verwerkt of ISO 27001 wilt certificeren met extra technisch bewijsmateriaal. De combinatie geeft u zowel breedte als diepgang.

## Wanneer is een pentest zinvol?

Er zijn specifieke situaties waarin een penetratietest extra waarde heeft, los van de ISO 27001-verplichting:

**Bij de voorbereiding op certificering.** Een pentest vóór de Stage 2-audit geeft u inzicht in technische kwetsbaarheden die u kunt oplossen vóórdat de auditor ze ziet. Bovendien is het rapport een krachtig bewijsstuk dat u technische risico's serieus beheert.

**Na significante infrastructuurwijzigingen.** Een nieuwe webapplicatie, migratie naar de cloud, een nieuw netwerksegment of een overname: elke grote wijziging kan nieuwe kwetsbaarheden introduceren. Een gerichte pentest na de wijziging geeft zekerheid.

**Wanneer klanten of contracten het eisen.** Steeds meer enterprise-klanten en aanbestedingen eisen een recent penetratieteerapport (niet ouder dan één of twee jaar) als onderdeel van hun leveranciersbeoordeling.

**Als aanvulling op uw risicoanalyse.** De pentestresultaten zijn directe input voor uw risicoregister: gevonden kwetsbaarheden vertaalt u naar risico's, die u vervolgens in uw behandelingsplan opneemt.

## Hoe verwerkt u pentestresultaten in uw ISMS?

Het pentestrapport levert bevindingen op die u systematisch moet verwerken. Een ad-hoc reactie volstaat niet — de ISO 27001-norm verwacht dat u bevindingen opvolgt via een gestructureerd verbeterproces.

**Stap 1: Classificeer de bevindingen.**
Pentestrapportages gebruiken doorgaans een risicoclassificatie: kritiek, hoog, gemiddeld, laag. Begin met de kritieke en hoge bevindingen.

**Stap 2: Voeg bevindingen toe aan uw risicoregister.**
Elke significante bevinding is een risico. Voeg het toe aan uw risicoregister met de juiste risicoclassificatie, een eigenaar en een behandelingsoptie (mitigeren, accepteren, overdragen).

**Stap 3: Stel verbeteracties op met een deadline.**
Voor elke bevinding die u wil mitigeren, stelt u een verbeteractie op: wat wordt er gedaan, wie is verantwoordelijk en wanneer moet het klaar zijn? Leg dit vast in uw ISMS-platform.

**Stap 4: Voer een hertest uit.**
Na implementatie van de verbeteracties voert u een gerichte hertest uit om te verifiëren dat de kwetsbaarheden daadwerkelijk zijn verholpen. Leg het resultaat van de hertest vast als bewijsstuk.

**Stap 5: Rapporteer aan de directie.**
De directiebeoordeling is het moment om de pentestresultaten en de opvolging te presenteren. Dit toont directiebetrokkenheid en sluit de PDCA-cyclus.

## Wat kost een penetratietest en hoe kiest u een leverancier?

De kosten van een penetratietest variëren sterk afhankelijk van scope, diepgang en de leverancier. Een indicatieve bandbreedte:

| Type test | Scope | Indicatieve kosten |
|---|---|---|
| Externe netwerkpentest | Extern bereikbare systemen | € 3.000–€ 8.000 |
| Webapplicatiepentest | 1 webapplicatie | € 5.000–€ 15.000 |
| Interne netwerkpentest | Intern netwerk | € 5.000–€ 20.000 |
| Volledige red team test | Breed, alle vectoren | € 15.000–€ 50.000+ |

Bij het kiezen van een penetratieteerbedrijf let u op de volgende criteria:

- Certificeringen van de testers (OSCP, CEH, CREST of vergelijkbaar)
- Ervaring met uw type omgeving (cloud, webapplicaties, industriële systemen)
- Kwaliteit van de rapportage: een goed rapport is leesbaar voor management én technisch uitvoerbaar
- Referenties in vergelijkbare sectoren of organisatieomvang
- Ondertekening van een geheimhoudingsovereenkomst vóór aanvang

## Veelgestelde vragen

**Is een penetratietest verplicht voor ISO 27001-certificering?**
Nee, een penetratietest is niet expliciet verplicht gesteld door de norm. De auditor verwacht wel dat u technische kwetsbaarheden beheert conform control 8.8. Hoe u dat aantoont, is aan u: een kwetsbaarheidsscan, een pentest of een combinatie. Een pentest levert het sterkste bewijs maar is geen harde eis.

**Hoe vaak moet ik een penetratietest uitvoeren?**
Er is geen wettelijke frequentie. De gangbare aanbeveling is een jaarlijkse penetratietest voor organisaties die webbased diensten aanbieden of klantdata verwerken, aangevuld met een gerichte test na elke significante infrastructuurwijziging. Leg de gekozen frequentie en motivatie vast in uw ISMS-beleid.

**Mogen medewerkers zelf een penetratietest uitvoeren?**
Technisch gezien wel, mits zij de benodigde expertise hebben. De waarde van een externe pentest ligt echter in de onpartijdigheid: een externe ethisch hacker kijkt zonder voorkennis van uw omgeving en identificeert blinde vlekken die interne medewerkers over het hoofd zien. Voor ISO 27001-doeleinden is een externe test aantoonbaar onafhankelijker en daarmee overtuigender als bewijsstuk.

---

Klaar om te starten? [Control One](/prijzen) begeleidt u door het volledige implementatieproces.
