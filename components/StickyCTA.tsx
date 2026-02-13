import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = 'https://wa.me/919100000000?text=Hey!%20I%20want%20to%20order%20[Product%20Name]%20in%20[Color]%20%E2%80%94%20send%20price%20%26%20delivery%20time.';

const StickyCTA: React.FC = () => (
  <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
    <Link to="/shop" className="hidden rounded-full bg-[#0f766e] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#115e59] sm:block">
      Buy Now
    </Link>
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-green-500 p-4 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
      aria-label="Order on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  </div>
);

export default StickyCTA;
