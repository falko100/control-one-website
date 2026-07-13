---
title: "Annex A 8.16: Monitoringactiviteiten"
description: "Maatregel 8.16 van ISO 27001 Annex A eist monitoring van netwerken en systemen op afwijkend gedrag en opvolging van signalen. Proportionele detectie voor het MKB."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.16, nieuw in de 2022-versie, eist dat netwerken, systemen en applicaties worden gemonitord op afwijkend gedrag en dat passende actie volgt bij mogelijke incidenten: detectie is de aanvulling op preventie. MKB-invulling: de ingebouwde detectie van EDR en cloudplatforms (risicomeldingen, onmogelijke reislocaties) actief gebruiken, alerts naar een bemande mailbox of partner, en een afgesproken opvolgroutine."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.16", "monitoring", "detectie", "siem", "iso 27001"]
gerelateerd: ["annex-a-8-15-logging", "annex-a-5-25-beoordeling-van-gebeurtenissen", "annex-a-8-7-bescherming-tegen-malware"]
faq:
  - vraag: "Is een SIEM of SOC verplicht voor ISO 27001?"
    antwoord: "Nee. De maatregel eist monitoring die past bij het risico. Voor het MKB volstaat vaak: de detectie van EDR en identiteitsprovider goed geconfigureerd, alerts die bij een mens aankomen, en een opvolgafspraak. Een uitbesteed SOC of beheerde detectiedienst is de volgende stap voor wie hogere eisen of NIS2-verplichtingen heeft."
  - vraag: "Wat monitor je minimaal?"
    antwoord: "Inloggedrag (onmogelijke locaties, MFA-omzeilingen, brute force), EDR-detecties, wijzigingen in beheerrechten en doorstuurregels op mailboxen, back-upstatus en de beschikbaarheid van kritische systemen. Dit zijn de signalen waarmee echte aanvallen vroeg zichtbaar worden."
---

Annex A-maatregel 8.16 van ISO 27001, "Monitoring activities", is nieuw in de 2022-versie en erkent dat preventie nooit volledig is: het verschil tussen een klein en een groot incident is hoe snel je het ziet.

## Wat eist de maatregel?

Netwerken, systemen en applicaties worden gemonitord op afwijkend gedrag, en passende acties worden genomen om potentiële incidenten te evalueren. De monitoring past bij het risicoprofiel: inkomend en uitgaand verkeer, toegang tot systemen, gedrag van gebruikers en beheerders, en de status van beveiligingsvoorzieningen.

## Zo vul je hem in

1. **Activeer wat je al hebt**: de risicodetectie van de identiteitsprovider (verdachte inlogs, onmogelijke reizen), EDR-alerts, mailbox-regels-detectie en back-upbewaking; veel staat uit of ongelezen terwijl de licentie het biedt.
2. **Zorg dat alerts landen**: meldingen naar een bemande plek (gedeelde mailbox, kanaal of beheerpartner) met een afspraak over reactietijden, ook rond vakanties.
3. **Definieer de opvolging**: een alert is een gebeurtenis die de triage van 5.25 ingaat; leg de routine vast en registreer de behandeling.
4. **Schaal naar risico**: groei, NIS2-plichten of eerdere incidenten rechtvaardigen de stap naar een beheerde detectiedienst of SOC; leg de afweging vast.

## Waar let de auditor op?

De auditor vraagt: "hoe zou je merken dat een account is overgenomen?" en wil dan de detectie, de alertroute en een voorbeeld van een behandelde melding zien. De klassieke bevinding: dashboards vol rode meldingen waar al maanden niemand naar kijkt; dat is erger dan geen monitoring, want het bewijst dat het proces niet werkt.
