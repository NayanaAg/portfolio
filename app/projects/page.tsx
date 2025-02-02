"use client";

import React, { useState } from "react";
import "./projects.css";
import GlobalNav from "../components/nav";
import TopButton from "../components/top-btn";
import ProjectList from "./data.json";
import Footer from "../components/footer";

export default function Page() {

    const allSkills = [
        "HTML & CSS",
        "UX design",
        "React & Typescript",
        "Print media design",
        "Canva & Figma",
        "Adobe suite",
        "Leadership",
        "Marketing",
    ];

    {/**/}

    const [filter, setFilter] = useState("");

    return <>
        <div id="container">

            <GlobalNav />
            <TopButton version="btn-blue" />

            <main>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1 className="h1-spacer">my projects</h1>
                        <p>Looking through people’s portfolios can be overwhelming, especially when they’re like mine -- chaotic, colourful, and very diverse. I decided to sort through the content on this website and categorize it by relevant skills which you, may be looking for. Click on any of the buttons below to filter my projects. Or, if you’re just here to browse, scroll through all the projects below at your own leisure :)</p>
                    </div>
                </div>

                <div className="row mx-md-4 mx-0">
                    <div className="col-12 col-md-8 offset-md-2 text-center">

                        {allSkills.map(skillName =>
                            <a href="#" className={"btn btn-primary " + (skillName === filter ? "btn-focus" : "")} id="skillName" onClick={(e) => {
                                setFilter(skillName)
                            }} style={{
                                border: "var(--btn-outline)",
                                backgroundColor: "#ffffff",
                                color: "#000000",
                                borderRadius: "var(--btn-radius)"
                            }}>{skillName}</a>
                        )}


                        <a href="#" onClick={(e) => {
                            setFilter("");
                        }}>Clear all</a>

                    </div>
                </div>

                <section id="project-container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 text-center">
                            <h2 id="filter-title">{filter}</h2>
                        </div>
                    </div>
                </section>

                <div className="row row-cols-md-4 mx-md-3 mx-2 row-cols align-items-center flex-row">

                    {ProjectList.map((project, li) => {

                        if (project.tag.indexOf(filter) === -1) {
                            return <></>
                        }

                        return <>

                            <div className="col">
                                <div key={project.id} className="product-tile p-0">
                                    <a href={project.page}>
                                        <img className="product-img" src={"./images/projects" + project.image} alt={project.alt} />
                                        <div className="product-content d-flex flex-row justify-content-between">
                                            <h3>{project.name}</h3>
                                            <p>{project.date}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </>

                    })}
                </div>
            </main >
            <Footer />
        </div>
    </>
}
