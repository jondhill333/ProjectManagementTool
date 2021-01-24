import mongoose, { Schema, Document, model, models, Model } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  createdDate: string;
  estimatedDueDate?: string;
  status: string;
  extraInformation: string;
}

export const TaskSchema: Schema = new Schema(
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
    estimatedDueDate: {
      type: Date,
      required: [
        false,
        "Entering a due date helps to create your visual timeline",
      ],
    },
    status: {
      type: String,
      required: [true],
      default: "New",
    },
    extraInformation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Task || mongoose.model<ITask>("Task", TaskSchema);
