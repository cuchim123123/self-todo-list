export default class Project {
    constructor(title, desc, due){
        this.id = crypto.randomUUID();
        this.title = title;
        this.due = due;
        this.desc = desc;
        this.isCompleted = false;
        this.taskGroupIds = [];
    }

    addTaskGroup(taskGroupId){
        this.taskGroupIds.push(taskGroupId);
    }

    removeTaskGroup(taskGroupId){
        this.taskGroupIds = this.taskGroupIds.filter(id => id !== taskGroupId);
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setDue(newDue){
        this.due = newDue;
    }

    setDesc(newDesc){
        this.desc = newDesc;
    }

    toggleCompletionStatus(){
        this.isCompleted = !this.isCompleted;
    }
}