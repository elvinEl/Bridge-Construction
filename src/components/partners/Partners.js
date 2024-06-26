import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { useTranslation } from "react-i18next";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Partners = () => {
  const { t } = useTranslation();
  const [slideData, setSlideData] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const response = await fetch(`${baseUrl}/partners`);
        const data = await response.json();
        setSlideData(data);
      } catch (error) {
        console.error("Error");
      }
    };

    fetchSlideData();
  }, [baseUrl]);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    updateSlidesPerView();
    const handleResize = () => {
      updateSlidesPerView();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (swiper) {
      swiper.autoplay.start();
    }
  }, [swiper]);

  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
    swiperRef.current = swiperInstance;
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.isEnd) {
      setSlideData((prevData) => [...prevData.slice(1), prevData[0]]);
    }
  };

  const handleSlideClick = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="mt-20">
      <br />
      <div className=" max-w-[80%] mx-auto py-12  max-lg:max-w-[90%] max-md:max-w-[95%]">
        <p className="text-black font-bold text-[2.5rem] mb-8 max-md:text-[1.8rem]">
          {t("Partnyorlar")}
        </p>
        {slideData.length > 0 ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index} onClick={handleSlideClick}>
                <div className="gray flex justify-center items-center bg-white w-full  bg-contain h-[200px] ">
                  <img className=" w-full " src={slide.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Partners;
