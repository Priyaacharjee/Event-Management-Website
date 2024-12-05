const adminModel = require("../models/adminModel");
const venueModel = require("../models/venueModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const cloudinary = require("../utils/cloudinary");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Register Admin
module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    let admin = await adminModel.find({});
    if (admin.length > 0) {
      res.send("Admin already exists! Please login");
    } else {
      if (username && email && password) {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        await adminModel.create({
          email,
          password: hashedPassword,
          username,
        });

        res.send("Admin created successfully");
      } else {
        res.send("All fields are required and you must agree to the terms.");
      }
    }
  } catch (err) {
    res.send(err.message);
  }
};

// Login Admin
module.exports.loginAdmin = async (req, res) => {
  try {
    let token = req.cookies.token;
    if (token) {
      res.send("You are already logged in.");
    } else {
      let { email, password } = req.body;

      if (email && password) {
        let admin = await adminModel.findOne({ email });

        if (admin) {
          bcrypt.compare(password, admin.password, async (err, result) => {
            if (result) {
              let token = generateToken(admin);
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
        return res.send("Something is missing");
      }
    }
  } catch (err) {
    return res.send(err.message);
  }
};

// Logout Admin
module.exports.logoutAdmin = async (req, res) => {
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

// Accept a Venue
module.exports.acceptVenue = async (req, res) => {
  try {
    const { venueId } = req.body;
    let venue = await venueModel.findOneAndUpdate(
      { _id: venueId },
      { $set: { acceptedByAdmin: true } }
    );
    await adminModel.updateMany({}, { $pull: { appliedVenues: venueId } });

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "mariam.kessler18@ethereal.email",
        pass: "cuVNrpdAgQTBr35VwP",
      },
    });

    await transporter.sendMail({
      from: '"Eventek" <eventek@gmail.com>',
      to: venue.email,
      subject: "Application accepted",
      html: `Your application is accepted by us. Please complete your profile 100%. Otherwise it will not be shown to the event creators.<br> Your login credentials are:<br> <b>Email:</b> ${venue.email} <br> <b>Password:</b> ${venue.temporaryPassword} <br> Please change your password first.`,
    });

    res.send("Venue is added");
  } catch (err) {
    res.send(err.message);
  }
};

// Reject a Venue
module.exports.rejectVenue = async (req, res) => {
  try {
    const { venueId, reason } = req.body;
    let venue = await venueModel.findOneAndDelete({ _id: venueId });
    await adminModel.updateMany({}, { $pull: { appliedVenues: venueId } });

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "mariam.kessler18@ethereal.email",
        pass: "cuVNrpdAgQTBr35VwP",
      },
    });

    await transporter.sendMail({
      from: '"Eventek" <eventek@gmail.com>',
      to: venue.email,
      subject: "Application rejected",
      html: `Your application is rejected. Because you are very nayka. Please nyakamo kom kore abar apply korun.`,
    });

    res.send("Venue is rejected");
  } catch (err) {
    res.send(err.message);
  }
};
