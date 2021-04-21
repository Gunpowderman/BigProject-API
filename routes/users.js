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
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUser
);

//Delete User
router.delete(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  deleteUser
);
module.exports = router;
