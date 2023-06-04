import React from "react";

function ContactHome() {
  return (
    <div className="bg-image z-50 py-12 mt-16" >
      <div className="grid grid-cols-2 px-8 py-8 max-w-[50%] bg-white mx-auto " data-aos="fade-up">
        <div className="col-span-1 flex flex-col">
          <input
            type="text"
            placeholder="Your Email"
            className="outline-none border-b-[1px] border-black py-2 px-2"
          />
          <textarea
            className="outline-none border-b-[1px] border-black py-2 px-2 mt-4"
            cols="20"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="col-span-1 flex flex-col mx-auto items-start">
          <p className="text-[1.25rem] text-[#6c757d]">Stay Tuned!</p>
          <p className="text-black font-bold text-[2.5rem] mb-8 ">
            Contact Us
          </p>{" "}
          <a href="tel:" className="text-[1.5rem] text-[#ec1b30]">
            +994(50)1111111
          </a>
        </div>
        <div className="mt-4">
          <button className="bg-[#dc3545] text-white px-3 py-1 hover:bg-[#c82333] duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactHome;
