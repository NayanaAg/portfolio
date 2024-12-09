"use client";

import React from "react";
import GlobalNav from "../../components/nav";
import TopButton from "../../components/top-btn";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";

export default function Page() {
    return <>

        <div id="container">
            <GlobalNav />
            <TopButton version="btn-green" />

            <main>

                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <h1 className="h1-spacer">Speculative design: climate app</h1>
                        <strong>UX researcher, UX designer, Prototyper</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <Carousel project="7" />
                            <p className="carousel-desc">Pictures of some of our finished pages.</p>

                        </div>

                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>Create a weather and climate modeling app for a fictional environment. The app needs to be accessible on mobile, and final deliverables included working Figma prototypes for 4-5 major pages.</p>

                            <h2>Process</h2>
                            <p>I wanted to make this project fun and challenging for myself, especially because weather apps can feel very derivative. Instead of trying to change a proven formula in the design just for the sake of uniqueness, I decided to channel my creativity towards the user research and experience. The solution: <em>make an app for penguins.</em> </p>

                            <p>I spent some time thinking about how penguins would use an app differently from humans. The most obvious difference is that penguins have no fingers; I made all the clickable areas larger than WCAG triple A recommendations, spaced them out more than I usually would, and avoided any complex scroll or swipe interactions so a penguin could theoretically use the app with just its beak (even though they would look a bit silly!)</p>

                            <p>I also made personas for different roles in penguin sociey to decide what valuable information penguins could use to improve their quality of life. Things like changing predator and fish patterns due to climate change, weather warnings for unpredictable storms to keep penguin chicks safe, and underwater versus surface temperature all played into the final design.</p>

                            <h2>Notable elements</h2>
                            <ul>
                                <li>Large, beak-friendly buttons</li>
                                <li>Persona mapping based on real-life penguin behaviour</li>
                                <li>Interesting data visualization using arctic and natural imagery for maps, graphs, and more</li>
                            </ul>

                            <h2>Project takeaways</h2>
                            <p>I realized how much my personal interest and passion affects the thought I put into a design. Even though this is a whimsical project about penguins, I would like to bring this attitude towards thinking carefully of my user and designing to meet their every need in the future as well. It was a very useful exercise to teach me why accessibility standards exist, and how we can connect user-centric design to things like personas and user flows to provide a seamless experience.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}