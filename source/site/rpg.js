/* ==========================================================================
   MODE RPG – phase 1 (équipements, donjons à clés, butin)
   Ce fichier est inséré dans game.js à la place du marqueur @@RPG@@ par tools/build.mjs.
   Il vit dans la même fermeture que le jeu et utilise ses noms internes :
     v  = sauvegarde du joueur      Le = définition des tours     st = identifiants des tours
     l  = partie en cours           ue = biomes                   js(b) = biome débloqué
     Is(d) = difficulté débloquée   xs(diff, niveau) = lancer un niveau
     Va(b) = choisir le biome       Ne(html, nom) = afficher un écran   Ct() = fermer l'écran
     me() = sauvegarder             qs() = menu principal         Q.user() = compte connecté
     ve(x, y, texte, couleur, taille) = texte flottant            $ / U = duel / coop en ligne
   Données du joueur : v.rpg = { inv: [objets], eq: { emplacement: id }, keys, keyT, paid }
   ========================================================================== */
const RPG = (() => {
  // ---- Données de jeu -------------------------------------------------------
  const RARITY = [
    { name: "Commun", color: "#c9c9c9", lines: 1, sell: 20 },
    { name: "Peu commun", color: "#6fd66f", lines: 2, sell: 50 },
    { name: "Rare", color: "#5aa8ff", lines: 3, sell: 120 },
    { name: "Épique", color: "#b66cff", lines: 4, sell: 300 },
    { name: "Légendaire", color: "#ffb02e", lines: 5, sell: 800 },
    // La rareté « Unique » est prévue (au-dessus de Légendaire) mais n'a aucun effet pour le moment.
  ];
  // max = valeur maximale (en %) à l'objet de niveau 1 ; elle monte avec le niveau d'objet.
  const STATS = {
    dmg: { name: "Dégâts", max: 6 },
    rate: { name: "Cadence", max: 4 },
    range: { name: "Portée", max: 4 },
    crit: { name: "Critique", max: 3 },
    critdmg: { name: "Dégâts critiques", max: 10 },
  };
  // Stats possibles par emplacement. Temporaire : les stats propres à l'armure, à l'amulette et à la
  // relique (vies, or, effets uniques) arriveront plus tard ; en attendant elles tirent des stats de tours.
  const SLOTS = [
    { id: "weapon", name: "Arme", ico: "⚔️", stats: ["dmg", "crit", "critdmg"] },
    { id: "armor", name: "Armure", ico: "🛡️", stats: ["dmg", "rate"] },
    { id: "helm", name: "Casque", ico: "⛑️", stats: ["range", "critdmg"] },
    { id: "amulet", name: "Amulette", ico: "📿", stats: ["crit", "range"] },
    { id: "relic", name: "Relique", ico: "🔮", stats: ["dmg", "rate", "range"] },
    { id: "banner", name: "Bannière", ico: "🚩", stats: ["rate", "crit"] },
  ];
  const NAMES = {
    weapon: ["Lame de l'aube", "Épée-foudre", "Arc des cimes", "Sceptre ancien"],
    armor: ["Cuirasse du gardien", "Cotte de braise", "Plastron runique", "Manteau d'écailles"],
    helm: ["Heaume du veilleur", "Casque cornu", "Couronne de fer", "Capuche d'ombre"],
    amulet: ["Pendentif d'ambre", "Talisman de givre", "Collier de crocs", "Médaillon sacré"],
    relic: ["Orbe fendu", "Cristal du bastion", "Œil de dragon", "Fiole ancienne"],
    banner: ["Étendard rouge", "Bannière du roi", "Fanion de guerre", "Drapeau d'écailles"],
  };
  const KEY_MAX = 10; // stock maximum de clés
  const KEY_MS = 3 * 3600 * 1000; // 1 clé toutes les 3 heures
  const PAID_DAILY = 6; // recharges payantes par jour
  const PAID_KEYS = 3; // clés rendues par recharge payante
  const PAID_COST = [
    { cur: "scales", n: 200 },
    { cur: "scales", n: 400 },
    { cur: "gems", n: 10 },
    { cur: "gems", n: 10 },
    { cur: "gems", n: 10 },
    { cur: "gems", n: 10 },
  ];
  const INV_MAX = 60;
  const DUNGEON_LEVEL = 5; // index du niveau de carte utilisé comme donjon
  // Poids de tirage de la rareté selon la difficulté de base du niveau de donjon.
  const LOOT_W = {
    facile: [58, 30, 10, 1.8, 0.2],
    normal: [35, 35, 20, 8, 2],
    difficile: [18, 32, 28, 17, 5],
  };
  // Niveaux de donjon : indépendants des difficultés Facile/Normal/Difficile ; ils deviennent simplement de plus en plus durs.
  const DUN_LEVELS = 10;
  const MIN_LEVEL = [1, 2, 4, 6, 8]; // niveau de donjon minimum pour qu'une rareté puisse tomber
  const levelDiff = () => "facile"; // base de vagues ; la difficulté vient du multiplicateur de points de vie
  const levelCost = (k) => (k <= 5 ? 1 : 2);
  const levelHp = (k) => 1 + 0.5 * (k - 1); // niveau 1 = x1, niveau 10 = x5,5

  // ---- État du joueur -----------------------------------------------------
  const S = () => {
    const r = (v.rpg = v.rpg || {});
    r.inv = r.inv || [];
    r.eq = r.eq || {};
    if (typeof r.keys !== "number") {
      r.keys = KEY_MAX;
      r.keyT = Date.now();
    }
    r.paid = r.paid || { d: "", n: 0 };
    r.dun = r.dun || {}; // plus haut niveau terminé par biome
    return r;
  };
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const today = () => new Date().toISOString().slice(0, 10);

  // ---- Clés ---------------------------------------------------------------
  function keys() {
    const r = S(),
      now = Date.now();
    if (r.keys >= KEY_MAX) {
      r.keyT = now;
      return r.keys;
    }
    const gain = Math.floor((now - r.keyT) / KEY_MS);
    if (gain > 0) {
      r.keys = Math.min(KEY_MAX, r.keys + gain);
      r.keyT = r.keys >= KEY_MAX ? now : r.keyT + gain * KEY_MS;
    }
    return r.keys;
  }
  function spendKeys(n) {
    const r = S();
    if (keys() < n) return false;
    if (r.keys >= KEY_MAX) r.keyT = Date.now(); // la recharge repart à zéro depuis le stock plein
    r.keys -= n;
    return true;
  }
  const nextKeyIn = () => {
    const r = S();
    return keys() >= KEY_MAX ? 0 : Math.max(0, r.keyT + KEY_MS - Date.now());
  };
  const fmtTime = (ms) => {
    const m = Math.ceil(ms / 60000);
    return Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0");
  };
  function paidToday() {
    const r = S();
    if (r.paid.d !== today()) r.paid = { d: today(), n: 0 };
    return r.paid.n;
  }

  // ---- Objets -------------------------------------------------------------
  const slotOf = (id) => SLOTS.find((s) => s.id === id);
  function rollItem(slotId, rarity, ilvl) {
    const slot = slotOf(slotId),
      pool = [];
    for (const s of slot.stats) for (const t of st) pool.push({ s, t });
    const lines = [];
    for (let i = 0; i < RARITY[rarity].lines && pool.length; i++) {
      const p = pool.splice(Math.floor(Math.random() * pool.length), 1)[0],
        val = STATS[p.s].max * (0.5 + 0.5 * Math.random()) * (1 + 0.06 * (ilvl - 1));
      lines.push({ s: p.s, t: p.t, v: Math.round(val * 10) / 10 });
    }
    const id = uid(),
      names = NAMES[slotId];
    return { id, slot: slotId, r: rarity, lv: ilvl, name: names[Math.floor(Math.random() * names.length)], lines };
  }
  function rollRarity(k) {
    const w = LOOT_W.normal.map((x, i) => (k >= MIN_LEVEL[i] ? x * (1 + 0.1 * (k - MIN_LEVEL[i])) : 0)),
      tot = w.reduce((a, b) => a + b, 0);
    let x = Math.random() * tot;
    for (let i = 0; i < w.length; i++) if ((x -= w[i]) < 0) return i;
    return 0;
  }
  const lineTxt = (ln) => "+" + ln.v.toFixed(1).replace(/\.0$/, "") + " % " + STATS[ln.s].name + " · " + (Le[ln.t] ? Le[ln.t].short : ln.t);
  const itemHtml = (it, extra = "") =>
    `<div class="rpg-item" style="border-color:${RARITY[it.r].color}"><div class="rpg-ih"><b style="color:${RARITY[it.r].color}">${it.name}</b><span>${RARITY[it.r].name} · niv. ${it.lv}</span></div><ul>${it.lines.map((ln) => `<li>${lineTxt(ln)}</li>`).join("")}</ul>${extra}</div>`;

  // ---- Boosts appliqués aux tours ---------------------------------------
  let cache = null;
  function boosts() {
    if (cache) return cache;
    const B = {};
    for (const t of st) B[t] = { dmg: 0, rate: 0, range: 0, crit: 0, critdmg: 0 };
    const r = S();
    for (const sl of SLOTS) {
      const it = r.inv.find((i) => i.id === r.eq[sl.id]);
      if (it) for (const ln of it.lines) if (B[ln.t]) B[ln.t][ln.s] += ln.v / 100;
    }
    return (cache = B);
  }
  // Appelé par rl() (calcul des stats d'une tour) : e = identifiant de la tour, o = stats de base.
  function apply(e, o) {
    if ($ || U) return o; // pas d'équipement en duel ni en coop en ligne
    const b = boosts()[e];
    if (!b) return o;
    o.dmg *= 1 + b.dmg;
    o.range *= 1 + b.range;
    o.rate /= 1 + b.rate;
    return o;
  }
  // Appelé quand un projectile touche : coup critique (une seule fois par projectile).
  function crit(t) {
    if (t.rpgc || $ || U) return;
    t.rpgc = 1;
    const b = boosts()[t.k];
    if (!b || !b.crit) return;
    if (Math.random() < Math.min(0.75, b.crit)) {
      t.dmg *= 2 + b.critdmg;
      if (t.tx != null) ve(t.tx, t.ty - 8, "CRIT!", "#ffe066", 11);
    }
  }

  // ---- Interface ----------------------------------------------------------
  let tab = "hero",
    filter = "all",
    msg = "",
    bound = false;
  const TABS = [
    ["hero", "Héros"],
    ["inv", "Inventaire"],
    ["dun", "Donjons"],
    ["shop", "Clés"],
  ];
  function open(t) {
    if (t) tab = t;
    if (!bound) {
      bound = true;
      Ie.addEventListener("click", onClick);
    }
    if (!Q.user()) {
      Ne(
        `<div class="top"><button class="btn back" data-nav="home" data-focus>← Menu</button><h2>Mode RPG</h2></div><p class="hint">Le mode RPG demande un compte : ton équipement est enregistré sur ton compte.</p><div class="stack"><button class="btn go" data-nav="online">Se connecter ou créer un compte</button></div>`,
        "rpg",
      );
      return;
    }
    const r = S(),
      k = keys();
    let body = "";
    if (tab === "hero") body = heroHtml(r);
    else if (tab === "inv") body = invHtml(r);
    else if (tab === "dun") body = dunHtml(k);
    else body = shopHtml(r, k);
    const keyline = `<div class="rpg-keys">🗝️ Clés <b>${k}/${KEY_MAX}</b>${k < KEY_MAX ? ` · prochaine dans ${fmtTime(nextKeyIn())}` : ""}</div>`;
    Ne(
      `<div class="top"><button class="btn back" data-nav="home" data-focus>← Menu</button><h2>Mode RPG</h2></div>${Vt()}<div class="seg stick">${TABS.map(([id, nm]) => `<button class="${id === tab ? "on" : ""}" data-rpg="tab" data-k="${id}">${nm}</button>`).join("")}</div>${keyline}${msg ? `<p class="rpg-msg">${msg}</p>` : ""}${body}`,
      "rpg",
    );
    msg = "";
  }
  function heroHtml(r) {
    const slots = SLOTS.map((sl) => {
        const it = r.inv.find((i) => i.id === r.eq[sl.id]);
        return `<div class="rpg-slot"><div class="rpg-sh"><span>${sl.ico}</span><b>${sl.name}</b></div>${
          it
            ? itemHtml(it, `<button class="btn small" data-rpg="unequip" data-slot="${sl.id}">Retirer</button>`)
            : `<p class="note">Vide</p><button class="btn small" data-rpg="pick" data-slot="${sl.id}">Choisir une pièce</button>`
        }</div>`;
      }).join(""),
      B = boosts(),
      rows = st
        .filter((t) => Object.values(B[t]).some((x) => x))
        .map((t) => {
          const b = B[t],
            f = (x) => (x ? "+" + (x * 100).toFixed(1).replace(/\.0$/, "") + " %" : "–");
          return `<tr><th>${Le[t].short}</th><td>${f(b.dmg)}</td><td>${f(b.rate)}</td><td>${f(b.range)}</td><td>${f(b.crit)}</td><td>${f(b.critdmg)}</td></tr>`;
        })
        .join("");
    return `<div class="rpg-grid">${slots}</div><h3 class="qh">Boosts de tes tours</h3>${
      rows
        ? `<table class="tistats"><thead><tr><th></th><th>Dégâts</th><th>Cadence</th><th>Portée</th><th>Crit.</th><th>Dég. crit.</th></tr></thead><tbody>${rows}</tbody></table>`
        : `<p class="note">Équipe des pièces gagnées en donjon pour renforcer tes tours. Les boosts ne comptent ni en duel ni en coop.</p>`
    }`;
  }
  function invHtml(r) {
    const chips = [["all", "Tout"]].concat(SLOTS.map((s) => [s.id, s.ico])),
      list = r.inv
        .filter((i) => filter === "all" || i.slot === filter)
        .sort((a, b) => b.r - a.r || b.lv - a.lv);
    return `<div class="seg small">${chips.map(([id, nm]) => `<button class="${id === filter ? "on" : ""}" data-rpg="filter" data-k="${id}" title="${id === "all" ? "Tout" : slotOf(id).name}">${nm}</button>`).join("")}</div><p class="note">${r.inv.length}/${INV_MAX} pièces</p><div class="rpg-grid">${
      list
        .map((it) => {
          const eq = r.eq[it.slot] === it.id;
          return itemHtml(
            it,
            `<div class="rpg-act"><span class="chip">${slotOf(it.slot).ico} ${slotOf(it.slot).name}</span>${
              eq
                ? '<span class="chip">Équipée</span>'
                : `<button class="btn small go" data-rpg="equip" data-id="${it.id}">Équiper</button><button class="btn small" data-rpg="sell" data-id="${it.id}">Vendre +${RARITY[it.r].sell} ${qe.scale}</button>`
            }</div>`,
          );
        })
        .join("") || '<p class="note">Aucune pièce. Gagne des donjons pour en trouver.</p>'
    }</div>`;
  }
  let sel = {}; // niveau choisi par biome
  function dunHtml(k) {
    const r = S(),
      rows = ue
        .map((b, bi) => {
          if (!js(bi)) return `<div class="rpg-dun lock"><b>${Rt} ${b.name}</b><small>Termine le biome précédent en Facile</small></div>`;
          const done = r.dun[bi] || 0,
            top = Math.min(DUN_LEVELS, done + 1),
            cur = Math.min(sel[bi] || top, top),
            btns = [];
          for (let n = 1; n <= DUN_LEVELS; n++)
            btns.push(`<button class="btn small ${n === cur ? "go" : ""}" data-rpg="sel" data-b="${bi}" data-k="${n}" ${n > top ? "disabled" : ""}>${n > top ? Rt : n}</button>`);
          const drops = RARITY.filter((_, i) => MIN_LEVEL[i] <= cur)
              .map((x) => `<span style="color:${x.color}">${x.name}</span>`)
              .join(", "),
            nxt = RARITY.findIndex((_, i) => MIN_LEVEL[i] > cur),
            hint = nxt >= 0 ? ` · ${RARITY[nxt].name} dès le niveau ${MIN_LEVEL[nxt]}` : "";
          return `<div class="rpg-dun"><b>${b.name}</b><small>Niveau ${cur} · Terminés : ${done}/${DUN_LEVELS}</small><div class="rpg-act" style="flex-wrap:wrap">${btns.join("")}</div><small>Butin : ${drops}${hint}</small><button class="btn go" data-rpg="dungeon" data-b="${bi}" data-k="${cur}" ${k >= levelCost(cur) ? "" : "disabled"}>Entrer · ${levelCost(cur)} 🗝️</button></div>`;
        })
        .join("");
    return `<p class="note">Chaque donjon a 10 niveaux : termine un niveau pour débloquer le suivant. Les raretés les plus hautes ne tombent qu'à partir de certains niveaux. Une victoire rapporte une pièce (une de plus avec 3 étoiles, une de plus avec Bastion+). Si le cristal est brisé, la clé est perdue.</p>${rows}`;
  }
  function shopHtml(r, k) {
    const n = paidToday(),
      c = PAID_COST[n],
      cost = c ? `${c.n} ${c.cur === "gems" ? qe.gem : qe.scale}` : "";
    const can = c && k < KEY_MAX && (c.cur === "gems" ? v.gems || 0 : v.scales) >= c.n;
    return `<p class="note">Stock maximum ${KEY_MAX} clés. Recharge naturelle : 1 clé toutes les 3 heures, même hors ligne.</p><div class="rpg-dun"><b>Recharge de clés (+${PAID_KEYS})</b><small>${n}/${PAID_DAILY} aujourd'hui · les 2 premières en écailles, les suivantes en gemmes</small>${
      c
        ? `<button class="btn go" data-rpg="buykeys" ${can ? "" : "disabled"}>Acheter +${PAID_KEYS} clés · ${cost}</button>`
        : `<p class="note">Limite du jour atteinte.</p>`
    }</div><p class="note">La boutique complète (ressources, packs, abonnement) arrive plus tard.</p>`;
  }

  // ---- Actions ------------------------------------------------------------
  function onClick(e) {
    const b = e.target.closest("[data-rpg]");
    if (!b || b.disabled || !Q.user()) return;
    const r = S(),
      a = b.dataset.rpg;
    if (a === "tab") tab = b.dataset.k;
    else if (a === "filter") filter = b.dataset.k;
    else if (a === "pick") {
      tab = "inv";
      filter = b.dataset.slot;
    } else if (a === "equip") {
      const it = r.inv.find((i) => i.id === b.dataset.id);
      if (it) {
        r.eq[it.slot] = it.id;
        cache = null;
        me();
        tab = "hero";
      }
    } else if (a === "unequip") {
      delete r.eq[b.dataset.slot];
      cache = null;
      me();
    } else if (a === "sell") {
      const i = r.inv.findIndex((x) => x.id === b.dataset.id);
      if (i >= 0 && r.eq[r.inv[i].slot] !== r.inv[i].id) {
        v.scales += RARITY[r.inv[i].r].sell;
        r.inv.splice(i, 1);
        me();
      }
    } else if (a === "buykeys") {
      const n = paidToday(),
        c = PAID_COST[n];
      if (c && keys() < KEY_MAX && (c.cur === "gems" ? v.gems || 0 : v.scales) >= c.n) {
        if (c.cur === "gems") v.gems -= c.n;
        else v.scales -= c.n;
        const full = r.keys >= KEY_MAX;
        r.keys = Math.min(KEY_MAX, r.keys + PAID_KEYS);
        if (full) r.keyT = Date.now();
        r.paid.n++;
        me();
        msg = `+${PAID_KEYS} clés !`;
      }
    } else if (a === "sel") sel[+b.dataset.b] = +b.dataset.k;
    else if (a === "dungeon") {
      startDungeon(+b.dataset.b, +b.dataset.k);
      return;
    } else if (a === "open") tab = b.dataset.k || tab;
    open();
  }
  function startDungeon(b, k) {
    const cost = levelCost(k),
      r = S();
    if (!js(b) || k < 1 || k > DUN_LEVELS || k > (r.dun[b] || 0) + 1) return;
    if (r.inv.length >= INV_MAX) {
      msg = "Inventaire plein : vends des pièces.";
      tab = "inv";
      open();
      return;
    }
    if (!spendKeys(cost)) {
      msg = "Pas assez de clés.";
      open();
      return;
    }
    me();
    Va(b);
    Ct();
    xs(levelDiff(k), DUNGEON_LEVEL);
    const m = levelHp(k);
    if (m !== 1) for (const w of l.waves) w.hm = (w.hm || 1) * m;
    l.dungeon = { b, k, cost };
  }
  // Appelé par Ro() (fin de partie) quand l.dungeon existe : donne le butin et affiche le résultat.
  function finish(won, quit) {
    const d = l.dungeon,
      r = S(),
      stars = won ? (l.crystal.hp / l.crystal.max >= 0.8 ? 3 : 1) : 0,
      loot = [];
    if (won) {
      const n = (stars === 3 ? 2 : 1) + (Ge() ? 1 : 0), // Bastion+ : une pièce de plus
        ilvl = 1 + d.b * 4 + (d.k - 1);
      if ((r.dun[d.b] || 0) < d.k) {
        r.dun[d.b] = d.k;
        d.fresh = true;
      }
      for (let i = 0; i < n; i++) loot.push(rollItem(SLOTS[Math.floor(Math.random() * SLOTS.length)].id, rollRarity(d.k), ilvl));
      r.inv.push(...loot);
      if (typeof et == "function") et("win");
    }
    v.games++;
    me();
    const head = won ? '<h2 style="color:var(--gold)">Donjon réussi !</h2>' : quit ? "<h2>Donjon abandonné</h2>" : '<h2 style="color:var(--red)">Le cristal est brisé…</h2>',
      body = won
        ? `<div class="rpg-grid">${loot.map((it) => itemHtml(it)).join("")}</div>`
        : `<p class="note">La clé est perdue. Retente ta chance !</p>`;
    setTimeout(
      () =>
        Ne(
          `${head}<p>${ue[d.b].name} · Niveau ${d.k}${won && d.fresh && d.k < DUN_LEVELS ? " — niveau " + (d.k + 1) + " débloqué !" : ""}</p>${body}<div class="stack"><button class="btn go" data-rpg="dungeon" data-b="${d.b}" data-k="${d.k}" ${keys() >= d.cost ? "" : "disabled"} data-focus>Rejouer · ${d.cost} 🗝️</button><button class="btn" data-rpg="open" data-k="inv">Inventaire</button><button class="btn" data-nav="home">Menu principal</button></div>`,
          "rpg",
        ),
      quit ? 0 : 800,
    );
  }
  return { open, apply, crit, finish, _test: { rarityStats: () => { const o = {}; for (const k of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) { const c = [0, 0, 0, 0, 0]; for (let i = 0; i < 4000; i++) c[rollRarity(k)]++; o[k] = c; } return o; }, S, keys, rollItem, boosts, SLOTS, RARITY, STATS, KEY_MAX, KEY_MS, startDungeon, resetCache: () => (cache = null) } };
})();
