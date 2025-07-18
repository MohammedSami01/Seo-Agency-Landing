import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold text-black font-sans">OptiRank</div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 bg-gray-100 rounded-full px-2 py-1">
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-full text-gray-800 text-sm font-medium hover:text-black"
          >
            About
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-full text-gray-800 text-sm font-medium hover:text-black"
          >
            Services
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-full text-gray-800 text-sm font-medium hover:text-black"
          >
            Customers
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-full text-gray-800 text-sm font-medium hover:text-black"
          >
            Blog
          </a>
        </nav>

        {/* CTA Button */}
        <button className="ml-6 bg-lime-300 hover:bg-lime-400 text-black text-sm font-semibold px-6 py-2 rounded-full shadow transition-colors">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
