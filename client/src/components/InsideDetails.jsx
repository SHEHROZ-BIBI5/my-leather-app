// components/InsideDetails.jsx
import React from 'react';

const insideDetails = [
  {
    id: 1,
    title: "Premium Lining",
    description: "Silk lining for comfort and luxury feel",
    icon: "🧵"
  },
  {
    id: 2,
    title: "Hand Stitching",
    description: "Traditional craftsmanship for durability",
    icon: "🧶"
  },
  {
    id: 3,
    title: "Customizable",
    description: "Personalize with monograms and patches",
    icon: "✨"
  },
  {
    id: 4,
    title: "Weatherproof",
    description: "Treated for all weather conditions",
    icon: "🌧️"
  }
];

const InsideDetails = () => {
  return (
    <section id="inside" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inside Our Jackets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the craftsmanship and quality that makes our jackets exceptional</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insideDetails.map((detail) => (
            <div key={detail.id} className="bg-amber-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-amber-800">{detail.title}</h3>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideDetails;