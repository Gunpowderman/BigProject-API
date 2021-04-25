const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  updateUser,
  deleteUser,
  fetchUser,
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
router.put("/", passport.authenticate("jwt", { session: false }), updateUser);

//Fetch User
router.get("/", passport.authenticate("jwt", { session: false }), fetchUser);

//Delete User
router.delete(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  deleteUser
);
module.exports = router;
