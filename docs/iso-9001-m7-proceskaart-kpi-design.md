# M7 — Proceskaart + KPI per proces

**Module-code:** M7
**Clause(s):** 4.4 (QMS en de processen), 9.1.1 (Monitoren, meten, analyseren), 9.3 (Directiebeoordeling)
**Status:** Detail-ontwerp
**Datum:** 10 juni 2026

---

## 1. Doel & strategische positionering

Clause 4.4 — de "process approach" — is het **hart van ISO 9001:2015** en wordt door 80% van de portals onderbehandeld. Met deze module zet Control One zich neer als "echt-9001-portal" in plaats van "compliance-checkbox-tool". Per proces leg je vast:
- Wie is eigenaar?
- Wat is input / output?
- Welke KPI's meten we?
- Welke documenten dekken het proces?
- Welke risico's en kansen zijn relevant?

Een proceskaart wordt zo de **landingspagina** voor elke afdeling — daar leef je in. KPI-metingen voeden automatisch de Management Review (sectie Procesperformance, id 36).

---

## 2. Data-model (Laravel migrations-blueprint)

### 2.1 Tabel `processes`

| Veld | Type | Verplicht | Default | Toelichting |
|---|---|---|---|---|
| id | bigint pk | ✓ | auto | |
| company_id | bigint fk | ✓ | — | tenant isolation |
| framework_id | bigint fk nullable | — | — | optioneel: gekoppeld aan 9001/14001/27001 |
| number | varchar(20) | ✓ | — | bv. "P01", "K-INK-01" |
| name | varchar(255) | ✓ | — | bv. "Inkoop" |
| slug | varchar(255) | ✓ | — | uniek per company |
| type | enum | ✓ | `core` | `core` / `support` / `management` / `outsourced` |
| description | text | — | — | wat doet dit proces |
| purpose | text | — | — | waarom bestaat het |
| owner_user_id | bigint fk | ✓ | — | proceseigenaar |
| deputy_user_id | bigint fk nullable | — | — | plaatsvervanger |
| frequency | enum | — | `continuous` | `continuous` / `daily` / `weekly` / `monthly` / `quarterly` / `on_demand` |
| start_event | varchar(255) | — | — | bv. "Inkooporder ontvangen" |
| end_event | varchar(255) | — | — | bv. "Goederen ontvangen + facturatie afgerond" |
| inputs | json | — | `[]` | array of {name, source} |
| outputs | json | — | `[]` | array of {name, destination} |
| suppliers | json | — | `[]` | array of strings (extern / intern proces) |
| customers | json | — | `[]` | array of strings (extern / intern proces) |
| raci_matrix | json | — | `[]` | array of {role, name, R/A/C/I} |
| required_knowledge | text | — | — | clause 7.1.6 koppeling |
| effectiveness_criteria | text | — | — | hoe weet je dat het werkt? |
| status | enum | ✓ | `concept` | `concept` / `active` / `in_review` / `archived` |
| review_interval_months | int | — | 12 | hoe vaak proceskaart reviewen |
| last_reviewed_at | datetime | — | — | |
| next_review_due_at | datetime | — | — | computed |
| diagram_url | varchar(500) | — | — | upload of externe link (Miro/Lucid) |
| sort_order | int | — | 0 | |
| created_by, updated_by | bigint fk | — | — | audit-trail |
| timestamps + soft_deletes | | | | |

**Indexen:** `company_id+slug` (unique), `company_id+status`, `owner_user_id`.

### 2.2 Tabel `process_kpis`

