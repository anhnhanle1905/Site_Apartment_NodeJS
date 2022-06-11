import mongoose from "mongoose";

const iconSchema = new mongoose.Schema({
  icon: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
});

const Icon = mongoose.model("icons", iconSchema);
export default Icon;
