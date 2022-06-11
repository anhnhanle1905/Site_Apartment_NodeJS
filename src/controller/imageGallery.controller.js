import ImageGallery from "../models/imageGallery.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { image, title, address, properties, price } = req.body;

  try {
    // Create a new user
    const newImageGallery = new ImageGallery({
      image: image,
      title: title,
      address: address,
      properties: properties,
      price: price,
    });
    ///Save User
    await newImageGallery.save();
    console.log(`Upload ImageGallery Data Success with title is: ${title}`);
    res.status(200).json({
      success: true,
      message: `Upload ImageGallery Data Success with title is: ${req.body.title}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getImageGallerys = async (req, res) => {
  try {
    const imageGallery = await ImageGallery.find();
    res.json({
      data: imageGallery,
      message: "Get data success",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
