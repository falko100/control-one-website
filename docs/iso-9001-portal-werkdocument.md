# ISO 9001 portal: werkdocument

**Doel:** dit document beschrijft wat er moet veranderen in de Control One portal om van een ISO 27001-portal een echte ISO 9001-portal te maken. Het is een werkdocument, geen onderzoek. Voor de achtergrond en de markt-analyse: zie [iso-9001-portal-feature-research.md](iso-9001-portal-feature-research.md).

**Status:** levend document. Bij wijzigingen aan scope of prioriteit hier bijwerken.

---

## Uitgangspunt

De huidige portal is gebouwd vanuit ISO 27001 (ISMS, informatiebeveiliging). Voor 9001 vallen er sommige dingen helemaal weg, blijft de functionaliteit van veel andere onderdelen staan terwijl de inhoud anders moet, en komen er nieuwe modules bij. De portal moet framework-aware worden. Een 9001-tenant ziet 9001-content en 9001-modules. Een 27001-tenant blijft alles zien zoals het nu is. De multi-framework architectuur (apart `framework_id` met shared content waar mogelijk) hebben we al gekozen.

In dit document onderscheiden we vier categorieën:

- **A. Verwijderen of verbergen** voor 9001 (functionaliteit hoort er niet)
- **B. Behouden en inhoud transformeren** (functionaliteit blijft, content wordt 9001)
- **C. Behouden zonder wijziging** (generiek, werkt voor alle frameworks)
- **D. Toevoegen** (modules die 27001 niet kent maar 9001 nodig heeft)

---

## A. Wat verwijderen of verbergen voor 9001

Functionaliteit die specifiek bij 27001 hoort en in een 9001-portal niet bestaat of misleidend is. Voor een 9001-tenant moeten deze onderdelen volledig uit sidebar en dashboard verdwijnen. Voor 27001-tenants blijven ze beschikbaar.

| Onderdeel | Reden |
|---|---|
| **Annex A maatregelen** (93 controls) | Annex A bestaat alleen in 27001, niet in 9001 |
| **Verklaring van Toepasselijkheid (SoA)** | SoA is het document dat Annex A koppelt, dus heeft 9001 niet. 9001 kent wel een scope-statement, maar dat is een ander documenttype (zie categorie B) |

Meer dan deze twee zit er feitelijk niet in. Andere infosec-georiënteerde onderdelen verwijderen we niet, die transformeren we (categorie B).

---

## B. Wat behouden en inhoud transformeren

Functionaliteit die generiek genoeg is om voor beide frameworks te werken, maar waarvan de inhoud, woordenschat of templates per framework verschillen. Het bouwwerk blijft staan. We voeren een framework-laag in zodat de juiste content wordt getoond.

| Onderdeel | Voor 27001 nu | Voor 9001 |
|---|---|---|
| **Coach** | 28 ISMS-stappen | 28 9001-stappen (al aangemaakt) |
| **Handboek** | ISMS-handboek (Informatiebeveiligingshandboek) | Kwaliteitshandboek |
| **Kennisbank-artikelen** | Infosec-onderwerpen | Kwaliteits-onderwerpen, onder 6 nieuwe 9001-categorieën |
| **Risk Matrix** | Vertrouwelijkheid / Integriteit / Beschikbaarheid als impact-as | Kwaliteit / Levering / Klant als impact-as |
| **Risicoanalyse** | Risico's op informatie-assets | Risico's op processen, producten en klantbeleving |
| **Risicobeoordelingen** | Bepaling info-sec risico's | Bepaling kwaliteitsrisico's (proces, klant, leverancier, product) |
| **Incidenten** | Security-incidenten (datalek, phishing, ongeautoriseerde toegang) | Kwaliteitsincidenten (klacht, productfout, milieuvoorval, service-storing) |
| **Documenten-types** | Risk policy, audit policy, evidence | Voor 9001 default: policy, manual, evidence (geen risk_policy) |
| **Audit-questionnaires** | Per clause + Annex | Per clause (al 7 sets aangemaakt) |
| **Directiebeoordeling-secties** | ISMS-focus | 9001-focus (al 4 secties aangemaakt: klanttevredenheid, procesperformance, leveranciersprestaties, doelstellingen) |
| **Checklist** | Gap-vragen 27001 | Gap-vragen 9001 (al 70 items aangemaakt) |
| **Chapters** | 35 clauses 27001 + Annex A | 35 clauses 9001 (al aangemaakt) |
| **Document-templates** | ISMS-beleid, procedures, handboek | QMS-beleid, procedures, handboek (al 40 aangemaakt) |
| **CPAR-bronnen** | Interne audit, Externe audit, Incident (security) | Uitbreiden met Klacht, Niet-conformiteit, Klanttevredenheid, Procesperformance |

Veel van de 9001-inhoud staat al klaar via MCP. Wat nog moet gebeuren op deze categorie:

- Framework-laag in de portal: weet welk framework actief is en toont de juiste content
- Norm-velden vullen voor 35 chapters (wacht op fillable-fix bij collega)
- `is_admin_template: true` op de 40 templates (wacht op fillable-fix)
- 12 KB-artikelen schrijven onder de 6 categorieën
- CPAR-bronnen uitbreiden met de 9001-specifieke bronnen
- Risk Matrix-labels per framework configureerbaar maken
- Incident-typen per framework

