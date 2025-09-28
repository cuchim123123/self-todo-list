import storage from "../LocalStorage";

let currentProjectId = storage.load("lastProjectId");

export function getCurrentProjectId(){
    return currentProjectId;
}
export function setCurrentProjectId(newId){
    currentProjectId = newId;
    storage.save("lastProjectId", currentProjectId);
}
