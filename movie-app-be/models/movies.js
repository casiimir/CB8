const mongoose = require("mongoose");

// const categoryMovieSchema = new mongoose.Schema({
//   name: 'Action',
//   ref_num: 123
// })

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "no-title",
  },
  cover: {
    type: String,
    required: true,
    // default: "no-cover",
  },
  poster: {
    type: String,
    required: false,
    default: "no-poster",
  },
  // categories: {
  //   type: [categoryMovieSchema]
  // },
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
