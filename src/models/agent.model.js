import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
});

const Agent = mongoose.model("Agents", agentSchema);
export default Agent;
