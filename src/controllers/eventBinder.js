import { showProjectForm } from "../views/projectView";

export default function initEvents(){
    const addProjectBtn = document.querySelector(".add-project");

    addProjectBtn.addEventListener("click", showProjectForm);
}