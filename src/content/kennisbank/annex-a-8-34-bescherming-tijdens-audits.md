---
title: "Annex A 8.34: Bescherming van systemen tijdens audits en tests"
description: "Maatregel 8.34 van ISO 27001 Annex A eist dat audits en tests op productiesystemen gepland en afgestemd worden om verstoring en datablootstelling te voorkomen."
norm: "iso-27001"
categorie: "normeisen"
tldr: "Annex A-maatregel 8.34 eist dat audittests en andere beoordelingsactiviteiten op operationele systemen worden gepland en afgestemd tussen de tester en het verantwoordelijke management: leestoegang waar het kan, scans en pentests buiten piekuren en met afgebakende scope, toegang voor auditors beperkt en gemonitord, en afspraken vooraf over wat er met aangetroffen gegevens gebeurt."
publishDate: 2026-07-14
readTime: "3 min"
keywords: ["annex a 8.34", "auditbescherming", "pentest afspraken", "iso 27001"]
gerelateerd: ["annex-a-8-29-beveiligingstesten", "annex-a-5-35-onafhankelijke-beoordeling", "interne-audit-uitvoeren"]
faq:
  - vraag: "Waarom kan een audit of pentest zelf een risico zijn?"
    antwoord: "Een scan kan systemen overbelasten of laten crashen, een pentester krijgt diepe toegang en ziet mogelijk gevoelige data, en auditwerkzaamheden op productie kunnen processen verstoren. De maatregel eist dat die risico's vooraf worden afgesproken en beheerst in plaats van ontdekt."
  - vraag: "Welke afspraken maak je met een pentester?"
    antwoord: "Scope en uitgesloten systemen, testvenster (buiten piekuren), toegestane technieken (geen destructieve tests of social engineering tenzij afgesproken), noodcontact en stopprocedure, geheimhouding, omgang met aangetroffen data, en veilige oplevering en vernietiging van het rapportmateriaal. Dit staat in de standaard-overeenkomsten van professionele testpartijen."
---

Annex A-maatregel 8.34 van ISO 27001, "Protection of information systems during audit testing", sluit Annex A af met een nuchtere waarborg: het beoordelen van de beveiliging mag de beveiliging en de bedrijfsvoering zelf niet schaden.

## Wat eist de maatregel?

Audittests en andere assurance-activiteiten op operationele systemen worden gepland en overeengekomen tussen de tester en het passende managementniveau: de scope is afgesproken, toegang is beperkt tot wat nodig is (bij voorkeur alleen-lezen), tests die de beschikbaarheid kunnen raken draaien buiten bedrijfsuren, en alle toegang wordt gemonitord en gelogd.

## Zo vul je hem in

1. **Plan formele momenten**: interne audits, pentests en leveranciersaudits hebben een afgesproken scope, venster en contactpersoon; verrassingsscans op productie bestaan niet.
2. **Beperk de toegang van de beoordelaar**: alleen-lezen waar het kan, tijdelijke accounts die na afloop verdwijnen, en logging van wat de auditor of tester heeft benaderd (8.15).
3. **Bescherm wat wordt aangetroffen**: geheimhouding, afspraken over datamininimalisatie in rapporten (geen dumps van klantgegevens als bewijs) en veilige vernietiging van testmateriaal.
4. **Regel de noodrem**: een stopprocedure en noodcontact voor als een test onverwacht productie raakt.

## Waar let de auditor op?

Dit is de maatregel die de auditor aan den lijve ondervindt: krijgt hij netjes een tijdelijk alleen-lezen-account of het wachtwoord van de beheerder op een post-it? De pentest-overeenkomst met scope en voorwaarden is het gangbare bewijs. De bevinding hier is zeldzaam maar veelzeggend: een pentest die zonder afspraken de productie plat legde.
