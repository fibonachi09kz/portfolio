import {skills} from "../data/db";

export function getSkill(id) {
    return skills.filter(e => e.id === +id)[0]
}