import React from "react";
import GlobalNav from "../components/nav";
import * as list from "./data.json";

export default function Page() {
    return <>

        <div id="container">

            <GlobalNav />

            <main>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1>my work</h1>
                        <p>Looking through people’s portfolios can be overwhelming, especially when they’re like mine -- chaotic, colourful, and very diverse. I decided to sort through the content on this website and categorize it by relevant skills which you, as an employer, may be looking for. Click on any of the buttons below to filter my projects. Or, if you’re just here to browse, scroll through all the projects below at your own leisure :)</p>
                    </div>
                </div>

                <section id="project-container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 text-center">
                            <h2>all professional projects</h2>
                        </div>
                    </div>
                </section>



                {list.map((item, li) => {

                    return <>

                        <div className="col">
                            <div className="product-tile p-0">
                                <a href="page/product-page/sticker.html">
                                    <img className="product-img" src="img/st-stuffers/sticker.webp"
                                        alt="sticker sheet with various winter art" />
                                    <div className="product-content">
                                        <h3>                        {item.name}                                    </h3>
                                        <p className="pricetag">$6.91</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </>

                })}

            </main >
        </div>
    </>
}
