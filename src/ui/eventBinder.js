import { showProjectForm, hideProjectForm } from "./projectView";
import { handleAddProject, handleDeleteProject } from "../controllers/projectController";

export default function initEvents(){
    const addProjectBtn = document.querySelector(".add-project");
    const projectForm = document.querySelector(".add-project-form")
    const cancelAddBtn = document.querySelector("#cancel-add-project-btn")
    const projectsContainer = document.querySelector(".projects")

    addProjectBtn.addEventListener("click", showProjectForm);
    projectForm.addEventListener("submit", (e) => {
        const titleInput = document.querySelector("#project-title");

        e.preventDefault();
        handleAddProject(titleInput.value);

        titleInput.value = "";
    });
    cancelAddBtn.addEventListener("click", hideProjectForm);
    projectsContainer.addEventListener("click", (e) => {
        if(e.target.matches(".project-delete-btn")){
            const id = e.target.closest(".project").dataset.id;
            alert(id || "hi")
            handleDeleteProject(id);
        }
    })

}