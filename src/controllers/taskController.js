import storage from "../LocalStorage"
import Task from "../models/Task"
import { addTask, getTasks } from "../services/TaskManager"
import { renderTasks } from "../views/taskView";


export function handleAddTask(title, taskGroupId, holder){
    addTask(title, new Date(), 0, taskGroupId);
    renderTasks(taskGroupId, getTasks(), holder);
}