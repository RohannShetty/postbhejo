import React from 'react';

const ContactPage: React.FC = () => (
  <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold">Contact</h1>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="font-bold">Phone</h2>
        <p className="mt-1">+91 91000 00000</p>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="font-bold">Email</h2>
        <p className="mt-1">hello@postbhejo.com</p>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="font-bold">WhatsApp</h2>
        <p className="mt-1">+91 91000 00000</p>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="font-bold">Instagram</h2>
        <p className="mt-1">@yourbrand</p>
      </div>
    </div>
    <p className="mt-6 text-gray-600">Brand address: Mumbai, Maharashtra</p>
  </section>
);

export default ContactPage;
