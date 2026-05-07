/* ============================================================
 * DATI SPETTACOLI
 * Modifica i campi di ogni spettacolo per inserire contenuti
 * reali (cast, foto, video). Lascia un array vuoto [] o null
 * per mostrare il messaggio "in aggiornamento".
 * ============================================================ */
const showsData = {
  "forza-venite-gente": {
    title: "Forza Venite Gente",
    category: "Musical",
    year: 2004,
    cover:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=1600",
    longDesc:
      "Il primo grande musical della Compagnia dell'Avellano, debuttato nel settembre 2004 alla Festa Patronale di Cameri. Un classico senza tempo che racconta la vita di San Francesco d'Assisi attraverso musica, danza e recitazione, e che ci ha portato sui palchi più suggestivi del Nord Italia — fino alla diretta NHK Japan TV da Orta nel 2005.",
    credits: [
      // { role: "Regia", name: "Da inserire" },
    ],
    cast: [
      // { role: "San Francesco", name: "Da inserire" },
    ],
    photos: [
      "https://images.unsplash.com/photo-1503095396549-807a8bc3667c?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=900",
    ],
    video: null, // es. "https://www.youtube.com/embed/VIDEO_ID"
    repliche: [
      { date: "Settembre 2004", location: "Cameri — Festa Patronale" },
      { date: "Dicembre 2004", location: "Novara — Castello" },
      { date: "Giugno 2005", location: "Arona" },
      { date: "Luglio 2005", location: "Orta — live NHK Japan TV" },
      { date: "Settembre 2005", location: "Vogogna — Castello" },
      { date: "Dicembre 2006", location: "Bernate Ticino" },
      { date: "Maggio 2009", location: "Cameri" },
      { date: "Maggio 2009", location: "Oleggio" },
    ],
  },

  joseph: {
    title: "Joseph",
    subtitle: "e la straordinaria tunica in technicolor",
    category: "Musical",
    year: 2006,
    cover:
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=1600",
    longDesc:
      "Un viaggio emozionante nella storia biblica di Giuseppe, tra tradimenti, sogni profetici e redenzione. Il musical, debuttato nel 2006, ha portato la nostra compagnia in tour tra Mesero, Trecate, Oleggio e Boffalora, raccontando una delle storie più potenti della tradizione con energia, costumi colorati e numeri musicali coinvolgenti.",
    credits: [],
    cast: [],
    photos: [
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1547153760-18fc86ef73a4?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=900",
    ],
    video: null,
    repliche: [
      { date: "Settembre 2006", location: "Cameri — Festa Patronale" },
      { date: "Marzo 2007", location: "Mesero" },
      { date: "Aprile 2007", location: "Trecate" },
      { date: "Aprile 2007", location: "Oleggio" },
      { date: "Maggio 2008", location: "Terdobbiate (annullato per maltempo)" },
      { date: "Giugno 2008", location: "Boffalora" },
    ],
  },

  pinocchio: {
    title: "Pinocchio",
    subtitle: "Il grande musical",
    category: "Musical",
    year: 2010,
    cover:
      "https://images.unsplash.com/photo-1503095396549-807a8bc3667c?auto=format&fit=crop&q=80&w=1600",
    longDesc:
      "La celebre favola di Collodi prende vita sul palco con musica, colori e la magia del teatro. Dieci repliche tra il 2010 e il 2014 ci hanno portato da Cameri a Varallo Sesia, Sordevolo, Galliate, Somma Lombardo, Borgomanero e Novara — la produzione più itinerante della nostra storia, capace di emozionare tre generazioni di spettatori.",
    credits: [],
    cast: [],
    photos: [
      "https://images.unsplash.com/photo-1503095396549-807a8bc3667c?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1532009324734-20a7a5813719?auto=format&fit=crop&q=80&w=900",
    ],
    video: null,
    repliche: [
      { date: "Settembre 2010", location: "Cameri — Festa Patronale" },
      { date: "Settembre 2010", location: "Varallo Sesia" },
      { date: "Marzo 2011", location: "Cameri" },
      { date: "Luglio 2011", location: "Sordevolo" },
      { date: "Settembre 2012", location: "Galliate" },
      { date: "Settembre 2012", location: "Somma Lombardo" },
      { date: "Novembre 2012", location: "Borgomanero" },
      { date: "Maggio 2014", location: "Galliate" },
      { date: "Novembre 2014", location: "Novara" },
      { date: "Dicembre 2014", location: "Somma Lombardo" },
    ],
  },

  aladin: {
    title: "Aladin",
    category: "Musical",
    year: 2015,
    cover:
      "https://images.unsplash.com/photo-1532009324734-20a7a5813719?auto=format&fit=crop&q=80&w=1600",
    longDesc:
      "Una nuova avventura sul filo della fiaba di Aladino, tra magia, ironia e numeri musicali. Una produzione vivace e colorata che ha riportato la compagnia sul palco di Cameri nell'ottobre 2015, esplorando l'universo dei desideri, dell'amicizia e della libertà.",
    credits: [],
    cast: [],
    photos: [
      "https://images.unsplash.com/photo-1532009324734-20a7a5813719?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=900",
    ],
    video: null,
    repliche: [{ date: "Ottobre 2015", location: "Cameri" }],
  },

  "cercasi-cenerentola": {
    title: "Cercasi Cenerentola",
    category: "Musical",
    year: 2018,
    cover:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=1600",
    longDesc:
      "Cercasi Cenerentola è un musical meraviglioso e coinvolgente ideato da Stefano D'Orazio dei Pooh, con le musiche di Stefano Cenci. La storia riprende in chiave moderna una delle favole tradizionali che ha attraversato tutte le generazioni. La Compagnia dell'Avellano l'ha riproposta in scena con la regia di Tiziana Messina, che dirige attori e ballerini in una storia coinvolgente e romantica, con una colonna sonora suonata interamente dal vivo dalla nostra Band.",
    credits: [
      { role: "Libretto", name: "Stefano D'Orazio (Pooh)" },
      { role: "Musiche", name: "Stefano Cenci" },
      { role: "Regia", name: "Tiziana Messina" },
      { role: "Musica dal vivo", name: "Band della Compagnia dell'Avellano" },
    ],
    cast: [],
    photos: [
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1547153760-18fc86ef73a4?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=900",
    ],
    video: null,
    repliche: [
      {
        date: "Settembre 2018",
        location: "Cameri (annullato per maltempo)",
      },
      { date: "Ottobre 2018", location: "Cameri" },
      { date: "Giugno 2019", location: "Galliate" },
    ],
  },

  "natale-di-olaf": {
    title: "Il Natale di Olaf",
    category: "Mini-Musical",
    year: 2021,
    cover:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1600",
    longDesc:
      "La magia del Natale raccontata attraverso gli occhi del pupazzo di neve più amato. Un mini-musical pensato per le festività, riproposto a Cameri in più stagioni — dal debutto previsto nel 2021 (annullato per la pandemia) alle repliche del 2022 e 2024, che hanno portato la nostra famiglia teatrale a riempire più volte il palco con luci, neve e canti natalizi.",
    credits: [],
    cast: [],
    photos: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1503095396549-807a8bc3667c?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1532009324734-20a7a5813719?auto=format&fit=crop&q=80&w=900",
    ],
    video: null,
    repliche: [
      { date: "Dicembre 2021", location: "Cameri (annullato per pandemia)" },
      { date: "3 dicembre 2022", location: "Cameri" },
      { date: "4 dicembre 2022", location: "Cameri (3 repliche)" },
      { date: "14 dicembre 2024", location: "Cameri" },
      { date: "15 dicembre 2024", location: "Cameri (2 repliche)" },
    ],
  },
};

