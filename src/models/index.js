const sequelize = require("../config/db");

const User = require("./user.model")(sequelize);
const Client = require("./client.model")(sequelize);
const Project = require("./project.model")(sequelize);
const Transaction = require("./transaction.model")(sequelize);

// Relationships

Client.hasMany(Project, { foreignKey: "client_id" });
Project.belongsTo(Client, { foreignKey: "client_id" });

Project.hasMany(Transaction, { foreignKey: "project_id" });
Transaction.belongsTo(Project, { foreignKey: "project_id" });

Client.hasMany(Transaction, { foreignKey: "client_id" });
Transaction.belongsTo(Client, { foreignKey: "client_id" });

module.exports = {
  sequelize,
  User,
  Client,
  Project,
  Transaction,
};
