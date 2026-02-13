import React from 'react';

const whatsapp = 'https://wa.me/919100000000?text=Hi%2C%20I%20need%20a%20corporate%20umbrella%20quote%20for%20MOQ%20100.';

const WhoWeServePage: React.FC = () => (
  <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold">Corporate Umbrella Solutions</h1>
    <p className="mt-3 max-w-3xl text-lg text-gray-600">Bulk branding, events, teams, HR gifts — MOQ 100.</p>
    <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-[#0f766e] px-6 py-3 font-bold text-white">Get Corporate Quote</a>

    <h2 className="mt-10 text-2xl font-bold">Why Corporate?</h2>
    <ul className="mt-4 list-disc space-y-2 pl-5">
      <li>Strengthen employee identity</li>
      <li>Client gifting</li>
      <li>Event merchandise</li>
      <li>Festival swag</li>
    </ul>

    <h2 className="mt-10 text-2xl font-bold">How It Works</h2>
    <ol className="mt-4 list-decimal space-y-2 pl-5">
      <li>WhatsApp inquiry</li>
      <li>Send logo + requirements</li>
      <li>Get sample & quote</li>
      <li>Production starts</li>
    </ol>

    <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">Inquiry Form</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <input className="rounded-lg border p-3" placeholder="Name" />
        <input className="rounded-lg border p-3" placeholder="Company" />
        <input className="rounded-lg border p-3" placeholder="Email" />
        <input className="rounded-lg border p-3" placeholder="WhatsApp" />
        <input className="rounded-lg border p-3 md:col-span-2" placeholder="Logo upload (URL)" />
        <input className="rounded-lg border p-3 md:col-span-2" placeholder="Quantity" />
      </div>
      <button className="mt-4 rounded-full bg-[#0f766e] px-5 py-2 font-semibold text-white">Send Inquiry</button>
    </div>
  </section>
);

export default WhoWeServePage;
