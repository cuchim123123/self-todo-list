import "./assets/styles.css";
import { renderProjects } from "./ui/projectView.js";
import { renderTaskGroups } from "./ui/taskGroupView.js";
import storage from "./LocalStorage.js";
import initEvents from "./ui/eventBinder.js";
import { getProjects, addProject } from "./services/projectManager.js";
document.addEventListener("DOMContentLoaded", () => {
    
    
    renderProjects();
    renderTaskGroups();
    initEvents();



});


