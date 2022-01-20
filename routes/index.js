var express = require("express");
const { getMovie, getMovieById, getRecommendation } = require("../controllers/movie");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Weekly Web Movie API" });
});

router.get("/movies", getMovie);
router.get("/movies/:id", getMovieById);
router.get("/recommendation/:userId", getRecommendation);

module.exports = router;
