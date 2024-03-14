const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3123;

let movies = [
  {
    id: 1,
    title: "Oppenheimer",
    year: "2023",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    poster: "https://images.indianexpress.com/2023/05/nolan-movie.jpg",
  },
];

app.use(express.json());
app.use(cors());

app.get("/movies", (req, res, next) => {
  res.json(movies);
});

app.post("/movies", (req, res, next) => {
  const body = req.body;

  if (body.id && body.title && body.year && body.cover && body.poster) {
    movies.push(body);
    res.status(201).send("Il film è stato correttamente aggiunto");
  } else {
    res.status(400).send(`La struttura dell'oggetto non è valida`);
  }
});

app.delete("/movies/:id", (req, res, next) => {
  const id = Number(req.params.id);

  movies = movies.filter((movie) => movie.id !== id);
  res.send("Il film è stato rimosso!");
});

app.put("/movies/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    res.status(400).send("Non ho trovato il film");
  } else {
    movies[index] = body;
    res.send("Il film è stato modificato!");
  }
});

app.listen(PORT);
