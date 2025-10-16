import React, { type FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoundImage from "../../assets/images/round.png";
import { ForkIcon } from "../../components/icons/ForkIcon";
import { PlateIcons } from "../../components/icons/PlateIcons";
import NoodImage from "../../assets/images/nood.png";
import burgerImage from "../../assets/images/burger.jpg";

const primaryColor = "bg-[#F76631]";
const primaryTextColor = "text-[#F76631]";

const recipes = [
  { name: "Hot Ramen", details: "Soft Boiled Eggs · Miso · In", calories: "220 Calories", image: NoodImage },
  { name: "Classic Burger", details: "Beef Patty · Cheese · Tomato", calories: "550 Calories", image: burgerImage },
];

const PlayIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.32 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 20.32c-1.25.677-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
  </svg>
);

const ArrowRightIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Hero: FC = () => {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const currentRecipe = recipes[currentRecipeIndex];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNextRecipe = () => {
    setDirection(1);
    setCurrentRecipeIndex((prev) => (prev + 1) % recipes.length);
  };

  const handlePrevRecipe = () => {
    setDirection(-1);
    setCurrentRecipeIndex((prev) => (prev - 1 + recipes.length) % recipes.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32 bg-white font-sans min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ForkIcon className="absolute top-20 left-4 w-10 h-10 text-gray-100 rotate-12 hidden md:block" />
        <PlateIcons className="absolute bottom-16 left-28 w-16 h-16 text-gray-100 -rotate-6 hidden md:block" />

        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
          {/* Left Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
              Get healthy and <br className="hidden md:inline" /> delicious food recipes
            </h1>
            <p className="text-base sm:text-lg text-gray-500 max-w-md mb-10">
              We bring you the healthy and delicious to eat recipes produced by our greatest chefs around the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className={`text-white ${primaryColor} font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] text-base sm:text-lg`}>
                Explore Recipes
              </button>
              <button className="flex items-center space-x-2 text-gray-700 font-medium hover:text-gray-900 transition duration-150">
                <span className={`p-2 rounded-full border-2 border-gray-300 ${primaryTextColor} hover:border-[#F76631] transition duration-200`}>
                  <PlayIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                </span>
                <span className="text-base sm:text-lg">Watch Recipes</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative min-h-[400px] sm:min-h-[450px]">
            <div className="relative w-full max-w-[400px] sm:max-w-sm h-[450px] sm:h-[480px]">
              <div className="absolute top-6 sm:top-8 right-0 w-[85%] h-[95%] bg-black rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl">
                <div className="absolute bottom-12 left-12 opacity-10">
                  <PlateIcons className="w-20 h-20 sm:w-24 sm:h-24 text-white rotate-6" strokeWidth="1" />
                </div>
              </div>

              <AnimatePresence custom={direction}>
                <motion.div
                  key={currentRecipe.image}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="absolute top-[15%] sm:top-[20%] w-[100%] sm:w-[100%] h-auto aspect-square rounded-full shadow-2xl overflow-hidden z-10"
                  style={{ left: isMobile ? '0%' : '-30%', transform: "translate(10%, -10%)" }}
                >
                  <img
                    src={currentRecipe.image}
                    alt={currentRecipe.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://placehold.co/400x400/222/FFF?text=Dish+Placeholder";
                    }}
                  />
                </motion.div>
              </AnimatePresence>


              <div key={currentRecipe.calories} className="absolute top-24 sm:top-32 w-[140px] sm:w-[150px] h-[55px] sm:h-[60px] right-8 sm:right-12 bg-white text-gray-800 flex items-center rounded-[20px] p-2 shadow-lg z-20 transition-opacity duration-500 opacity-100">
                <span className={`${primaryTextColor} text-lg mr-1`}>&#x1F525;</span>
                <span className="font-bold text-sm">{currentRecipe.calories}</span>
              </div>

              {/* Recipe Name */}
              <div key={currentRecipe.name} className="absolute top-[65%] sm:top-[70%] rounded-[20px] shadow-2xl min-w-[140px] sm:min-w-[150px] z-20 overflow-hidden transition-opacity duration-500 opacity-100"
                style={{ left: isMobile ? '5%' : '-40%', transform: "translate(-5%, -10%)", border: `1px solid #F76631` }}
              >
                <div className={`py-2 px-3 ${primaryColor} text-white font-bold text-[12px] sm:text-[14px] text-center`}>
                  {currentRecipe.name}
                </div>
                <div className="bg-white py-2 px-3 text-[10px] sm:text-[12px] text-center">
                  <p className={primaryTextColor}>{currentRecipe.details}</p>
                </div>
              </div>

              {/* Round Image */}
              <div className="absolute bottom-10 sm:bottom-12 right-12 flex flex-col items-center space-y-2 z-20">
                <img src={RoundImage} style={{ width: 70, height: 70 }} />
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-[20%] flex space-x-3 mt-4 z-20">
              <button onClick={handlePrevRecipe} className="p-4 sm:p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition duration-150">
                <ArrowRightIcon className="w-6 sm:w-5 h-6 sm:h-5 transform rotate-180" />
              </button>
              <button onClick={handleNextRecipe} className={`p-4 sm:p-3 rounded-full ${primaryColor} text-white shadow-lg hover:shadow-xl transition duration-150`}>
                <ArrowRightIcon className="w-6 sm:w-5 h-6 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;