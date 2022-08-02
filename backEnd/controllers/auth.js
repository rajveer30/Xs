const User = require("../models/user");
const Contact = require("../models/contact");

const { validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const errors = validationResult(req); //express-validator binds error message with req
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err)
      return res.status(400).json({
        err: "NOT able to save user in DB || E-mail already exist",
      });
    res.send("Sign in Successfull !!");
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "Wrong credentials, please try again....!" });
    }

    if (!user.authenticate(password)) {
      return res
        .status(401)
        .json({ error: "Wrong credentials, please try again....!" });
    }

    return res.send("Sign In Successfull");
  });
};

exports.contact = (req, res) => {
  const newQuery = new Contact(req.body);
  newQuery.save((err, newQuery) => {
    if (err)
      return res.status(400).json({
        err: "NOT able to save user in DB ",
      });
    res.send("Query Submitted Successfully !!");
  });
};
