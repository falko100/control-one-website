---
title: "Annex A 8.13: Back-up van informatie"
description: "Maatregel 8.13 van ISO 27001 Annex A eist back-ups conform beleid, inclusief geteste terugzetprocedures. De 3-2-1-regel, cloudmisverstanden en hersteltests uitgelegd."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.13 eist dat back-ups van informatie, software en systemen worden bijgehouden en regelmatig getest volgens een vastgesteld back-upbeleid: dekking van alles wat ertoe doet (inclusief SaaS-data waarvoor de leverancier geen back-up garandeert), de 3-2-1-regel met een offline of onveranderbare kopie tegen ransomware, versleutelde opslag en aantoonbaar geslaagde hersteltests."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.13", "back-up", "3-2-1-regel", "hersteltest", "iso 27001"]
gerelateerd: ["annex-a-5-30-ict-gereedheid-bedrijfscontinuiteit", "annex-a-8-7-bescherming-tegen-malware", "annex-a-8-14-redundantie"]
faq:
  - vraag: "Maakt Microsoft of Google geen back-up van onze data?"
    antwoord: "Zij beschermen hun platform, niet jouw data tegen jouw fouten: verwijderde bestanden vallen na de prullenbaktermijn weg, en ransomware of een kwaadwillende beheerder versleutelt of wist ook de cloudkopie. De gedeelde verantwoordelijkheid (5.23) legt de back-up van eigen data bij de klant; een aparte SaaS-back-up is voor kritische data de standaard."
  - vraag: "Wat is de 3-2-1-regel?"
    antwoord: "Drie kopieën van de data, op twee verschillende soorten media, waarvan één op een andere locatie (en bij voorkeur offline of onveranderbaar). Die laatste kopie is de verzekering tegen ransomware die ook de gewone back-ups versleutelt."
---

Annex A-maatregel 8.13 van ISO 27001, "Information backup", is de maatregel die bepaalt of een ransomware-aanval, een menselijke fout of een leverancier die omvalt een ramp is of een vervelende week.

## Wat eist de maatregel?

Back-ups van informatie, software en systemen worden bijgehouden en regelmatig getest, in overeenstemming met een overeengekomen back-upbeleid: wat wordt geback-upt en hoe vaak (passend bij de RPO uit 5.30), waar staan de kopieën en hoe zijn ze beschermd, hoe lang worden ze bewaard, en hoe en wanneer wordt herstel getest.

## Zo vul je hem in

1. **Dek alles wat ertoe doet**: servers en databases, maar ook de SaaS-data (mail, documenten, CRM, de portal-data) waarvoor de leverancier geen klant-back-up garandeert; toets dat per dienst (5.23).
2. **Volg 3-2-1 met een ransomware-kopie**: minimaal één kopie offline of onveranderbaar (immutable), zodat een aanvaller met beheerrechten er niet bij kan.
3. **Versleutel en beperk toegang**: back-ups bevatten per definitie alles; behandel ze qua toegang en versleuteling als het gevoeligste systeem dat je hebt.
4. **Monitor en test**: dagelijkse bewaking dat back-ups slagen (mislukte back-ups zijn een incident), en periodieke hersteltests die de RTO/RPO aantonen (5.30); registreer de uitkomsten.

## Waar let de auditor op?

Twee vragen beslissen dit gebied: "laat het bewijs van de laatste geslaagde hersteltest zien" en "wat gebeurt er met jullie back-up bij ransomware met beheerrechten?" De klassieke bevindingen: back-ups die maanden stilletjes faalden, geen enkele hersteltest ooit, SaaS-data zonder eigen back-up, en alle kopieën online in hetzelfde domein als de productie.
