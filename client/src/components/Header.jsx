 // src/components/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  // Dummy 30 MEN links
  const menLinks = Array.from({ length: 30 }, (_, i) => ({
    label: `Men Item ${i + 1}`,
    href: `/men/item-${i + 1}`,
  }));

  // Dummy 25 WOMEN links
  const womenLinks = Array.from({ length: 25 }, (_, i) => ({
    label: `Women Item ${i + 1}`,
    href: `/women/item-${i + 1}`,
  }));

  const handleMouseEnter = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <div className="sticky top-0 z-40 bg-white shadow-md">
      <nav className="hidden md:flex space-x-8 h-12 items-center px-8 justify-center relative">
        {["MEN", "WOMEN", "CUSTOMIZE", "BRAND", "CORPORATE GIFT", "SALE"].map((item) => (
          <div
            key={item}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-gray-700 hover:text-amber-600 font-semibold text-sm tracking-wide">
              {item}
            </a>

            {/* Mega Menu */}
            {openMenu === item && (
              <div className="absolute left-0 top-full w-[900px] bg-white shadow-lg border border-gray-200 mt-0 z-50 p-6 grid grid-cols-3 gap-4">

                {item === "MEN" &&
                  menLinks.map((link, index) => (
                    <a key={index} href={link.href} className="text-gray-700 hover:text-blue-600 text-sm">
                      {link.label}
                    </a>
                  ))}

                {item === "WOMEN" &&
                  womenLinks.map((link, index) => (
                    <a key={index} href={link.href} className="text-gray-700 hover:text-blue-600 text-sm">
                      {link.label}
                    </a>
                  ))}

                {item === "CUSTOMIZE" && (
                  <>
                    <a href="/customize/logo">Add Logo</a>
                    <a href="/customize/name">Name Print</a>
                    <a href="/customize/colors">Color Change</a>
                  </>
                )}

                {item === "BRAND" && (
                  <>
                    <a href="/brand/j">J.</a>
                    <a href="/brand/outfitters">Outfitters</a>
                    <a href="/brand/khaadi">Khaadi</a>
                    <a href="/brand/gulahmed">Gul Ahmed</a>
                    <a href="/brand/sapphire">Sapphire</a>
                  </>
                )}

                {item === "SALE" && (
                  <>
                    <a href="/sale/flat-50">Flat 50% Off</a>
                    <a href="/sale/clearance">Clearance</a>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Header;
