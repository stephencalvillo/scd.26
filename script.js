const data = {
  work: [
    {
      id: "scd",
      title: "SCD.26 - Founder",
      period: "Current",
      detail:
        "Building independent product and design systems experiments focused on clear user outcomes.",
      cases: ["assets/01_scd", "assets/03_heirloom", "assets/08_photography"],
    },
    {
      id: "stripe",
      title: "Stripe - Product Design",
      period: "Previous",
      detail:
        "Designed and shipped platform workflows with a focus on trust, clarity, and operational scale.",
      cases: ["assets/02_stripe"],
    },
    {
      id: "lyft",
      title: "Lyft - Product Design",
      period: "Previous",
      detail:
        "Worked on rider and driver lifecycle flows, improving reliability and conversion at key journeys.",
      cases: ["assets/04_lyft"],
    },
  ],
  career: [
    {
      id: "linkedin",
      title: "LinkedIn - Product Design",
      period: "Career Milestone",
      detail:
        "Created marketplace and profile experiences with measurable impact on discovery and engagement.",
      cases: ["assets/05_linkedin"],
    },
    {
      id: "fullscreen",
      title: "Fullscreen - Product Design",
      period: "Early Career",
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
            <p>${entry.period}</p>
          </span>
          <span>${isOpen ? "−" : "+"}</span>
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
    themeToggle.querySelector(".theme-text").textContent =
      nextTheme === "day" ? "Night mode" : "Day mode";
  }
});

renderRows();
