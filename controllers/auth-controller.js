const User = require("../model/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.send("Home From Controller");
  } catch (error) {
    res.send(error);
  }
};

const register = async (req, res) => {
  try {
    res.send("Hello Register From Controller");
  } catch (error) {
    res.send(error);
  }
};

const registerUser = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    const newUser = await User.create({ username, email, phone, password });
    const token = await newUser.generateToken();

    res.status(201).json({
      message: "User Created Successfully",
      token: token,
      userId: newUser._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Controller Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, userExist.password);

    if (isValidPassword) {
      const token = await userExist.generateToken(); // Corrected this line
      return res.status(200).json({
        message: "Login Successfully",
        token: token,
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Login" });
  }
};

// Get User Data Logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error in user data controller ${error}`);
  }
};

module.exports = { home, register, registerUser, loginUser, user };
