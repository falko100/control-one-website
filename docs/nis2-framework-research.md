# NIS2-Framework Onderzoek — Mapping vs ISO 27001:2022 + Implementatie-blueprint Control One

**Datum:** 10 juni 2026
**Status:** Onderzoeksrapport (input voor implementatiebeslissing)
**Scope:** NIS2-richtlijn (EU 2022/2555), Nederlandse Cyberbeveiligingswet (Cbw), mapping naar ISO 27001:2022, concurrentielandschap en blueprint voor Control One

---

## 1. Executive Summary

NIS2 (Directive (EU) 2022/2555) is sinds 17 januari 2023 in werking en moest per 17 oktober 2024 door alle EU-lidstaten in nationaal recht zijn omgezet. Nederland heeft die deadline gemist. De Tweede Kamer nam de **Cyberbeveiligingswet (Cbw)** aan op **15 april 2026**; verwachte inwerkingtreding na akkoord van de Eerste Kamer is **1 juli 2026**. Vanaf dat moment vallen circa **10.000 Nederlandse organisaties** onder de wet, verdeeld over 18 sectoren en 8 sectortoezichthouders gecoördineerd door de RDI ([Samen Digitaal Veilig](https://samendigitaalveilig.nl/nieuws/8-toezichthouders-voor-10-000-nis2-organisaties/), [Rijksoverheid](https://www.rijksoverheid.nl/actueel/nieuws/2026/04/15/tweede-kamer-stemt-in-met-wetsvoorstellen-cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten)).

Voor Control One betekent dit een commercieel raam dat exact nu opent: MKB-organisaties moeten zich registreren, een ISMS-achtige risicoaanpak invoeren en aan harde meldplichten voldoen (24u/72u/1 maand). Boetes lopen op tot **€10 miljoen of 2% wereldomzet** voor essentiële entiteiten, €7 miljoen of 1,4% voor belangrijke entiteiten. Bestuurders zijn persoonlijk aansprakelijk (Artikel 20).

**Belangrijkste bevinding:** circa 70% van NIS2 wordt gedekt door een ISO 27001:2022-conform ISMS. De 30% gap zit in: bestuurdersaansprakelijkheid, harde meldplicht-deadlines aan toezichthouders, registratieverplichting, sectorspecifieke incident-thresholds, en expliciete ICT-supply-chain-verplichtingen ([Seeburger](https://blog.seeburger.com/eu-nis2-verification-through-mapping-to-iso-27001-controls/), [Dataguard](https://www.dataguard.com/nis2/iso-27001-mapping)).

**Strategische aanbeveling:** implementeer NIS2 als **apart `framework_id` met shared-content-references** naar bestaande 27001-modules. Dit is technisch identiek aan de aanpak die nu voor ISO 9001 is gekozen, maximaliseert hergebruik en houdt SoA's en audit-trails per framework gescheiden. Bouw bovenop dit framework **vier NIS2-unieke modules**: incident-meldplicht-workflow met 24u/72u/30d timers, sector-classificatie-wizard, bestuurdertraining-tracker, en uitgebreid supply-chain-register. MVP-launch is haalbaar in 6-8 weken bovenop de bestaande infrastructuur.

---

## 2. NIS2 Grondslag — Wetgevingstekst & Scope

### 2.1 Wettelijk kader

- **Directive (EU) 2022/2555** van 14 december 2022, gepubliceerd in PB L 333/80 van 27.12.2022 ([EUR-Lex](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).
- Vervangt **NIS1** (Directive (EU) 2016/1148).
- Aangevuld met **Commission Implementing Regulation (EU) 2024/2690** van 17 oktober 2024: 150+ technische controls voor digitale dienstverleners ([EUR-Lex](https://eur-lex.europa.eu/eli/reg_impl/2024/2690/oj/eng), [ENISA Technical Implementation Guidance](https://www.enisa.europa.eu/publications/nis2-technical-implementation-guidance) — juni 2025, 170 pagina's).

### 2.2 Sectoren — Annex I (essentieel) & Annex II (belangrijk)

NIS2 dekt **18 sectoren**: 11 met "hoge kriticiteit" (Annex I) en 7 "andere kritieke" sectoren (Annex II) ([Glocert](https://www.glocertinternational.com/resources/guides/nis2-applicability-essential-vs-important-entities/), [Orizon](https://orizon.one/blog/nis2-sectors-essential-important)).

**Annex I — Hoge kriticiteit (essentiële entiteiten bij grote omvang):**
1. Energie — elektriciteit, olie, gas, waterstof, district heating/cooling
2. Vervoer — lucht, spoor, water, weg
3. Bankwezen
4. Financiële marktinfrastructuur
5. Gezondheidszorg — ziekenhuizen, referentielaboratoria, fabrikanten medische hulpmiddelen, farmaceutische productie
6. Drinkwater
7. Afvalwater
8. Digitale infrastructuur — IXPs, DNS-providers, TLD-name registries, cloud, datacenters, CDNs, trust service providers, openbare elektronische communicatienetwerken
9. ICT-beheerdiensten (B2B) — managed service providers (MSP) & managed security service providers (MSSP)
10. Overheid — centrale overheidsinstellingen (excl. rechtspraak, parlement, centrale bank)
11. Ruimtevaart — operators grondinfrastructuur

**Annex II — Andere kritieke sectoren (belangrijke entiteiten):**
1. Post- en koeriersdiensten
2. Afvalbeheer
3. Productie, verwerking en distributie van levensmiddelen
4. Vervaardiging — medische hulpmiddelen, computers/elektronica/optica, elektrische apparatuur, machinerie, motorvoertuigen, overig transport
5. Productie en distributie van chemische stoffen
6. Digitale aanbieders — online marketplaces, online zoekmachines, social networking platforms
7. Onderzoek

### 2.3 Drempelwaarden

Gebaseerd op EU Aanbeveling 2003/361/EC over MKB-definities ([NIS-2-Templates](https://www.nis-2-templates.com/scope/)):

| Categorie | Werknemers | Omzet **of** balanstotaal |
|---|---|---|
| **Klein** (uitgesloten) | <50 | <€10 mln |
| **Middelgroot** (= "important" als Annex I/II) | ≥50 | ≥€10 mln |
| **Groot** (= "essential" bij Annex I) | ≥250 | ≥€50 mln omzet of €43 mln balans |

Een Annex I-organisatie wordt **essentieel** bij grote omvang en **belangrijk** bij middelgrote omvang. Een Annex II-organisatie is altijd **belangrijk** (nooit essentieel) bij middelgrote of grote omvang. Klein blijft buiten scope, **tenzij** size-onafhankelijke aanwijzing geldt: qualified trust service providers, TLD-name registries, DNS-service providers, openbare elektronische communicatienetwerken, en overheid vallen onder NIS2 ongeacht omvang.

### 2.4 Artikel 20 — Governance & Bestuurdersaansprakelijkheid

**Art 20(1):** Het bestuursorgaan moet de cybersecurity-risicobeheersmaatregelen **goedkeuren én toezicht houden** op de implementatie. Deze verantwoordelijkheid is niet-delegeerbaar.

**Art 20(2):** Alle bestuursleden moeten **cybersecurity-training** krijgen die voldoende is om risico's te begrijpen en cybersecurity-praktijken te beoordelen. Training is verplicht bij aanstelling en jaarlijks daarna; voltooiing moet gedocumenteerd worden ([RansomLeak NIS2 Training](https://ransomleak.com/blog/nis2-training/), [DLA Piper](https://www.dlapiper.com/en-us/insights/publications/2025/11/nis2-directive-explained-part-2-management-bodies-rules)).

**Persoonlijke aansprakelijkheid:** Bestuurders kunnen persoonlijk aansprakelijk worden gesteld voor inbreuken op Artikel 21. Een bestuurder die in gebreke blijft kan tijdelijk **verbod op bestuursfuncties** opgelegd krijgen — niet alleen bij de eigen entiteit, maar bij elke essentiële entiteit ([CloudSoul](https://www.cloudsoul.net/resources/blog/nis2-board-accountability-governance/), [ISMS.online](https://www.isms.online/nis-2/enforcement/board-liability/how/)).

### 2.5 Artikel 21 — Tien Cybersecurity Risk-Management Measures

Verplichte "all-hazards" aanpak. Officieel opgesomd in Art 21(2)(a)-(j) ([NIS-2-directive.com Art 21](https://www.nis-2-directive.com/NIS_2_Directive_Article_21.html)):

| Letter | Maatregel |
|---|---|
| (a) | Beleid voor risicoanalyse en informatiesysteembeveiliging |
| (b) | Incident handling |
| (c) | Business continuity (back-up, disaster recovery, crisis management) |
| (d) | Supply-chain security inclusief relaties met directe leveranciers/dienstverleners |
| (e) | Beveiliging bij verwerving, ontwikkeling en onderhoud van netwerk-/informatiesystemen, inclusief vulnerability handling & disclosure |
| (f) | Beleid en procedures om effectiviteit van risicobeheersmaatregelen te beoordelen |
| (g) | Basis cyber-hygiëne en cybersecurity-training |
| (h) | Beleid en procedures voor gebruik van cryptografie en (indien passend) encryptie |
| (i) | HR-security, access-controlebeleid en asset management |
| (j) | Multi-factor- of continue authenticatie, beveiligde voice/video/text-communicatie, beveiligde noodcommunicatiesystemen |

**Art 21(3)** vereist expliciete evaluatie van leveranciers-kwetsbaarheden en cyberpraktijken; sluit aan op gecoördineerde sectorrisico-analyses uit Art 22.

### 2.6 Artikel 23 — Meldplicht (24/72/30-dagen)

Driefasenstructuur ([NIS-2-directive.com Art 23](https://www.nis-2-directive.com/NIS_2_Directive_Article_23.html), [Glocert Playbook](https://www.glocertinternational.com/resources/guides/nis2-incident-reporting-playbook-article-23/)):

| Fase | Termijn | Inhoud |
|---|---|---|
| **Early Warning** | binnen 24u na "aware of significant incident" | Vermoeden onrechtmatig/kwaadwillig handelen + mogelijke grensoverschrijdende impact |
| **Incident Notification** | binnen 72u | Initiële beoordeling severity & impact, indicators of compromise |
| **Final Report** | binnen 1 maand na de incident notification | Gedetailleerde beschrijving + impact + maatregelen |

Bij voortdurende incidenten geldt **progress report** bij 1-maandsmoment en final report binnen 1 maand na resolutie. Meldingen gaan in NL naar de relevante CSIRT (vaak NCSC) en de sectorale toezichthouder.

### 2.7 Artikel 24 — Europese certificeringsregelingen

Lidstaten mogen vereisen dat entiteiten EU-certificering (onder Cybersecurity Act) gebruiken voor specifieke ICT-producten/processen. Belangrijk: **ISO 27001 is geen automatisch bewijs van NIS2-compliance**, maar wordt door ENISA wel expliciet als referentie-mapping gebruikt.

### 2.8 Artikelen 30-37 — Toezicht & Sancties

- **Art 32:** verplichte audit/inspectie-bevoegdheden voor essentiële entiteiten (proactief), reactief voor belangrijke entiteiten.
- **Art 34** boetes ([RGPD.com Art 34](https://rgpd.com/nis2-directive/chapter-7-supervision-and-enforcement/article-34-general-conditions-for-imposing-administrative-fines-on-essential-and-important-entities/)):
  - **Essentiële entiteit:** maximaal €10 mln **of** 2% wereldwijde geconsolideerde omzet, **whichever is higher**.
  - **Belangrijke entiteit:** maximaal €7 mln **of** 1,4% wereldwijde geconsolideerde omzet.
- Bevoegde autoriteit kan certificeringen tijdelijk schorsen en bestuurders een tijdelijk verbod opleggen op bestuursfuncties.

---

## 3. Nederlandse Implementatie & Toezicht-landschap

### 3.1 Cyberbeveiligingswet (Cbw)

- **15 april 2026:** Tweede Kamer neemt Cbw + Wet weerbaarheid kritieke entiteiten (Wwke) aan ([Rijksoverheid](https://www.rijksoverheid.nl/actueel/nieuws/2026/04/15/tweede-kamer-stemt-in-met-wetsvoorstellen-cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten), [DNV](https://www.dnv.nl/nieuws/2026/nis2-treedt-per-1-juli-in-werking/)).
- **Q2 2026:** behandeling Eerste Kamer.
- **Streefdatum inwerkingtreding:** 1 juli 2026 (afhankelijk van senaat).
- Vervangt huidige **Wet beveiliging netwerk- en informatiesystemen (Wbni)**.
- Een aparte **AMvB** bevat sectorlijsten en thresholds.

### 3.2 Toezichthouders (8 + coördinerend)

De **RDI (Rijksinspectie Digitale Infrastructuur)** — voorheen Agentschap Telecom — is **coördinerend toezichthouder** ([RDI Cbw](https://www.rdi.nl/onderwerpen/cyberbeveiligingswet), [Samen Digitaal Veilig](https://samendigitaalveilig.nl/nieuws/8-toezichthouders-voor-10-000-nis2-organisaties/)):

| Toezichthouder | Sectoren |
|---|---|
| **RDI** | Energie, digitale infrastructuur (DNS, TLD, trust services, openbare communicatie, IXPs, cloud, datacenters, CDN), ICT-beheerdiensten (MSP/MSSP), overheid |
| **ILT** (Inspectie Leefomgeving en Transport) | Vervoer, waterschappen, post & koeriers, afvalbeheer |
| **DNB** | Bankwezen, financiële marktinfrastructuur |
| **IGJ** (Inspectie Gezondheidszorg en Jeugd) | Gezondheidszorg |
| **NVWA** | Levensmiddelen |
| **ILT/RIVM** | Drinkwater, afvalwater |
| **AT/RDI** | Ruimtevaart (grondinfrastructuur) |
| **ACM** | Digitale aanbieders (afhankelijk van categorie) |

**NCSC** treedt op als **nationaal CSIRT** én als CSIRT voor diverse sectoren; ontvangt 24-uurs meldingen ([NCSC Cbw](https://www.ncsc.nl/cyberbeveiligingswet-nis2)). Vanaf 2026 bundelen **NCSC + DTC + CSIRT-DSP** krachten in één nationaal cybersecurity-orgaan ([DTC](https://www.digitaltrustcenter.nl/nis2/startpunt)).

### 3.3 Registratieplicht

- Registratie via **mijn.ncsc.nl**.
- Verplicht voor zowel essentiële als belangrijke entiteiten.
- Aan te leveren: organisatiegegevens, netwerkgegevens, contactpersoon, sector, soort dienst, lidstaten van dienstverlening, lijst van IP-ranges/domeinen voor digitale infrastructuur ([NCSC Registratieplicht](https://www.ncsc.nl/cyberbeveiligingswet-nis2/bereid-je-voor/registratieplicht)).
- Wijzigingen moeten binnen 2 weken doorgegeven.

### 3.4 NL-specifieke nuances

1. **Self-identification**: organisaties moeten zelf vaststellen of ze in scope vallen. Geen overheidsbrief.
2. **Doorverwijsboom**: NCSC publiceerde een [decision tree (oktober 2025)](https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2025/oktober/21/doorverwijsboom-cbw-organisaties/25-1104+Doorverwijsboom+Cyberbeveiligingswet+DEF+12.pdf).
3. **Overlap met Wwke**: kritieke entiteiten vallen onder beide regelingen.
4. **Sectorspecifieke incident-drempels** worden in lagere regelgeving (ministeriële regeling) uitgewerkt.

### 3.5 MKB onder NIS2

Veel klein MKB blijft buiten scope. Maar de volgende MKB-segmenten vallen er **wel** onder bij size-onafhankelijke aanwijzing of bij ≥50 fte of ≥€10 mln omzet:

- Cloud providers, datacenters, hosting, CDN — vaak MKB
- MSPs/MSSPs (IT-dienstverleners, security-resellers) — vrijwel altijd MKB
- DNS, TLD, trust service providers (eIDAS) — ongeacht omvang
- Digitale aanbieders: online marketplaces, zoekmachines, social platforms
- Fabrikanten medische apparatuur, machines, elektronica
- Software-aanbieders voor essentiële sectoren via supply-chain-doorwerking

**Doelgroep Control One:** vooral MSP/MSSP/cloud/SaaS-MKB (Annex I-8/9) en industriële maakbedrijven (Annex II-4) die middelgroot of groot zijn.

---

## 4. Mapping NIS2 ↔ ISO 27001:2022

Gebaseerd op de officiële **ENISA Mapping Table v1.2 (sep 2025)** ([ENISA mapping XLSX](https://www.enisa.europa.eu/sites/default/files/2025-06/ENISA_Technical_Implementation_Guidance_Mapping_table_version_1.0.xlsx)) en analyses van Seeburger en Dataguard. Coverage: **±70% van NIS2 wordt gedekt door een 27001:2022 ISMS**, hoog voor 8 van de 10 Art 21-maatregelen, gemiddeld voor incident handling en supply chain ([Seeburger](https://blog.seeburger.com/eu-nis2-verification-through-mapping-to-iso-27001-controls/)).

### 4.1 ISMS-clauses 4-10 ↔ NIS2

| ISO 27001 clause | NIS2-artikel | Dekking |
|---|---|---|
| 4 Context | Art 21(1) all-hazards | Volledig |
| 5 Leiderschap | Art 20 governance | **Gedeeltelijk** — bestuurdersaansprakelijkheid en verplichte training niet expliciet |
| 6 Planning (risk) | Art 21(2)(a), Art 22 sector-risk | Volledig |
| 7 Support (resources, awareness, communication) | Art 21(2)(g), Art 20(2) training | Hoog, training-cyclus aanpassen |
| 8 Operation | Art 21(2)(b)-(j) | Hoog |
| 9 Performance evaluation | Art 21(2)(f) | Volledig |
| 10 Improvement | Art 21(1) impact-minimisatie | Volledig |

### 4.2 Annex A 93 controls ↔ NIS2 Art 21(2)(a)-(j)

| NIS2 Art 21(2) | Primaire 27001 Annex A controls | Dekking |
|---|---|---|
| (a) Risicoanalyse-beleid | A.5.1, A.5.2, A.5.4, A.5.36 + clause 6.1 | Volledig |
| (b) Incident handling | A.5.24, A.5.25, A.5.26, A.5.27, A.5.28, A.6.8 | **Gedeeltelijk** — meldplicht aan toezichthouder (24/72/30) ontbreekt in 27001 |
| (c) Business continuity / DR / crisis | A.5.29, A.5.30, A.8.13, A.8.14 | Volledig |
| (d) Supply chain | A.5.19, A.5.20, A.5.21, A.5.22, A.5.23 | **Gedeeltelijk** — NIS2 vereist gecoördineerde sector-risk-assessment en periodieke evidence |
| (e) Acquisition / development / vulnerability disclosure | A.5.23, A.8.8, A.8.25, A.8.26, A.8.27, A.8.28, A.8.29, A.8.30 | Volledig |
| (f) Effectiviteitsmeting | A.5.35, A.5.36 + clause 9 | Volledig |
| (g) Cyber-hygiëne & training | A.6.3, A.6.4, A.6.8 | Hoog (training cadence aanscherpen) |
| (h) Cryptografie / encryptie | A.8.24 | Volledig |
| (i) HR security, access control, asset management | A.5.9, A.5.10, A.5.11, A.5.15, A.5.16, A.5.17, A.5.18, A.6.1, A.6.2, A.6.5, A.6.6, A.8.1, A.8.2, A.8.3 | Volledig |
| (j) MFA, secure comms, emergency comms | A.5.14, A.5.17, A.8.5, A.8.20, A.8.21 | Hoog (emergency comms uniek) |

### 4.3 NIS2-unieke gebieden (gap vs 27001)

Domeinen die **niet** of slechts indirect in ISO 27001 zitten:

1. **Bestuurdersaansprakelijkheid + jaarlijkse bestuurdertraining (Art 20)** — ISO 27001 clause 5 spreekt van "top management commitment" maar geen persoonlijke aansprakelijkheid of trainingscadens.
2. **Wettelijke meldplicht met harde deadlines (Art 23)** — 27001 A.5.24-A.5.28 dekt incident management procedureel, niet de regulator-facing 24/72/30-deadlines.
3. **Registratie bij overheid (Cbw)** — geen 27001-equivalent.
4. **Sector-specifieke incident-drempels** — komen uit nationale regelingen.
5. **Supply-chain met gecoördineerde sector-risk-assessment (Art 21(2)(d) + Art 22)** — 27001 dekt supplier-management generiek, niet de Europese sectorbrede dimensie.
6. **CIR 2024/2690 technical controls** — 150+ verplichte concrete controls voor digitale dienstverleners die specifieker zijn dan Annex A.
7. **Cross-border notification** — vereiste in Art 23 om landen van impact te informeren.

---

## 5. Concurrentielandschap — NIS2 in GRC-platforms

Onderzoek over 9 platforms (zomer 2026):

| Platform | NIS2-aanbod | Aanpak | Pricing-indicatie |
|---|---|---|---|
| **Vanta** | Sinds 2024 pre-mapped NIS2-controls | Overlay op 27001 + dedicated framework | Quote-based, $10-30k/jaar |
| **Drata** | Geen losse NIS2-module; via DORA/ICT Risk + ISO mappings | Cross-mapping | Quote-based |
| **Secureframe** | NIS2-module met workflows voor supply-chain en incident reporting | Apart framework | Quote-based |
| **Sprinto** | NIS2 + DORA via control mappings | Cross-mapping | ~$8-15k/jaar |
| **Thoropass** | Compliance + audit-bundel | Framework | Median $30k/jaar |
| **ISMS.online** | "81% headstart" op NIS2; full dedicated module | Apart framework + crosswalk-engine | Vanaf £3k/jaar |
| **Cyberday.ai (FI)** | Dedicated NIS2-framework, EN/NL/FR/DE | "13 main areas" gestructureerd, AI-recommendations, shared tasks tussen frameworks | Mid-tier |
| **Conformiso (NL)** | NIS2 als framework | NL-georiënteerd | Quote-based |
| **activeMind.cloud** | SaaS specifiek voor NIS2 | Dedicated | Quote-based |

**Inzichten:**

1. **Dominante architectuur:** apart framework + cross-mapping naar 27001/NIST/SOC2. Geen enkele speler doet pure overlay.
2. **Cyberday.ai** is de meest interessante benchmark voor Control One — multi-framework MKB-positionering, NL/DE/FR-aanwezigheid, "shared tasks" architectuur die identiek is aan onze beoogde shared-content-references.
3. **ISMS.online** marketingclaim "81% headstart" sluit numeriek aan op de 70% coverage uit ENISA's mapping.
4. **Gat in de markt — NL-specifiek:** geen enkele internationale speler heeft een ingebouwde Cbw-registratie-tracker, NL-toezichthouder-router of NCSC-meldformulier-integratie. Dit is een differentiator voor Control One.
5. **NIS2-specifieke modules** die concurrenten bouwen: incident-meldworkflow met 24/72/30-timers (ISMS.online, Secureframe, ActiveMind), supply-chain register (Vanta), board-training-tracker (zelden, kans!).

---

## 6. Implementatie-blueprint voor Control One

### 6.1 Architectuurkeuze: Apart Framework vs Overlay

**Aanbeveling: APART framework (`framework_id` = NIS2-NL) met shared-content-references.**

| Aspect | Apart framework + shared refs | Overlay op 27001 |
|---|---|---|
| **Hergebruik content** | Hoog (via polymorphic refs) | Maximaal |
| **SoA-helderheid** | Per framework eigen SoA | Versmelt |
| **Audit-trail** | Per framework gescheiden | Vermengt |
| **Cross-framework dashboard** | Mogelijk via mapping-table | Inherent |
| **Customer-perspectief** | "Ik ben NIS2-compliant" — duidelijk | Onduidelijk wat los van 27001 staat |
| **Pricing-model** | Aparte SKU mogelijk | Lastig |
| **Toekomst-uitbreidbaarheid** | DORA, ISO 42001, etc. consistent | Onhoudbaar bij 5+ frameworks |
| **Consistentie met ISO 9001-keuze** | Identiek patroon | Inconsistent |

Het patroon dat we voor ISO 9001 hebben gekozen werkt bewezen. Hetzelfde patroon voor NIS2.

### 6.2 Chapter-structuur (voorstel: 22 chapters)

Logische groepering — niet 1:1 NIS2-artikelnummering:

**Deel A — Toepasselijkheid (3 chapters)**
1. Scope & sector-classificatie
2. Drempelwaarden & entity-type (essentieel/belangrijk)
3. Registratieplicht bij NCSC

**Deel B — Governance (3 chapters)**
4. Bestuurdersaansprakelijkheid (Art 20.1)
5. Bestuurdertraining cadence (Art 20.2)
6. Beleidsstructuur en goedkeuring

**Deel C — Risk Management (Art 21) (10 chapters, een per maatregel)**
7. Risk-analysis & ISMS-beleid (Art 21.2.a)
8. Incident handling — operationeel (Art 21.2.b)
9. Business continuity & DR (Art 21.2.c)
10. ICT supply chain security (Art 21.2.d)
11. Acquisition/dev/maintenance + vulnerability disclosure (Art 21.2.e)
12. Effectiviteits-meting (Art 21.2.f)
13. Cyber hygiene & awareness (Art 21.2.g)
14. Cryptografie (Art 21.2.h)
15. HR/access/asset management (Art 21.2.i)
16. MFA + secure comms + emergency comms (Art 21.2.j)

**Deel D — Meldplicht (Art 23) (3 chapters)**
17. 24u Early Warning workflow
18. 72u Incident Notification
19. 1-maand Final Report + progress reports

**Deel E — Toezicht & Audit (3 chapters)**
20. Wettelijke verplichtingen-tracker (NL: Cbw, AMvB, ministeriële regelingen)
21. Sector-toezichthouder-relatie
22. Self-assessment voor inspectie

### 6.3 Document-hergebruik (van 70+ 27001-templates)

**1-op-1 herbruikbaar (geschat 35-40 documenten):**
Informatiebeveiligingsbeleid, Risicoanalyse procedure, Risk Register, IBP-handboek, Toegangscontrolebeleid, Cryptografiebeleid, Back-up procedure, BCP/DR plan, Incident response procedure, Cyber-awareness training, Cleardesk/clearscreen, Mobile device beleid, HR-screening, Onboarding/offboarding, Acceptable use, Logging & monitoring procedure, Patch management, Vulnerability management, Secure development beleid, Change management, Asset inventory procedure, Classificatieschema, Datalekkenprocedure, Bewaarbeleid, Verwijderingsbeleid, Cryptografische sleutels-procedure, Netwerkbeveiligingsbeleid, Wireless beleid, Remote access beleid, Endpoint security baseline, Anti-malware beleid, E-mailbeveiliging, Fysieke beveiliging, Bezoekersregeling, Continuïteitstest-procedure.

**Te hergebruiken met variant-content (15 documenten):**
- Supplier security beleid → uitbreiden naar **ICT supply chain register (NIS2)** met Art 22-coordinated assessment.
- Awareness training → **bestuurdertraining-curriculum (Art 20)** als variant.
- Management review template → **NIS2 management review** met Art 21(2)(f)-effectiviteitsbeoordeling.

**Nieuwe NIS2-specifieke documenten (~15):**
- Sector-classificatie en entiteitstype-bepaling
- NCSC-registratieformulier-template
- Incident-meldformulier 24u Early Warning (NL-versie + EN)
- Incident-meldformulier 72u Notification
- Incident-meldformulier Final Report
- Cross-border impact assessment template
- Bestuurdertraining-curriculum + attendance logs
- Bestuurdersaansprakelijkheid-charter
- CSIRT-contactprotocol (NCSC, sector-CSIRT)
- Wettelijke verplichtingen-register (NL Cbw + AMvB)
- Toezichthouder-correspondentie-log
- CIR 2024/2690 control mapping (voor MSP/cloud/DC-klanten)
- Sectorspecifieke incident-drempels-tabel
- NIS2 SoA-template (Statement of Applicability per Art 21-maatregel)
- Vulnerability disclosure policy (publiek, Art 21.2.e)

### 6.4 NIS2-unieke features (nieuwe modules)

#### Module 1 — Sector-Classificatie-Wizard
Stappenplan: sector kiezen → sub-sector → activiteit → grootte (fte + omzet/balans) → output: "essentieel/belangrijk/buiten scope" + verwijzing naar juiste toezichthouder. Bron-decision-tree: NCSC doorverwijsboom.

#### Module 2 — Incident-Meldplicht-Workflow
Hartstuk van het NIS2-aanbod. Triggers vanuit:
- Risk Register (hoog risico → significant incident)
- Handmatige melding
- (Future) API-integratie met SIEM
Workflow:
1. **T+0**: incident-aanmelding, klok start
2. **T+0 tot T+24u**: countdown-timer + Early Warning-form
3. **T+24u**: Early Warning indienen → log + bevestiging
4. **T+24u tot T+72u**: Incident Notification voorbereiden
5. **T+72u**: indienen
6. **T+30 dgn**: Final Report (of progress report bij ongoing)
Persistent immutable log van alle wijzigingen, named owner, escalation-rules, e-mail/SMS reminders. Templates per fase. Optionele integratie met NCSC mijn.ncsc.nl (toekomst).

#### Module 3 — Bestuurder-Training-Tracker (Art 20)
Per bestuurder: profiel, aanstellingsdatum, voltooide trainingen (titel, datum, certificaat-upload), volgende verplichte training, alert bij verstrijken jaarlijkse cycle. Default curriculum: 6 modules van ~30 min (NIS2 basics, risk-management oversight, incident-response, supply-chain governance, board-aansprakelijkheid, sectoraspecten). Rapportage: bestuur-overview voor auditors.

#### Module 4 — ICT Supply Chain Risk Register (uitbreiding bestaand Supplier Mgmt)
Extra velden vs huidige Supplier Mgmt:
- ICT-leverancier ja/nee
- Categorie (cloud, MSP, software, hardware, dataverwerker)
- Kritikaliteit (impact bij uitval)
- CIR-mapping (indien leverancier zelf onder CIR 2024/2690 valt)
- Coordinated sector risk-assessment outputs (Art 22)
- Toegang tot welke systemen/data
- Contract review datum + responsible
- Incident-notificatie-clausule aanwezig

#### Module 5 — Wettelijke Verplichtingen-Tracker
Levend register van Cbw, AMvB, ministeriële regelingen + amendementen. Eigenaar per verplichting, deadline, status (compliant/in progress/gap), bewijs-link. Notification bij regelingswijziging (handmatig redactie-team in MVP, RSS-feed van overheid.nl later).

#### Module 6 — Cross-Framework Dashboard
Mapping-tabel uit §4.2 als data-laag. Per NIS2-eis: link naar één of meerdere 27001-controls en evidence. Score: "30/93 27001-controls dekken NIS2 Art 21" → "70% Art 21-coverage door 27001". Helpt 27001-klanten upselling.

### 6.5 Hergebruik bestaande modules

**Polymorphic koppeling** is sterk te prefereren boven explicit framework_id-velden, exact zoals nu voor 27001 + 9001:

| Module | Hergebruik voor NIS2 |
|---|---|
| Risk Register | Polymorphic; risico kan meerdere `framework_link` records hebben (27001 + NIS2). Filter per framework. |
| Supplier Management | Bestaand. Toevoegen velden voor NIS2 ICT supply chain (zie Module 4). |
| Document Management | Bestaand. Template kan `framework_ids` array hebben. SoA per framework gegenereerd. |
| CAPA | Polymorphic. Een corrective action kan voortvloeien uit 27001-non-conformance én NIS2-finding. |
| Audits | Per framework. Questionnaire-set per framework. |
| Stakeholder Register | Bestaand. NIS2 voegt: NCSC, toezichthouder, sector-CSIRT als verplichte stakeholders. |
| Users & Roles | Nieuwe rol: "Bestuurder (Art 20)" met training-status. |
| Management Review | NIS2 krijgt eigen 5 secties (zie hieronder). |

**Management Review NIS2 secties:**
1. NIS2-scope wijzigingen (sector/size/threshold)
2. Risk treatment effectiviteit (Art 21.2.f)
3. Incident-overzicht + meldplicht-performance
4. Supply-chain status & sectorrisico's (Art 22)
5. Bestuurdertraining & registratie-status

### 6.6 Coach-stappen

**Aanbeveling: 22 coach-steps**, één per chapter. Extra aandacht in coach voor:

- **Step 1 (Scope):** decision-tree-walkthrough met opslag van uitkomst.
- **Step 3 (Registratie):** stap-voor-stap naar mijn.ncsc.nl met checklist van benodigde data.
- **Step 4-5 (Governance):** verplichte bestuurders-onboarding flow.
- **Step 17-19 (Meldplicht):** dry-run "wat zou je doen als nu een incident plaatsvindt?" — tabletop exercise.
- **Step 20 (Wettelijke verplichtingen):** uitleg verschillen Cbw vs EU NIS2 vs CIR.

Voor 27001-klanten extra "fast-track" coach (8 steps) die alleen de delta dekt.

### 6.7 Audit-questionnaires

NIS2 kent **geen formele certificering**, maar wel toezicht. Voorstel:

1. **Self-assessment per Art 21-maatregel** (10 vragenlijsten, ~10 vragen elk) — bewijs-driven, met "hoe weet je dat?" als sub-vraag.
2. **Bestuurders-readiness questionnaire** (5 vragen) — Art 20-compliance check.
3. **Meldplicht-readiness tabletop** (scenario-based) — toetst incident-response keten.
4. **Sector-specifieke add-on** voor digitale dienstverleners onder CIR 2024/2690 (150+ controls).
5. **Pre-inspectie-questionnaire** (RDI/ILT/DNB) — bereidt voor op toezichthouder-bezoek.

Hergebruik bestaande 27001-questionnaires waar mogelijk via mapping uit §4.

### 6.8 MoSCoW Roadmap

**MUST (MVP — voor launch tegen 1 juli 2026 of Q3 2026):**
- Framework-record + 22 chapters
- 22 coach-steps (basis-versie)
- Sector-classificatie-wizard (Module 1)
- Bestuurdertraining-tracker (Module 3 basis)
- Incident-meldplicht-workflow (Module 2 met timers)
- Wettelijke verplichtingen-tracker (Module 5)
- 40 herbruikte + 15 nieuwe documenten = 55 templates
- Cross-framework dashboard MVP (Module 6 basis)
- NCSC-registratie-checklist

**Estimated effort:** 6-8 weken parallel (1 product owner + 2 ontwikkelaars + 1 contentschrijver).

**SHOULD (Q4 2026):**
- ICT Supply Chain Register volledig (Module 4)
- Management Review NIS2 secties (5)
- Self-assessment questionnaires (10x Art 21)
- Knowledge Base 30 NIS2-artikelen
- Bestuurdertraining-curriculum (6 modules content)
- CIR 2024/2690 module voor MSP/cloud (apart pakket)

**Estimated effort:** 8-10 weken.

**COULD (2027):**
- Tabletop incident-simulatie
- API-integratie met SIEM-tools voor incident-trigger
- Auto-melding-koppeling NCSC mijn.ncsc.nl
- Cross-border-impact-tracker
- Sector-specifieke wizards (zorg, energie, financieel)
- Multi-language (DE, FR, EN) voor MSPs met cross-border klanten
- DORA-framework als next-up

**WON'T (out of scope MVP):**
- Formele NIS2-certificering (bestaat niet)
- Realtime threat-intelligence feeds
- Pentest-management
- Audit-as-a-service door eigen experts

---

## 7. Strategische Conclusie & 5 Aanbevelingen

NIS2 is voor Control One een **strategische kans**. Vier factoren komen samen: (1) een wettelijke deadline die Nederlandse organisaties dwingt te handelen vanaf Q3 2026, (2) een groot installed-base van 10.000 entiteiten die geen GRC-tool hebben, (3) een natuurlijke aansluiting bij ons bestaande 27001-aanbod waardoor implementatie-effort beperkt blijft, en (4) een NL-specifieke nood (toezichthouder-routering, Cbw-registratie, NCSC-meldformulieren) die internationale spelers niet adresseren.

**Vijf concrete aanbevelingen:**

1. **Architectuur: kies "apart framework + shared-content-references"**, identiek aan ISO 9001-patroon. Bouw polymorphic koppeling waar nog niet aanwezig (Risk, CAPA, Supplier). Investering: 1 week refactoring; opbrengst: schaalbaar tot 5+ frameworks.

2. **Bouw eerst de "vier killer-features"** waarmee Control One zich onderscheidt: incident-meldplicht-workflow met countdown-timers, sector-classificatie-wizard, bestuurdertraining-tracker, en NL-toezichthouder-routering. Deze features bestaan bij internationale concurrenten niet of slechts oppervlakkig.

3. **Target MVP-launch op 1 september 2026** (na NL-inwerkingtreding 1 juli). Cbw-deadline-druk maakt Q3-Q4 2026 het ideale commerciële window. 27001-klanten krijgen NIS2 als upgrade-pad met cross-framework dashboard als hook.

4. **Hergebruik 35-40 van de 70+ ISO 27001-documenten** 1-op-1 en breid 15 uit met NIS2-varianten. Schrijf 15 echt-nieuwe documenten (registratie, meldformulieren, bestuurder-charter, CIR-mapping). Effort: 3-4 weken contentwerk.

5. **Differentieer met NL-DNA**: bouw expliciete koppelingen naar NCSC mijn.ncsc.nl (registratie-checklist nu, API later), RDI-doorverwijsboom als wizard, sector-toezichthouder-routing-tabel. Internationale spelers (Vanta, Drata, Sprinto) kunnen dit niet snel evenaren. Dit is de moat.

---

## Bronnen

**Officiële wetgeving & guidance:**
- [EUR-Lex: Directive (EU) 2022/2555 (NIS2)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)
- [EUR-Lex: Commission Implementing Regulation (EU) 2024/2690](https://eur-lex.europa.eu/eli/reg_impl/2024/2690/oj/eng)
- [European Commission — NIS2 Directive policy page](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive)
- [ENISA — NIS2 Technical Implementation Guidance](https://www.enisa.europa.eu/publications/nis2-technical-implementation-guidance)
- [ENISA — Mapping Table v1.x](https://www.enisa.europa.eu/sites/default/files/2025-06/ENISA_Technical_Implementation_Guidance_Mapping_table_version_1.0.xlsx)

**NL implementatie:**
- [Rijksoverheid — Tweede Kamer stemt in (april 2026)](https://www.rijksoverheid.nl/actueel/nieuws/2026/04/15/tweede-kamer-stemt-in-met-wetsvoorstellen-cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten)
- [DNV — NIS2 treedt per 1 juli in werking](https://www.dnv.nl/nieuws/2026/nis2-treedt-per-1-juli-in-werking/)
- [NCSC — Cyberbeveiligingswet (NIS2)](https://www.ncsc.nl/cyberbeveiligingswet-nis2)
- [NCSC — Registratieplicht](https://www.ncsc.nl/cyberbeveiligingswet-nis2/bereid-je-voor/registratieplicht)
- [NCSC — Doorverwijsboom Cbw (PDF, okt 2025)](https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2025/oktober/21/doorverwijsboom-cbw-organisaties/25-1104+Doorverwijsboom+Cyberbeveiligingswet+DEF+12.pdf)
- [RDI — Cyberbeveiligingswet](https://www.rdi.nl/onderwerpen/cyberbeveiligingswet)
- [RDI — Sectoren onder toezicht RDI](https://www.rdi.nl/onderwerpen/digitale-weerbaarheid/cyberbeveiligingswet/sectoren-onder-toezicht)
- [Digital Trust Center — NIS2 startpunt](https://www.digitaltrustcenter.nl/nis2/startpunt)
- [Samen Digitaal Veilig — 8 toezichthouders voor 10.000 NIS2-organisaties](https://samendigitaalveilig.nl/nieuws/8-toezichthouders-voor-10-000-nis2-organisaties/)

**Artikel-analyses:**
- [NIS2-Directive.com Art 20 (Governance)](https://www.nis-2-directive.com/NIS_2_Directive_Article_20.html)
- [NIS2-Directive.com Art 21 (Risk-management)](https://www.nis-2-directive.com/NIS_2_Directive_Article_21.html)
- [NIS2-Directive.com Art 23 (Reporting)](https://www.nis-2-directive.com/NIS_2_Directive_Article_23.html)
- [NIS2-Directive.com Art 34 (Fines)](https://www.nis-2-directive.com/NIS_2_Directive_Article_34.html)
- [Glocert — NIS2 Article 21 Risk Management Measures Explained](https://www.glocertinternational.com/resources/guides/nis2-article-21-risk-management-measures-explained/)
- [Glocert — NIS2 Incident Reporting Playbook](https://www.glocertinternational.com/resources/guides/nis2-incident-reporting-playbook-article-23/)
- [DLA Piper — Management bodies rules](https://www.dlapiper.com/en-us/insights/publications/2025/11/nis2-directive-explained-part-2-management-bodies-rules)
- [Legiscope — NIS2 Compliance Guide 2026](https://www.legiscope.com/blog/nis2-compliance-guide.html)
- [Legiscope — Essential vs Important entities](https://www.legiscope.com/blog/nis2-essential-important-entities.html)
- [Orizon — Sectoren essential important](https://orizon.one/blog/nis2-sectors-essential-important)
- [NIS-2-Templates — Scope](https://www.nis-2-templates.com/scope/)
- [Advisera — CIR 2024/2690 Digital Infrastructure](https://advisera.com/articles/nis2-cir-2024-2690-digital-infrastructure-companies/)

**Mappings ISO 27001:2022:**
- [Seeburger — EU-NIS2 verification through ISO 27001 mapping](https://blog.seeburger.com/eu-nis2-verification-through-mapping-to-iso-27001-controls/)
- [Dataguard — NIS2 Requirements Mapped to ISO 27001:2022 Controls](https://www.dataguard.com/nis2/iso-27001-mapping)
- [ISMS.online — NIS2 vs ISO 27001 crosswalk](https://www.isms.online/nis-2/requirements/iso-27001-mapping/)
- [OpenKRITIS — NIS2 Implementing Act ISO 27001 Mapping](https://www.openkritis.de/massnahmen/implementing-acts-it-nis2-mapping.html)

**Concurrentielandschap:**
- [Cyberday.ai — NIS2 framework](https://www.cyberday.ai/use-cases/nis2)
- [Cyberday.ai — Cyberbeveiligingswet Nederland](https://www.cyberday.ai/frameworks/cyberbeveiligingswet-nederland)
- [ISMS.online — NIS2 frameworks](https://www.isms.online/frameworks/nis2/)
- [SureCloud — NIS2 Compliance Software 2026](https://www.surecloud.com/blog-hub/nis2-compliance-software)
- [Orbiq — Best ISMS Software Tools 2026](https://www.orbiqhq.com/compliance-automation/best-isms-software)
- [Ardion — Best NIS2 Software 2026](https://ardion.io/blog/best-nis2-software/)
- [Kopexa — NIS2 Costs 2026](https://kopexa.com/en/catalog/nis-2/kosten)
