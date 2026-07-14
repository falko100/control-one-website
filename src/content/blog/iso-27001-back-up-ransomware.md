---
title: 'Back-ups die ransomware overleven: de 3-2-1-regel in de praktijk'
description: 'Je back-up bepaalt of ransomware een ramp is of een vervelende week. Zo richt je back-ups in die een aanval met beheerrechten overleven.'
publishDate: 2026-07-25
category: 'ISO 27001'
readTime: '6 min'
author: 'Control One Redactie'
image: '/blog/banner-iso27001.svg'
keywords: ['back-up ransomware', '3-2-1 regel', 'back-up strategie iso 27001', 'ransomware herstel']
---

Op het moment dat ransomware toeslaat, is er nog maar één vraag die telt: heb je een werkende back-up die de aanvaller niet heeft kunnen versleutelen? Het antwoord bepaalt of je binnen een dag terug bent of weken in crisismodus zit. En dat antwoord wordt gemaakt vóór de aanval, niet erna.

## Wat eist ISO 27001?

[Annex A-maatregel 8.13](/kennis/iso-27001/annex-a-8-13-back-up-van-informatie/) vraagt back-ups die worden bijgehouden én regelmatig getest volgens een vastgesteld beleid. Die tweede eis, testen, is precies wat de meeste organisaties overslaan.

## De 3-2-1-regel, en waarom er een 3-2-1-1 nodig is

De klassieke 3-2-1-regel: drie kopieën van je data, op twee verschillende soorten media, waarvan één op een andere locatie. Tegen [ransomware](/kennis/iso-27001/wat-is-ransomware/) is dat niet meer genoeg, want moderne aanvallers zoeken en versleutelen juist je back-ups. De aanvulling: minimaal één kopie **offline of onveranderbaar** (immutable), zodat een aanvaller met beheerrechten er niet bij kan.

## Het cloud-misverstand

"Microsoft maakt toch een back-up?" is de gevaarlijkste aanname in het MKB. Grote clouddiensten beschermen hun platform, niet jouw data tegen jouw fouten of tegen ransomware. Verwijderde bestanden vallen na de prullenbaktermijn weg, en een aanvaller of kwaadwillende beheerder wist ook de cloudkopie. De [gedeelde verantwoordelijkheid](/kennis/iso-27001/annex-a-5-23-clouddiensten/) legt de back-up van je eigen data bij jou.

## De test die het verschil maakt

| Zonder test | Met test |
|---|---|
| "De back-up draait" (aanname) | "De back-up is terug te zetten binnen de RTO" (bewijs) |
| Ontdekking tijdens crisis | Ontdekking tijdens geplande test |
| Onbekende hersteltijd | Gemeten hersteltijd |

Een back-up die nooit is teruggezet, is een aanname, geen voorziening. Test minimaal jaarlijks een echt herstel van je kritische systemen.

> **Tip van Control One:** Behandel je back-up qua toegang als het gevoeligste systeem dat je hebt. Aparte inloggegevens, MFA, en gescheiden van je productieomgeving. Een back-up die aan hetzelfde domein hangt als je productie, is bij een aanval net zo goed weg.

## Van back-up naar continuïteit

Back-up is de kern van je [bedrijfscontinuïteit](/kennis/iso-27001/bedrijfscontinuiteitsplan-opstellen/). Bepaal per systeem hoe snel het terug moet (RTO) en hoeveel dataverlies acceptabel is (RPO), en stem je back-up daarop af. Oefen het ransomware-scenario jaarlijks in een tabletop.

Back-up is één schakel in een weerbaar ISMS. Bekijk de [ISO 27001-checklist](/kennis/iso-27001/iso-27001-checklist/) of doe de [Quickscan](/quickscan) om je weerbaarheid te toetsen.
