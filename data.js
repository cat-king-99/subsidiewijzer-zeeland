const LAATST_BIJGEWERKT = "22 november 2026";

const NIVEAUS = {
  regionaal:   { label: "Regionaal",   kleur: "#0f766e" },
  provinciaal: { label: "Provinciaal", kleur: "#1d4ed8" },
  landelijk:   { label: "Landelijk",   kleur: "#4338ca" },
  europees:    { label: "Europees",    kleur: "#003399" }
};

const CATEGORIEEN = {
  onderzoek:      { label: "Onderzoek",      icoon: "\u{1F52C}" },
  innovatie:      { label: "Innovatie",      icoon: "\u{1F4A1}" },
  ondernemerschap: { label: "Ondernemerschap", icoon: "\u{1F680}" },
  economie:        { label: "Economie",       icoon: "\u{1F4C8}" }
};

const SUBSIDIES = [
  {
    id: "zis-haalbaarheid",
    naam: "Zeeland in Stroomversnelling (ZiS) \u2013 Haalbaarheidsonderzoeken & verkenningen",
    niveau: "provinciaal",
    categories: ["onderzoek", "innovatie", "economie"],
    type: "Subsidie",
    uitvoerder: "Provincie Zeeland + Rijk + Zeeuwse gemeenten (aanvraagloket via Impuls Zeeland)",
    bedragTekst: "50% van de subsidiabele kosten, maximaal \u20ac50.000 per project",
    bedragMax: 50000,
    plafond: "\u20ac400.000 per openstelling (ronde okt 2026\u2013jan 2027; ronde feb\u2013jun 2026: \u20ac300.000)",
    samenvatting: "Stimuleert haalbaarheidsonderzoeken en verkenningen ter voorbereiding van een innovatief product, proces of dienst die de Zeeuwse economische structuur versterken binnen de RIS3-thema\u2019s van Zuid-Nederland.",
    voorwaarden: [
      "Samenwerking van minimaal twee andere partners, waarvan minstens \u00e9\u00e9n kennisinstelling (hogeschool, onderzoekscentrum of K&I-netwerk)",
      "De aanvrager is vanuit het consortium in Zeeland gevestigd",
      "Het project levert een bijdrage aan minstens \u00e9\u00e9n thema uit de RIS3 Zuid-Nederland 2021-2027 (energie, klimaat, grondstoffen, landbouw, visserij & voeding)",
      "Volledige aanvraag bestaat uit aanvraagformulier (eHerkenning), projectplan, meerjarenbegroting en de-minimisverklaring",
      "Tenderprocedure: aanvragen worden inhoudelijk gerangschikt tot het subsidieplafond is bereikt",
      "Bij toekenning kan de provincie een Bibob-onderzoek instellen"
    ],
    wie: "Consortia van ondernemers, onderzoekers en organisaties in Zeeland (min. 3 partners, incl. 1 kennisinstelling)",
    themas: ["Energie & klimaat", "Grondstoffen & circulaire economie", "Landbouw, visserij & voeding", "Sterke Zeeuwse sectoren"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-02-27", "t/m": "2026-06-19", label: "27 februari \u2013 19 juni 2026 (afgelopen)" },
      { vanaf: "2026-10-09", "t/m": "2027-01-22", label: "9 oktober 2026 (09.00) \u2013 22 januari 2027 (17.00)" }
    ],
    url: "https://www.zeeland.nl/subsidie-aanvragen/overzicht-subsidieregelingen/subsidieregeling-zeeland-stroomversnelling",
    tags: ["haalbaarheid", "kennisinstelling", "consortium", "RIS3", "Zeeland", "tender"]
  },
  {
    id: "zis-demonstratie",
    naam: "Zeeland in Stroomversnelling (ZiS) \u2013 Demonstratieprojecten & pilots",
    niveau: "provinciaal",
    categories: ["innovatie", "economie", "onderzoek"],
    type: "Subsidie",
    uitvoerder: "Provincie Zeeland + Rijk + Zeeuwse gemeenten (via Impuls Zeeland)",
    bedragTekst: "40% van de subsidiabele kosten, maximaal \u20ac200.000 per project",
    bedragMax: 200000,
    plafond: "\u20ac1.200.000\u2013\u20ac1.400.000 per openstelling (afhankelijk van de ronde)",
    samenvatting: "Financiert demonstratieprojecten en pilots waarin een in Zeeland ontwikkelde innovatie in een praktijkomgeving wordt getoond en gevalideerd, binnen de RIS3-transities.",
    voorwaarden: [
      "Zelfde consortium-eisen als de haalbaarheidsregeling: min. 2 extra partners, waarvan 1 kennisinstelling, aanvrager in Zeeland gevestigd",
      "Bij een demonstratieproject tekenen alle consortiumpartners een instemmingsverklaring",
      "Project moet bijdragen aan de maatschappelijke transities uit RIS3 Zuid-Nederland 2021-2027",
      "Aanvraag volledig digitaal indienen (eHerkenning) met projectplan en meerjarenbegroting",
      "Tenderprocedure met subsidieplafond per openstelling; 2025: 9 projecten ontvingen \u20ac711.279"
    ],
    wie: "Innovatieve ondernemers, onderzoekers en organisaties in Zeeland in consortiumverband",
    themas: ["Energie & klimaat", "Grondstoffen", "Landbouw & voeding", "Circulair", "Demonstratie / pilot"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-02-27", "t/m": "2026-06-19", label: "27 februari \u2013 19 juni 2026 (afgelopen; plafond \u20ac1.000.000, verhoogd naar \u20ac1.400.000)" },
      { vanaf: "2026-10-09", "t/m": "2027-01-22", label: "9 oktober 2026 (09.00) \u2013 22 januari 2027 (17.00); plafond \u20ac1.200.000" }
    ],
    url: "https://www.zeeland.nl/subsidie-aanvragen/overzicht-subsidieregelingen/subsidieregeling-zeeland-stroomversnelling",
    tags: ["demonstratie", "pilot", "TRL", "consortium", "Zeeland"]
  },
  {
    id: "zis-hca",
    naam: "Zeeland in Stroomversnelling \u2013 Human Capital Agenda",
    niveau: "provinciaal",
    categories: ["economie", "ondernemerschap", "onderzoek"],
    type: "Subsidie",
    uitvoerder: "Provincie Zeeland + Rijk + Zeeuwse gemeenten (via Impuls Zeeland)",
    bedragTekst: "Subsidie voor sociale-innovatieprojecten; plafond \u20ac300.000 per openstelling",
    bedragMax: null,
    plafond: "\u20ac300.000 per openstelling",
    samenvatting: "Ondersteunt sociale innovatie (nieuwe organisatievormen, methoden, producten/diensten) met een meetbare invloed op het arbeidsmarktvraagstuk in Zeeland \u2013 relevant voor onderzoek naar ondernemerschap en economische structuur.",
    voorwaarden: [
      "Een groep van drie of meer partijen vraagt aan; de vraag staat centraal vanuit de werkgevers",
      "Het product of de dienst moet een meetbare invloed hebben op het arbeidsmarktvraagstuk",
      "Aanvraag digitaal via eHerkenning met projectplan (format beschikbaar)",
      "Tenderprocedure met subsidieplafond"
    ],
    wie: "Werkgevers en hun partners (onderwijs, overheid, maatschappelijke organisaties) in Zeeland",
    themas: ["Arbeidsmarkt", "Sociale innovatie", "Human capital"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2025-10-24", "t/m": "2026-03-20", label: "24 oktober 2025 \u2013 20 maart 2026 (afgelopen)" }
    ],
    url: "https://www.zeeland.nl/subsidie-aanvragen/overzicht-subsidieregelingen/zis-human-capital-agenda",
    tags: ["arbeidsmarkt", "sociale innovatie", "human capital", "werkgevers"]
  },
  {
    id: "eip-zeeland",
    naam: "EIP Zeeland 2025 \u2013 Samenwerking voor innovatie (GLB/NSP)",
    niveau: "provinciaal",
    categories: ["innovatie", "onderzoek", "economie"],
    type: "Subsidie",
    uitvoerder: "Provincie Zeeland (Verordening Europese Landbouwsubsidies 2023-2027)",
    bedragTekst: "Samenwerkingsprojecten in het kader van de Europese Innovatiepartnerschappen (EIP); plafond \u20ac3.000.000",
    bedragMax: null,
    plafond: "\u20ac3.000.000 (43% ELFPO-middelen, 57% provinciale cofinanciering)",
    samenvatting: "Subsidie voor operationele groepen en samenwerkingsprojecten die innovatie in de landbouw- en voedselketen in Zeeland onderzoeken en toepassen \u2013 o.a. relevant voor onderzoek naar de economie van het landelijk gebied.",
    voorwaarden: [
      "Samenwerkingsverband in het kader van EIP (Europese Innovatiepartnerschappen) binnen het Gemeenschappelijk Landbouwbeleid (GLB/NSP)",
      "Openstelling 2025: 17 juni 2025 (09.00) t/m 15 oktober 2025 (17.00)",
      "Voorschotten en deelbetalingen tezamen maximaal 90% van de verleende subsidie",
      "Publicatie in het Provinciaal Blad (openstellingsbesluit 13 mei 2025)"
    ],
    wie: "Landbouwers, ketenpartijen, kennisinstellingen en innovatiegroepen in Zeeland",
    themas: ["Landbouwinnovatie", "Voedselketen", "EIP", "GLB/NSP"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2025-06-17", "t/m": "2025-10-15", label: "17 juni \u2013 15 oktober 2025 (afgelopen)" }
    ],
    url: "https://lokaleregelgeving.overheid.nl/CVDR739318",
    tags: ["landbouw", "EIP", "GLB", "voedsel", "innovatiepartnerschap"]
  },
  {
    id: "mit-zuid",
    naam: "MIT Zuid \u2013 MKB-innovatiestimulering Topsectoren Zuid-Nederland (Haalbaarheid + R&D-samenwerking)",
    niveau: "regionaal",
    categories: ["onderzoek", "innovatie", "ondernemerschap"],
    type: "Subsidie",
    uitvoerder: "Provincies Zeeland, Noord-Brabant en Limburg (OPZuid); loket: Impuls Zeeland",
    bedragTekst: "Haalbaarheid: 40% tot \u20ac20.000 \u00b7 R&D-samenwerking: 35%, \u20ac50.000\u2013\u20ac200.000 (klein) of \u20ac200.000\u2013\u20ac350.000 (groot) per project",
    bedragMax: 350000,
    plafond: "Per deelnemer aan R&D-project: \u20ac25.000\u2013\u20ac175.000",
    samenvatting: "De regionale MIT-variant voor Zuid-Nederland stimuleert mkb bij haalbaarheidsstudies en R&D-samenwerkingsprojecten voor vernieuwende producten, processen of diensten. In 2025 werden 21 Zeeuwse haalbaarheidsprojecten en 4 R&D-projecten toegekend (ruim \u20ac1,2 mln).",
    voorwaarden: [
      "Mkb gevestigd in Zuid-Nederland (Zeeland, Noord-Brabant of Limburg)",
      "Haalbaarheid: onderzoek naar de technische en economische vernieuwingskracht van het project (besluitvorming ondersteunen); 40% tot \u20ac20.000",
      "R&D-samenwerking: consortium van mkb\u2019ers; 35% subsidie; klein project \u20ac50.000\u2013\u20ac200.000 (subsidabele kosten max. \u20ac571.428), groot project \u20ac200.000\u2013\u20ac350.000; per deelnemer max. \u20ac100.000 / \u20ac175.000",
      "Project draagt bij aan \u00e9\u00e9n of meer missies of sleuteltechnologie\u00ebn uit de Kennis- en Innovatieagenda\u2019s (KIA)",
      "R&D-samenwerking 2026: openstelling 9 juni 2026 (09.00) t/m 15 september 2026 (17.00) \u2013 afgelopen; nieuwe ronde verwacht in 2027",
      "Subsidiespelregels (cumulatie met andere subsidies) van toepassing"
    ],
    wie: "Mkb-ondernemers in Zeeland (eventueel in consortium met andere mkb\u2019ers)",
    themas: ["Haalbaarheidsstudie", "R&D-samenwerking", "KIA-missies", "Sleuteltechnologie\u00ebn"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-06-09", "t/m": "2026-09-15", label: "R&D-samenwerking: 9 juni \u2013 15 september 2026 (afgelopen)" }
    ],
    url: "https://www.impulszeeland.nl/mitzuid",
    tags: ["MIT", "mkb", "haalbaarheid", "R&D", "Zuid-Nederland", "Impuls Zeeland"]
  },
  {
    id: "opzuid",
    naam: "OPZuid \u2013 EFRO-programma Zuid-Nederland 2021-2027",
    niveau: "regionaal",
    categories: ["innovatie", "economie", "onderzoek"],
    type: "Subsidie (EU-geld: EFRO)",
    uitvoerder: "Beheerautoriteit Noord-Brabant + provincies Zeeland & Limburg + Rijk; programmamanagement: Stimulus",
    bedragTekst: "35% tot 50% van de subsidiabele kosten; maximaal \u20ac1,5 mln EU-geld per project",
    bedragMax: 1500000,
    plafond: "Totaal 2021-2027: \u20ac105 mln EFRO voor Zuid-Nederland; Zeeland-aandeel 2025: \u20ac420.000; 2026 (dual-use): \u20ac12,5 mln voor Zuid-Nederland",
    samenvatting: "EFRO-programma dat de regionale economie van Zuid-Nederland (incl. Zeeland) versterkt via innovatie in TRL 6-8: demonstratie, vermarkting en opschaling van kansrijke technologie\u00ebn. 2026 is de laatste openstellingsronde met dual-use/defensie als centraal thema.",
    voorwaarden: [
      "Project in TRL 6 t/m 8 (demonstreren/vermarkten van technologische innovatie)",
      "Maximaal \u20ac1,5 mln Europees geld per project; subsidiepercentage 35% (2025) tot 50% (2026)",
      "Minimaal twee partners voeren het project uit; aantoonbaar ten goede komen aan het mkb",
      "Bijdrage aan RIS3-prioriteiten Zuid-Nederland 2021-2027 (slimmer/groener Europa)",
      "Tenderprocedure via de Stimulus-webportal; eHerkenning (EH2+) of eIDAS verplicht",
      "2026: \u00e9\u00e9n openstelling in het voorjaar gericht op dual-use/defensie (\u20ac12,5 mln); daarna geen nieuwe OPZuid-rondes meer"
    ],
    wie: "Bedrijven (mkb), kennisinstellingen, overheden en maatschappelijke organisaties in Zeeland/Noord-Brabant/Limburg",
    themas: ["EFRO", "TRL 6-8", "Demonstratie", "Opschaling", "Dual-use (2026)", "RIS3"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2026-06-30", label: "Voorjaar 2026 \u2013 dual-use/defensie (afgelopen; laatste ronde 2021-2027)" }
    ],
    url: "https://www.zeeland.nl/subsidie-aanvragen/overzicht-europese-subsidieregelingen/opzuid",
    tags: ["EFRO", "OPZuid", "Zuid-Nederland", "dual-use", "TRL", "Stimulus"]
  },
  {
    id: "impuls-vouchers",
    naam: "Impuls Zeeland \u2013 Vouchers & adviestrajecten (ZFM en kennisvouchers)",
    niveau: "regionaal",
    categories: ["ondernemerschap", "innovatie", "onderzoek"],
    type: "Voucher / adviestraject",
    uitvoerder: "Impuls Zeeland (regionale ontwikkelingsmaatschappij)",
    bedragTekst: "Zeeland Financial Matching (ZFM) voucher \u20ac1.000\u2013\u20ac7.500 (50% dekking; 75% bij opleiding)",
    bedragMax: 7500,
    plafond: "Afhankelijk van de voucherregeling (jaarlijks budget)",
    samenvatting: "Laagdrempelige vouchers waarmee Zeeuwse ondernemers, start-ups en scale-ups (mee)onderzoek en advies inkopen bij kennisinstellingen of experts \u2013 bijv. voor innovatie, procesverbetering, circulair/biobased en digitalisering van mkb in de maakindustrie.",
    voorwaarden: [
      "Zeeuws bedrijf, student, start-up of scale-up (ZFM: innovatief mkb en groeiplannen)",
      "Voucher dekt 50% van de kosten (75% als het om een opleiding gaat), waarde \u20ac1.000\u2013\u20ac7.500",
      "Voor digitalisering van mkb in de maakindustrie: kosteloos expert inschakelen",
      "Aanvraag via Impuls Zeeland; budget is jaargebonden (first come / plafond)"
    ],
    wie: "Zeeuwse start-ups, scale-ups, studenten en innovatief mkb",
    themas: ["Voucher", "kennisinstellingen", "digitalisering", "circulair", "biobased"],
    doorlopend: true,
    openstellingen: [],
    url: "https://www.impulszeeland.nl/investeren-in-zeeland#vouchers",
    tags: ["voucher", "ZFM", "kennisvoucher", "digitalisering", "Impuls Zeeland"]
  },
  {
    id: "zpf",
    naam: "Zeeuws Participatiefonds (ZPF) \u2013 investeringen in Zeeuwse bedrijven",
    niveau: "regionaal",
    categories: ["ondernemerschap", "economie"],
    type: "Investering (lening / converteerbaar / participatie)",
    uitvoerder: "Zeeuws Participatiefonds (fondsmanagement in opdracht van provincie/gemeenten)",
    bedragTekst: "Leningen, converteerbare leningen en aandelenparticipaties; 2025: 10 investeringen, \u20ac2.580.905 totaal",
    bedragMax: null,
    plafond: "Per investering afhankelijk van fase en businesscase",
    samenvatting: "Fonds dat investeert in innovatieve en groeiende Zeeuwse mkb-bedrijven in vroege fase. Geen subsidie, maar risico-dragend kapitaal \u2013 complementair aan subsidies voor onderzoek en innovatie.",
    voorwaarden: [
      "Zeeuws bedrijf met innovatief/groeiend verdienmodel in vroege fase of scale-up",
      "Investering in de vorm van (converteerbare) lening of aandelenparticipatie",
      "Beoordeling op businesscase, team en marktpotentieel door het fondsmanagement",
      "Cofinanciering met andere financiers is gebruikelijk"
    ],
    wie: "Innovatieve Zeeuwse mkb-bedrijven, start-ups en scale-ups",
    themas: ["Vroege fase", "Participatie", "Lening", "Groei"],
    doorlopend: true,
    openstellingen: [],
    url: "https://www.impulszeeland.nl/",
    tags: ["ZPF", "participatiefonds", "lening", "participatie", "vroege fase"]
  },
  {
    id: "wbso",
    naam: "WBSO \u2013 Wet Bevordering Speur- en Ontwikkelingswerk",
    niveau: "landelijk",
    categories: ["onderzoek", "innovatie", "ondernemerschap"],
    type: "Fiscale regeling",
    uitvoerder: "RVO (Rijksdienst voor Ondernemend Nederland)",
    bedragTekst: "2026: 36% fiscaal voordeel over de eerste \u20ac380.000 aan S&O-loonkosten (starters/zzp: 50% over de eerste schijf)",
    bedragMax: null,
    plafond: "Geen vast plafond; voordeel loopt op met S&O-loonkosten (tweede schijf lager percentage)",
    samenvatting: "De belangrijkste fiscale regeling voor R&D in Nederland: bedrijven die speur- en ontwikkelingswerk (S&O: technisch-nieuw product, proces, programmatuur of technisch-wetenschappelijk onderzoek) uitvoeren, verlagen hun loonkosten via een S&O-verklaring. Ongeveer 20.000 ondernemers gebruiken de WBSO per jaar.",
    voorwaarden: [
      "Het werk moet technisch nieuw zijn (eigen R&D); bestaande software inkopen of koppelen telt niet",
      "Aanvraag v\u00f3\u00f3r de start van het project indienen bij RVO",
      "Vanaf dag 1 uren en kosten per project bijhouden (S&O-administratie)",
      "Technisch probleem moet concreet kunnen worden omschreven",
      "Voor aanvraag 2027 met personeel: BSN\u2019s van werknemers die in 2025 S&O deden nodig voor het gemiddelde S&O-uurloon",
      "ZZP\u2019ers: per kwartaal aanvragen met eigen forfaitair uurloon"
    ],
    wie: "Alle Nederlandse bedrijven (incl. starters en zzp\u2019ers) met eigen R&D",
    themas: ["Fiscaal", "R&D", "S&O", "loonkosten", "innovatiebox-koppeling"],
    doorlopend: true,
    openstellingen: [],
    url: "https://www.rvo.nl/subsidies-financiering/wbso",
    tags: ["WBSO", "fiscaal", "R&D", "S&O", "loonvoordeel", "zzp"]
  },
  {
    id: "innovatiebox",
    naam: "Innovatiebox \u2013 verlaagd tarief vennootschapsbelasting op innovatie",
    niveau: "landelijk",
    categories: ["ondernemerschap", "innovatie", "economie"],
    type: "Fiscale regeling",
    uitvoerder: "Belastingdienst (in synergie met WBSO/RVO)",
    bedragTekst: "9% effektief Vpb-tarief over winst uit zelfontwikkelde immateri\u00eble activa (2026)",
    bedragMax: null,
    plafond: "Geen plafond; voordeel schaalt met winst uit innovatieve immateri\u00eble activa",
    samenvatting: "Aanvullend op de WBSO: winst die voortkomt uit zelfontwikkelde, immateri\u00eble activa (vaak na een WBSO-traject) wordt belast tegen 9% in plaats van het algemene tarief. Relevant voor bedrijven die onderzoek commercialiseren.",
    voorwaarden: [
      "Zelf ontwikkeld immateri\u00ebl activum (meestal aantoonbaar via WBSO/S&O-verklaring of octrooi)",
      "Toegangspoort: in de meeste gevallen een WBSO-verklaring of octrooi vereist",
      "Verzoek opnemen in de aangifte vennootschapsbelasting",
      "Verlieslatende situatie: voordeel wordt dan via de verliesverrekening meegenomen"
    ],
    wie: "Ondernemingen met winst uit eigen innovaties",
    themas: ["Fiscaal", "Vpb", "9%", "octrooi", "WBSO-koppeling"],
    doorlopend: true,
    openstellingen: [],
    url: "https://www.rvo.nl/subsidies-financiering/innovatiebox",
    tags: ["innovatiebox", "fiscaal", "vennootschapsbelasting", "octrooi"]
  },
  {
    id: "mit-rvo",
    naam: "MIT \u2013 MKB-innovatiestimulering Regio en Topsectoren (nationaal, RVO)",
    niveau: "landelijk",
    categories: ["onderzoek", "innovatie", "ondernemerschap"],
    type: "Subsidie",
    uitvoerder: "RVO (ministerie van EZK)",
    bedragTekst: "Haalbaarheid: 40% tot \u20ac20.000 \u00b7 R&D-samenwerking: 35%, \u20ac50.000\u2013\u20ac350.000 per project",
    bedragMax: 350000,
    plafond: "Kleine R&D-projecten: \u20ac50.000\u2013\u20ac200.000 (per deelnemer \u20ac25.000\u2013\u20ac100.000); grote: \u20ac200.000\u2013\u20ac350.000 (per deelnemer \u20ac25.000\u2013\u20ac175.000)",
    samenvatting: "Landelijke MIT-regeling voor mkb-innovatie. Let op: voor Zeeland (Zuid-Nederland) geldt de regionale variant MIT Zuid (zie Regionaal) met dezelfde instrumentering; nationale openstellingen richten zich op andere regio\u2019s/topsectoren.",
    voorwaarden: [
      "Mkb-ondernemer; haalbaarheidsstudie of R&D-samenwerkingsproject met andere mkb\u2019ers",
      "Haalbaarheid: 40% van de kosten tot \u20ac20.000",
      "R&D-samenwerking: 35%; bij kleine projecten (subsidabele kosten \u2264 \u20ac571.428) \u20ac50.000\u2013\u20ac200.000, bij grote \u20ac200.000\u2013\u20ac350.000 per innovatieproject",
      "Subsidiespelregels (cumulatieregels) van toepassing; publicatie in de Staatscourant",
      "Openstellingen verschillen per regio en topsector \u2013 check RVO voor de actuele ronde"
    ],
    wie: "Mkb-ondernemers in Nederland",
    themas: ["MIT", "haalbaarheid", "R&D", "topsectoren"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2026-12-31", label: "Door het jaar heen per regio/topsector (zie RVO-openstellingenkalender)" }
    ],
    url: "https://www.rvo.nl/subsidies-financiering/mit",
    tags: ["MIT", "RVO", "mkb", "haalbaarheid", "R&D-samenwerking"]
  },
  {
    id: "innovatiekrediet",
    naam: "Innovatiekrediet (RVO) \u2013 onderzoek naar commerci\u00eble kansen",
    niveau: "landelijk",
    categories: ["ondernemerschap", "onderzoek", "innovatie"],
    type: "Krediet (terug te betalen)",
    uitvoerder: "RVO",
    bedragTekst: "Krediet voor kansrijke innovatie (indicatief \u20ac150.000 tot \u20ac1,5 mln; exacte bedrag per project)",
    bedragMax: 1500000,
    plafond: "Aanvraagperiode 2026: 1 januari \u2013 31 december 2026",
    samenvatting: "Krediet voor startende en innovatieve ondernemers om te onderzoeken of hun idee commercieel levensvatbaar is (haalbaarheidsonderzoek met marktfocus). Geen subsidie: het bedrag wordt terugbetaald bij succes.",
    voorwaarden: [
      "Startende of innovatieve ondernemer met een kansrijk, nieuw idee",
      "Het krediet richt zich op onderzoek naar de commerci\u00eble mogelijkheden van het concept",
      "Terugbetalingsverplichting bij commercieel succes (risicodragend)",
      "Aanvragen in 2026: 1 januari t/m 31 december 2026 via RVO"
    ],
    wie: "Startende en innovatieve ondernemers (mkb) in Nederland, incl. Zeeland",
    themas: ["Krediet", "haalbaarheid", "commercialisering", "vroege fase"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2026-12-31", label: "1 januari \u2013 31 december 2026" }
    ],
    url: "https://www.rvo.nl/subsidies-financiering/innovatiekrediet",
    tags: ["innovatiekrediet", "krediet", "commercieel", "haalbaarheid"]
  },
  {
    id: "dei",
    naam: "DEI+ \u2013 Demonstratie Energie- en Klimaatinnovatie",
    niveau: "landelijk",
    categories: ["innovatie", "onderzoek", "economie"],
    type: "Subsidie",
    uitvoerder: "RVO (ministerie van EZK)",
    bedragTekst: "Pilot: 25% \u00b7 Demonstratie: 30\u201350% van de meerkosten (mkb vaak hoger, tot 80%) \u00b7 max. \u20ac30 mln per demonstratieproject",
    bedragMax: 30000000,
    plafond: "2025: \u20ac370 mln totaal (gesloten); 2026: thema\u2019s volgen; thema \u2018vergassing van reststromen\u2019 open 16 jun \u2013 17 dec 2026",
    samenvatting: "Subsidie voor pilot- en demonstratieprojecten die een energie- of klimaatinnovatie in de praktijk testen en die CO\u2082-uitstoot verminderen. Ook relevant voor onderzoek naar de circulaire en energie-economie van Zeeland (North Sea Port, offshore wind).",
    voorwaarden: [
      "U bent nog niet gestart met het project waarvoor u subsidie aanvraagt",
      "De innovatie heeft kans van slagen op de Nederlandse markt en vermindert CO\u2082-uitstoot (direct of indirect, onderbouwd)",
      "Demonstratieproject: een \u2018eerste toepasser\u2019 in de markt investeert en wordt eigenaar van de techniek",
      "Alleen kosten voor onderzoek, ontwikkeling en demonstratie zijn subsidiabel",
      "2025: alle thema\u2019s tegelijk open vanaf 28 januari 2025 (budget \u20ac370 mln) \u2013 gesloten; 2026: thema\u2019s naar verwachting gelijk aan 2025",
      "Vrijblijvende projecttoets bij RVO vergroot de slaagkans"
    ],
    wie: "Mkb en grootbedrijf in Nederland (incl. Zeeland) met een te demonstreren innovatie",
    themas: ["Energie", "Klimaat", "Circulair", "CCUS", "Waterstof", "Pilot", "Demonstratie"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-06-16", "t/m": "2026-12-17", label: "16 juni \u2013 17 december 2026 (thema: vergassing van reststromen; overige 2026-thema\u2019s volgen)" }
    ],
    url: "https://www.rvo.nl/subsidies-financiering/dei",
    tags: ["DEI+", "energie", "klimaat", "CO2", "demonstratie", "pilot", "circulair"]
  },
  {
    id: "ngf",
    naam: "Nationaal Groeifonds (NGF)",
    niveau: "landelijk",
    categories: ["onderzoek", "innovatie", "economie"],
    type: "Subsidie (tender)",
    uitvoerder: "RVO / adviescommissie Nationaal Groeifonds (ministeries EZK, I&W, LVVN)",
    bedragTekst: "\u20ac20 mld beschikbaar gesteld voor 2021-2025; per project miljoenen (bv. \u20ac102 mln voor Biobased Circular fase 1)",
    bedragMax: null,
    plafond: "Per tenderronde wisselend; aanvragen worden gerangschikt door een onafhankelijke commissie",
    samenvatting: "Het NGF investeert in projecten die het duurzaam verdienvermogen van Nederland op lange termijn (20-30 jaar) versterken, op de terreinen onderzoek, ontwikkeling & innovatie (O&O&I) en kennisontwikkeling. Zeeland is betrokken bij o.a. New Waves (pps rond voedsel, energie en water).",
    voorwaarden: [
      "Project draagt aantoonbaar bij aan het duurzaam verdienvermogen van Nederland",
      "Valt binnen terrein O&O&I of kennisontwikkeling",
      "Aanvraag binnen de aanvraagperiode; verdeling via tender (ranking door adviescommissie)",
      "Nieuwe openstelling 2026: gericht op 6 programma\u2019s van het strategisch industriebeleid (o.a. innovatieve chemie); publicatie Call verwacht december 2026"
    ],
    wie: "Consortia van bedrijven, kennisinstellingen, overheden en maatschappelijke organisaties",
    themas: ["Groeifonds", "duurzaam verdienvermogen", "O&O&I", "kennisontwikkeling", "New Waves Zeeland"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-12-01", "t/m": "2027-06-30", label: "Nieuwe ronde verwacht (publicatie Call eind 2026; exacte data via RVO)" }
    ],
    url: "https://www.rvo.nl/subsidies-financiering/subsidieregeling-nationaal-groeifonds",
    tags: ["NGF", "groeifonds", "tender", "verdienvermogen", "O&O&I"]
  },
  {
    id: "regio-deal-zeeland",
    naam: "Regio Deal Zeeland 2025 (Rijk + regio)",
    niveau: "landelijk",
    categories: ["economie", "ondernemerschap", "onderzoek"],
    type: "Programmafinanciering (Rijk)",
    uitvoerder: "Rijk (BZK) + Zeeuwse gemeenten (trekker: gemeente Sluis) + Provincie Zeeland",
    bedragTekst: "\u20ac13 mln rijksbijdrage (ondertekend 19 november 2025); projecten starten vanaf 2026",
    bedragMax: null,
    plafond: "\u20ac13 mln voor de Regio Deal Zeeland; vorige Regio Deal North Sea Port District: \u20ac30 mln",
    samenvatting: "Regio Deal waarmee Rijk en regio samenwerken aan brede welvaart, leefbaarheid en economische kracht van Zeeland: voorzieningen, vestigingsklimaat voor bedrijven, kansen voor jongeren en arbeidsmarkt. lessons uit eerder onderzoek (PBL-quickscan arbeidsmarkt Zeeland) liggen eraan ten grondslag.",
    voorwaarden: [
      "Project valt binnen de afgesproken programmalijnen van de ondertekende deal",
      "Samenwerking tussen Zeeuwse overheden, onderwijs (Hogeschool Zeeland, Scalda, Delta Climate Center), zorg, sport en bedrijfsleven (DOW, Cargill, North Sea Port, Smart Delta Resources e.a.)",
      "Aanvraag en verantwoording via gemeente Sluis / Overleg Zeeuwse Overheden"
    ],
    wie: "Zeeuwse gemeenten en hun regionale partners (onderwijs, zorg, bedrijfsleven)",
    themas: ["Regio Deal", "vestigingsklimaat", "arbeidsmarkt", "leefbaarheid", "North Sea Port"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2027-12-31", label: "Uitvoering 2026-2027 (deal ondertekend 19 nov 2025)" }
    ],
    url: "https://www.zeeland.nl/actueel/zeeland-ontvangt-13-miljoen-voor-nieuwe-regio-deal",
    tags: ["Regio Deal", "Rijk", "Zeeland", "economie", "vestigingsklimaat"]
  },
  {
    id: "nwo-sia",
    naam: "NWO & Regieorgaan SIA \u2013 Calls voor wetenschappelijk en praktijkgericht onderzoek",
    niveau: "landelijk",
    categories: ["onderzoek", "economie", "ondernemerschap"],
    type: "Subsidie (call-gebaseerd)",
    uitvoerder: "NWO (domeinen SGW, TTW, etc.) en Regieorgaan SIA (hbo)",
    bedragTekst: "SGW Open Competitie XS t/m \u20ac50.000; Open Competitie L 2025: plafond \u20ac40,9 mln; Perspectief 2025-2026: grootschalige consortia",
    bedragMax: null,
    plafond: "Per call verschillend (XS \u20ac50.000; M/L-programma\u2019s miljoenen)",
    samenvatting: "NWO financiert excellent onderzoek in Nederland. Voor onderzoek naar economie, ondernemerschap en innovatie zijn vooral SGW (sociale & geesteswetenschappen, o.a. economische wetenschappen) en TTW (toegepaste wetenschappen, Perspectief-programma met bedrijfsdeelname) relevant; Regieorgaan SIA financiert praktijkgericht onderzoek van hogescholen (RAAK), o.a. met Hogeschool Zeeland.",
    voorwaarden: [
      "SGW OC L 2025: volledige aanvraag deadline 5 februari 2026 (14.00) \u2013 afgelopen",
      "Perspectief 2025-2026 (TTW): consortium van min. 3 kennisinstellingen + 4 gebruikers (bedrijven/maatschappelijk); vooraanmelding 25 nov 2025, aanvraag 19 mei 2026",
      "RAAK-publiek (SIA, november 2025): praktijkgericht onderzoek met consortiumpartners in actieve rol",
      "Aanvraag via ISAAC (account minstens 1 dag voor deadline aanmaken); NWO Subsidieregeling van toepassing",
      "Data-managementplan verplicht na toekenning"
    ],
    wie: "Onderzoekers bij universiteiten, TO2-instituten en hogescholen, incl. Zeeuwse kennisinstellingen",
    themas: ["NWO", "SGW", "economie", "Perspectief", "RAAK", "hbo", "ISAAC"],
    doorlopend: true,
    openstellingen: [
      { vanaf: "2026-01-05", "t/m": "2026-02-05", label: "SGW Open Competitie L 2025: deadline 5 februari 2026 (afgelopen)" },
      { vanaf: "2026-01-01", "t/m": "2026-12-31", label: "Doorlopend nieuwe calls in 2026-2027 via nwo.nl/calls" }
    ],
    url: "https://www.nwo.nl/calls",
    tags: ["NWO", "onderzoek", "SGW", "economie", "RAAK", "hogeschool", "ISAAC"]
  },
  {
    id: "horizon-europe",
    naam: "Horizon Europe 2021-2027 (incl. European Innovation Council)",
    niveau: "europees",
    categories: ["onderzoek", "innovatie", "ondernemerschap", "economie"],
    type: "Subsidie (EU)",
    uitvoerder: "Europese Commissie; in Nederland: NCP = RVO Team IRIS",
    bedragTekst: "Cofinanciering 70\u2013100% per call \u00b7 EIC Accelerator: grant tot \u20ac2,5 mln + equity tot \u20ac15 mln",
    bedragMax: null,
    plafond: "Totaalprogramma \u20ac93,5 mld (2021-2027); per call/project wisselend (grote consortia tot tientallen miljoenen)",
    samenvatting: "Het EU-kaderprogramma voor onderzoek en innovatie. Drie pijlers: Excellent Science, Global Challenges & Europese industriële concurrentievermogen, en Innovative Europe (EIC voor deeptech scale-ups). Zeeland kan meedoen via internationale consortia; Team IRIS (RVO) adviseert gratis.",
    voorwaarden: [
      "Deelname door universiteiten, kennisinstellingen, bedrijven (mkb en groot), overheden en maatschappelijke organisaties",
      "Meestal consortium van min. 3 entiteiten uit 3 verschillende EU-lidstaten/geassocieerde landen",
      "Aanvraag per call via het Funding & Tenders Portal; deadlines verschillen per call",
      "EIC Accelerator (Pijler III): deeptech mkb/scale-ups; fase 1 open vanaf 3 december 2025 met doorlopende indiening (cut-offs); grant tot \u20ac2,5 mln en/of equity tot \u20ac15 mln",
      "Gratis advies via NCP Nederland: Team IRIS, teamiris@rvo.nl"
    ],
    wie: "Onderzoeksorganisaties en bedrijven (ook mkb) in internationaal consortium",
    themas: ["Horizon Europe", "EIC", "deeptech", "consortium", "EU", "Pillar II/III"],
    doorlopend: true,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2027-12-31", label: "Calls het hele jaar door via Funding & Tenders Portal (per thema eigen deadline)" }
    ],
    url: "https://www.rvo.nl/subsidies-financiering/horizon-europe",
    tags: ["Horizon Europe", "EU", "EIC Accelerator", "consortium", "RVO Team IRIS"]
  },
  {
    id: "eurostars",
    naam: "Eurostars (EUREKA + Europese Commissie) \u2013 internationale marktgerichte R&D",
    niveau: "europees",
    categories: ["onderzoek", "innovatie", "ondernemerschap"],
    type: "Subsidie (EU/internationaal)",
    uitvoerder: "Eureka-secretariaat (internationaal) + RVO (nationaal, NL-budget \u20ac22 mln/jaar via EZK)",
    bedragTekst: "Max. \u20ac500.000 subsidie voor het Nederlandse projectdeel \u00b7 percentages: mkb 50%, kennisinstelling 50%, grootbedrijf 40%",
    bedragMax: 500000,
    plafond: "NL-budget \u20ac22 mln per jaar, verdeeld over 2 calls",
    samenvatting: "Programma voor R&D-intensieve mkb\u2019ers die met partners uit andere Eurostars-landen marktgerichte technologie\u00ebn ontwikkelen. Zeer geschikt voor Zeeuwse mkb\u2019ers met internationale ambitie.",
    voorwaarden: [
      "Hoofdaanvrager is een R&D-intensief mkb; consortium van min. 2 onafhankelijke entiteiten uit min. 2 Eurostars-landen",
      "Mkb-aandeel in het projectbudget minimaal 50%; geen deelnemer/land meer dan 70% van het budget",
      "Marktintroductie binnen 2 jaar na afloop van het project; exclusief civiele toepassingen; looptijd max. 3 jaar",
      "Minimaal 1 Nederlands bedrijf in het consortium voor Nederlandse subsidie",
      "Eerst internationale aanvraag via Eureka (centrale jury); na goedkeuring nationale aanvraag bij RVO",
      "Call 11: 9 juli \u2013 10 september 2026 (afgelopen) \u00b7 Call 12: 17 december 2026 \u2013 4 maart 2027 (14.00)"
    ],
    wie: "Innovatieve mkb\u2019ers (met internationale partners)",
    themas: ["Eurostars", "EUREKA", "internationaal", "R&D", "mkb"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-12-17", "t/m": "2027-03-04", label: "Call 12 (internationaal): 17 december 2026 \u2013 4 maart 2027 (14.00)" }
    ],
    url: "https://www.rvo.nl/subsidies-financiering/eurostars",
    tags: ["Eurostars", "EUREKA", "call 12", "internationale R&D", "mkb"]
  },
  {
    id: "interreg-nsr",
    naam: "Interreg North Sea Region 2021-2027",
    niveau: "europees",
    categories: ["onderzoek", "innovatie", "economie"],
    type: "Subsidie (EU/EFRO)",
    uitvoerder: "Programma North Sea Region; in Nederland: RVO + Provincie Zeeland (Europa-loket)",
    bedragTekst: "Maximaal 60% cofinanciering van de subsidiabele projectkosten",
    bedragMax: null,
    plafond: "EFRO-budget 2021-2027: \u20ac171 mln voor het hele programmagebied",
    samenvatting: "Transnationaal programma voor de Noordzeeregio (incl. Zeeland) rond innovatie, klimaatbestendigheid en een groene/digitale/duurzame economie. Projecten met partners uit meerdere Noordzee-landen.",
    voorwaarden: [
      "Consortium van 3 tot 9 partners uit minstens 3 landen in het North Sea-programmagebied (Zeeland inbegrepen)",
      "Maximaal 60% EU-cofinanciering (Noorse deelnemers 50%); resterende cofinanciering via Rijk, provincie of eigen middelen",
      "Indiening via het Online Monitoring System (OMS) van Interreg North Sea",
      "Calls periodiek (bv. call met deadline 11 juli 2025; Call 6 voor capitalisatie van eerdere resultaten)",
      "Bijdrage aan programma-prioriteiten: innovatie, groene transitie, klimaatadaptatie, duurzame economie",
      "Bij subsidieaanvraag kan Provincie Zeeland een Bibob-onderzoek instellen"
    ],
    wie: "Overheden, kennisinstellingen, bedrijven en maatschappelijke organisaties in de Noordzeeregio",
    themas: ["Interreg", "Noordzee", "60%", "transnationaal", "klimaat", "innovatie"],
    doorlopend: true,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2027-12-31", label: "Periodieke calls via interregnorthsea.eu (OMS)" }
    ],
    url: "https://www.zeeland.nl/subsidie-aanvragen/overzicht-europese-subsidieregelingen/interreg-north-sea",
    tags: ["Interreg", "North Sea", "EFRO", "60%", "Noordzeeregio"]
  },
  {
    id: "interreg-nwe",
    naam: "Interreg North-West Europe (NWE) 2021-2027",
    niveau: "europees",
    categories: ["innovatie", "economie", "onderzoek"],
    type: "Subsidie (EU/EFRO)",
    uitvoerder: "Programma NWE; in Nederland: RVO",
    bedragTekst: "Maximaal 60% cofinanciering van de subsidiabele projectkosten",
    bedragMax: null,
    plafond: "EFRO-budget 2021-2027: \u20ac310 mln voor het NWE-gebied",
    samenvatting: "Transnationaal programma voor Noordwest-Europa (Nederland incl. Zeeland) gericht op een groene, slimme en rechtvaardige transitie: innovatie, energietransitie, klimaatbestendigheid en effici\u00ebnt gebruik van grondstoffen.",
    voorwaarden: [
      "Consortium van partners uit minstens 3 NWE-landen (Nederland, Belgi\u00eb, Duitsland, Frankrijk, Ierland, Luxemburg, Zwitserland)",
      "Maximaal 60% EU-cofinanciering; cofinanciering rest via nationale/regionale middelen",
      "Project moet inspelen op de NWE-prioriteiten (groene/slimme/rechtvaardige transitie)",
      "Openstelling 2025: 1 mei \u2013 11 juli 2025 (afgelopen); nieuwe calls periodiek"
    ],
    wie: "Overheden, onderwijs- en kennisinstellingen, maatschappelijke organisaties en ondernemers",
    themas: ["Interreg NWE", "EFRO", "60%", "groene transitie", "innovatie"],
    doorlopend: true,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2027-12-31", label: "Periodieke calls via Interreg NWE" }
    ],
    url: "https://www.zeeland.nl/subsidie-aanvragen/interreg-noord-west-europa",
    tags: ["Interreg", "NWE", "EFRO", "transitie", "60%"]
  },
  {
    id: "interreg-vln",
    naam: "Interreg Vlaanderen-Nederland 2021-2027",
    niveau: "europees",
    categories: ["innovatie", "onderzoek", "ondernemerschap", "economie"],
    type: "Subsidie (EU/EFRO)",
    uitvoerder: "Interreg Vlaanderen-Nederland; Nederlandse partners: provincies Zeeland, Noord-Brabant, Limburg en ministerie van EZK",
    bedragTekst: "Maximaal 50% cofinanciering (soms 50-60%) van de subsidiabele kosten",
    bedragMax: null,
    plafond: "EFRO-budget 2021-2027: \u20ac205 mln voor het grensgebied",
    samenvatting: "Grensoverschrijdend programma voor Vlaanderen en Zuid-Nederland (Zeeland, Noord-Brabant, Limburg). Prioriteit \u2018een slimmer Europa\u2019: innovatie en vaardigheden voor slimme transformatie, met focus op mkb. Gemiddelde projectomvang ca. \u20ac3 mln.",
    voorwaarden: [
      "Verplichte samenwerking met een partner over de grens (Vlaanderen \u2013 Zuid-Nederland)",
      "Programmagebied: Vlaanderen + Zeeland, Noord-Brabant, Limburg (Zuid-Holland soms mogelijk)",
      "Maximaal 50% EU-subsidie; niet combineerbaar met andere EU-programma\u2019s",
      "Meeste calls t/m 2027 inmiddels gesloten; \u00e9\u00e9n oproep (resultaatoptimalisatie voor goedgekeurde projecten) deadline 4 februari 2027",
      "Nieuwe programmaperiode 2028-2034 in voorbereiding"
    ],
    wie: "Mkb, kennisinstellingen, overheden en maatschappelijke organisaties in de grensregio",
    themas: ["Interreg VL-NL", "grensoverschrijdend", "Vlaanderen", "50%", "mkb"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2027-02-04", label: "Oproep resultaatoptimalisatie: t/m 4 februari 2027; meeste andere calls gesloten" }
    ],
    url: "https://interregvlaned.eu/",
    tags: ["Interreg", "Vlaanderen-Nederland", "grensregio", "Zeeland", "50%"]
  },
  {
    id: "crossroads",
    naam: "CrossRoads Vlaanderen-Nederland \u2013 subsidie voor grensoverschrijdende mkb-samenwerking",
    niveau: "europees",
    categories: ["innovatie", "ondernemerschap", "onderzoek"],
    type: "Subsidie (onderdeel van Interreg VL-NL)",
    uitvoerder: "Interreg Vlaanderen-Nederland + VLAIO + Impuls Zeeland, REWIN, BOM, LIOF, InnovationQuarter",
    bedragTekst: "50% van de subsidiabele kosten, maximaal \u20ac250.000 per project",
    bedragMax: 250000,
    plafond: "Call 5 (vijfde en laatste): \u20ac1,8 mln subsidiebudget",
    samenvatting: "Laagdrempelig programma voor kmo/mkb in Vlaanderen en Zuid-Nederland (Zeeland incl.) die over de grens samenwerken aan innovatie rond maatschappelijke transities. CrossRoads helpt ook bij het vinden van een partner over de grens.",
    voorwaarden: [
      "Consortium van minstens \u00e9\u00e9n Vlaamse kmo en \u00e9\u00e9n Zuid-Nederlandse mkb (Zeeland, Noord-Brabant, Limburg of Zuid-Holland)",
      "Kmo/mkb-definitie: <250 werknemers en jaaromzet \u2264 \u20ac50 mln of balanstotaal \u2264 \u20ac43 mln; OIM-voorwaarde (eigen vermogen < 50% van geplaatst kapitaal; <3 jaar oud uitgezonderd)",
      "Kennisinstellingen mogen meedoen in het consortium maar ontvangen geen subsidie",
      "Looptijd max. 2 jaar; 50% subsidie tot \u20ac250.000 per project (personeel, verbruiksgoederen, externe kosten)",
      "Thema\u2019s: duurzaam ondernemen, duurzame energie, Industrie 4.0, gezondheid",
      "Call 5: 1 december 2025 \u2013 6 februari 2026 (afgelopen, laatste oproep van deze programmaperiode); ranking op innovatie, impact, grensoverschrijdende meerwaarde, haalbaarheid"
    ],
    wie: "Kmo/mkb in Vlaanderen en Zuid-Nederland (Zeeland)",
    themas: ["CrossRoads", "grensoverschrijdend", "Vlaanderen", "50%", "\u20ac250.000"],
    doorlopend: false,
    openstellingen: [
      { vanaf: "2025-12-01", "t/m": "2026-02-06", label: "Call 5 (laatste): 1 december 2025 \u2013 6 februari 2026 (afgelopen)" }
    ],
    url: "https://interregvlaned.eu/crossroads-vlaanderen-nederland/subsidie",
    tags: ["CrossRoads", "kmo", "mkb", "Vlaanderen", "grensoverschrijdend"]
  },
  {
    id: "interreg-europe",
    naam: "Interreg Europe \u2013 beleidsleren voor overheden",
    niveau: "europees",
    categories: ["onderzoek", "economie"],
    type: "Subsidie (EU)",
    uitvoerder: "Interreg Europe; Nederland ontvangt \u20ac378,6 mln EU-geld voor alle Interreg A/B-programma\u2019s 2021-2027",
    bedragTekst: "Tot 80% cofinanciering voor би-/multilaterale beleidsprojecten (per call)",
    bedragMax: null,
    plafond: "Per call wisselend",
    samenvatting: "Programma voor overheden (en hun partners) om regionaal beleid te verbeteren door te leren van andere Europese regio\u2019s \u2013 o.a. over regionaal innovatiebeleid, mkb-bevordering en economische structuurversterking. Relevant voor onderzoek naar en uitvoering van het Zeeuwse innovatiebeleid.",
    voorwaarden: [
      "Hoofdaanvrager is een overheid (provincie/gemeente); partners uit andere EU-landen",
      "Project gericht op uitwisseling en overdracht van good practices rond regionaal beleid",
      "Calls periodiek; indiening via het programma-portaal"
    ],
    wie: "Provinciale en lokale overheden (Provincie Zeeland) en hun partnerorganisaties",
    themas: ["Interreg Europe", "beleidsleren", "overheden", "innovatiebeleid"],
    doorlopend: true,
    openstellingen: [
      { vanaf: "2026-01-01", "t/m": "2027-12-31", label: "Periodieke calls via interregeurope.eu" }
    ],
    url: "https://www.rijksoverheid.nl/onderwerpen/europese-subsidies/europese-structuur--en-investeringsfondsen/europese-subsidieregeling-interreg",
    tags: ["Interreg Europe", "beleid", "overheden", "EU"]
  }
];
