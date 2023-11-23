// let list;

// fetch("https://picsum.photos/v2/list")
//   .then((res) => res.json())
//   .then((data) => {
//     list = data.map((obj) => obj.download_url);

//     return data;
//   });

// console.log(list); // Non funzionera mai - prob. async

// async function nomeFunzione() {
//   // ... blocco codice
// }

// ASYNC AWAIT ----------------------------------------------------------------- Esercizio 1 + BONUS

const getImagesList = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data;
};

// getImagesList()
//   .then((data) => console.table(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("comunque questa si eseguira sempre...."));

// Rendering Image ----------------------------------------------------------------- Esercizio 2
// const imageGen = (obj) => {
//   const { download_url, author } = obj;

//   const containerEl = document.createElement("div");
//   const imgEl = document.createElement("img");
//   const textEl = document.createElement("p");

//   containerEl.className = "image-card";
//   imgEl.src = download_url;
//   imgEl.alt = author;
//   textEl.textContent = author;

//   containerEl.append(imgEl, textEl);

//   return containerEl;
// };

// const imagesListEl = document.createElement("section");

// imagesListEl.className = "images-list";
// document.body.appendChild(imagesListEl);

// const objMock = {
//   id: "0",
//   author: "Alejandro Escamilla",
//   download_url: "https://picsum.photos/id/0/5000/3333",
// };

// // document.body.append(imageGen(objMock));

// getImagesList().then((data) =>
//   data.map((x) => imagesListEl.append(imageGen(x)))
// );

// GAME
const playerEl = document.createElement("div");
const gameBoardEl = document.querySelector(".game");

playerEl.className = "squarino";

gameBoardEl.append(playerEl);

let posX = 2;
let v = 1.1;

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      playerEl.style.transform = `translateX(${posX}px)`;
      posX *= v;
      break;
    case "ArrowLeft":
      playerEl.style.transform = `translateX(${posX}px)`;
      posX *= v;
      break;
  }
});
