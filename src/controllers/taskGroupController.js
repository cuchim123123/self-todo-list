import { addTaskGroup } from "../services/TaskGroupManager";
import { getCurrentProjectId } from "../state/uiState";
import { renderTaskGroups } from "../ui/taskGroupView";

export function handleAddTaskGroup(title){
    addTaskGroup(title, getCurrentProjectId());
    renderTaskGroups();
}