| Veld | Type | Verplicht | Default | Toelichting |
|---|---|---|---|---|
| id | bigint pk | ✓ | auto | |
| process_id | bigint fk | ✓ | — | |
| name | varchar(255) | ✓ | — | bv. "% on-time delivery" |
| description | text | — | — | wat meet je precies |
| formula | text | — | — | bv. "(orders_on_time / total_orders) × 100" |
| unit | varchar(50) | — | — | bv. "%", "stuks", "€", "dagen" |
| target | decimal(15,4) | — | — | streefwaarde |
| warning_threshold | decimal(15,4) | — | — | bij overschrijden → geel |
| critical_threshold | decimal(15,4) | — | — | bij overschrijden → rood |
| direction | enum | ✓ | `higher_is_better` | `higher_is_better` / `lower_is_better` / `target_range` |
| range_min, range_max | decimal nullable | — | — | alleen voor `target_range` |
| frequency | enum | ✓ | `monthly` | `daily` / `weekly` / `monthly` / `quarterly` / `yearly` |
| data_source | enum | ✓ | `manual` | `manual` / `formula` / `external_api` |
| external_source_config | json nullable | — | — | bv. SQL-query / webhook |
| owner_user_id | bigint fk | — | — | wie meet |
| is_active | boolean | ✓ | true | |
| sort_order | int | — | 0 | |
| last_value | decimal(15,4) | — | — | cached laatste meting |
| last_status | enum | — | `unknown` | `on_target` / `warning` / `critical` / `unknown` |
| last_measured_at | datetime | — | — | |
| timestamps + soft_deletes | | | | |

### 2.3 Tabel `kpi_measurements`

| Veld | Type | Verplicht | Toelichting |
|---|---|---|---|
| id | bigint pk | ✓ | |
| process_kpi_id | bigint fk | ✓ | |
| value | decimal(15,4) | ✓ | |
| period_start | date | ✓ | bv. 2026-06-01 |
| period_end | date | ✓ | bv. 2026-06-30 |
| status | enum | ✓ | `on_target` / `warning` / `critical` (auto-berekend) |
| notes | text | — | toelichting bij outlier |
| recorded_by | bigint fk | ✓ | |
| recorded_at | datetime | ✓ | |
| evidence_document_id | bigint fk nullable | — | gekoppeld bewijs |
| timestamps | | | |

**Indexen:** `process_kpi_id + period_end` (desc) voor trend-queries.

### 2.4 Link-tabellen

| Tabel | Velden | Doel |
|---|---|---|
| `process_documents` | process_id, document_id | welke procedures/beleid dekken proces |
| `process_risks` | process_id, risk_id | gekoppelde risico's (gebruik bestaande risks-tabel) |
| `process_opportunities` | process_id, opportunity_id | nieuw — kansen-register (zie SHOULD S6) |
| `process_audits` | process_id, internal_audit_id | gekoppelde audits |
| `process_chapters` | process_id, chapter_id | aan welke clauses dekt dit proces |

### 2.5 Pivot in bestaande tabellen

- `management_review_sections` (id 36 "Procesperformance"): voeg `auto_data_source` enum toe — `process_kpis` → bij openen review wordt KPI-trend automatisch geladen
- `internal_audits` krijgt nullable `process_id` zodat audit per proces kan

---

## 3. Statussen & workflow

### 3.1 Process lifecycle

```
concept ─────►  active ─────►  in_review ─────►  active
                   │                                  │
                   └─────►  archived  ◄───────────────┘
```

**Transitions:**
- `concept → active`: bij eerste opslaan met owner + minimaal 1 KPI
- `active → in_review`: automatisch op `next_review_due_at` of handmatig
- `in_review → active`: na review-bevestiging door owner
- `* → archived`: handmatige actie door admin, met reden

### 3.2 KPI status (auto-berekend bij elke measurement)

```javascript
if (direction === 'higher_is_better') {
  if (value >= target) → on_target
  else if (value >= warning_threshold) → warning
  else → critical
}
// Spiegelbeeld voor lower_is_better
// target_range: critical = buiten min/max
```

### 3.3 Review-cyclus

Bij `next_review_due_at` aanbreken → notificatie naar `owner_user_id` + status naar `in_review`. Bevestiging vereist:
- Beschrijving nog actueel? (ja/nee)
- KPI's nog passend? (ja/nee/aanpassen)
- Documentkoppelingen nog up-to-date? (ja/nee)

Bij "nee" → wordt taak voor owner.

---

## 4. UI-schermen

### 4.1 Process List (`/processes`)

**Default view:** tabel met kolommen
- Nummer, Naam, Type-badge, Owner-avatar, # KPI's, KPI-health-bullet, Last reviewed, Status-badge

**Filters:** type, status, owner, "review overdue"

**Toggle:** lijst ⇄ map-view (visueel kanban van core / support / management processes)

