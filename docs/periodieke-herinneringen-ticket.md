# Story: Periodieke herinneringen & deadline-overzicht

**Type:** Feature
**Priority:** High

---

## Het probleem

Op veel plekken in de portal hebben we **terugkerende beoordelingen en acties**: een jaarlijkse directiebeoordeling, een document dat periodiek herzien moet worden, een jaarlijkse interne audit, een externe audit, et cetera. De cycli zijn per module netjes ingesteld en werken op zich goed.

Maar nergens zie je in één oogopslag wat eraan zit te komen. Daardoor wordt er niet actief op gestuurd en kunnen deadlines stilletjes verlopen.

## Wat ik wil

Een overzicht van komende deadlines uit alle modules samen, plus e-mailnotificaties zodat de eigenaar het ziet aankomen.

> **Als verantwoordelijke** wil ik **één plek** waar ik zie wat er de komende weken en maanden moet gebeuren uit alle modules, zodat ik op tijd kan plannen en niets vergeet.

> **Als eigenaar van een terugkerende actie** wil ik **automatisch een mailtje** krijgen als een deadline nadert, zodat ik weet dat ik aan de bak moet.

## Wat ik me erbij voorstel

- Een overzicht van komende deadlines uit alle modules in de portal. Denk aan: directiebeoordeling, document-reviews, interne audit, externe audit, leveranciersbeoordeling, kalibratie, trainingen, et cetera. Alles met een terugkerende cyclus.
- Per item: wat het is, wanneer het moet, wie de eigenaar is, hoe lang nog.
- Een **dashboardtegel** lijkt me een logische plek, maar denk vrij. Misschien is een eigen pagina, een filter op het bestaande takenoverzicht, of iets anders duidelijker. Als jij een betere variant ziet, bespreek 'm met me.
- **E-mailnotificaties** richting de eigenaar wanneer een deadline nadert. Hoe ver van tevoren en hoe vaak: kom met een voorstel (bijvoorbeeld 30 dagen, 7 dagen, op de dag zelf).
- Bij overdue: extra signaal, en eventueel escalatie richting manager.

Hoe het technisch werkt (datamodel, cron-jobs, mail-templates, UI-keuze) laat ik aan jou. Pak het lekker aan op de bestaande review-cycli in de modules.

## Wat het níet hoeft te zijn

- Geen vervanging van de bestaande review-instellingen per module. Die werken al, daar bouwen we op voort.
- Geen kalender-app met agenda-sync (Google/Outlook) in deze release.
- Geen SMS- of push-notificaties. Alleen e-mail voor nu.

## Wat ik wil terugzien voordat we live gaan

- Ik zie in één oogopslag wat de komende deadlines zijn, overal vandaan, niet per module gefilterd.
- Eigenaars krijgen tijdig een mail vóórdat hun deadline verloopt.
- Bij overschreden deadlines is dat duidelijk zichtbaar én wordt er gemeld.
- Een manager kan zien wat er aankomt en bij wie het ligt.

---

Loop het door en kom met een korte aanpak voordat je begint. Vooral op de UX-keuze (dashboardtegel vs aparte pagina vs iets anders) hoor ik graag jouw voorstel.
