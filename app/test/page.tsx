import React from "react";
import GlobalNav from "../components/nav";
import TopButton from "../components/top-btn";
import SkillButton from "../components/skill-btns";
import * as array from "../projects/data.json";


export default function Page() {
    return <>

        {array.map((item, li) => {

            return <>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.date}</p>
                </div>
            </>
        })}

        export default function filterSkill (list) {
            array.forEach(project => {
                array.filter(project.tag: "UX Design");

                return <>
                console.log(`project name ${item.name}`)
                </>
            })
        }


    </>
}
