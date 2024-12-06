// *venueRouter.js*
const express = require("express");
const router = express.Router();
const venueIsLoggedIn = require("../middlewares/venueIsLoggedIn");
const {
  signUp,
  loginVenue,
  logoutVenue,
  updatePasswordFirstTime,
} = require("../controller/venueController");

router.get("/", (req, res) => {
  res.send("Venue");
});

// VENUE REGISTER
router.post("/signup", signUp);

// VENUE LOGIN
router.post("/login", loginVenue);

// VENUE LOGOUT
router.get("/logout", venueIsLoggedIn, logoutVenue);

// UPDATE PASSWORD
router.put("/updatepasswordfirsttime", updatePasswordFirstTime);

module.exports = router;
