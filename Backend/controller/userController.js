const userModel = require("../models/userModel");
const eventModel = require("../models/EventModel"); 
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const cloudinary = require("../utils/cloudinary");
require("dotenv").config();
const path = require('path');
const fs = require('fs');

// Register User
module.exports.signUp = async (req, res) => {
  try {
    let { email, password, userName, contactNumber, agreeToTerms } = req.body;

    if (email && password && userName && contactNumber && agreeToTerms) {
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.send("User already exists. Please Login.");
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
      });

      res.send("User created successfully");
    } else {
      res.send("All fields are required and you must agree to the terms.");
    }
  } catch (err) {
    res.send(err.message);
  }
};

// Login
module.exports.loginUser = async (req, res) => {
  try {
    let token = req.cookies.token;
    if (token) {
      res.send("You are already logged in.");
    } else {
      let { email, password } = req.body;

      if (email && password) {
        let user = await userModel.findOne({ email });

        if (user) {
          bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
              let token = generateToken(user);
              res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "Lax",
                path: "/",
              });
              res.send("Login successfully");
            } else {
              res.send("Wrong Password");
            }
          });
        } else {
          return res.send("Email or Password is wrong");
        }
      } else {
        return res.send("Internal Server Error");
      }
    }
  } catch (err) {
    return res.send(err.message);
  }
};

// Logout
module.exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      path: "/",
    });
    res.send("Logout successfully");
  } catch (err) {
    res.send("Internal Server Error");
  }
};

// Get Single User
module.exports.getUser = async (req, res) => {
  try {
    let user = req.user;

    await user.populate({
      path: "createdEvents appliedEvents",
    });

    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.send("Internal Server Error");
  }
};

// Update Password Request
module.exports.updatePasswordRequest = async (req, res) => {
  try {
    let email = req.body.email;
  } catch (err) {
    console.log(err.message);
    res.send("Internal Server Error");
  }
};

// Upload Profile Picture
module.exports.uploadProfilePicture = async (req, res) => {
  try {
    const image = req.body.image;
    const oldImage = req.user.image.public_id;

    const result = await cloudinary.uploader.upload(image, {
      folder: "eventManagement_userProfilePicture",
      width: 300,
      crop: "scale",
    });

    await userModel.updateOne(
      { email: req.user.email },
      {
        $set: {
          image: {
            public_id: result.public_id,
            url: result.secure_url,
          },
        },
      }
    );

    if (oldImage) {
      await cloudinary.uploader.destroy(req.user.image.public_id);
    }
    res.send("File uploaded successfully");
  } catch (err) {
    console.log(err.message);
    res.send("Internal Server Error");
  }
};

// Create Event Controller
module.exports.createEvent = async (req, res) => {
  try {
    const {
      eventName,
      organizedBy,
      organizationEmail,
      eventDate,
      eventTime,
      speakerName,
      cityName,
      platform,
      description,
      registrationEndDate,
      isPaid,
      paidAmountPerPerson,
      headcount,
      payableAmount,
      eventType,
      isPublic,
    } = req.body;

    // Create a new event object
    const newEvent = new Event({
      eventName,
      organizedBy,
      organizationEmail,
      eventDate,
      eventTime,
      speakerName,
      cityName: eventType === 'in_person' || eventType === 'hybrid' ? cityName : null,
      platform: eventType === 'virtual' || eventType === 'hybrid' ? platform : null,
      description,
      registrationEndDate,
      isPaid,
      paidAmountPerPerson: isPaid ? paidAmountPerPerson : 0,
      headcount,
      payableAmount,
      eventType,
      isPublic,
    });

    // Save event to the database
    await newEvent.save();
    console.log(req.body); 
    return res.json({ success: true, message: 'Event created successfully!' });
    }catch (error) {
    console.log(req.body); 
    console.error('Error:', error);
    return res.json({ success: false, message: 'Failed to create event.' });
  }
};