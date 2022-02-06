const express = require("express");
const router = express.Router();
const Joi = require("joi");

const { login, register, get } = require('../controllers/auth.controller');

module.exports = router;

// ------------------ Auth Related Routes (Start) ------------------
router.post("/login", login);
router.post("/register", register);
router.get("/get", get);
// ------------------ Auth Related Routes (End) ------------------