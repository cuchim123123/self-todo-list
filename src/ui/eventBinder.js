import { showProjectForm } from "./projectView";

export default function initEvents(){
    const addProjectBtn = document.querySelector(".add-project");

    addProjectBtn.addEventListener("click", showProjectForm);
}