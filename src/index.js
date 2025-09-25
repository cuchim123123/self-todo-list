import "./assets/styles.css";
import { renderProjects } from "./ui/projectView.js";
import storage from "./storage.js";
import initEvents from "./ui/eventBinder.js";

document.addEventListener("DOMContentLoaded", () => {
    renderProjects(storage.loadProjects());
    initEvents();
});
