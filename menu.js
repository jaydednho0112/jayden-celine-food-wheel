const FOOD_MENU = [
  ["Nasi Lemak", "本地饭面", "🍚", "椰浆饭 · 国民早餐", "rice"],
  ["海南鸡饭", "本地饭面", "🍗", "鸡香饭滑", "chicken"],
  ["Char Kway Teow", "本地饭面", "🍜", "镬气炒粿条", "noodles"],
  ["Curry Laksa", "本地饭面", "🥥", "浓郁椰香辣汤", "noodles"],
  ["Nasi Kandar", "本地饭面", "🍛", "咖喱淋到满足", "curry"],
  ["Pan Mee 板面", "本地饭面", "🥢", "干捞或汤面", "noodles"],
  ["Ipoh Hor Fun", "本地饭面", "🍲", "怡保滑鸡河粉", "noodles"],
  ["Mee Goreng Mamak", "本地饭面", "🍜", "酸甜微辣炒面", "noodles"],

  ["Roti Canai", "Mamak小吃", "🫓", "脆边印度煎饼", "bread"],
  ["Satay 沙爹", "Mamak小吃", "🍢", "花生酱烤肉串", "bbq"],
  ["Murtabak", "Mamak小吃", "🥙", "馅料满满煎饼", "bread"],
  ["Lok Lok", "Mamak小吃", "🍡", "想吃什么就拿什么", "skewer"],
  ["Ayam Penyet", "Mamak小吃", "🍗", "酥鸡配叁巴", "chicken"],
  ["Ramly Burger", "Mamak小吃", "🍔", "路边摊快乐汉堡", "burger"],

  ["肉骨茶", "中餐火锅", "🍲", "胡椒药材暖胃", "soup"],
  ["麻辣火锅", "中餐火锅", "🔥", "辣到感情升温", "hotpot"],
  ["港式点心", "中餐火锅", "🥟", "一笼怎么可能够", "dim-sum"],
  ["烧腊饭", "中餐火锅", "🍖", "叉烧烧肉双拼", "roast"],
  ["酸菜鱼", "中餐火锅", "🐟", "酸辣开胃", "fish"],
  ["小笼包", "中餐火锅", "🥟", "小心爆汁", "dim-sum"],

  ["日式拉面", "日韩", "🍜", "浓汤叉烧溏心蛋", "ramen"],
  ["寿司", "日韩", "🍣", "一口一个刚刚好", "sushi"],
  ["日式烧肉", "日韩", "🥩", "自己烤最有参与感", "bbq"],
  ["日式咖喱", "日韩", "🍛", "温柔浓郁", "curry"],
  ["韩式烤肉", "日韩", "🥩", "生菜包肉不算胖", "bbq"],
  ["韩式炸鸡", "日韩", "🍗", "脆皮配甜辣酱", "fried-chicken"],
  ["石锅拌饭", "日韩", "🍳", "锅巴才是灵魂", "rice"],
  ["部队锅", "日韩", "🍲", "芝士泡面热乎乎", "hotpot"],

  ["意大利面", "西餐", "🍝", "红酱白酱都可以", "pasta"],
  ["牛排", "西餐", "🥩", "今天认真约会", "steak"],
  ["披萨", "西餐", "🍕", "两个人分着吃", "pizza"],
  ["西式早午餐", "西餐", "🍳", "睡醒再决定", "breakfast"],
  ["Fish & Chips", "西餐", "🐟", "香脆炸鱼薯条", "fish"],
  ["Chicken Chop", "西餐", "🍗", "黑椒蘑菇任选", "chicken"],

  ["McDonald's", "快餐", "🍟", "稳定发挥", "burger"],
  ["KFC", "快餐", "🍗", "炸鸡不会背叛你", "fried-chicken"],
  ["Texas Chicken", "快餐", "🍗", "蜂蜜饼干也要", "fried-chicken"],
  ["Subway", "快餐", "🥪", "假装今天很健康", "sandwich"],

  ["CHAGEE 霸王茶姬", "奶茶饮料", "🧋", "伯牙绝弦安排上", "boba"],
  ["Tealive", "奶茶饮料", "🧋", "马来西亚奶茶日常", "boba"],
  ["Gong Cha", "奶茶饮料", "🧋", "珍珠奶盖都要", "boba"],
  ["KOI Thé", "奶茶饮料", "🧋", "黄金珍珠加一", "boba"],
  ["Mixue 蜜雪冰城", "奶茶饮料", "🍦", "甜蜜蜜预算友好", "icecream"],
  ["ZUS Coffee", "奶茶饮料", "☕", "咖啡续命", "coffee"],

  ["Cendol", "甜品", "🍧", "椰糖冰凉快乐", "dessert"],
  ["Ais Kacang / ABC", "甜品", "🍨", "配料越多越开心", "dessert"],
  ["Bingsu", "甜品", "🍧", "两个人吃一大碗", "dessert"],
  ["Burnt Cheesecake", "甜品", "🍰", "焦香浓郁", "cake"]
].map(([name, category, emoji, note, imageType], id) => ({ id, name, category, emoji, note, imageType }));

