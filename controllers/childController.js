//**** Imports ****//
const { Child } = require("../db/models");

//**** Child List ****//
exports.childList = async (_, res) => {
  try {
    const children = await Child.findall();
    res.json(children);
  } catch (err) {
    next(err);
  }
};

//**** Child Create ****//
exports.createChild = async (req, res) => {
  try {
    const newChild = await Child.create(req.body);
    res.status(201).json(newChild);
  } catch (err) {
    next(err);
  }
};

//**** Child Update ****//
exports.updateChild = async (req, res) => {
  const { childId } = req.params;
  try {
    const foundChild = await Child.findbypk(childId);
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
exports.deleteChild = async (req, res) => {
  const { childId } = req.params;
  try {
    const foundChild = await Child.findbypk(childId);
    if (foundChild) {
      await foundChild.destroy(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Child account not found" });
    }
  } catch (err) {
    next(err);
  }
};
