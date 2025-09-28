const taskForm = document.querySelector(".add-task-form");

export function showTaskForm(group) {
    const form = group.querySelector(".add-task-form");
    form.style.display = "grid";
    form.querySelector("input").focus();
}

export function hideTaskForm(){
    taskForm.style.display = "none";
}

export function renderTasks(taskGroupId, tasks, tasksHolder){
    tasksHolder.innerHTML = ``;
    tasks
        .filter(t => t.taskGroupId === taskGroupId)
        .forEach(t =>{
                const taskBox = document.createElement("div");
                taskBox.classList.add("task-box");

                const label = document.createElement("label");
                label.setAttribute("for", `checkbox-${t.id}`);

                const input = document.createElement("input");
                input.type = "checkbox";
                input.id = `checkbox-${t.id}`;

                const taskContent = document.createElement("div");
                taskContent.className = "task";

                const titleDiv = document.createElement("div");
                titleDiv.textContent = t.title;

                const deadlineDiv = document.createElement("div");
                deadlineDiv.className = "deadline";
                deadlineDiv.textContent = t.due;

                const priorityDiv = document.createElement("div");
                priorityDiv.className = "priority";
                priorityDiv.textContent = t.priority;


                taskContent.append(titleDiv);
                taskContent.append(deadlineDiv);
                label.append(input);
                label.append(taskContent);
                label.append(priorityDiv);
                taskBox.append(label);
                taskBox.insertAdjacentHTML("beforeend", `
                <svg class="task-delete-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>delete</title>
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2..."></path>
                </svg>
                `);

                tasksHolder.append(taskBox);
            });


}
