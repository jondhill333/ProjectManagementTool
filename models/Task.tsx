import mongoose, { Schema, Document, model, models } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  createdDate: string;
  estimatedDueDate?: string;
  status: string[];
}

const TaskSchema: Schema = new Schema({
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
  createdDate: {
    type: Date,
    required: [true],
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
});

// export default mongoose.model<ITask>("Task", TaskSchema);
export default models.Task || model<ITask>("Task", TaskSchema);
