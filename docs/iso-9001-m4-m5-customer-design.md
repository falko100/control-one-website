# M4 + M5 — Customer Complaints + Klanttevredenheid

**Module-code:** M4 (Klachten) + M5 (Tevredenheid)
**Clause(s):** 9.1.2 (Klanttevredenheid), 10.2 (Niet-conformiteit & corrigerende actie)
**Status:** Detail-ontwerp
**Datum:** 10 juni 2026

---

## 1. Doel & strategische positionering

Clause 9.1.2 verplicht organisaties hun **klanttevredenheid te meten** — niet enkel klachten op te volgen, maar actief feedback verzamelen. Voor 9001-auditors zijn dit twee aparte bewijslagen:
1. **Klachten-management** met root-cause + CAPA-link (10.2)
2. **Tevredenheidsmeting** met trend over tijd (9.1.2)

Beide modules sluiten cross-module aan op CAPA, NC en Management Review (sectie Klanttevredenheid, id 35) — onze closed-loop architectuur.

**Strategische impact:** klachten + tevredenheid is wat klantgerichte MKB-organisaties **dagelijks** doen. Concurrenten (Effivity, QT9, AssurX) hebben dit; ISOPlanner/Conformiso niet. Snel succes voor klant-ROI.

---

## 2. Data-model M4 — Klachten

### 2.1 Tabel `customers` (mogelijk al bestaand — check)

Indien nog niet aanwezig:

| Veld | Type | Verplicht | Toelichting |
|---|---|---|---|
| id | bigint pk | ✓ | |
| company_id | bigint fk | ✓ | tenant |
| customer_number | varchar(50) | — | extern referentie |
| name | varchar(255) | ✓ | |
| type | enum | — | `b2b` / `b2c` / `internal` |
| primary_contact_name | varchar(255) | — | |
| primary_contact_email | varchar(255) | — | |
| primary_contact_phone | varchar(50) | — | |
| segment | varchar(100) | — | bv. "Enterprise", "MKB", "Retail" |
| account_owner_user_id | bigint fk | — | accountmanager |
| status | enum | ✓ | `active` / `inactive` / `prospect` |
| notes | text | — | |
| timestamps + soft_deletes | | | |

### 2.2 Tabel `complaints`

| Veld | Type | Verplicht | Default | Toelichting |
|---|---|---|---|---|
| id | bigint pk | ✓ | auto | |
| company_id | bigint fk | ✓ | — | tenant |
| complaint_number | varchar(30) | ✓ | auto | `KLA-2026-001` (per-tenant counter) |
| customer_id | bigint fk nullable | — | — | gekoppelde klant (optioneel — kan freeform) |
| customer_name_freeform | varchar(255) | — | — | als geen customer_id |
| customer_contact | varchar(255) | — | — | wie meldde |
| customer_contact_email | varchar(255) | — | — | voor terugkoppeling |
| customer_contact_phone | varchar(50) | — | — | |
| received_at | datetime | ✓ | now | wanneer klacht binnenkwam |
| channel | enum | ✓ | — | `email` / `phone` / `web_form` / `in_person` / `social_media` / `portal` / `letter` / `other` |
| received_by_user_id | bigint fk | ✓ | — | wie de klacht opnam |
| product_or_service | varchar(255) | — | — | welk product/dienst |
| order_reference | varchar(100) | — | — | order/contract-nummer |
| process_id | bigint fk nullable | — | — | over welk proces (M7-koppeling) |
| title | varchar(255) | ✓ | — | korte samenvatting |
| description | text | ✓ | — | volledige klacht |
| customer_expectation | text | — | — | wat verwachtte klant |
| impact | enum | ✓ | `medium` | `low` / `medium` / `high` / `critical` |
| category | enum | ✓ | — | `quality` / `delivery` / `communication` / `billing` / `service` / `safety` / `other` |
| sub_category | varchar(100) | — | — | freeform sub-cat |
| owner_user_id | bigint fk | ✓ | — | wie behandelt |
| status | enum | ✓ | `new` | `new` / `under_investigation` / `awaiting_customer` / `resolved` / `closed` / `rejected` |
| acknowledged_at | datetime | — | — | wanneer klant ontvangstbevestiging kreeg |
| target_resolution_at | date | — | — | beloofde datum |
| actual_resolution_at | date | — | — | werkelijke afsluit |
| root_cause | text | — | — | root cause analyse |
| root_cause_method | enum | — | — | `5why` / `fishbone` / `8d` / `pareto` / `other` |
| root_cause_data | json | — | — | bv. 5×Why-vragen+antwoorden array |
| immediate_action | text | — | — | wat is direct gedaan |
| corrective_action | text | — | — | wat structureel |
| non_conformity_id | bigint fk nullable | — | — | auto-link naar M6 NC |
| capa_id | bigint fk nullable | — | — | auto-link naar bestaande CAPA |
| resolution_description | text | — | — | wat is gedaan voor klant |
| customer_response | enum | — | — | `satisfied` / `partially_satisfied` / `not_satisfied` / `no_response` |
| customer_response_text | text | — | — | klant-reactie tekst |
| customer_response_at | datetime | — | — | |
| escalation_level | enum | ✓ | `none` | `none` / `team_lead` / `manager` / `director` |
| escalated_to_user_id | bigint fk nullable | — | — | |
| internal_notes | text | — | — | niet zichtbaar voor klant |
| linked_survey_id | bigint fk nullable | — | — | tevredenheids-survey na afsluit (M5) |
| timestamps + soft_deletes | | | | |

