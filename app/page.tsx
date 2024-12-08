import React from "react";
import GlobalNav from "./components/nav";
import ProjectTile from "./components/project-tile";
import Marquee from "react-fast-marquee";

export default function Page() {
    return <>
        <div id="container">

            <GlobalNav />

            <main>
                <div className="row d-flex" id="hero-banner">
                    <div className="col-md-4 offset-md-2 justify-self-end">
                        <span id="hero-img">
                            <img src="images/hero-banner.jpg" alt="picture of me" />
                        </span>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <h1>welcome to my portfolio.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum atque cupiditate laudantium. Veniam deserunt itaque dolor consequuntur maxime, qui possimus enim iste, tenetur ex culpa repudiandae voluptate mollitia asperiores fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque provident incidunt fuga. Id sequi cumque repudiandae officiis sit quod numquam suscipit, eum minus dolorem, unde sed mollitia nulla facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam quidem eaque sunt! Non minima excepturi necessitatibus ipsam cum porro est eveniet. A sunt autem fugit dolores at eos mollitia.</p>
                    </div>
                </div>

                <section>
                    <div className="row">
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
                                    <p>Canva</p>
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
                                    <p>Canva</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/excel.png" />
                                    <p>Canva</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/jira.png" />
                                    <p>Canva</p>
                                </div>

                                <div className="marquee-skill">
                                    <img src="images/icons/slack.png" />
                                    <p>Canva</p>
                                </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <h2>Case studies</h2>
                            <p>The most recent and complex UX design and development projects I've worked on.</p>
                        </div>
                    </div>

                    <div className="row row-cols-3 align-items-start mx-5">
                        <ProjectTile project="1" />
                        <ProjectTile project="2" />
                        <ProjectTile project="6" />
                    </div>
                </section >
            </main >
        </div >


    </>
}