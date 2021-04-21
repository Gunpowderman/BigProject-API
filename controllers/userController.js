const { User } = require("../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_EXPIRATION_MS } = require("../config/keys");

// Sign up === Create user
exports.signup = async (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("exports.signup -> hashedPassword", hashedPassword);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    const payload = {
      id: newUser.id,
      email: newUser.email,
      exp: Date.now() + JWT_EXPIRATION_MS,
    };
    const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);
    // res.status(201).json({ message: "User created successfully" });
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

// Sign in
exports.signin = (req, res, next) => {
  console.log("I'm here");
  const { user } = req;
  const payload = {
    id: user.id,
    email: user.email,
    exp: Date.now() + parseInt(JWT_EXPIRATION_MS), // the token will expire 15 minutes from when it's generated
  };
  const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);
  res.json({ token });
  console.log("exports.signin -> req", req);
};

//**** User Update ****//
exports.updateUser = async (req, res, next) => {
  const { userId } = req.params;
  if (req.body.password) {
    delete req.body.password;
  }
  try {
    const foundUser = await User.findByPk(userId);
    if (foundUser) {
      await foundUser.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

//**** User Delete ****//
exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const foundUser = await User.findByPk(userId);
    if (foundUser) {
      await foundUser.destroy(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};
