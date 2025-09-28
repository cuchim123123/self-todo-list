
const addProjectBtn = document.querySelector(".add-project");
const deleteProjectBtn = document.querySelector(".project-delete-btn");
const projectsHolder = document.querySelector(".projects");
const projectForm = document.querySelector(".add-project-form");
const addProjectInput = document.querySelector("#project-title");


export function renderProjects(projects){
    projectsHolder.innerHTML = ``;
    const delIcon = ` <svg class="project-delete-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`
    projects.forEach((project)=>{
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.dataset.id = project.id;

        const titleSpan = document.createElement("span");
        titleSpan.textContent = project.title;
        projectDiv.appendChild(titleSpan);
        
        projectDiv.innerHTML += delIcon;

        projectsHolder.append(projectDiv);
    });
}

export function showProjectForm(){
    projectForm.style.display = "grid";
    addProjectInput.focus();
}

export function hideProjectForm(){
    projectForm.style.display = "none";
}

