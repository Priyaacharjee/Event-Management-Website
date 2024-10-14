// *userRouter.js*
const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/userIsLoggedIn");
const {
  signUp,
  loginUser,
  logoutUser,
  getUser,
  uploadProfilePicture,
  updatePasswordRequest,
} = require("../controller/userController");

router.get("/", (req, res) => {
  res.send("Users");
});

// USER REGISTER
router.post("/signup", signUp);

// USER LOGIN
router.post("/login", loginUser);

// USER LOGOUT
router.get("/logout", isLoggedIn, logoutUser);

// GET SINGLE USER
router.get("/getuser", isLoggedIn, getUser);

// UPDATE PASSWORD REQUEST
router.get("/updatepasswordrequest", isLoggedIn, updatePasswordRequest);

// UPLOAD PROFILE PICTURE (USING CLOUDINARY)
router.post("/uploadprofilepicture", isLoggedIn, uploadProfilePicture);

module.exports = router;
