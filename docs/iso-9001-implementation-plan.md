# ISO 9001 implementatie in Control One Portal — Analyse & Plan

**Datum:** 2026-06-09
**Auteur:** Voorbereiding voor fase 2 (implementatie)
**Status:** Analyse afgerond, klaar voor go/no-go op fasering

---

## 1. Huidige staat: wat heeft de portal nu voor ISO 27001?

ISO 27001 (NL, `framework_id=3`, actief, €39/maand) is de productie-norm. Volledige inventaris uit de admin-MCP:

| Categorie | Aantal | Toelichting |
|---|---|---|
| **Chapters (clauses)** | ~120 | Clauses 4–10 met subclauses (39 records) + Annex A5/A6/A7/A8 met 93 controls (81 records) |
| **Coach steps** | 28 | 5 categorieën: Voorbereiding (9) → Implementatie (11) → Check (5) → Certificeer (2) → Verbeter (1) |
| **Documents** | 143 | 134 `policy` (per Annex A-control), 3 `manual` (ISO 27001 Handboek varianten), 4 `audit_policy`, 2 `risk_policy` |
| **Checklist items** | ~153 | Gap-analyse vragen gekoppeld aan chapters; nummering 1–153 |
| **Questionnaires (audit)** | 11 | 388 vragen totaal: 1 per HLS-clause + 1 per Annex-thema (A5=99 vragen, A6=21, A7=34, A8=80) |
| **Management Review** | 17 secties | NL set (gedeeld over frameworks); incl. ISMS-prestaties, risico's, audits, incidenten |
| **Knowledge Base categorieën** | 16 NL | Hoofdzakelijk ISO 27001-centric: "ISO 27001 Coach", "A5–A8" als aparte categorieën |
| **Statement of Applicability** | Geconfigureerd | Volledige NL SoA-introtekst opgeslagen op framework-record |

**Architectuur-observaties:**
- Database-schema is generiek opgezet (`chapters.framework_id`, `chapters.type` met `requirement|annex|audit` enum). Geen schemawijziging nodig voor nieuwe norm.
- `documents.type` enum bevat `manual, risk_policy, policy, evidence, supplier_document, audit_policy` — voldoende voor 9001 (geen nieuwe document-typen nodig).
- Knowledge base + Management Review sections zijn **niet** framework-specifiek gekoppeld in de schema's die ik zie — 9001 kan eigen records krijgen.

---

## 2. Bestaande ISO 9001 stub (framework_id=1)

| Aspect | Stub-status |
|---|---|
| Framework record | ✅ Bestaat (`id=1`, slug `iso-9001`, inactief, €0, NL) |
| SoA-text | ❌ Alleen `<p>Statement text.</p>` placeholder |
| Chapters | ⚠️ 4 placeholders: chapter 1, 2, 4.1, Bijlage A/B/C — leeg/onbruikbaar |
| Coach steps | ⚠️ 4 placeholders: "Welkom / Goal Setting / Skill Development / Progress Tracking" |
| Documents | ❌ 0 |
| Checklist | ❌ 0 |
| Questionnaire | ⚠️ 1 stub: "Vragenlijst 9001 test" met 1 vraag |
| Knowledge Base | ❌ 0 (alleen 27001-gericht) |

**Conclusie:** de stub is leeg. Geen bruikbare content om op voort te bouwen behalve het framework-record zelf. Voor fase 2 hergebruiken we `framework_id=1` en vullen we alle relaties opnieuw.

> **Belangrijke beslissing om vooraf te nemen:** moeten we ook de oude placeholder-records opruimen vóór nieuwe data aanmaken, of overschrijven we ze via `update-*` calls? Aanbevolen: opruimen (alleen al om vervuiling in productie te voorkomen).

---

## 3. ISO 9001:2015 versus ISO 27001:2022 — verschillen op normniveau

### 3.1 HLS clauses 4–10 — wat is gelijk, wat anders

