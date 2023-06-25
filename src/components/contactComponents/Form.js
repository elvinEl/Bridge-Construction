import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const notify = () => toast("Mesajınız göndərildi");
  const errorNotify = () => toast("Mesajınız göndərilmədi !");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://10.138.1.35:8000/api/v1/contact";
    const XStaticToken = "b@b!um1JBF4rRs#gGskv^SaFC5@DX68y";

    try {
      const response = await axios
        .post(url, formData, {
          headers: {
            XStaticToken: XStaticToken,
          },
        })
        .then(
          (result) => {
            notify(result.text);
          },
          (error) => {
            errorNotify(error.text);
          }
        );
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      errorNotify(error.text).then(
        (result) => {
          notify(result.text);
        },
        (error) => {
          errorNotify(error.text);
        }
      );
    }
  };

  return (
    <div className="overflow-hidden grid grid-cols-2 max-w-[80%] mx-auto mt-20 gap-8 max-md:grid-cols-1 max-lg:max-w-[90%] max-md:max-w-[95%]">
      <div className="col-span-1 h-[395px] max-xl:h-full" data-aos="fade-right">
        <img className="w-full h-full" src="./assets/contact/c2.jpg" alt="" />
      </div>
      <div className="col-span-1" data-aos="fade-left">
        <p className="font-bold text-[2.5rem] max-md:text-[1.8rem]">{t("Mesaj Göndər")}</p>
        <form className=" flex flex-col max-md:mt-4" onSubmit={handleSubmit}>
          <div className="relative z-0 mb-4">
            <input
              type="text"
              name="name"
              tabIndex="1"
              value={formData.name}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="name-input"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              required
            >{t("Ad")}
              
            </label>
          </div>

          <div className="relative z-0 mb-4">
            <input
              type="text"
              name="surname"
              tabIndex="2"
              value={formData.surname}
              onChange={handleInputChange}
              id="surname-input"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="surname-input"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              required
            >{t("Soyad")}
             
            </label>
          </div>

          <div className="relative z-0 mb-4">
            <input
              type="number"
              name="phone"
              tabIndex="3"
              value={formData.phone}
              onChange={handleInputChange}
              id="phone-input"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone-input"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              required
            >{t("Nömrə")}
              
            </label>
          </div>

          <div className="relative z-0 mb-4">
            <input
              type="email"
              name="email"
              tabIndex="4"
              value={formData.email}
              onChange={handleInputChange}
              id="email-input"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email-input"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              required
            >{t("E-Poçt")}
              
            </label>
          </div>
          <div className="flex justify-end">
            <button
              className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              type="submit"
            >{t("Göndər")}
             
            </button>
          </div>

          <div>
            <Toaster position="top-center" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
