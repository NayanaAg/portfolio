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
                        <h1 className="h1-spacer">TPL Overdrive Website Resign</h1>
                        <strong>UX Researcher, designer</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-10 offset-1 text-center">
                            <Carousel project="3" />
                            <p className="carousel-desc">Selected pictures from wireframes and live website</p>
                            <a className="btn project-btn" href="https://nayanaag.github.io/soup-night/">Visit the website</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </div>
    </>
}