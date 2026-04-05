const express = require("express");
const router = express.Router();

const controller = require("../controllers/dashboard.controller");
const auth = require("../middleware/auth.middleware");

// All dashboard routes require login
router.get("/summary", auth, controller.getSummary);
router.get("/cost-breakdown", auth, controller.getCostBreakdown);
router.get("/project-profit", auth, controller.getProjectProfit);
router.get("/client-revenue", auth, controller.getClientRevenue);
router.get("/monthly-trends", auth, controller.getMonthlyTrends);

module.exports = router;