| Clause | Identiek aan 27001? | Belangrijkste verschil |
|---|---|---|
| 4.1 Context | ✅ Vrijwel woord-voor-woord | — |
| 4.2 Belanghebbenden | ✅ | — |
| 4.3 Scope | ✅ | 9001 vraagt expliciet motivering van uitsluitingen |
| 4.4 Systeem & processen | ⚠️ Substantieel anders | **9001 4.4.1 lijst van 7 procesaspecten** + 4.4.2 documented info; 27001 4.4 is veel korter |
| 5.1 Leadership | ⚠️ Verschillend | **9001 splitst in 5.1.1 + 5.1.2 (Customer focus)**; 27001 niet |
| 5.2 Policy | ✅ Structuur identiek | Kwaliteitsbeleid i.p.v. ISMS-beleid |
| 5.3 Rollen | ✅ | — |
| 6.1 Risks & opportunities | ⚠️ Anders | **27001 heeft 6.1.2 risk assessment + 6.1.3 risk treatment met SoA**; 9001 is generieker over R&O |
| 6.2 Objectives | ✅ | — |
| **6.3 Planning of changes** | ⚠️ | Uniek voor 9001 (27001:2022 heeft dit ook toegevoegd, in versie 2013 niet) |
| 7.1 Resources | ⚠️ Veel uitgebreider in 9001 | **9001 heeft 6 sub-clauses (7.1.1–7.1.6: People / Infrastructure / Environment / Monitoring resources / Knowledge)**; 27001 7.1 is één alinea |
| 7.2 Competence | ✅ | — |
| 7.3 Awareness | ✅ | — |
| 7.4 Communication | ✅ | — |
| 7.5 Documented information | ✅ | Identieke 7.5.1/7.5.2/7.5.3 structuur |
| 8.1 Operational planning | ⚠️ Anders | 9001 uitgebreider met acceptatiecriteria, 27001 focused op ISMS-processen |
| **8.2** | ❌ Compleet anders | **9001: Requirements for products and services (klantcommunicatie, orderbeoordeling)**; 27001: Risk assessment |
| **8.3** | ❌ Compleet anders | **9001: Design & Development (6 sub-clauses!)**; 27001: Risk treatment |
| **8.4** | ⚠️ Vergelijkbaar concept | **9001: Control of externally provided processes/products/services** (3 sub-clauses); 27001 heeft leveranciersmaatregelen onder A5 |
| **8.5** | ❌ Uniek voor 9001 | **Production and service provision (6 sub-clauses)** — geen tegenhanger in 27001 |
| **8.6** | ❌ Uniek voor 9001 | **Release of products and services** |
| **8.7** | ❌ Uniek voor 9001 | **Control of nonconforming outputs** (in 27001 zit dit deels onder Annex A.5.26 incident response) |
| **9.1.2** | ❌ Uniek voor 9001 | **Customer satisfaction** — verplichte meting |
| 9.2 Internal audit | ✅ | — |
| 9.3 Management review | ✅ Structuur identiek | 9001 noemt expliciet klanttevredenheid + leveranciersprestaties als verplichte inputs |
| 10.x | ⚠️ Volgorde anders | **9001: 10.1 General → 10.2 Nonconformity & CA → 10.3 Continual improvement**; 27001:2022: 10.1 → 10.2 |

### 3.2 Annex / Bijlage

| Aspect | ISO 9001:2015 | ISO 27001:2022 |
|---|---|---|
| Bijlage A | **Informatief** — Clarification (alleen toelichtende tekst) | **Normatief** — 93 controls (A.5/6/7/8) |
| Bijlage B | Informatief — andere ISO/TC 176-normen | — |
| Controls-set | **Geen** | 93 |
| SoA-verplichting | **Nee** | Ja (clause 6.1.3 d) |

### 3.3 Wat dat betekent voor het portal

