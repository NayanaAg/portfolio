import React from "react";
import GlobalNav from "../components/nav";
import Marquee from "react-fast-marquee";
import TopButton from "../components/top-btn";

export default function Page() {
    return <>
        <div id="container">
            <GlobalNav />
            <TopButton version="btn-green" />

            <main>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="mt-5">hobbies & interests</h1>
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
                            <p>Here are the four main hobbies I'm obsessed with right now. Not only are they ways for me to give my friends cute gifts and experiences, they also help me unwind after a long day of work and classes.</p>
                        </div>
                    </div>

                    <div className="row row-cols-4 align-items-center flex-row">
                        <div className="col">
                            <div className="hobby-tile">
                                <img src=".../public/images/hero-banner.jpg"/>
                                <h3>knitting</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat maiores distinctio cupiditate? Eaque possimus quis harum incidunt adipisci fuga ducimus, ipsa, quae animi beatae similique doloremque. Sint, autem architecto.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="hobby-tile">
                                <img src=".../public/images/hero-banner.jpg"/>
                                <h3>knitting</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat maiores distinctio cupiditate? Eaque possimus quis harum incidunt adipisci fuga ducimus, ipsa, quae animi beatae similique doloremque. Sint, autem architecto.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="hobby-tile">
                                <img src=".../public/images/hero-banner.jpg"/>
                                <h3>knitting</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat maiores distinctio cupiditate? Eaque possimus quis harum incidunt adipisci fuga ducimus, ipsa, quae animi beatae similique doloremque. Sint, autem architecto.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="hobby-tile">
                                <img src=".../public/images/hero-banner.jpg"/>
                                <h3>knitting</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat maiores distinctio cupiditate? Eaque possimus quis harum incidunt adipisci fuga ducimus, ipsa, quae animi beatae similique doloremque. Sint, autem architecto.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <h2>fun projects</h2>
                            <p>I've handpicked some projects out of my portfolio that are fun, silly, and express my personality well. As you can probably tell by now, I'm a very high-effort person (yes, that means I do make spreadsheets for potlucks and group vacations, force my friends to fill out Google Forms for my planning, and write journal entries after each trip to rate my overall experience. Juuust a little bit over-the-top!)</p>
                        </div>
                    </div>
                </section>


            </main >
        </div >
    </>
}
