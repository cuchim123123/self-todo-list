import TaskGroup from "../models/Taskgroup";
import storage from "../LocalStorage";

let taskGroups = storage.load("taskGroups").map(tg => new TaskGroup(tg.title, tg.projectId, tg.id, tg.taskIds));

export function getTaskGroups() {
    return taskGroups;
}

export function addTaskGroup(title, projectId) {
    const newTaskGroup = new TaskGroup(title, projectId);
    taskGroups.push(newTaskGroup);
    storage.save("taskGroups", taskGroups);
}

export function deleteTaskGroup(id) {
    taskGroups = taskGroups.filter(tg => tg.id !== id);
    storage.save("taskGroups", taskGroups);
}