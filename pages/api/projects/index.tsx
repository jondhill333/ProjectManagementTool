import dbConnect from "../../../utils/dbconnect";
import Project from "../../../models/Project";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const projects = await Project.find({});
        res
          .status(200)
          .json({ success: true, data: projects, count: projects.length });
      } catch (error) {
        res
          .status(400)
          .json({ success: false + " get", message: error.message, error });
      }
      break;
    case "POST":
      try {
        const project = await new Project(req.body);
        res.status(201).json({ success: true, data: project });
        project.save();
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
