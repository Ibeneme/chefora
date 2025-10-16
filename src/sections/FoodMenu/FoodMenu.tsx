import React, { useState } from "react";
// Image imports remain the same
import food1 from "../../assets/images/food1.png";
import food2 from "../../assets/images/food2.png";
import food3 from "../../assets/images/food3.png";
import food4 from "../../assets/images/food4.png";

interface MenuItem {
  id: number;
  title: string;
  ingredients: string;
  imageSrc: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Delicious Noodles",
    ingredients: "Flour, Sugar, Butter, Milk, Eggs, Baking Powder",
    imageSrc: food1,
  },
  {
    id: 2,
    title: "Healthy Pasta",
    ingredients: "Baking Powder, Vanilla, Milk, Caster Sugar",
    imageSrc: food2,
  },
  {
    id: 3,
    title: "Spicy Noodles",
    ingredients: "Berries, Sugar, Lemon Juice, Cornstarch",
    imageSrc: food3,
  },
  {
    id: 4,
    title: "Salmon Sushi",
    ingredients: "Ramen always consists of soup and noodles",
    imageSrc: food4,
  },
];

const FoodMenu: React.FC = () => {
  // Always starts and returns to 'Healthy Pasta' (ID 2)
  const [highlightedId, setHighlightedId] = useState<number | null>(2);

  // ⭐️ MODIFIED baseClasses for responsive border radius
  const baseClasses =
    "w-full md:w-1/2 lg:w-1/4 p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out relative rounded-2xl md:rounded-[64px]"; // Default rounded-2xl, md:rounded-[64px]

  return (
    <section className="relative overflow-hidden pt-12 pb-0 lg:pt-24 lg:pb-32 bg-white font-sans">
      <div className="container mx-auto px-4  max-w-[1200px]">
        {/* ⭐️ MODIFIED parent div for responsive border radius */}
        <div className="flex flex-wrap justify-center w-full rounded-2xl md:rounded-[64px] bg-black">
          {" "}
          {/* Default rounded-2xl, md:rounded-[64px] */}
          {menuItems.map((item) => {
            const isCurrentHighlighted = item.id === highlightedId;

            const highlightTransformClasses = isCurrentHighlighted
              ? "transform -translate-y-4 scale-y-[1.1] shadow-xl shadow-orange-600/50 z-20"
              : "transform scale-y-[0.98]";

            const imageCounterScaleClass = isCurrentHighlighted
              ? "transform scale-y-[0.909]"
              : "";

            return (
              <div
                key={item.id}
                className={`
                  ${baseClasses}
                  ${highlightTransformClasses}
                  
                  ${
                    isCurrentHighlighted
                      ? // ⭐️ MODIFIED highlighted state for responsive border radius
                        "bg-orange-600 text-white rounded-xl md:rounded-[48px] m-0" // Default rounded-xl, md:rounded-[48px]
                      : "bg-black text-white"
                  }
                `}
                onMouseEnter={() => setHighlightedId(item.id)}
                onMouseLeave={() => setHighlightedId(2)}
              >
                <div
                  className={`w-24 h-24 rounded-full overflow-hidden mb-4 border-4 
                    ${isCurrentHighlighted ? "border-white" : "border-gray-700"}
                    hover:border-white 
                    ${imageCounterScaleClass}
                  `}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                <p
                  className={`text-sm mb-4 
                    ${!isCurrentHighlighted ? "text-gray-400" : ""}
                    hover:text-white
                  `}
                >
                  {item.ingredients}
                </p>

                {isCurrentHighlighted && (
                  <a
                    href="#"
                    className="flex items-center text-white font-semibold hover:text-gray-200 mt-2"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
