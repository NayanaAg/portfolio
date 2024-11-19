import React from "react";
import "../projects/filter.js";
import * as list from "../projects/data.json";

const allSkills = [
    "HTML & CSS",
    "UX Design",
    "React & Typescript",
    "Print media design",
    "Canva & Figma",
    "Adobe Suite",
    "Social Media",
    "Writing & Editing",
    "Leadership",
    "Marketing"
]


export default function SkillButton() {
    const skillList = allSkills.map(skillName =>
        <a href="#" className="btn btn-primary" id="skillName" onClick= "filterBySkill()" style={{
            border: "var(--btn-outline)",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "var(--btn-radius)"
        }}>{skillName}</a>
    );

    // code: for each "skillname", search the project array
    // in the project array, check the "tag" for each project
    // if the tag has the "skillname" in it, show it when the button is clicked

    return <>
        <div className="skill-btn">{skillList}</div>;
    </>
}

