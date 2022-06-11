import Blog from "../models/blog.model.js";

export const uploadData = async (req, res) => {
  ///checking if email existed
  const { image, title, time, description } = req.body;

  try {
    // Create a new user
    const newBlog = new Blog({
      image: image,
      title: title,
      time: time,
      description: description,
    });
    ///Save User
    await newBlog.save();
    console.log(`Upload Blog Data Success with title is: ${title}`);
    res.status(200).json({
      success: true,
      message: `Upload Blog Data Success with title is: ${req.body.title}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.json({
      data: blog,
      message: "OK",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
