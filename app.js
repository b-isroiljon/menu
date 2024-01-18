const allMenuItems = [
  {
    id: 1,
    img: "./images/item-1.jpeg",
    category: "Breakfast",
    name: "Buttermilk Pancakes",
    price: "15.99$",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    img: "./images/item-7.jpeg",
    category: "Breakfast",
    name: "Bacon Overflow",
    price: "$8.99",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 3,
    img: "./images/item-4.jpeg",
    category: "Breakfast",
    name: "Country Delight",
    price: "15.99$",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 4,
    img: "./images/item-2.jpeg",
    category: "Lunch",
    name: "Diner Double",
    price: "15.99$",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 5,
    img: "./images/item-8.jpeg",
    category: "Lunch",
    name: "American Classic",
    price: "15.99$",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 6,
    img: "./images/item-5.jpeg",
    category: "Lunch",
    name: "Egg Attack",
    price: "15.99$",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 7,
    img: "./images/item-3.jpeg",
    category: "Shakes",
    name: "Godzilla Milkshake",
    price: "15.99$",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 8,
    img: "./images/item-6.jpeg",
    category: "Shakes",
    name: "Oreo Dream",
    price: "15.99$",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 9,
    img: "./images/item-9.jpeg",
    category: "Shakes",
    name: "Quarantine Buddy",
    price: "15.99$",
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },

  {
    img: "./images/item-10.jpeg",
    category: "Dinner",
    name: "Steak Dinner",
    price: "$30",
    info: "good stake",
  },
];

const menuSelector = document.querySelector(".btn-conteiner");
const mainSection = document.querySelector(".main-section");

const getHtmlMenuItem = (menuItem) => {
  // main div element
  const container = document.createElement("div");
  container.className = "menu-item";

  const image = document.createElement("img");
  image.className = "photo";
  image.src = menuItem.img;
  container.appendChild(image);

  const description = document.createElement("div");
  description.className = "dscription";
  container.appendChild(description);

  const foodInfo = document.createElement("div");
  foodInfo.className = "food-info";
  description.appendChild(foodInfo);

  // Food Name
  const foodName = document.createElement("h4");
  foodName.className = "food-name";
  foodName.innerHTML = menuItem.name;
  foodInfo.appendChild(foodName);

  // Price
  const price = document.createElement("p");
  price.className = "price";
  price.innerHTML = menuItem.price;
  foodInfo.appendChild(price);

  // Info
  const info = document.createElement("p");
  info.className = "info";
  info.textContent = menuItem.info;
  description.appendChild(info);

  return container;
};

// Get menuItems of given category from allMenuItems
const getFilterByCategory = (category) => {
  let filteredMenuItems = [];
  for (const menuItem of allMenuItems) {
    if (category === menuItem.category) filteredMenuItems.push(menuItem);
  }

  filteredMenuItems = category === "All" ? allMenuItems : filteredMenuItems;
  return filteredMenuItems;
};

const mapJS2HTML = (JSItems) => {
  const htmlItems = [];
  for (let jsObj of JSItems) {
    const htmlElement = getHtmlMenuItem(jsObj);
    htmlItems.push(htmlElement);
  }
  return htmlItems;
};

const show = (htmlElements) => {
  mainSection.innerHTML = "";
  for (const el of htmlElements) mainSection.append(el);
};

const handleCategoryClick = (event) => {
  // Identify clicked category
  const category = event.target.textContent;
  const filteredMenuItems = getFilterByCategory(category);

  const htmlToShow = mapJS2HTML(filteredMenuItems);
  show(htmlToShow);
};

const handleDOMLoad = () => {
  const htmlToShow = mapJS2HTML(allMenuItems);
  show(htmlToShow);
};

window.addEventListener("DOMContentLoaded", handleDOMLoad);
menuSelector.addEventListener("click", handleCategoryClick);
