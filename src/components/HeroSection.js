import React, { useState } from "react";
import Slider from "react-slick";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    fade: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="max-w-[100%] object-cover mx-auto relative max-md:max-w-full select-none">
      <Slider {...settings}>
        <div className="w-fit">
          <img
            className={`w-[100%] ${currentSlide === 0 ? "active" : "inactive"}`}
            src="./assets/hero/h.jpg"
            alt=""
          />
        </div>
        <div className="w-fit">
          <img
            className={`w-[100%] ${currentSlide === 1 ? "active" : "inactive"}`}
            src="./assets/hero/h1.jpg"
            alt=""
          />
        </div>
        <div className="w-fit">
          <img
            className={`w-[100%] ${currentSlide === 2 ? "active" : "inactive"}`}
            src="./assets/hero/h2.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;
