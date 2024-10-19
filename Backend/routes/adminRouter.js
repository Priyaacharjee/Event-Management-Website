// *adminsRouter.js*
const express = require("express");
const router = express.Router();
const adminIsLoggedIn = require("../middlewares/adminIsLoggedIn");

router.get("/", (req, res) => {
  res.send("Admin");
});

module.exports = router;
