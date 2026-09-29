#!/bin/sh
# Maakt de PDF van de verwerkersovereenkomst uit de printversie van de pagina.
#
# Gebruik: start de site (npm run dev) en draai dan
#   scripts/dpa-pdf.sh [basis-url]
# De basis-url is standaard http://localhost:4321.
#
# De PDF komt in public/downloads/, met het versienummer uit src/data/dpa.ts in
# de naam. Verhoog dus eerst de versie als de tekst is gewijzigd; oude PDF's
# blijven staan zodat terug te vinden is welke versie een klant tekende.
set -eu

cd "$(dirname "$0")/.."

BASE_URL="${1:-http://localhost:4321}"
VERSION=$(sed -n "s/.*version: '\([^']*\)'.*/\1/p" src/data/dpa.ts | head -n 1)
OUT="public/downloads/control-one-verwerkersovereenkomst-v${VERSION}.pdf"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

if [ -z "$VERSION" ]; then
  echo "Geen versie gevonden in src/data/dpa.ts" >&2
  exit 1
fi

if [ -e "$OUT" ] && [ "${FORCE:-0}" != "1" ]; then
  echo "$OUT bestaat al. Verhoog de versie in src/data/dpa.ts, of zet FORCE=1 om deze versie te overschrijven." >&2
  exit 1
fi

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" \
  "${BASE_URL}/verwerkersovereenkomst/afdrukken/" >/dev/null 2>&1

echo "Gemaakt: $OUT"
