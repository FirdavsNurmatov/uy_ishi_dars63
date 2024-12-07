import mongoose, { Schema } from "mongoose";

export const taskSchema: Schema = new Schema({
  userId: Schema.Types.ObjectId,
  ref: "User",
  title: String,
  description: { type: String },
});

const Task = mongoose.model("Task", taskSchema);