**Indexen:** `company_id+status`, `customer_id`, `owner_user_id`, `received_at`, `complaint_number` unique.

### 2.3 Tabel `complaint_updates` (werkstroom-log)

| Veld | Type | Verplicht |
|---|---|---|
| id | bigint pk | ✓ |
| complaint_id | bigint fk | ✓ |
| user_id | bigint fk | ✓ |
| update_type | enum | ✓ |
| from_status, to_status | varchar | — |
| content | text | — |
| created_at | datetime | ✓ |

`update_type`: `comment` / `status_change` / `escalation` / `assignment_change` / `customer_contact` / `attachment_added`

### 2.4 Tabel `complaint_attachments`

| Veld | Type |
|---|---|
| id, complaint_id, filename, mime_type, size, path, uploaded_by_user_id, timestamps | standaard |

### 2.5 Pivot/relaties

- `complaints.non_conformity_id` → `non_conformities` (M6)
- `complaints.capa_id` → bestaande `capas`-tabel
- `complaints.process_id` → `processes` (M7)

---

## 3. Workflow M4 — Klachten lifecycle

```
   ┌─►  new
   │     │
   │     │ (toewijzen owner + acknowledge)
   │     ▼
   │   under_investigation
   │     │
   │     ├─► awaiting_customer (info nodig van klant)
   │     │       └─► terug naar under_investigation
   │     │
   │     │ (resolution_description ingevuld)
   │     ▼
   │   resolved
   │     │
   │     │ (customer_response ontvangen)
   │     ▼
   │   closed
   │
   └── rejected (alleen vanuit new of under_investigation)
```

**Auto-triggers (closed-loop):**
- `status = new` + `impact in (high, critical)` → auto-genereer NC + suggesteer escalatie
- `root_cause` ingevuld → suggesteer auto-create CAPA (popup: "Wil je CAPA aanmaken?")
- `status = closed` + `linked_survey_id IS NULL` → trigger tevredenheids-survey naar klant (M5)
- Target_resolution_at overdue → e-mail naar owner + manager
- Klacht open >14 dagen → SLA-flag

---

## 4. Data-model M5 — Klanttevredenheidsmeting

### 4.1 Tabel `surveys`

| Veld | Type | Verplicht | Default | Toelichting |
|---|---|---|---|---|
| id | bigint pk | ✓ | auto | |
| company_id | bigint fk | ✓ | — | tenant |
| name | varchar(255) | ✓ | — | bv. "NPS Q2 2026" |
| type | enum | ✓ | `csat` | `nps` / `csat` / `ces` / `custom` |
| description | text | — | — | |
| target_audience_config | json | — | — | bv. `{type:"all_customers"}` / `{type:"segment", segments:["B2B"]}` / `{type:"after_order"}` |
| trigger_type | enum | ✓ | `manual` | `manual` / `scheduled` / `after_order_complete` / `after_complaint_closed` / `after_service_delivery` |
| trigger_config | json | — | — | bv. `{delay_days: 7}` |
| send_via | enum | ✓ | `email` | `email` / `portal_link` / `in_app` / `qr_code` |
| from_email | varchar(255) | — | — | |
| from_name | varchar(255) | — | — | |
| subject | varchar(255) | — | — | |
| body_template | text | — | — | met `{{first_name}}`, `{{order}}` placeholders |
| response_window_days | int | ✓ | 14 | hoelang link geldig |
| is_active | boolean | ✓ | false | |
| starts_at, ends_at | datetime | — | — | optioneel campagne-periode |
| created_by | bigint fk | ✓ | — | |
| timestamps + soft_deletes | | | | |

