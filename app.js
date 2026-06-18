const MENU_ITEMS = [
  { name: "Nasi Lemak", category: "本地饭面", emoji: "🍚" },
  { name: "海南鸡饭", category: "本地饭面", emoji: "🍗" },
  { name: "Char Kway Teow", category: "本地饭面", emoji: "🍜" },
  { name: "Curry Laksa", category: "本地饭面", emoji: "🥥" },
  { name: "Asam Laksa", category: "本地饭面", emoji: "🐟" },
  { name: "Nasi Kandar", category: "本地饭面", emoji: "🍛" },
  { name: "Nasi Kerabu", category: "本地饭面", emoji: "💙" },
  { name: "Mee Goreng Mamak", category: "本地饭面", emoji: "🍜" },
  { name: "Pan Mee 板面", category: "本地饭面", emoji: "🥢" },
  { name: "Ipoh Hor Fun", category: "本地饭面", emoji: "🍲" },
  { name: "云吞面", category: "本地饭面", emoji: "🍜" },
  { name: "福建面", category: "本地饭面", emoji: "🦐" },

  { name: "Roti Canai", category: "Mamak小吃", emoji: "🫓" },
  { name: "Murtabak", category: "Mamak小吃", emoji: "🥙" },
  { name: "Satay 沙爹", category: "Mamak小吃", emoji: "🍢" },
  { name: "Otak-Otak", category: "Mamak小吃", emoji: "🐟" },
  { name: "Lok Lok", category: "Mamak小吃", emoji: "🍡" },
  { name: "Popiah 薄饼", category: "Mamak小吃", emoji: "🌯" },
  { name: "Apam Balik", category: "Mamak小吃", emoji: "🥞" },
  { name: "Pisang Goreng", category: "Mamak小吃", emoji: "🍌" },
  { name: "Ayam Penyet", category: "Mamak小吃", emoji: "🍗" },
  { name: "Ramly Burger", category: "Mamak小吃", emoji: "🍔" },

  { name: "肉骨茶", category: "中餐火锅", emoji: "🍲" },
  { name: "麻辣火锅", category: "中餐火锅", emoji: "🔥" },
  { name: "港式点心", category: "中餐火锅", emoji: "🥟" },
  { name: "烧腊饭", category: "中餐火锅", emoji: "🍖" },
  { name: "川菜", category: "中餐火锅", emoji: "🌶️" },
  { name: "砂锅粥", category: "中餐火锅", emoji: "🥣" },
  { name: "煮炒大排档", category: "中餐火锅", emoji: "🥘" },
  { name: "干锅", category: "中餐火锅", emoji: "🍳" },
  { name: "酸菜鱼", category: "中餐火锅", emoji: "🐟" },
  { name: "小笼包", category: "中餐火锅", emoji: "🥟" },

  { name: "日式拉面", category: "日韩", emoji: "🍜" },
  { name: "寿司", category: "日韩", emoji: "🍣" },
  { name: "日式烧肉", category: "日韩", emoji: "🥩" },
  { name: "日式咖喱", category: "日韩", emoji: "🍛" },
  { name: "韩式烤肉", category: "日韩", emoji: "🥩" },
  { name: "韩式炸鸡", category: "日韩", emoji: "🍗" },
  { name: "石锅拌饭", category: "日韩", emoji: "🍳" },
  { name: "部队锅", category: "日韩", emoji: "🍲" },

  { name: "意大利面", category: "西餐", emoji: "🍝" },
  { name: "牛排", category: "西餐", emoji: "🥩" },
  { name: "披萨", category: "西餐", emoji: "🍕" },
  { name: "西式早午餐", category: "西餐", emoji: "🍳" },
  { name: "Fish & Chips", category: "西餐", emoji: "🐟" },
  { name: "Chicken Chop", category: "西餐", emoji: "🍗" },
  { name: "墨西哥卷饼", category: "西餐", emoji: "🌯" },
  { name: "Cafe 简餐", category: "西餐", emoji: "☕" },

  { name: "McDonald's", category: "快餐", emoji: "🍟" },
  { name: "KFC", category: "快餐", emoji: "🍗" },
  { name: "Texas Chicken", category: "快餐", emoji: "🍗" },
  { name: "Subway", category: "快餐", emoji: "🥪" },
  { name: "Burger King", category: "快餐", emoji: "🍔" },
  { name: "便利店乱买", category: "快餐", emoji: "🛒" },

  { name: "CHAGEE 霸王茶姬", category: "奶茶饮料", emoji: "🧋" },
  { name: "Tealive", category: "奶茶饮料", emoji: "🧋" },
  { name: "Gong Cha", category: "奶茶饮料", emoji: "🧋" },
  { name: "KOI Thé", category: "奶茶饮料", emoji: "🧋" },
  { name: "Chatime", category: "奶茶饮料", emoji: "🧋" },
  { name: "Daboba", category: "奶茶饮料", emoji: "🐻" },
  { name: "Tiger Sugar", category: "奶茶饮料", emoji: "🐯" },
  { name: "Mixue 蜜雪冰城", category: "奶茶饮料", emoji: "🍦" },
  { name: "ZUS Coffee", category: "奶茶饮料", emoji: "☕" },
  { name: "The Alley 鹿角巷", category: "奶茶饮料", emoji: "🦌" },
  { name: "椰子冰沙", category: "奶茶饮料", emoji: "🥥" },
  { name: "Milo Dinosaur", category: "奶茶饮料", emoji: "🦕" },

  { name: "Cendol", category: "甜品", emoji: "🍧" },
  { name: "Ais Kacang / ABC", category: "甜品", emoji: "🍨" },
  { name: "Bingsu", category: "甜品", emoji: "🍧" },
  { name: "豆花", category: "甜品", emoji: "🥣" },
  { name: "冰淇淋", category: "甜品", emoji: "🍦" },
  { name: "蛋糕咖啡", category: "甜品", emoji: "🍰" },
  { name: "Soufflé Pancake", category: "甜品", emoji: "🥞" },
  { name: "Waffle", category: "甜品", emoji: "🧇" },
  { name: "Egg Tart 蛋挞", category: "甜品", emoji: "🥧" },
  { name: "Burnt Cheesecake", category: "甜品", emoji: "🍰" },
  { name: "Tang Yuan 汤圆", category: "甜品", emoji: "⚪" },
  { name: "榴莲甜品", category: "甜品", emoji: "💛" }
];

