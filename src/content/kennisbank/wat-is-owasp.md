---
title: "Wat is OWASP en de OWASP Top 10?"
description: "OWASP is de open community voor applicatiebeveiliging; de Top 10 is de standaardlijst van webapplicatie-risico's die auditors en klanten als referentie gebruiken."
norm: "iso-27001"
categorie: "begrippen"
tldr: "OWASP (Open Worldwide Application Security Project) is de non-profit community die gratis standaarden en tools voor applicatiebeveiliging publiceert. Bekendste product: de OWASP Top 10, de periodiek herziene lijst van de tien grootste webapplicatie-risico's (zoals broken access control, injectie en security misconfiguration), die wereldwijd als referentie dient in contracten, pentests en audits. Voor ISO 27001-organisaties die software bouwen, is 'wij ontwikkelen tegen de OWASP Top 10' de gangbare invulling van veilig programmeren (8.28)."
publishDate: 2026-07-18
readTime: "3 min"
keywords: ["owasp", "owasp top 10", "applicatiebeveiliging", "webapplicatie risico"]
gerelateerd: ["annex-a-8-28-veilig-programmeren", "annex-a-8-29-beveiligingstesten", "wat-is-een-pentest"]
faq:
  - vraag: "Wat staat er in de OWASP Top 10?"
    antwoord: "De categorieën verschuiven per editie; de vaste kern: broken access control (gebruikers kunnen bij data of functies die niet voor hen zijn: al jaren nummer één), cryptografische fouten, injectie (waaronder SQL-injectie), onveilig ontwerp, security misconfiguration, kwetsbare componenten (verouderde libraries), authenticatiefouten, integriteitsfouten in software en data, gebrekkige logging en monitoring, en server-side request forgery."
  - vraag: "Is OWASP alleen voor webapplicaties?"
    antwoord: "De Top 10 wel, maar OWASP publiceert breder: aparte Top 10-lijsten voor API's, mobiele apps en LLM/AI-toepassingen, de ASVS (een gedetailleerde verificatiestandaard voor applicatiebeveiliging), testgidsen en gratis tooling zoals ZAP (een security-scanner). Voor elk ontwikkelteam is er een passend OWASP-startpunt."
---

OWASP is het gratis geweten van de softwarebeveiliging: een wereldwijde open community die documenteert hoe applicaties falen en hoe je dat voorkomt. Wie software bouwt of laat bouwen, komt de naam overal tegen: in contracten, pentestrapporten en auditvragen.

## De Top 10: de gemeenschappelijke taal

De OWASP Top 10 rangschikt op basis van praktijkdata de meest voorkomende en schadelijke webapplicatie-risico's. De kracht zit niet in de lijst zelf maar in de functie: hij is de **gemeenschappelijke referentie** geworden. Klanten eisen "ontwikkeling conform OWASP Top 10" in contracten, pentesters structureren hun rapporten erlangs, en ontwikkelaars weten bij elke categorie wat er bedoeld wordt. Bovenaan staat al jaren **broken access control**: niet de exotische hack, maar de saaie fout dat gebruiker A bij de gegevens van gebruiker B kan; een nuttige herinnering dat applicatiebeveiliging vooral autorisatie-discipline is.

## Meer dan de Top 10

Voor teams die dieper willen: de **ASVS** (Application Security Verification Standard) is de uitgewerkte eisenlijst per beveiligingsniveau, bruikbaar als ontwikkelstandaard en als pentest-scope; de **cheat sheets** geven per onderwerp (sessies, invoervalidatie, wachtwoordopslag) de concrete implementatierichtlijnen; en er zijn specifieke Top 10's voor API's en LLM-toepassingen, dat laatste relevant voor iedereen die AI-features bouwt.

## De plek binnen ISO 27001

Voor organisaties met eigen ontwikkeling is OWASP de gangbare invulling van drie maatregelen: **veilig programmeren** (8.28: de Top 10 en cheat sheets als codeerstandaard, verankerd in review-criteria en linters), **beveiligingstesten** (8.29: pentests met OWASP-methodiek, ASVS als acceptatielat) en **beveiligingseisen** (8.26: de relevante categorieën als standaard-eisenset). In de audit is "wij ontwikkelen tegen de OWASP Top 10, hier is de pipeline die het afdwingt" een antwoord dat werkt, mits de pipeline het inderdaad afdwingt: de norm-auditor vraagt door naar het bewijs, precies zoals een pentester dat doet.
