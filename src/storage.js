// projectService.js
import Project from "./models/Project";

export default class Storage {
    static loadProjects(){
        return JSON.parse(localStorage.getItem("projects")) || [];
    }

    static saveProjects(projects){
        localStorage.setItem("projects", JSON.stringify(projects));
    }
}