const CATEGORIES = [
  ["全部", "✨"], ["本地饭面", "🇲🇾"], ["Mamak小吃", "🫓"], ["中餐火锅", "🥢"],
  ["日韩", "🍣"], ["西餐", "🍴"], ["快餐", "🍔"], ["奶茶饮料", "🧋"], ["甜品", "🍰"]
];

const IMAGE_URLS = {
  rice: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  chicken: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
  noodles: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
  curry: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  bbq: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80",
  skewer: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  soup: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
  hotpot: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
  "dim-sum": "https://images.unsplash.com/photo-1563245370-7a8f9f7e7ab6?auto=format&fit=crop&w=600&q=80",
  roast: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80",
  fish: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=600&q=80",
  ramen: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=600&q=80",
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
  "fried-chicken": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
  pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
  steak: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  pizza: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
  breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80",
  sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
  boba: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80",
  icecream: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=600&q=80",
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  dessert: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
};

const elements = {
  tabs: document.querySelector("#category-tabs"),
  grid: document.querySelector("#food-grid"),
  search: document.querySelector("#search-input"),
  clearSearch: document.querySelector("#clear-search"),
  title: document.querySelector("#active-title"),
  emoji: document.querySelector("#active-emoji"),
  count: document.querySelector("#result-count"),
  empty: document.querySelector("#empty-state"),
  favoritesToggle: document.querySelector("#favorites-toggle"),
  selectionBar: document.querySelector("#selection-bar"),
  selectionSummary: document.querySelector("#selection-summary"),
  selectionCount: document.querySelector("#selection-count"),
  selectionNames: document.querySelector("#selection-names"),
  decide: document.querySelector("#decide-button"),
  dialog: document.querySelector("#selection-dialog"),
  selectedList: document.querySelector("#selected-list"),
  clearSelection: document.querySelector("#clear-selection"),
  joke: document.querySelector("#dialog-joke"),
  toast: document.querySelector("#toast")
};

let activeCategory = "全部";
let onlyFavorites = false;
let selected = new Set();
let favorites = new Set(JSON.parse(localStorage.getItem("jc-food-favorites") || "[]"));
let toastTimer;

function renderTabs() {
  elements.tabs.innerHTML = "";
  CATEGORIES.forEach(([category, emoji]) => {
    const button = document.createElement("button");
    button.className = `category-tab${category === activeCategory ? " active" : ""}`;
    button.type = "button";
    button.textContent = `${emoji} ${category}`;
    button.addEventListener("click", () => {
      activeCategory = category;
      onlyFavorites = false;
      elements.favoritesToggle.classList.remove("active");
      render();
    });
    elements.tabs.appendChild(button);
  });
}

function filteredItems() {
  const query = elements.search.value.trim().toLowerCase();
  return FOOD_MENU.filter((item) => {
    const matchesCategory = activeCategory === "全部" || item.category === activeCategory;
    const matchesQuery = !query || `${item.name} ${item.category} ${item.note}`.toLowerCase().includes(query);
    const matchesFavorite = !onlyFavorites || favorites.has(item.id);
    return matchesCategory && matchesQuery && matchesFavorite;
  });
}

