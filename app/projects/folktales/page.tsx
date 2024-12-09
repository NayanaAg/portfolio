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
                        <h1 className="h1-spacer">Folktales of the world</h1>
                        <strong>Project founder, director, and coordinator</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <Carousel project="0" />
                            <p className="carousel-desc">Pictures of some of our finished pages.</p>

                        </div>

                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>I founded this project as my highschool senior year capstone. The goal was to provide unique stories from around the world to underprivileged communities around us. We wanted solid, hard copies of the books to provide schools and libraries so teachers could keep them for a long time.</p>

                            <h2>Process</h2>
                            <p>The process for this project was complicated. I compiled a list of communities to whom we could distribute our final product to get an idea of the project scope. I also intreviewed students around my school to fill the three main roles we needed: storyteller, illustrator, and translator.</p>

                            <p>The project followed this structure:</p>
                            <ul>
                                <li>Writing and translating period</li>
                                <li>Illustrations for each story</li>
                                <li>Compile all work into one book</li>
                                <li>Contact printing companies for average quotes in different materials</li>
                                <li>Apply for PTA funding</li>
                                <li>Distribute the published copies to schools and libraries near us</li>
                            </ul>

                            <p>My role in the project included managing the deadlines, compiling each person's pages into books, pitching our project to the funding committee, and setting up the distribution efforts with all people who participated in the project.</p>

                            <h2>Notable elements</h2>
                            <p>
                                <ul>
                                    <li>Folklore from different countries to represent the cultures of each writer</li>
                                    <li>Unique art for each story provided by the illustrators in different media</li>
                                    <li>Hardcover binding for the final published books</li>
                                    <li>English and Bahasa Indonesia translations to encourage children to learn new languages</li>
                                </ul>
                            </p>

                            <h2>Project takeaways</h2>
                            <p>This project was my first foray into official leadership and management. I was proud of myself and my friends for putting months of work and commitment while juggling final exams, university applications, and sports clubs to accomplish a goal we were all passionate about.</p>

                            <p>While the design and editing seems a bit childish to me now, I still appreciate this milestone in my life because I can use it to measure how much I've grown over the years.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}