import React from "react";
import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BsEnvelopeOpen } from "react-icons/bs";
function Footer() {
  return (
    <div>
      <div className="bg-white max-w-[80%] mx-auto grid grid-cols-4 my-12 gap-2">
        <div className="col-span-1">
          <p className="">Bridge Construction</p>
          <p className="font-light mt-4 text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            fuga voluptatum unde, expedita sapiente officiis sunt eligendi nulla
            vel odio doloribus iste quibusdam laudantium eaque animi atque
            repellendus labore modi.
          </p>
        </div>
        <div className="col-span-1 px-6">
          <p>Services</p>
          <div className="flex flex-col mt-4 font-light  text-[15px]">
            <NavLink to="/">Service1</NavLink>
            <NavLink to="/">Service2</NavLink>
            <NavLink to="/">Service3</NavLink>
            <NavLink to="/">Service4</NavLink>
          </div>
        </div>
        <div className="col-span-1 px-6">
          <p>About Us</p>
          <div className="flex flex-col mt-4 font-light  text-[15px]">
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Works</NavLink>
            <NavLink to="/">Team</NavLink>
            <NavLink to="/">Services</NavLink>
          </div>
        </div>
        <div className="col-span-1">
          <p>Adress</p>
          <div className=" mt-4 font-light  text-[15px]">
            <p className="flex items-center justify-start gap-2">
              <CiLocationOn />
              <span>St. 214, Block DS-11, Baku, Azerbaijan</span>
            </p>
            <p className="flex items-center justify-start gap-2">
              <BsEnvelopeOpen />
              <span>info@company.com</span>
            </p>
          </div>
        </div>
      </div>
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
