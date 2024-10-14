const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
require("dotenv").config();

// Register User
module.exports.signUp = async (req, res) => {
  try {
    let { email, password, userName, contactNumber, agreeToTerms } = req.body;

    if (email && password && userName && contactNumber && agreeToTerms) {
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists. Please Login." });
      }

      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);

      let newUser = await userModel.create({
        email,
        password: hashedPassword,
        username: userName,
        contact: contactNumber,
      });

      let token = generateToken(newUser);
      res.cookie("token", token, {
        httpOnly: true, 
        secure: false, 
        sameSite: "Lax", 
        path: "/", 
      });

      return res.status(201).json({ message: "User created successfully", user: newUser });
    } else {
      return res.status(400).json({ error: "All fields are required and you must agree to the terms." });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
