import React, { useState } from "react";
import shrimpImage from "../../assets/images/shrimp.png";

const NewsletterSignupSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing with:", email);
    // Add your subscription logic here (API call, etc.)
  };

  return (
    <section className="py-16 lg:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative p-6 md:p-10 lg:p-16 bg-[#F7663110] rounded-[64px] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left Side: Image */}
            <div className="flex-2 flex justify-center">
              <div className="w-72 h-72 rounded-full overflow-hidden  border-8 border-white bg-black">
                <img
                  src={shrimpImage}
                  alt="Delicious shrimp on a plate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side: Text and Form */}
            <div className="flex-0.5 flex flex-col items-center md:items-start text-center md:text-left z-10">
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 max-w-lg">
                Get delicious and great food recipes in your mail
              </h2>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md"
              >
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow px-6 py-4 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500 text-gray-700 placeholder-gray-400 text-base transition-colors duration-200"
                />

                <button
                  type="submit"
                  className="bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-orange-700 transition-colors duration-300 flex-shrink-0"
                >
                  Submit →
                </button>
              </form>
            </div>
          </div>

          {/* Decorative Text */}
          <div
            className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 font-extrabold pointer-events-none opacity-40 whitespace-nowrap select-none"
            style={{
              fontSize: "8rem", // fallback for small screens
              color: "transparent",
              WebkitTextStroke: "2px #F76631", // Stroke color and width
              letterSpacing: "0.05em",
              zIndex: 0,
            }}
          >
            DELICIOUS
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignupSection;
