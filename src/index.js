import "./assets/styles.css";
import { renderProjects } from "./views/projectView.js";
import { renderTaskGroups } from "./views/taskGroupView.js";
import storage from "./LocalStorage.js";
import initEvents from "./ui/eventBinder.js";
import { getProjects, addProject } from "./services/projectManager.js";


document.addEventListener("DOMContentLoaded", () => {
    
    
    renderProjects(getProjects());
    initEvents();



});


