import React from 'react';
import { Link } from 'react-router-dom';

const whatsappLink = 'https://wa.me/919100000000?text=Hey!%20I%20want%20to%20order%20[Product%20Name]%20in%20[Color]%20%E2%80%94%20send%20price%20%26%20delivery%20time.';

const products = [
  { name: 'AER Jet Black Umbrella', price: '₹1,499', rating: '⭐ 4.9', spec: '30″ premium' },
  { name: 'MONO Slate Umbrella', price: '₹1,299', rating: '⭐ 4.8', spec: '29″ premium' },
  { name: 'ARC Olive Umbrella', price: '₹1,699', rating: '⭐ 4.8', spec: '32″ oversized' },
  { name: 'CORP Graphite Umbrella', price: '₹1,899', rating: '⭐ 4.9', spec: '31″ corporate' },
];

const HomePage: React.FC = () => (
  <div>
    <section className="bg-[#effcf9] px-4 pb-16 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0f766e]">Made for Indian Weather. Loved Everywhere.</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">Premium Urban Umbrellas for Every Weather</h1>
          <p className="mt-4 text-lg text-gray-600">Minimal by design. Built for Indian rain, sun & street life.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="rounded-full bg-[#0f766e] px-6 py-3 text-sm font-bold text-white">SHOP NOW</Link>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full border border-green-500 px-6 py-3 text-sm font-bold text-green-600">Order on WhatsApp</a>
          </div>
          <p className="mt-6 text-sm text-gray-500">Navigation: Home | Shop | Corporate | How It Works | Contact | WhatsApp</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img className="h-44 w-full rounded-xl object-cover sm:h-52" src="https://images.unsplash.com/photo-1514296937319-344a1cb9f660?q=80&w=1200&auto=format&fit=crop" alt="Umbrella in rain" />
          <img className="h-44 w-full rounded-xl object-cover sm:h-52" src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1200&auto=format&fit=crop" alt="Person with umbrella" />
          <img className="col-span-2 h-48 w-full rounded-xl object-cover sm:h-56" src="https://images.unsplash.com/photo-1534081333815-ae5019106622?q=80&w=1400&auto=format&fit=crop" alt="Minimal umbrella style" />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold">Why Choose Us</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm">Built for Indian Weather — Strong. Reliable. Tested.</div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">Urban Aesthetics — Minimal with purpose</div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">Corporate Ready — Custom branding available</div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Our Top Picks</h2>
        <Link to="/shop" className="text-sm font-semibold text-[#0f766e]">View all →</Link>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <article key={item.name} className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="h-40 rounded-lg bg-gray-100" />
            <h3 className="mt-3 font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.spec}</p>
            <p className="mt-1 text-sm">{item.rating}</p>
            <p className="mt-1 font-bold">{item.price}</p>
            <Link to="/product" className="mt-3 inline-block rounded-full bg-[#0f766e] px-4 py-2 text-sm font-semibold text-white">BUY</Link>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold">People Who Love Us</h2>
      <p className="mt-2 text-gray-600">Follow @yourbrand</p>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="h-32 rounded-lg bg-gray-200" />
        <div className="h-32 rounded-lg bg-gray-200" />
        <div className="h-32 rounded-lg bg-gray-200" />
        <div className="h-32 rounded-lg bg-gray-200" />
      </div>
    </section>

    <section className="mx-auto mb-8 max-w-7xl rounded-2xl bg-[#0f766e] px-6 py-10 text-white sm:px-8">
      <h2 className="text-3xl font-bold">Order on WhatsApp in 3 Steps</h2>
      <ol className="mt-4 list-decimal space-y-1 pl-5">
        <li>Pick product</li>
        <li>Send message</li>
        <li>Confirm & pay</li>
      </ol>
      <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-[#0f766e]">Open WhatsApp</a>
    </section>
  </div>
);

export default HomePage;
