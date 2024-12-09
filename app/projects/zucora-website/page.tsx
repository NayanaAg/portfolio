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
                        <h1 className="h1-spacer">Zucora B2B Website Redesign</h1>
                        <strong>User flows and UX researcher, Component designer, QA Tester</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <Carousel project="6" />
                            <p className="carousel-desc">Pictures of the design process and some unique elements.</p>

                        </div>

                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p></p>

                            <h2>Process</h2>
                            <p></p>

                            <h2>Notable elements</h2>
                            <p></p>

                            <h2>Project takeaways</h2>
                            <p></p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}