import Icon from "../models/Icon.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { icon, title, content } = req.body;

  try {
    // Create a new user
    const newIcon = new Icon({
      icon: icon,
      title: title,
      content: content,
    });
    ///Save User
    await newIcon.save();
    console.log(`Upload Icon Data Success with title is: ${title}`);
    res.status(200).json({
      success: true,
      message: `Upload Icon Data Success with title is: ${req.body.title}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getIcons = async (req, res) => {
  try {
    const icon = await Icon.find();
    res.json({
      data: icon,
      message: "Get data success",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
