import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";
function Header() {
  // LANGUAGE
  const [isOpen, setIsOpen] = useState(false);
  const options = ["AZ", "EN", "RU"];
  const { t, i18n } = useTranslation();

  const [selectedOption, setSelectedOption] = useState(i18n.language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    i18n.changeLanguage(option);
    toggleDropdown();
  };

  const filteredOptions = options.filter((option) => option !== selectedOption);
  // LANGUAGE END

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  const clickHandle = (e) => {
    showNavbar(!showNavbar);
  };
  return (
    <header className="relative max-w-[80%] max-md:max-w-[90%] mx-auto z-50">
      <div>
        <div className="pt-2 absolute min-w-full max-md:flex max-md:justify-between">
          <Link to="/" className="mr-12 hidden max-md:block">
            <img src="../assets/home/logo.png" alt="" />
          </Link>
          <div className="container1">
            <nav
              ref={navRef}
              className="z-50 min-w-full py-4 flex justify-between"
            >
              <ul className="gap-x-5 flex max-md:flex-col max-md:gap-4">
                <Link to="/" className="mr-12 max-md:hidden">
                  <img src="../assets/home/logo.png" alt="" />
                </Link>
                <NavLink
                  onClick={clickHandle}
                  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#db4e28] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px] max-md:hover:text-white'
                  to="/"
                >
                  {t("Ana Səhifə")}
                </NavLink>
                <NavLink
                  onClick={clickHandle}
                  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#db4e28] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px] max-md:hover:text-white'
                  to="about"
                >
                  {t("Haqqımızda")}
                </NavLink>
                <NavLink
                  onClick={clickHandle}
                  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#db4e28] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px] max-md:hover:text-white'
                  to="services"
                >
                  {t("Xidmətlərimiz")}
                </NavLink>
                <NavLink
                  onClick={clickHandle}
                  className='relative text-[#787a7b] no-underline after:content-[""] after:absolute after:bg-[#db4e28] after:h-[3px] after:w-0 after:duration-300 after:left-0 after:bottom-0 after:hover:w-[30px]  font-medium text-sm hover:text-black transition-all  py-[10px] max-md:text-[24px] max-md:hover:text-white'
                  to="contact"
                >
                  {t("Əlaqə")}
                </NavLink>
              </ul>

              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>

              <div
                className={`select-box relative ${isOpen ? "open" : ""}`}
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <div
                  className="custom-selected  py-2 bg-transparent  text-white   cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div className="selected-item">
                    {selectedOption || "Select an option"}
                    <BsChevronCompactDown />
                  </div>
                </div>
                {isOpen && (
                  <div className="dropdown-content">
                    {filteredOptions.map((option) => (
                      <div
                        key={option}
                        className="option py-2  cursor-pointer hover:bg-gray-100"
                        onClick={() => selectOption(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
