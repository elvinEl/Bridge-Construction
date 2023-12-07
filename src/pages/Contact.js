import React, { useEffect } from "react";
import ContactInformation from "../components/contactComponents/ContactInformation";
import Fixed from "../components/AboutComponents/fixedContent/Fixed";
import ContactForm from "../components/contactComponents/Form";
import { useTranslation } from "react-i18next";
import Helmet from "react-helmet";
import { fetchContact } from "../store/contact/contactActions";
import { useSelector, useDispatch } from "react-redux";
function Contact() {
  const dispatch = useDispatch();
  const contactRedux = useSelector((state) => state.contact.contactData);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("Əlaqə")}</title>
      </Helmet>
      <div className="bg-image-contact  min-h-[100vh] bg-cover"></div>
      <div className="quadrangle">
        <div className="quadrangle_text">
          <p className="text-[#db4e28]"> {t("Əlaqə")}</p>
          <p className="text-[3.5rem] font-bold max-md:text-[3rem]">
            {" "}
            {t("Bizimlə")}
          </p>
          <p className="bg-[#db4e28] text-white px-4 py-1 font-bold inline-block text-[3.5rem] max-md:text-[2.5rem]">
            {t("Qal")}
          </p>
        </div>
      </div>
      <ContactInformation />
      <ContactForm />
      <div className="max-w-full mx-auto mt-20">
        {Object.keys(contactRedux).map((key) => (
          <iframe
          key={key}
            src={contactRedux[key].address_link}
            width="100%"
            className=""
            title="map"
            height="450"
          ></iframe>
        ))}
      </div>
      <Fixed />
    </div>
  );
}

export default Contact;
