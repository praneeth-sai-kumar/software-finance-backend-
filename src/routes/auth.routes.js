const { body, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// 🔥 Validation Middleware
const validateSignup = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

// 🔥 Error Handler
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post("/signup", validateSignup, handleValidation, authController.signup);

router.post("/login", authController.login);

module.exports = router;
