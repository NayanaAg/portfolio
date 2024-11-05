import React from "react";

export default function GlobalNav() {
    return <>
        <div className="row g-0">
            <div className="col-12">
                <header>
                    <div id="global-nav">
                        <ul>
                            <li><a href="/">home</a></li>
                            <li><a href="/projects">projects</a></li>
                            <li><a href="/hobbies">hobbies</a></li>
                            <li><a href="/contact">contact</a></li>
                            <li><a href="#">resume</a></li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    </>
}