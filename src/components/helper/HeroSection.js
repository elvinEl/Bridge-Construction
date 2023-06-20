import React, { useState } from "react";
import Slider from "react-slick";
import "../../styles/sliderHero.css";

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

  const slideContent = [
    {
      image: "./assets/hero/h.jpg",
      caption: "Interiyer Və Eksteriyer ",
      captionhelper: "Həlləri",
    },
    {
      image: "./assets/hero/h1.jpg",
      caption: "Mega",
      captionhelper: "Strukturlar",
    },
    {
      image: "./assets/hero/h2.jpg",
      caption: "Körpü və Yol",
      captionhelper: "Tikintiləri",
    },
  ];

  return (
    <div className="max-w-[100%] object-cover mx-auto relative max-md:max-w-full select-none">
      <Slider {...settings}>
        {slideContent.map((slide, index) => (
          <div key={index} className="w-fit">
            <div className="slide-container">
              <div className="quadrangle_home">
                <img
                  className={`w-[100%] ${
                    currentSlide === index ? "active" : "inactive"
                  }`}
                  src={slide.image}
                  alt=""
                />
                <div
                  className={`caption ${
                    currentSlide === index ? "active" : "inactive"
                  }`}
                >
                  <p>{slide.caption}</p>
                  <div className="relative">
                    <div className="overflow-hidden">
                      <p className="from-below bg-[#ec0e0e] text-white px-4 py-1 font-bold inline-block text-[2.5rem] max-md:text-[2.5rem]">
                        {slide.captionhelper}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