### 4.2 Tabel `survey_questions`

| Veld | Type | Verplicht | Toelichting |
|---|---|---|---|
| id | bigint pk | ✓ | |
| survey_id | bigint fk | ✓ | |
| sort_order | int | ✓ | |
| question | text | ✓ | |
| question_type | enum | ✓ | `nps_0_10` / `csat_1_5` / `rating_1_10` / `yes_no` / `multi_choice` / `text` / `email` |
| options | json nullable | — | voor multi_choice |
| required | boolean | ✓ | default true |
| weight | decimal(5,2) | — | voor gewogen scoring |
| placeholder | varchar(255) | — | UI-hint |

### 4.3 Tabel `survey_responses`

| Veld | Type | Verplicht | Toelichting |
|---|---|---|---|
| id | bigint pk | ✓ | |
| survey_id | bigint fk | ✓ | |
| customer_id | bigint fk nullable | — | bekend van klant |
| customer_email | varchar(255) | — | anoniem |
| respondent_name | varchar(255) | — | |
| token | varchar(64) | ✓ | unique magic-link token |
| order_reference | varchar(100) | — | bij after_order trigger |
| complaint_id | bigint fk nullable | — | bij after_complaint_closed |
| sent_at | datetime | ✓ | |
| opened_at | datetime | — | tracking pixel of CTA-click |
| responded_at | datetime | — | wanneer voltooid |
| score | decimal(5,2) | — | berekend uit antwoorden |
| nps_category | enum | — | `promoter` (9-10) / `passive` (7-8) / `detractor` (0-6) |
| ip_address, user_agent | — | — | spam-detectie |
| created_at | datetime | ✓ | |

### 4.4 Tabel `survey_response_answers`

| Veld | Type |
|---|---|
| id, survey_response_id, survey_question_id, answer_value (json), created_at | standaard |

---

## 5. Workflow M5 — Survey lifecycle

```
Definition (admin maakt survey):
   survey + questions opslaan → set is_active=true

Trigger:
   manual: admin klikt "send to selection"
   scheduled: cron job
   event-based: complaint.status → closed, of order.status → completed

Send:
   record in survey_responses met token + sent_at
   verstuur email (queue job)

Response:
   klant klikt link → /surveys/{token}
   formulier render → vult in → submit
   score + nps_category auto-berekend
   responded_at gevuld

Aggregation:
   nightly batch: bereken NPS-score over rolling 90 days
   → cached op company-level
   → toon op dashboard + Management Review sectie 35
```

**NPS-formule:** `% promoters − % detractors`. Bv: 60% promoters, 30% passives, 10% detractors → NPS = 50.

---

## 6. UI-schermen M4 — Klachten

### 6.1 Complaint List (`/complaints`)

Tabel-kolommen:
- Nummer, Klant (avatar+naam), Titel, Impact-badge, Category-badge, Owner-avatar, Status, Received, Target resolution, Days open

**Filters:** status, impact, category, owner, customer, "overdue", datumbereik
**Quick actions:** "+ Nieuwe klacht", export Excel, bulk-assign

### 6.2 Complaint Detail (`/complaints/{number}`)

**Header:** nummer + titel + impact-badge + status-badge + owner-avatar + "Acties" dropdown (escalate / link to CAPA / link to NC / archive)

**Tabs:**
1. **Overzicht** — klant + beschrijving + verwacht + ontvangst-info
2. **Onderzoek** — root cause (met 5-Why template inline), immediate + corrective actions
3. **Communicatie** — log met klant (e-mails, telefoonnotities)
4. **Updates & log** — `complaint_updates`-stream
5. **Gekoppeld** — NC + CAPA + Process + Survey-resultaat
6. **Bijlagen** — files

**Sidebar:** target vs actual resolution, days open, customer-response status

### 6.3 5-Why Template (inline in Onderzoek-tab)

```
Wat ging er mis? [_______________________________________]
Waarom? (1) [___________________________________________]
Waarom? (2) [___________________________________________]
Waarom? (3) [___________________________________________]
Waarom? (4) [___________________________________________]
Waarom? (5) [___________________________________________]
Root cause: [autosuggest uit Waarom-5]
```

Opslaan vult `root_cause_data` JSON + zet `root_cause_method = '5why'`.

