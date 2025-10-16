import React, { useState } from 'react';
import trayImage from '../../assets/images/tray.png';

const categories = [
  { id: 'healthy', icon: '🥗', alt: 'Healthy food' },
  { id: 'sweet', icon: '🍦', alt: 'Sweet food' },
  { id: 'spicy', icon: '🌶️', alt: 'Spicy food' },
];

const RecipeFeatureSection: React.FC = () => {
  const [selected, setSelected] = useState('healthy');

  return (
    <section className="bg-white py-12 min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12">

        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={trayImage} className="w-[80%] md:w-full h-auto" alt="Tray" />
        </div>

        {/* Right: Text & Buttons */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 max-w-lg">
            Healthy, sweet, spicy, and delicious recipes
          </h2>

          <div className="flex gap-4 sm:gap-6 flex-wrap justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 text-3xl sm:text-4xl rounded-2xl font-semibold transition-all duration-300 ease-in-out shadow-md
                  ${selected === cat.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
                aria-label={cat.alt}
              >
                {cat.icon}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecipeFeatureSection;