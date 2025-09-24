import "./assets/styles.css";
import { renderProjects } from "./views/projectView.js";
import storage from "./storage.js";
import { addProject } from "./services/projectServices.js";
import initEvents from "./controllers/eventBinder.js";

document.addEventListener("DOMContentLoaded", () => {
    renderProjects(storage.loadProjects());
    initEvents();
});
