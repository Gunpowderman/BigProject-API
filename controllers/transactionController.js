//**** Imports ****//
const { Transaction, User, Child } = require("../db/models");

//**** Transaction List ****//
exports.transactionList = async (_, res) => {
  try {
    const transactions = await Transaction.findall({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        { model: User, attributes: ["id"] },
        { model: Child, attributes: ["id"] },
      ],
    });
    res.json(transactions);
  } catch (err) {
    next(err);
  }
};

//**** Transaction Create ****//
exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    res.status(201).json(newTransaction);
  } catch (err) {
    next(err);
  }
};

//**** Transaction Update ****//
exports.updateTransaction = async (req, res) => {
  const { transactionId } = req.params;
  try {
    const foundTransaction = await Transaction.findbypk(transactionId);
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
exports.deleteTransaction = async (req, res) => {
  const { transactionId } = req.params;
  try {
    const foundTransaction = await Transaction.findbypk(transactionId);
    if (foundTransaction) {
      await foundTransaction.destroy(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (err) {
    next(err);
  }
};
