const { Transaction, Project, Client } = require("../models");
const { Sequelize } = require("sequelize");

exports.getSummary = async () => {
  const revenue = await Transaction.sum("amount", {
    where: { type: "REVENUE" },
  });

  const expenses = await Transaction.sum("amount", {
    where: { type: "EXPENSE" },
  });

  return {
    totalRevenue: revenue || 0,
    totalExpenses: expenses || 0,
    netProfit: (revenue || 0) - (expenses || 0),
  };
};

exports.getCostBreakdown = async () => {
  return await Transaction.findAll({
    attributes: [
      "category",
      [Sequelize.fn("SUM", Sequelize.col("amount")), "total"],
    ],
    where: { type: "EXPENSE" },
    group: ["category"],
  });
};

exports.getProjectProfit = async () => {
  return await Transaction.findAll({
    attributes: [
      "project_id",
      [Sequelize.fn("SUM", Sequelize.col("amount")), "total"],
    ],
    include: [{ model: Project, attributes: ["name"] }],
    group: ["project_id"],
  });
};

exports.getClientRevenue = async () => {
  return await Transaction.findAll({
    attributes: [
      "client_id",
      [Sequelize.fn("SUM", Sequelize.col("amount")), "totalRevenue"],
    ],
    where: { type: "REVENUE" },
    include: [{ model: Client, attributes: ["name"] }],
    group: ["client_id"],
  });
};

exports.getMonthlyTrends = async () => {
  const { Sequelize } = require("sequelize");

  return await Transaction.findAll({
    attributes: [
      [Sequelize.fn("MONTH", Sequelize.col("date")), "month"],
      "type",
      [Sequelize.fn("SUM", Sequelize.col("amount")), "total"],
    ],
    group: ["month", "type"],
    order: [[Sequelize.literal("month"), "ASC"]],
  });
};