| Module in Control One | Hergebruiken voor 9001? | Aanpassing nodig |
|---|---|---|
| `chapters` tabel (schema) | ✅ Ja | Geen — `type='requirement'` voor alle 9001-clauses; `type='annex'` enkel als we informatieve Annex A willen tonen |
| **Annex A-secties (A5–A8)** | ❌ Niet van toepassing | Verbergen voor 9001-gebruikers |
| **Statement of Applicability (VvT)** | ❌ Niet vereist | **Module uitschakelen** voor 9001-gebruikers; SoA-text overschrijven met disclaimer of weglaten |
| **Risico-module met asset/threat-denken** | ⚠️ Vereenvoudigen | 9001 gebruikt Risk & Opportunity-register (6.1) — lichter, generieker, zonder asset-classificatie. Bestaande risk-module kan, maar de templates en velden zouden generieker moeten zijn |
| `documents` tabel (schema) | ✅ Ja | Geen — bestaande types (manual/policy/evidence/audit_policy) volstaan |
| **Coach** | ✅ Ja | Volledig nieuwe 28 stappen schrijven, zelfde 5-categorie structuur |
| **Audit module + questionnaires** | ✅ Ja | 11 nieuwe questionnaires (8 voor 9001: Clause 4-10 + Customer Focus + Process Approach) |
| **Management Review** | ✅ Ja | 4 nieuwe MR-secties toevoegen (Klanttevredenheid, Procesperformance & productconformiteit, Leveranciersprestaties, Kwaliteitsdoelstellingen) — bestaande secties blijven werken |
| **Checklist (Gap-analyse)** | ✅ Ja | ~100 nieuwe checklist-items per 9001-chapter |
| **Knowledge Base** | ✅ Ja | Nieuwe categorieën: "ISO 9001 Coach", "Kwaliteitsbeleid", "Processen", "Klanttevredenheid", etc. |
| **Dashboard / KPI's** | ⚠️ Nieuwe widgets | KPI's zijn compleet anders (CSAT/NPS, OTD, FPY, NCR, CAPA) i.p.v. security-KPI's |
| **Menu-structuur (portal)** | ⚠️ Conditioneel | Items als "Verklaring van Toepasselijkheid", "Annex A controls" verbergen bij 9001-frameworks |

---

## 4. Wat we vooral NIEUW moeten bouwen voor ISO 9001

### 4.1 Chapters (database)

**Volledig nieuwe set**, ~75 records, alle `type='requirement'`, parent-child structuur:

```
4 Context van de organisatie
├─ 4.1 Inzicht in organisatie en context
├─ 4.2 Behoeften en verwachtingen belanghebbenden
├─ 4.3 Toepassingsgebied (scope) bepalen
├─ 4.4 Kwaliteitsmanagementsysteem en processen
│   ├─ 4.4.1 Procesvereisten
│   └─ 4.4.2 Documented information
5 Leiderschap
├─ 5.1 Leiderschap en betrokkenheid
│   ├─ 5.1.1 Algemeen
│   └─ 5.1.2 Klantgerichtheid  ← UNIEK
├─ 5.2 Beleid
│   ├─ 5.2.1 Kwaliteitsbeleid opstellen
│   └─ 5.2.2 Kwaliteitsbeleid communiceren
└─ 5.3 Rollen, verantwoordelijkheden en bevoegdheden
6 Planning
├─ 6.1 Acties voor risico's en kansen
│   ├─ 6.1.1
│   └─ 6.1.2
├─ 6.2 Kwaliteitsdoelstellingen en planning
│   ├─ 6.2.1
│   └─ 6.2.2
└─ 6.3 Planning van wijzigingen  ← UNIEK
7 Ondersteuning
├─ 7.1 Middelen
│   ├─ 7.1.1 Algemeen
│   ├─ 7.1.2 Personen
│   ├─ 7.1.3 Infrastructuur
│   ├─ 7.1.4 Werkomgeving voor procesuitvoering
│   ├─ 7.1.5 Monitoring- en meetmiddelen (incl. 7.1.5.1, 7.1.5.2)
│   └─ 7.1.6 Kennis van de organisatie  ← UNIEK
├─ 7.2 Competentie
├─ 7.3 Bewustzijn
├─ 7.4 Communicatie
└─ 7.5 Gedocumenteerde informatie (7.5.1, 7.5.2, 7.5.3)
8 Uitvoering
├─ 8.1 Operationele planning en beheersing
├─ 8.2 Eisen voor producten en diensten  ← UNIEK
│   ├─ 8.2.1 Klantcommunicatie
│   ├─ 8.2.2 Eisen bepalen
│   ├─ 8.2.3 Eisen beoordelen
│   └─ 8.2.4 Wijzigingen in eisen
├─ 8.3 Ontwerp & ontwikkeling  ← UNIEK (6 sub-clauses)
├─ 8.4 Beheersing van externe processen/producten/diensten  ← UNIEK
├─ 8.5 Productie- en dienstverlening  ← UNIEK (6 sub-clauses)
├─ 8.6 Vrijgave van producten/diensten  ← UNIEK
└─ 8.7 Beheersing van niet-conforme outputs  ← UNIEK
9 Evaluatie van de prestaties
├─ 9.1 Monitoring, meting, analyse en evaluatie
│   ├─ 9.1.1 Algemeen
│   ├─ 9.1.2 Klanttevredenheid  ← UNIEK
│   └─ 9.1.3 Analyse en evaluatie
├─ 9.2 Interne audit
└─ 9.3 Directiebeoordeling
10 Verbetering
├─ 10.1 Algemeen
├─ 10.2 Non-conformiteit en corrigerende actie
└─ 10.3 Continue verbetering
```

### 4.2 Documents (templates) — ~40 stuks

Aanbevolen template-set (gegroepeerd):

- **Beleid/handboek (4)**: Kwaliteitsbeleid, Kwaliteitshandboek, Scope-verklaring, Kwaliteitsdoelstellingen
- **Context & Risico (4)**: Stakeholder-register, SWOT/issues-analyse, Risico- en kansenregister, Wettelijke eisen-register
- **Procesbeheer (4)**: Proceslandschap, RACI-matrix, KPI-scorecard, Procedure wijzigingsbeheer
- **Documentbeheer (3)**: Procedure 7.5, Documentregister, Sjabloon documented information
- **HR (4)**: Procedure competentie, Functieprofielen, Opleidingsplan + register, Onboarding-checklist
- **Operations (8)**: Procedure operationele planning, Inkoopprocedure, Leveranciersbeoordeling, D&D-procedure, Productiebeheersing, Werkinstructies-sjabloon, Traceability-procedure, Klant-eigendom procedure
- **Klant (4)**: Procedure klantcommunicatie, Klachtenprocedure + register, Klanttevredenheidsenquête, Order-/contractbeoordeling
- **Metingen (4)**: Procedure monitoring & meting, Kalibratieplan, Vrijgavebeleid, Procedure niet-conforme outputs + NCR-register
- **Audits & verbetering (5)**: Procedure interne audit, Auditplan-template, Procedure management review + notulen, Procedure CAPA, Procedure continue verbetering

### 4.3 Coach steps (28) — exact zelfde categorie-structuur als ISO 27001

| Fase | # stappen | Voorbeelden |
|---|---|---|
| Voorbereiding | 9 | Organisatiecontext, Belanghebbenden, Scope, Directiecommitment, Kwaliteitsbeleid, Rollen, Doelstellingen, **Proceslandschap**, Gap-analyse |
| Implementatie | 11 | Risico/kansen-register, Documentbeheer, Competentiematrix, Bewustwordingscampagne, **Infrastructuur & werkomgeving**, **Kalibratieplan**, **Klantcommunicatie & orderbeoordeling**, Inkoop & leveranciers, **Productiebeheersing**, **Niet-conforme outputs + CAPA**, **Klanttevredenheid opzetten** |
| Check | 5 | Train auditors, 1e interne audit, Behandel bevindingen, 1e MR, Verbeteracties |
| Certificeer | 2 | Stage 1, Stage 2 |
| Verbeter | 1 | Continu verbeteren / jaarcyclus |

### 4.4 Questionnaires (audit) — 8 nieuwe

