//**** Dependencies ****//
const express = require("express");
const router = express.Router();

// Passport
const passport = require("passport");

//**** Imports ****//
const {
  childList,
  createChild,
  updateChild,
  deleteChild,
  fetchChild,
} = require("../controllers/childController");

//** Params Middleware **//
router.param("childId", async (req, res, next, childId) => {
  const child = await fetchChild(childId, next);
  if (child) {
    req.child = child;
    next();
  } else {
    const err = new Error("Child Not Found");
    err.status = 404;
    next(err);
  }
});

//**** Code ****//

//List Children
router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  childList
);

//Create Child
router.post("/", passport.authenticate("jwt", { session: false }), createChild);

//Update Child
router.put(
  "/:childId",
  passport.authenticate("jwt", { session: false }),
  updateChild
);

//Delete Child
router.delete(
  "/:childId",
  passport.authenticate("jwt", { session: false }),
  deleteChild
);

module.exports = router;
