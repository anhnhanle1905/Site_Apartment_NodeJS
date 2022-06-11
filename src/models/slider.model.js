import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
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
  address: {
    type: String,
    trim: true,
    required: true,
  },
  properties: {
    type: String,
    trim: true,
    required: true,
  },
  cost: {
    type: String,
    trim: true,
    required: true,
  },
});

const Slider = mongoose.model("sliders", sliderSchema);
export default Slider;
