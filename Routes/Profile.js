const express = require("express");
const formidable = require("formidable");
const fs = require("fs");
const Profile = require("../DbModels/profile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

const router = express.Router();
const validate = require("../validators/register");
const validateLogin = require("../validators/login");

router.post("/profile", async (req, res) => {});

module.exports = router;
