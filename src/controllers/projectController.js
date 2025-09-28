import { addProject, deleteProject, getProjects } from "../services/projectManager";
import { renderProjects, highlightProject } from "../views/projectView";
import { renderTaskGroups } from "../views/taskGroupView";
import { getCurrentProjectId, setCurrentProjectId } from "../state/uiState";
import { getTaskGroups } from "../services/taskGroupManager";

export function handleAddProject(title){
    addProject(title, "default", new Date());
    renderProjects(getProjects());
}

export function handleDeleteProject(id){
    deleteProject(id);
    renderProjects(getProjects());
}

export function handleSelectProject(id){
    if(id === getCurrentProjectId()){
        return;
    }
    const oldId = getCurrentProjectId();
    setCurrentProjectId(id);
    highlightProject(oldId, id);
    renderTaskGroups(getCurrentProjectId(), getTaskGroups());

}