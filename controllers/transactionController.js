//**** Imports ****//
const { Transaction } = require("../db/models");

//**** Transaction List ****//
exports.transactionList = async (_, res, next) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (err) {
    next(err);
  }
};

//**** Transaction Create ****//
exports.createTransaction = async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    res.status(201).json(newTransaction);
  } catch (err) {
    next(err);
  }
};

//**** Transaction Update ****//
exports.updateTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  try {
    const foundTransaction = await Transaction.findByPk(transactionId);
    if (foundTransaction) {
      await foundTransaction.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (err) {
    next(err);
  }
};

//**** Transaction Delete ****//
exports.deleteTransaction = async (req, res, next) => {
  const { transactionId } = req.params;
  try {
    const foundTransaction = await Transaction.findByPk(transactionId);
    if (foundTransaction) {
      await foundTransaction.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (err) {
    next(err);
  }
};
