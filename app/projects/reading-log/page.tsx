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
                        <h1 className="h1-spacer">Nayana's Reading Log</h1>
                        <strong>Content writer, Bookworm, React and Nextjs developer</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <p className="carousel-desc">Interesting code snippets and finished pages</p>

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