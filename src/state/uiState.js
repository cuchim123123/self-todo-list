let currentProjectId = null;
let currentTaskGroupId = null;

export function getCurrentProjectId(){
    return currentProjectId;
}
export function setCurrentProjectId(newId){
    currentProjectId = newId;
}

export function getCurrentTaskGroupId(){
    return currentTaskGroupId;
}
export function setCurrentTaskGroupId(newId){
    currentTaskGroupId = newId;
}