import React from "react";
import {useTranslation} from 'react-i18next'
function Fixed() {
  const {t} = useTranslation()
  return (
    <>
      <div className="w-full attack mt-20 h-full text-white flex justify-center items-center  flex-col">
     <div className="flex justify-center items-center flex-col z-50 max-w-[60%] mx-auto max-lg:max-w-[95%] max-lg:text-center" data-aos="zoom-in">
     <p className="text-[1.75rem] font-bold justify-center">{t("Növbəti böyük dəyişikliyə hazırsınız?")} </p>
        <p className="text-[1.25rem] px-2 text-center max-md:text-4">
          Ready for the next big change? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Amet, non maxime quas aut sit inventore incidunt
          animi sequi.
        </p>
        {/* <div>
          <button className="px-4 py-2 mt-3 text-[0.875rem] bg-[#dc3545] hover:bg-[#c82333] duration-300 ">Order Now</button>
        </div> */}
     </div>
        
      </div>
    </>
  );
}

export default Fixed;
