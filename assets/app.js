// Karate Japan Guide — 共通の表示処理（ヘッダー・言語切替・各ページの描画）
(function () {
  var PAGES = ["index", "compete", "schools", "dojo", "study", "contact"];
  var CONTACT_EMAIL = "fireworks.fd.2020@gmail.com"; // 食品価格サイト（AI Taste Labo）と共通
  var page = document.body.getAttribute("data-page");
  var params = new URLSearchParams(location.search);
  var lang = detectLang();
  var t = I18N[lang];
  var C = window.CONTENT;

  function detectLang() {
    var q = params.get("lang");
    if (q && I18N[q]) return q;
    try { var s = localStorage.getItem("kjg-lang"); if (s && I18N[s]) return s; } catch (e) { /* noop */ }
    var nl = (navigator.language || "ja").slice(0, 2);
    return I18N[nl] ? nl : "en";
  }
  function setLang(l) {
    try { localStorage.setItem("kjg-lang", l); } catch (e) { /* noop */ }
    params.set("lang", l);
    location.search = params.toString();
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // 訳が無い項目は英語→日本語の順で代用
  function L(o) { return o == null ? "" : (typeof o === "string" ? o : (o[lang] || o.en || o.ja)); }
  function href(p) {
    var parts = p.split("#"), base = parts[0], hash = parts[1] ? "#" + parts[1] : "";
    return base + (base.indexOf("?") < 0 ? "?" : "&") + "lang=" + lang + hash;
  }
  function searchUrl(q) { return "https://www.google.com/search?q=" + encodeURIComponent(q); }
  function section(id, kicker, title, lead, body) {
    return '<section class="wrap section"' + (id ? ' id="' + id + '"' : "") + '>' +
      '<p class="kicker">' + esc(kicker) + '</p><h2>' + esc(title) + '</h2>' +
      (lead ? '<p class="lead">' + esc(lead) + '</p>' : "") + body + '</section>';
  }

  // ===== ヘッダー・フッター =====
  function renderChrome() {
    document.documentElement.lang = t.htmlLang;
    document.title = (page === "index" ? "" : t.nav[page] + " | ") + t.siteName;
    var nav = PAGES.map(function (p) {
      return '<a href="' + href(p + ".html") + '"' + (p === page ? ' aria-current="page"' : "") + '>' + esc(t.nav[p]) + '</a>';
    }).join("");
    document.getElementById("header").innerHTML =
      '<header class="site-header"><div class="wrap header-inner">' +
      '<a class="brand" href="' + href("index.html") + '"><span class="brand-mark" aria-hidden="true">空</span>' +
      '<span><span class="brand-name">' + esc(t.siteName) + '</span><span class="brand-sub">' + esc(t.siteSub) + '</span></span></a>' +
      '<nav class="site-nav" aria-label="Main">' + nav + '</nav>' +
      '<div class="lang-switch" role="group" aria-label="Language">' +
      '<button type="button" data-lang="ja"' + (lang === "ja" ? ' aria-pressed="true"' : "") + '>日本語</button>' +
      '<button type="button" data-lang="en"' + (lang === "en" ? ' aria-pressed="true"' : "") + '>EN</button>' +
      '<button type="button" data-lang="es"' + (lang === "es" ? ' aria-pressed="true"' : "") + '>ES</button></div>' +
      '</div></header>';
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { if (b.dataset.lang !== lang) setLang(b.dataset.lang); });
    });
    var ym = DATA_DATE.split("-");
    var date = lang === "ja" ? ym[0] + "年" + Number(ym[1]) + "月" : new Date(ym[0], ym[1] - 1).toLocaleString(lang, { month: "long", year: "numeric" });
    document.getElementById("footer").innerHTML =
      '<footer class="site-footer"><div class="wrap"><p>' + esc(t.disclaimer.replace("{date}", date)) + '</p>' +
      '<p class="muted">' + esc(t.footerNote) + '</p></div></footer>';
  }

  // ===== トップ（空手を知る） =====
  function renderIndex() {
    var hero = '<section class="hero"><div class="wrap hero-grid"><div>' +
      '<p class="kicker">KARATE · 空手道 · JAPAN</p><h1>' + t.heroTitle + '</h1><p class="hero-lead">' + esc(t.heroLead) + '</p>' +
      '<div class="actions"><a class="btn" href="#styles">' + esc(t.goLearn) + '</a>' +
      '<a class="btn btn-ghost" href="' + href("compete.html") + '">' + esc(t.goCompete) + '</a>' +
      '<a class="btn btn-ghost" href="' + href("study.html") + '">' + esc(t.goStudy) + '</a></div></div>' +
      '<div class="hero-visual" aria-hidden="true"><span class="hero-kanji">空手道</span><span class="hero-circle"></span></div></div></section>';
    var paths = '<div class="grid grid-4">' + t.paths.map(function (p) {
      return '<a class="card path path-' + p[0] + '" href="' + href(p[3]) + '"><h3>' + esc(p[1]) + ' →</h3><p>' + esc(p[2]) + '</p></a>';
    }).join("") + '</div>';
    var hist = '<ol class="timeline">' + C.history.map(function (h) {
      return '<li><span class="tl-year">' + esc(L(h.y)) + '</span><div><h3>' + esc(L(h.t)) + '</h3><p>' + esc(L(h.d)) + '</p></div></li>';
    }).join("") + '</ol>';
    var c = t.styleCols;
    var styles = '<div class="table-wrap"><table class="table"><thead><tr><th></th><th>' + c.founder + '</th><th>' + c.origin + '</th><th>' + c.feature + '</th><th>' + c.kata + '</th></tr></thead><tbody>' +
      C.styles.map(function (s) {
        return '<tr><th scope="row">' + esc(L(s.name)) + '</th><td>' + esc(L(s.founder)) + '</td><td>' + esc(L(s.origin)) + '</td><td>' + esc(L(s.feature)) + '</td><td class="kata">' + esc(s.kata).replace(/ \/ /g, "<br>") + '</td></tr>';
      }).join("") + '</tbody></table></div><p class="note">' + esc(L(C.fullContact)) + '</p>';
    var rules = '<div class="grid grid-2">' + C.rules.map(function (r) {
      return '<div class="card"><h3>' + esc(L(r.title)) + '</h3><ul>' + L(r.items).map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ul></div>';
    }).join("") + '</div>';
    return hero + section("", "Find your path", t.pathTitle, "", paths) +
      section("history", "History", t.historyTitle, t.historyLead, hist) +
      section("styles", "Styles", t.stylesTitle, t.stylesLead, styles) +
      section("rules", "Rules", t.rulesTitle, t.rulesLead, rules);
  }

  // ===== 大会・結果 =====
  function renderCompete() {
    var c = t.calCols;
    var cal = '<div class="table-wrap"><table class="table"><thead><tr><th>' + c.month + '</th><th>' + c.name + '</th><th>' + c.level + '</th><th>' + c.place + '</th></tr></thead><tbody>' +
      CALENDAR.map(function (e) {
        return '<tr><td class="nowrap">' + esc(L(e.m)) + '</td><td><strong>' + esc(L(e.name)) + '</strong>' + (e.note ? '<br><span class="muted">' + esc(L(e.note)) + '</span>' : "") +
          '</td><td><span class="tag">' + esc(L(e.level)) + '</span></td><td>' + esc(L(e.place)) + '</td></tr>';
      }).join("") + '</tbody></table></div>' +
      '<p class="note"><a href="https://www.jkf.ne.jp/" target="_blank" rel="noopener">JKF ' + esc(t.official) + ' ↗</a></p>';
    var head = t.resultHead;
    var res = '<div class="grid grid-results">' + RESULTS.map(function (r) {
      return '<div class="card"><h3>' + esc(L(r.title)) + '</h3>' + (r.note ? '<p class="muted">' + esc(L(r.note)) + '</p>' : "") +
        '<table class="table table-sm"><thead><tr><th>' + head.join("</th><th>") + '</th></tr></thead><tbody>' +
        r.rows.map(function (row) {
          return '<tr><td>' + esc(L(row[0])) + '</td><td><strong>' + esc(L(row[1])) + '</strong></td><td>' + (row[2] ? esc(L(row[2])) : "—") + '</td></tr>';
        }).join("") + '</tbody></table>' +
        '<p class="src">' + esc(t.source) + ': <a href="' + esc(r.src) + '" target="_blank" rel="noopener">' + esc(new URL(r.src).hostname) + ' ↗</a></p></div>';
    }).join("") + '</div>';
    return section("calendar", "Calendar", t.calendarTitle, t.calendarLead, cal) +
      section("results", "Results", t.resultsTitle, t.resultsLead, res);
  }

  // ===== 強豪校 =====
  var state = { type: params.get("type") || "all", str: params.get("str") || "all", region: params.get("region") || "all" };
  function chips(key, names) {
    return '<div class="chips" data-key="' + key + '">' + Object.keys(names).map(function (k) {
      return '<button type="button" class="chip" data-v="' + k + '" aria-pressed="' + (state[key] === k) + '">' + esc(names[k]) + '</button>';
    }).join("") + '</div>';
  }
  function schoolCard(s) {
    return '<article class="card school"><div class="school-head"><span class="tag tag-' + s.type + '">' + esc(t.typeNames[s.type]) + '</span>' +
      s.str.map(function (k) { return '<span class="tag tag-' + k + '">' + esc(t.strNames[k]) + '</span>'; }).join("") + '</div>' +
      '<h3>' + esc(L(s.name)) + '</h3><p class="muted">' + esc(L(s.pref)) + (lang === "ja" ? "" : " · " + esc(s.name.ja)) + '</p>' +
      '<p class="label">' + esc(t.achievements) + '</p><ul class="results">' + s.results.map(function (r) {
        return '<li><span class="yr">' + r[0] + '</span>' + esc(L(r[1])) + ' <a class="src-link" href="' + esc(SOURCES[r[2]]) + '" target="_blank" rel="noopener" title="' + esc(t.source) + '">↗</a></li>';
      }).join("") + '</ul>' +
      '<a class="more" href="' + searchUrl(s.name.ja + " 空手道部") + '" target="_blank" rel="noopener">' + esc(t.searchSchool) + ' ↗</a></article>';
  }
  function renderSchoolList() {
    var list = SCHOOLS.filter(function (s) {
      return (state.type === "all" || s.type === state.type) && (state.str === "all" || s.str.indexOf(state.str) >= 0) &&
        (state.region === "all" || s.region === state.region);
    });
    document.getElementById("count").textContent = t.resultCount.replace("{n}", list.length);
    document.getElementById("cards").innerHTML = list.length ? list.map(schoolCard).join("") : '<p class="muted">' + esc(t.noResults) + '</p>';
  }
  function renderSchools() {
    var filters = '<div class="filters">' +
      '<div class="filter-row"><span class="filter-label">' + esc(t.filterType) + '</span>' + chips("type", t.typeNames) + '</div>' +
      '<div class="filter-row"><span class="filter-label">' + esc(t.filterStr) + '</span>' + chips("str", t.strNames) + '</div>' +
      '<div class="filter-row"><span class="filter-label">' + esc(t.filterRegion) + '</span>' + chips("region", t.regionNames) + '</div></div>' +
      '<p class="count" id="count" aria-live="polite"></p><div class="grid grid-3" id="cards"></div>';
    var entry = '<div class="grid grid-2">' + C.entry.map(function (e) {
      return '<div class="card"><h3>' + esc(L(e.title)) + '</h3><p>' + esc(L(e.d)) + '</p></div>';
    }).join("") + '</div>';
    return section("list", "Top schools", t.schoolsTitle, t.schoolsLead, filters) +
      section("entry", "Admission", t.entryTitle, "", entry);
  }
  function bindSchools() {
    document.querySelectorAll(".chips").forEach(function (g) {
      g.addEventListener("click", function (e) {
        var b = e.target.closest(".chip"); if (!b) return;
        state[g.dataset.key] = b.dataset.v;
        g.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        renderSchoolList();
      });
    });
    renderSchoolList();
  }

  // ===== 道場・流派 =====
  function orgCard(o) {
    var link = o.url ? '<a class="more" href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(t.official) + ' ↗</a>'
      : '<a class="more" href="' + searchUrl(o.name.ja) + '" target="_blank" rel="noopener">' + esc(t.search) + ' ↗</a>';
    return '<div class="card">' + (o.style ? '<span class="tag">' + esc(L(o.style)) + '</span>' : "") + '<h3>' + esc(L(o.name)) + '</h3><p>' + esc(L(o.d)) + '</p>' + link + '</div>';
  }
  function renderDojo() {
    var choose = '<ol class="checklist">' + L(C.choose).map(function (c) { return '<li>' + esc(c) + '</li>'; }).join("") + '</ol>';
    var clubs = '<div class="grid grid-3">' + CLUBS.map(function (c) {
      return '<div class="card"><div class="school-head">' + c.str.map(function (k) { return '<span class="tag tag-' + k + '">' + esc(t.strNames[k]) + '</span>'; }).join("") + '</div>' +
        '<h3>' + esc(c.name) + '</h3><p class="muted">' + (c.pref ? esc(L(c.pref)) : "—") + '</p><p>' + esc(L(c.r)) + '</p>' +
        '<a class="more" href="' + searchUrl(c.name + " 空手") + '" target="_blank" rel="noopener">' + esc(t.search) + ' ↗</a></div>';
    }).join("") + '</div><p class="src">' + esc(t.source) + ': <a href="' + esc(CLUBS_SOURCE) + '" target="_blank" rel="noopener">' + esc(new URL(CLUBS_SOURCE).hostname) + ' ↗</a></p>';
    return section("orgs", "Dojos & styles", t.dojoTitle, t.dojoLead, '<div class="grid grid-3">' + ORGS.map(orgCard).join("") + '</div>') +
      section("clubs", "Top dojos", t.clubsTitle, t.clubsLead, clubs) +
      section("okinawa", "Okinawa", t.okinawaTitle, "", '<div class="grid grid-3">' + OKINAWA.map(orgCard).join("") + '</div>') +
      section("choose", "Checklist", t.chooseTitle, "", choose);
  }

  // ===== 留学ガイド =====
  function renderStudy() {
    var visas = '<div class="grid grid-3">' + C.visas.map(function (v) {
      return '<div class="card"><h3>' + esc(L(v.name)) + '</h3><p class="tag">' + esc(L(v.term)) + '</p><p>' + esc(L(v.d)) + '</p></div>';
    }).join("") + '</div><p class="note"><a href="https://www.moj.go.jp/isa/applications/status/culturalactivities02.html" target="_blank" rel="noopener">' +
      esc(t.immigrationLink) + ' ↗</a></p>';
    var steps = '<ol class="steps">' + L(C.steps).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") + '</ol>';
    var costs = '<div class="table-wrap"><table class="table"><tbody>' + C.costs.map(function (c) {
      return '<tr><th scope="row">' + esc(L(c.k)) + '</th><td>' + esc(L(c.v)) + '</td></tr>';
    }).join("") + '</tbody></table></div>';
    var faq = C.faq.map(function (f) { return '<details class="faq"><summary>' + esc(L(f.q)) + '</summary><p>' + esc(L(f.a)) + '</p></details>'; }).join("");
    var glossary = '<div class="glossary">' + C.glossary.map(function (g) {
      return '<div><span class="g-ja">' + esc(g[0]) + '</span><span class="g-ro">' + esc(g[1]) + '</span><span class="muted">' + esc(L(g[2])) + '</span></div>';
    }).join("") + '</div>';
    return section("visa", "Study in Japan", t.studyTitle, t.studyLead, visas) +
      section("steps", "Steps", t.stepsTitle, "", steps) +
      section("costs", "Costs", t.costTitle, "", costs) +
      section("faq", "FAQ", t.faqTitle, "", faq) +
      section("glossary", "Glossary", t.glossaryTitle, "", glossary);
  }

  // ===== お問い合わせ =====
  function renderContact() {
    var c = t.contact;
    var mail = '<div class="card contact-card"><h3>' + esc(c.mailTitle) + '</h3><p>' + esc(c.mailText) + '</p>' +
      '<a class="btn mail-btn" href="mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(c.subject) + '">✉ ' + esc(c.mailBtn.replace("{addr}", CONTACT_EMAIL)) + '</a></div>';
    var tips = '<ol class="checklist">' + c.tips.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ol>';
    var notes = '<ul class="notes">' + c.notes.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul>';
    return section("contact", "Contact", t.nav.contact, c.lead, mail) +
      section("tips", "Tips", c.tipsTitle, "", tips + notes);
  }

  renderChrome();
  var main = document.getElementById("main");
  var render = { index: renderIndex, compete: renderCompete, schools: renderSchools, dojo: renderDojo, study: renderStudy, contact: renderContact }[page];
  main.innerHTML = render();
  if (page === "schools") bindSchools();
  if (location.hash) { var el = document.querySelector(location.hash); if (el) el.scrollIntoView(); }
})();
