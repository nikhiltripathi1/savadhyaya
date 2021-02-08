const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User model
const status = require("../models/status.js");

// @route POST api/user
// @desc register user
// @access public


module.exports = router;