### 6.4 Web-formulier voor klantmelding (`/portal/customer/complaints/new`)

Publieke pagina (geen login) onder tenant-subdomain. Velden: naam, e-mail, telefoon, order-referentie, omschrijving, bijlage. Auto-genereert complaint met `channel = web_form`.

---

## 7. UI-schermen M5 — Surveys

### 7.1 Surveys List (`/surveys`)

Kaarten met: naam, type-badge, status (actief/draft/archived), responses-count, response-rate, NPS/CSAT-score, "Versturen" / "Bewerken" / "Resultaten"

### 7.2 Survey Builder (`/surveys/{id}/edit`)

- Sectie 1: Algemeen (naam, type)
- Sectie 2: Vragen (drag-drop, add per type)
- Sectie 3: Trigger (manual/schedule/event)
- Sectie 4: Audience (filter)
- Sectie 5: Bericht (e-mail subject + body)
- Preview-knop

### 7.3 Customer-facing Survey (`/surveys/{token}`)

Eenvoudige one-page form (mobile-first). Voor NPS: emoji-schaal 0-10 met label "zeer onwaarschijnlijk" → "zeer waarschijnlijk". Submit → "Bedankt"-pagina met optionele extra-vraag voor verbeterpunten.

### 7.4 Survey Results Dashboard (`/surveys/{id}/results`)

- KPI-boxen: aantal verzonden, geopend, beantwoord, response-rate
- NPS-cijfer (groot) + distributie pie chart (promoters/passives/detractors)
- CSAT-trend per kwartaal
- Word-cloud verbeterpunten (vrije tekst antwoorden)
- Export CSV / PDF

### 7.5 Cross-survey Dashboard (`/customer-satisfaction`)

Overall NPS over alle surveys, trend laatste 4 kwartalen, breakdown per segment / per product, vergelijk met benchmark (industrie).

---

## 8. Cross-module koppelingen (closed-loop)

```
              ┌─────────────────────┐
              │   Customer (M4)     │
              │   Complaint         │
              └────────┬────────────┘
                       │
        ┌──────────────┼─────────────┐
        │              │             │
        ▼              ▼             ▼
   Non-Conformity   CAPA         Process (M7)
   (M6)             (bestaand)   (process_id)
        │              │             │
        └──────┬───────┘             │
               │                     │
               ▼                     │
     Document evidence              KPI:
                                    "Aantal klachten"
                                    "% klachten on-time afgesloten"
                                    "% klanten tevreden na klacht"

              ┌─────────────────────┐
              │   Survey (M5)       │
              │   triggered after   │
              │   complaint closed  │
              └────────┬────────────┘
                       │
                       ▼
              Survey response
                       │
                       ▼
              Management Review sectie 35
              "Klanttevredenheid" auto-fill
              (NPS-trend + CSAT + open complaints)
```

**Auto-fill regels Management Review sectie 35:**
- Aantal nieuwe klachten in periode (per maand, per kwartaal)
- Klachten on-time vs overdue resolution-rate
- NPS-score laatste 90 dagen + trend
- Top-3 klachten-categorieën
- Open kritieke klachten + escalaties

---

## 9. Content & templates (NL)

### 9.1 Klachten-categorieën (default-set)

- Kwaliteit van product
- Levertijd / te laat
- Communicatie / responsiviteit
- Facturatie / kosten
- Service / nazorg
- Veiligheid
- Anders

### 9.2 Standaard root-cause-methode-templates

**5×Why** (default voor low/medium impact)
**Fishbone Ishikawa** met categorieën: Mens, Methode, Materiaal, Machine, Meting, Milieu (medium/high impact)
**8D-rapport** (8 stappen, voor critical impact)

### 9.3 Email-templates

1. Ontvangstbevestiging klacht (auto bij `acknowledged_at`)
2. Status-update klacht
3. Resolutie-bericht aan klant
4. Tevredenheid-survey link (na closed)
5. Escalatie-notificatie intern

### 9.4 Standaard-vraagsets

**NPS klassiek (1 vraag + 1 follow-up):**
1. Hoe waarschijnlijk is het dat u onze [product/dienst] zou aanbevelen aan een collega? (0-10)
2. Wat is de belangrijkste reden voor uw score? (text)

**CSAT post-purchase:**
1. Hoe tevreden bent u met uw aankoop? (1-5 sterren)
2. Hoe tevreden bent u met onze service? (1-5 sterren)
3. Hoe waarschijnlijk koopt u opnieuw bij ons? (1-5)
4. Heeft u suggesties voor verbetering? (text)

