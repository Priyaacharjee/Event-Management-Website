// *userRouter.js*
const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/userIsLoggedIn");
const {signUp} = require("../controller/userController");

router.get("/", (req, res) => {
  res.send("Users");
});

// USER REGISTER
router.post("/signup", signUp);

module.exports = router;
