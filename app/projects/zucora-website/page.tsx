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
                        <h1 className="h1-spacer">Zucora B2B Website Redesign</h1>
                        <strong>User flows and UX researcher, Component designer, QA Tester</strong>
                    </div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <Carousel project="6" />
                            <p className="carousel-desc">Pictures of the design process and some unique elements.</p>

                        </div>

                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2>The brief</h2>
                            <p>Rehaul the Zucora website from the ground up with new branding, better content strategy, and better visual assets and layout. Also develop a new Content Management System (CMS) to help maintain the website in the future.</p>

                            <h2>Process</h2>
                            <p>We worked with an external web development agency for this project, which was a new experience for me. There were a lot of learning opportunities and challenges: communicating between teams, organizing deadlines, keeping different people involved in different aspects of the project, etc.
                            </p>

                            <p>The biggest thing I learned about though was scope creep. Since we were working with an agency, we had to finalize our feature list and requirements before ever seeing wireframes or prototypes, which was a new experience for all of us. Inevitably, there were things that didn't work exactly how we wanted, certain important features that got lost in translation, and others that were trimmed so we could deliver the minimum viable product by our deadline.</p>

                            <p>I'm glad I was involved in such a massive project though, because I was able to learn a lot about good working methodology, testing pages designed and developed by others, and crystalizing your requirements clearly and directly to make sure the planning is sufficient to prepare the team for success.</p>

                            <h2>Notable elements</h2>
                            <ul>
                                <li>A custom CMS with coupon code and promotion functionality, product SKU management, and a page 
                                     builder with a collection of components and elements
                                </li>
                                <li>New, fresh branding with brighter colors, a direct and easy-to-understand brand voice, and organized product array to support retailers' needs.</li>
                                <li>A partner dashboard and login to place orders online, manage their account, keep track of shipping, and receive unique customized promotions and coupons through a customer loyalty program.</li>
                                <li>A robust plan for implementing phase II features including an email builder, French SEO and meta data, detailed customization within page builder blocks, and more!</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </>
}