import React from 'react';
import { Link } from 'react-router-dom';

const whatsapp = 'https://wa.me/919100000000?text=Hey!%20I%20want%20to%20order%20AER%20Jet%20Black%20Umbrella%20in%20Black%20%E2%80%94%20send%20price%20%26%20delivery%20time.';

const PricingPage: React.FC = () => (
  <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <div className="h-80 rounded-2xl bg-gray-100" />
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="h-20 rounded-lg bg-gray-200" />
          <div className="h-20 rounded-lg bg-gray-200" />
          <div className="h-20 rounded-lg bg-gray-200" />
          <div className="h-20 rounded-lg bg-gray-200" />
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-extrabold">AER Jet Black Umbrella</h1>
        <p className="mt-2 text-2xl font-bold">₹1,499</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-full bg-[#0f766e] px-6 py-3 font-bold text-white">Buy on Website</button>
          <button className="rounded-full border border-gray-300 px-6 py-3 font-bold text-gray-800">Add to Cart</button>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-green-500 px-6 py-3 font-bold text-green-600">Order on WhatsApp</a>
        </div>

        <ul className="mt-8 list-disc space-y-2 pl-5 text-gray-700">
          <li>Designed for Indian rain & sun</li>
          <li>Durable fiberglass frame</li>
          <li>Minimal single-panel print</li>
          <li>10–15 day delivery</li>
          <li>Custom options available.</li>
        </ul>

        <h2 className="mt-8 text-xl font-bold">Benefits</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Built for urban life</li>
          <li>Lightweight but strong</li>
          <li>Perfect gift</li>
        </ul>

        <p className="mt-6 text-sm text-gray-600">Trusted Brand • Secure Checkout • WhatsApp support • Genuine materials</p>
        <p className="mt-2 text-sm text-gray-600">10–15 day delivery window • Easy returns within 7 days</p>

        <Link to="/corporate" className="mt-6 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white">Customize for Your Brand</Link>
      </div>
    </div>
  </section>
);

export default PricingPage;