Volg de bestaande structuur (1 vragenlijst per clause):
- Clausule 4 — Context (~15 vragen)
- Clausule 5 — Leiderschap (~12 vragen, incl. klantfocus)
- Clausule 6 — Planning (~15 vragen, incl. wijzigingen)
- Clausule 7 — Ondersteuning (~25 vragen, met sub-vragen voor 7.1.3/4/5/6)
- Clausule 8 — Uitvoering (~30 vragen — grootste, want 8.2–8.7)
- Clausule 9 — Prestatie-evaluatie (~20 vragen, incl. klanttevredenheid)
- Clausule 10 — Verbetering (~10 vragen)
- Procesoverzicht & klantgerichtheid (~15 vragen, cross-clausule, optioneel)

Geen Annex A-questionnaires nodig (9001 heeft geen normatieve bijlage).

### 4.5 Checklist (gap-analyse items) — ~100 items

Per chapter ~1–3 items. Aanpak: importeren vanuit een vooraf voorbereide CSV met `framework_id=1`, `chapter_id=X`, `label='Heeft u...'`, `sort_order`.

### 4.6 Management Review — 4 nieuwe secties toevoegen

Aan de bestaande gedeelde set toevoegen (geen frameworks-koppeling vereist als de huidige 17 ook framework-agnostisch zijn):
1. **Klanttevredenheid en klachten** — sort_order 18
2. **Procesperformance en productconformiteit** — 19
3. **Leveranciersprestaties** — 20
4. **Kwaliteitsdoelstellingen — voortgang** — 21

EN-equivalenten ook (sort_order 35–38).

### 4.7 Knowledge Base — 8 nieuwe categorieën

- ISO 9001 Coach
- Kwaliteitsbeleid & handboek
- Processen & procesoverzicht
- Klanttevredenheid & klachten
- Productie & dienstverlening
- Inkoop & leveranciers
- Audits & corrigerende acties (kan deels gedeeld worden met 27001)
- KPI's & doelstellingen

### 4.8 Dashboard (UI/front-end)

Eigen dashboard-widgets voor 9001:
- Klanttevredenheid (NPS/CSAT) score + trend
- Open klachten / klachten-doorlooptijd
- On-Time Delivery (%)
- First Pass Yield / defect rate
- NCR's open vs gesloten
- CAPA-doorlooptijd
- Doelstellingen-voortgang (%)
- % audit-programma uitgevoerd

### 4.9 Menu-structuur (portal navigatie)

Voor 9001-gebruikers moet de volgende worden **verborgen**:
- "Verklaring van Toepasselijkheid" (VvT) — niet vereist
- "Annex A controls" / "Maatregelen" met 93 controls — niet vereist

En **toegevoegd/aangepast**:
- "Processen" — nieuwe sectie voor proceslandschap (kan ook onder bestaande "Maatregelen" als die wordt hernoemd naar context-passend label)
- "Klanten" of "Klantfeedback" — nieuwe sectie voor klachten + tevredenheid
- "Risico's & Kansen" — bestaande risicoanalyse hergebruiken maar UI-tekst aanpassen (geen "assets/dreigingen", wel "issues/opportunities")

---

## 5. Implementatieplan — fasering voor fase 2

