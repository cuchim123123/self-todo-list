import { addProject, deleteProject } from "../services/projectManager";
import { renderProjects } from "../ui/projectView";

export function handleAddProject(title){
    addProject(title, "default", new Date());
    renderProjects();
}

export function handleDeleteProject(id){
    deleteProject(id);
    renderProjects();
}
