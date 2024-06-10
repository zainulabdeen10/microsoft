import React from 'react';

import OutlookImage from '../../images/Outlook.jpg';

const App = () => {
  return (
    <div className="relative text-white ml-10 mr-10 mb-10">
      <img src={OutlookImage} alt="Outlook for iOS and Android" className="w-full h-auto"/>
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-base font-bold mb-4 text-black ">Outlook for iOS and Android</h1>
        <h3 className="text-xl mb-4 text-black">Connect. Organise. Get things done.</h3>
        <button className="bg-blue-800  font-bold py-2 px-6 rounded">
          Download now
        </button>
      </div>
    </div>
  );
};

export default App;
