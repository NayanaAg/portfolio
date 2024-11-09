import React from "react";
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
        <a href="#" className="btn btn-primary" style={{
            border: "var(--btn-outline)",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "var(--btn-radius)"
        }}>{skillName}</a>
    );

    // code: for each "skillname", search the project array
    // in the project array, check the "tag" for each project
    // if the tag has the "skillname" in it, show it when the button is clicked

    list.forEach(skillName => {
        list.filter(item =>
            item.tag === "skillName"
        );
    })

    {list.filter((item, li) => {
        
        item.tag === "UX Design"

        return item.name
    }
    )}

    return <>
        <div className="skill-btn">{skillList}</div>;
    </>
}

