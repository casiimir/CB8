import { httpGET } from "./http.js";

const movieModalElGen = (obj) => {
  const container = document.createElement("div");
  const imageEl = document.createElement("img");
  const infoEl = document.createElement("div");

  const infoHeaderEl = document.createElement("div");
  const infoHeaderTitleEl = document.createElement("h1");
  const infoHeaderRatingEl = document.createElement("h3");
  const infoHeaderDateEl = document.createElement("p");
  const infoHeaderLangEl = document.createElement("p");
  const infoHeaderAgeEl = document.createElement("p");

  const infoMainEl = document.createElement("div");
  const infoMainDescEl = document.createElement("p");
  const infoMainPopEl = document.createElement("p");

  const closeBtnEl = document.createElement("button");

  container.className = "movie-modal";
  imageEl.src = `https://image.tmdb.org/t/p/w780${obj.poster_path}`;
  imageEl.alt = obj.original_name || obj.title;
  imageEl.className = "movie-modal-img";
  infoEl.className = "movie-modal-info";

  infoHeaderEl.className = "movie-modal-header";
  infoHeaderTitleEl.textContent = obj.original_name || obj.title;
  infoHeaderRatingEl.textContent = Math.floor(obj.vote_average) + " ⭐";
  infoHeaderDateEl.textContent = obj.first_air_date.split("-")[0];
  infoHeaderLangEl.textContent = obj.original_language;
  infoHeaderAgeEl.textContent = obj.adult;

  infoMainEl.className = "movie-modal-main";
  infoMainDescEl.textContent = obj.overview;
  infoMainPopEl.textContent =
    obj.popularity >= 100 ? "POPULAR MOVIE!" : "UNPOPULAR MOVIE";

  closeBtnEl.className = "movie-modal-close-btn";
  closeBtnEl.textContent = "X";

  infoHeaderEl.append(
    infoHeaderTitleEl,
    infoHeaderRatingEl,
    infoHeaderDateEl,
    infoHeaderLangEl,
    infoHeaderAgeEl
  );

  infoMainEl.append(infoMainDescEl, infoMainPopEl);
  infoEl.append(infoHeaderEl, infoMainEl);
  container.append(imageEl, infoEl, closeBtnEl);

  return container;
};

// SYNC - COMPONENTS

const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.id = imageData.id;
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

// ASYNC - COMPONENTS

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

export {
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
  asyncListContainerElGen,
  movieModalElGen,
};
