import React from 'react';

const msg = 'Hey! I want to order [Product Name] in [Color] — send price & delivery time.';
const link = `https://wa.me/919100000000?text=${encodeURIComponent(msg)}`;

const ResourcesPage: React.FC = () => (
  <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold">Order Direct via WhatsApp</h1>
    <ol className="mt-6 list-decimal space-y-2 pl-5 text-gray-700">
      <li>Click to open</li>
      <li>Send product name & size</li>
      <li>Confirm delivery & pay</li>
    </ol>
    <p className="mt-6 rounded-lg bg-gray-100 p-4 text-sm">{msg}</p>
    <a href={link} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 font-bold text-white">Order on WhatsApp</a>
  </section>
);

export default ResourcesPage;
