import mongoose, { Schema, Document, model, models, Model } from "mongoose";
// import Task from "./Task";

export interface IEpic extends Document {
  title: string;
  description: string;
  endDate: string;
  extraInformation: string;
  project: string;
}

export const EpicSchema: Schema = new Schema(
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
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
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

export default models.Epic || mongoose.model<IEpic>("Epic", EpicSchema);
