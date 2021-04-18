//**** Dependencies ****//
const express = require("express");
const router = express.Router();

//**** Imports ****//
const {
  childList,
  createChild,
  updateChild,
  deleteChild,
  fetchChild,
} = require("../controllers/childController");

//**** Params Middleware ****//
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
router.get("/", childList);

//Create Child
router.post("/", createChild);

//Update Child
router.put("/:childId", updateChild);

//Delete Child
router.delete("/:childId", deleteChild);

module.exports = router;
