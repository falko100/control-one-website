---
title: "Wat is een supply chain-aanval?"
description: "Bij een supply chain-aanval kom je binnen via een vertrouwde leverancier: een besmette update, een gekaapte MSP of een kwaadaardig softwarepakket. Zo verklein je het risico."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Een supply chain-aanval (ketenaanval) misbruikt het vertrouwen in leveranciers: de aanvaller compromitteert een softwareleverancier, beheerpartij (MSP) of open-source-pakket, en bereikt via die ene bres in één klap alle klanten. Bekende patronen: besmette software-updates, gekaapte beheertoegang van IT-partners en kwaadaardige packages in open-source-ecosystemen. Verdediging: leveranciersbeheer met sub-verwerker-inzicht, minimale en gemonitorde leverancierstoegang, en dependency-beheer bij eigen softwareontwikkeling."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["supply chain aanval", "ketenaanval", "msp", "software supply chain"]
gerelateerd: ["annex-a-5-21-ict-toeleveringsketen", "annex-a-5-19-leveranciersrelaties", "annex-a-8-28-veilig-programmeren"]
faq:
  - vraag: "Waarom zijn ketenaanvallen zo effectief?"
    antwoord: "Ze omzeilen alle verdediging via de voordeur van het vertrouwen: een officiële update installeer je zelf, en je IT-partner hééft al beheerrechten. Bovendien schaalt het voor de aanvaller: één gecompromitteerde leverancier levert honderden tot duizenden slachtoffers, wat de investering in zo'n aanval loont."
  - vraag: "Wat kan een MKB-bedrijf hier realistisch tegen doen?"
    antwoord: "Drie dingen: eisen stellen aan de partijen met toegang of kritieke rol (certificering, MFA op hún toegang tot jouw omgeving, incidentmeldplicht), die toegang minimaal en gemonitord houden (aparte accounts, logging), en de eigen weerbaarheid: segmentatie, EDR en een offline back-up beperken de schade als het via de keten toch binnenkomt."
---

Een supply chain-aanval draait de logica van inbreken om: waarom de zwaar beveiligde voordeur forceren als je ook de sleutelleverancier kunt compromitteren? De aanvaller raakt één schakel in de keten, en bereikt daardoor alle organisaties die op die schakel vertrouwen.

## De drie hoofdvormen

1. **De besmette update**: de aanvaller dringt binnen bij een softwareleverancier en verstopt kwaadaardige code in een officiële update, die klanten vervolgens zelf installeren, ondertekend en al. De beruchtste incidenten van het afgelopen decennium volgden dit patroon.
2. **De gekaapte beheerder**: managed service providers en IT-partners hebben beheertoegang tot tientallen klantomgevingen; wie de MSP compromitteert, heeft ze allemaal. Ransomware-groepen richten zich hier gericht op.
3. **Het vergiftigde pakket**: bij eigen softwareontwikkeling: kwaadaardige of gekaapte open-source-packages, typosquatting (een pakket dat één letter verschilt van het echte) en gecompromitteerde build-omgevingen.

## De verdediging in lagen

Volledig voorkomen kan niemand; het risico verkleinen en de schade beperken wel. **Aan de leverancierskant** (5.19 tot en met 5.22): weet wie er toegang heeft of kritiek is, stel eisen (certificering, MFA op hun toegang, meldplicht bij incidenten bij hén) en vraag naar hun eigen ketenbeheer (5.21). **Aan de toegangskant**: leverancierstoegang tot jouw omgeving is persoonsgebonden, minimaal, gelogd en waar mogelijk alleen op afroep actief; de MSP-toegang is het kroonjuweel onder de beheerrechten (8.2). **Aan de eigen kant**: updates blijven noodzakelijk (niet patchen is gevaarlijker dan de kleine kans op een besmette update), maar EDR (8.7), segmentatie (8.22) en een offline back-up (8.13) zorgen dat één besmette schakel niet alles kost. **Bij eigen ontwikkeling**: dependency-scanning, lockfiles en herkomstcontrole (8.28).

Binnen ISO 27001 is dit het domein van maatregel 5.21 (ICT-toeleveringsketen), en het is precies waarom die maatregel in de 2022-versie is toegevoegd: de keten is het nieuwe aanvalsoppervlak.