---

## C. Wat behouden zonder wijziging

Generieke functionaliteit die voor alle frameworks werkt zonder specifieke aanpassingen. Hier hoeft niets aan te veranderen, alleen zorgen dat ze cross-framework gekoppeld kunnen worden.

| Onderdeel | Toelichting |
|---|---|
| **CPAR-systeem zelf** (status-flow, root-cause, log) | Bronnen worden uitgebreid (categorie B), maar de CPAR-entiteit blijft |
| **Audits-module** (planning, uitvoering, findings, rapport) | Werkt voor zowel infosec-audits als kwaliteitsaudits |
| **Documenten-management** (versies, distributie, review-cyclus) | Beheer-functionaliteit is generiek, types in categorie B |
| **Personeel** | Generiek |
| **Gebruikers en rollen** | Generiek |
| **Leveranciers basis** (register, contactgegevens) | Wel uitbreiden met scorecards (zie categorie D, SHOULD) |
| **Taken** (nieuw, zie aparte ticket) | Generiek polymorphic |
| **Periodieke herinneringen** (nieuw, zie aparte ticket) | Generiek |
| **Framework-systeem zelf** (chapters, coach-engine, checklist-engine) | Multi-framework opgezet, content per framework |

---

## D. Wat toevoegen voor 9001

Modules die 27001 niet kent maar die 9001 nodig heeft om als werkbare kwaliteitsmanagement-tool te functioneren.

| Module | Wat | Clause |
|---|---|---|
| **Klachten (M4)** | Klachten-intake, root-cause, koppeling naar NC en CAPA | 9.1.2 / 10.2 |
| **Klanttevredenheid (M5)** | NPS- en CSAT-surveys, dashboard met trend | 9.1.2 |
| **Equipment + Kalibratie (M1)** | Instrumenten-register, kalibratie-historie, certificaten | 7.1.5 |
| **Preventief onderhoud (M2)** | Onderhoudsplannen, kalender, log | 7.1.3 |
| **Training + competentiematrix (M3)** | Medewerker × skill × expiry | 7.2 |
| **Non-Conformity register (M6)** | NC's apart van CAPA, met 5-Why en 8D | 10.2 |
| **Proceskaart + KPI per proces (M7)** | Per proces eigenaar, RACI, in- en output, KPI-set | 4.4, het hart van 9001 |

Detail-designs klaar:
- [iso-9001-m7-proceskaart-kpi-design.md](iso-9001-m7-proceskaart-kpi-design.md)
- [iso-9001-m4-m5-customer-design.md](iso-9001-m4-m5-customer-design.md)

---

## E. Sidebar voor een 9001-tenant

Op basis van A t/m D ziet de sidebar van een 9001-tenant er als volgt uit:

**Algemeen (cross-framework, altijd zichtbaar):**
- Dashboard
- Taken (nieuw)
- CPAR's
- Risicobeoordelingen (label en categorieën framework-aware)
- Klachten (nieuw, M4)
- Niet-conformiteit (nieuw, M6)
- Incidenten (label en typen framework-aware)
- Directiebeoordelingen
- Personeel
- Gebruikers
- Kennisbank (artikelen per framework)

**ISO 9001-sectie:**
- Coach (9001-stappen)
- Kwaliteitshandboek
- Processen (nieuw, M7)
- Klanttevredenheid (nieuw, M5)
- Documenten
- Scope-verklaring (vervangt SoA)
- Checklist
- Risicoanalyse (kwaliteits-context)
- Leveranciers
- Audits
- Equipment + Kalibratie (nieuw, M1)
- Onderhoud (nieuw, M2)
- Training (nieuw, M3)

Wat ten opzichte van de huidige 27001-sidebar wegvalt voor 9001: Maatregelen (Annex A) en Verklaring van Toepasselijkheid. Wat nieuw is: Klachten, Niet-conformiteit, Processen, Klanttevredenheid, Equipment, Onderhoud, Training, plus Taken als generieke toevoeging.

---

## F. Dashboard voor een 9001-tenant

Tegels op het dashboard moeten passen bij wat een kwaliteitsmanager dagelijks wil zien.

**Verwijderen voor 9001:** Risk Matrix in infosec-context (vervangen door kwaliteitsrisico-matrix, dezelfde tegel met andere labels).

**Bestaande tegels behouden, inhoud transformeren:**
- Coach-voortgang (toont 9001-coach)
- CPAR-overzicht (toont ook 9001-bronnen)
- Leveranciers-overzicht (verrijken met scorecards in SHOULD)

**Toevoegen voor 9001:**
- Klachten-overzicht (open, in behandeling, opgelost laatste 90 dagen)
- Klanttevredenheid (laatste NPS + trend)
- KPI-overzicht per proces (top 5 met stoplicht-status)
- Equipment-overdue (kalibratie of onderhoud te laat)
- Training-overdue (skills met expiry overschreden)
- Niet-conformiteit-overzicht (open, major, minor)
- Deadlines (vanuit periodieke herinneringen ticket)
- Mijn open taken (vanuit takenoverzicht ticket)

