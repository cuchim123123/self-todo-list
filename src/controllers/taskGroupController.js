import { addTaskGroup, getTaskGroups } from "../services/taskGroupManager";
import { getCurrentProjectId } from "../state/uiState";
import { renderTaskGroups } from "../views/taskGroupView";

export function handleAddTaskGroup(title){
    addTaskGroup(title, getCurrentProjectId());
    renderTaskGroups(getCurrentProjectId(), getTaskGroups());
}