/* ============================================================
 * UTILITIES
 * ============================================================ */
function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ============================================================
 * MODALE: rendering del contenuto da showsData
 * ============================================================ */
function renderShow(showId) {
  const data = showsData[showId];
  if (!data) return "";

  const subtitle = data.subtitle
    ? `<p class="modal-subtitle">${escapeHtml(data.subtitle)}</p>`
    : "";

  const creditsHtml = data.credits.length
    ? `<dl class="modal-credits">${data.credits
        .map(
          (c) =>
            `<div class="modal-credit-row"><dt>${escapeHtml(c.role)}</dt><dd>${escapeHtml(
              c.name,
            )}</dd></div>`,
        )
        .join("")}</dl>`
    : "";

  const castHtml = data.cast.length
    ? `<ul class="modal-cast-list">${data.cast
        .map(
          (c) =>
            `<li><span class="modal-cast-role">${escapeHtml(c.role)}</span><span class="modal-cast-name">${escapeHtml(c.name)}</span></li>`,
        )
        .join("")}</ul>`
    : `<p class="modal-empty">Cast in aggiornamento.</p>`;

  const photosHtml = data.photos.length
    ? `<div class="modal-gallery">${data.photos
        .map(
          (url, i) =>
            `<figure class="modal-photo"><img src="${escapeHtml(url)}" alt="Foto ${i + 1} di ${escapeHtml(data.title)}" loading="lazy" /></figure>`,
        )
        .join("")}</div>`
    : `<p class="modal-empty">Galleria fotografica in arrivo.</p>`;

  const videoHtml = data.video
    ? `<div class="modal-video"><iframe src="${escapeHtml(data.video)}" title="Video di ${escapeHtml(data.title)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`
    : `<p class="modal-empty">Video in arrivo.</p>`;

  const replicheHtml = `<ol class="modal-repliche">${data.repliche
    .map(
      (r) =>
        `<li><span class="modal-repliche-date">${escapeHtml(r.date)}</span><span class="modal-repliche-loc">${escapeHtml(r.location)}</span></li>`,
    )
    .join("")}</ol>`;

  return `
    <div class="modal-hero">
      <img src="${escapeHtml(data.cover)}" alt="${escapeHtml(data.title)}" />
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-text">
        <span class="modal-category">${escapeHtml(data.category)} • ${data.year}</span>
        <h2 class="modal-title" id="modal-title">${escapeHtml(data.title)}</h2>
        ${subtitle}
      </div>
    </div>

    <div class="modal-body">
      <section class="modal-section">
        <p class="modal-long-desc">${escapeHtml(data.longDesc)}</p>
        ${creditsHtml}
      </section>

      <section class="modal-section">
        <h3 class="modal-section-title">Cast</h3>
        ${castHtml}
      </section>

      <section class="modal-section">
        <h3 class="modal-section-title">Foto di scena</h3>
        ${photosHtml}
      </section>

      <section class="modal-section">
        <h3 class="modal-section-title">Video</h3>
        ${videoHtml}
      </section>

      <section class="modal-section">
        <h3 class="modal-section-title">
          Repliche
          <span class="modal-section-count">${data.repliche.length}</span>
        </h3>
        ${replicheHtml}
      </section>
    </div>
  `;
}

