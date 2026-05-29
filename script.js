const products = [
  {
    name: "Bicycle Rider Back",
    type: "Покер",
    subtype: "Standard index",
    material: "Бумага",
    finish: "Air-cushion",
    cards: "52 + 2 джокера",
    price: 790,
    color: "#c23535",
    bg: "#f4e7e0",
    suit: "♠",
    description: "Классическая колода для домашних партий, покера и карточных игр на каждый день."
  },
  {
    name: "Bicycle Jumbo",
    type: "Покер",
    subtype: "Jumbo index",
    material: "Бумага",
    finish: "Air-cushion",
    cards: "52 + 2 джокера",
    price: 890,
    color: "#2f5d8f",
    bg: "#e5edf5",
    suit: "♥",
    description: "Крупные индексы проще читать за большим столом и при слабом освещении."
  },
  {
    name: "Copag 1546",
    type: "Покер",
    subtype: "Пластиковые",
    material: "Пластик",
    finish: "Гладкое покрытие",
    cards: "52 + 2 джокера",
    price: 1490,
    color: "#2f6d5f",
    bg: "#dfeee9",
    suit: "♣",
    description: "Гибкая пластиковая колода для частой игры, устойчивая к влаге и износу."
  },
  {
    name: "Bridge Club",
    type: "Бридж",
    subtype: "Узкий формат",
    material: "Бумага",
    finish: "Linen finish",
    cards: "52 + 3 джокера",
    price: 680,
    color: "#b88931",
    bg: "#f2eadc",
    suit: "♦",
    description: "Узкие карты удобно держать веером, особенно в партиях с большим количеством карт."
  },
  {
    name: "Solitaire Mini",
    type: "Пасьянс",
    subtype: "Mini deck",
    material: "Бумага",
    finish: "Матовый лак",
    cards: "52 карты",
    price: 430,
    color: "#7d5368",
    bg: "#f0e5eb",
    suit: "♥",
    description: "Компактная колода для пасьянсов, поездок и небольшого игрового стола."
  },
  {
    name: "Patience Double Set",
    type: "Пасьянс",
    subtype: "Двойная колода",
    material: "Бумага",
    finish: "Матовый лак",
    cards: "2 x 52 карты",
    price: 960,
    color: "#4e5f82",
    bg: "#e5e9f2",
    suit: "♠",
    description: "Две согласованные мини-колоды для сложных пасьянсов и раскладов."
  },
  {
    name: "Mystic Stage",
    type: "Фокусы",
    subtype: "Marked deck",
    material: "Бумага",
    finish: "Smooth finish",
    cards: "52 + 2 джокера",
    price: 1250,
    color: "#202124",
    bg: "#e9e7e2",
    suit: "♣",
    description: "Маркированная колода для карточной магии, тренировок и сценических номеров."
  },
  {
    name: "Svengali Classic",
    type: "Фокусы",
    subtype: "Trick deck",
    material: "Бумага",
    finish: "Глянцевый лак",
    cards: "специальный набор",
    price: 1180,
    color: "#8b2f44",
    bg: "#f0e0e4",
    suit: "♦",
    description: "Трюковая колода для быстрых эффектов с выбранной картой и визуальными сменами."
  },
  {
    name: "Art Nouveau",
    type: "Коллекционные",
    subtype: "Подарочная серия",
    material: "Бумага",
    finish: "Золотое тиснение",
    cards: "52 + 2 джокера",
    price: 1790,
    color: "#b88931",
    bg: "#f4eddc",
    suit: "♥",
    description: "Декоративная серия с плотной коробкой, контрастными мастями и тиснением."
  },
  {
    name: "Black Monarch",
    type: "Коллекционные",
    subtype: "Премиум",
    material: "Бумага",
    finish: "Soft touch",
    cards: "52 + 2 джокера",
    price: 2190,
    color: "#202124",
    bg: "#e4e3df",
    suit: "♠",
    description: "Премиальная колода в строгом оформлении для подарка, коллекции и демонстраций."
  },
  {
    name: "Kids Animals",
    type: "Детские",
    subtype: "Обучающие",
    material: "Ламинированные",
    finish: "Защитная пленка",
    cards: "36 карт",
    price: 520,
    color: "#d16b3f",
    bg: "#f5e4da",
    suit: "♦",
    description: "Яркая семейная колода с крупными символами и устойчивым ламинированием."
  },
  {
    name: "Travel Waterproof",
    type: "Дорожные",
    subtype: "Водостойкие",
    material: "Пластик",
    finish: "Текстурный пластик",
    cards: "52 + 2 джокера",
    price: 990,
    color: "#2f6d5f",
    bg: "#deede9",
    suit: "♣",
    description: "Легкая водостойкая колода для поездок, пикников и игры на открытом воздухе."
  }
];

