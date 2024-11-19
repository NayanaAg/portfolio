import React from "react";
import GlobalNav from "../components/nav";
import TopButton from "../components/top-btn";
import SkillButton from "../components/skill-btns";
import * as projectList from "../projects/data.json";


export default function Page() {
    return <>

        {projectList.map((project, li) => {

            return <>
                <div>
                    <h3>{project.name}</h3>
                    <p>{project.date}</p>
                </div>
            </>
        })}

        {projectList.filter(project => 
            project.tag === "UX Design"
        )}


    </>
}
