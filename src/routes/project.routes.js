const express = require("express");
const router = express.Router();

const controller = require("../controllers/project.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

// Create (Admin, Analyst)
router.post("/", auth, role(["ADMIN", "ANALYST"]), controller.createProject);

// Get (all logged users)
router.get("/", auth, controller.getProjects);

// Update (Admin only)
router.put("/:id", auth, role(["ADMIN"]), controller.updateProject);

// Delete (Admin only)
router.delete("/:id", auth, role(["ADMIN"]), controller.deleteProject);

module.exports = router;
