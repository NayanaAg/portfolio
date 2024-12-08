import React from "react";
import GlobalNav from "../../components/nav";
import TopButton from "../../components/top-btn";

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
                    {/*The images for this project will go here*/}
                    <p>Caption for the images / carousel will go here</p>
                </section>
            </main>

        </div>
    </>
}