import React from 'react';
import OutlookImage from '../../images/Outlook.jpg';

const App = () => {
  return (
      <section className='lg:bg-[#E6E6E6] bg-white overflow-hidden font-segoe mx-10 mt-8 '>
  <div className='container px-4 py-24 mx-auto'>
    <div className="lg:w-4/5 mx-auto flex flex-wrap flex-col lg:flex-row sm:w-full">
      <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 lg:order-1 sm:order-2 sm:my-6 '>
        <h1 className="lg:text-4xl text-lg font-bold title-font tracking-widest text-black">Outlook for iOS and Android</h1>
        <h3 className="text-base text-black title-font mb-4 mt-4">
          Connect. Organise. Get things done
        </h3>
        <button className="flex ml-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-26">Download Now</button>
      </div>
      <div className='lg:w-1/2 w-full lg:order-2 sm:order-1'>
        <img alt="ecommerce" className="lg:w-full w-full lg:h-auto h-full object-cover object-center rounded" src={OutlookImage} />
      </div>
    </div>
  </div>
</section>

  );
};

export default App;
