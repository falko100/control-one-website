# ISO 9001 QMS-portal — concurrentieonderzoek & feature-blueprint

**Datum:** 10 juni 2026
**Doel:** Bepalen welke modules en features Control One moet toevoegen om als volwaardige ISO 9001 QMS-portal te functioneren — naast de bestaande compliance-content (35 chapters, 28 coach steps, 40 documenten, 70 checklist-items, 7 audit-questionnaires, 4 management review-secties).
**Scope:** Concurrentieonderzoek op 14 QMS-leveranciers (NL + internationaal), feature-matrix, gap-analyse vs. Control One, MoSCoW-roadmap.

---

## 1. Executive summary

Voor ISO 27001 — onze huidige hoofdmodule — is een GRC-portal goed genoeg: documenten, risico's, leveranciers, audits, CAPA en stakeholders dekken het normbeeld. Voor **ISO 9001** is dat niet zo. De norm is sterk operationeel en verwacht dat een organisatie haar **dagelijkse kwaliteit, productie en klantinteractie** in het systeem aantoont. Daardoor verwachten 9001-klanten — en auditors — extra modules die in onze huidige 27001-portal ontbreken: **kalibratie-/onderhoudregisters, training- en competentiematrix, klachten- en klanttevredenheidsmodule, proceskaarten met KPI's, non-conformity-werkstroom met 8D/5-Why, inspecties (incoming/in-process/final) en suggestieboxen voor continuous improvement**.

Het concurrentielandschap is gepolariseerd. Aan de **enterprise-kant** (MasterControl, ETQ Reliance, Intellect, AssurX, Veeva Vault QualityOne) zit een breed pakket van 20-40 modules met diepe integratie, no-code-workflows en GxP-validatie — duur (€50-200k+/jaar) en zwaar voor MKB. Aan de **middenklasse** (Qualio, Greenlight Guru, Effivity, QT9, isoTracker) zien we 15-25 modules met focus op één markt (life sciences of generieke ISO). In de **MKB-/EU-laag** (ISOPlanner, Mavim, Conformiso, Optimiso) zit Control One's doelgroep: betaalbare modules in de €50-150/maand/user range, Nederlandse content, lichte UI.

