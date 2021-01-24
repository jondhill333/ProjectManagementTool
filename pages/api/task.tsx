import dbConnect from "../../util/dbconnect";
import Task from "../../models/Task";

dbConnect();

export default async function (req, res) {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find({});
        res
          .status(200)
          .json({ success: true, data: tasks, count: tasks.length });
      } catch (error) {
        res
          .status(400)
          .json({ success: false + " get", message: error.message, error });
      }
      break;
    case "POST":
      try {
        const task = await new Task(req.body);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res
          .status(400)
          .json({ success: false + " post", message: error.message, error });
      }
      break;
    default:
      res.status(400).json({ success: false + " default" });
      break;
  }
}
