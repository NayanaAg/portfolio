"use client";

import React from "react";
import GlobalNav from "../../components/nav";
import TopButton from "../../components/top-btn";
import Footer from "../../components/footer";

export default function Page() {
    return <>

        <div id="container">
            <GlobalNav />
            <TopButton version="btn-green" />

            <main>

                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <h1 className="h1-spacer">Prototyping a checkout flow</h1>
                        <strong>UX designer, wireframer, protoyper</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <p className="carousel-desc">Process images of wireframes and layout</p>
                            <Carousel project="2" />
                            <a className="btn project-btn" href="https://www.figma.com/proto/Z8wXhRxO9JlPIWVSQP8NMY/DESN3033-Sitemaps-and-Designs?node-id=73-6&p=f&t=1OCOCz8Jqb99IelO-1&scaling=scale-down&content-scaling=fixed&page-id=73%3A5&starting-point-node-id=73%3A6">See the Figma prototype</a>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>Design a user flow for a fictional business. Include low fidelity wireframes, high fidelity designs, and a working Figma prototype.</p>

                            <h2>Process</h2>
                            <p>I wanted to use this assignment as an opportunity to design something more specific than the primary navigation pages of a website. I decided to make a checkout flow because it's something I experience on the internet very frequently and I wanted to learn the best practices for a good checkout experience. I've also experienced a lot of pain points like inconvenient login screens, lack of autofill, confusing forms, no "back to cart" option, and much more, so I focused on solving these problems and making the process simple and smooth.</p>

                            <h2>Notable elements</h2>

                            <ul>
                                <li>A smooth checkout flow with no distractions (pop ups, log-ins, promotions)</li>
                                <li>"Back" feature and "return to home" logo at every step of the process</li>
                                <li>Responsive checkout which focuses on prioritizing information and minimizing excess</li>
                            </ul>


                            <h2>Project takeaways</h2>
                            <p>Going through this project helped me understand why even massive businesses can run into issues when designing a checkout flow. Because this was a fictional business with no product backend, I didn't have to take SKUs, promos, discounts, bundles, or any other information into account, which made it easier for me to focus on the ideal user flow. I'm hoping to improve my understanding of the checkout process by working SQL databases into this project in the future.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}