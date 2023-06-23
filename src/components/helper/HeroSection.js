import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../styles/sliderHero.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideContent, setSlideContent] = useState([]);
  const { t } = useTranslation();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchSlideContent = async () => {
      try {
        const response = await axios.get(`${baseUrl}/sliders`);
        setSlideContent(response.data);
      } catch (error) {
        console.log("API ERROR", error);
      }
    };
    fetchSlideContent();
  }, []);

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
        {slideContent.map((slide, index) => (
          <div key={index} className="w-fit">
            <div className="slide-container">
              <div className="quadrangle_home">
                <img
                  className={`w-[100%]  max-lg:h-[80vh] object-cover ${
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
                  <p className="from-above">{slide.title}</p>
                  <div className="relative">
                    <div className="overflow-hidden">
                      <p
                        className="from-below bg-[#ec0e0e] text-white px-4 py-1 font-bold inline-block text-[2.5rem] max-md:text-[2.5rem]"
                        dangerouslySetInnerHTML={{
                          __html: slide.description,
                        }}
                      ></p>
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
