import { projects } from '../data/projects.js';

export function getAllProjects(req, res) {
  res.json(projects);
}

export function getProjectById(req, res) {
  const project = projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: `No project found with id "${req.params.id}"` });
  }
  res.json(project);
}
