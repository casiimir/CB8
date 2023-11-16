// const popupEl = (text, btnText) => {
//   const wrapperEl = document.createElement("div");
//   const textEl = document.createElement("p");
//   const btnEl = document.createElement("button");

//   wrapperEl.className = "popup";
//   textEl.textContent = text;
//   btnEl.className = "popup-btn";
//   btnEl.textContent = btnText;

//   wrapperEl.append(textEl, btnEl);
//   return wrapperEl;
// };

// // SETTIMEOUT;

// // console.log("1. Questo si esegue per PRIMO");

// // console.log("2. Questo si esegue per SECONDO");

// // console.log("3. Questo si esegue per TERZO");

// const stopTimeoutEl = document.querySelector(".clear-timeout");

// const popupTimer = setTimeout(() => {
//   // console.log("4. Questo si esegue per ULTIMO");
//   const popupEntity = popupEl("Benvenuto nel tuo sito", "Procedi");

//   document.body.append(popupEntity);

//   // const popupEl = document.querySelector("popup"); // Non funzionerà ma andrà bene la riga che definisce l'elemento come popupEntity
//   const popupBtnEl = document.querySelector(".popup-btn");

//   popupBtnEl.addEventListener("click", () => {
//     popupEntity.remove();
//   });
// }, 5000);

// stopTimeoutEl.addEventListener("click", () => {
//   clearInterval(popupTimer);
// });

// SETINTERVAL

// const clockEl = () => {
//   const wrapperEl = document.createElement("div");
//   const titleEl = document.createElement("h1");

//   const actualTime =
//     new Date().getHours() +
//     ":" +
//     new Date().getMinutes() +
//     ":" +
//     new Date().getSeconds();

//   wrapperEl.className = "clock";
//   titleEl.textContent = actualTime;

//   wrapperEl.append(titleEl);
//   return wrapperEl;
// };

// const stopIntervalEl = document.querySelector(".clear-interval");

// const clockInterval = setInterval(() => {
//   console.log(
//     new Date().getHours() +
//       ":" +
//       new Date().getMinutes() +
//       ":" +
//       new Date().getSeconds()
//   );

//   // if (new Date().getSeconds() === 20) {
//   //   console.log("Ci siamo!");
//   //   clearInterval(clockInterval);
//   // }
// }, 1000);

// document.body.append(clockEl());

// stopIntervalEl.addEventListener("click", () => {
//   clearInterval(clockInterval);
// });

// FETCH - le fetch (le promise in genere) le risolviamo con il THEN !!!!!!!!!!!!! Poi chè è l'unico modo - ASINCRONO
const productGen = (data) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h3");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");

  wrapperEl.className = "product";
  titleEl.textContent = data.title;
  imgEl.src = data.thumbnail;
  imgEl.alt = data.title;
  textEl.className = "text";
  priceEl.textContent = data.price + "$";
  textEl.append(titleEl, priceEl);
  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.map((product) => document.body.append(productGen(product)));
  });

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => data.products.filter((prod) => prod.brand === "Apple"));
