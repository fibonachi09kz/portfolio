import {skills} from "../data/db";
import {projectList} from "../data/db";

export function getSkill(id) {
    return skills.filter(e => e.id === +id)[0]
}

export function getProject(id) {
    return projectList.filter(e => e.id === +id)[0]
}

export function capitalizeStr(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
