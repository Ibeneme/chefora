import React, { useRef, useCallback, useState, useEffect } from "react";
import "./App.css";

// Import all sections
import FeaturedChefsSection from "./sections/FeaturedChefsSection/FeaturedChefsSection";
import FoodMenu from "./sections/FoodMenu/FoodMenu";
import NewsletterSignupSection from "./sections/NewsletterSignupSection/NewsletterSignupSection";
import RecipeFeatureSection from "./sections/RecipeFeatureSection/RecipeFeatureSection";
import RecipeMarqueeSection from "./sections/RecipeMarqueeSection/RecipeMarqueeSection";
import RecipesCarouselSection from "./sections/RecipesCarouselSection/RecipesCarouselSection";
import AppFooter from "./sections/footer/AppFooter";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";

// Define the type for the section IDs
type SectionId = 'home' | 'recipes' | 'contact';

function App() {
  // 1. State to hold the currently active section ID for Navbar styling
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  // 2. Create Refs for the target sections
  const heroRef = useRef<HTMLDivElement>(null);
  const recipesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null); // Target the NewsletterSignupSection for "CONTACT"

  // 3. Create the scroll function using useCallback
  const handleNavClick = useCallback((sectionName: SectionId) => {
    // Corrected RefObject type for TypeScript
    let targetRef: React.RefObject<HTMLDivElement | null> | null = null;

    switch (sectionName) {
      case 'home':
        targetRef = heroRef;
        break;
      case 'recipes':
        targetRef = recipesRef;
        break;
      case 'contact':
        targetRef = contactRef;
        break;
      default:
        return;
    }

    if (targetRef?.current) {
      // Use scrollIntoView for smooth navigation
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Immediately set the active section after a click for a quick visual feedback
      setActiveSection(sectionName); 
    }
  }, []);
  
  // 4. Setup Intersection Observer to detect scroll position
  useEffect(() => {
    // Observer options: Use a margin to trigger the intersection when the section
    // hits the bottom of the sticky Navbar (assuming a Navbar height of ~80-100px)
    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: '-100px 0px -50% 0px', // Adjusted to be sensitive near the top
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Retrieve the ID from the data attribute we set below
          const id = entry.target.getAttribute('data-section-id') as SectionId | null;
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    // List of all section elements to observe
    const elementsToObserve = [
      { ref: heroRef, id: 'home' },
      { ref: recipesRef, id: 'recipes' },
      { ref: contactRef, id: 'contact' },
    ];

    elementsToObserve.forEach(({ ref, id }) => {
      if (ref.current) {
        // Attach the ID attribute needed by the observer callback
        ref.current.setAttribute('data-section-id', id); 
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      elementsToObserve.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);


  return (
    <>
      {/* 5. PASS THE REQUIRED activeSection PROP TO NAVBAR */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
      
      {/* Wrap sections in a div with the corresponding ref AND data attribute */}
      <div ref={heroRef} data-section-id="home">
        <Hero />
      </div>
      <FoodMenu />
      <RecipeFeatureSection />
      <br/>
      <div ref={recipesRef} data-section-id="recipes">
        <RecipesCarouselSection />
      </div>
      {/* Contact/Newsletter section target */}
      <div ref={contactRef} data-section-id="contact">
        <NewsletterSignupSection />
      </div>
      <FeaturedChefsSection />
      <RecipeMarqueeSection />
      <br/>
      <AppFooter />
    </>
  );
}

export default App;
