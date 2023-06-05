import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Comments = () => {
  const slideData = [
    <div className="bg-white py-12 px-4  ">
      <p className="text-[#6c757d] font-light pb-2">Who has ever done this before? Masonic is phenominal.</p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4 ">
      <p className="text-[#6c757d] font-light pb-2">Who has ever done this before? Masonic is phenominal.</p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4">
      <p className="text-[#6c757d] font-light pb-2">Who has ever done this before? Masonic is phenominal.</p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4">
      <p className="text-[#6c757d] font-light pb-2">Who has ever done this before? Masonic is phenominal.</p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4">
      <p className="text-[#6c757d] font-light pb-2">Who has ever done this before? Masonic is phenominal.</p>
      <p>Samir Aliyev</p>
    </div>,
    <div className="bg-white py-12 px-4">
      <p className="text-[#6c757d] font-light pb-2">Who has ever done this before? Masonic is phenominal.</p>
      <p>Samir Aliyev</p>
    </div>,
  ];

  const [swiper, setSwiper] = useState(null);

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
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000 }}
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
