import { getTaskGroups } from "../services/TaskGroupManager";

const taskGroupsHolder = document.querySelector(".task-box");
const taskGroupForm = document.querySelector(".add-taskgroup-form")


export function renderTaskGroups() {
    taskGroupsHolder.innerHTML = 
    `
    <div class="tasks-group">
            <div class = "taskgroup-title">
              <h3>Task-group 1</h3>
              <svg
                class="plus-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>plus-circle-outline</title>
                <path
                  d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
                />
              </svg>
            </div>
            

            <form action="" class="add-task-form">
            <label for="task-title">
              <input type="text" id="task-title" placeholder="Title" required>
              <button id = "add-task-btn">Add</button>
              <button type="button" id = "cancel-add-task-btn">Cancel</button>
            </label>

          </form>

            <div class="task-box">
              <label for="checkbox">
                <div class="task">
                  <div>This is what u gon do</div>
                  <div class="deadline">This is the deadline</div>
                </div>

                <div class="priority">!!</div>

                <svg class="task-delete-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
              </label>
            </div>
          </div>
    `;
}

export function showTaskGroupForm(){
    taskGroupForm.style.display = `grid`;
    taskGroupForm.querySelector("input").focus();
}