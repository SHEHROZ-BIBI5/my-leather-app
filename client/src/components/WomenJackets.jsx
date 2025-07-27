  import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

import img1 from '../assets/womens.jeckets/img1.jpg';
import img2 from '../assets/womens.jeckets/img2.jpg';
import img3 from '../assets/womens.jeckets/img3.jpg';
import img4 from '../assets/womens.jeckets/img4.jpg';
import img5 from '../assets/womens.jeckets/img5.jpg';
import img6 from '../assets/womens.jeckets/img6.jpg';
import img7 from '../assets/womens.jeckets/img7.jpg';
import img8 from '../assets/womens.jeckets/img8.jpg';
import img9 from '../assets/womens.jeckets/img9.jpg';
import img10 from '../assets/womens.jeckets/img10.jpg';
import img11 from '../assets/womens.jeckets/img11.jpg';
import img12 from '../assets/womens.jeckets/img12.jpg';
import img13 from '../assets/womens.jeckets/img13.jpg';
import img14 from '../assets/womens.jeckets/img14.jpg';
import img15 from '../assets/womens.jeckets/img15.jpg';

const products = [
  {
    id: 1,
    name: 'Lightweight',
    price: 'Rs. 8,500',
    image: img1,
  },
  {
    id: 2,
    name: 'Biker',
    price: 'Rs. 16,200',
    image: img2,
  },
  {
    id: 3,
    name: 'Bomber',
    price: 'Rs. 22,900',
    image: img3,
  },
  {
    id: 4,
    name: 'Blazer',
    price: 'Rs. 33,800',
    image: img4,
  },
  {
    id: 5,
    name: 'Trench',
     price: 'Rs. 21,200',
    image: img5,
  },
  {
    id: 6,
    name: 'Hooded',
    price: 'Rs. 11,900',
    image: img6,
  },
    {
    id: 7,
    name: 'Bomber',
    price: 'Rs. 29,900',
    image: img7,
  },
  {
    id: 8,
    name: 'Blazer',
    price: 'Rs. 30,800',
    image: img8,
  },
  {
    id: 9,
    name: 'Trench',
     price: 'Rs. 29,200',
    image: img9,
  },
  {
    id: 10,
    name: 'Hooded',
    price: 'Rs. 16,900',
    image: img10,
  },
    {
    id: 11,
    name: 'Lightweight',
    price: 'Rs. 8,500',
    image: img11,
  },
  {
    id: 12,
    name: 'Biker',
    price: 'Rs. 16,200',
    image: img12,
  },

    {
    id: 13,
    name: 'Hooded',
    price: 'Rs. 16,900',
    image: img13,
  },
  {
    id: 14,
    name: 'Hooded',
    price: 'Rs. 16,900',
    image: img14,
  },
    {
    id: 15,
    name: 'Trench',
     price: 'Rs. 21,200',
    image: img15,
  },

];

const FeaturedProducts = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center"> Women Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md py-4 px-4 text-center">
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto mb-4 rounded-lg w-full h-80 object-cover"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              className="mt-4 bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500 transition"
            >
              Add to Cart
            </button>

            <Link to={`/product/${item.id}`}>
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
