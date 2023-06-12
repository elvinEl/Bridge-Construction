import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../../store/contact/contactActions";

function ContactInformation() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const contactRedux = useSelector((state) => state.contact.contactData);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchContact({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d] mt-20">
      <p className="text-[1.25rem]">Stay tuned!</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 ">
        We are available 24/7!
      </p>
      <div
        className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-4"
        data-aos="fade-right"
      >
        {Object.keys(contactRedux).map((key) => (
          <div >
            <div className="col-span-1 mt-4">
              <p className="text-[17px] font-bold text-black mb-2 max-md:mb-0">
                {contactRedux[key].email}
              </p>
              <p>{contactRedux[key].phone}</p>
            </div>
            <div className="col-span-1 mt-4">
              <p className="text-[17px] font-bold text-black mb-2 max-md:mb-0">
                {contactRedux[key].email}
              </p>
              <p>{contactRedux[key].phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInformation;
