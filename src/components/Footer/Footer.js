import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { BsCheckSquareFill } from 'react-icons/bs'; 

const footerData = [
  {
    title: "Microsoft Store",
    links: [
      "Account profile", 
      "Download Center", 
      "Returns", 
      "Order tracking"
    ]
  },
  {
    title: "Education",
    links: [
      "Microsoft in education", 
      "Devices for education", 
      "Microsoft Teams for Education", 
      "Office Education",
      "Educator training and development",
       "Deals for students and parents",
       "Azure for students",
    ]
  },
  {
    title: "Business",
    links: [
      "Microsoft Cloud", 
      "Microsoft Security", 
      "Azure", 
      "Dynamics 365",
      "Microsoft 365",
      "Microsoft Advertising",
      "Copilot for Microsoft 365",
       "Microsoft Teams",

    ]
  },
  {
    title: "Developer & IT",
    links: [
      "Developer Center", 
      "Documentation", 
      "Microsoft Learn", 
      "Azure Marketplace",
      "AppSource",
       "Microsoft Power Platform",
        "Visual Studio",

    ]
  },
  {
    title: "Company",
    links: [
      "Careers", 
      "About Microsoft", 
      "Company news", 
      "Privacy at Microsoft",
      "Investors",
       "Sustainability",
    ]
  }
];

const Footer = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {footerData.map((column, index) => (
          <div key={index}>
            <h3 className="font-bold mb-2">{column.title}</h3>
            <ul>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-1 hover:underline cursor-pointer text-sm">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
       <div className="bg-gray-100 p-5 text-sm mt-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-3 text-gray-600">
          <FaGlobe className="text-blue-500 hover:underline cursor-pointer"/>
          <span className='hover:underline cursor-pointer'>English (Pakistan)</span>
          <BsCheckSquareFill className="text-blue-700 hover:underline cursor-pointer"/>
          <span className='hover:underline cursor-pointer'>Your Privacy Choices</span>
          <span className='hover:underline cursor-pointer'>Consumer Health Privacy</span>
        </div>

        <div className="flex items-center space-x-4 text-gray-600">
          <a href="#" className="hover:underline">Contact Microsoft</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms of use</a>
          <a href="#" className="hover:underline">Trademarks</a>
          <a href="#" className="hover:underline">About our ads</a>
          <span>© Microsoft 2024</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
