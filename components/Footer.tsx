import React from 'react';

const Footer: React.FC = () => (
  <footer className="mt-16 bg-[#111827] text-gray-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
      <div>
        <h3 className="text-xl font-bold text-white">PostBhejo Umbrellas</h3>
        <p className="mt-3 text-sm">Made for Indian Weather. Loved Everywhere.</p>
        <p className="text-sm">Minimal Design. Maximum Reliability.</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li>Phone: +91 91000 00000</li>
          <li>Email: hello@postbhejo.com</li>
          <li>WhatsApp: +91 91000 00000</li>
          <li>Instagram: @yourbrand</li>
          <li>Address: Mumbai, Maharashtra</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Footer + Policies</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li>Shipping Policy</li>
          <li>Returns & Refunds</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Social: Instagram | WhatsApp</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} PostBhejo Umbrellas. All rights reserved.</div>
  </footer>
);

export default Footer;
