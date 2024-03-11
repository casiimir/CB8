const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // if (url === "/" && method === "GET") {
  //   res.write("Benvenuto nella Homepage");

  //   fs.writeFileSync("data.txt", "Hello, World!");

  //   res.statusCode = 302; // Set Status code
  //   // res.setHeader("Location", "/pippo"); // Redirect page - provare all'interno di una POST
  // } else if (url === "/movies" && "GET") {
  //   res.write("Ecco la lista dei film");
  // } else if (method === "POST") {
  //   // console.log(req.body); - ERRORE! - STREAM & BUFFER
  // } else {
  //   process.exit();
  // }

  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html"); // Specifichiamo l'utilizzo di HTML in risposta

    res.write(`
      <form action="/movies" method="POST">
        <input type="text" name="title" />
        <input type="text" name="year" />
        <input type="submit" />
      </form>
    `);
  }

  const body = []; // Array di tutti i chucks dell'informazione - non sarà altro che l'informazione completa
  req.on("data", (chuck) => {
    // attente dal buffering il collezionamento dei vari chucks (tutti insieme compongono l'informazione)
    console.log(chuck);
    body.push(chuck);
  });

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
  });

  res.end();
});

server.listen(3001);
