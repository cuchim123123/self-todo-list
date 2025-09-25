import Project from "../models/Project.js";
import storage from "../LocalStorage.js";


export default class ProjectManager {
    constructor(){
        this.projects = storage.loadProjects();
    }

    getProjects(){
        return this.projects;
    }

    addProject(title, desc, due){
        const newProject = new Project(title, desc, due);
        this.projects.push(newProject); 
    }
}