**Post-complaint survey:**
1. Hoe tevreden bent u over hoe wij uw klacht hebben behandeld? (1-5)
2. Werd uw klacht voldoende opgelost? (ja/deels/nee)
3. Suggesties? (text)

### 9.5 KB-artikelen (te schrijven onder bestaande category 37 "Klanten")

1. "Hoe behandel je een klacht volgens ISO 9001 (9.1.2 + 10.2)?"
2. "5-Why root cause analyse: stap-voor-stap"
3. "Fishbone / Ishikawa diagram uitleg"
4. "8D-methodiek voor complexe klachten"
5. "Wat is NPS en hoe interpreteer je de score?"
6. "CSAT vs NPS vs CES: welke gebruik je wanneer?"
7. "Hoe stel je een klantenenquête op die klanten ook invullen?"
8. "Klanttevredenheid in Management Review opvoeren"

### 9.6 Document-templates (admin-templates)

Toevoegen aan bestaande 40 documenten:
- "Klachtenprocedure" → al bestaand (id 520) — uitbreiden met workflow-mapping naar M4
- Nieuw: "Klanttevredenheidsmetingsplan" (policy)
- Nieuw: "Klachtenformulier (papier)" (evidence-template als download)
- Nieuw: "8D-rapport template" (evidence)

---

## 10. MCP-tools toevoegen

| Tool | Doel |
|---|---|
| `create-survey-template` / `update` / `list` | Voorgedefinieerde surveys per branche |
| `create-complaint-category-template` | Default-categorieën per branche |
| `create-root-cause-template` | 5-Why / Fishbone / 8D form-templates |

---

## 11. Sprint-planning (5 weken, 1 squad = 2 devs)

### Sprint 1 (2 weken) — M4 Klachten fundament
- DB: `complaints`, `complaint_updates`, `complaint_attachments`
- CRUD-endpoints + policies
- List + Detail-views + Create-form
- Status-workflow (transitions met audit-trail)
- 5-Why inline-template
- Web-form klantmelding (publieke pagina)
- **Deliverable:** Klanten kunnen klachten registreren en afhandelen

### Sprint 2 (2 weken) — M5 Surveys fundament
- DB: `surveys`, `survey_questions`, `survey_responses`, `survey_response_answers`
- Survey Builder (admin UI)
- Customer-facing magic-link survey form
- Trigger-engine: manual + after_complaint_closed
- Email-templates + queue
- Results-dashboard per survey
- **Deliverable:** Klanten kunnen NPS/CSAT-surveys versturen en resultaten zien

### Sprint 3 (1 week) — Cross-module + content
- Auto-triggers: complaint high/critical → NC suggest, root_cause → CAPA suggest, closed → survey
- Management Review sectie 35 auto-fill
- KB-artikelen seeders (8 stuks)
- Email-templates NL
- Document-templates aanvullen
- Customer-satisfaction cross-dashboard
- **Deliverable:** complete closed-loop M4+M5 live

---

## 12. Open vragen

1. **Customers-tabel:** bestaat deze al voor 27001 (leveranciers wel — supplier_documents)? Of moeten we 'm nieuw bouwen?
2. **Multi-tenant email:** sendgrid/postmark per tenant of central? DKIM-signing? Reply-to handling?
3. **Survey-anonimiteit:** willen we anonieme responses ondersteunen (geen customer_id) of altijd vereisen?
4. **NPS-benchmark:** zelf data verzamelen voor industry-vergelijking of integreren met Delighted/AskNicely?
5. **Customer-portal:** mogen klanten in eigen account klachten zien (login required)? Of magic-link only?
6. **GDPR:** survey-data retentie? Default 24 maanden? Auto-anonimiseren na X?
7. **Complaint-numbering:** per-tenant counter (KLA-2026-001) of UUID? Per-jaar reset?

---

## 13. Success-metrics

Na 90 dagen live:
- ≥70% van actieve 9001-tenants heeft ≥1 klacht geregistreerd in M4
- ≥30% heeft ≥1 survey verstuurd via M5
- Average response-rate van surveys >25%
- ≥50% van klachten heeft root-cause ingevuld
- ≥40% van high/critical klachten heeft gekoppelde NC
- Management Review sectie 35 auto-fill gebruikt in ≥60% van openen-events

---

*Document opgesteld voor implementatie M4+M5 — Control One ISO 9001 portal.*
