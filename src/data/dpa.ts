// Versie van de verwerkersovereenkomst. Verhoog de versie bij elke wijziging
// van de tekst (src/components/legal/DpaBody.astro) en maak daarna de PDF
// opnieuw met scripts/dpa-pdf.sh. Oude PDF's blijven staan, zodat een klant
// altijd kan terugvinden welke versie hij heeft getekend.
export const dpa = {
  version: '1.0',
  date: '29 september 2026',
  signatory: {
    name: 'Falko Woudstra',
    role: 'Eigenaar',
  },
} as const;

export const dpaPdfPath = `/downloads/control-one-verwerkersovereenkomst-v${dpa.version}.pdf`;
