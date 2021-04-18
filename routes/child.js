//**** Dependencies ****//
const express = require("express");
const router = express.Router();

//**** Imports ****//
const {
  childList,
  createChild,
  updateChild,
  deleteChild,
} = require("../controllers/childController");

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
