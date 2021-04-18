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
router.get("/", createChild);

//Update Child
router.get("/childId", updateChild);

//Delete Child
router.get("/childId", deleteChild);

module.exports = router;
