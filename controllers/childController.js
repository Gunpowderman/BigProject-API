//**** Imports ****//
const { Child, User } = require("../db/models");

//**** Child List ****//
exports.childList = async (_, res, next) => {
  try {
    const children = await Child.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: User,
        as: "user",
        attributes: ["id"],
      },
    });
    res.json(children);
  } catch (err) {
    next(err);
  }
};

//** Child Create **//
exports.createChild = async (req, res, next) => {
  try {
    const newChild = await Child.create(req.body);
    res.status(201).json(newChild);
  } catch (err) {
    next(err);
  }
};

//** Fetch Child Function **//
exports.fetchChild = async (childId, next) => {
  try {
    const child = await Child.findByPk(childId);
    return child;
  } catch (error) {
    next(error);
  }
};

//** Child Update **//
exports.updateChild = async (req, res, next) => {
  try {
    await req.child.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

//** Child Delete **//
exports.deleteChild = async (req, res, next) => {
  try {
    await req.child.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
