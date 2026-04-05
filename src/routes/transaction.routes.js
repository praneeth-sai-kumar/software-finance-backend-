const express = require("express");
const router = express.Router();

const controller = require("../controllers/transaction.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const { body, validationResult } = require("express-validator");

// 🔥 Validation Rules
const validateTransaction = [
  body("amount")
    .isFloat({ gt: 0 })
    .withMessage("Amount must be greater than 0"),

  body("type")
    .isIn(["REVENUE", "EXPENSE"])
    .withMessage("Type must be REVENUE or EXPENSE"),

  body("category").notEmpty().withMessage("Category is required"),
];
const validateTransactionUpdate = [
  body("amount")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Amount must be greater than 0"),

  body("type")
    .optional()
    .isIn(["REVENUE", "EXPENSE"])
    .withMessage("Type must be REVENUE or EXPENSE"),

  body("category")
    .optional()
    .notEmpty()
    .withMessage("Category cannot be empty"),
];

// 🔥 Validation Error Handler
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

// ✅ Create transaction (Admin, Analyst)
router.post(
  "/",
  auth,
  role(["ADMIN", "ANALYST"]),
  validateTransaction,
  handleValidation,
  controller.createTransaction,
);

// ✅ Get transactions (all roles)
router.get("/", auth, controller.getTransactions);

// ✅ Update transaction (Admin only)
router.put(
  "/:id",
  auth,
  role(["ADMIN"]),
  validateTransactionUpdate,
  handleValidation,
  controller.updateTransaction,
);

// ✅ Delete transaction (Admin only)
router.delete("/:id", auth, role(["ADMIN"]), controller.deleteTransaction);

module.exports = router;
