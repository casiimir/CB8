const express = require("express");

const router = express.Router();

router.get("/add-movie", (req, res) => {
  res.send(`
    <form action="/movies" method="POST">
      <input type="text" placeholder="Titolo..." name="title" />
      <input type="text" placeholder="Anno di produzione..." name="year" />
      <input type="submit" />
    </form>
  `);
});

router.post("/movies", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
