const taskForm = document.querySelector(".add-task-form")

export function showTaskForm(group) {
    const form = group.querySelector(".add-task-form");
    form.style.display = "grid";
    form.querySelector("input").focus();
}

export function hideTaskForm(){
    taskForm.style.display = "none";
}

