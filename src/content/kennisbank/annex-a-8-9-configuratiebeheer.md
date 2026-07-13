---
title: "Annex A 8.9: Configuratiebeheer"
description: "Maatregel 8.9 van ISO 27001 Annex A eist vastgestelde, gedocumenteerde en bewaakte configuraties: security baselines, hardening en het voorkomen van configuratiedrift."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.9, nieuw in de 2022-versie, eist dat configuraties inclusief beveiligingsconfiguraties worden vastgesteld, gedocumenteerd, geïmplementeerd, gemonitord en beoordeeld: veilige standaardinstellingen (baselines) per systeemtype, wijzigingen alleen via het wijzigingsproces, en periodieke controle dat systemen nog aan de baseline voldoen. Standaardwachtwoorden wijzigen en onnodige functies uitschakelen zijn de kern van hardening."
publishDate: 2026-07-14
readTime: "4 min"
keywords: ["annex a 8.9", "configuratiebeheer", "hardening", "baseline", "iso 27001"]
gerelateerd: ["annex-a-8-8-technische-kwetsbaarheden", "annex-a-8-1-eindgebruikersapparaten", "annex-a-8-32-wijzigingsbeheer"]
faq:
  - vraag: "Wat is een security baseline?"
    antwoord: "Een vastgestelde set veilige instellingen per systeemtype: wat staat aan en uit op een werkplek, server, firewall of cloudomgeving. Je hoeft hem niet zelf te verzinnen: leveranciers en instanties zoals CIS publiceren baselines die je overneemt en aanpast. Voor Microsoft 365 zijn de secure score en de aanbevolen beleidsregels een praktisch startpunt."
  - vraag: "Hoe voorkom je configuratiedrift?"
    antwoord: "Beheer configuraties centraal en geautomatiseerd (MDM-profielen, groepsbeleid, infrastructuur-als-code): dan is de baseline geen document maar een afgedwongen werkelijkheid. Periodieke controle (secure score, compliance-rapportages) vangt de rest."
---

Annex A-maatregel 8.9 van ISO 27001, "Configuration management", is nieuw in de 2022-versie en raakt een taaie waarheid: de meeste inbraken benutten geen exotische kwetsbaarheid maar een verkeerde instelling die er altijd al stond.

## Wat eist de maatregel?

Configuraties, inclusief beveiligingsconfiguraties, van hardware, software, diensten en netwerken worden vastgesteld, gedocumenteerd, geïmplementeerd, gemonitord en beoordeeld. Elementen: standaard veilige templates per systeemtype, wijziging alleen via het wijzigingsproces (8.32), registratie van de actuele configuraties en periodieke toetsing tegen de baseline.

## Zo vul je hem in

1. **Stel baselines vast per type**: werkplek, server, firewall, cloudomgeving; op basis van leveranciersaanbevelingen of CIS-benchmarks, aangepast aan de eigen situatie en vastgelegd.
2. **Hard de basis**: standaardwachtwoorden gewijzigd, onnodige diensten en poorten dicht, ongebruikte accounts uit, extern delen bewust geconfigureerd; de klassiekers die audits en aanvallers als eerste vinden.
3. **Dwing centraal af**: MDM-profielen en centraal beleid maken de baseline zelfhandhavend; handwerk verzandt in drift.
4. **Controleer periodiek**: compliance-rapportages of secure-score-metingen tegen de baseline, afwijkingen behandeld als bevinding (5.36).

## Waar let de auditor op?

De auditor vraagt de baseline en de laatste toets ertegen: hoe weet je dat alle werkplekken versleuteld zijn en de firewall geen open beheerpoort naar internet heeft? Een compliance-dashboard is het sterkste antwoord. De klassieke bevindingen: fabriekswachtwoorden op netwerkapparatuur, en cloudomgevingen die nog volledig op de onveilige standaardinstellingen draaien.
