import {
  asyncListContainerElGen,
  movieModalElGen,
} from "./modules/components.js";
import { httpGET } from "./modules/http.js";

const bodyEl = document.body;
const mainSectionEl = document.querySelector(".main");

Promise.all([
  // asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  // asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("/tv/popular", "Serie Tv - Popular"),
]).then((elements) =>
  elements.map((el) => {
    mainSectionEl.append(el);

    el.addEventListener("click", (event) => {
      if (event.target.nodeName === "IMG") {
        httpGET(`/tv/${event.target.id}`).then((data) => {
          const movieModalEl = movieModalElGen(data);
          const movieModalBtnEL = movieModalEl.querySelector("button");

          bodyEl.append(movieModalEl);

          movieModalBtnEL.addEventListener("click", () =>
            movieModalEl.remove()
          );
        });
      }
    });
  })
);
