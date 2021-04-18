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

//**** Fetch Transaction Function ****//
exports.fetchTransaction = async (transactionId, next) => {
  try {
    const transaction = await Transaction.findByPk(transactionId);
    return transaction;
  } catch (error) {
    next(error);
  }
};

//**** Transaction Update ****//
exports.updateTransaction = async (req, res, next) => {
  try {
    await req.transaction.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

//**** Transaction Delete ****//
exports.deleteTransaction = async (req, res, next) => {
  try {
    await req.transaction.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
