import React from "react";
import * as list from "../projects/data.json";

export default function SkillButton() {

    {
        list.map((item, li) => {

            return <>

                <a href="#" className="btn btn-primary" style={{
                    border: "var(--btn-outline)",
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "var(--btn-radius)"
                }}>{item.tag}</a>
            </>

        })
    }
}
