---
title: "Annex A 7.8: Plaatsing en bescherming van apparatuur"
description: "Maatregel 7.8 van ISO 27001 Annex A eist dat apparatuur veilig geplaatst en beschermd wordt tegen omgevingsrisico's en ongeautoriseerde toegang. Zo pak je het aan."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 7.8 eist dat apparatuur veilig wordt geplaatst en beschermd: weg van publiek bereik en meekijkende ogen, beschermd tegen omgevingsrisico's (warmte, vocht, stof, stroomproblemen) en met beheersing van eten en drinken in de buurt van kritieke apparatuur. Van serverruimte tot de netwerkswitch in de meterkast: plaatsing bepaalt het risico."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 7.8", "plaatsing apparatuur", "bescherming apparatuur", "iso 27001"]
gerelateerd: ["annex-a-7-5-fysieke-en-omgevingsdreigingen", "annex-a-7-11-ondersteunende-nutsvoorzieningen", "annex-a-7-1-fysieke-beveiligingszones"]
faq:
  - vraag: "Waar moet je op letten bij de plaatsing van netwerkapparatuur?"
    antwoord: "Switches, routers en access points horen in de beperkte zone of ten minste in een afgesloten kast, niet los in een publieke gang of open meterkast. Vrije netwerkpoorten in publieke ruimtes zijn een klassiek risico: iemand prikt zo op je interne netwerk."
  - vraag: "Wat zijn de omgevingseisen voor een kleine serverruimte?"
    antwoord: "Voldoende koeling (temperatuurbewaking met alarmering is goedkoop en voorkomt stille uitval), geen waterleidingen erboven, stofarm, en apparatuur in een rack in plaats van op de vloer. Voor een enkele patchkast volstaat ventilatie en een slot."
---

Annex A-maatregel 7.8 van ISO 27001, "Equipment siting and protection", gaat over de vraag wáár je apparatuur neerzet en hoe je haar daar beschermt: veel apparatuurincidenten zijn plaatsingsfouten met vertraging.

## Wat eist de maatregel?

Apparatuur wordt veilig geplaatst en beschermd om risico's van omgevingsdreigingen en ongeautoriseerde toegang te verminderen: gevoelige apparatuur weg van publiek bereik, bescherming tegen fysieke en omgevingsinvloeden (temperatuur, vocht, stof, trillingen, elektromagnetisme), beheersing van eten en drinken nabij kritieke apparatuur, en aandacht voor meekijken bij schermen die gevoelige informatie tonen.

## Zo vul je hem in

1. **Plaats naar zone**: servers en netwerkapparatuur in de beperkte zone of een afgesloten kast; niets kritieks in publieke ruimtes, gangen of open meterkasten.
2. **Beheers het klimaat**: koeling met temperatuurbewaking en alarmering in de apparatuurruimte; geen apparatuur direct op de vloer of onder waterleidingen (sluit aan op 7.5).
3. **Let op de kleine apparatuur**: schermen niet leesbaar vanaf straat of receptie (7.3), geen vrije netwerkpoorten in publieke ruimtes, en presentatie- en vergaderapparatuur zonder achterblijvende gegevens.
4. **Documenteer de standaard**: een korte plaatsingsrichtlijn voorkomt dat de volgende verbouwing of uitbreiding het opnieuw fout doet.

## Waar let de auditor op?

De rondgang wijst het uit: de switch in de openbare hal, de server onder het aanrecht van de pantry, de temperatuur in de apparatuurruimte richting de dertig graden zonder dat iemand het weet. Simpele bewaking (een temperatuursensor met melding) en een afgesloten kast wegen hier zwaarder dan dikke documenten.
