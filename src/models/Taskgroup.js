export default class TaskGroup {
    constructor(title, projectId, id){
        this.id = id || crypto.randomUUID();
        this.title = title;
        this.projectId = projectId;
        this.taskIds = [];  
    }

    addTask(taskId){
        this.taskIds.push(taskId);
    }

    removeTask(taskId){
        this.taskIds = this.taskIds.filter(id => id !== taskId);
    }

    setTitle(newTitle){
        this.title = newTitle;
    }
}