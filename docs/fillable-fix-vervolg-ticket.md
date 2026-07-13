# Story: Fillable + MCP-velden afronden voor portal-content

**Type:** Bug / Follow-up
**Priority:** High

---

## Het probleem

We hebben eerder een verzoek bij je neergelegd om een aantal velden toe te voegen aan `$fillable` op drie modellen, zodat ik via de MCP-koppeling content kan schrijven voor de ISO 9001-implementatie.

Na een controle blijkt dat dit nog niet (volledig) werkt:

- **Chapter `norm`** geeft nog steeds een MCP-error bij een schrijfpoging. Lijkt nog niet doorgevoerd, of er zit iets anders in de weg (validation rule, observer, etc.).
- **Document `is_admin_template`, `is_template`, `review_interval`, `last_review_at`** en **ChecklistItem `sort_order`** zijn niet bereikbaar via MCP, ook niet bij een schrijfpoging. Het MCP-schema (de admin-resource) exposeert die velden niet.

Conclusie: het zit waarschijnlijk in twee lagen die allebei aangepast moeten worden, niet alleen `$fillable`.

## Wat ik wil

Dat ik via de MCP-tools de norm op chapters kan zetten, de admin-template-flag op documenten kan toggelen, en de sort_order op checklist-items kan bepalen. Zodat ik de 9001-content kan afronden zonder dat jij elke keer een handmatige database-actie hoeft te doen.

> **Als content-beheerder** wil ik **via de MCP** kunnen schrijven naar de velden waar de portal mee werkt, zodat ik admin-content kan seeden zonder DB-toegang.

## Wat moet er gebeuren

Voor de drie modellen op zowel `$fillable` als op de MCP-/admin-resource-definitie controleren of de velden aanwezig zijn, en waar nodig toevoegen:

- **Chapter**: `norm`
- **Document**: `is_admin_template`, `is_template`, `review_interval`, `last_review_at` (denk ook aan casts: booleans + datetime)
- **ChecklistItem**: `sort_order`

Hoe je dit precies oppakt (Filament-resource, API-resource, observer, validation, casts), laat ik aan jou. Jij kent de stack.

## Hoe ik het ga testen

Zodra je het hebt doorgevoerd, doe ik via de MCP-koppeling op alle drie de modellen een schrijfpoging op de betreffende velden:

- Update een chapter met een `norm`-tekst, daarna ophalen en kijken of de tekst persistent is.
- Update een document met `is_admin_template: true`, daarna controleren of het in de admin-UI "Documentsjablonen"-pagina verschijnt.
- Update een checklist-item met `sort_order`, daarna controleren of de volgorde in de UI correct is.

Geef me een seintje als het klaar is, dan voer ik deze checks uit en pak ik de batch-content-updates op.

## Wat het níet hoeft te zijn

- Geen database-migration als de kolommen er al staan (voor 27001 gebruiken we deze velden al, dus die kans is groot).
- Geen rebuild van de hele admin-resource. Alleen de velden bij die ontbreken.

---

Loop het door en kom met vragen of een korte aanpak voordat je begint. Mocht je tegen een raar randje aanlopen (observer die rejected, validation rule die strict is), laat het me weten dan kijken we samen.
