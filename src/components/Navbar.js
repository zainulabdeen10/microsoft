import React, { useState } from "react";
import {
  FaBars,
  FaCaretDown,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

import Logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="navbar flex justify-between items-center p-4 h-10 mt-4">
        <div className="flex justify-center items-center md:order-2">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="space-y-1.5 p-4 cursor-pointer md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                isOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                isOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
          <div
            className={`absolute bg-custom-gray-200 w-full left-0  mt-2 top-16 px-4 py-2 flex flex-col items-start md:hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <a href="#home" className="py-2 hover:bg-gray-200 w-full text-left">
              Microsoft 365
            </a>
            <a
              href="#services"
              className="py-2 hover:bg-gray-200 w-full text-left"
            >
              Office
            </a>
            <a
              href="#about"
              className="py-2 hover:bg-gray-200 w-full text-left"
            >
              Copilot
            </a>
            <a
              href="#contact"
              className="py-2 hover:bg-gray-200 w-full text-left"
            >
              Windows
            </a>
            <a
              href="#contact"
              className="py-2 hover:bg-gray-200 w-full text-left"
            >
              Support
            </a>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-black relatives hover:text-gray-900 flex items-center mt-3"
            >
              Software <FaCaretDown className="ml-1 " />
            </button>
            {dropdownOpen && (
              <div className="absolute bg-[#E6E6E6] w-full left-0 top-32 mt-28 px-4 py-2 flex flex-col items-start">
                <a
                  href="#office365"
                  className="px-4 py-2 w-full text-left border-b border-black"
                >
                  Windows Apps
                </a>
                <a
                  href="#azure"
                  className="px-4 py-2 hover:bg-gray-100 w-full border-b border-black text-left "
                >
                  AI1
                </a>
                <a
                  href="#dynamics365"
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left border-b  border-black"
                >
                  OneDrive
                </a>
                <a
                  href="#windows"
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left  border-b border-black"
                >
                  Outlook
                </a>
                <a
                  href="#windows"
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left border-b  border-black"
                >
                  Skype
                </a>
                <a
                  href="#windows"
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left border-b border-black"
                >
                  OneNote
                </a>
                <a
                  href="#windows"
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left  border-b border-black"
                >
                  Microsoft Teams
                </a>
              </div>
            )}
          </div>
          <div className="Search md:hidden mx-6 w-4 transform scaleX(-3)">
            <FaSearch className="scale-x-[-1]" />
          </div>
        </div>
        <div className="logo  text-center flex md:order-1 ml-0">
          <div className="w-48 p-5">
            <img src={Logo} alt="Microsoft Logo" className="w-24" />
          </div>
          <div className="feature w-fit bg-gray-200  absolute md:static inset-0 left-[-100%] md:flex md:mx-4 md:w-auto font-segoe text-sm md:bg-white md:space-x-5  md:translate-x-0 mt-4">
            <div className="fitem hover:underline cursor-pointer">
              Microsoft365
            </div>
            <div className="fitem hover:underline cursor-pointer">Office</div>
            <div className="fitem hover:underline cursor-pointer">Copilot</div>
            <div className="fitem hover:underline cursor-pointer">Windows</div>
            <div className="fitem hover:underline cursor-pointer">Support</div>
          </div>
        </div>
        <div className="cart text-center md:order-3 flex mt-3 font-13px">
          <div className="Search hidden md:block mx-5 mb-1 ">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              All Microsoft <FaCaretDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute z-50  right-14 py-2 w-screen max-w-screen-xl mt-6 bg-[#F2F2F2] shadow-lg grid grid-cols-2 md:grid-cols-5">
                <div className="p-2 ">
                  <p className="font-bold text-gray-800">Software</p>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Windows Apps
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    AI
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    OneDrive
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Outlook
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Skype
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    OneNote
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft Teams
                  </a>
                </div>
                <div className="p-2">
                  <p className="font-bold text-gray-800">PCs & Devices</p>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Shop Xbox
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Accessories
                  </a>
                </div>
                <div className="p-2">
                  <p className="font-bold text-gray-800">Entertainment</p>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Xbox games
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    PC games
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Windows digital games
                  </a>
                </div>
                <div className="p-2">
                  <p className="font-bold text-gray-800">Business</p>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft Cloud
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft Security
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Azure
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Dynamics 365
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft 365 for business
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft Industry
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline "
                  >
                    Microsoft Power Platform
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline "
                  >
                    Microsoft Power Platform
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Windows 365
                  </a>
                </div>

                <div className="p-2">
                  <p className="font-bold text-gray-800">Development & IT</p>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft Cloud
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft Security
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Azure
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Dynamics 365
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft 365 for business
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft Industry
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Microsoft Power Platform
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-gray-600 hover:bg-gray-100 hover:underline"
                  >
                    Windows 365
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="Search hidden md:block cursor-pointer ">
            <FaSearch className="scale-x-[-1] w-6 " />{" "}
          </div>
          <div className=" flex space-x-3 cursor-pointer ">
            {" "}
            <FaShoppingCart className="ml-1 w-10" />{" "}
          </div>
          <div className="flex space-x-3 cursor-pointer ">
            <FaUserCircle className="ml-1 w-5 h-5" />
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default Navbar;
