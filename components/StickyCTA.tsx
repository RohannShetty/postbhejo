
import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './Icons';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-4">
      <Link to="/contact" className="hidden sm:block bg-[#D32F2F] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition-transform hover:scale-105 cta-pulse">
        Start a Free Pilot
      </Link>
      <a 
        href="https://wa.me/910000000000" // Replace with actual WhatsApp number
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
};

export default StickyCTA;
