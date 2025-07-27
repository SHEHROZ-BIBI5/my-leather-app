
 import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from './components/Footer';
import DesignIdeas from './components/DesignIdeas';
import MoreProjects from './components/MoreProjects';
import WomenJackets from "./components/WomenJackets";
import MenJackets from "./components/MenJackets";
import InsideDetails from "./components/InsideDetails";
import AllProducts from "./components/AllProdects";
import ContactSales from "./components/ContactSales";

// Pages
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import OrderPage from "./pages/OrderPage";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      {/* Always visible layout sections */}
      <Banner />
      <Navbar />
      <Header />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProducts />
              <DesignIdeas />
              <Category />
              <MoreProjects />
              <MenJackets />
              <WomenJackets />
              <InsideDetails />
               <OrderPage />
              {/* <ContactSales /> */}
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>

      {/* Footer at the bottom always */}
      <Footer />
    </div>
  );
}

export default App;
