import React from "react";
import ProjectList from "../projects/data.json";

import Slider from "@ant-design/react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../projects/projects.css";

export default function Carousel(props) {

    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
    };

    const project = ProjectList[props.project];

    const images = project.carousel;

    return <>
        <div key={project.id} className="slider-container project-carousel mx-3 my-4">
            <Slider {...settings}>
                <div>
                    <img src={"../images/projects" + images["img-1"]} />
                </div>
                <div>
                    <img src={"../images/projects" + images["img-2"]} />
                </div>
                <div>
                    <img src={"../images/projects" + images["img-3"]} />
                </div>
                <div>
                    <img src={"../images/projects" + images["img-4"]} />
                </div>
                <div>
                    <img src={"../images/projects" + images["img-5"]} />
                </div>

            </Slider>
        </div>
    </>;
}
