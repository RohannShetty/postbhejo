
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  isDiwaliTheme: boolean;
  setIsDiwaliTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isDiwaliTheme, setIsDiwaliTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Who We Serve', path: '/who-we-serve' },
    { name: 'Impact', path: '/impact-stories' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeLinkStyle = {
    color: '#D32F2F', // Primary Red
    fontWeight: '600'
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FEFCF3]/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-[#D32F2F]">
              Post<span className="text-[#4F4A45]">Bhejo</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-[#D32F2F] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <button
                onClick={() => setIsDiwaliTheme(!isDiwaliTheme)}
                className="p-2 rounded-full text-yellow-500 bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Toggle Diwali Theme"
              >
                {isDiwaliTheme ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5 text-gray-600" />}
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-[#D32F2F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:bg-[#D32F2F] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
