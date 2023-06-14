import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Partners = () => {
  const [slideData, setSlideData] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const response = await fetch("http://10.138.1.35:8000/api/v1/partners");
        const data = await response.json();
        setSlideData(data);
      } catch (error) {
        console.log("API çağrısı sırasında bir hata oluştu:", error);
      }
    };

    fetchSlideData();
  }, []);

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
      // Slaytın sonuna gelindiğinde, slideData dizisini sonsuz döngüye sokmak için yeniden düzenliyoruz
      setSlideData((prevData) => [...prevData.slice(1), prevData[0]]);
    }
  };

  const handleSlideClick = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="bg-image-comments mt-20 ">
      <br />
      <div className="max-w-[80%] mx-auto py-12 max-lg:max-w-[90%] ">
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
                <div className="flex justify-center items-center bg-white w-full gap-8 bg-contain h-[200px] ">
                  <img className="w-full" src={slide.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Veriler yükleniyor...</p>
        )}
      </div>
    </div>
  );
};

export default Partners;
