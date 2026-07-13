---
title: "Wat is phishing?"
description: "Phishing is digitale oplichting waarbij aanvallers zich voordoen als een betrouwbare partij om inloggegevens of geld te stelen. Herkenning, varianten en maatregelen."
norm: "iso-27001"
categorie: "begrippen"
tldr: "Phishing is een aanvalstechniek waarbij criminelen zich via e-mail, sms of telefoon voordoen als een betrouwbare partij (bank, leverancier, collega, directeur) om inloggegevens te stelen, malware te installeren of betalingen los te krijgen. Het is het startpunt van de meeste cyberincidenten. De verdediging is gelaagd: e-mailfiltering, MFA, awareness-training en een meldcultuur waarin snel melden belangrijker is dan nooit klikken."
publishDate: 2026-07-15
readTime: "3 min"
keywords: ["phishing", "spear phishing", "ceo-fraude", "e-mail fraude"]
gerelateerd: ["wat-is-social-engineering", "wat-is-ransomware", "annex-a-6-3-bewustzijn-opleiding-training"]
faq:
  - vraag: "Welke phishing-varianten zijn er?"
    antwoord: "Massale phishing (breed uitgestuurde nepmails), spear phishing (gericht op één persoon met persoonlijke details), CEO-fraude (zogenaamd de directeur die een spoedbetaling vraagt), smishing (via sms), vishing (telefonisch, tegenwoordig ook met AI-gekloonde stemmen) en QR-phishing (quishing). De gerichte varianten zijn het gevaarlijkst omdat ze geloofwaardig ogen."
  - vraag: "Wat doe je na een klik op een phishinglink?"
    antwoord: "Direct melden bij IT of het interne meldpunt: snelheid beperkt de schade. Wachtwoord wijzigen (en overal waar hetzelfde wachtwoord werd gebruikt), actieve sessies uitloggen, en IT laat het apparaat controleren. Een organisatie met een goede meldcultuur behandelt de melder als held, niet als schuldige; dat bepaalt of de volgende klikker zich óók meldt."
---

Phishing is digitale oplichting: een aanvaller doet zich voor als een betrouwbare partij om je iets te laten doen dat je bij helder daglicht nooit zou doen: inloggegevens invullen op een nepsite, een besmette bijlage openen of een betaling goedkeuren. Het is al jaren de nummer één toegangsweg voor cyberincidenten, van ransomware tot factuurfraude.

## Hoe werkt het?

De klassieke route: een e-mail die lijkt te komen van een bekende afzender (Microsoft, de bank, een leverancier, de eigen directeur) met een urgente aanleiding: je account wordt geblokkeerd, een factuur staat open, een pakket wacht. De link leidt naar een inlogpagina die niet van het echte origineel te onderscheiden is; wat je daar invult, gaat rechtstreeks naar de aanvaller. Moderne varianten omzeilen zelfs MFA door de hele sessie live door te sluizen.

## Herkennen

De signalen: onverwachte urgentie en druk, een afzenderadres dat nét afwijkt, links die ergens anders heen wijzen dan de tekst zegt (hoveren!), taal- en stijlbreuken, en verzoeken die buiten de normale procedure vallen. Maar: gerichte phishing is soms vlekkeloos. Daarom is de belangrijkste regel niet "herken alles", maar "verifieer bij twijfel via een ander kanaal": bel de collega of leverancier op het bekende nummer.

## De verdediging in lagen

Techniek eerst: e-mailfiltering met SPF/DKIM/DMARC, webfiltering die bekende phishing-sites blokkeert, en vooral **MFA**, die gestolen wachtwoorden grotendeels waardeloos maakt (phishingbestendige varianten zoals passkeys ook tegen sessie-kaping). Daarna de mens: periodieke awareness-training met phishing-simulaties (Annex A 6.3), vaste verificatieprocedures voor betalingen en gegevenswijzigingen, en een meldcultuur waarin de snelle melding wordt gevierd. Voor ISO 27001 raakt phishing aan de maatregelen 8.7 (malware), 8.23 (webfiltering), 6.3 (awareness) en 6.8 (melden).
