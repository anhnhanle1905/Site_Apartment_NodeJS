import mongoose from "mongoose";

const imageGallerySchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
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
  price: {
    type: String,
    trim: true,
    required: true,
  },
});

const ImageGallery = mongoose.model("imageGallerys", imageGallerySchema);
export default ImageGallery;
