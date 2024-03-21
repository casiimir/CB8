const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "no-title",
  },
  cover: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: false,
    default: "no-poster",
  },
  year: {
    type: Date,
    required: true,
    default: Date.now,
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
