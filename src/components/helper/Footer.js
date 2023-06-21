import React, { useEffect } from "react";
import { NavLink,Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { fetchContact } from "../../store/contact/contactActions";
import { fetchServices } from "../../store/services/serviceActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Footer() {
  const {general_key} = useParams();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const servicesRedux = useSelector((state) => state.service.serviceData);
  const contactRedux = useSelector((state) => state.contact.contactData);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchServices({ language }));
    dispatch(fetchContact({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div>
      {Object.keys(contactRedux).map((key) => (
        <div className="bg-white max-w-[80%] mx-auto grid grid-cols-4 my-12 gap-2 max-md:grid-cols-1 max-md:max-w-[95%]">
          <div className="col-span-1">
            <p className="">{t("Sosial Media")}</p>

            <div className="flex gap-4">
              <a
                className="bg-white rounded-full px-2 py-2 hover:rotate-180 duration-500 max-md:hover:rotate-0"
                target="_blank"
                href={contactRedux[key].instagram}
              >
                <span className="text-[26px] text-yellow-500">
                  <BsInstagram />
                </span>
              </a>

              <a
                className="bg-white rounded-full px-2 py-2 hover:rotate-180 duration-500 max-md:hover:rotate-0"
                target="_blank"
                href={contactRedux[key].facebook}
              >
                <span className="text-[26px] text-yellow-500">
                  <BsFacebook />
                </span>
              </a>
            </div>
          </div>
          <div className="col-span-1 ">
            <p>{t("Naviqasiya")}</p>
            <div className="flex flex-col mt-4 font-light  text-[15px]">
              <NavLink to="/">{t("Ana Səhifə")} </NavLink>
              <NavLink to="/about">{t("Haqqımızda")} </NavLink>
              <NavLink to="/services">{t("Xidmətlərimiz")} </NavLink>
              <NavLink to="/contact">{t("Əlaqə")} </NavLink>
            </div>
          </div>
          <div className="col-span-1">
            <p>{t("Xidmətlər")} </p>
            <div className="flex flex-col mt-4 font-light  text-[15px]">
              {Object.keys(servicesRedux).map((key) => (
                <Link to={`services/${servicesRedux[key].general_key}`}>
                  {servicesRedux[key].title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <p>{t("Əlaqə")}</p>
            <div className=" mt-4 font-light  text-[15px]">
              <>
                <p className="flex items-center justify-start gap-2">
                  <CiLocationOn />
                  {contactRedux[key].address}
                </p>
                <a
                  href="mailto:"
                  className="flex items-center justify-start gap-2"
                >
                  <BsEnvelopeOpen />
                  <span>{contactRedux[key].email}</span>
                </a>
                <p className="flex items-center justify-start gap-2">
                  <BsFillTelephoneFill />
                  {contactRedux[key].phones.split(",")[0]}
                </p>
              </>
            </div>
          </div>
        </div>
      ))}
      <div className="h-[1px] w-full bg-[#d0d0d0]"></div>
      <div className="flex justify-between max-w-[80%] mx-auto py-4">
        <div>
          <p className="font-light text-[14px]">Copyright ©2023</p>
        </div>
        <div>
          <p className="font-light text-[14px]">DDT</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
