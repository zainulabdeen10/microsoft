import React from "react";
import { microsoftTypesData } from "./data";

const MicrosoftTypes = () => {
  return (
    <div className="container  my-20 px-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8 px-0 w-[270px] lg:w-full md:w-full sm:w-full">
        {microsoftTypesData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-2xl mb-2">
                {item.title}
              </h3>
              <p className="text-black text-sm sm:text-base md:text-base lg:text-base mb-4">
                {item.description}
              </p>
              <div className="mt-6">
                <button className={item.button.className}>
                  {item.button.text}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MicrosoftTypes;
