"use client";

import React from "react";
import GlobalNav from "../../components/nav";
import TopButton from "../../components/top-btn";
import Carousel from "../../components/carousel";


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
                            <p className="carousel-desc">Caption for the images / carousel will go here</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <h2>The brief</h2>
                            <p></p>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    </>
}