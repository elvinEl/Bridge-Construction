import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Comments = () => {
  const [slideData, setSlideData] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const response = await fetch("http://10.138.1.35:8000/api/v1/services"); // API_ENDPOINT, gerçek API adresinizi buraya yerleştirin
        const data = await response.json();
        setSlideData(data); // API'den gelen verileri slideData state'ine yerleştiriyoruz
      } catch (error) {
        console.log("API çağrısı sırasında bir hata oluştu:", error);
      }
    };

    fetchSlideData();
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
    <div className="bg-image-comments mt-20">
      <br />
      <div className="max-w-[80%] mx-auto pb-8">
        {slideData.length > 0 ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index} onClick={handleSlideClick}>
                <div className="bg-white py-12 px-4">
                  <p className="text-[#6c757d] font-light pb-2">
                    {slide.content}
                  </p>
                  <p>{slide.author}</p>
                </div>
              </SwiperSlide>
            ))}
            {/* İlk slaytın sonuna, slideData dizisinin başına eklenen slaytları burada da ekleyebilirsiniz */}
            {slideData.slice(0, 2).map((slide, index) => (
              <SwiperSlide key={`extra-${index}`} onClick={handleSlideClick}>
                <div className="bg-white py-12 px-4">
                  <p className="text-[#6c757d] font-light pb-2">
                    {slide.title}
                  </p>
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

export default Comments;
