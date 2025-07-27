import React from 'react'
import img1 from '../assets/all-jeckets/img1.avif';
import img2 from '../assets/all-jeckets/img2.avif';
import img3 from '../assets/all-jeckets/img3.jpg';

import img4 from '../assets/all-jeckets/img4.jpg';
import img5 from '../assets/all-jeckets/img5.jpg';

import img6 from '../assets/all-jeckets/img6.jpg';
import img7 from '../assets/all-jeckets/img7.jpg';

import img8 from '../assets/all-jeckets/img8.jpg';
import img9 from '../assets/all-jeckets/img9.jpg';
import img10 from '../assets/all-jeckets/img10.jpg';
import img11 from '../assets/all-jeckets/img11.jpg';

import img12 from '../assets/all-jeckets/img12.jpg';
import img13 from '../assets/all-jeckets/img13.jpg';
import img14 from '../assets/all-jeckets/img14.jpg';

import img15 from '../assets/all-jeckets/img15.jpg';
import img16 from '../assets/all-jeckets/img16.jpg';

import img17 from '../assets/all-jeckets/img17.jpg';
import img18 from '../assets/all-jeckets/img18.avif';

const categories = [
  {
    category: "Lightweight",
    items: [
      { name: "Lightweight", image: img1 },
      { name: "Lightweight", image: img2 },
      { name: "Lightweight", image: img3 },
     { name: " Lightweight", image: img4 },

    ]
  },
  {
    category: "Slim Urban Style",
    items: [
      { name: " Slim Urban Style", image: img4 },
      { name: " Slim Urban Style", image: img6 },
      { name: " Slim Urban Style", image: img7 },
      { name: "Slim Urban Style", image: img18 },

    ]
  },
  {
    category: "biker jackets",
    items: [
      { name: " biker jackets", image: img8 },
      { name: " biker jackets", image: img9 },
      { name: " biker jackets", image: img10 },
      { name: "biker jackets", image: img11 },
    ]
  },
  {
    category: "Suede Jacket",
    items: [
      { name: "Suede Jacket", image: img8 },
      { name: "Suede Jacket", image: img9 },
      { name: "Suede Jacket", image: img11 },
      { name: "Suede Jacket", image: img18 },

    ]
  },
  {
    category: "biker jackets",
    items: [
      { name: "biker jackets", image: img12 },
      { name: "biker jackets", image: img13 },
      { name: "biker jackets", image: img14 },
      { name: "biker jackets", image: img16 },

    ]
  },
  ];

const gradientColors = [
  "from-pink-100 via-pink-50 to-yellow-100",
  "from-blue-100 via-blue-50 to-green-100",
  "from-yellow-100 via-yellow-50 to-pink-100",
  "from-green-100 via-green-50 to-blue-100",
  "from-purple-100 via-purple-50 to-pink-100",
  "from-orange-100 via-orange-50 to-yellow-100",
  "from-teal-100 via-teal-50 to-blue-100"
];

const Category = () => {
  return (
    <div>
      <section className="py-12 px-4 bg-gradient-to-br from-yellow-50 via-white to-blue-50 min-h-screen">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-tight drop-shadow-lg">
          Shop by Category
        </h2>

        <div className="space-y-14 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-2xl font-bold mb-6 text-gray-700 flex items-center gap-2 justify-center">
                <span className="inline-block w-2 h-8 bg-yellow-400 rounded-full mr-2"></span>
                {cat.category}
              </h3>
              <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center`}>
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative group bg-gradient-to-br ${gradientColors[index % gradientColors.length]} p-6 shadow-2xl rounded-3xl text-center transition-transform transform hover:-translate-y-3 hover:scale-105 hover:shadow-yellow-200/60 border border-yellow-100 flex flex-col items-center`}
                  >
                    {/* Decorative floating shapes */}
                    <span className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-200 rounded-full opacity-30 blur-sm group-hover:opacity-60 transition"></span>
                    <span className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-200 rounded-full opacity-30 blur-sm group-hover:opacity-60 transition"></span>
                    <div className="flex justify-center">
                      <div className="relative flex justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition duration-300 mx-auto"
                        />
                        {/* Glow ring */}
                        <span className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-40 group-hover:opacity-80 animate-pulse"></span>
                      </div>
                    </div>
                    <p className="font-semibold text-lg mt-5 text-gray-800 tracking-wide drop-shadow-sm text-center">
                      {item.name}
                    </p>
                    <button className="mt-5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white font-bold py-2 px-8 rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-400 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 mx-auto">
                      <span className="inline-block mr-2">✨</span>Explore
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Category
