import React from "react";
import ContactInformation from "../components/contactComponents/contact/ContactInformation";
import Fixed from "../components/AboutComponents/fixedContent/Fixed";
import ContactForm from "../components/contactComponents/contactForm/Form";
function Contact() {
  return (
    <div>
      <div className="bg-image-contact  min-h-[100vh] bg-cover"></div>
      <div className="quadrangle">
        <div className="position-div ">
          <p className="text-[#ec0e0e]">Contact Us</p>
          <p className="text-[3.5rem] font-bold">Stay</p>
          <p className="bg-[#ec0e0e] text-white px-4 py-1 font-bold inline-block text-[3.5rem]">
            In Touch
          </p>
        </div>
      </div>
      <ContactInformation />
      <ContactForm/>
      <div className="max-w-full mx-auto mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13164.56984149192!2d49.83000931777387!3d40.36761540913754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dcbf4d71c19%3A0x9fe40067a25dc63a!2z0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0J_RgNC10LfQuNC00LXQvdGC0LAg0JDQoA!5e0!3m2!1sru!2saz!4v1686041933294!5m2!1sru!2saz"
          width="100%"
          className=""
          height="450"
        ></iframe>
      </div>

      <Fixed />
    </div>
  );
}

export default Contact;
