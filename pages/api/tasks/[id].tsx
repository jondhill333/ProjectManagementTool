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
      try {
        // below function works despite error message
        const task = await Task.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });
        if (!task) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: task });
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
