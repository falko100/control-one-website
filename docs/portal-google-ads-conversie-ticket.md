# Story: Google Ads aankoop-conversie tracken in de portal

**Type:** Feature / Marketing-tracking
**Priority:** Medium

---

## Het probleem

We adverteren op Google Ads en willen weten welke campagnes daadwerkelijk leiden tot een betaalde aankoop in onze portal. Op dit moment kunnen we wel zien wie klikt op een advertentie, maar we missen het stukje "deze klik heeft uiteindelijk geleid tot een betalende klant van X euro". Daardoor sturen we onze advertentiebudgetten blind.

De marketingsite (control-one.nl, Astro) heeft geen aankoop-flow. Die zit volledig in de portal. Daarom moet de conversie-tracking in de portal-codebase landen.

## Wat ik wil

Een Google Ads conversie-event dat afgevuurd wordt zodra een klant een aankoop succesvol heeft afgerond in de portal. Het event geeft de daadwerkelijke orderwaarde en het unieke ordernummer mee zodat Google Ads de juiste ROI kan berekenen en zodat dubbele events automatisch worden ontdubbeld.

## Wat er moet gebeuren

Op de pagina die de klant ziet direct nadat de bestelling of het abonnement succesvol is afgerond (de orderbevestigings- of "bedankt voor je aankoop"-pagina), voeg je dit snippet toe:

```html
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-18054647588/dJ4mCO6Ht8UcEKSekKFD',
    'value': {{ ORDERWAARDE_ALS_GETAL }},
    'currency': 'EUR',
    'transaction_id': '{{ ORDERNUMMER_ALS_STRING }}'
  });
</script>
```

Waarbij:

- `value` moet het werkelijke totaalbedrag van de order zijn als getal (bijvoorbeeld `49.95`, niet `"49.95"`).
- `transaction_id` moet het unieke ordernummer zijn als string. Dit zorgt dat Google Ads dubbele events automatisch ontdubbelt (bijvoorbeeld als de klant de pagina ververst).
- `send_to` blijft exact zoals hierboven. Niet aanpassen.
- `currency` blijft EUR.

Beide waarden komen uit het bestaande order- of abonnementobject op die pagina. Welke property dat is, weet jij beter dan ik.

## Voorwaarden

- Het event mag pas afgaan **nadat** de pagina geladen is en `gtag` beschikbaar is.
- Het event mag maximaal **één keer per bestelling** afgaan. De `transaction_id` zorgt aan Google's kant voor ontdubbeling, maar voorkom liever ook aan onze kant dat het dubbel afvuurt bij refresh of dubbele render.
- De Google Ads gtag-library moet geladen zijn op de pagina. Check eerst of dat al staat (kijk in de layout naar `googletagmanager.com/gtag/js?id=AW-...` of `id=G-...`). Zo niet, laad dan eerst het base-snippet zoals beschreven in [Google's documentatie](https://support.google.com/google-ads/answer/7548399).

## Wat het níet hoeft te zijn

- Geen tracking op pagina-load van willekeurige pagina's. Alleen op de bevestigingspagina na een gelukte aankoop.
- Geen wijzigingen aan het betaal- of facturatieproces zelf.
- Geen Enhanced Conversions of user-ID matching in deze ronde. Houd het simpel.

## Wat ik wil terugzien voordat we live gaan

- Een testaankoop laat het event netjes verschijnen in de browser Network-tab (een request naar `googleadservices.com/.../conversion/...` met de juiste `value` en `transaction_id`).
- In Google Ads onder Conversies wordt de actie binnen 24 uur na de testaankoop geregistreerd als een geldige conversie.
- Bij een dubbele page-refresh op de bevestigingspagina blijft het maar één conversie in Google Ads.

## Vragen die je waarschijnlijk hebt

Laat me weten zodra je hieraan begint:

1. Welke pagina is de bevestigingspagina precies (route en template)?
2. Staat de Google Ads gtag-library al ergens geladen, of moet die er nog bij?
3. Op welk veld van het order- of abonnementobject zit het totaalbedrag en het ordernummer?

Daarna pak ik het samen met jou door en testen we 'm met een testtransactie.
