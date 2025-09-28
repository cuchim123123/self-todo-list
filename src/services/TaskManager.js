import storage from "../LocalStorage"
import Task from "../models/Task"
import { getTaskGroups } from "./taskGroupManager";

let tasks = storage.load("tasks").map(t => new Task(t.title, t.due, t.priority, t.taskGroupId, t.id))

export function addTask(title, due, priority, taskGroupId){
    const newTask = new Task(title, due, priority, taskGroupId);
    tasks.push(newTask);
    getCorrespondingTaskGroup(taskGroupId).addTaskId(newTask.id);
    storage.save("tasks", tasks);
    storage.save("taskGroups", getTaskGroups());
}

export function deleteTask(taskId){
    const target = tasks.find(t => t.id === taskId);
    tasks = tasks.filter(t => t.id !== taskId);
    getCorrespondingTaskGroup(target.taskGroupId).removeTaskId(target.id);

    storage.save("tasks", tasks);
    storage.save("taskGroups", getTaskGroups());
}

export function getTasks(){
    return tasks;
}

function getCorrespondingTaskGroup(taskGroupId){
    return getTaskGroups().find(tg => tg.id === taskGroupId);
}