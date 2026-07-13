---
title: "Een verwerkingsregister opstellen in 5 stappen"
description: "Zo stel je het AVG-verplichte verwerkingsregister op: welke verwerkingen, welke kolommen, waar haal je de informatie vandaan en hoe houd je het actueel."
norm: "iso-27001"
categorie: "sjablonen"
tldr: "Het verwerkingsregister is het AVG-verplichte overzicht van alle verwerkingen van persoonsgegevens: per verwerking het doel, de grondslag, de categorieën gegevens en betrokkenen, de ontvangers, eventuele doorgifte buiten de EU, de bewaartermijn en de beveiligingsmaatregelen. Stel het op in 5 stappen: verwerkingen inventariseren per afdeling, de verplichte kolommen invullen, grondslagen en bewaartermijnen bepalen, koppelen aan verwerkers en hun overeenkomsten, en het onderhoud beleggen. Voor het MKB: 15 tot 40 regels."
publishDate: 2026-07-15
readTime: "5 min"
keywords: ["verwerkingsregister", "avg", "register van verwerkingsactiviteiten", "privacy"]
gerelateerd: ["annex-a-5-34-privacy-en-persoonsgegevens", "wat-is-een-verwerkersovereenkomst", "wat-is-een-datalek"]
faq:
  - vraag: "Is een verwerkingsregister verplicht voor kleine bedrijven?"
    antwoord: "Vrijwel altijd: de uitzondering voor organisaties onder de 250 medewerkers vervalt zodra de verwerking niet-incidenteel is, en personeels- en klantenadministratie zijn per definitie structureel. Praktisch heeft dus elke werkgever en elk bedrijf met klanten een register nodig; de AP kan erom vragen."
  - vraag: "Welke verwerkingen vergeten organisaties het vaakst?"
    antwoord: "Sollicitatiegegevens (met korte bewaartermijn: 4 weken, of 1 jaar met toestemming), cameratoezicht, website-analytics en marketingcookies, de nieuwsbrief, logging met herleidbare gegevens, zieke-medewerkergegevens (extra streng), en de verwerkingen die in schaduw-IT-tools plaatsvinden. Loop ook de SaaS-lijst uit het leveranciersregister langs."
---

Het verwerkingsregister (formeel: register van verwerkingsactiviteiten, AVG artikel 30) is de inventaris van alle persoonsgegevens die de organisatie verwerkt. Het is verplicht, de Autoriteit Persoonsgegevens kan erom vragen, en het is tegelijk het fundament onder elke andere privacymaatregel: wat je niet in beeld hebt, kun je niet beschermen, niet opschonen en niet verantwoorden.

## Stap 1: Inventariseer per afdeling of proces

Loop de organisatie langs met één vraag: waar worden gegevens over personen gebruikt? HR (personeelsdossiers, salaris, verzuim, sollicitanten), sales en marketing (CRM, nieuwsbrief, website), operatie (klantgegevens in projecten en systemen), finance (facturen, incasso) en facilitair (cameratoezicht, toegangsregistratie). De SaaS-lijst uit het leveranciersregister (Annex A 5.19) is een goudmijn: elke tool met persoonsgegevens is minstens één registerregel.

## Stap 2: Vul per verwerking de verplichte kolommen

Het register kent vaste kolommen: de naam en het **doel** van de verwerking, de **categorieën betrokkenen** (medewerkers, klanten, sollicitanten) en **categorieën gegevens** (NAW, financieel, gezondheid), de **ontvangers** (interne afdelingen, verwerkers, instanties), eventuele **doorgifte buiten de EU** met de waarborg, de **bewaartermijn** en een verwijzing naar de **beveiligingsmaatregelen**. Eén regel per verwerking; een spreadsheet of de portal-module volstaat.

## Stap 3: Bepaal grondslag en bewaartermijn

Ken per verwerking de AVG-grondslag toe: overeenkomst (klant- en personeelsadministratie), wettelijke plicht (fiscale bewaarplicht, loonadministratie), gerechtvaardigd belang (beperkte marketing, camerabewaking, met vastgelegde afweging) of toestemming (nieuwsbrief, sollicitanten langer bewaren). Koppel de bewaartermijnen aan de tabel van Annex A 5.33: fiscaal 7 jaar, sollicitaties 4 weken, personeelsdossier 2 jaar na uitdienst, en verwijder wat over de termijn is (8.10).

## Stap 4: Koppel verwerkers en overeenkomsten

Markeer per verwerking welke externe partijen erbij betrokken zijn en controleer dat er met elk van hen een verwerkersovereenkomst ligt. Deze kruising (register maal leveranciers maal overeenkomsten) is precies wat zowel de AP als de ISO-auditor controleert; elke verwerker zonder overeenkomst is een dubbele bevinding.

## Stap 5: Beleg het onderhoud

Wijs een eigenaar aan (de privacyverantwoordelijke of KAM-coördinator), en veranker de actualisatie: nieuwe tools en processen gaan via het project- en inkoopproces (5.8, 5.23) langs het register, en een jaarlijkse review vangt de rest. Een register uit 2023 met de tools van toen is bijna erger dan geen register: het toont dat het proces niet leeft.
