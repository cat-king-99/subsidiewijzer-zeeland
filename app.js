const VANDAAG = new Date();
VANDAAG.setHours(0, 0, 0, 0);

const state = {
  q: "",
  niveaus: new Set(Object.keys(NIVEAUS)),
  cats: new Set(Object.keys(CATEGORIEEN)),
  periode: "alle",
  bedrag: "alle",
  sort: "relevantie"
};

function parseDatum(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function datumTekst(d) {
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
}

function dagenVerschil(a, b) {
  return Math.round((a - b) / 86400000);
}

function statusVan(item) {
  if (item.doorlopend) return "doorlopend";
  const windows = item.openstellingen || [];
  if (!windows.length) return "onbekend";
  const nu = windows.find(w => parseDatum(w.vanaf) <= VANDAAG && VANDAAG <= parseDatum(w["t/m"]));
  if (nu) return "open";
  const komend = windows.filter(w => parseDatum(w.vanaf) > VANDAAG).sort((a, b) => a.vanaf.localeCompare(b.vanaf));
  if (komend.length) return "gepland";
  return "verlopen";
}

function volgendeDatum(item) {
  const status = statusVan(item);
  if (status === "open") {
    return item.openstellingen
      .filter(w => parseDatum(w.vanaf) <= VANDAAG && VANDAAG <= parseDatum(w["t/m"]))
      .map(w => parseDatum(w["t/m"]))[0];
  }
  if (status === "gepland") {
    return parseDatum(item.openstellingen.filter(w => parseDatum(w.vanaf) > VANDAAG).sort((a, b) => a.vanaf.localeCompare(b.vanaf))[0].vanaf);
  }
  return null;
}

function deadlineVan(item) {
  const windows = item.openstellingen || [];
  if (!windows.length) return null;
  const toekomst = windows.map(w => parseDatum(w["t/m"])).filter(d => d >= VANDAAG).sort((a, b) => a - b);
  if (toekomst.length) return toekomst[0];
  return windows.map(w => parseDatum(w["t/m"])).sort((a, b) => b - a)[0];
}

function eerstvolgendeDeadline(item) {
  const windows = item.openstellingen || [];
  const toekomst = windows.map(w => parseDatum(w["t/m"])).filter(d => d >= VANDAAG).sort((a, b) => a - b);
  return toekomst.length ? toekomst[0] : null;
}

function statusLabel(item) {
  const s = statusVan(item);
  if (s === "open") return { tekst: "Nu open", klasse: "open" };
  if (s === "gepland") return { tekst: "Geplande openstelling", klasse: "gepland" };
  if (s === "doorlopend") return { tekst: "Doorlopend / periodiek", klasse: "doorlopend" };
  if (s === "verlopen") return { tekst: "Laatste ronde afgelopen", klasse: "verlopen" };
  return { tekst: "Onbekend", klasse: "verlopen" };
}

function matchPeriode(item, periode) {
  if (periode === "alle") return true;
  const status = statusVan(item);
  if (periode === "open") return status === "open";
  if (periode === "binnen3m") {
    const d = volgendeDatum(item);
    return d !== null && dagenVerschil(d, VANDAAG) <= 90;
  }
  if (periode === "doorlopend") return item.doorlopend || status === "doorlopend";
  if (periode === "2026" || periode === "2027") {
    const jaar = Number(periode);
    return (item.openstellingen || []).some(w => {
      const v = parseDatum(w.vanaf), t = parseDatum(w["t/m"]);
      return t >= new Date(jaar, 0, 1) && v <= new Date(jaar, 11, 31);
    });
  }
  return true;
}

function matchBedrag(item, bedrag) {
  if (bedrag === "alle") return true;
  const max = item.bedragMax;
  if (max === null || max === undefined) return false;
  if (bedrag === "t/m50k") return max <= 50000;
  if (bedrag === "50k-250k") return max > 50000 && max <= 250000;
  if (bedrag === "250k-1m") return max > 250000 && max <= 1000000;
  if (bedrag === "boven1m") return max > 1000000;
  return true;
}

function matchZoek(item, q) {
  if (!q) return true;
  const hay = [item.naam, item.uitvoerder, item.samenvatting, item.type, item.bedragTekst, item.plafond, item.wie, ...(item.voorwaarden || []), ...(item.themas || []), ...(item.tags || []), ...(item.categories || []), NIVEAUS[item.niveau].label].join(" ").toLowerCase();
  return q.toLowerCase().split(/\s+/).every(tok => hay.includes(tok));
}

function gefilterd() {
  return SUBSIDIES.filter(item =>
    state.niveaus.has(item.niveau) &&
    item.categories.some(c => state.cats.has(c)) &&
    matchPeriode(item, state.periode) &&
    matchBedrag(item, state.bedrag) &&
    matchZoek(item, state.q)
  );
}

function sorteer(items) {
  const arr = [...items];
  if (state.sort === "bedrag-desc") {
    arr.sort((a, b) => (b.bedragMax ?? -1) - (a.bedragMax ?? -1));
  } else if (state.sort === "bedrag-asc") {
    arr.sort((a, b) => (a.bedragMax ?? Infinity) - (b.bedragMax ?? Infinity));
  } else if (state.sort === "deadline") {
    arr.sort((a, b) => {
      const da = eerstvolgendeDeadline(a), db = eerstvolgendeDeadline(b);
      if (!da && !db) return a.naam.localeCompare(b.naam, "nl");
      if (!da) return 1;
      if (!db) return -1;
      return da - db;
    });
  } else if (state.sort === "naam") {
    arr.sort((a, b) => a.naam.localeCompare(b.naam, "nl"));
  }
  return arr;
}

function euroTekst(max) {
  if (max === null || max === undefined) return "Zie voorwaarden";
  return "tot " + new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(max);
}

function chip(tekst, actief, onClick, extraKlasse) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip" + (actief ? " actief" : "") + (extraKlasse ? " " + extraKlasse : "");
  b.textContent = tekst;
  b.addEventListener("click", onClick);
  return b;
}