const state = {
  type: "Все",
  subtype: "Все",
  material: "Все",
  query: ""
};

const formatPrice = new Intl.NumberFormat("ru-RU").format;

const productGrid = document.querySelector("#productGrid");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const quickCards = document.querySelectorAll(".quick-card");

function uniqueValues(key) {
  return ["Все", ...new Set(products.map((product) => product[key]))];
}

function renderFilters() {
  renderChipGroup("#typeFilters", uniqueValues("type"), "type");
  renderChipGroup("#subtypeFilters", uniqueValues("subtype"), "subtype");
  renderChipGroup("#materialFilters", uniqueValues("material"), "material");
}

function renderChipGroup(selector, values, key) {
  const container = document.querySelector(selector);
  container.innerHTML = values
    .map((value) => {
      const active = state[key] === value ? " is-active" : "";
      return `<button class="chip${active}" type="button" data-filter="${key}" data-value="${value}">${value}</button>`;
    })
    .join("");
}

function getFilteredProducts() {
  const query = state.query.trim().toLowerCase();

  return products.filter((product) => {
    const byType = state.type === "Все" || product.type === state.type;
    const bySubtype = state.subtype === "Все" || product.subtype === state.subtype;
    const byMaterial = state.material === "Все" || product.material === state.material;
    const searchable = [
      product.name,
      product.type,
      product.subtype,
      product.material,
      product.finish,
      product.description
    ].join(" ").toLowerCase();

    return byType && bySubtype && byMaterial && searchable.includes(query);
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  resultCount.textContent = `${filteredProducts.length} из ${products.length} позиций`;

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-state">
        Ничего не найдено. Попробуйте сбросить фильтр или изменить поисковый запрос.
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts.map((product) => `
    <article class="product-card">
      <div class="product-visual" style="--visual-bg: ${product.bg}; --deck-color: ${product.color};">
        <div class="deck-box" aria-hidden="true">
          <span>${product.suit}</span>
        </div>
      </div>
      <div class="product-body">
        <div class="product-topline">
          <span class="badge">${product.type} / ${product.subtype}</span>
          <span class="price">${formatPrice(product.price)} ₽</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="meta-list" aria-label="Характеристики">
          <span>Материал <b>${product.material}</b></span>
          <span>Покрытие <b>${product.finish}</b></span>
          <span>Состав <b>${product.cards}</b></span>
        </div>
      </div>
    </article>
  `).join("");
}

function updateQuickCards() {
  quickCards.forEach((card) => {
    const value = card.dataset.quick;
    card.classList.toggle("is-active", state.type === value || (state.type === "Все" && value === "Все"));
  });
}

document.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-filter]");
  const quick = event.target.closest("[data-quick]");

  if (chip) {
    state[chip.dataset.filter] = chip.dataset.value;
    renderFilters();
    updateQuickCards();
    renderProducts();
  }

  if (quick) {
    state.type = quick.dataset.quick;
    state.subtype = "Все";
    renderFilters();
    updateQuickCards();
    renderProducts();
  }
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

renderFilters();
renderProducts();
