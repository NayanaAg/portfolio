"use client";

import React from "react";
import GlobalNav from "../../components/nav";
import TopButton from "../../components/top-btn";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";

import "../projects.css";


export default function Page() {
    return <>

        <div id="container">
            <GlobalNav />
            <TopButton version="btn-green" />

            <main>
                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <h1 className="h1-spacer">Soup Night event website</h1>
                        <strong>Designer, content writer, developer</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-10 offset-1 text-center">
                            <Carousel project="1" />
                            <p className="carousel-desc">Selected pictures from wireframes and live website</p>
                            <a className="btn project-btn" href="https://nayanaag.github.io/soup-night/">Visit the website</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>My goal was to make a simple website using simple, clean HTML, CSS and Javascript. After some thinking, I decided to make an event website because I can continue updating it with new plans I make for my friends. I also wantted to model it off a digital "invitation".</p>

                            <h2>Process</h2>
                            <p>Even for simple websites, I like to create a small sitemap and some lo-fi wireframes so I know where to start when I start coding. I also asked all my friends to write reviews for previous events I've hosted, which ended up being a really fun exercise. I wanted to keep the colours warm and inviting, since that's the feeling I most associate with soup, which is why I settled on a dark brown with red and yellow accents.</p>

                            <h2>Notable elements</h2>
                            <ul>
                                <li>Sliding text carousel with testimonials from my friends</li>
                                <li>Working feedback form created using Web3Forms</li>
                                <li>A short, simple Buzzfeed-style quiz built using modals and clickable images</li>
                                <li>Cute chibi art of me and the two co-planners, courtesy of our good friend Amanda! </li>
                            </ul>

                            <div className="col-md-10 py-3 offset-md-1">

                                <div id="testimonial-slider" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#testimonial-slider" data-bs-slide-to="0"
                                            className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#testimonial-slider" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#testimonial-slider" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#testimonial-slider" data-bs-slide-to="3"
                                            aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#testimonial-slider" data-bs-slide-to="4"
                                            aria-label="Slide 5"></button>
                                        <button type="button" data-bs-target="#testimonial-slider" data-bs-slide-to="5"
                                            aria-label="Slide 6"></button>
                                        <button type="button" data-bs-target="#testimonial-slider" data-bs-slide-to="6"
                                            aria-label="Slide 0"></button>
                                    </div>

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <blockquote>Truly exceptional trips. I wish I could experience every one of them again
                                                for the first time.
                                                <p className="bold-caption">William</p>
                                            </blockquote>
                                        </div>

                                        <div className="carousel-item" data-bs-interval="10000">
                                            <blockquote>The second time I ever met Nayana in person was at a cabin in the middle of
                                                nowhere without signal with a group of people I had never met in person. It was for
                                                a Christmas weekend event that included trivia, cooking, and much more. I didn’t
                                                expect to come back alive, but it was an amazing trip filled with excitement,
                                                hospitality, kindness, and even romance?? (I officiated a wedding for 2 people in
                                                the woods). Nayana is an amazing event planner and ensures that everyone always
                                                feels included and comfortable. I would recommend others also experience her
                                                events/trips, at least once.
                                                <p className="bold-caption">Gurjap</p>
                                            </blockquote>
                                        </div>

                                        <div className="carousel-item" data-bs-interval="10000">
                                            <blockquote>Before hanging out with Nayana, I was essentially a ship with no captain.
                                                Over the course of a wonderful cottage getaway, surrounded by Nayana and a couple of
                                                other soon-to-be-close friends, I underwent a metamorphosis. The exquisite and
                                                decadent Christmas feast filled my stomach, just as her company filled my soul. I am
                                                now a better person for it and I highly recommend Nayana to any people interested in
                                                a friend or an event.
                                                <p className="bold-caption">Wally</p>
                                            </blockquote>
                                        </div>

                                        <div className="carousel-item">
                                            <blockquote>I have never been on these trips but even so would rate 8/8 based on
                                                descriptions alone.
                                                <p className="bold-caption">Gaby (lives 500km away)</p>
                                            </blockquote>
                                        </div>

                                        <div className="carousel-item">
                                            <blockquote>The trip to Niagara was unforgettable! Nayana brought a fresh take on some
                                                nostalgic memories. The scavenger hunt she (and will) organized was definitely the
                                                highlight—it was very fun and was a great ice-breaker. It brought friends from
                                                different circles together through puzzles, trivia, and exploration. I had such a
                                                great time that I was inspired to start helping plan our future adventures! 10/10
                                                would recommend.
                                                <p className="bold-caption">Amanda</p>
                                            </blockquote>
                                        </div>

                                        <div className="carousel-item">
                                            <blockquote>10/10 Always have a fun time! Trips are cool and very well thought out. I
                                                like the puzzles and games we do like in Niagara with the scavenger hunt.
                                                However 0/10 do not recommend 2FA and 7/10 for causing Arshia a mental breakdown
                                                from penalty shots.
                                                <p className="bold-caption">Hayley</p>
                                            </blockquote>
                                        </div>

                                        <div className="carousel-item">
                                            <blockquote>Nayana is a fantastic event planner, she never fails to make the most
                                                entertaining events out of the wildest ideas and always executes them perfectly! She managed to organize all ten people in our friend group to work together and make an unforgettable dinner as a family, do a white elephant gift exchange, a Hunger Games themed trivia contest, and an efficient cleanup mission! Easily one of my best
                                                memories.
                                                <p className="bold-caption">Arshia</p>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-slider"
                                        data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>

                                    <button className="carousel-control-next" type="button" data-bs-target="#testimonial-slider"
                                        data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <h2>Project takeaways</h2>
                            <p>The main thing I learned from this project is how much easier my life would be after I learned React! I was able to appreciate the value of creating components, automatic page routing, imports isolated to specific components and pages, and much more.</p>

                            <p> I also learned that the best way for me to become a better developer would be to improve my Javascript skills. I wanted to incorporate a lot of dynamic and interactive elements which took me extra time and research because I was lacking information about the Document Object Model and custom pop-ups.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}