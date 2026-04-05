const bcrypt = require("bcryptjs");
const { User } = require("../models");

async function createAdmin() {
  const hashedPassword = await bcrypt.hash("praneeth@25022005", 10);

  await User.create({
    name: "praneeth",
    email: "praneeths641@gmail.com",
    password: hashedPassword,
    role: "ADMIN",
  });

  console.log("✅ Admin created");
}

createAdmin();
