import mongoose, { Schema, Document, model, models, Model } from "mongoose";
// import Epic from "./Epic";

export interface IProject extends Document {
  _id: string;
  title: string;
  description: string;
  endDate: string;
  extraInformation: string;
  status: string;
  project: string;
}

export const ProjectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      unique: true,
      trim: true,
      maxlength: [60, "Title cannot be more than 60 Characters "],
    },
    description: {
      type: String,
      required: [true, "Please add a title"],
      unique: true,
      trim: true,
      maxlength: [400, "Title cannot be more than 60 Characters"],
    },
    endDate: {
      type: Date,
      required: [
        false,
        "Entering a due date helps to create your visual timeline",
      ],
    },
    status: {
      type: String,
    },
    extraInformation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
