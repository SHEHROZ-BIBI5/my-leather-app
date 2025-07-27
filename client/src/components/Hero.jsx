 // src/components/Hero.jsx

import React from 'react';
import img1 from "../assets/download.jpg";
import img2 from "../assets/images (2).jpg";
import img3 from "../assets/images1.jpg";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const ImageList = [
  {
    id: 1,
    img: img1,
    title: "Upto 50% off\non all Men's Wear",
    description: "Discover the latest trends in men’s fashion. jackets more at half price."
  },
  {
    id: 2,
    img: img2,
    title: "Upto 30% off\non all Women's Wear",
    description: "Style meets savings! tops & accessories with 30% off – only for a limited time."
  },
  {
    id: 3,
    img: img3,
    title: "Upto 50% off\non all Women's Wear",
    description: "Huge savings on women's collection! Explore bold styles, comfy fits & stunning designs – half the price!"
  }
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,               // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,      // Faster slide
    cssEase: "ease-in-out",
    pauseOnHover: true,
    autoplay: true,
  };

  return (
    <div className='relative overflow-hidden min-h-screen text-white duration-300 bg-slate-700'>
      <div className='w-full h-screen relative z-10'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div
              key={data.id}
              className='relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-8'
            >
              {/* 🖼 Full Background Image */}
              <img
                src={data.img}
                alt="slider"
                className='absolute inset-0 w-full h-full object-cover z-0'
              />

              {/* 🖍 Overlay */}
              <div className='absolute inset-0 bg-black bg-opacity-50 z-10' />

              {/* 📝 Text Content */}
              <div className='relative z-20 max-w-2xl text-left mt-36'>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold whitespace-pre-line mb-4">
                  {data.title}
                </h1>
                <p className="text-base md:text-lg max-w-lg mb-6">
                  {data.description}
                </p>
                <Link
                  to="/order"
                  className='bg-gradient-to-t from-yellow-500 to-yellow-300 text-black font-semibold
                  py-3 px-9 rounded-full inline-block hover:scale-105 transition duration-300'
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
 