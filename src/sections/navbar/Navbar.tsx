import React, { useState, type FC } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

type SectionId = 'home' | 'recipes' | 'contact';

// Updated NavLinkType to remove the unused 'active' property
interface NavLinkType {
  name: string;
  id: SectionId;
}

// 1. Define Props for Navbar to accept the scroll handler AND the active section ID
interface NavbarProps {
    onNavClick: (sectionName: SectionId) => void;
    activeSection: SectionId; // Prop used for active styling
}


const SearchIcon: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const MenuIcon: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


const Navbar: FC<NavbarProps> = ({ onNavClick, activeSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const primaryColor: string = 'bg-[#F76631]';
  const activeColor: string = 'border-[#F76631] text-[#F76631]';

  // 3. Updated navLinks: Removed the hardcoded 'active' status
  const navLinks: NavLinkType[] = [
    { name: 'HOME', id: 'home' },
    { name: 'RECIPES', id: 'recipes' },
    { name: 'CONTACT', id: 'contact' },
  ];
  
  // Helper function for click handler
  const handleLinkClick = (id: SectionId) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavClick(id);
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center space-x-12">
            {/* Logo/Title link now scrolls to HOME and checks if HOME is active */}
            <a 
                href="#" 
                onClick={handleLinkClick('home')}
                className="text-3xl font-bold tracking-tight text-gray-800"
            >
                Chef
            </a>

            <div className="hidden lg:flex space-x-8 items-center">
              {navLinks.map((link: NavLinkType) => (
                <a
                  key={link.name}
                  href={`#${link.id}`} // Kept for semantics/SEO fallback
                  onClick={handleLinkClick(link.id)} 
                  className={`
                    text-base font-semibold text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out py-1
                    ${link.id === activeSection ? `border-b-2 ${activeColor}` : 'border-b-2 border-transparent hover:border-gray-300'}
                  `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-64 p-3 pr-10 border border-gray-300 rounded-xl focus:ring-1 focus:ring-[#F76631] focus:border-[#F76631] transition duration-150"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
            </div>
            
            <button className="text-gray-600 hover:text-gray-800 font-medium px-4 py-2 transition duration-150">
              Log In
            </button>
            <button className={`text-white ${primaryColor} font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02]`}>
              Sign Up
            </button>
          </div>

          <div className="flex lg:hidden items-center space-x-4">
            <div className="relative w-48 sm:w-64">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    className="w-full p-2 pr-10 text-sm border border-gray-300 rounded-xl focus:ring-1 focus:ring-[#F76631] focus:border-[#F76631] transition duration-150"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <SearchIcon width="16" height="16" />
                </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F76631]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
          {navLinks.map((link: NavLinkType) => (
            <a
              key={link.name}
              href={`#${link.id}`} // Kept for semantics/SEO fallback
              onClick={handleLinkClick(link.id)} // Use the new click handler in mobile menu
              className={`
                block px-3 py-2 rounded-lg text-base font-medium transition duration-150
                ${link.id === activeSection ? 'bg-orange-50 text-[#F76631]' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
              `}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-gray-100 space-y-2">
            <button 
              className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </button>
            <button 
              className={`block w-full text-center ${primaryColor} text-white font-semibold px-3 py-3 rounded-xl transition duration-300 transform hover:brightness-105`}
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