De **gap-analyse** laat zien dat Control One alle **administratieve/compliance-rugflanken** al heeft (documenten, CAPA, risico's, leveranciers, audits, management review). Wat **ontbreekt** zijn juist de **operationele tegels** waar 9001-organisaties dagelijks in werken:

- Equipment-register met **kalibratie- én onderhoudsplanner**
- **Training- en competentiematrix** (skills × medewerker, expiry-tracking)
- **Klachten- en klanttevredenheidsmodule** (klachten-intake, NPS/CSAT-meting, Net Promoter loop)
- **Proceskaarten/proces-eigenaar** met KPI per proces (clause 4.4)
- **Non-conformity werkstroom met 8D/5-Why** (apart van CAPA)
- **Inspectie-module** (incoming, in-process, final inspection)
- **Suggestiebox / Kaizen-board** voor verbetervoorstellen (clause 10.1/10.3)
- **Design & Development-tracker** (alleen voor bedrijven die 8.3 niet uitsluiten)
- **Mobile-first audit/inspectie app** met offline-mode

Onze **MoSCoW-aanbeveling** voor MVP-launch (3 maanden): 7 MUST-have modules (training, klachten, equipment+kalibratie+onderhoud, NC-werkstroom, proceskaart+KPI, inspectie, klanttevredenheid). Daarmee zit Control One op het functionele niveau van ISOPlanner/Effivity, maar met onze sterkere content-laag (coach, kennisbank, NL-templates).

---

## 2. Concurrentielandschap

| # | Leverancier | Land | Doelgroep | Pricing-range | Aantal modules | Sterkste features |
|---|-------------|------|-----------|---------------|----------------|-------------------|
| 1 | **ISOPlanner** | NL/BE | MKB, multi-ISO | €59-119/mnd/user | ~12 (MS365-overlay) | Microsoft 365-integratie, PDCA-workflow, AI-tasking |
| 2 | **Conformiso** | NL | MKB | Onbekend | ~10 | NL-content, audit-flow, simpel UI |
| 3 | **Mavim** | NL | Enterprise BPM | Enterprise (€€€) | 6 disciplines | Procesmodellering, ArchiMate, BPM-mapping, MS-stack |
| 4 | **Effivity** | IN/global | MKB-Mid Market | €69-199/mnd/user | 15 modules | Breed pakket, incl. design/HR/operations, mobile app |
| 5 | **Qualio** | US | Life sciences (mid) | ~$15-30k/jaar | ~12 | CAPA, supplier, design control, AI-mapping |
| 6 | **Greenlight Guru** | US | Medical devices | $€€€ enterprise | ~12 | Design Controls, ISO 14971-risico, MDR |
| 7 | **MasterControl** | US | Pharma/MedTech | $€€€ enterprise | 30+ apps | Closed-loop QMS, GxP, training-pad |
| 8 | **Intellect QMS** | US | Manufacturing | Mid-enterprise | 25+ no-code apps | AI-analyse, no-code builder, modulair |
| 9 | **ETQ Reliance (Hexagon)** | US | Enterprise mfg | $€€€ enterprise | 40+ apps | SPC, EHS, drag-drop builder |
| 10 | **IsoTracker** | UK | MKB-Mid | £€ modular | ~7 stand-alones | Goedkoop, modulair, document- en klachtenmodule |
| 11 | **AssurX** | US | Manufacturing/Reg | $€€€ enterprise | ~15 | Kalibratie, customer quality, SPC |
| 12 | **QT9 QMS** | US | Mfg/Med devices | $€$€ mid-market | **25+ modules** | Breedste out-of-the-box (calibration, inspections, projects, safety) |
| 13 | **Veeva Vault QualityOne** | US | Pharma/Consumer | Enterprise (€€€€) | 20+ apps | Cloud GxP, document-platform |
| 14 | **Sparta/TrackWise** | US | Pharma/MedTech | Enterprise | 20+ | Workflow engine, audit-history |
| + | **Konsolute** | UK | MS365-MKB | Subscription | ~6 | MS365-native, multi-ISO |
| + | **Optimiso** | CH | EU MKB | Modular | ~10 | QSE bundle, EU-content |

**Bronnen:**
- [ISOPlanner ISO 9001](https://isoplanner.app/iso-9001/) en [pricing](https://isoplanner.app/nl/pricing/)
- [Effivity QMS features](https://www.effivity.com/QMS/iso-9001-software-features.htm)
- [Qualio product](https://www.qualio.com/product) en [Qualio QMS pakket](https://www.qualios.com/en/qms-package.html)
- [MasterControl QMS](https://www.mastercontrol.com/quality/qms/) en [ISO 9001-pagina](https://www.mastercontrol.com/library/quality/iso-9001/)
- [Intellect QMS Platform](https://intellect.com/qms-platform)
- [ETQ Reliance](https://www.etq.com/) en [QMS-pagina](https://www.etq.com/solutions/qms/)
- [isoTracker producten](https://www.isotracker.com/products/)
- [AssurX enterprise QMS](https://www.assurx.com/enterprise-quality-management-software/)
- [QT9 modules overzicht](https://qt9software.com/qms/modules)
- [Greenlight Guru QMS](https://www.greenlight.guru/qms)
- [Mavim BPM-platform](https://www.mavim.com/)

---

## 3. Feature-matrix (modules × leverancier)

Legenda: ✓ = standaardmodule, ◯ = beperkt/optioneel/add-on, — = niet aanwezig
(Alleen de 12 grootste concurrenten in de matrix opgenomen)

| Module / Feature | ISOPlanner | Conformiso | Effivity | Qualio | Greenlight | MasterCtrl | Intellect | ETQ | isoTracker | AssurX | QT9 | Mavim |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Document control | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Process maps / proceskaarten | ◯ | ◯ | ✓ | — | — | ◯ | ◯ | ✓ | — | ◯ | ◯ | ✓ |
| KPI per proces / dashboards | ◯ (PowerBI) | ◯ | ✓ | ✓ | ✓ | ✓ | ✓ (AI) | ✓ | ◯ | ✓ | ✓ | ✓ |
| Risk register | ✓ | ✓ | ✓ | ✓ | ✓ (14971) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| FMEA | — | — | — | — | ✓ | ◯ | ◯ | ✓ | — | ✓ | ✓ | — |
| Internal audit | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| External / certification audit-prep | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ◯ |
| Supplier register | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ◯ |
| Supplier scorecard / evaluation | — | ◯ | ✓ | ✓ | ◯ | ✓ | ✓ | ✓ | — | ✓ | ✓ | — |
| Supplier portal (self-service) | — | — | ◯ | ◯ | — | ✓ | ✓ | ✓ | — | ✓ | ✓ | — |
| Customer complaints | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Customer surveys / NPS/CSAT | — | — | ✓ | — | — | ◯ | ◯ | ✓ | — | ✓ | ✓ | — |
| Customer portal | — | — | ◯ | — | — | ◯ | ◯ | ✓ | — | ◯ | ✓ | — |
| CAPA / corrective action | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ◯ |
| Non-conformity (separated) + 8D/5-Why | — | ◯ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Calibration register | — | — | ◯ | — | ◯ | ◯ | ◯ | — | — | ✓ | ✓ | — |
| Preventive maintenance | — | — | ◯ | — | — | ◯ | ◯ | — | — | ◯ | ✓ | — |
| Equipment register | — | — | ✓ | — | ◯ | ◯ | ✓ | ◯ | — | ✓ | ✓ | — |
| Training & competence matrix | — | ◯ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Skills / qualification expiry | — | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ◯ | ✓ | — |
| LMS / quiz / test | — | — | ◯ | ◯ | ◯ | ✓ | ✓ | ✓ | ◯ | — | ◯ | — |
| Change management / ECO | ◯ | ◯ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ |
| Management review module | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | ◯ |
| Dashboards & analytics | ◯ | ◯ | ✓ | ✓ | ✓ | ✓ | ✓ (AI) | ✓ | ◯ | ✓ | ✓ | ✓ |
| Workflow automation | ✓ | ◯ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ◯ | ✓ | ✓ | ✓ |
| Mobile / field app | ◯ (MS Teams) | — | ✓ | ◯ | ◯ | ✓ | ✓ | ✓ | — | ◯ | ◯ | — |
| Document editor / NL-templates | ◯ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Continuous improvement / Kaizen | — | — | ◯ | — | — | ◯ | ✓ | ✓ | — | ✓ | ◯ | ✓ |
| Design & development (8.3) | — | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | — |
| Production / service provision | — | — | ✓ | — | ✓ | ◯ | ✓ | ✓ | — | ◯ | ✓ | — |
| Incoming/in-process/final inspection | — | — | ✓ | — | — | ◯ | ✓ | ✓ | — | ✓ | ✓ | — |
| SPC (statistical process control) | — | — | — | — | — | ◯ | ◯ | ✓ | — | ✓ | ◯ | — |
| EHS (safety) | — | — | ◯ | — | — | ◯ | ◯ | ✓ | — | ✓ | ✓ | — |
| Stakeholder register | ✓ | ◯ | ◯ | — | — | ◯ | ◯ | — | — | — | — | ✓ |

**Patroon:** alle 12 hebben document, audit, CAPA, supplier basis, management review. Pas vanaf Effivity-niveau krijg je training, klachten, design & inspectie. **Kalibratie + preventief onderhoud** is een differentiator: alleen QT9, AssurX, en deels Intellect/MasterControl hebben dat goed.

---

## 4. Categoriegewijze diepteanalyse — 18 module-groepen

### 4.1 Document & Records Management
Alle 12 leveranciers hebben dit. Standaardfunctionaliteit: versie-historie, approval workflow, distributie-lijst (wie heeft het ontvangen + gelezen), automatische review-cyclus, watermerk/header, gecontroleerde print, change-log. MasterControl en Veeva noemen dit hun fundament, met audit-trail volgens 21 CFR Part 11. ([MasterControl document module](https://www.mastercontrol.com/quality/qms/))

**Must-have voor 9001:** "lezen-en-akkoord-verklaring" per document (training-link), distributie-matrix per rol, jaarlijkse review-reminder, controlled copy nummering.

### 4.2 Process Management — proceskaarten + KPI's (clause 4.4)
Het meest **onderbelichte** in compliance-portals, maar **kern van 9001**. Effivity laat per proces vastleggen: input, owner, RACI, required knowledge, output, risico's, effectiviteitsparameters ([Effivity process module](https://www.effivity.com/QMS/iso-9001-software-features.htm)). Mavim is hierin de specialist met ArchiMate-mapping en BPMN-export ([Mavim BPM](https://www.mavim.com/business-process-management)). QT9 en Intellect tonen process performance via KPI-dashboards.

**Must-have:** een "Proceskaart"-entiteit met velden (naam, eigenaar, input, output, RACI, KPI-set, frequentie, gekoppelde documenten + risico's). KPI's koppelbaar aan management review.

### 4.3 Risk & Opportunity Management
Alle 12 hebben dit. Greenlight Guru staat eruit met 14971-conforme product-risico's, ETQ/AssurX met SPC-gekoppelde proces-risico's. Mavim onderscheidt zich met "opportunity register" naast risk register — een 9001-specifieke eis (clause 6.1 noemt expliciet "risico's en kansen"). ([ISMS.online 4.4 explainer](https://www.isms.online/iso-9001/clause-4-4-quality-management-system-and-its-processes/))

**Have:** Control One heeft dit al. **Should-have:** uitbreiden met "kansen-register" naast risk register (apart tabblad), en koppeling aan proceskaart.

### 4.4 Audit Management
Alle 12 hebben dit. Veelgebruikte features: audit-planning, checklist-templates, finding-tracker, follow-up, audit-rapport export. GoAudits/Inspectly360/SafetyCulture domineren als **mobile-first audit apps** ([GoAudits inspections](https://goaudits.com/quality/), [Inspectly360](https://www.inspectly360.com/checklists/iso-standards/iso-9001-audit-checklist/)). Intellect en ETQ benadrukken AI-finding-clustering.

**Must-have:** Control One heeft audit al. **Should-have:** mobile-friendly checklist-uitvoering met foto-attach en offline-cache; auto-conversie van auditfindings naar NC's.

### 4.5 Supplier / Vendor Management
Alle 12 hebben register. **Differentiator** is de scorecard (gewogen KPI's: kwaliteit, levertijd, prijs, compliance) en de supplier portal voor self-service docs (certificaten upload, surveys invullen). QT9 noemt expliciet "Supplier Web Portal" en "Supplier Surveys" als aparte modules ([QT9 modules](https://qt9software.com/qms/modules)). AssurX heeft supplier corrective action workflow.

**Have:** Control One heeft Supplier Register. **Should-have:** scorecard met gewogen criteria, certificate-expiry-alerts. **Could-have:** supplier-self-service portal.

### 4.6 Customer Management — klachten, feedback, tevredenheid
**Kern van 9001 (clause 9.1.2):** organisatie moet klanttevredenheid meten. Effivity, QT9, AssurX en Intellect hebben aparte modules voor: klachten-intake (multi-channel: web, mail, telefoon), root-cause, escalatie, klanttevredenheidsenquête (NPS/CSAT), klantcommunicatie-log. ([Customer feedback QT9](https://qt9software.com/qms/customer-feedback-software), [AssurX customer quality](https://www.assurx.com/customer-quality-management-software/), [Effivity complaint handling](https://www.effivity.com/blog/complaint-handling-in-iso-9001))

**Mist bij Control One:** dit moeten we volledig bouwen. Klachten-module is **MUST**. Tevredenheidsmeting is **SHOULD**.

### 4.7 CAPA / Non-conformity Management
Alle 12 hebben CAPA. **Onderscheidend** is de scheiding tussen NC en CAPA, en root-cause-tooling: 5-Why, fishbone, 8D-report ([8D & QMS](https://www.qse-academy.com/root-cause-analysis-for-non-conformities-using-the-8d-method/)). Effivity, QT9, Intellect en MasterControl hebben 8D-templates standaard.

**Have:** Control One heeft CAPA. **Should-have:** dedicated Non-Conformity register, gescheiden van CAPA, met 5-Why/8D-template-veld en automatische CAPA-trigger.

### 4.8 Equipment / Calibration / Maintenance
**Cruciale 9001-feature** (clause 7.1.5 monitoring & measuring resources, 7.1.3 infrastructure). Alleen **QT9, AssurX en deels Intellect** hebben hier echt sterke modules ([QT9 calibration](https://qt9software.com/qms/calibration-software), [AssurX calibration](https://www.assurx.com/calibration-management-software/)). Specifieke features: instrument-register met serienr/locatie/owner, kalibratie-historie + certificaat-upload, automatische scheduling, fail/pass-tracking, link naar onderhoud, MTBF/MTTR, asset-genealogie.

**Mist bij Control One:** dit is dé grootste gap. **MUST** voor MVP.

### 4.9 Training & Competence Management (clause 7.2)
Effivity, MasterControl, Qualio, Intellect, AssurX, QT9 hebben alle een **competence matrix** (medewerker × skills met status: training plan / in progress / competent / expired). ([ISO 9001 skills matrix AG5](https://www.ag5.com/iso-9001-skills-management-quality-system-compliance/), [Training Tiger](https://trainingtiger.co/features/skills-matrix)) Sommige (MasterControl, Effivity) hebben ook **e-learning/LMS** met quizzes en automatische sequencing.

**Mist bij Control One:** Training-module is **MUST**. LMS/quiz is **COULD**.

### 4.10 Change Management (clause 6.3 + 8.5.6)
Alle 12 hebben dit, vooral als **ECO (Engineering Change Order)** in productie. Effivity, QT9, MasterControl en ETQ hebben dedicated workflows ([Effivity change](https://www.effivity.com/iso-9001-2015-qms/change-management.html), [QT9 ECO](https://qt9software.com/qms/engineering-change-orders-software)).

**Have / Should-have:** Control One heeft change in documenten. Een dedicated "Change Request" entiteit (apart van document-versie) zou een **SHOULD** zijn.

### 4.11 Management Review (clause 9.3)
Alle 12 hebben dit, ofwel als dashboard ofwel als template. AssurX heeft een dedicated [Quality Management Review software](https://www.assurx.com/quality-management-review-software/). Effivity & QT9 trekken automatisch data uit andere modules.

**Have:** Control One heeft 4 review-secties al. **Should-have:** auto-vullen van review-secties met data uit klachten, audits, KPI's, training-status.

### 4.12 Dashboards & Analytics / KPI Reporting
Alle 12 hebben dit. AI-aangedreven dashboards (Intellect, ETQ, Qualio) zijn de moderne lijn ([Intellect AI](https://intellect.com/qms-platform)). ISOPlanner gebruikt Power BI als overlay.

**Should-have:** Control One zou per module + cross-module KPI's moeten kunnen tonen, met drill-down per proces.

### 4.13 Workflow & Automation
Standaard bij alle middenklasse+. No-code/low-code workflows zijn een differentiator bij Intellect, ETQ en AssurX.

**Should-have voor Control One:** simpele rule-based workflow (als NC dan CAPA, als audit-finding dan NC, als klacht major dan CAPA + management-review-item).

### 4.14 Mobile / Field Apps
Effivity, MasterControl, Intellect, ETQ, en specifieke mobile-first players (GoAudits, SafetyCulture, Inspectly360) hebben dedicated mobile inspectie-apps met offline-mode. ISOPlanner werkt via Microsoft Teams. ([SafetyCulture](https://safetyculture.com/apps/quality-control))

**Could-have:** mobile inspectie-app voor Control One. PWA met offline-cache zou een sweet spot zijn.

### 4.15 Document Editor / NL-templates
Alle 12 hebben templates, maar **Nederlandse templates** zijn schaars: alleen ISOPlanner, Conformiso, Mavim, Optimiso scoren echt op NL-content.

**Have:** Control One heeft al 40 NL-templates — dit is onze **sterkste kant**.

### 4.16 Continuous Improvement / Kaizen / suggestion-box
Effivity, Intellect, ETQ en Mavim hebben dedicated improvement-/kaizen-boards. ([Continuous improvement & ISO 9001](https://oneri.io/en/blog/iso-9001-and-suggestion-system/))

**Mist bij Control One:** Suggestie/Kaizen-board als **COULD**.

### 4.17 Design & Development (clause 8.3)
Effivity, Qualio, Greenlight Guru, MasterControl, Intellect, AssurX, QT9 hebben aparte design control-modules. Voor service-bedrijven kan 8.3 worden uitgesloten — dus dit is optioneel maar wel SHOULD voor produktbedrijven.

**Mist bij Control One:** **COULD** met "Project/Design"-entiteit voor product-ontwikkelfases.

### 4.18 Production & Service Provision (clause 8.5) + Inspection
Effivity, QT9, AssurX, Intellect en ETQ hebben **incoming/in-process/final inspection** modules ([QT9 inspection](https://qt9software.com/qms/inspection-software)). SPC (statistical process control) is alleen bij high-end (ETQ, AssurX, MasterControl).

**Mist bij Control One:** Inspection-module is **SHOULD** voor productiebedrijven. SPC is **WON'T have** voor deze release.

---

## 5. Gap-analyse Control One

| Module | 27001-portal heeft | 9001-relevant? | Gap voor 9001? |
|---|---|---|---|
| Document Management (versies, distributie) | ✓ | ja | minor (review-cyclus, "read & sign") |
| Records / Evidence | ✓ | ja | OK |
| CAPA / Corrigerende Acties | ✓ | ja | OK (maar NC-split missend) |
| Risk Register | ✓ | ja | **uitbreiden** met opportunity-tab |
| Supplier Management | ✓ | ja | **uitbreiden** met scorecard |
| Audit module | ✓ | ja | minor (mobile checklist) |
| Stakeholder Register | ✓ | ja | OK |
| Users & Roles | ✓ | ja | OK |
| Management Review secties | 4 specifiek 9001 ✓ | ja | OK (data-auto-fill SHOULD) |
| Knowledge Base | 6 cat 9001 ✓ | ja | OK |
| Coach module (28 steps) | ✓ | ja | OK |
| Framework + chapters + checklist | ✓ (35/70/7) | ja | OK |
| Questionnaires | 7 audit-set ✓ | ja | OK |
| **Equipment / Calibration / Maintenance** | — | ja, **kritisch** (7.1.5) | **MISSEND — MUST** |
| **Training & Competence Matrix** | — | ja, **kritisch** (7.2) | **MISSEND — MUST** |
| **Customer Complaints** | — | ja, **kritisch** (9.1.2/10.2) | **MISSEND — MUST** |
| **Customer Satisfaction (NPS/CSAT/survey)** | — | ja (9.1.2) | **MISSEND — MUST** |
| **Non-Conformity register (apart van CAPA)** | — | ja (10.2) | **MISSEND — MUST** |
| **Process Map + KPI per proces** | — | ja, **kern** (4.4) | **MISSEND — MUST** |
| **Inspection (incoming/in-process/final)** | — | ja voor mfg (8.6) | **MISSEND — SHOULD** |
| Change Management (apart entiteit) | doc-only | ja (6.3/8.5.6) | partial — **SHOULD** |
| Mobile-first audit/inspectie app | — | nice | **COULD** |
| Continuous Improvement / Kaizen-board | — | ja (10.1) | **COULD** |
| Design & Development tracker | — | ja (8.3, exclusable) | **COULD** |
| Workflow automation rules | partial | ja | **SHOULD** |
| Auto-fill management review | — | ja | **SHOULD** |
| LMS / quiz | — | nee | **WON'T (deze release)** |
| SPC (statistical process control) | — | enterprise mfg only | **WON'T** |
| Supplier-self-service portal | — | nice | **WON'T (deze release)** |

---

## 6. MoSCoW-roadmap met effort-inschatting

Legenda effort: **S** = 1-3 dagen, **M** = 1-2 weken, **L** = 3-6 weken (1 backend-dev + 1 frontend-dev).

### 6.1 MUST have — voor MVP-launch ISO 9001 (Q3 2026)

| # | Feature | Effort | Clause(s) | Minimaal data-model + UI |
|---|---------|--------|-----------|---|
| M1 | **Equipment-register + Kalibratie** | **L** | 7.1.5, 7.1.3 | Entiteit `Equipment` (naam, serienr, locatie, owner, type, status, kalibratie-interval). Entiteit `Calibration` (datum, uitgevoerd door, intern/extern, pass/fail, certificaat-upload, volgende datum). Lijstview met overdue-alert. |
| M2 | **Preventief onderhoud (schedule)** | **M** | 7.1.3 | Entiteit `MaintenancePlan` per Equipment (frequentie, taken-checklist, owner). Entiteit `MaintenanceLog` (datum, uitgevoerd door, notities, kosten). Kalenderview + reminders. |
| M3 | **Training & Competentiematrix** | **L** | 7.2, 7.3 | Entiteiten: `Skill`/`Competence` (naam, type, expiry-jaren), `EmployeeSkill` (medewerker × skill × status × proven-date × expiry-date × evidence-file). Matrix-view per afdeling. Expiry-dashboard. |
| M4 | **Customer Complaints** | **M** | 9.1.2, 10.2 | Entiteit `Complaint` (klant, ontvangst-datum, kanaal, beschrijving, impact, owner, status, root-cause, resolutie-datum, klant-tevreden-na). Workflow: nieuw → onderzoek → resolutie → afsluiten. Auto-link naar NC + CAPA. |
| M5 | **Klanttevredenheidsmeting** | **M** | 9.1.2 | Entiteit `Survey` (titel, type NPS/CSAT/eigen, klant, vraag-set, response, score). Dashboard met trend per kwartaal. Triggers vanuit project- of order-afsluiting. |
| M6 | **Non-Conformity register (apart)** | **M** | 10.2 | Entiteit `NonConformity` (gevonden datum, bron: audit/klacht/inspectie/intern, beschrijving, ernst, owner, root-cause-veld + 5-Why-template, corrective-action-link). Auto-promote naar CAPA bij major NC. |
| M7 | **Process Map + KPI per proces** | **L** | 4.4, 9.1.1 | Entiteit `Process` (naam, owner, input, output, RACI, gekoppelde documenten, risico's, KPI-set met targets). UI: lijst + flow-view + detailblad met KPI-trend. Koppeling aan management review. |

**Totaal MUST effort: ~16-22 weken** (1 squad van 2 devs).

### 6.2 SHOULD have — binnen 3 maanden na MVP (Q4 2026)

| # | Feature | Effort | Clause(s) | Beschrijving |
|---|---------|--------|-----------|---|
| S1 | Inspection-module (incoming / in-process / final) | **L** | 8.6 | Inspectie-plan + uitvoering met pass/fail + foto's. Koppeling aan order/lot. Genereert NC bij fail. |
| S2 | Mobile/PWA voor audit + inspectie (offline-mode) | **L** | 8.6, 9.2 | PWA-versie van audit- en inspection-modules, met IndexedDB-cache, foto-upload, sync-bij-online. |
| S3 | Change Request entiteit (apart van document-versie) | **M** | 6.3, 8.5.6 | `ChangeRequest` (initiator, type proces/product/system, beschrijving, impact-analyse, approval-flow, implementatie-datum). |
| S4 | Supplier Scorecard | **M** | 8.4 | Uitbreiding bestaande Supplier: gewogen criteria (kwaliteit, levertijd, compliance, prijs), automatische score per kwartaal, certificate-expiry-alerts. |
| S5 | Auto-fill Management Review | **M** | 9.3 | Bij openen review-sectie pull data uit klachten, audits, NC's, training-status, KPI's. Editor met "approve & lock". |
| S6 | Opportunity Register (naast Risk) | **S** | 6.1.1 | Tab onder Risk Register: "Kansen", gelijke structuur (beschrijving, impact, owner, status). |
| S7 | Workflow-rules engine | **M** | n.v.t. | Eenvoudige if-this-then-that: trigger (entiteit aangemaakt/status veranderd) → actie (task aanmaken / mail / linked record). |
| S8 | KPI-dashboard cross-module | **M** | 9.1.1, 9.3 | Eén overzichtspagina met "kwaliteit-vitaal" KPI's: open NC's, overdue CAPA's, klachten-trend, kalibratie-overdue, training-expired. |

**Totaal SHOULD effort: ~14-18 weken.**

### 6.3 COULD have — Q1-Q2 2027

| # | Feature | Effort | Clause(s) |
|---|---------|--------|-----------|
| C1 | Suggestion/Kaizen-board (improvement ideas) | M | 10.1, 10.3 |
| C2 | Design & Development tracker (project-gates voor 8.3) | L | 8.3 |
| C3 | LMS-light: quiz/test/leesbevestiging gekoppeld aan training | L | 7.2 |
| C4 | Document "read & sign" met audit-trail per medewerker | S | 7.5 |
| C5 | Supplier self-service portal (login + cert upload + survey response) | L | 8.4 |
| C6 | FMEA-template + tool (Risk × Severity × Occurrence × Detection) | M | 6.1 |
| C7 | Customer portal voor klachtmelding | M | 9.1.2 |

### 6.4 WON'T have — deze release expliciet uit scope

- SPC (Statistical Process Control) met control charts en Cp/Cpk — alleen voor enterprise mfg, niet onze doelgroep.
- 21 CFR Part 11 elektronische handtekeningen — pas relevant als we naar pharma gaan.
- ERP-integratie (SAP, Dynamics) — out of scope voor MVP, eventueel API-laag later.
- IATF 16949 / AS9100 / 13485-specifieke modules — eerst 9001 vastleggen.
- Volledige BPMN/ArchiMate procesmodellering (Mavim-niveau) — onze proceskaart is een lichte vorm.

---

## 7. Strategische conclusie — 5 aanbevelingen

### 7.1 Bouw eerst de zeven operationele tegels die compliance-portals missen
ISOPlanner, Conformiso en ook GRC-spelers als Vanta blijven steken op het compliance-laag (documenten, risico's, audits). Daarmee dek je 27001 prima af, maar **niet 9001**. Door als eerste in dit segment **kalibratie+onderhoud, training-matrix, klachten, NC+5-Why, klanttevredenheid, proceskaart+KPI en inspectie** te bouwen, scoort Control One op feature-pariteit met Effivity en QT9 — terwijl die niet in NL en niet met onze coach-content komen. Dit is het **strategisch venster**: niemand in NL bedient MKB-9001 met deze diepte.

### 7.2 Maak van de "Proceskaart + KPI" de signature-feature
Clause 4.4 ("the process approach") is **het hart van 9001** en wordt door 80% van de portals onderbehandeld. Door dit centraal te zetten — proceskaart als landing page, KPI's per proces zichtbaar, automatisch geladen in management review — zet Control One zich op de kaart als "echt-9001-portal" in plaats van "compliance-checkbox-tool". Wij hebben sowieso al de Coach- en kennisbank-laag eromheen.

### 7.3 NL-content + ISO 27001-fundament is onze unfair advantage — verzilveren
We hebben al 35 chapters, 28 coach steps, 40 templates, 7 audits, 4 review-secties, 6 KB-categorieën in goed Nederlands. **Geen enkele internationale concurrent** komt hier aan. Bij het bouwen van de operationele tegels: zorg dat elke module **NL-content default** heeft (kalibratie-procedure, training-template, klachten-flowchart, NC-formulier). Dit is geen technische taak maar redactionele — en hier excelleren we.

### 7.4 Koppel de modules cross-module via "evidence-flow"
De winnaars in QMS-software (MasterControl, Intellect, AssurX) zijn closed-loop: een klacht → NC → CAPA → change → training → management review. Maak dit de architectuur-keuze van Control One. Elke entiteit krijgt een "evidence-stream" (welke andere records hangen eraan vast?). Voor de auditor wordt het systeem zo zelf het bewijs — wat 9001-certificering vereist.

### 7.5 Mobile-first audit + inspectie als COULD die snel SHOULD wordt
Inspecties en audits gebeuren op de werkvloer. Effivity, QT9 en zeker mobile-only spelers (SafetyCulture, GoAudits, Inspectly360) winnen daar. Een lichte PWA-versie van onze audit- en inspectie-module met offline cache + foto-upload is binnen 4-6 weken te bouwen op het bestaande Laravel-/Vue/React-fundament. Dit verschuiven naar Q4 2026 zou ons in pole-position zetten ten opzichte van de Nederlandse competitie (ISOPlanner, Conformiso) die hier **niet** scoren.

---

## Bronnen (selectie)

- ISOPlanner — ISO 9001-pagina: <https://isoplanner.app/iso-9001/>
- ISOPlanner — pricing: <https://isoplanner.app/nl/pricing/>
- Effivity — ISO 9001 software features: <https://www.effivity.com/QMS/iso-9001-software-features.htm>
- Effivity — QMS overview: <https://www.effivity.com/quality-management-system-software.html>
- Qualio — product: <https://www.qualio.com/product>
- Qualio — ISO 9001 overview: <https://www.qualio.com/blog/iso-9001-standard>
- MasterControl — QMS: <https://www.mastercontrol.com/quality/qms/>
- MasterControl — ISO 9001-compliance: <https://www.mastercontrol.com/library/quality/iso-9001/>
- Intellect QMS Platform: <https://intellect.com/qms-platform>
- ETQ Reliance — QMS-pagina: <https://www.etq.com/solutions/qms/>
- isoTracker — producten: <https://www.isotracker.com/products/>
- AssurX — enterprise QMS: <https://www.assurx.com/enterprise-quality-management-software/>
- AssurX — calibration: <https://www.assurx.com/calibration-management-software/>
- AssurX — customer quality: <https://www.assurx.com/customer-quality-management-software/>
- QT9 — modules overzicht: <https://qt9software.com/qms/modules>
- QT9 — calibration: <https://qt9software.com/qms/calibration-software>
- QT9 — customer feedback: <https://qt9software.com/qms/customer-feedback-software>
- QT9 — engineering change orders: <https://qt9software.com/qms/engineering-change-orders-software>
- QT9 — inspection: <https://qt9software.com/qms/inspection-software>
- Greenlight Guru — QMS: <https://www.greenlight.guru/qms>
- Mavim — Business Process Management: <https://www.mavim.com/business-process-management>
- ISMS.online — Clause 4.4 explainer: <https://www.isms.online/iso-9001/clause-4-4-quality-management-system-and-its-processes/>
- AG5 — ISO 9001 skills matrix: <https://www.ag5.com/iso-9001-skills-management-quality-system-compliance/>
- ShyftPlan — Skill matrix & ISO 9001: <https://shyftplan.com/en/skill-management/skill-matrices-iso9001>
- Effivity — complaint handling: <https://www.effivity.com/blog/complaint-handling-in-iso-9001>
- QSE Academy — 8D root cause: <https://www.qse-academy.com/root-cause-analysis-for-non-conformities-using-the-8d-method/>
- Effivity — change management: <https://www.effivity.com/iso-9001-2015-qms/change-management.html>
- Oneri — continuous improvement & ISO 9001: <https://oneri.io/en/blog/iso-9001-and-suggestion-system/>
- GoAudits — quality inspections: <https://goaudits.com/quality/>
- SafetyCulture — quality control apps: <https://safetyculture.com/apps/quality-control>
- Inspectly360 — ISO 9001 checklists: <https://www.inspectly360.com/checklists/iso-standards/iso-9001-audit-checklist/>

---
*Document opgesteld voor interne roadmap-vorming Control One — niet voor externe publicatie.*
