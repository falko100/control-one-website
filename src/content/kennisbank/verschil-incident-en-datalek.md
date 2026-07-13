---
title: "Wat is het verschil tussen een beveiligingsincident en een datalek?"
description: "Elk datalek is een incident, maar niet elk incident is een datalek: de definities, de beslisboom en waarom het onderscheid bepaalt of je binnen 72 uur moet melden."
norm: "iso-27001"
categorie: "vragen"
tldr: "Een beveiligingsincident is elke gebeurtenis die de beveiliging van informatie daadwerkelijk schaadt of bedreigt (malware, verloren laptop, gehackt account); een datalek is de deelverzameling waarbij persoonsgegevens onbedoeld toegankelijk zijn geworden, verloren zijn gegaan of onrechtmatig zijn verwerkt. Het onderscheid bepaalt het vervolg: elk incident doorloopt het interne incidentproces, maar alleen bij een datalek start de AVG-klok: beoordelen, en waar meldplichtig binnen 72 uur melden bij de AP."
publishDate: 2026-07-17
readTime: "3 min"
keywords: ["incident of datalek", "beveiligingsincident", "datalek", "meldplicht"]
gerelateerd: ["wat-is-een-datalek", "datalek-melden-stappenplan", "annex-a-5-25-beoordeling-van-gebeurtenissen"]
faq:
  - vraag: "Is een gehackt e-mailaccount altijd een datalek?"
    antwoord: "Vrijwel altijd: een mailbox bevat per definitie persoonsgegevens (namen, adressen, correspondentie), en ongeautoriseerde toegang daartoe is een inbreuk. De vervolgvraag is of hij meldplichtig is: waarschijnlijk wel, tenzij je kunt aantonen dat de toegang geen risico voor betrokkenen opleverde, en die aantoonbaarheid vereist logging van wat de aanvaller kon zien."
  - vraag: "Moet je ook incidenten zonder datalek registreren?"
    antwoord: "Ja, om twee redenen: ISO 27001 eist registratie en evaluatie van álle incidenten (5.26, 5.27), en de AVG eist dat je ook níet-gemelde datalekken intern documenteert met de afweging waarom niet gemeld is. Eén register met per incident de datalek-beoordeling dekt beide plichten."
---

De begrippen lopen in de praktijk door elkaar, maar het onderscheid heeft een harde consequentie: bij het ene heb je een intern proces, bij het andere ook een wettelijke klok van 72 uur.

## De definities

Een **beveiligingsincident** is elke gebeurtenis die de vertrouwelijkheid, integriteit of beschikbaarheid van informatie daadwerkelijk schaadt of ernstig bedreigt: een ransomware-besmetting, een gehackt account, een verloren laptop, een verkeerd geadresseerde mail, maar ook een stroomstoring die systemen platlegt. Een **datalek** (formeel: inbreuk in verband met persoonsgegevens) is het deel daarvan waarbij persoonsgegevens in het spel zijn: ze zijn toegankelijk geworden voor onbevoegden, verloren gegaan zonder back-up, of onrechtmatig verwerkt.

De verhouding: elk datalek is een beveiligingsincident, maar een DDoS-aanval op je website zonder klantdata, of een besmette machine zonder toegang tot persoonsgegevens, is een incident zónder datalek.

## De beslisboom in drie vragen

1. **Is er een incident?** Dan start het interne proces: beheersen, onderzoeken, herstellen (ISO 27001, 5.24 tot en met 5.26).
2. **Zijn er persoonsgegevens geraakt of mogelijk geraakt?** Zo ja: het is (mogelijk) een datalek, en de 72-uursklok voor de beoordeling loopt vanaf het moment van ontdekking.
3. **Is het meldplichtig?** Melden bij de AP tenzij het onwaarschijnlijk is dat het lek een risico voor betrokkenen oplevert (een versleutelde laptop zonder compromitteerbare sleutel is het klassieke niet-meldplichtige voorbeeld); bij waarschijnlijk hoog risico ook de betrokkenen zelf informeren.

## Zo regel je het in één proces

Maak de datalek-check een verplichte stap in de incident-triage (5.25): bij élk incident expliciet de vraag "persoonsgegevens geraakt?", met vastgelegde conclusie. Eén register dekt dan drie plichten tegelijk: de ISO-registratie, de AVG-documentatieplicht (ook voor niet-gemelde lekken) en het bewijsdossier als de AP of een klant later vragen stelt. De valkuil is organisatorisch: het incident ligt bij IT, de meldplicht bij privacy, en tussen die twee valt de 72-uurstermijn; de gecombineerde triagestap dicht precies dat gat.
