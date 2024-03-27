import dbConnect from "@/utils/dbConnect";
import Todo from "@/models/Todo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const todo = await Todo.findById(id);

        if (!todo) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const { body } = req;
        const todo = await Todo.findByIdAndUpdate(id, body);

        if (!todo) {
          return res.status(404).json({ success: false });
        }

        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedTodo = await Todo.deleteOne({ _id: id });

        if (!deletedTodo) {
          return res.status(404).json({ success: false });
        }

        res.status(204).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Metodo ${method} non accettato!`);
  }
}
