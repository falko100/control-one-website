---
title: "AI-tools en ISO 27001: hoe ga je er veilig mee om?"
description: "ChatGPT en andere AI-tools op de werkvloer raken je ISMS: welke Annex A-maatregelen van toepassing zijn, de risico's en een werkbaar AI-gebruiksbeleid in 5 punten."
norm: "iso-27001"
categorie: "vragen"
tldr: "AI-tools vallen gewoon onder je bestaande ISMS: het zijn clouddiensten (Annex A 5.23) met datalek-risico's (vertrouwelijke informatie in prompts), leveranciersvragen (waar gaat de data heen, wordt erop getraind?) en output-risico's (fouten, auteursrecht). De werkbare aanpak: bied een goedgekeurd zakelijk alternatief, verbied vertrouwelijke data in niet-goedgekeurde tools via het gebruiksreglement, beoordeel AI-diensten via de normale leveranciersroute, en behandel AI-output als concept dat een mens controleert. De EU AI-verordening voegt voor de meeste MKB-toepassingen vooral transparantie-eisen toe."
publishDate: 2026-07-18
readTime: "4 min"
keywords: ["ai en iso 27001", "chatgpt zakelijk", "ai-beleid", "ai-tools beveiliging"]
gerelateerd: ["annex-a-5-23-clouddiensten", "gebruiksreglement-opstellen", "wat-is-shadow-it"]
faq:
  - vraag: "Mag je klantdata in ChatGPT plakken?"
    antwoord: "In de gratis consumentenversies: nee; prompts kunnen voor training worden gebruikt en er is geen verwerkersovereenkomst, dus het is feitelijk een datalek in wording en bij persoonsgegevens een AVG-overtreding. In zakelijke varianten (met verwerkersovereenkomst, geen training op jouw data, EU-datalocatie waar nodig) kan het binnen de afspraken die je met de leverancier maakt, net als bij elke andere clouddienst."
  - vraag: "Moet AI in de risicoanalyse en de Verklaring van Toepasselijkheid?"
    antwoord: "In de risicoanalyse: ja, zodra AI-tools structureel worden gebruikt (het risico 'vertrouwelijke informatie in externe AI-diensten' hoort erin, met de maatregelen). Een aparte VvT-regel is niet nodig: de bestaande maatregelen (5.10, 5.14, 5.23, 8.12) dekken AI; het is een nieuwe verschijningsvorm, geen nieuw maatregelgebied."
---

De vraag komt in elke moderne ISO 27001-audit: "en wat doen jullie met AI-tools?" Het goede nieuws: je hebt er al een systeem voor. AI-diensten zijn clouddiensten met een paar bijzondere trekken, en het ISMS dat je hebt, weet daar raad mee.

## De drie echte risico's

1. **Data in de prompt**: medewerkers plakken klantgegevens, code of contracten in publieke AI-tools; bij gratis diensten zonder afspraken is dat informatieoverdracht aan een derde (en bij persoonsgegevens een AVG-kwestie). Dit is verreweg het grootste en meest voorkomende risico, en het is een shadow-IT-probleem in nieuwe verpakking.
2. **De leverancierskant**: waar staat de data, wordt erop getraind, wie kan erbij, is er een verwerkersovereenkomst? Dezelfde vragen als bij elke SaaS-dienst (5.23), met training-op-jouw-data als extra uitsluitingseis.
3. **De output**: AI-antwoorden zijn overtuigend maar soms fout, verouderd of (bij code) onveilig; ongecontroleerd overnemen raakt kwaliteit en beveiliging (8.28 stelt review van AI-code al verplicht in de ontwikkelhoek).

## Het werkbare beleid in vijf punten

1. **Bied het goede alternatief**: een goedgekeurde zakelijke AI-dienst (met contract, zonder training op jouw data) kanaliseert het gebruik; verbieden zonder alternatief drijft het naar privé-accounts.
2. **Eén heldere gedragsregel** in het gebruiksreglement (5.10): geen vertrouwelijke informatie of persoonsgegevens in niet-goedgekeurde AI-tools, en verwijs naar de actuele lijst met goedgekeurde diensten.
3. **Beoordeel via de normale route**: nieuwe AI-diensten langs de cloudcriteria van 5.23 plus de AI-specifieke vragen (training, retentie, datalocatie), verwerkersovereenkomst waar persoonsgegevens meegaan.
4. **Mens controleert output**: AI-uitvoer is concept; voor code geldt de review-eis van 8.28, voor klantuitingen de gewone vrijgavelogica.
5. **Neem het mee in awareness** (6.3): het prompt-risico is een gedragsrisico, en één goed voorbeeld ("deze prompt was een datalek") beklijft.

## En de AI-verordening?

De EU AI-verordening reguleert vooral aanbieders en hoog-risicotoepassingen (biometrie, HR-selectie, kredietbeoordeling); voor het gemiddelde MKB-gebruik (tekst, code, analyse) komt het neer op transparantie en menselijke controle, plus AI-geletterdheid van medewerkers. Wie AI inzet ín zijn producten of voor personeelsbeslissingen, moet dieper kijken; voor de rest geldt: het ISMS dekt het, mits je de vijf punten hierboven echt inricht.
