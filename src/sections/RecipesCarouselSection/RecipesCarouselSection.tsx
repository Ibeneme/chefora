import React, { useState } from "react";
import recipeImage1 from "../../assets/images/food1.png";
import recipeImage2 from "../../assets/images/food2.png";
import recipeImage3 from "../../assets/images/food3.png";
import recipeImage4 from "../../assets/images/food4.png";

interface RecipeCard {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const recipeCards: RecipeCard[] = [
  {
    id: 1,
    imageSrc: recipeImage1,
    title: "Spicy Mint Tomato Sauce",
    description: "Learn to make a vibrant spicy mint tomato sauce for any dish.",
    link: "#",
  },
  {
    id: 2,
    imageSrc: recipeImage2,
    title: "Malabar Spinach Recipe",
    description: "A nutritious and easy-to-cook Malabar spinach recipe.",
    link: "#",
  },
  {
    id: 3,
    imageSrc: recipeImage3,
    title: "Phirni Dessert",
    description: "A classic Indian dessert perfect for weddings and celebrations.",
    link: "#",
  },
  {
    id: 4,
    imageSrc: recipeImage4,
    title: "Spicy Ramen Noodles",
    description: "Warm up with a bowl of delicious spicy ramen noodles.",
    link: "#",
  },
];

const RecipesCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < recipeCards.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="bg-white py-16 lg:py-24 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Recipes to Follow
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
                currentIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === recipeCards.length - 1}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
                currentIndex === recipeCards.length - 1
                  ? "bg-orange-300 text-white cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {recipeCards.map((recipe) => (
            <div
              key={recipe.id}
              style={{ border: "0.6px solid #66666645" }}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] p-6 bg-white rounded-2xl flex flex-col items-center text-center duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                <img src={recipe.imageSrc} alt={recipe.title} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate max-w-full">
                {recipe.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>

              <a
                href={recipe.link}
                className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200 mt-auto"
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesCarouselSection;