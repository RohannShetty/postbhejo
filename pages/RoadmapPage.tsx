import React from 'react';

const faqs = [
  ['What is the delivery time?', '10–15 days.'],
  ['Can I customize for corporate?', 'Yes — MOQ 100.'],
  ['What’s your return policy?', '7-day easy returns.'],
  ['Is payment secure?', 'Yes — you pay on WhatsApp or website.'],
];

const RoadmapPage: React.FC = () => (
  <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold">FAQ</h1>
    <div className="mt-8 space-y-4">
      {faqs.map(([q, a]) => (
        <div key={q} className="rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="font-bold">Q: {q}</h2>
          <p className="mt-2 text-gray-700">A: {a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default RoadmapPage;
