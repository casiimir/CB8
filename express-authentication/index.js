require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const Movie = require("./models/Movie");

const app = express();
// const db = mongoose.connection; // Per possibili eventi su DB

mongoose.connect(process.env.DATABASE_URI);
app.use(express.json());

// MIDDLEWARE
const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Inserire un token valido." });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(403)
          .json({ message: "Non hai i permessi di verifica." });
      req.user = user;
      next();
    });
  }
};

// CRUD
app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (user === null) {
    return res
      .status(400)
      .json({ message: "L'utente non esiste nel database." });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({ accessToken });
    }
  } catch (error) {
    res.json({ message: "Autorizzazione non permessa." });
  }
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const newUser = await user.save();
    res.status(201).json({ message: "Utente registrato.", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "La registrazione non è andata a buon fine." });
  }
});

app.get("/movies", authenticationToken, async (req, res) => {
  const movies = await Movie.find();

  res.status(200).json({ movies });
});

app.listen(3002);
