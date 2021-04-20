const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const passport = require("passport");

router.use(express.json());

// Sign up
router.post("/signup", signup);

// Sign in
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

//Update User
router.get("/userId", updateUser);

//Delete User
router.get("/userId", deleteUser);
module.exports = router;
