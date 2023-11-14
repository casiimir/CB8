const roboProdGen = (roboData) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");
  const nameEl = document.createElement("h4");

  wrapperEl.className = "robo";
  imgEl.src = roboData.imageUrl;
  imgEl.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = roboData.price + "$";
  nameEl.textContent = roboData.roboName;
  textEl.append(priceEl, nameEl);
  wrapperEl.append(textEl, imgEl);

  return wrapperEl;
};

const mockData = [
  {
    id: 1,
    roboName: "Casi",
    price: 445,
    imageUrl: "https://robohash.org/casi",
  },
  {
    id: 2,
    roboName: "Alex",
    price: 1000,
    imageUrl: "https://robohash.org/alex",
  },
  {
    id: 3,
    roboName: "Pippo",
    price: 30,
    imageUrl: "https://robohash.org/pippo",
  },
];

const roboListEl = document.querySelector(".robo-list");

// document.body.append(roboProdGen(mockData[2]));
mockData.map((robo) => roboListEl.appendChild(roboProdGen(robo)));
