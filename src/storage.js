// projectService.js
import Project from "./models/Project";

export default class Storage {
    static loadProjects(){
        const projectObjects = JSON.parse(localStorage.getItem("projects"));
        if(!projectObjects) return [];

        return projectObjects.map(po => {
            const project = new Project(po.title, po.desc, po.due);
            project.id = po.id;
            project.isCompleted = po.isCompleted;
            project.taskGroups = po.taskGroups;

            return project;
        })

    }

    static saveProjects(projects){
        localStorage.setItem("projects", JSON.stringify(projects));
    }
}