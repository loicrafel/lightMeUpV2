const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { signInErrors, signUpErrors } = require("../utils/errors.utils");

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res) => {
  const newUser = new UserModel({
    pseudo: req.body.pseudo,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    const user = await newUser.save();
    return res.status(201).json({ user });
  } catch (err) {
    const errors = signUpErrors(err);
    return res.status(200).send({ errors });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
};
