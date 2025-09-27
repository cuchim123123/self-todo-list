import { showProjectForm, hideProjectForm } from "./projectView";
import { handleAddProject, handleDeleteProject } from "../controllers/projectController";
import { showTaskGroupForm } from "./taskGroupView";
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
        const titleInput = document.querySelector("#taskgroup-title")
        e.preventDefault();
        handleAddTaskGroup();
    })
}