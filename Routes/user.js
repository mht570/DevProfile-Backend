const express = require("express");
const client = require("../DbModels/user");
const formidable = require("formidable");
const fs = require("fs");
const user = require("../DbModels/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const router = express.Router();
const validate = require("../validators/register");
const validateLogin = require("../validators/login");

router.post("/signup", async (req, res) => {
  const { errors, isValid } = validate(req.body);

  if (!isValid) return res.status(500).send(errors);

  const mail = req.body.email;

  const x = await user.findOne({ email: mail });

  try {
    if (x) res.status(400).send({ email: "email already exist" });
    else {
      const newUser = new user(req.body);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  } catch (e) {
    res.send(e);
  }
});

router.post("/login", async (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  if (!isValid) return res.status(500).send(errors);

  const mail = req.body.email;
  const password = req.body.password;

  let x = await user.findOne({ email: mail });
  // console.log(x);
  try {
    if (!x) return res.status(400).send({ email: "user not found" });
    else {
      bcrypt.compare(password, x.password).then((isMatch) => {
        if (isMatch) {
          // return res.json({ msg: "success" });
          //user mtached

          const payload = { id: x._id, name: x.name }; //create jwt paload
          jwt.sign(
            payload,
            keys.secretOrkey,
            { expiresIn: 43200 },
            (err, token) => {
              res.json({ success: true, token: "Bearer " + token });
            }
          );
        } else {
          return res.status(400).json({ password: "password unmatched" });
        }
      });
    }
  } catch (e) {
    res.status(500).send({ msg: "error" });
  }
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ email: req.user.email, id: req.user._id, name: req.user.name });
  }
);

module.exports = router;
