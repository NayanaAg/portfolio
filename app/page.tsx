import React from "react";
import GlobalNav from "./components/nav";
import ProjectTile from "./components/project-tile";
import Footer from "./components/footer";

export default function Page() {
    return <>
        <div id="container">

            <GlobalNav />

            <main>
                <div className="row px-4 py-3 d-flex" id="hero-banner">
                    <div className="col-md-4 offset-md-2 justify-self-end">
                        <span className="image-clip-shadow">
                            <img className="image-clip" id="hero-img" src="images/hero-banner.jpg" alt="picture of me" />
                        </span>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <h1>welcome to my portfolio.</h1>
                        <p>I'm a UX designer, aspiring web developer, and best-practices enthusiast. I'm also well-known at my company for being literally the only person who gets excited about documentation and Standard Operating Procedures for our web processes.</p>

                        <p>On this website (which I coded in an effort to learn how to wrangle React and Next.js), you will find traditional UX research and development projects, as well as my more unique work experience. This includes print media publishing, writing & editing, social media marketing, and much more! </p>
                    </div>
                </div>

                <section>
                    <div className="row my-3">
                        <div className="col-12 text-center g-0 m-0">
                                <div className="marquee-skill">
                                    <img src="images/icons/html.png" />
                                    <p>HTML 5</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/react.png" />
                                    <p>React</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/github.png" />
                                    <p>Github</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/illustrator.png" />
                                    <p>Illustrator</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/photoshop.png" />
                                    <p>Photoshop</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/indesign.png" />
                                    <p>InDesign</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/canva.png" />
                                    <p>Canva</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/figma.png" />
                                    <p>Figma</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/excel.png" />
                                    <p>Excel</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/jira.png" />
                                    <p>Jira</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/slack.png" />
                                    <p>Slack</p>
                                </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <h2>Case studies</h2>
                            <p>The most recent and complex UX design and development projects I've worked on.</p>
                        </div>
                    </div>

                    <div className="row row-cols-md-3 row-cols align-items-start mx-md-5 mx-2">
                        <ProjectTile project="1" />
                        <ProjectTile project="2" />
                        <ProjectTile project="6" />
                    </div>
                </section >
            </main >
            <Footer />
        </div >


    </>
}