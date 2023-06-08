import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Comments = () => {
  const slideData = [
    <div className="bg-white py-12 px-4  ">
      <p className="text-[#6c757d] font-light pb-2">
        Who has ever done this before? Masonic is phenominal.
      </p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4 ">
      <p className="text-[#6c757d] font-light pb-2">
        Who has ever done this before? Masonic is phenominal.
      </p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4">
      <p className="text-[#6c757d] font-light pb-2">
        Who has ever done this before? Masonic is phenominal.
      </p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4">
      <p className="text-[#6c757d] font-light pb-2">
        Who has ever done this before? Masonic is phenominal.
      </p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4">
      <p className="text-[#6c757d] font-light pb-2">
        Who has ever done this before? Masonic is phenominal.
      </p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4">
      <p className="text-[#6c757d] font-light pb-2">
        Who has ever done this before? Masonic is phenominal.
      </p>
      <p>Samir Aliyev</p>
    </div>,
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [swiper, setSwiper] = useState(null);

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

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const handleMouseEnter = () => {
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper) {
      swiper.autoplay.start();
    }
  };

  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
  };

  return (
    <div className="bg-image-comments mt-20">
      <br />
      <div className="max-w-[80%] mx-auto pb-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation
          pagination={{ clickable: true }}
          onSwiper={handleSwiperInit}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;
