// import { connectToDatabase } from "../../util/mongodb";
import dbConnect from "../../util/dbconnect";
import Task from "../../models/Task";
// import mongoose, { Schema, Document } from "mongoose";
// import TaskTest from "../../models/Tasktest";

// connectToDatabase();
dbConnect();

export default async function (req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, data: tasks });
        console.log(tasks);
      } catch (error) {
        res.status(400).json({ success: false + "blah" });
      }
      break;
    case "POST":
      try {
        const task = await Task.create(req.body);
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false + "meh" });
      }
      break;
    default:
      res.status(400).json({ success: false + "duuuh" });
      break;
  }
}
