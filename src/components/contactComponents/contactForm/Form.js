import React from "react";

function Form() {
  return (
    <div className="grid grid-cols-2 max-w-[80%] mx-auto mt-20 gap-8">
      <div className="col-span-1" data-aos="fade-right">
        <img src="./assets/contact/c2.jpg" alt="" />
      </div>
      <div className="col-span-1" data-aos="fade-left">
        <p className="text-[1.25rem] text-[#6c757d]">Send Message</p>
        <p className="font-bold text-[2.5rem]">Drop us a line</p>
        <form className="mt-5">
          <div>
            <input type="text" placeholder="Ad" className="border-b-[1px] w-full py-2 outline-none border-black " />
          </div>
          <div>
            <input type="email" placeholder="Email" className="border-b-[1px] w-full outline-none py-2 border-black pt-5"/>
          </div>
          <div>
            <textarea cols="30" rows="5" placeholder="Message" className="border-b-[1px] w-full  outline-none border-black pt-5"></textarea>
          </div>
          <button className="bg-[#dc3545] px-3 py-1 text-white font-light mt-3">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
