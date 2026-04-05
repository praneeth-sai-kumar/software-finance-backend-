const express = require("express");
const router = express.Router();

const controller = require("../controllers/client.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

// Create client (Admin, Analyst)
router.post("/", auth, role(["ADMIN", "ANALYST"]), controller.createClient);

// Get clients (all logged users)
router.get("/", auth, controller.getClients);

module.exports = router;
