---
title: "Wat is een DPIA?"
description: "Een DPIA is de verplichte privacy-risicobeoordeling bij verwerkingen met hoog risico. Wanneer moet je er een uitvoeren, wat staat erin en hoe pak je hem aan?"
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een DPIA (Data Protection Impact Assessment, gegevensbeschermingseffectbeoordeling) is de risicobeoordeling die de AVG verplicht stelt vóór verwerkingen met een waarschijnlijk hoog privacyrisico: grootschalige verwerking van bijzondere gegevens, systematische monitoring, profilering met rechtsgevolgen. De inhoud: een beschrijving van de verwerking, de noodzaak- en proportionaliteitstoets, de risico's voor betrokkenen en de maatregelen. Blijft er een hoog restrisico, dan is voorafgaande raadpleging van de AP verplicht."
publishDate: 2026-07-16
readTime: "4 min"
keywords: ["dpia", "gegevensbeschermingseffectbeoordeling", "avg", "privacyrisico"]
gerelateerd: ["annex-a-5-34-privacy-en-persoonsgegevens", "verwerkingsregister-opstellen", "wat-is-een-verwerkersovereenkomst"]
faq:
  - vraag: "Wanneer is een DPIA verplicht?"
    antwoord: "Bij een waarschijnlijk hoog risico voor betrokkenen. De AVG noemt drie gevallen (systematische en uitgebreide profilering met rechtsgevolgen, grootschalige verwerking van bijzondere gegevens, stelselmatige grootschalige monitoring van openbare ruimte) en de AP publiceert een lijst met zeventien verwerkingssoorten waarvoor een DPIA in Nederland altijd verplicht is, waaronder cameratoezicht met slimme functies, grootschalige gezondheidsgegevens, personeel-volgsystemen en zwarte lijsten."
  - vraag: "Wie voert de DPIA uit?"
    antwoord: "De verwerkingsverantwoordelijke is verantwoordelijk; praktisch voert de privacyverantwoordelijke of projectleider hem uit met input van IT, de business en waar aanwezig de FG (wiens advies verplicht gevraagd moet worden). Betrek waar passend ook de mening van betrokkenen of hun vertegenwoordigers."
---

Een DPIA is nadenken vóór het bouwen, verplicht gemaakt: een gestructureerde beoordeling van de privacyrisico's van een voorgenomen verwerking, uitgevoerd vóórdat die start. Het is de privacy-evenknie van de risicoanalyse die elk managementsysteem al kent.

## Wanneer moet het?

De trigger is een "waarschijnlijk hoog risico" voor de rechten en vrijheden van betrokkenen. Denk aan: nieuwe technologie op persoonsgegevens (AI-toepassingen, slimme camera's), grootschalige of stelselmatige monitoring (personeelsvolgsystemen, track-and-trace), grootschalige verwerking van bijzondere of gevoelige gegevens (gezondheid, financiën van kwetsbare groepen), profilering met gevolgen, en het koppelen van datasets. De Autoriteit Persoonsgegevens publiceert een verplichte-DPIA-lijst met zeventien categorieën; check die bij elk nieuw initiatief dat persoonsgegevens raakt.

## Wat staat erin?

De AVG schrijft vier onderdelen voor:

1. **Systematische beschrijving** van de verwerking: doel, gegevens, betrokkenen, ontvangers, bewaartermijnen, systemen en de rol van eventuele verwerkers.
2. **Noodzaak en proportionaliteit**: is het doel legitiem, zijn de gegevens nodig (dataminimalisatie), en kan het minder ingrijpend?
3. **Risicobeoordeling** vanuit de betrokkene: wat kan er misgaan (lek, misbruik, discriminatie, uitsluiting, chilling effects) en hoe erg is dat voor de mensen om wie het gaat, niet primair voor de organisatie.
4. **Maatregelen**: de technische en organisatorische maatregelen die de risico's beperken: minimalisatie, pseudonimisering, toegangsbeperking, transparantie, bezwaarmogelijkheden.

Blijft er ondanks de maatregelen een hoog restrisico, dan moet de AP vooraf worden geraadpleegd; in de praktijk is dat zeldzaam, omdat de DPIA meestal tot aanpassingen leidt die het risico beheersbaar maken. En dat is precies de bedoeling.

## De koppeling met het ISMS

Binnen een ISO 27001-systeem is de DPIA de verdieping van maatregel 5.34 en het projectproces (5.8): het beveiligingsvraagstuk bij nieuwe initiatieven krijgt er de privacy-invalshoek naast. Praktisch: neem de DPIA-triggervraag ("hoog risico? AP-lijst?") op in de projectchecklist, gebruik één vast sjabloon, en registreer uitgevoerde DPIA's bij het verwerkingsregister; ook een korte, gedocumenteerde conclusie "geen DPIA nodig omdat..." is bij twijfelgevallen goud waard richting toezichthouder.
