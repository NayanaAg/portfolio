import React, { Component } from "react";
import Slider from "@ant-design/react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectList from "../projects/data.json";
import "../projects/projects.css";

function CenterMode(props) {

    let project = ProjectList[props.project]

    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true
    };
    return (
        <div className="slider-container project-carousel mx-3 my-4">
            <Slider {...settings}>
                <div>
                    <img src="../images/hero-banner.jpg" />
                </div>
                <div>
                    <img src="../images/hero-banner.jpg" />
                </div>
                <div>
                    <img src="../images/hero-banner.jpg" />
                </div>
                <div>
                    <img src="../images/hero-banner.jpg" />
                </div>
                <div>
                    <img src="../images/hero-banner.jpg" />
                </div>
                <div>
                    <img src="../images/hero-banner.jpg" />
                </div>
            </Slider>
        </div>
    );
}

export default CenterMode;
