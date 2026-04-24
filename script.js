const data = {
  work: [
    {
      id: "stripe",
      title: "Stripe",
      role: "Staff Designer",
      period: "2024-Present",
      detail:
        "Focused on core Dashboard experiences that help business owners run and grow their companies.",
      cases: ["assets/01_scd", "assets/02_stripe"],
    },
    {
      id: "heirloom",
      title: "Heirloom",
      role: "Head of Design",
      period: "2022-24",
      detail:
        "Built the product design function and set early product direction, UX principles, and quality bar.",
      cases: ["assets/03_heirloom"],
    },
    {
      id: "lyft",
      title: "Lyft",
      role: "Staff Designer",
      period: "2019-22",
      detail:
        "Worked on rider and driver lifecycle flows, improving reliability and conversion at key journeys.",
      cases: ["assets/04_lyft"],
    },
  ],
  career: [
    {
      id: "linkedin",
      title: "LinkedIn",
      role: "Senior Designer",
      period: "2015-18",
      detail:
        "Created marketplace and profile experiences with measurable impact on discovery and engagement.",
      cases: ["assets/05_linkedin"],
    },
    {
      id: "fullscreen",
      title: "Fullscreen",
      role: "Designer",
      period: "2012-15",
      detail:
        "Defined creator-focused product UX patterns and established reusable component foundations.",
      cases: ["assets/06_fullscreen"],
    },
  ],
};

const listEl = document.getElementById("experience-list");
const titleEl = document.getElementById("experience-title");
const caseDescEl = document.getElementById("case-study-description");
const caseGridEl = document.getElementById("case-grid");
const themeToggle = document.getElementById("theme-toggle");
const themeKnob = document.querySelector(".knob");

let activeTab = "work";
let activeRowId = data.work[0].id;

function renderCaseCards(entry) {
  caseDescEl.textContent = `${entry.title} selected. Case study assets can be dropped into the folders below and surfaced in this panel.`;
  caseGridEl.innerHTML = entry.cases
    .map((path) => `<article class="case-card">${path}</article>`)
    .join("");
  titleEl.textContent = entry.title;
}

function renderRows() {
  const entries = data[activeTab];
  if (!entries.some((item) => item.id === activeRowId)) {
    activeRowId = entries[0]?.id;
  }

  listEl.innerHTML = entries
    .map((entry) => {
      const isOpen = entry.id === activeRowId;
      return `
      <article class="experience-row ${isOpen ? "is-open" : ""}" data-id="${entry.id}">
        <button class="experience-summary" type="button" aria-expanded="${isOpen}">
          <span class="experience-meta">
            <h3>${entry.title}</h3>
            <p>${entry.role}</p>
          </span>
          <span class="period">${entry.period}</span>
        </button>
        <div class="experience-detail">${entry.detail}</div>
      </article>
    `;
    })
    .join("");

  const selectedEntry = entries.find((item) => item.id === activeRowId);
  if (selectedEntry) {
    renderCaseCards(selectedEntry);
  }
}

document.addEventListener("click", (event) => {
  const tabButton = event.target.closest(".tab-button");
  if (tabButton) {
    activeTab = tabButton.dataset.tab;
    document.querySelectorAll(".tab-button").forEach((button) => {
      const isActive = button === tabButton;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    activeRowId = data[activeTab][0].id;
    renderRows();
    return;
  }

  const rowButton = event.target.closest(".experience-summary");
  if (rowButton) {
    const row = rowButton.closest(".experience-row");
    activeRowId = row.dataset.id;
    renderRows();
    return;
  }

  if (event.target.closest("#theme-toggle")) {
    const body = document.body;
    const nextTheme = body.dataset.theme === "day" ? "night" : "day";
    body.dataset.theme = nextTheme;
    themeKnob.style.transform = nextTheme === "day" ? "translateX(15px)" : "translateX(0)";
  }
});

renderRows();
