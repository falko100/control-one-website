---
title: "On- en offboarding: de beveiligingschecklist"
description: "In- en uitdienst zijn de twee riskantste momenten voor informatiebeveiliging. De complete checklist voor beide, en de HR-IT-koppeling die alles laat werken."
norm: "iso-27001"
categorie: "sjablonen"
tldr: "On- en offboarding zijn de twee momenten waarop toegang, middelen en afspraken kloppen of voorgoed gaan zwerven. De onboarding-checklist: screening afgerond, afspraken getekend vóór toegang, account volgens het functieprofiel, MFA en wachtwoordmanager ingericht, apparaat uit de baseline, awareness-basismodule. De offboarding-checklist: account en toegangen geblokkeerd op de laatste werkdag, middelen ingenomen, gedeelde wachtwoorden geroteerd, kluis- en kennisoverdracht, doorlopende geheimhouding benoemd in het exitgesprek. De motor onder beide: een vaste, snelle meldroute van HR naar IT."
publishDate: 2026-07-17
readTime: "4 min"
keywords: ["onboarding checklist", "offboarding checklist", "uitdienst beveiliging", "indiensttreding"]
gerelateerd: ["annex-a-5-11-retournering-van-bedrijfsmiddelen", "annex-a-5-18-toegangsrechten", "annex-a-6-1-screening"]
faq:
  - vraag: "Wat is de meest gemaakte offboarding-fout?"
    antwoord: "Het gat tussen HR en IT: het vertrek is bekend bij HR maar bereikt IT dagen of weken later, waardoor accounts open blijven staan. De tweede klassieker: het hoofdaccount wordt geblokkeerd maar de losse SaaS-accounts (buiten SSO), gedeelde wachtwoorden en OAuth-koppelingen blijven leven. De remedie: één meldroute met dezelfde-dag-afspraak, en offboarden vanuit het assetregister en de SSO-lijst in plaats van uit het geheugen."
  - vraag: "Wanneer blokkeer je bij een conflictueus vertrek?"
    antwoord: "Direct bij het bekend worden, in overleg tussen HR en directie: bij ontslag op staande voet of een vertrouwensbreuk gaat de toegang dicht vóór of tijdens het gesprek, niet erna. Leg die spoedroute vast in de procedure; het is een uitzondering, maar juist de uitzondering waarvoor je geen tijd hebt om te improviseren."
---

Niemand heeft méér toegang dan een nieuwe medewerker die alles krijgt "om te beginnen", behalve de vertrokken medewerker wiens accounts niemand heeft dichtgezet. De twee checklists hieronder dichten precies die gaten, en dekken en passant een handvol Annex A-maatregelen af.

## De onboarding-checklist (vóór en op dag één)

1. **Screening afgerond** volgens het niveau van de functie (6.1): identiteit, referenties, VOG waar vereist.
2. **Afspraken getekend vóór toegang** (6.2): arbeidsovereenkomst met geheimhouding, kennisname van beveiligingsbeleid en gebruiksreglement.
3. **Account volgens functieprofiel** (5.18): het standaardprofiel uit de autorisatiematrix, niets extra; uitzonderingen via de eigenaar.
4. **MFA en wachtwoordmanager dag één**: ingericht tijdens de eerste werkdag, niet "komt nog".
5. **Apparaat uit de baseline** (8.1): versleuteld, beheerd, geregistreerd in het assetregister op naam.
6. **Awareness-basismodule** (6.3) in de eerste week: de regels, het meldpunt, de waarom.
7. **Registratie**: checklist afgetekend in het personeelsdossier; dit is het auditbewijs.

## De offboarding-checklist (uiterlijk de laatste werkdag)

1. **Meldroute**: HR meldt het vertrek direct aan IT; blokkering staat ingepland op de laatste werkdag (of eerder, zie FAQ).
2. **Toegang dicht** (5.18): hoofdaccount, VPN, losse SaaS-accounts buiten SSO, fysieke toegang (tags, codes); werk vanuit de SSO-lijst en het assetregister, niet uit het hoofd.
3. **Middelen ingenomen** (5.11): laptop, telefoon, tokens, passen, dragers; BYOD-profiel gewist; aftekenen per item.
4. **Gedeelde geheimen geroteerd**: wachtwoorden van gedeelde accounts waar de vertrekker bij kon, alarmcodes, kluistoegang in de wachtwoordmanager ingetrokken.
5. **Overdracht**: lopende taken, bestanden en kennis overgedragen (7.1.6 in ISO 9001-termen); mailbox-afhandeling volgens vaste regel (doorsturen beperkt in tijd, daarna archiveren volgens bewaartermijn).
6. **Exitgesprek met de doorlopende plichten** (6.5): geheimhouding blijft gelden; kort benoemd en bevestigd.
7. **Registratie**: afgetekende checklist; de auditor pakt gegarandeerd een recent vertrek als steekproef.

## De motor: één trigger, twee lijstjes

Beide processen slagen of falen op de koppeling tussen HR en IT: één vaste melding ("indiensttreding/vertrek, functie, datum") die beide checklists start. Automatiseer wat kan (identiteitsprovider gekoppeld aan het HR-proces, taken in de portal) en audit jezelf per kwartaal met de simpelste controle die er is: leg de personeelslijst naast de accountlijst.
