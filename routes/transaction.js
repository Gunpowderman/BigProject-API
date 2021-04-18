//**** Dependencies ****//
const express = require("express");
const router = express.Router();

//**** Imports ****//
const {
  transactionList,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  fetchTransaction,
} = require("../controllers/transactionController");

//**** Params Middleware ****//
router.param("transactionId", async (req, res, next, transactionId) => {
  const transaction = await fetchTransaction(transactionId, next);
  if (transaction) {
    req.transaction = transaction;
    next();
  } else {
    const err = new Error("Transaction Not Found");
    err.status = 404;
    next(err);
  }
});

//**** Code ****//

//List Transactions
router.get("/", transactionList);

//Create Transaction
router.post("/", createTransaction);

//Update Transaction
router.put("/:transactionId", updateTransaction);

//Delete Transaction
router.delete("/:transactionId", deleteTransaction);

module.exports = router;
