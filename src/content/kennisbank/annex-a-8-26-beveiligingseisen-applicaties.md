---
title: "Annex A 8.26: Beveiligingseisen voor applicaties"
description: "Maatregel 8.26 van ISO 27001 Annex A eist dat beveiligingseisen worden bepaald bij het ontwikkelen én aanschaffen van applicaties. Van transacties tot inkoopchecklist."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.26 eist dat eisen voor informatiebeveiliging worden geïdentificeerd, gespecificeerd en goedgekeurd bij het ontwikkelen of aanschaffen van applicaties: authenticatie en autorisatie, bescherming van gegevens in de applicatie en onderweg, invoervalidatie, logging, en bij transactionele toepassingen de integriteit van de transacties. De eisen gelden dus ook bij inkoop van software en SaaS."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.26", "beveiligingseisen", "applicatiebeveiliging", "requirements", "iso 27001"]
gerelateerd: ["annex-a-8-25-veilige-ontwikkelcyclus", "annex-a-5-23-clouddiensten", "annex-a-8-29-beveiligingstesten"]
faq:
  - vraag: "Geldt deze maatregel ook bij het kopen van software?"
    antwoord: "Ja, expliciet: ook bij aanschaf en bij SaaS moeten de beveiligingseisen vooraf bepaald en getoetst worden. Dat sluit aan op de selectiecriteria van 5.23: MFA/SSO-ondersteuning, rolgebaseerde autorisatie, logging, versleuteling en exportmogelijkheden zijn eisen die je aan elke aan te schaffen applicatie stelt."
  - vraag: "Hoe specificeer je eisen zonder zwaar proces?"
    antwoord: "Een standaard eisenlijstje dat je per project of aanschaf doorloopt en aanvult: wie mag erin (authenticatie, rollen), welke data raakt het (classificatie, versleuteling, AVG), wat moet gelogd, wat zijn de beschikbaarheidseisen. Tien vragen die tien minuten kosten en achteraf herbouwen voorkomen."
---

Annex A-maatregel 8.26 van ISO 27001, "Application security requirements", zorgt dat beveiligingseisen aan het begin worden gesteld, waar ze goedkoop zijn, in plaats van aan het eind, waar ze duur zijn.

## Wat eist de maatregel?

Bij het ontwikkelen of verwerven van applicaties worden de informatiebeveiligingseisen geïdentificeerd, gespecificeerd en goedgekeurd: het vertrouwensniveau van de identiteiten (authenticatie), autorisatie per rol, de classificatie van de verwerkte informatie en de bijbehorende bescherming, invoer- en verwerkingscontroles, logging en monitoring, en wettelijke eisen zoals de AVG. Voor transactionele diensten komen daar eisen bij rond de integriteit en onweerlegbaarheid van transacties.

## Zo vul je hem in

1. **Maak een standaard eisenset**: een herbruikbare checklist voor elke nieuwe applicatie, gebouwd of gekocht: toegang, data, logging, beschikbaarheid, privacy; schaal de diepgang met het risico.
2. **Koppel aan de bestaande poorten**: de eisen worden getoetst in het projectproces (5.8) en bij SaaS-selectie (5.23); één route voor bouwen en kopen.
3. **Leg de goedkeuring vast**: wie heeft de eisen vastgesteld en wie heeft geaccepteerd dat de applicatie eraan voldoet; dat is het toetsbare moment.
4. **Test tegen de eisen**: de beveiligingstests van 8.29 verifiëren precies wat hier is gespecificeerd; zonder eisen valt er niets te testen.

## Waar let de auditor op?

De auditor pakt de laatst geïntroduceerde applicatie en vraagt naar de eisen die vooraf zijn gesteld en de toets erop. De gangbare bevinding: aanschaf op functionaliteit en prijs, beveiliging nooit ter sprake gekomen, en de applicatie blijkt geen SSO te ondersteunen waardoor er wéér een losse accountenset bestaat (5.16).
