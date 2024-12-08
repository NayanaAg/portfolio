import React from "react";
import GlobalNav from "../components/nav";
import TopButton from "../components/top-btn";
import ProjectTile from "../components/project-tile";

import Marquee from "react-fast-marquee";


export default function Page() {
    return <>
        <div id="container">
            <GlobalNav />
            <TopButton version="btn-green" />

            <main>
                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <h1 className="h1-spacer">hobbies & interests</h1>
                        <p>Are you the type of person who jumps between various interests and hobbies every few months? Then we’ll get along great! Here’s everything I’ve been dabbling in over the last few years.</p>
                    </div>
                </div>

                <section className="hobbies-container mt-5">
                    <div className="row">
                        <div className="col-12 g-0 m-0">
                            <Marquee direction="left" pauseOnHover>
                                <ul>
                                    <li>reading</li>
                                    <li>knitting</li>
                                    <li>crocheting</li>
                                    <li>traveling</li>
                                    <li>learning new languages</li>
                                    <li>puzzles</li>
                                    <li>trying new cuisines</li>
                                    <li>stargazing</li>
                                    <li>kayaking</li>
                                    <li>cycling</li>
                                    <li>paddleboarding</li>
                                    <li>baking</li>
                                    <li>pie crust art</li>
                                    <li>thrifting</li>
                                    <li>co-op video games</li>
                                    <li>iced coffee</li>
                                    <li>picnics</li>
                                    <li>attending ballets</li>
                                    <li>museums & art galleries</li>
                                    <li>windowshopping at Ikea</li>
                                    <li>watching movies</li>
                                    <li>trivia</li>
                                    <li>board games</li>
                                    <li>dungeons & dragons</li>
                                </ul>
                            </Marquee>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-md-10 offset-md-1 text-center">
                            <h2>ways I destress</h2>
                            <p></p>
                        </div>
                    </div>

                    <div className="row row-cols-4 flex-row">
                        <div className="col px-1">
                        <div className="hobby-tile d-flex flex-column justify-content-end">
                        <img className="image-clip hobby-image" src="./images/knitting.jpg" />
                                <div className="hobby-content text-center">
                                    <h3>knitting</h3>
                                    <p>I love knitting, crochet, embroidery, and pretty much all other yarn crafts! Not only is it a great way to destress and feel productive on long commutes, it also gives me the opportunity to make cute gifts for my family and friends.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col px-1">
                        <div className="hobby-tile d-flex flex-column justify-content-end">
                        <img className="image-clip hobby-image" src="./images/reading.jpg" />
                                <div className="hobby-content text-center">
                                    <h3>reading</h3>
                                    <p>Reading and decorating my bookshelf have been two of my favourite things ever since I was a kid. You can see one of my projects, <a href="#">this website I made</a> to track my annual reading activity. Check out my digital library and find some great recommendations :)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col px-1">
                            <div className="hobby-tile d-flex flex-column justify-content-end">
                                <img className="image-clip hobby-image" src="./images/travel.jpg" />
                                <div className="hobby-content text-center">
                                    <h3>travel</h3>
                                    <p>I've lived in five different countries (so far!) and in each of them, I loved exploring the local culture, history, and food. One of my goals is to find a job I love which enables me to continue traveling and experiencing new things.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col px-1">
                        <div className="hobby-tile d-flex flex-column justify-content-end">
                        <img className="image-clip hobby-image" src="./images/baking.jpg" />
                                <div className="hobby-content text-center">
                                    <h3>baking</h3>
                                    <p>I'm an avid watcher of Great British Bake Off, Top Chef, Masterchef, pretty much every cooking and baking show out there. I love getting together with my friends to make elaborate meals (bonus points if we all have enough leftovers to stock the fridge for a week!)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <h2>fun projects</h2>
                            <p>I've handpicked some projects out of my portfolio that are fun, silly, and express my personality well. As you can probably tell by now, I'm a very high-effort person. Yes, that means I do make spreadsheets for potlucks and group vacations, force my friends to fill out Google Forms for my planning, and write journal entries after each trip to rate my overall experience. Juuust a little bit over-the-top!</p>
                        </div>
                    </div>

                    <div className="row row-cols-3 align-items-start mx-5">
                        <ProjectTile project="0" />
                        <ProjectTile project="1" />
                        <ProjectTile project="7" />
                    </div>
                </section>


            </main >
        </div >
    </>
}
