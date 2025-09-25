import Task from "./Task";


export default class Project {
    constructor(title, desc, due){
        this.id = crypto.randomUUID();
        this.title = title;
        this.due = due;
        this.desc = desc;
        this.isCompleted = false;
        this.taskGroups = [];
    }

    addTaskGroup(title){
        const taskGroup = {
            id: crypto.randomUUID(),
            tasks: [],
            title,

        }

        this.taskGroups.push(taskGroup);
    }

    addTask(taskGroupId, taskTitle, due, priority = 0){
        const targetGroup = this.taskGroups.find(group => group.id === taskGroupId);
        targetGroup.tasks.push(new Task(taskTitle, due, priority));
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