// src/components/DesignIdeas.jsx

import React from 'react';
import img1 from '../assets/jeckets-design/istockphoto-1205563920-612x612.jpg';
import img2 from '../assets/jeckets-design/istockphoto-1474947385-612x612.jpg';
import img3 from '../assets/jeckets-design/istockphoto-2159211204-612x612.jpg';
import img4 from '../assets/jeckets-design/images1number.jpg';
import img5 from '../assets/jeckets-design/image3.jpg';
import img6 from '../assets/jeckets-design/image4.jpg';

const DesignIdeas = () => {
  const designs = [
    { id: 1, image: img1, title: "Modern Fit Design" },
    { id: 2, image: img2, title: "Classic Leather Look" },
    { id: 3, image: img3, title: "Slim Urban Style" },
    { id: 4, image: img4, title: "Vintage Comfort" },
    { id: 5, image: img5, title: "Rider's Edge" },
    { id: 6, image: img6, title: "Minimal Bold" },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Share Your Own Design Idea or Choose from Our Collection
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
          If you have a unique jacket design in mind, send it to us! 
          We’ll craft a custom piece just for you. You can also explore and select from our sample jacket designs below.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {designs.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Area */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Let’s Create Your Perfect Jacket</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Every customer is unique, and so is their jacket.
            Share your ideas, sketches, or photos with us — 
            and we'll bring them to life with premium leather craftsmanship.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignIdeas;
