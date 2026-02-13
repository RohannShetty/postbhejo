import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from './Icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Corporate', path: '/corporate' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Contact', path: '/contact' },
  { name: 'WhatsApp', path: '/whatsapp-order' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-extrabold tracking-tight sm:text-2xl">
          Post<span className="text-[#0f766e]">Bhejo</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-[#0f766e] text-white' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button className="rounded-md p-2 text-gray-700 md:hidden" onClick={() => setIsMenuOpen((s) => !s)} aria-label="Open Menu">
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
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
