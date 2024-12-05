// *venueRouter.js*
const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/venueIsLoggedIn");
const { signUp, loginVenue ,logoutVenue} = require("../controller/venueController");

router.get("/", (req, res) => {
  res.send("Venue");
});

// VENUE REGISTER
router.post("/signup", signUp);

// VENUE LOGIN
router.post("/login", loginVenue);

// VENUE LOGOUT
router.get("/logout", isLoggedIn, logoutVenue);

module.exports = router;