function render() {
  renderTabs();
  const items = filteredItems();
  const categoryInfo = CATEGORIES.find(([name]) => name === activeCategory);
  elements.title.textContent = onlyFavorites ? "我的收藏" : activeCategory === "全部" ? "全部菜单" : activeCategory;
  elements.emoji.textContent = onlyFavorites ? "💗" : categoryInfo[1];
  elements.count.textContent = `${items.length} 个选择`;
  elements.grid.innerHTML = "";
  elements.empty.hidden = items.length !== 0;

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "food-card";
    card.innerHTML = `
      <div class="food-image-wrap">
        <img class="food-image" src="${IMAGE_URLS[item.imageType]}" alt="${item.name}" loading="lazy"
          onerror="this.hidden=true">
        <span class="food-fallback">${item.emoji}</span>
        <button class="favorite-button${favorites.has(item.id) ? " active" : ""}" type="button"
          aria-label="收藏 ${item.name}">${favorites.has(item.id) ? "♥" : "♡"}</button>
      </div>
      <div class="food-info">
        <span class="food-category">${item.category}</span>
        <h3>${item.emoji} ${item.name}</h3>
        <div class="food-bottom">
          <span class="food-note">${item.note}</span>
          <button class="add-button${selected.has(item.id) ? " selected" : ""}" type="button"
            aria-label="选择 ${item.name}">${selected.has(item.id) ? "✓" : "+"}</button>
        </div>
      </div>`;
    card.querySelector(".favorite-button").addEventListener("click", () => toggleFavorite(item));
    card.querySelector(".add-button").addEventListener("click", () => toggleSelected(item));
    elements.grid.appendChild(card);
  });
  updateSelectionBar();
}

function toggleFavorite(item) {
  favorites.has(item.id) ? favorites.delete(item.id) : favorites.add(item.id);
  localStorage.setItem("jc-food-favorites", JSON.stringify([...favorites]));
  showToast(favorites.has(item.id) ? `已收藏 ${item.name} 💗` : `已取消收藏 ${item.name}`);
  render();
}

function toggleSelected(item) {
  selected.has(item.id) ? selected.delete(item.id) : selected.add(item.id);
  showToast(selected.has(item.id) ? `${item.name} 加入今晚候选` : `${item.name} 已移除`);
  render();
}

function updateSelectionBar() {
  const chosen = FOOD_MENU.filter((item) => selected.has(item.id));
  elements.selectionCount.textContent = chosen.length;
  elements.selectionNames.textContent = chosen.length ? chosen.map((item) => item.name).join("、") : "还没选，快点菜";
  elements.decide.disabled = chosen.length === 0;
}

function openSelection() {
  const chosen = FOOD_MENU.filter((item) => selected.has(item.id));
  elements.selectedList.innerHTML = chosen.length ? "" : "<p>还没有选任何东西哦。</p>";
  chosen.forEach((item) => {
    const row = document.createElement("div");
    row.className = "selected-row";
    row.innerHTML = `
      <img src="${IMAGE_URLS[item.imageType]}" alt="" onerror="this.style.visibility='hidden'">
      <strong>${item.emoji} ${item.name}</strong>
      <button class="remove-selected" type="button" aria-label="移除 ${item.name}">×</button>`;
    row.querySelector("button").addEventListener("click", () => {
      selected.delete(item.id);
      render();
      openSelection();
    });
    elements.selectedList.appendChild(row);
  });
  elements.joke.textContent = chosen.length > 4
    ? "选得很好，下一个问题：我们的胃真的装得下吗？"
    : chosen.length > 1 ? "很好，至少已经从“随便”进化到“这几个都想吃”。" : "目标明确，立刻出发。";
  if (!elements.dialog.open) elements.dialog.showModal();
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 1700);
}

elements.search.addEventListener("input", () => {
  elements.clearSearch.hidden = !elements.search.value;
  render();
});
elements.clearSearch.addEventListener("click", () => {
  elements.search.value = "";
  elements.clearSearch.hidden = true;
  render();
});
elements.favoritesToggle.addEventListener("click", () => {
  onlyFavorites = !onlyFavorites;
  activeCategory = "全部";
  elements.favoritesToggle.classList.toggle("active", onlyFavorites);
  elements.favoritesToggle.textContent = onlyFavorites ? "♥" : "♡";
  render();
});
elements.selectionSummary.addEventListener("click", openSelection);
elements.decide.addEventListener("click", openSelection);
elements.clearSelection.addEventListener("click", () => {
  selected.clear();
  render();
  openSelection();
});

render();
