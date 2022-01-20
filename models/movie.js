// Create new movie model using mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movie = new Schema({
  genre: {
    type: [String],
    required: true,
  },
  movie_id: {
    type: Number,
    required: true,
  },
  movie_title: {
    type: String,
    required: true,
  },
  poster_url: {
    type: String,
    required: true,
  },
  movie_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  num_reviews: {
    type: String,
    required: true,
  },
  director: {
    type: [String],
    required: true,
  },
  writer: {
    type: [String],
    required: true,
  },
  casts: {
    type: [String],
    required: true,
  },
  age_rating: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  movie_length: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("Movie", movie);
