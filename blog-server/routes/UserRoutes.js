const express = require("express");
const { login, signUp } = require("../controllers/UserController");

const router = express.Router();

router.route("/login").post(login);
router.route("/signUp").post(signUp);

module.exports = router;
