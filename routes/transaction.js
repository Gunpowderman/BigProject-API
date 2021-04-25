//**** Dependencies ****//
const express = require("express");
const router = express.Router();

// Passport
const passport = require("passport");

//**** Imports ****//
const {
  transactionList,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  fetchTransaction,
} = require("../controllers/transactionController");

//** Params Middleware **//
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
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  transactionList
);

//Create Transaction
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createTransaction
);

//Update Transaction
router.put(
  "/:transactionId",
  passport.authenticate("jwt", { session: false }),
  updateTransaction
);

//Delete Transaction
router.delete(
  "/:transactionId",
  passport.authenticate("jwt", { session: false }),
  deleteTransaction
);

module.exports = router;
