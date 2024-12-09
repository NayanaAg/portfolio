import React from "react";
import ProjectList from "../projects/data.json";
import "../projects/projects.css";

export default function ProjectTile(props) {
    
    const project = ProjectList[props.project]

    return <>
        <div className="col">
            <div key={project.id} className="product-tile p-0">
                <a href={project.page}>
                    <img className="product-img" src={"./images" + project.image}
                        alt={project.alt} />
                    <div className="product-content d-flex flex-row justify-content-between">
                        <h3>{project.name}</h3>
                        <p>{project.date}</p>
                    </div>
                </a>
            </div>
        </div>
    </>
}