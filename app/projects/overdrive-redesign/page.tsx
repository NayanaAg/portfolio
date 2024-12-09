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
                        <h1 className="h1-spacer">Business redesign: Egguino</h1>
                        <strong>information architecture designer, UX researcher, wireframe designer</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <Carousel project="3" />
                            <p className="carousel-desc">Pain point research, content organization, and restructuring logic.</p>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>Identify pain points in the user experience of an existing website. Suggest redesigns for each pain point on both desktop and mobile, being mindful of avoiding changes for the sake of change.</p>

                            <h2>Process</h2>
                            <p>In my redesign, I focused on restructuring information on the website. I wanted to address the user heuristic principles of “consistency and standards” and “recognition versus recall”. I reorganized menus and content on the page to help prioritize discovery of new content that a user may be looking for based on genre, age group, or popularity.</p>

                            <p>I made almost no changes to the branding or visual styles when redesigning the pages. I think the TPL design is simple and unobtrusive but also very good for contrast, since they focus on using black and white with a neutral shade of blue for actions. I think accessibility should be one of the core considerations of an institution like the library because of the focus on distributing content to all people equally. I also wanted to avoid change for the sake of change, so I kept my designs focused on making books and other digital content easier to find. </p>

                            <h2>Notable elements</h2>
                            <ul>
                                <li>Brand new navigation menu with logical categorization of books</li>
                                <li>Complex footer which preserves the Overdrive branding while providing content related to the libarry website</li>
                                <li>Suggestion for a rehaul of the "help and guidelines" pages, which are notoriously difficult to navigate</li>
                            </ul>

                            <h2>Project takeaways</h2>
                            <p>I learned that websites with many moving parts benefit from extra time dedicated to sitemapping. I made 3-4 versions of my sitemap every time I found new menus or sections of the website before settling on the final navigation bar.</p>

                            <p>This project also showed me the value of universal design concepts like the hamburger mobile menu and square tiles for audiobooks. There's a reason everyone uses these ideas in their desigs, and it's better to conform and make life easier for the user than try to be inventive and lead to confusion.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}