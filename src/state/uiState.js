import storage from "../LocalStorage";

let currentProjectId = null;

export function getCurrentProjectId(){
    return currentProjectId;
}
export function setCurrentProjectId(newId){
    currentProjectId = newId;

}
