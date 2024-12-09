import React from "react";
import GlobalNav from "../components/nav";
import TopButton from "../components/top-btn";
import Footer from "../components/footer";

export default function Page() {
    return <>

        <div id="container">
            <GlobalNav />
            <TopButton version="btn-green" />
            <main>
                <div className="row align-items-center" id="hero-banner">
                    <div className="col-5 offset-1">
                        <h1>reach out!</h1>
                        <p>I appreciate any and all feedback about my portfolio, whether it's deep insightful comments or just a typo that I missed. I would love to have a quick chat, even if it’s about the most random thing!</p>
                    </div>
                    <div className="col-5">
                        <form id="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input type="text" className="form-control" id="name" aria-describedby="Enter your name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address: </label>
                                <input type="email" className="form-control" id="email" aria-describedby="Enter your email address" />
                                <small id="email" className="form-text text-muted">I'll never share your email with anyone else. </small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Put any questions and comments here!</label>
                                <textarea className="form-control" id="message"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" id="submit-btn">Send</button>

                        </form>
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
                            <h2>Here's what my friends are saying!</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 offset-md-3">

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
                                            entertaining events out of the wildest ideas and always executes them perfectly! She
                                            managed to organize all ten people in our friend group to work together and make an
                                            unforgettable dinner as a family, do a white elephant gift exchange, a Hunger Games
                                            themed trivia contest, and an efficient cleanup mission! Easily one of my best
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
                    </div>
                </section>
            </main >
            <Footer />
        </div>

    </>
}
