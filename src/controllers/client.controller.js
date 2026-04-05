const { Client } = require("../models");

exports.createClient = async (req, res) => {
  try {
    const { name, industry } = req.body;

    const client = await Client.create({ name, industry });

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
