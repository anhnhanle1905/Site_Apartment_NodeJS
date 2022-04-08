import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  ///checking if email existed
  const { fullname, email, password } = req.body;
  const emailExist = await User.findOne({ email: email });

  if (emailExist) return res.status(400).send(`Email already exists !`);

  try {
    // Create a new user
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: password,
    });
    ///Save User
    await newUser.save();
    console.log(`Register User Success with Fullname is: ${fullname}`);
    res.status(200).json({
      success: true,
      message: `Register User Success with Fullname is: ${req.body.fullname}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};

//login user
export const loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.getToken();
    res.send({ user, token });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
//log out
export const logOut = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

//Change Password
export const changePw = async (req, res) => {
  const { email, currentpassword, newpassword, retypenewpassword } = req.body;
  try {
    const user = await User.findOne({ email: email });
    const isMatchPassword = await bcrypt.compare(
      currentpassword,
      user.password
    );

    if (isMatchPassword) {
      if (newpassword == retypenewpassword) {
        user.password = newpassword;
        const token = await user.getToken();
        res.json({ success: true, user, token });
      } else {
        res.status(500).json({
          success: false,
          message: "Nhập sai mật khẩu.",
        });
      }
    } else {
      res.status(500).json({
        success: false,
        message: "Nhập sai mật khẩu hiện tại.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
