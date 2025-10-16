import React, { useState } from "react";

// Image imports remain the same
import chefEdward from "../../assets/images/chefs/chefa.png";
import chefKathryn from "../../assets/images/chefs/chefb.png";
import chefMarvin from "../../assets/images/chefs/chefc.png";

// 1. Define the TypeScript interface for a chef card
interface ChefCard {
  id: number;
  name: string;
  title: string; // e.g., "Chef, DENEAT"
  imageSrc: string;
}

// 2. Sample Data for the Chef Cards (Using only 3)
const chefCards: ChefCard[] = [
  {
    id: 1,
    name: "Edward I. Phillips",
    title: "Chef, DENEAT",
    imageSrc: chefEdward,
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    title: "Chef, PANPEE",
    imageSrc: chefKathryn,
  },
  {
    id: 3,
    name: "Marvin McKinney",
    title: "Chef, LEFEED",
    imageSrc: chefMarvin,
  },
];

const FeaturedChefsSection: React.FC = () => {
  // State to manage navigation (for visual active/inactive states of arrows)
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const handlePrev = () => {
    setCanGoPrev(false);
    setCanGoNext(true);
  };

  const handleNext = () => {
    setCanGoPrev(true);
    setCanGoNext(false);
  };

  return (
    <section className="bg-white py-16 lg:py-24 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header: Title and Navigation Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Monthly Featured <br className="md:hidden" />
            Chefs
          </h2>
          <div className="flex space-x-4">
            {/* Previous Button (Arrow styling remains the same) */}
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`
                flex items-center justify-center w-12 h-12 rounded-full 
                transition-colors duration-300
                ${
                  canGoPrev
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`
                flex items-center justify-center w-12 h-12 rounded-full 
                transition-colors duration-300
                ${
                  canGoNext
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-orange-300 text-white cursor-not-allowed"
                }
              `}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

        </div>

        {/* Chef Cards Container */}
        {/* Adjusted lg width to perfectly fit 3 cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-48">
          {chefCards.map((chef) => {
            const isHighlighted = chef.id === 2;

            return (
              // Card container - min-h is needed to prevent image overflow from distorting the grid
              <div
                key={chef.id}
                className="relative w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] min-h-[140px] flex items-center p-0"
              >
                {/* ⭐️ FIX 1: Text Box (Absolute Positioned Left) */}
                <div
                  className={`
                    absolute left-0 w-full h-full rounded-3xl z-0 p-6 shadow-md
                    flex flex-col justify-center items-start text-left
                    ${
                      isHighlighted
                        ? "bg-orange-50 text-gray-800 border-2 border-orange-500"
                        : "bg-gray-100 text-gray-800 "
                    }
                  `}
                  // Added minimum width for text on small screens
                  style={{ minWidth: "180px" }}
                >
                  {/* Chef Name */}
                  <h3 className="text-lg font-semibold mb-0">{chef.name}</h3>
                  {/* Chef Title */}
                  <p className="text-sm text-gray-600">{chef.title}</p>
                </div>

                {/* ⭐️ FIX 2: Chef Image (Absolute Positioned Right, Overlapping) */}
                <div className="absolute right-[20px] w-32 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                  <img
                    src={chef.imageSrc}
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />
                  {/* ⭐️ FIX 3: Background circle for the highlighted image */}
                  {isHighlighted && (
                    <div className="absolute inset-0 rounded-full bg-orange-500 -z-10 transform scale-[1.15]"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedChefsSection;
