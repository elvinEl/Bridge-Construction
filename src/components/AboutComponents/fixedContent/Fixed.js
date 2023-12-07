import React from "react";
import { useTranslation } from "react-i18next";
function Fixed() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full attack mt-20 h-full text-white flex justify-center items-center  flex-col">
        <div
          className="flex justify-center items-center flex-col z-50 max-w-[60%] mx-auto max-lg:max-w-[95%] max-lg:text-center"
          data-aos="zoom-in"
        >
          <p className="text-[1.75rem] font-bold justify-center">
            {t("Növbəti böyük dəyişikliyə hazırsınız?")}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Fixed;
