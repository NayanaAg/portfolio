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
                        <h1 className="h1-spacer">Business redesign: Egguino</h1>
                        <strong>UX designer, branding creator, web developer</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <p className="carousel-desc">Pictures of the original website, my design process, and some sections of the finished product.</p>
                            <Carousel project="2" />
                            <a className="btn project-btn" href="https://nayanaag.github.io/egguino-christmas/">Visit the website</a>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>Redesign my friend's website, <a href="egguino.com">Egguino</a>, with a theoretical Chrismas layout and brand without straying too far from the original code. I also used this opportunity to practice layouts for e-commerce pages like product details and checkout forms.</p>

                            <h2>Process</h2>
                            <p>This was my first time starting on a project that already existed, but trying to remodel it with a specific theme in mind. At first I thought it would be easy, but I ended up spending more time on things like colour and font selection than I anticipated. It was difficult to get a Chrismas/holiday theme come across without being tacky.</p>

                            <p>I also learned how to implement CSS grid to manage form fields responsively. Having the side-by-side columns of field inputs was terrible to manage on different screen sizes without grid rules keeping it in check.</p>

                            <h2>Notable elements</h2>
                            <ul>
                                <li>Adorable art and products created by Winny Peng, co-owner of Egguino</li>
                                <li>Interactive logo which waves at the user when they hover over it</li>
                                <li>Custom headings and layout for users to associate the store with holiday shopping</li>
                                <li>Brand theme research without straying from the original look and feel of the website</li>
                            </ul>

                            <h2>Project takeaways</h2>
                            <p>There are some key places for improvement on this website, mainly the featured products carousel. In React, I could have done a better job with some plugins and custom JS to make it interact the way I Want. I also would have liked to display rating stars in the products page so people would feel reassured about their purchase.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}