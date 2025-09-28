import storage from "../LocalStorage"
import Task from "../models/Task"

let tasks = storage.load("tasks").map(t => new Task(t.title, t.due, t.priority, t.taskGroupId, t.id))

export function addTask(title, due, priority, taskGroupId){
    tasks.push(new Task(title, due, priority, taskGroupId));
    storage.save("tasks", tasks);
}

export function deleteTask(taskId){
    tasks = tasks.filter(t => t.id !== taskId);
    storage.save("tasks", tasks);
}

export function toggleCompletionStatus{
    
}