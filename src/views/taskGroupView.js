import { renderTasks } from "./taskView";
const taskGroupsHolder = document.querySelector(".taskgroups-container");
const taskGroupForm = document.querySelector(".add-taskgroup-form")


export function renderTaskGroups(projectId, taskGroups) {
    taskGroupsHolder.innerHTML = ``;
    const plusIcon = `<svg class="plus-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>plus-circle-outline</title>
            <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"></path>
        </svg>`
    taskGroups
        .filter(tg => tg.projectId === projectId)
        .forEach(tg => {
            const taskGroupDiv = document.createElement("div");
            taskGroupDiv.classList.add("tasks-group");
            
            const taskGroupTitle = document.createElement("div");
            taskGroupTitle.classList.add("taskgroup-title");

            const h3 = document.createElement("h3");
            h3.textContent = tg.title;

            const taskGroupForm = `
                <form action="" class="add-task-form">
                <label for="task-title-${tg.id}">
                    <input type="text" id="task-title-${tg.id}" placeholder="Title" required="">
                    <button class="add-task-btn">Add</button>
                    <button type="button" class="cancel-add-task-btn">Cancel</button>
                </label>
                </form>
            `
            const tasksHolder = document.createElement("div");
            tasksHolder.classList.add("task-container");

            taskGroupTitle.append(h3);
            taskGroupTitle.innerHTML += plusIcon;
            taskGroupDiv.append(taskGroupTitle);
            taskGroupDiv.innerHTML += taskGroupForm;
            taskGroupDiv.append(tasksHolder);
            taskGroupsHolder.append(taskGroupDiv);
            

        renderTasks(tg.id, getTasks(), tasksHolder);
    });
}

export function showTaskGroupForm(){
    taskGroupForm.style.display = `grid`;
    taskGroupForm.querySelector("input").focus();
}

export function hideTaskGroupForm(){
    taskGroupForm.style.display = "none";
}



