import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { json, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServicesById } from "../../store/services/serviceActions";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function ServicesDetails() {
  const { i18n } = useTranslation();
  const { general_key } = useParams();
  const serviceR = useSelector((state) => state.service.serviceData);
  const dispatch = useDispatch();
  const serviceDetailRedux = useSelector(
    (state) => state.serviceDetail.serviceDataDetail
  );
  console.log(serviceDetailRedux);


  useEffect(() => {
    if (serviceDetailRedux) {
      const serviceDetailRedux =JSON.parse(localStorage.getItem("sponsors"));
      console.log(serviceDetailRedux);
    }
  },[]);


  useEffect(() => {
    let dataS =
      serviceR && serviceR.find((item) => item.general_key === general_key);
    const language = i18n.language;
    dispatch(fetchServicesById({ dataS, language }));
  }, [dispatch, i18n.language, general_key]);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, [swiperRef.current]);

  return (
    <div className="pt-20 max-w-[80%] mx-auto min-h-[70vh]">
      <p>{serviceDetailRedux.content && serviceDetailRedux.content.title}</p>
      {/* <p className="flex justify-center text-[#ec0e0e] font-bold text-[24px]">
        {serviceDetailRedux.content && serviceDetailRedux.content.title}
      </p> */}
      {/* <p
        className="flex justify-start text-black text-[18px] mt-12"
        dangerouslySetInnerHTML={{
          __html:
            serviceDetailRedux.content &&
            serviceDetailRedux.content.description,
        }}
      ></p> */}
      {/* <div className="flex">
        {serviceDetailPartners && (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {serviceDetailPartners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <img src={partner.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div> */}
    </div>
  );
}

export default ServicesDetails;
