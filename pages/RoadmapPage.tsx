import React from 'react';

const RoadmapPage: React.FC = () => (
  <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold">FAQ</h1>
    <div className="mt-8 space-y-4">
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="font-bold">Q: What is the delivery time?</h2>
        <p className="mt-2 text-gray-700">A: 10–15 days.</p>
      </div>
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="font-bold">Q: Can I customize for corporate?</h2>
        <p className="mt-2 text-gray-700">A: Yes — MOQ 100.</p>
      </div>
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="font-bold">Q: What’s your return policy?</h2>
        <p className="mt-2 text-gray-700">A: 7-day easy returns.</p>
      </div>
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="font-bold">Q: Is payment secure?</h2>
        <p className="mt-2 text-gray-700">A: Yes — you pay on WhatsApp or website.</p>
      </div>
    </div>
  </section>
);

export default RoadmapPage;
