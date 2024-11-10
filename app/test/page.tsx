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

        {array.filter((item, li) => {
            item.tag === "leadership"
            return <>
                <h3>{item.name}</h3>
                <h3>{item.date}</h3>
            </>
        })}


    </>
}
