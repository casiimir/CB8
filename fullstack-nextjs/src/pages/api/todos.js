// SERVER
import generalMock from "@/mocks";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({
        message: "La chiamata è andata a buon fine",
        todos: generalMock,
      });
    case "POST":
      const { body } = req;

      res.status(201).json({
        message: "Il valore è stato aggiunto",
        body,
      });
    default:
      res.status(400).json({ message: "Deciditi su cosa fare" });
  }
}
