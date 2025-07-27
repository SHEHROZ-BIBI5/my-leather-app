 // src/components/Navbar.jsx
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo1.svg';
import Search from '../pages/Search';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [currency, setCurrency] = useState('pakistan');
  const user = { name: "" };  

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Search */}
        <div className="flex-shrink-0 w-1/3">
          <Search />
        </div>

        {/* Center: Logo */}
        <div className="w-1/3 flex justify-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Right: Account + Cart + Currency */}
        <div className="flex items-center justify-end w-1/3 gap-4 text-sm sm:text-base">
          
          {/* Currency Dropdown */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border px-2 py-1 rounded-md"
          >
            <option value="USD">USD 🇺🇸</option>
            <option value="PKR">PKR 🇵🇰</option>
            <option value="EUR">EUR 🇪🇺</option>
            <option value="INR">INR 🇮🇳</option>
          </select>

          {/* Account */}
          <Link
            to="/account"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaUserCircle className="text-xl" />
            <span className="hidden sm:inline">{user.name}</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative flex items-center gap-1">
            🛒
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
