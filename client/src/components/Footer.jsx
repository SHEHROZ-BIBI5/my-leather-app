 // components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LeatherCraft</h3>
            <p className="text-gray-400">Premium leather jackets since 1985. Handcrafted with passion and precision.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition">Home</a></li>
              <li><a href="#women" className="text-gray-400 hover:text-amber-400 transition">Women</a></li>
              <li><a href="#men" className="text-gray-400 hover:text-amber-400 transition">Men</a></li>
              <li><a href="#inside" className="text-gray-400 hover:text-amber-400 transition">Inside Details</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: info@leathercraft.com</li>
              <li className="text-gray-400">Phone: +91 98765 43210</li>
              <li className="text-gray-400">Address: 123 Fashion Street, Mumbai</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for exclusive offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-gray-900 rounded-l-lg focus:outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 LeatherCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;