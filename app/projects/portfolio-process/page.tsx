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
                        <h1 className="h1-spacer">How I designed my portfolio (this website!)</h1>
                        <strong>Content writer, UX designer, React and Nextjs developer</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <Carousel project="4" />
                            <p className="carousel-desc">Wireframes, final designed elements, and some cool pieces of code.</p>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>Make a portfolio to show your relevant projects and work experience.</p>

                            <h2>Process</h2>
                            <p>I worked on this portfolio for a quite a while. I wanted it to have not only my work experience and resume, but also show my personality a bit with the colours, hobby page, and language. I followed the tradition design process of sitemapping, low fidelity wireframes, mockups, and then finally the coding. I find that the best way to organize my thoughts and strengthen the final product without wasting time writing and rewriting pages of code.</p>

                            <h2>Notable elements</h2>
                            <ul>
                                <li>Project tags to filter my work experience based on the user's requirements</li>
                                <li>Carousels and sliders to show visuals for each project</li>
                                <li>Complex React components to manage project tiles and all relevant information within them</li>
                            </ul>

                            <h2>Project takeaways</h2>
                            <p>I'm really proud of how this portfolio is turning out, even though I can spot lots of things to fix and fiddle with (I'll probably never stop!). I learned a lot about React, use states, array mapping and filtering, and component props because I forced myself to design complex features as a way of improving my coding skills. I understand the potential of React and Javascript a lot better now, and I'm looking forward to develop projects with data storage and user interaction in the future!</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}