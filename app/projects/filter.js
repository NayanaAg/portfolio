import React from "react";
import SkillButton from "../components/skill-btns";
import * as projectList from "./data.json";

const UXDesign = projectList.filter(project =>
    project.tag === "UX Design"
    );

function filterBySkill(skill) {
    let filteredProjects = projectList.filter(project =>
        project.tag === skill
    );

    return filteredProjects;
};

