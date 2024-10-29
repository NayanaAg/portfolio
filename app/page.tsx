import React from "react";
import GlobalNav from "./components/nav";

export default function Page() {
    return <>
        <div id="container">

            <GlobalNav />

            <main>
                <div className="row" id="hero-banner">
                    <div className="col-md-5 offset-md-1">

                    </div>
                    <div className="col-md-5">
                        <h1>welcome to my portfolio.</h1>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">

                        </div>
                    </div>
                </section>
            </main>
        </div>


    </>
}