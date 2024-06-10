import React, { useState } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cursoul01 from "../images/Cursoul01.png";
import Cursol02 from "../images/Cc02.png";
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
function NextArrow(props) {
 const { onClick } = props;
  return (
    <div
      className="absolute top-full  left-1/2 ml-10 mt-2 transform -translate-y-1/2 z-10 cursor-pointer text-black  p-2 "
      onClick={onClick}
    >
      <IoIosArrowForward className="text-2xl" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-full  left-96  mt-2 ml-80 transform -translate-y-1/2 z-10 cursor-pointer text-black  p-2 "
      onClick={onClick}
    >
      <IoIosArrowBack className="text-2xl" />
    </div>
  );
}

const Carousel = () => {
  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div className="relative mt-4  ml- h-auto mx-8 " >
      <Slider {...settings}>
        <div className='w-full'>
          <img src={Cursoul01} alt="Slide 1" className="w-full" />
        </div>
        <div className='w-full'>
          <img src={Cursol02} alt="Slide 2" className="w-full" />
        </div>
      </Slider>
      <button 
        className="absolute -mt-2 ml-72 left-96 mr-60 transform -translate-x-1/2 text-black px-4 py-2"
        onClick={toggleAutoplay}
      >
        {autoplay ? <FaPauseCircle className="text-xl" /> : <FaPlayCircle className="text-xl" />}
      </button>
    </div>
  );
};

export default Carousel;
