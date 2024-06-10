import React from 'react';
import { microsoftTypesData } from './data';

const MicrosoftTypes = () => {
  return (
    <div className=" flex  items-center max-w-screen container  my-20  px-10 md:pl-10 ">
      <div className="grid md:grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4" >
        {microsoftTypesData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.alt} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold lg:text-2xl text-3xl mb-2">{item.title}</h3>
              <p className="text-black text-base mb-4">{item.description}</p>
              <button className={item.button.className}>{item.button.text}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MicrosoftTypes;