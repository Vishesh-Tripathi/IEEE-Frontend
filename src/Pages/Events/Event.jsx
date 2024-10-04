import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardGrid from './Cards';
import axios from 'axios';

const Carousel = () => {
  const [imageSet, setImageSet] = useState([]);

  const fetched = async() => {
    // Fetch images dynamically from backend
    const res = await axios.get('http://localhost:4000/highlights/getimages');
    setImageSet(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetched();
  }, []);

  // Slider Settings with responsive settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480, // Extra small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full ">
      <div className='flex justify-center items-center mt-4 mb-4'>
        <h1 className='text-cyan-400 text-5xl font-bold'>Glimpse of the Events</h1>
      </div>
      <div className="carousel-container w-full md:w-[900px] h-[500px] mx-auto overflow-hidden relative rounded-lg">
        <Slider {...sliderSettings} className="mx-auto">
          {imageSet.length > 0 ? imageSet.map((item, index) => (
            <div key={index} className="carousel-item">
              <img
                src={item.url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )) : <p>Loading images...</p>}
        </Slider>
      </div>
      <CardGrid />
    </div>
  );
};

export default Carousel;
