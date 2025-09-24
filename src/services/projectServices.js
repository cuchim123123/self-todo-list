import Project from "../models/Project.js";
import storage from "../storage.js";
import { renderProjects } from "../views/projectView.js";


const projects = storage.loadProjects();

export function addProject(title){
    title = title.trim().replace(/\s+/g, ' ');
    if(projects.some(project => project.title.toLowerCase() === title.toLowerCase())){
        alert("Project's title exists!");
        return;
    }
    if(!title){
        alert("Title can't be empty!");
        return;
    }
    projects.push(new Project(title));
}

