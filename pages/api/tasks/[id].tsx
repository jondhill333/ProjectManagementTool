import dbConnect from "../../../util/dbconnect";
import Task from "../../../models/Task";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        if (!task) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      // try {
      //   // TODO fix issue and update args
      //   const task = await Task.findByIdAndUpdate(id, req.body, {
      //     new: true,
      //     runValidators: true,
      //   });
      //   if (!task) {
      //     return res.status(400).json({ success: false });
      //   }
      //   res.status(200).json({ success: true, data: task });
      // } catch (error) {
      //   res.status(400).json({ success: false });
      // }
      try {
        // TODO fix issue and update args
        let task = await Task.findById(id);
        if (!task) {
          return res.status(400).json({ success: false });
        }
        const informationToUpdate = req.body;
        task = informationToUpdate;
        let updatedTask = task.save();
        res.status(200).json({ success: true, data: updatedTask });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedNote = await Task.deleteOne({ _id: id });
        if (!deletedNote) {
          return res.status(400).json({ success: false + "no note" });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false + "delete not worked" });
      }
      break;
    default:
      res.status(400).json({ success: false + " default" });
      break;
  }
}
