---
title: "Annex A 8.6: Capaciteitsbeheer"
description: "Maatregel 8.6 van ISO 27001 Annex A eist monitoring en planning van capaciteit: opslag, rekenkracht, netwerk en mensen. Zo voorkom je uitval door volgelopen systemen."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.6 eist dat het gebruik van middelen wordt gemonitord en afgestemd op huidige en verwachte capaciteitsbehoeften: opslag die volloopt, systemen die traag worden, licenties die opraken en ook menselijke capaciteit. Praktisch: bewaking met alarmering op de kritieke middelen (schijfruimte, mailbox-limieten, back-upopslag) en capaciteit als vast punt bij wijzigingen en groei."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.6", "capaciteitsbeheer", "capacity management", "monitoring", "iso 27001"]
gerelateerd: ["annex-a-8-16-monitoringactiviteiten", "annex-a-5-30-ict-gereedheid-bedrijfscontinuiteit", "wat-is-annex-a"]
faq:
  - vraag: "Waarom staat capaciteitsbeheer in een beveiligingsnorm?"
    antwoord: "Capaciteitsgebrek raakt de beschikbaarheid, een van de drie pijlers van informatiebeveiliging: een volgelopen schijf legt systemen plat, een volle back-upopslag betekent stilletjes geen back-ups meer, en overbelaste systemen gedragen zich onvoorspelbaar. Veel 'storingen' zijn capaciteitsproblemen met aankondiging."
  - vraag: "Wat is de minimale invulling voor een cloud-first MKB?"
    antwoord: "Alarmering op opslaglimieten (bestandsomgeving, mailboxen, back-upopslag), zicht op licentie- en abonnementsgrenzen, en de vraag 'kan de omgeving dit aan' als vast punt bij groei en nieuwe initiatieven. De cloud schaalt veel automatisch, maar limieten en kosten schalen mee."
---

Annex A-maatregel 8.6 van ISO 27001, "Capacity management", voorkomt de meest voorspelbare uitval die er is: het systeem dat langzaam volloopt terwijl iedereen het kan zien aankomen, tot het op een maandagochtend niet meer werkt.

## Wat eist de maatregel?

Het gebruik van middelen wordt gemonitord en afgestemd op de huidige en verwachte capaciteitsbehoefte. Dat omvat ICT-middelen (opslag, rekenkracht, netwerk), maar ook faciliteiten en mensen. Capaciteitsplanning kijkt vooruit: groei, nieuwe systemen en piekmomenten worden meegenomen, en er zijn afspraken over wat er gebeurt als grenzen naderen.

## Zo vul je hem in

1. **Bewaak de kritieke limieten**: alarmering vóór het vol is (bijvoorbeeld bij 80 procent) op schijfruimte, back-upopslag, mailboxen en database-groottes; in cloudomgevingen via de ingebouwde monitoring.
2. **Kijk vooruit bij verandering**: nieuwe systemen, extra medewerkers en projecten krijgen de capaciteitsvraag in het wijzigingsproces (8.32): opslag, licenties, verbinding, en wie het beheert.
3. **Plan de menselijke kant**: één beheerder zonder vervanging is ook een capaciteitsrisico (sluit aan op 5.37 en de continuïteitsplanning).
4. **Ruim op**: archiveer en verwijder volgens de bewaartermijnen (5.33, 8.10); opruimen is de goedkoopste capaciteitsuitbreiding.

## Waar let de auditor op?

De auditor vraagt hoe je merkt dat opslag of systemen vollopen vóórdat gebruikers het merken. Eén blik op een monitoringdashboard met ingestelde drempels beantwoordt het. De klassieke bevinding: de back-up die al weken faalde omdat de opslag vol was, en niemand die het zag; dat raakt meteen ook 8.13.
