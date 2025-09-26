import "./assets/styles.css";
import { renderProjects } from "./ui/projectView.js";
import storage from "./LocalStorage.js";
import initEvents from "./ui/eventBinder.js";
import { getProjects, addProject } from "./services/ProjectManager.js";
document.addEventListener("DOMContentLoaded", () => {
    
    
    renderProjects();

    initEvents();



});


