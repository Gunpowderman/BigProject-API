//**** Imports ****//
const { Child } = require("../db/models");

//**** Child List ****//
exports.childList = async (_, res, next) => {
  try {
    const children = await Child.findAll();
    res.json(children);
  } catch (err) {
    next(err);
  }
};

//**** Child Create ****//
exports.createChild = async (req, res, next) => {
  try {
    const newChild = await Child.create(req.body);
    res.status(201).json(newChild);
  } catch (err) {
    next(err);
  }
};

//**** Child Update ****//
exports.updateChild = async (req, res, next) => {
  const { childId } = req.params;
  try {
    const foundChild = await Child.findByPk(childId);
    if (foundChild) {
      await foundChild.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Child account not found" });
    }
  } catch (err) {
    next(err);
  }
};

//**** Child Delete ****//
exports.deleteChild = async (req, res, next) => {
  const { childId } = req.params;
  try {
    const foundChild = await Child.findByPk(childId);
    if (foundChild) {
      await foundChild.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Child account not found" });
    }
  } catch (err) {
    next(err);
  }
};
