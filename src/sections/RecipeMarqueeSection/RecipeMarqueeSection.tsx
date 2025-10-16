import React from "react";
import "./RecipeMarqueeSection.css";

const marqueeText = "GET YOUR RECIPE NOW ";
const repeatCount = 10;

const RecipeMarqueeSection: React.FC = () => {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="flex flex-col space-y-2 lg:space-y-4">

        {/* First Line: Left Scroll */}
        <div className="marquee-wrapper">
          <div className="marquee-left">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span key={index} className="marquee-text">
                {marqueeText}
              </span>
            ))}
          </div>
          <div className="marquee-left">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span key={`dup-${index}`} className="marquee-text">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Second Line: Right Scroll */}
        <div className="marquee-wrapper">
          <div className="marquee-right">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span key={index} className="marquee-text">
                {marqueeText}
              </span>
            ))}
          </div>
          <div className="marquee-right">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span key={`dup-right-${index}`} className="marquee-text">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeMarqueeSection;