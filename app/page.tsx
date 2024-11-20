import React from "react";
import GlobalNav from "./components/nav";

export default function Page() {
    return <>
        <div id="container">

            <GlobalNav />

            <main>
                <div className="row d-flex" id="hero-banner">
                    <div className="col-md-4 offset-md-2 justify-self-end">
                        <span id="hero-img">
                            <img src="images/hero-banner.jpg" alt="picture of me" />
                        </span>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h1>welcome to my portfolio.</h1>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            {/*skill buttons for search and filter would go here*/} 
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <h2>Featured project: Folktales of the World</h2>
                            {/*featured project carousel goes here*/} 
                        </div>
                    </div>
                </section>
            </main>
        </div>


    </>
}