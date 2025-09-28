import TaskGroup from "../models/Taskgroup";
import storage from "../LocalStorage";
import { getProjects } from "./projectManager";
import { deleteTask } from "./TaskManager";


let taskGroups = storage.load("taskGroups").map(tg => new TaskGroup(tg.title, tg.projectId, tg.id, tg.taskIds));

export function getTaskGroups() {
    return taskGroups;
}

export function addTaskGroup(title, projectId) {
    const newTaskGroup = new TaskGroup(title, projectId);
    getCorrespondingProject(projectId).addTaskGroupId(newTaskGroup.id);
    taskGroups.push(newTaskGroup);

    storage.save("taskGroups", taskGroups);
    storage.save("projects", getProjects());
}

export function deleteTaskGroup(id) {
    const target = taskGroups.find(tg => tg.id === id);
    target.taskIds.forEach(taskId => deleteTask(taskId));
    getCorrespondingProject(target.projectId).removeTaskGroupId(target.id);

    taskGroups = taskGroups.filter(tg => tg.id !== id);
    storage.save("taskGroups", taskGroups);
    storage.save("projects", getProjects());
}

function getCorrespondingProject(projectId){
    return getProjects().find(p => p.id === projectId);
}

