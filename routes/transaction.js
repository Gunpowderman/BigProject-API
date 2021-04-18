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
router.get("/", createTransaction);

//Update Transaction
router.get("/transactionId", updateTransaction);

//Delete Transaction
router.get("/transactionId", deleteTransaction);

module.exports = router;
