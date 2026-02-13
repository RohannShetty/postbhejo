import React from 'react';
import { Link } from 'react-router-dom';

const whatsapp = 'https://wa.me/919100000000?text=Hey!%20I%20want%20to%20order%20[Product%20Name]%20in%20[Color]%20%E2%80%94%20send%20price%20%26%20delivery%20time.';

const items = [
  ['AER Jet Black Umbrella', '₹1,499', '30″ premium', 'Minimal'],
  ['DASH Scarlet Umbrella', '₹1,349', '30″ statement', 'Statement'],
  ['CORP Graphite Umbrella', '₹1,899', '31″ premium', 'Corporate'],
  ['ARC Olive Umbrella', '₹1,699', '32″ oversized', 'Oversized'],
  ['NOVA Navy Umbrella', '₹1,449', '30″ premium', 'Minimal'],
  ['LUME Ivory Umbrella', '₹1,399', '29″ premium', 'New'],
];

const SolutionsPage: React.FC = () => (
  <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold">Shop</h1>

    <div className="mt-4 flex flex-wrap gap-2 text-sm">
      {['All', 'Minimal', 'Statement', 'Corporate', 'Oversized', 'New'].map((filter) => (
        <button key={filter} className="rounded-full border px-4 py-1 font-medium hover:bg-gray-100">{filter}</button>
      ))}
    </div>

    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([name, price, desc, category]) => (
        <article key={name} className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="h-44 rounded-lg bg-gray-100" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gray-500">{category}</p>
          <h2 className="font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{desc}</p>
          <p className="mt-2 font-bold">{price}</p>
          <div className="mt-4 flex gap-2">
            <Link to="/product" className="rounded-full bg-[#0f766e] px-4 py-2 text-sm font-semibold text-white">Buy Now</Link>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-green-500 px-4 py-2 text-sm font-semibold text-green-600">WhatsApp</a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SolutionsPage;
