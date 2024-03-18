const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movies");

mongoose.connect("mongodb://localhost:27017");

const app = express();

app.use(express.json());

app.get("/movies", async (req, res, next) => {
  const movies = await Movie.find();

  res.status(200).json(movies);
});

app.post("/movies", async (req, res, next) => {
  const movie = new Movie({
    title: req.body.title,
    cover: req.body.cover,
    poster: req.body.poster,
    year: req.body.year,
  });

  await movie.save();

  res.status(201).json(movie);
});

app.listen(3002);
