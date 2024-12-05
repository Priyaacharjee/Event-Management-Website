const venueModel = require("../models/venueModel");
const adminModel = require("../models/adminModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const cloudinary = require("../utils/cloudinary");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Register Venue
module.exports.signUp = async (req, res) => {
  try {
    let { name, email, contact, city, address } = req.body;

    if (email && name && contact && city && address) {
      const existingVenue = await venueModel.findOne({ email });
      if (existingVenue) {
        return res.send("Venue already exists. Please Login.");
      }

      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let password = "";
      for (let i = 0; i < 10; i++) {
        password += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      let venue = await venueModel.create({
        email,
        temporaryPassword: password,
        name,
        contact,
        city,
        address,
      });

      await adminModel.updateMany({}, { $push: { appliedVenues: venue._id } });

      res.send("Venue created successfully");
    } else {
      res.send("All fields are required and you must agree to the terms.");
    }
  } catch (err) {
    res.send(err.message);
  }
};

// Login
module.exports.loginVenue = async (req, res) => {
  try {
    let token = req.cookies.token;
    if (token) {
      res.send("You are already logged in.");
    } else {
      let { email, password } = req.body;

      if (email && password) {
        let venue = await venueModel.findOne({ email });

        if (venue) {
          if (venue.password) {
            bcrypt.compare(password, venue.password, async (err, result) => {
              if (result) {
                let token = generateToken(venue);
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
          } else if (venue.temporaryPassword == password) {
            let token = generateToken(venue);
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
        } else {
          return res.send("Email or Password is wrong");
        }
      } else {
        return res.send("Something is missing");
      }
    }
  } catch (err) {
    return res.send(err.message);
  }
};

// Logout
module.exports.logoutVenue = async (req, res) => {
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

// Update Password
module.exports.updatePassword = async (req, res) => {
  try {
    let { venueId, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    let venue = await venueModel.updateOne(
      { _id: venueId },
      { $set: { password: hashedPassword } }
    );

    if (venue) {
      res.send("Password Updated Successfully");
    }
  } catch (err) {
    console.log(err.message);
    res.send("Internal Server Error");
  }
};