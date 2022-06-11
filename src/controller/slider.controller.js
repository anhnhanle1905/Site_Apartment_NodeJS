import Slider from "../models/slider.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { image, name, address, properties, cost } = req.body;

  try {
    // Create a new user
    const newSlider = new Slider({
      image: image,
      name: name,
      address: address,
      properties: properties,
      cost: cost,
    });
    ///Save User
    await newSlider.save();
    console.log(`Upload Slider Data Success with name is: ${name}`);
    res.status(200).json({
      success: true,
      message: `Upload Slider Data Success with name is: ${req.body.name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getSliders = async (req, res) => {
  try {
    const slider = await Slider.find();
    res.json({
      data: slider,
      message: "Get data success",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
