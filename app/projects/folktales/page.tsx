"use client";

import React from "react";

import GlobalNav from "../../components/nav";
import TopButton from "../../components/top-btn";
import Carousel from "../../components/carousel";

import "slick-carousel";

export default function Page() {

    return <>

        <div id="container">
            <GlobalNav />
            <TopButton version="btn-green" />

            <main>
                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <h1 className="h1-spacer">Folktales of the world</h1>
                        <strong>Project founder, director, and coordinator</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <Carousel />
                            <p className="carousel-desc">Pictures of some of our finished pages.</p>

                        </div>

                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <h2>
                                Project brief
                            </h2>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    </>
}