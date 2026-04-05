const { Project, Client } = require("../models");

// Create Project
exports.createProject = async (req, res) => {
  try {
    const { name, budget, client_id } = req.body;

    const project = await Project.create({
      name,
      budget,
      client_id,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: Client,
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    await Project.update(req.body, {
      where: { id },
    });

    res.json({ message: "Project updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete project
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    await Project.destroy({
      where: { id },
    });

    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