function renderFilters() {
  const niveauEl = document.getElementById("filter-niveau");
  niveauEl.innerHTML = "";
  Object.entries(NIVEAUS).forEach(([key, val]) => {
    niveauEl.appendChild(chip(val.label, state.niveaus.has(key), () => {
      if (state.niveaus.has(key)) state.niveaus.delete(key); else state.niveaus.add(key);
      render();
    }, "chip-niveau chip-niveau-" + key));
  });

  const catEl = document.getElementById("filter-categorie");
  catEl.innerHTML = "";
  Object.entries(CATEGORIEEN).forEach(([key, val]) => {
    catEl.appendChild(chip(val.icoon + " " + val.label, state.cats.has(key), () => {
      if (state.cats.has(key)) state.cats.delete(key); else state.cats.add(key);
      render();
    }));
  });

  const periodeEl = document.getElementById("filter-periode");
  periodeEl.innerHTML = "";
  const periodes = [
    ["alle", "Alle tijden"],
    ["open", "Nu open"],
    ["binnen3m", "Binnen 3 maanden"],
    ["2026", "Openstelling 2026"],
    ["2027", "Openstelling 2027"],
    ["doorlopend", "Doorlopend / periodiek"]
  ];
  periodes.forEach(([val, label]) => {
    periodeEl.appendChild(chip(label, state.periode === val, () => { state.periode = val; render(); }));
  });
}

function renderStatistieken(items) {
  const el = document.getElementById("statistieken");
  el.innerHTML = "";
  const teller = document.createElement("span");
  teller.className = "stat-teller";
  teller.textContent = items.length + (items.length === 1 ? " regeling gevonden" : " regelingen gevonden");
  el.appendChild(teller);
  Object.entries(NIVEAUS).forEach(([key, val]) => {
    const n = items.filter(i => i.niveau === key).length;
    const s = document.createElement("span");
    s.className = "stat-niveau stat-niveau-" + key;
    s.textContent = val.label + ": " + n;
    el.appendChild(s);
  });
}

