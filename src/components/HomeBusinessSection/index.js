import React from 'react';
import { microsoftTypesData } from './data';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const MicrosoftTypes = () => {
  return (
    <>
    <div className='xl:text-3xl mb-4 font-bold font-segoe mt-20 ml-4 sm:text-base'>For Business</div>
   <div className=" flex  items-center max-w-screen container mb-20  px-10 md:pl-10 ">
      <div className="grid md:grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4" >
        {microsoftTypesData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.alt} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="font-segoe font-semibold lg:text-2xl text-3xl mb-2">{item.title}</h3>
              <p className="text-black font-segoe text-base mb-4">{item.description}</p>
              <button className={item.button.className}>{item.button.text}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
     <div className="flex items-center space-x-5 ml-14 mb-10">
      <span className="font-semibold text-lg">Follow Microsoft</span>
      <a href="https://www.facebook.com/Microsoft" className="text-black hover:text-blue-600 text-lg">
        <FaFacebookF className='text-lg' />
      </a>
      <a href="#" className="text-black hover:text-gray-600"> {/* Link should be replaced with actual functionality or URL */}
        <AiOutlineClose className='text-lg' />
      </a>
      <a href="https://www.linkedin.com/company/microsoft" className="text-black hover:text-blue-500">
        <FaLinkedinIn className='text-lg'/>
      </a>
    </div>
    </>
  );
};

export default MicrosoftTypes;