import React, { useState } from 'react';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import Logo from "../images/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Microsoft Logo" className="h-8" />
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Microsoft 365</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Office</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Copilot</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Windows</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden md:block relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-600 hover:text-gray-900 flex items-center">
            All Microsoft <FaCaretDown className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-screen max-w-screen-xl bg-white shadow-lg grid grid-cols-2 md:grid-cols-5">
              <div className="p-4">
                <p className="font-bold text-gray-800">Software</p>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Windows Apps</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">AI</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">OneDrive</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Outlook</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Skype</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">OneNote</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Microsoft Teams</a>
              </div>
              <div className="p-4">
                <p className="font-bold text-gray-800">PCs & Devices</p>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Shop Xbox</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Accessories</a>
              </div>
              <div className="p-4">
  
                <p className="font-bold text-gray-800">Entertainment</p>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Xbox games</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">PC games</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Windows digital games</a>
                </div>
                <div className="p-4">
                    <p className="font-bold text-gray-800">Business</p>
                    <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Microsoft Cloud</a>
                    <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Microsoft Security</a>
                    <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Azure</a>
                    <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Dynamics 365</a>
                    <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Microsoft 365 for business</a>
                    <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Microsoft Industry</a>
                    <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Microsoft Power Platform</a>
                    <a href="#" className="block p-2 text-gray-600 hover:bg-gray-100">Windows 365</a>
                    </div>
              
            </div>
          )}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-gray-600" />
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-2 flex flex-col items-start md:hidden">
          <a href="#" className="px-4 py-2 block text-gray-700 hover:bg-gray-100">Microsoft 365</a>
          <a href="#" className="px-4 py-2 block text-gray-700 hover:bg-gray-100">Office</a>
          <a href="#" className="px-4 py-2 block text-gray-700 hover:bg-gray-100">Copilot</a>
          <a href="#" className="px-4 py-2 block text-gray-700 hover:bg-gray-100">Windows</a>
          <a href="#" className="px-4 py-2 block text-gray-700 hover:bg-gray-100">Support</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
