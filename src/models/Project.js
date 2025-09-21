export default class Project {
    constructor(title, desc, due){
        this.id = crypto.randomUUID();
        this.title = title;
        this.due = due;
        this.desc = desc;
        this.isCompleted = false;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(taskId){
        this.tasks = this.tasks.filter(task => task.id !== taskId);
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