import { getTaskGroups } from "../services/TaskGroupManager";

const taskGroupsHolder = document.querySelector(".taskgroups-container");
const taskGroupForm = document.querySelector(".add-taskgroup-form")


export function renderTaskGroups() {
    taskGroupsHolder.innerHTML ;
}

export function showTaskGroupForm(){
    taskGroupForm.style.display = `grid`;
    taskGroupForm.querySelector("input").focus();
}