function kaart(item) {
  const kaartEl = document.createElement("article");
  kaartEl.className = "kaart";
  kaartEl.tabIndex = 0;

  const bovenkant = document.createElement("div");
  bovenkant.className = "kaart-boven";

  const niveauBadge = document.createElement("span");
  niveauBadge.className = "badge badge-niveau badge-niveau-" + item.niveau;
  niveauBadge.textContent = NIVEAUS[item.niveau].label;
  bovenkant.appendChild(niveauBadge);

  const status = statusLabel(item);
  const statusBadge = document.createElement("span");
  statusBadge.className = "badge badge-status badge-status-" + status.klasse;
  statusBadge.textContent = status.tekst;
  bovenkant.appendChild(statusBadge);

  kaartEl.appendChild(bovenkant);

  const h = document.createElement("h3");
  h.textContent = item.naam;
  kaartEl.appendChild(h);

  const uitvoerder = document.createElement("p");
  uitvoerder.className = "kaart-uitvoerder";
  uitvoerder.textContent = item.uitvoerder;
  kaartEl.appendChild(uitvoerder);

  const bedrag = document.createElement("p");
  bedrag.className = "kaart-bedrag";
  bedrag.textContent = item.bedragTekst;
  kaartEl.appendChild(bedrag);

  const dl = deadlineVan(item);
  const tijd = document.createElement("p");
  tijd.className = "kaart-tijd";
  if (item.doorlopend) {
    tijd.textContent = "Doorlopend / periodieke calls";
  } else if (dl) {
    const statusNow = statusVan(item);
    const prefix = statusNow === "open" ? "Open t/m " : statusNow === "gepland" ? "Opent " : "Laatste deadline ";
    tijd.textContent = prefix + datumTekst(dl);
  }
  kaartEl.appendChild(tijd);

  const cats = document.createElement("div");
  cats.className = "kaart-cats";
  item.categories.forEach(c => {
    const s = document.createElement("span");
    s.className = "tag";
    s.textContent = CATEGORIEEN[c].icoon + " " + CATEGORIEEN[c].label;
    cats.appendChild(s);
  });
  kaartEl.appendChild(cats);

  const samenvatting = document.createElement("p");
  samenvatting.className = "kaart-samenvatting";
  samenvatting.textContent = item.samenvatting;
  kaartEl.appendChild(samenvatting);

  const bekijk = document.createElement("span");
  bekijk.className = "kaart-link";
  bekijk.textContent = "Bedragen & voorwaarden bekijken \u2192";
  kaartEl.appendChild(bekijk);

  kaartEl.addEventListener("click", () => openModal(item.id));
  kaartEl.addEventListener("keydown", e => { if (e.key === "Enter") openModal(item.id); });
  return kaartEl;
}

function renderKaarten(items) {
  const grid = document.getElementById("resultaten");
  grid.innerHTML = "";
  const leeg = document.getElementById("leeg-melding");
  if (!items.length) {
    leeg.hidden = false;
    grid.hidden = true;
  } else {
    leeg.hidden = true;
    grid.hidden = false;
    items.forEach(item => grid.appendChild(kaart(item)));
  }
}

function windowRegel(w, item) {
  const v = parseDatum(w.vanaf), t = parseDatum(w["t/m"]);
  let klasse = "verlopen";
  if (v <= VANDAAG && VANDAAG <= t) klasse = "open";
  else if (v > VANDAAG) klasse = "gepland";
  const li = document.createElement("li");
  const label = document.createElement("span");
  label.className = "badge badge-status badge-status-" + klasse;
  label.textContent = klasse === "open" ? "Nu open" : klasse === "gepland" ? "Gepland" : "Afgelopen";
  const tekst = document.createElement("span");
  tekst.textContent = " " + w.label;
  li.appendChild(label);
  li.appendChild(tekst);
  return li;
}

