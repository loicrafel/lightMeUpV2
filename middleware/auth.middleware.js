const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        res.send(200).json("no token");
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    console.log("No token");
    res.locals.user = null;
  }
};
