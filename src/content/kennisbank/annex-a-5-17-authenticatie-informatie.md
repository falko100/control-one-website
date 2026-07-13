---
title: "Annex A 5.17: Authenticatie-informatie"
description: "Maatregel 5.17 van ISO 27001 Annex A stelt eisen aan wachtwoorden en andere authenticatiemiddelen: uitgifte, beheer en gebruikersplichten. Inclusief MFA en wachtwoordmanagers."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 5.17 eist beheerste toewijzing en gebruik van authenticatie-informatie: veilige uitgifte van initiële wachtwoorden, verplicht wijzigen bij eerste gebruik, sterke en unieke wachtwoorden (bij voorkeur via een wachtwoordmanager), geen hergebruik of delen, en multifactorauthenticatie waar het risico dat vraagt. Moderne invulling: lange wachtzinnen, MFA op alles wat extern bereikbaar is, geen periodieke verplichte wissel."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 5.17", "authenticatie", "wachtwoordbeleid", "mfa", "wachtwoordmanager", "iso 27001"]
gerelateerd: ["annex-a-5-16-identiteitsbeheer", "annex-a-5-15-toegangsbeveiliging", "wat-is-annex-a"]
faq:
  - vraag: "Moeten wachtwoorden periodiek verplicht gewijzigd worden?"
    antwoord: "Nee, dat is achterhaald. Moderne richtlijnen (waaronder NIST en NCSC) adviseren lange, unieke wachtwoorden zonder geforceerde wissel; verplicht wijzigen alleen bij (vermoeden van) compromittering. Gedwongen rotatie leidt tot voorspelbare varianten en post-its."
  - vraag: "Is MFA verplicht voor ISO 27001?"
    antwoord: "De norm schrijft MFA niet letterlijk voor, maar eist authenticatie passend bij het risico. Voor extern bereikbare systemen (e-mail, VPN, cloudadmin) is MFA feitelijk de ondergrens; een auditor zal het ontbreken ervan vrijwel zeker als bevinding aanmerken."
---

Annex A-maatregel 5.17 van ISO 27001, "Authentication information", stelt eisen aan de hele levenscyclus van wachtwoorden, tokens en andere authenticatiemiddelen: van uitgifte tot gebruik. Gestolen inloggegevens zijn de meest gebruikte toegangsweg voor aanvallers.

## Wat eist de maatregel?

Drie onderdelen: **beheerste toewijzing** (initiële wachtwoorden veilig uitgeven, uniek en tijdelijk, identiteit verifiëren vóór verstrekking van nieuwe gegevens), **gebruikersverantwoordelijkheden** (geheimhouden, niet delen of hergebruiken, sterk kiezen) en **systeemeisen** (wachtwoorden versleuteld opslaan, sterke-wachtwoordregels afdwingen, standaardwachtwoorden van leveranciers wijzigen).

## Zo vul je hem in

1. **Stel een modern wachtwoordbeleid op**: minimaal 12 tot 16 tekens of een wachtzin, uniek per dienst, geen verplichte periodieke wissel, wijzigen bij vermoeden van lek.
2. **Geef iedereen een wachtwoordmanager**: dit is de enige realistische manier om uniek en sterk af te dwingen; het maakt tegelijk gecontroleerd delen van teamwachtwoorden mogelijk.
3. **Zet MFA aan op alles wat extern bereikbaar is**: e-mail, VPN, cloudbeheer, kritische SaaS. Bij voorkeur phishingbestendig (app of hardwaresleutel in plaats van sms).
4. **Beheers de uitgifte**: tijdelijke startwachtwoorden via een ander kanaal dan de gebruikersnaam; bij wachtwoordresets eerst identiteit verifiëren (helpdesk-fraude is een reëel aanvalspad).

## Waar let de auditor op?

De auditor toetst het beleid tegen de instellingen: staat MFA echt aan voor alle gebruikers (ook de directie en dat ene oude account), zijn standaardwachtwoorden van apparatuur gewijzigd, en hoe verloopt een wachtwoordreset in de praktijk? Uitzonderingen op MFA "omdat het onhandig is" en gedeelde wachtwoorden in een Excel-lijst zijn de klassiekers.