| Fase | Wat | Wie/Hoe | Tijdschatting |
|---|---|---|---|
| **2.0** | **Stub opruimen** — verwijder 4 chapters, 4 coach steps, 1 questionnaire die als placeholders aan `framework_id=1` hangen | Via MCP `delete-*` of handmatig in admin | 30 min |
| **2.1** | **Framework-record updaten** — `monthly_price`, `active`, `coach_intro_text`, `statement_of_applicability_text` (of leeg laten + SoA verbergen) | `update-framework` via MCP | 15 min |
| **2.2** | **Chapters aanmaken** — 75 records gegroepeerd in clause-boom | Script: voorbereide JSON → `create-chapter` loop via MCP. Parent-child ordering: eerst hoofdclauses (4–10), dan subclauses | 2 uur |
| **2.3** | **Documents aanmaken** — 40 template-records met inhoud | Templates schrijven (groot werk!) → `create-document` via MCP. Aanbevolen aanpak: ik genereer markdown-content per template, stuur in batches | 3-5 dagen (content is bulk) |
| **2.4** | **Coach steps aanmaken** — 28 records | Coach-stap-content schrijven (1–2 alinea's per stap) → `create-coach-step` loop | 1 dag |
| **2.5** | **Checklist items aanmaken** — ~100 records | Voorbereide lijst per chapter_id → `create-checklist-item` loop | 4 uur |
| **2.6** | **Questionnaires aanmaken** — 8 audit-vragenlijsten | `create-questionnaire` met nested `questions[]` array, 1 call per clause | 1 dag |
| **2.7** | **Management Review secties** — 4 NL + 4 EN nieuw toevoegen | `create-management-review-section` ×8 | 30 min |
| **2.8** | **Knowledge Base categorieën + artikelen** — 8 cats + ~20 artikelen | `create-knowledge-base-category` + `-article` loop | 2 dagen |
| **2.9** | **Portal UI/UX aanpassingen** — verberg VvT/Annex A bij 9001-frameworks, voeg Process-section toe, aangepaste dashboard-widgets | Vereist code-wijzigingen in de Laravel app — buiten MCP-scope | 5-10 dagen dev |
| **2.10** | **EN-versie (`framework_id=5`)** — alle bovenstaande in Engels | Duplicate met EN-content | 1-2 weken (bulk content vertaling) |
| **2.11** | **QA + activeren** — `active=true`, `monthly_price=X`, smoke test in portal | — | 1 dag |

**Kritisch pad:** stappen 2.0 → 2.2 → 2.4 → 2.5 → 2.6 → 2.7 zijn pure data-entry via MCP en kunnen door mij (Claude) gedaan worden. Stap **2.3 (documents/templates)** is content-zwaar en stap **2.9 (UI/UX)** vereist Laravel-development. Die laatste twee vormen het echte werk.

---

## 6. Vragen die jij moet beantwoorden vóór fase 2 start

| # | Vraag | Default-suggestie |
|---|---|---|
| 1 | Wordt SoA-module verborgen voor 9001 of behouden we hem (gebruikers vinden hem misschien handig als "Toepasselijkheidsmatrix")? | **Verbergen** — SoA is een 27001-specifiek concept, voor 9001 is "Scope-verklaring" voldoende |
| 2 | Wordt 93-controls module ook verborgen? | **Ja, verbergen** voor 9001-frameworks |
| 3 | Schakelen we Risico-module aan voor 9001 met aangepaste UI-labels, of bouwen we een aparte Risico-en-Kansen-module? | **Hergebruiken** — label aanpassen op basis van actief framework |
| 4 | Voegen we Process-module (proceslandschap visualisatie) toe als nieuwe portal-sectie? | **Ja** — uniek voor 9001, voegt veel waarde toe |
| 5 | Welke prijs voor 9001? Zelfde €39 als 27001? Of starter-prijs? | Voorstel: €39 NL / €49 multi-framework discount |
| 6 | EN-versie meteen of pas later? | **Pas later** — focus eerst op NL, EN gaat 2× zo lang |
| 7 | Wie schrijft de content van de 40 templates? Ik (Claude) genereer voorstellen, jij/team reviewt? | Voorstel: ik genereer concept-drafts in batches van 5, jij keurt goed of geeft feedback |
| 8 | Hergebruiken we ISO 27001-audit-policy docs (4 stuks: Gedragscode, Auditeren stap-voor-stap, Vaardigheidseisen) voor 9001? | **Ja, hergebruik** — auditprincipes (ISO 19011) zijn norm-onafhankelijk |

---

## 7. Volgende stap

Geef akkoord op de bovenstaande default-suggesties (of corrigeer), dan kan ik direct beginnen met:
- **2.0** stub opruimen
- **2.1** framework-record bijwerken
- **2.2** alle 75 chapters aanmaken in één geautomatiseerde batch via MCP

De rest (templates, coach-content, audit-vragen) volgt in afzonderlijke batches met jouw goedkeuring per batch.
