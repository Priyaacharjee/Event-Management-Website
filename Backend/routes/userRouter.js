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
  updatePassword,
  createEvent,
  fetchAllVirtualEvents,
  fetchSingleEvent,
  fetchLastCreatedEvent,
  fetchAllIn_PersonEvents,
  fetchAllHybridEvents,
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
router.get("/updatepasswordrequest", updatePasswordRequest);

// UPDATE PASSWORD
router.put("/updatepassword", updatePassword);

// UPLOAD PROFILE PICTURE (USING CLOUDINARY)
router.post("/uploadprofilepicture", isLoggedIn, uploadProfilePicture);

// CREATE ORDER
router.post("/createevent", isLoggedIn, createEvent);

// FETCH ALL VIRTUAL EVENTS
router.get("/fetchallvirtualevents", fetchAllVirtualEvents);

// FETCH ALL IN_PERSON EVENTS
router.get("/fetchallin_personvents", fetchAllIn_PersonEvents);

// FETCH ALL HYBRID EVENTS
router.get("/fetchallhyybridevents", fetchAllHybridEvents);

// FETCH A SINGLE EVENT
router.post("/fetchsingleevent", fetchSingleEvent);

// FETCH LAST CREATED EVENT
router.get("/fetchlastcreatedevent", fetchLastCreatedEvent);

module.exports = router;
