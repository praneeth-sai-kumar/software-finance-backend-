const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

// 🔥 Only ADMIN can change roles
router.patch("/:id/role", auth, role(["ADMIN"]), controller.updateUserRole);

module.exports = router;
