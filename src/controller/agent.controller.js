import Agent from "../models/agent.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { image, name, description } = req.body;

  try {
    // Create a new user
    const newAgent = new Agent({
      image: image,
      name: name,

      description: description,
    });
    ///Save User
    await newAgent.save();
    console.log(`Upload Agents Data Success with name is: ${name}`);
    res.status(200).json({
      success: true,
      message: `Upload Agents Data Success with name is: ${req.body.name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getAgents = async (req, res) => {
  try {
    const agent = await Agent.find();
    res.json({
      data: agent,
      message: "Get data success",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
