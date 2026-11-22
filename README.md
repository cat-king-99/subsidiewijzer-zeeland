# Subsidiewijzer Zeeland

Web app (statische site, geen build-stap, geen externe dependencies) met een overzicht van alle
subsidies en financieringsregelingen op **regionaal**, **provinciaal**, **landelijk** (Nederland) en
**Europees** niveau die relevant zijn voor **onderzoek naar de economie, het ondernemerschap en
innovatie in de provincie Zeeland**.

## Functionaliteit

- Kaartjes per regeling met niveau-badge, status (nu open / gepland / doorlopend / afgelopen),
  subsidiebedrag en eerstvolgende deadline.
- Filters: **niveau** (4 niveaus), **categorie** (onderzoek, innovatie, ondernemerschap, economie),
  **tijd/openstelling** (nu open, binnen 3 maanden, openstelling 2026, 2027, doorlopend),
  **subsidiebedrag** (tot €50k / €50k–250k / €250k–1 mln / > €1 mln) en vrije zoektekst.
- Sorteren op bedrag (hoog/laag), deadline of naam.
- Detailvenster per regeling met **beschikbaar bedrag en plafond**, de **volledige voorwaarden**
  voor de aanvraag, doelgroep, thema's, openstellingen en een link naar de officiële bron.
- Status ("nu open" etc.) wordt automatisch berekend ten opzichte van de systeemdatum.

## Starten

```bash
cd subsidiewijzer-zeeland
python3 -m http.server 8000
# open http://localhost:8000
```

Werkt ook door `index.html` direct te openen in een browser (data zit in `data.js`, geen fetch nodig).

## Bestandsstructuur

- `index.html` – pagina-opbouw
- `styles.css` – styling
- `data.js` – dataset (`SUBSIDIES`), niveaus, categorieën, datum "laatst bijgewerkt"
- `app.js` – filter-, sorteer- en renderlogica

## Gegevens bijwerken

Voeg een item toe aan `SUBSIDIES` in `data.js`. Verplichte velden: `id`, `naam`, `niveau`
(`regionaal|provinciaal|landelijk|europees`), `categories` (uit `onderzoek|innovatie|ondernemerschap|economie`),
`type`, `uitvoerder`, `bedragTekst`, `bedragMax` (number of null), `plafond`, `samenvatting`,
`voorwaarden` (array), `wie`, `themas`, `doorlopend` (bool), `openstellingen` (array van
`{vanaf: "JJJJ-MM-DD", t/m: "JJJJ-MM-DD", label}`), `url`, `tags`.
Wijzig `LAATST_BIJGEWERKT` mee.

## Bronnen (november 2026)

rvo.nl · zeeland.nl · impulszeeland.nl · interregvlaned.eu · interregnorthsea.eu · nwo.nl ·
rijksoverheid.nl · lokalereregeling.overheid.nl

## Disclaimer

De gegevens in deze wijzer zijn indicatief en op het vermelde moment naar beste weten
geverifieerd. Regelingen, bedragen, percentages en openstellingen wijzigen regelmatig.
De officiële regeltekst en publicaties van de uitvoerder zijn altijd leidend.
