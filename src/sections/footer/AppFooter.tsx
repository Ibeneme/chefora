import React from 'react';

// Define the structure for the navigation links
interface FooterLink {
  name: string;
  href: string;
}

interface LinkGroup {
  title: string;
  links: FooterLink[];
}

const linkGroups: LinkGroup[] = [
  {
    title: 'Support',
    links: [
      { name: 'Faq', href: '/faq' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Catering',
    links: [
      { name: 'Hire Chefs', href: '/hire-chefs' },
      { name: 'Live Courses', href: '/courses' },
      { name: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Privacy Policy',
    links: [
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Legal Notices', href: '/notices' },
    ],
  },
];

const AppFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* === Top Section: CTA and Navigation Links === */}
        <div className="py-16 md:py-24 flex flex-col lg:flex-row justify-between lg:items-start gap-12 lg:gap-8">
          
          {/* Left Side: Call to Action */}
          <div className="flex flex-col flex-shrink-0 w-full lg:w-1/3">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Have a Great <br/>Recipe to Share?
            </h2>
            
            {/* CTA Button */}
            <button
              onClick={() => console.log('Send Recipe clicked')}
              className="w-full sm:w-64 bg-orange-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Send Recipe</span>
            </button>
          </div>

          {/* Right Side: Navigation Links (Responsive Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-y-8 gap-x-12 lg:gap-x-24 w-full lg:w-2/3">
            {linkGroups.map((group) => (
              <div key={group.title} className="flex flex-col space-y-3">
                <h4 className="text-base font-bold mb-3 text-gray-200">
                  {group.title}
                </h4>
                {group.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* === Bottom Bar: Copyright and Social Icons === */}
        <div className="border-t border-gray-800 pt-6 pb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            ©Chef 2022
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 text-gray-400">
            {/* Facebook/Instagram/Twitter/etc. placeholders */}
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.628-5.372-12-12-12zm3 8h-2V6h2V4h-2V2H9v2h2v2H9v2h2v2H9v2h2v2h2v-2h2V8z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.5 8.16C21.31 7.42 20.68 6.8 19.94 6.61A60.89 60.89 0 0012 6c-3.18 0-6.36.21-9.94.61-.74.19-1.37.82-1.56 1.56C.21 9.4 0 10.7 0 12s.21 2.6.5 3.84c.19.74.82 1.37 1.56 1.56 3.58.38 7.16.6 10.94.6s7.36-.22 10.94-.6c.74-.19 1.37-.82 1.56-1.56.29-1.24.5-2.54.5-3.84s-.21-2.6-.5-3.84zM9.5 16.5v-9L16 12l-6.5 4.5z"/></svg>
            </a>
            <a href="#" aria-label="Chat/Message" className="hover:text-white transition-colors duration-200">
                {/* Generic Message/Chat Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 6h-2V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-9 14H7v-2h5v2zm7 0h-5v-2h5v2zM5 8h14v11H5V8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;