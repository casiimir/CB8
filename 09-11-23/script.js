// const cE = (type) => document.createElement(type) // Create Element
// const qS = (element) => document.querySelector(element) // Query Selector

// const titleEl = document.querySelector("h1"); // Selettore di tag
const titleEl = document.querySelector(".title"); // Selettore di classe
// const titleEl = document.querySelector("#root"); // Selettore di id

// console.log(titleEl.textContent); // Ottiene il text content (se presente) dell'elemento
// console.log(titleEl);
titleEl.textContent = "Lorem Ipsum!"; // riassegna il valore textContent dell'elemento Title

const rootEl = document.querySelector("#root");

const rootParentEl = rootEl.parentNode; // Preleva il padre dell'elemento specificato

// rootParentEl.textContent = ""; // Reset totale dell'elemento
// console.log("Elemento:", rootEl.firstElementChild); // Cattura l'elemento del primo figlio dell'elemento preso in oggetto
// console.log("Nodo:", rootEl.firstChild); // Cattura il nodo del primo figlio dell'elemento preso in oggetto

// console.log(document.body.children); // Stampa tutti gli elementi figlio dell'elemento dato
// console.log(titleEl.nextElementSibling); // Stampa il fratello successivo all'elemento titleEl

const titleTwoEl = document.createElement("h2"); // Crea un nuovo elemento - FASE 1
const paragraphEl = document.querySelector("p");

titleTwoEl.textContent = "Weeeella!";
titleTwoEl.style.color = "lightseagreen";
// rootEl.appendChild(titleTwoEl); // Appende un elemento dato come argomento, all'elemento designato in partenza
// rootEl.append(titleTwoEl); // Appende gli elementi dati come argomento, all'elemento designato in partenza - FASE 2
rootEl.insertBefore(titleTwoEl, paragraphEl); // Inserisce l'elemento prima di un elemento esistente
rootEl.removeChild(paragraphEl); // Rimuove l'elemento figlio (argomento) designato

const mainBtnEl = document.querySelector(".mainBtn");

mainBtnEl.addEventListener("click", () => {
  titleEl.style.color = "orange";
  titleTwoEl.style.color = "#0000FF";
  titleEl.style.backgroundColor = "black";
});

// mainBtnEl.addEventListener("mouseover", () => {
//   titleEl.style.color = "orange";
// });

// mainBtnEl.addEventListener("mouseout", () => {
//   titleEl.style.color = "black";
// });

// FF
mainBtnEl.addEventListener("mouseover", () => {
  mainBtnEl.setAttribute("disabled", true);
  mainBtnEl.style.transform = `translate(${parseInt(
    Math.random() * 100
  )}px, ${parseInt(Math.random() * 100)}px)`;
});

// ${parseInt(Math.random * 100)}unzione callback esterna
// function onMouseOver() {
//   mainBtnEl.style.transform = `translate(0, ${10 * new Date().getSeconds()}px)`;
// }

// Aggiunge l'evento all'elemento dato
// mainBtnEl.addEventListener("mouseover", onMouseOver);

// Rimuove l'evento dall'elemento dato
// mainBtnEl.removeEventListener("mouseover", onMouseOver);

// Card Generation
const cardGenerator = (imgUrl, title, description, btnText) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h3");
  const descriptionEl = document.createElement("p");
  const btnEl = document.createElement("button");

  wrapperEl.setAttribute("class", "card");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  descriptionEl.textContent = description;
  btnEl.textContent = btnText;

  wrapperEl.append(imgEl, titleEl, descriptionEl, btnEl);

  return wrapperEl;
};

document.body.append(
  cardGenerator(
    "https://picsum.photos/300/300",
    "Lorem ipsum dolor",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.  adipisicing elit.  adipisicing elit. Laudantiu animi",
    "Read article"
  )
);
