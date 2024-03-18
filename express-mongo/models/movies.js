const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  cover: String,
  poster: String,
  year: Date,
});

module.exports = mongoose.model("Movie", movieSchema);
