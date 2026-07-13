# Story: Takenoverzicht in de portal

**Type:** Feature
**Priority:** High

---

## Het probleem

We hebben nu CPAR's voor zware compliance-acties, en op sommige modules (zoals incidenten) een "toegewezen aan"-veld. Maar er is geen centraal plek waar een gebruiker ziet wat er allemaal voor hem of haar openstaat in de portal. Werk uit verschillende modules, zoals een incident, een actiepunt uit een directiebeoordeling, een auditbevinding of een document dat herzien moet worden, leeft nu versnipperd.

## Wat ik wil

Een takenmodule in de portal waarmee iedere gebruiker zijn werk overzichtelijk beheert.

> **Als gebruiker** wil ik **één plek** waar al mijn taken samenkomen, ongeacht waar ze vandaan komen, zodat ik weet wat ik moet doen, wanneer, en niets vergeet.

> **Als manager** wil ik kunnen zien wie waar aan werkt zodat ik kan sturen en escaleren wanneer nodig.

## Wat ik me erbij voorstel

- Een nieuw menu-item **Taken** in de zijbalk.
- Een **dashboard / overzicht** met "mijn taken", openstaand, overdue, deze week.
- Een **takenlijst** met filters (status, prioriteit, deadline, bron, eigenaar).
- Per taak: titel, beschrijving, eigenaar, status, prioriteit, deadline, logboek (comments en activity).
- Taken moeten **toegewezen** kunnen worden aan gebruikers.
- Taken kunnen voortkomen uit andere modules in de portal. Denk aan incidenten, CPAR's, audits, directiebeoordelingen, risico's, documenten, leveranciers, coach-stappen en checklist-items. Zorg dat de koppeling slim is, zodat je vanuit een module makkelijk een taak kunt aanmaken én vanuit een taak terug naar de bron kunt klikken.
- Notificaties bij toewijzing en bij naderende of overschreden deadlines.

Hoe dat technisch werkt (datamodel, status-flow, UI-keuzes, permissies) laat ik aan jou. Jij kent de codebase. Maak iets dat past in de stijl van de rest van de portal.

## Wat het níet hoeft te zijn

- Geen vervanging van CPAR's. Die blijven bestaan voor zware compliance-acties. Taken zijn er aanvullend op, voor de "gewone" to-do's.
- Geen project-management-tool. Geen Gantt, geen time-tracking, geen recurring tasks. Houd het simpel.
- Geen externe integraties (Slack, Teams, etc.) in deze release.

## Wat ik wil terugzien voordat we live gaan

- Ik kan vanuit een willekeurige module een taak aanmaken en toewijzen.
- Ik zie als gebruiker mijn open taken meteen na inloggen (dashboard of badge in menu).
- Ik krijg een notificatie als iemand mij een taak geeft of als een deadline nadert.
- Een manager kan zien wat er bij wie openstaat.

---

Loop het door en kom met vragen of een korte aanpak voordat je begint. Dan stem ik samen met je af waar we beginnen en wat we eerst doen. Ik laat het verder aan jou.
