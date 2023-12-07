import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServicesById } from "../../store/services/serviceActions";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function ServicesDetails() {
  const { i18n, t } = useTranslation();
  const { general_key } = useParams();
  const dispatch = useDispatch();
  const serviceDetailRedux = useSelector(
    (state) => state.serviceDetail.serviceDataDetail
  );

  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchServicesById({ general_key, language }));
  }, [dispatch, i18n.language, general_key]);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.autoplay.start();
    }
  }, [serviceDetailRedux.partners]);

  return (
    <div>
      <div className="bg-image-contact  min-h-[100vh] bg-cover"></div>
      <div className="quadrangle">
        <div className="quadrangle_text">
          <p className="text-[#db4e28]"> {t("Xidmətlər")}</p>
          <p className="text-[3.5rem]  font-bold max-md:text-[2rem]">
            {" "}
            {serviceDetailRedux.content && serviceDetailRedux.content.title}
          </p>
        </div>
      </div>
      <div className="pt-20 max-w-[80%] mx-auto min-h-[70vh] max-lg:max-w-[90%] max-md:max-w-[95%]">
        <p className="flex justify-center text-[#ec0e0e] font-bold text-[24px]">
          {serviceDetailRedux.content && serviceDetailRedux.content.title}
        </p>
        <div
          className=" text-black text-[18px] mt-12 deco"
          dangerouslySetInnerHTML={{
            __html:
              serviceDetailRedux.content &&
              serviceDetailRedux.content.description,
          }}
          
        ></div>
      
        {/* <div className="grid grid-cols-3 mt-20 max-md:grid-cols-1 ">
        <div></div>
        <div className="">
          {serviceDetailRedux.partners &&
            serviceDetailRedux.partners.length > 0 && (
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {serviceDetailRedux.partners.map((partner, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center items-center bg-white w-full h-[200px] ">
                      <img src={partner.image} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
        </div>
        <div></div>
      </div> */}
      </div>
    </div>
  );
}

export default ServicesDetails;
