//**** Dependencies ****//
const express = require("express");
const router = express.Router();

//**** Imports ****//
const {
  transactionList,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//**** Code ****//

//List Transactions
router.get("/", transactionList);

//Create Transaction
router.post("/", createTransaction);

//Update Transaction
router.put("/transactionId", updateTransaction);

//Delete Transaction
router.delete("/transactionId", deleteTransaction);

module.exports = router;
