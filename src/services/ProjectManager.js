import Project from '../models/Project.js';
import storage from '../LocalStorage.js';

let projects = storage.load("projects").map(p => new Project(p.title, p.desc, p.due, p.id));

export function getProjects() {
    return projects;
}

export function addProject(title, desc, due) {
  const newProject = new Project(title, desc, due);
  projects.push(newProject);
  storage.save('projects', projects);
}

export function deleteProject(id) {
  projects = projects.filter(p => p.id !== id);
  storage.save('projects', projects);
}


