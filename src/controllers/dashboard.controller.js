const service = require("../services/dashboard.service");

exports.getSummary = async (req, res) => {
  try {
    const data = await service.getSummary();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCostBreakdown = async (req, res) => {
  try {
    const data = await service.getCostBreakdown();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProjectProfit = async (req, res) => {
  try {
    const data = await service.getProjectProfit();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClientRevenue = async (req, res) => {
  try {
    const data = await service.getClientRevenue();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMonthlyTrends = async (req, res) => {
  try {
    const data = await service.getMonthlyTrends();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
