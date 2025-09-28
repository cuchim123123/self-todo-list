import { addProject, deleteProject, getProjects } from "../services/projectManager";
import { renderProjects } from "../views/projectView";
import { renderTaskGroups } from "../views/taskGroupView";
import { getCurrentProjectId, setCurrentProjectId } from "../state/uiState";

export function handleAddProject(title){
    addProject(title, "default", new Date());
    renderProjects(getProjects());
}

export function handleDeleteProject(id){
    deleteProject(id);
    renderProjects(getProjects());
}

export function handleSelectProject(id){
    if(id === getCurrentProjectId){
        return;
    }
    setCurrentProjectId(id);
    renderProjects(getProjects());
    renderTaskGroups(getCurrentProjectId());

}