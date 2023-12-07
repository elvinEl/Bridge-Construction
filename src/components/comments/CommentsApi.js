import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { ImQuotesLeft } from "react-icons/im";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Partners = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [slideData, setSlideData] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const response = await fetch(`${baseUrl}/comments`);
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
    <div className="bg-image-comments mt-20">
      <br />
      <div className="max-w-[80%] mx-auto pb-8 ">
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
                <div className="flex flex-col items-start bg-white w-full gap-8 bg-contain h-[200px] ">
                  <div className="flex pt-8 flex-col px-4 max-md:pt-4">
                    <span className="text-[40px]">
                      <ImQuotesLeft />
                    </span>
                    <p>{slide.title}</p>
                    <p
                      className="line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    ></p>
                  </div>
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
