export default class Task {
    constructor(title, due, priority){
        this.id = crypto.randomUUID();
        this.isCompleted = false;

        this.title = title;
        this.due = due;
        this.priority = priority;
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setDue(newDue){
        this.due = newDue;
    }

    setPriority(newPriority){
        this.priority = newPriority;
    }

    toggleCompletionStatus(){
        this.isCompleted = !this.isCompleted;
    }
}