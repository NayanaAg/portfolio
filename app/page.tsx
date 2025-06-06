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
                            <img className="image-clip" id="hero-img" src="images/hero-banner2.jpg" alt="picture of me" />
                        </span>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <h1>welcome to my portfolio.</h1>
                        <h4>Design & Media Experience Specialist at Zucora Inc.</h4>
                        <p>At Zucora, I'm responsible for our webpage and digital ad design, print materials design, wireframing, and marketing campaigns & initiatives. <a id="solo-links" href="https://zucora.com/en" target="_blank">Check out our revamped website here!</a></p>
                        <hr/>
                        <p>I'm a UX designer, aspiring web developer, and best-practices enthusiast. I'm also well-known at my company for being literally the only person who gets excited about documentation and Standard Operating Procedures.</p>

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
                                    <img src="images/icons/microsoft.png" />
                                    <p>Microsoft Office</p>
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
                        <ProjectTile project="0" />
                        <ProjectTile project="3" />
                        <ProjectTile project="8" />
                    </div>
                </section >
            </main >
            <Footer />
        </div >


    </>
}