function openModal(id) {
  const item = SUBSIDIES.find(s => s.id === id);
  if (!item) return;
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = "";

  const boven = document.createElement("div");
  boven.className = "modal-boven";
  const nb = document.createElement("span");
  nb.className = "badge badge-niveau badge-niveau-" + item.niveau;
  nb.textContent = NIVEAUS[item.niveau].label;
  const st = statusLabel(item);
  const sb = document.createElement("span");
  sb.className = "badge badge-status badge-status-" + st.klasse;
  sb.textContent = st.tekst;
  const tb = document.createElement("span");
  tb.className = "badge badge-type";
  tb.textContent = item.type;
  boven.appendChild(nb); boven.appendChild(sb); boven.appendChild(tb);
  body.appendChild(boven);

  const h = document.createElement("h2");
  h.textContent = item.naam;
  body.appendChild(h);

  const u = document.createElement("p");
  u.className = "modal-uitvoerder";
  u.textContent = item.uitvoerder;
  body.appendChild(u);

  const bedragVak = document.createElement("div");
  bedragVak.className = "modal-bedrag";
  const bt = document.createElement("p");
  bt.className = "modal-bedrag-hoofd";
  bt.textContent = item.bedragTekst;
  bedragVak.appendChild(bt);
  if (item.plafond) {
    const bp = document.createElement("p");
    bp.className = "modal-bedrag-plafond";
    bp.textContent = "Plafond / budget: " + item.plafond;
    bedragVak.appendChild(bp);
  }
  body.appendChild(bedragVak);

  const s = document.createElement("p");
  s.className = "modal-samenvatting";
  s.textContent = item.samenvatting;
  body.appendChild(s);

  const mk = (titel, inhoud) => {
    const sectie = document.createElement("section");
    const h3 = document.createElement("h3");
    h3.textContent = titel;
    sectie.appendChild(h3);
    inhoud(sectie);
    body.appendChild(sectie);
  };

  mk("Voorwaarden voor de aanvraag", sectie => {
    const ul = document.createElement("ul");
    item.voorwaarden.forEach(v => {
      const li = document.createElement("li");
      li.textContent = v;
      ul.appendChild(li);
    });
    sectie.appendChild(ul);
  });

  mk("Wie kan aanvragen?", sectie => {
    const p = document.createElement("p");
    p.textContent = item.wie;
    sectie.appendChild(p);
  });

  if (item.themas && item.themas.length) {
    mk("Thema\u2019s", sectie => {
      const div = document.createElement("div");
      div.className = "tag-rij";
      item.themas.forEach(t => {
        const s2 = document.createElement("span");
        s2.className = "tag";
        s2.textContent = t;
        div.appendChild(s2);
      });
      sectie.appendChild(div);
    });
  }

  mk("Openstelling & tijd", sectie => {
    if (item.doorlopend) {
      const p = document.createElement("p");
      p.textContent = "Deze regeling kent geen vaste deadline: aanvragen doorlopend of via periodieke calls.";
      sectie.appendChild(p);
    }
    if (item.openstellingen && item.openstellingen.length) {
      const ul = document.createElement("ul");
      ul.className = "openstelling-lijst";
      item.openstellingen.forEach(w => ul.appendChild(windowRegel(w, item)));
      sectie.appendChild(ul);
    }
  });

  const catsDiv = document.createElement("div");
  catsDiv.className = "tag-rij";
  item.categories.forEach(c => {
    const s2 = document.createElement("span");
    s2.className = "tag";
    s2.textContent = CATEGORIEEN[c].icoon + " " + CATEGORIEEN[c].label;
    catsDiv.appendChild(s2);
  });
  body.appendChild(catsDiv);

  const link = document.createElement("a");
  link.className = "modal-link";
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Offici\u00eble pagina bij de bron \u2192";
  body.appendChild(link);

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modal-sluit").focus();
}

function sluitModal() {
  document.getElementById("modal").hidden = true;
  document.body.style.overflow = "";
}

function render() {
  renderFilters();
  const items = sorteer(gefilterd());
  renderStatistieken(items);
  renderKaarten(items);
}

function init() {
  document.getElementById("zoek").addEventListener("input", e => {
    state.q = e.target.value.trim();
    render();
  });
  document.getElementById("filter-bedrag").addEventListener("change", e => {
    state.bedrag = e.target.value;
    render();
  });
  document.getElementById("sorteer").addEventListener("change", e => {
    state.sort = e.target.value;
    render();
  });
  document.getElementById("reset").addEventListener("click", () => {
    state.q = "";
    state.niveaus = new Set(Object.keys(NIVEAUS));
    state.cats = new Set(Object.keys(CATEGORIEEN));
    state.periode = "alle";
    state.bedrag = "alle";
    state.sort = "relevantie";
    document.getElementById("zoek").value = "";
    document.getElementById("filter-bedrag").value = "alle";
    document.getElementById("sorteer").value = "relevantie";
    render();
  });
  document.getElementById("modal-sluit").addEventListener("click", sluitModal);
  document.getElementById("modal").addEventListener("click", e => {
    if (e.target.id === "modal") sluitModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !document.getElementById("modal").hidden) sluitModal();
  });
  document.getElementById("bijgewerkt").textContent = LAATST_BIJGEWERKT;
  const voet = document.getElementById("bijgewerkt-voet");
  if (voet) voet.textContent = LAATST_BIJGEWERKT;
  render();
}

document.addEventListener("DOMContentLoaded", init);