**Action:** "+ Nieuw proces" (modal of full-page)

### 4.2 Process Detail (`/processes/{slug}`)

Tabs:
1. **Overzicht** — basisvelden + RACI + input/output + start/end events
2. **KPI's** — lijst KPI's met sparkline + trend, "+ KPI toevoegen"
3. **Documenten** — gekoppelde procedures, "Document toevoegen" (search docs)
4. **Risico's & Kansen** — gekoppelde risks + opportunities
5. **Audits** — gekoppelde interne audits + findings
6. **Procesmap** — diagram-upload + voorbeeld-templates (SIPOC, swimlane)
7. **Historie** — versies + reviews log

**Header-strip:** owner + deputy + status + "Review nu" knop + "Export PDF"

### 4.3 KPI Dashboard (`/kpi-dashboard`)

- **Cross-process overzicht** (alle KPI's grid view met status-stoplichten)
- Filter per proces / per owner / per status
- Klik op KPI → KPI Detail met trend-chart + measurement-log
- "+ Meting toevoegen" inline

### 4.4 KPI Detail (`/kpi/{id}`)

- Trend-chart (12 periodes default, zoom-out optie)
- Measurement-log tabel (latest first)
- Target + thresholds visueel op chart
- "Meting toevoegen" CTA
- Sidebar: KPI-eigenaar, frequentie, formule, koppelingen

### 4.5 Process Map view

Drie modi:
1. **SIPOC-template** (auto-gegenereerd uit velden suppliers/inputs/process-naam/outputs/customers)
2. **Swimlane-template** (per RACI-rol een swimlane)
3. **Free upload** (Miro/Lucid/Visio embed)

---

## 5. Cross-module koppelingen (closed-loop)

```
                        ┌──────────────────────┐
                        │   Process (M7)       │
                        └──────┬───────────────┘
                               │
        ┌──────────────────────┼───────────────────────┐
        │                      │                       │
        ▼                      ▼                       ▼
   Documents               Risks + Opp's        Internal Audits
   (link procedures)       (risk per process)   (audit per process)
        │                      │                       │
        │                      │                       │
        ▼                      ▼                       ▼
   ┌────────────────────────────────────────────────────┐
   │            KPIs + Measurements                     │
   └──────┬─────────────────────────────────────────────┘
          │
          ▼
   Management Review Sectie 36 "Procesperformance"
   (auto-fill: KPI's per proces met trend)
          │
          ▼
   Bij off-target → suggesties voor improvements (M-COULD C1 Kaizen)
```

**Auto-fill regels:**
- Management Review opening → pull alle actieve KPI's met laatste meting + trend
- Audit-finding tegen proces → automatisch entry in `process_audits` + suggestie voor NC (M6)
- NC met `root_cause_process_id` → koppeling terug naar Process

---

## 6. Content & templates (NL)

### 6.1 Voorbeeld-procesbibliotheek (admin-templates)

Voor MKB-klanten 10 standaard-processen klaarzetten als templates:

| Code | Naam | Type | Voor branche |
|---|---|---|---|
| P01 | Klantbeheer & verkoop | core | alle |
| P02 | Inkoop & leveranciersbeheer | support | alle |
| P03 | Productie | core | productie |
| P04 | Dienstverlening | core | dienstverlening |
| P05 | Ontwerp & ontwikkeling | core | productontwikkeling |
| P06 | Magazijn & logistiek | support | productie/handel |
| P07 | HR & Competentiebeheer | support | alle |
| P08 | Financiën & administratie | support | alle |
| P09 | Directie & strategie | management | alle |
| P10 | Continue verbetering | management | alle |

Per template: voorgevulde naam, type, inputs/outputs voorbeeld, 3-5 KPI-suggesties, gekoppelde clauses.

### 6.2 KPI-bibliotheek per branche

**Productie:**
- % on-time delivery (target 95%, lower=critical)
- First-pass yield (target 98%, lower=critical)
- Klachten/1.000 stuks (target <2)
- Mean Time Between Failures
- OEE (Overall Equipment Effectiveness)

**Dienstverlening:**
- Time-to-resolution (target <4u, lower=better)
- First-call resolution rate
- Customer Effort Score
- Repeat-business %

**IT/SaaS:**
- Uptime % (target 99,9%)
- Tickets-resolved-SLA %
- NPS (target >40)
- Onboarding-completion-rate

Klant kan KPI's uit deze bibliotheek picken en aanpassen.

### 6.3 KB-artikelen (te schrijven onder bestaande category 36 "Processen")

1. "Hoe definieer je een proces volgens ISO 9001 (4.4)?"
2. "Wat zijn input, output, suppliers en customers (SIPOC)?"
3. "RACI: rollen en verantwoordelijkheden per proces"
4. "Welke KPI's per proces? Voorbeelden per branche"
5. "Hoe meet je proceseffectiviteit (clause 9.1.1)?"
6. "Procesreview: hoe vaak en wat bespreek je?"

### 6.4 Coach-step koppeling

Update bestaande coach-steps die over clause 4.4 gaan: link naar Process-feature ("Maak nu je proceskaarten in de portal →").

---

## 7. MCP-tools die toegevoegd moeten worden

Voor admin-content seeding:

| Tool | Endpoint | Doel |
|---|---|---|
| `create-process-template` | `/api/admin/process-templates` | Voorgedefinieerde processen voor framework |
| `create-kpi-template` | `/api/admin/kpi-templates` | KPI-bibliotheek per branche |
| `list-process-templates` | `/api/admin/process-templates` | |
| `update-process-template` | `/api/admin/process-templates/{id}` | |

Voor klant-gebruik via tenant blijft via portal-UI (geen MCP).

---

## 8. Sprint-planning (6 weken, 1 squad = 2 devs)

### Sprint 1 (2 weken) — Fundament Processes
- DB-migrations: `processes`, `process_documents`, `process_chapters`
- CRUD-endpoints (Laravel resources + policies)
- List-view + detail-view (read-only)
- Form: create/edit process (basis-velden + owner + RACI)
- Seeders: 10 default-processen als templates
- **Deliverable:** klant kan proceskaarten aanmaken en koppelen aan documenten

### Sprint 2 (2 weken) — KPI-engine
- DB: `process_kpis` + `kpi_measurements`
- KPI CRUD onder Process Detail
- Measurement-form (per meting)
- KPI Dashboard cross-process
- Status-auto-berekening + caching
- Trend-chart component (Chart.js / ApexCharts)
- KPI-bibliotheek-seeders (3 branches × 5 KPI's)
- **Deliverable:** klant kan KPI's definiëren, meten en trend bekijken

### Sprint 3 (2 weken) — Cross-module + UI-polish
- `process_risks`, `process_opportunities`, `process_audits` link-tabellen
- Management Review auto-fill voor sectie 36 (Procesperformance)
- Process-review-workflow (in_review → notification → bevestiging)
- Process-map upload + 2 templates (SIPOC, swimlane)
- KB-artikelen seeders (6 stuks)
- Coach-step links updaten
- **Deliverable:** complete signature-feature live

---

## 9. Open vragen

1. **Risk-Process koppeling:** is `risks`-tabel polymorphic (`riskable_type`) of strict gekoppeld aan asset/process? Check huidige 27001-implementatie.
2. **Opportunity register:** nieuwe entiteit of tab in bestaande risks-tabel? (zie SHOULD S6)
3. **KPI external_source:** scope deze release of pas in Q4? (Cron + webhook + REST-pull)
4. **PDF-export proceskaart:** in welk template? Naar wkhtmltopdf-stack of Laravel-DomPDF?
5. **Process-versioning:** snapshot bij elke review-cyclus of alleen audit-trail?
6. **Multi-language:** Engelse vertaling van process-templates nodig voor 9001 EN-framework (id 7)? Of bij EN-launch?

---

## 10. Success-metrics

Na 90 dagen live:
- ≥60% van actieve 9001-tenants heeft ≥3 processen gedefinieerd
- ≥40% heeft ≥1 KPI met ≥3 metingen geregistreerd
- Average proceskaart-review-rate >70% (binnen review_interval)
- Management Review auto-fill gebruikt in ≥50% van openen-events

---

*Document opgesteld voor implementatie M7 — Control One ISO 9001 portal.*
