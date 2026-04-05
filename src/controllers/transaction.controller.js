const { Transaction, Project, Client } = require("../models");

exports.createTransaction = async (req, res) => {
  try {
    const { amount, type, category, project_id, client_id, notes } = req.body;

    const transaction = await Transaction.create({
      amount,
      type,
      category,
      project_id,
      client_id,
      notes,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const { type, category } = req.query;

    let filter = {};
    if (type) filter.type = type;
    if (category) filter.category = category;

    const transactions = await Transaction.findAll({
      where: filter,
      include: [Project, Client],
    });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    await Transaction.update(req.body, {
      where: { id },
    });

    res.json({ message: "Transaction updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    await Transaction.destroy({
      where: { id },
    });

    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
