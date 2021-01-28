import dbConnect from "../../../util/dbconnect";
import Task from "../../../models/Task";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
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
        task.save();
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