const CATEGORIES = ["全部", "本地饭面", "Mamak小吃", "中餐火锅", "日韩", "西餐", "快餐", "奶茶饮料", "甜品"];
const CATEGORY_ICONS = {
  "全部": "🎲", "本地饭面": "🇲🇾", "Mamak小吃": "🫓", "中餐火锅": "🥢",
  "日韩": "🍣", "西餐": "🍴", "快餐": "🍔", "奶茶饮料": "🧋", "甜品": "🍰"
};
const COLORS = ["#ff5d8f", "#ffd84d", "#62d6b4", "#69a7ff", "#ff8f4d", "#a77bf3"];
const MAX_WHEEL_ITEMS = 24;
const RESULT_COPY = [
  "命运都开口了，再拒绝就有点不给面子了。",
  "很好，今天不用进行第 47 次“你决定”会议。",
  "宇宙已下单建议，接下来只差真的下单。",
  "这个结果看起来很会哄 CELINE 开心。",
  "JAYDEN：收到，正在启动觅食雷达。",
  "不接受沉默式抗议，只接受加菜。",
  "选择困难症已暂时下线，请趁热行动。",
  "如果抽到奶茶，甜度由 CELINE 拥有最终解释权。"
];

const elements = {
  filters: document.querySelector("#filters"),
  count: document.querySelector("#option-count"),
  note: document.querySelector("#pool-note"),
  wheel: document.querySelector("#wheel"),
  wheelWrap: document.querySelector("#wheel-wrap"),
  spin: document.querySelector("#spin-button"),
  resultCard: document.querySelector("#result-card"),
  resultCategory: document.querySelector("#result-category"),
  resultName: document.querySelector("#result-name"),
  resultCopy: document.querySelector("#result-copy"),
  accept: document.querySelector("#accept-button"),
  retry: document.querySelector("#retry-button"),
  acceptedMessage: document.querySelector("#accepted-message"),
  confetti: document.querySelector("#confetti-layer"),
  photo: document.querySelector("#couple-photo")
};

