---
title: "Wat is versleuteling (encryptie)?"
description: "Versleuteling maakt data onleesbaar zonder de juiste sleutel: in rust en onderweg. De basisbegrippen (symmetrisch, asymmetrisch, end-to-end) zonder wiskunde uitgelegd."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Versleuteling (encryptie) zet leesbare data met een wiskundig algoritme en een sleutel om in onleesbare data; alleen wie de juiste sleutel heeft, kan haar terugvertalen. De twee toepassingen: data in rust (schijfversleuteling op laptops, versleutelde databases en back-ups) en data onderweg (TLS/HTTPS-verbindingen). Voor het MKB is de boodschap simpel: moderne platforms leveren sterke versleuteling ingebouwd; de kunst is haar overal aanzetten en de sleutels goed beheren."
publishDate: 2026-07-16
readTime: "3 min"
keywords: ["versleuteling", "encryptie", "tls", "end-to-end encryptie"]
gerelateerd: ["annex-a-8-24-cryptografie", "annex-a-8-1-eindgebruikersapparaten", "wat-is-de-biv-driehoek"]
faq:
  - vraag: "Wat is het verschil tussen symmetrische en asymmetrische versleuteling?"
    antwoord: "Symmetrisch gebruikt één sleutel voor versleutelen én ontsleutelen (snel, gebruikt voor de data zelf, zoals AES-256); asymmetrisch gebruikt een sleutelpaar: een publieke sleutel om te versleutelen en een privésleutel om te ontsleutelen (gebruikt voor sleuteluitwisseling en digitale handtekeningen, zoals RSA). Moderne verbindingen combineren beide: asymmetrisch om veilig een symmetrische sessiesleutel af te spreken."
  - vraag: "Wat betekent end-to-end-versleuteling?"
    antwoord: "Dat alleen de eindpunten (verzender en ontvanger) kunnen ontsleutelen, en dus ook de dienstverlener ertussen niet. Gewone TLS beschermt de verbinding naar de server, maar de aanbieder kan de inhoud op de server lezen; end-to-end (zoals in Signal of WhatsApp) sluit ook de aanbieder uit."
---

Versleuteling is de wiskundige kluis van de digitale wereld: data wordt met een algoritme en een sleutel omgezet in onleesbare tekens, en alleen de juiste sleutel maakt er weer leesbare informatie van. Het is de maatregel die een gestolen laptop verandert van datalek in kostenpost.

## De twee toepassingen

**Data in rust**: versleuteling van opgeslagen gegevens: de volledige schijf van laptops en telefoons (BitLocker, FileVault, standaard op moderne smartphones), databases, back-ups en losse bestanden of dragers. Zonder de sleutel (ontgrendeling van het apparaat) is de inhoud betekenisloos.

**Data onderweg**: versleuteling van verbindingen: TLS is de standaard achter HTTPS, veilige mailoverdracht en API-verkeer. Het voorkomt dat iemand op het netwerkpad (openbare wifi, een gecompromitteerde router) kan meelezen of manipuleren.

## Wat het MKB moet weten

Drie nuchtere lessen. Eén: **je hoeft niets zelf te bouwen**: moderne besturingssystemen, clouddiensten en platforms leveren sterke versleuteling (AES-256, actuele TLS) ingebouwd; de taak is haar overal áánzetten en verouderde protocollen uitzetten. Twee: **de sleutel is het echte geheim**: versleuteling zonder sleutelbeheer beschermt vooral tegen jezelf; bewaar herstelsleutels centraal (Annex A 8.24) en beperk wie erbij kan. Drie: **versleuteling is geen toverwoord**: het beschermt vertrouwelijkheid tegen wie de sleutel niet heeft; het helpt niet tegen een gephishte gebruiker die gewoon inlogt, en ransomware gebruikt versleuteling juist als wapen.

Binnen ISO 27001 is versleuteling de kern van maatregel 8.24 (cryptografie) en ondersteunt zij apparaten (8.1), overdracht (5.14) en back-ups (8.13). De auditvraag is nooit "gebruiken jullie encryptie?" maar "waar staat versleuteling aan, waar bewust niet, en wie beheert de sleutels?"
