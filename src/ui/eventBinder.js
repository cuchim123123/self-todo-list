import { showProjectForm, hideProjectForm } from "../views/projectView";
import { handleAddProject, handleDeleteProject } from "../controllers/projectController";
import { showTaskGroupForm, hideTaskGroupForm } from "../views/taskGroupView";
import { showTaskForm, hideTaskForm } from "../views/taskView"; 
import { handleAddTaskGroup } from "../controllers/taskGroupController";

export default function initEvents(){
    // Project elements
    const addProjectBtn = document.querySelector(".add-project");
    const projectForm = document.querySelector(".add-project-form")
    const cancelAddBtn = document.querySelector("#cancel-add-project-btn")
    const projectsContainer = document.querySelector(".projects")

    // TaskGroup elements
    const addTaskGroupBtn = document.querySelector("#add-taskgroup-btn");
    const taskGroupForm = document.querySelector(".add-taskgroup-form");
    const cancelAddTgBtn = document.querySelector("#cancel-add-taskgroup-btn");

    // Task elements
    const tasksContainer = document.querySelector(".taskgroups-container");
    const addTaskBtn = document.querySelector(".add-task-btn");


    // EVENTS
    // Project events
    addProjectBtn.addEventListener("click", showProjectForm);
    projectForm.addEventListener("submit", (e) => {
        const titleInput = document.querySelector("#project-title");

        e.preventDefault();
        handleAddProject(titleInput.value);

        titleInput.value = "";
    });
    cancelAddBtn.addEventListener("click", hideProjectForm);
    projectsContainer.addEventListener("click", e => {
        if(e.target.closest (".project-delete-btn")){
            const id = e.target.closest(".project").dataset.id;
            handleDeleteProject(id);
        }
    })


    // TaskGroup events
    addTaskGroupBtn.addEventListener("click", showTaskGroupForm);
    taskGroupForm.addEventListener("submit", e => {
        const titleInput = document.querySelector("#taskgroup-title");
        e.preventDefault();
        handleAddTaskGroup(titleInput.value);
        titleInput.value = "";
    })
    cancelAddTgBtn.addEventListener("click", hideTaskGroupForm);


    // Task events
    tasksContainer.addEventListener("click", (e) => {
        if (e.target.matches(".plus-svg")) {
            const group = e.target.closest(".tasks-group");
            showTaskForm(group);
        }

        if(e.target.matches(".add-task-btn")){
            e.preventDefault();
            handleAddTask()
        }
    });
}