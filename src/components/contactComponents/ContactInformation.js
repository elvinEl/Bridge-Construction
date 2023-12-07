import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../store/contact/contactActions";

function ContactInformation() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const contactRedux = useSelector((state) => state.contact.contactData);
  const firstContact = contactRedux.length > 0 ? contactRedux[0].phones : null;
  const elvin = firstContact && firstContact ? firstContact.split(",") : [];
  const mapMobile = elvin.map((item) => item.trim());
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchContact({ language }));
  }, [dispatch, i18n.language]);

  

  return (
    <div className="max-w-[80%] mx-auto text-[#6c757d] mt-20 max-lg:max-w-[90%] max-md:max-w-[95%]">
      <p className="text-[1.25rem]">{t("Bizimlə qalın!")}</p>
      <p className="text-black font-bold text-[2.5rem] mb-8 max-md:text-[1.8rem]">
        {t("Xidmətinizdəyik 7/24!")}
      </p>
      <div data-aos="fade-right">
        {Object.keys(contactRedux).map((key) => (
          <div key={key} className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-4">
            <div className="col-span-1 mt-4 flex">
              <div>
                <img src={contactRedux[key].logo} alt="" />
              </div>
              <div>
                <p className="text-[17px] font-bold text-black mb-2 max-md:mb-0">
                  {t("Email")}
                </p>
                <p>{contactRedux[key].email}</p>
              </div>
            </div>
            {contactRedux && contactRedux.length > 0 && contactRedux[0].phones && (
            <div className="col-span-1 mt-4">
              <p className="text-[17px] font-bold text-black mb-2 max-md:mb-0">
                {t("Telefon")}
              </p>
              <div>
                {mapMobile.map((item,index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            )}
            <div className="col-span-1 mt-4">
              <p className="text-[17px] font-bold text-black mb-2 max-md:mb-0">
                {t("Ünvan")}
              </p>
              <p>{contactRedux[key].address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInformation;