/* ============================================================
 * MODALE: open / close
 * ============================================================ */
const modal = document.getElementById("show-modal");
const modalContent = document.getElementById("show-modal-content");
const modalPanel = modal && modal.querySelector(".show-modal-panel");
const modalCloseBtn = modal && modal.querySelector(".show-modal-close");
let lastFocusedCard = null;

function openModal(showId, triggerEl) {
  if (!modal) return;
  const html = renderShow(showId);
  if (!html) return;
  modalContent.innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (modalPanel) modalPanel.scrollTop = 0;
  lastFocusedCard = triggerEl || null;
  setTimeout(() => modalCloseBtn && modalCloseBtn.focus(), 80);
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  setTimeout(() => {
    if (!modal.classList.contains("open")) modalContent.innerHTML = "";
  }, 350);
  if (lastFocusedCard) {
    lastFocusedCard.focus();
    lastFocusedCard = null;
  }
}

if (modal) {
  modal.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  document.querySelectorAll(".card[data-show]").forEach((card) => {
    const open = () => openModal(card.dataset.show, card);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}

/* ============================================================
 * HEADER scroll
 * ============================================================ */
const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 80);
});

/* ============================================================
 * MOBILE menu
 * ============================================================ */
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mainNav.classList.toggle("open");
  document.body.classList.toggle("nav-open", mainNav.classList.contains("open"));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    mainNav.classList.remove("open");
    document.body.classList.remove("nav-open");
  });
});

document.addEventListener("click", (e) => {
  if (
    mainNav.classList.contains("open") &&
    !mainNav.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    menuToggle.classList.remove("active");
    mainNav.classList.remove("open");
    document.body.classList.remove("nav-open");
  }
});

/* ============================================================
 * REVEAL animations
 * ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ============================================================
 * COUNTER animation
 * ============================================================ */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        if (isNaN(target)) return;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current;
        }, 40);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);

document
  .querySelectorAll(".stat-number[data-target]")
  .forEach((el) => counterObserver.observe(el));

/* ============================================================
 * Active nav link on scroll
 * ============================================================ */
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
