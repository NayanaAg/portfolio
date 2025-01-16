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
                        <h1 className="h1-spacer">Nayana's Reading Log</h1>
                        <strong>Content writer, Bookworm, React and Nextjs developer</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-10 offset-1 text-center">
                            <Carousel project="8" />
                            <p className="carousel-desc">Selected pages from the live site</p>
                            <a className="btn project-btn" href="https://nayanaag.github.io/reading-log/">Visit the website</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>The project brief was pretty general; make a React website about anything you want. After some back and forth, I decided to make a Goodreads-style book tracking website for myself without the distractions of recommendations or feed activity. I also wanted to be able to recommend books to my friends and family and give them the option to browse through my recent reads using keywords and genres.</p>

                            <h2>Process</h2>
                            <p>This project was a complex one for me. I had some ambitious goals, and I worked hard to learn more Javascript and terminal manipulation to incorporate them. I also ran into some roadblocks, like incompatible packages, conflicting CSS code, ad inability to manipulate the graphs and charts I wanted to show on the final page. However, after some help from my professors and copious amounts of Stack Overflow reading, I was finally happy with the final result.</p>

                            <h2>Notable elements</h2>
                            <p>For this website, I took what I learned while coding my portfolio and increased the complexity so I could keep learning new things. Some features I'm proud of: </p>

                            <ul>
                                <li>A page with all the books I've read. Clicking on one generates a pop-up using an array map with some information about the book.</li>
                                <li>A recommendations page. Choosing a genre shows 5 random books I've read in that category.</li>
                                <li>Reading stats and graphs. I used an npm package for data visualization to provide the type of information that's harder to find on websites like Goodreads.</li>
                            </ul>

                            <h2>Project takeaways</h2>
                            <p>I was really happy with everything I was able to accomplish with a project as complex as this one, but I do also see many areas for improvement. I want to work on refining the branding and visual identity a bit more, and iron out minor responsiveness issues with the CSS grids.</p>

                            <p>I also want to make this project more scalable. Instead of manually adding information to my JSON arrays in the backend, I want to integrate a SQL database with frontend forms to push data in automatically and generate all the relevant pop-ups and information without my interference.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}