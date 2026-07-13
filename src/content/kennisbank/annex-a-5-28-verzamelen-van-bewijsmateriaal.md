---
title: "Annex A 5.28: Verzamelen van bewijsmateriaal"
description: "Maatregel 5.28 van ISO 27001 Annex A eist procedures voor het identificeren, verzamelen en bewaren van bewijs bij incidenten. Forensische basics voor het MKB."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.28 eist procedures voor het identificeren, verzamelen, verwerven en bewaren van bewijsmateriaal rond beveiligingsincidenten, zodanig dat het bruikbaar blijft voor disciplinaire of juridische stappen. Kernregels: niets weggooien of overschrijven tijdens een incident, logs en beelden direct veiligstellen, vastleggen wie wat wanneer heeft veiliggesteld, en bij ernstige zaken forensische specialisten inschakelen vóór je zelf gaat rommelen."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 5.28", "bewijsmateriaal", "forensisch", "chain of custody", "iso 27001"]
gerelateerd: ["annex-a-5-26-reageren-op-incidenten", "annex-a-5-24-incidentbeheer-planning", "datalek-melden-stappenplan"]
faq:
  - vraag: "Waarom is bewijs verzamelen belangrijk als je geen rechtszaak verwacht?"
    antwoord: "Je weet bij de start van een incident niet waar het eindigt: een ontslagzaak, een verzekeringsclaim, aangifte of een AP-onderzoek kunnen maanden later bewijs vereisen. Ook voor de eigen oorzaaksanalyse zijn originele logs onmisbaar. Wat in het eerste uur wordt gewist, komt nooit meer terug."
  - vraag: "Wat is chain of custody?"
    antwoord: "De gedocumenteerde keten van wie het bewijs wanneer heeft veiliggesteld, waar het is bewaard en wie er toegang toe had. Zonder die keten kan de betrouwbaarheid van bewijs later worden betwist."
---

Annex A-maatregel 5.28 van ISO 27001, "Collection of evidence", zorgt dat een organisatie bij een serieus incident bewijs veiligstelt in plaats van vernietigt. In de haast om te herstellen wordt cruciaal bewijs vaak in het eerste uur overschreven.

## Wat eist de maatregel?

Procedures voor het identificeren, verzamelen en bewaren van bewijsmateriaal, rekening houdend met de eisen die disciplinaire en juridische procedures eraan stellen: integriteit (aantoonbaar ongewijzigd), herkomst en een gedocumenteerde bewaarketen.

## Zo vul je hem in

1. **Maak bewijs een vaste responsstap**: vóór het opschonen en herstellen eerst veiligstellen: relevante logbestanden exporteren, schermafbeeldingen en mails bewaren, betrokken apparaten niet wissen maar apart zetten.
2. **Documenteer de keten**: wie stelde wat wanneer veilig, waar staat het, wie kan erbij. Een eenvoudig formulier of logboekvermelding volstaat.
3. **Ken je grenzen**: bij mogelijke rechtszaken, ransomware of interne fraude schakel je forensische specialisten in vóórdat je zelf op systemen werkt; goedbedoeld eigen onderzoek kan bewijs onbruikbaar maken.
4. **Borg de bewaartermijn**: incidentdossiers met bewijs bewaren zolang procedures kunnen lopen; stem de termijn af met juridisch advies.

## Waar let de auditor op?

De auditor toetst of de procedure bestaat en of het incidentteam de kernregels kent: wat stel je veilig, wat raak je niet aan, wie bel je bij een ernstig geval. Voor het MKB wordt geen forensisch lab verwacht; wel het besef dat herstellen zonder eerst veilig te stellen een onomkeerbare fout is.
