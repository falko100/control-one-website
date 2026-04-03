---
title: 'ISO 27001 en clouddiensten: hoe werkt het?'
description: "Microsoft 365, AWS, Azure — hoe verwerkt u clouddiensten in uw ISMS en wie is verantwoordelijk?"
publishDate: 2026-04-19
category: 'ISO 27001'
readTime: '7 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
imageAlt: 'ISO 27001 en clouddiensten: hoe werkt het? — Control One'
keywords:
  - 'ISO 27001 cloud'
  - 'clouddiensten ISMS'
  - 'Microsoft 365 ISO 27001'
  - 'cloudbeveiliging informatiebeveiliging'
draft: false
---

Bijna elk MKB-bedrijf maakt gebruik van clouddiensten: e-mail via Microsoft 365, bestandsopslag in Google Drive, infrastructuur op AWS of Azure. Tegelijk stelt **ISO 27001** heldere eisen aan hoe u informatie beveiligt — ook als die informatie buiten uw eigen servers staat. De vraag die veel organisaties bezighoudt: wie is er verantwoordelijk voor de beveiliging, en hoe verwerkt u clouddiensten correct in uw **Information Security Management System (ISMS)**?

In dit artikel leest u hoe u clouddiensten structureel aanpakt binnen uw ISO 27001-traject, welke controls van toepassing zijn en waar u praktisch moet beginnen.

## Wat verandert er als u clouddiensten gebruikt?

Bij traditionele on-premise infrastructuur heeft uw organisatie volledige controle over hardware, software en netwerken. Bij cloud verschuift een deel van die controle naar de aanbieder. ISO 27001 maakt dit onderscheid expliciet via het **model van gedeelde verantwoordelijkheid**.

In dit model zijn taken verdeeld tussen u (de klant) en de cloudaanbieder. Wat de aanbieder regelt, verschilt per type dienst:

| Type dienst | Wat de aanbieder regelt | Wat u zelf regelt |
|---|---|---|
| IaaS (bijv. AWS EC2) | Fysieke hardware, datacenter | OS, applicaties, data, toegang |
| PaaS (bijv. Azure App Service) | Hardware, OS, platform | Applicaties, data, toegang |
| SaaS (bijv. Microsoft 365) | Hardware, OS, applicatie | Data, gebruikersbeheer, configuratie |

Het begrijpen van dit model is essentieel: u kunt uw aanbieder niet de schuld geven als u zelf verkeerde toegangsrechten heeft ingesteld of geen MFA heeft ingeschakeld.

## Hoe past cloud in uw ISMS?

Uw **ISMS** moet de volledige scope van informatieverwerkende activiteiten dekken — inclusief clouddiensten. Dit betekent concreet:

### 1. Scope en context definiëren

Zorg dat uw ISMS-scope expliciet vermeldt welke clouddiensten in scope vallen. Denk aan Microsoft 365 voor communicatie en samenwerking, maar ook aan SaaS-tools voor boekhouding, CRM of projectbeheer. Elke dienst waarbij bedrijfsinformatie wordt verwerkt, valt in principe onder uw ISMS.

### 2. Risicoanalyse voor cloud

Voer een risicoanalyse uit per cloudoplossing. Stel uzelf vragen als:
- Wat voor soort data staat in deze dienst (persoonsgegevens, financiële data, intellectueel eigendom)?
- Wie heeft toegang en hoe is dat beheer ingericht?
- Wat zijn de gevolgen als de dienst uitvalt of data lekt?

### 3. Bewerkersovereenkomst en contractuele borging

ISO 27001 Annex A control **5.19 (Informatiebeveiliging in leveranciersrelaties)** vereist dat u afspraken maakt met leveranciers over informatiebeveiliging. Bij clouddiensten vertaalt zich dat in een **verwerkersovereenkomst** (verplicht onder AVG) en het controleren van de beveiligingsclausules in servicecontracten.

## Relevante Annex A controls voor cloud

ISO 27001:2022 bevat meerdere controls die direct op cloudgebruik betrekking hebben:

| Control | Onderwerp | Relevantie voor cloud |
|---|---|---|
| 5.19 | Informatiebeveiliging in leveranciersrelaties | Contracten met cloudaanbieders |
| 5.20 | Adressering van informatiebeveiliging binnen leveranciersovereenkomsten | SLA en beveiligingsclausules |
| 5.23 | Informatiebeveiliging voor het gebruik van clouddiensten | Specifiek voor cloud — nieuw in 2022 |
| 8.10 | Verwijdering van informatie | Data verwijderen bij einde contract |
| 8.11 | Datamaskering | Bescherming van gevoelige data in cloud |

