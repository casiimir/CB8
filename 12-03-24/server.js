const express = require("express");
const bodyParser = require("body-parser");
const moviesRoutes = require("./routes/movies");

const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  console.log("Questo va eseguito sempre");
  next();
});

// app.use((req, res) => {
//   if (req.url === "/") {
//     res.send(`<h1>Homepage!</h1>`);
//   } else if (req.url === "/pippo") {
//     res.send(`<h1>Benvenuto alla pagina Pippo!</h1>`);
//   }
// });

// app.use("/movies", (req, res) => {
//   res.send(`<h1>Movies!</h1>`);
// });

// app.use("/movies", (req, res) => {
//   const movies = []

//   if (req.method === "GET") {
//     res.send({
//       a: 2,
//       b: 3,
//       id: 12023010230,
//     });
//   } else if (req.method === 'POST') {
//     movies.push(req.body)
//   }
// });

// app.post("/movies", (req, res) => {
//   /// ... Scrittura in POST sull'archivio dei movies
// });

// app.use(bodyParser.urlencoded()); // DEPRECATO ma il principio è questo
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/add-movie", (req, res) => {
//   res.send(`
//     <form action="/movies" method="POST">
//       <input type="text" placeholder="Titolo..." name="title" />
//       <input type="text" placeholder="Anno di produzione..." name="year" />
//       <input type="submit" />
//     </form>
//   `);
// });

app.use(moviesRoutes);

app.get("/", (req, res) => {
  res.send("<h1>HOMEPAGE</h1>");
});

app.listen(3001);
