require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movies");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

db.on("error", (err) => console.error(err)); // All'errore con DB mostra in console
db.once("open", () => console.log("Connessione con il DB OK!")); // Alla connessione con il DB succede ...

// API Routes
// Chiamiamo la lista di tutti i movies
app.get("/movies", async (req, res) => {
  const movies = await Movie.find();

  res.json(movies);
});

// Chiamiamo il singolo movie
app.get("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Aggiungiamo il singolo movie
app.post("/movies", async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    cover: req.body.cover,
    // poster: req.body.poster,
    year: req.body.year,
  });

  try {
    const newMovie = await movie.save();

    res.status(201).json({ newMovie });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/movies/:id", async (req, res) => {
  try {
    if (req.params.id === "all") {
      await Movie.deleteMany();
      res
        .status(201)
        .json({ message: "Tutte le risorse sono state cancellate!" });
    } else {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "La risorsa è stata cancellata!" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
    } else {
      const { title, cover, poster, year } = req.body;

      if (title && cover && poster && year) {
        movie.title = title;
        movie.cover = cover;
        movie.poster = poster;
        movie.year = year;

        await movie.save();
        res.status(201).json({ message: "La risorsa è stata modificata!" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3001);