Control **5.23** is nieuw in de ISO 27001:2022-versie en is specifiek gewijd aan clouddiensten. Dit laat zien hoe serieus de norm dit thema neemt. De control eist dat u beleid en procedures heeft voor het gebruik van cloud, inclusief een classificatieschema voor welke data wél en niet in de cloud mag.

> **Tip:** Maak een eenvoudig cloudregister: een lijst van alle cloudtools die uw medewerkers gebruiken, inclusief het type data dat daarin staat. U zult verrast zijn hoeveel 'schaduw-IT' er bestaat — tools die individuele medewerkers zelf hebben aangeschaft zonder formele toestemming.

## Microsoft 365, AWS en Azure: wat is al geregeld?

De grote cloudaanbieders nemen informatiebeveiliging serieus en beschikken zelf vaak over ISO 27001-certificering of andere relevante certificeringen (SOC 2, ISO 27017, ISO 27018). Dit betekent echter niet dat ú automatisch compliant bent.

**Microsoft 365** heeft uitgebreide beveiligingsfuncties, maar het is uw verantwoordelijkheid om:
- Multi-factor authenticatie (MFA) in te schakelen voor alle gebruikers
- Conditional Access-beleid in te stellen
- Dataclassificatie en -labels te configureren via Microsoft Purview
- Auditlogs te activeren en te bewaren

**AWS en Azure** bieden vergelijkbare mogelijkheden via hun respectievelijke beveiligingsdashboards (AWS Security Hub, Microsoft Defender for Cloud). Deze tools geven u inzicht in uw beveiligingshouding en helpen u afwijkingen snel te signaleren.

## Toegangsbeheer en identiteiten in de cloud

Een van de meest kritieke aandachtspunten bij cloud is **identiteits- en toegangsbeheer (IAM)**. Ongeoorloofde toegang via gestolen of zwakke wachtwoorden is verantwoordelijk voor een groot deel van de beveiligingsincidenten.

Praktische maatregelen conform ISO 27001:

- **MFA verplicht** voor alle cloudtoegang, minimaal voor beheerders
- **Least privilege principe**: geef gebruikers alleen de rechten die ze nodig hebben
- **Periodieke toegangsreviews**: controleer elk kwartaal wie toegang heeft tot wat
- **Offboarding procedure**: zorg dat accounts onmiddellijk worden uitgeschakeld bij vertrek medewerker

## Incident response bij cloudproblemen

Uw **incidentresponsplan** moet ook cloudscenario's omvatten. Wat doet u als Microsoft 365 een uur uitvalt? Wat als er een datalek is in uw CRM-systeem in de cloud? Definieer escalatiepaden, stel vast hoe u de cloudaanbieder bereikt in noodsituaties, en documenteer recovery procedures.

## Veelgestelde vragen

**Moet ik een eigen ISO 27001-certificaat hebben als mijn cloudaanbieder al gecertificeerd is?**
Ja. De certificering van uw leverancier dekt alleen zijn eigen omgeving. Uw eigen gebruik, configuratie en processen vallen daar niet onder. U heeft een eigen ISMS en eigen certificering nodig.

**Mag ik AVG-gevoelige data in de cloud opslaan?**
Ja, mits u een verwerkersovereenkomst heeft afgesloten, de data in de EER blijft (of er passende waarborgen zijn), en u passende technische maatregelen heeft genomen. Controleer altijd de dataresidentie-instellingen van uw cloudaanbieder.

**Hoe ga ik om met schaduw-IT?**
Begin met inventarisatie. Gebruik tools zoals Microsoft Defender for Cloud Apps om ongesanctioneerde cloudtoepassingen te detecteren. Stel daarna een formeel goedkeuringsproces in voor nieuwe cloudtools en communiceer dit naar alle medewerkers.

---

Wilt u uw clouddiensten correct integreren in een ISO 27001-waardig ISMS, zonder jarenlange consultantstrajecten? Bekijk hoe Control One u hierbij helpt via onze [prijzenpagina](/prijzen) en ontdek welk abonnement past bij uw organisatie.
