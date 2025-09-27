import { addTaskGroup } from "../services/TaskGroupManager";


export function handleAddTaskGroup(title){
    addTaskGroup(title);
}