let activeCategory = "全部";
let poolItems = [...MENU_ITEMS];
let wheelItems = sampleItems(poolItems, MAX_WHEEL_ITEMS);
let currentRotation = 0;
let isSpinning = false;
let selectedItem = null;

elements.photo.addEventListener("error", () => elements.photo.classList.add("missing"));

function randomIndex(length) {
  if (window.crypto?.getRandomValues) {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return values[0] % length;
  }
  return Math.floor(Math.random() * length);
}

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = randomIndex(index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function sampleItems(items, amount) {
  return shuffled(items).slice(0, Math.min(amount, items.length));
}

function renderFilters() {
  elements.filters.innerHTML = "";
  CATEGORIES.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${category === activeCategory ? " active" : ""}`;
    button.dataset.category = category;
    button.setAttribute("aria-pressed", String(category === activeCategory));
    button.textContent = `${CATEGORY_ICONS[category]} ${category}`;
    button.addEventListener("click", () => setCategory(category));
    elements.filters.appendChild(button);
  });
}

function updatePoolText() {
  elements.count.textContent = `${poolItems.length} 个选择`;
  elements.note.textContent = poolItems.length > MAX_WHEEL_ITEMS
    ? `完整池共 ${poolItems.length} 项；每次从全部选项中公平抽取，转盘显示其中 ${MAX_WHEEL_ITEMS} 项。`
    : `此分类的 ${poolItems.length} 项会全部显示在转盘上。`;
}

function setCategory(category) {
  if (isSpinning || category === activeCategory) return;
  activeCategory = category;
  poolItems = category === "全部" ? [...MENU_ITEMS] : MENU_ITEMS.filter((item) => item.category === category);
  wheelItems = sampleItems(poolItems, MAX_WHEEL_ITEMS);
  resetWheel();
  hideResult();
  renderFilters();
  updatePoolText();
  drawWheel();
}

function resetWheel() {
  currentRotation = 0;
  elements.wheelWrap.style.transition = "none";
  elements.wheelWrap.style.transform = "rotate(0deg)";
  void elements.wheelWrap.offsetWidth;
  elements.wheelWrap.style.transition = "";
}

function drawWheel() {
  const context = elements.wheel.getContext("2d");
  const size = elements.wheel.width;
  const center = size / 2;
  const radius = center - 8;
  const arc = Math.PI * 2 / wheelItems.length;
  const compact = wheelItems.length > 12;
  context.clearRect(0, 0, size, size);
  context.textAlign = "center";
  context.textBaseline = "middle";

  wheelItems.forEach((item, index) => {
    const start = -Math.PI / 2 - arc / 2 + index * arc;
    const middle = start + arc / 2;
    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, radius, start, start + arc);
    context.closePath();
    context.fillStyle = COLORS[index % COLORS.length];
    context.fill();
    context.strokeStyle = "#24172a";
    context.lineWidth = compact ? 3 : 5;
    context.stroke();

    context.save();
    context.translate(center + Math.cos(middle) * radius * .67, center + Math.sin(middle) * radius * .67);
    context.rotate(middle + Math.PI / 2);
    context.fillStyle = "#24172a";
    context.font = `900 ${compact ? 16 : 29}px "Microsoft YaHei", sans-serif`;
    context.strokeStyle = "rgba(255,255,255,.85)";
    context.lineWidth = compact ? 4 : 7;
    const label = `${item.emoji} ${shorten(item.name, compact ? 7 : 13)}`;
    context.strokeText(label, 0, 0);
    context.fillText(label, 0, 0);
    context.restore();
  });
}

function shorten(text, maxLength) {
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

function prepareSpinSelection() {
  selectedItem = poolItems[randomIndex(poolItems.length)];
  if (poolItems.length > MAX_WHEEL_ITEMS) {
    const others = sampleItems(poolItems.filter((item) => item !== selectedItem), MAX_WHEEL_ITEMS - 1);
    wheelItems = shuffled([selectedItem, ...others]);
    resetWheel();
    drawWheel();
  }
  return wheelItems.indexOf(selectedItem);
}

function spin() {
  if (isSpinning || poolItems.length === 0) return;
  isSpinning = true;
  hideResult();
  elements.spin.disabled = true;
  elements.spin.querySelector(".button-main").textContent = "命运正在认真思考…";

  const selectedIndex = prepareSpinSelection();
  const degreesPerSegment = 360 / wheelItems.length;
  const targetModulo = (360 - selectedIndex * degreesPerSegment) % 360;
  const currentModulo = ((currentRotation % 360) + 360) % 360;
  currentRotation += 360 * (5 + randomIndex(3)) + (targetModulo - currentModulo + 360) % 360;

  let completed = false;
  const finish = () => {
    if (completed) return;
    completed = true;
    isSpinning = false;
    elements.spin.disabled = false;
    elements.spin.querySelector(".button-main").textContent = "转！现在！马上！";
    showResult(selectedItem);
  };
  elements.wheelWrap.addEventListener("transitionend", finish, { once: true });
  requestAnimationFrame(() => {
    elements.wheelWrap.style.transform = `rotate(${currentRotation}deg)`;
  });
  window.setTimeout(finish, 5000);
}

function showResult(item) {
  elements.resultCategory.textContent = `${CATEGORY_ICONS[item.category]} ${item.category}`;
  elements.resultName.textContent = `${item.emoji} ${item.name}`;
  elements.resultCopy.textContent = RESULT_COPY[randomIndex(RESULT_COPY.length)];
  elements.acceptedMessage.hidden = true;
  elements.resultCard.setAttribute("aria-hidden", "false");
  elements.resultCard.classList.remove("show");
  void elements.resultCard.offsetWidth;
  elements.resultCard.classList.add("show");
  launchConfetti(55);
  window.setTimeout(() => elements.resultCard.scrollIntoView({ behavior: "smooth", block: "center" }), 180);
}

function hideResult() {
  elements.resultCard.classList.remove("show");
  elements.resultCard.setAttribute("aria-hidden", "true");
  elements.acceptedMessage.hidden = true;
}

function launchConfetti(amount) {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < amount; index += 1) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = `${randomIndex(100)}%`;
    piece.style.background = COLORS[randomIndex(COLORS.length)];
    piece.style.setProperty("--duration", `${2.8 + Math.random() * 2.2}s`);
    piece.style.setProperty("--drift", `${-100 + Math.random() * 200}px`);
    piece.style.setProperty("--spin", `${360 + randomIndex(720)}deg`);
    piece.style.animationDelay = `${Math.random() * .35}s`;
    fragment.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5600);
  }
  elements.confetti.appendChild(fragment);
}

elements.spin.addEventListener("click", spin);
elements.retry.addEventListener("click", () => {
  elements.resultCard.classList.remove("show");
  window.setTimeout(spin, 80);
});
elements.accept.addEventListener("click", () => {
  if (!selectedItem) return;
  elements.acceptedMessage.hidden = false;
  elements.accept.disabled = true;
  elements.accept.textContent = "已成交，不许反悔 ✓";
  launchConfetti(85);
  window.setTimeout(() => {
    elements.accept.disabled = false;
    elements.accept.textContent = "好，就这个！";
  }, 2600);
});

renderFilters();
updatePoolText();
drawWheel();

window.FOOD_WHEEL = {
  menuItems: MENU_ITEMS,
  categories: CATEGORIES,
  getPoolItems: () => [...poolItems],
  getWheelItems: () => [...wheelItems],
  getActiveCategory: () => activeCategory,
  isSpinning: () => isSpinning
};
