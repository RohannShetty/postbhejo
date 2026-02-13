import React from 'react';

const ImpactStoriesPage: React.FC = () => (
  <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold">How It Works</h1>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {[
        'Step 1: Browse or message',
        'Step 2: Choose SKU & size',
        'Step 3: Place pre-order',
        'Step 4: Delivered in 10–15 days',
      ].map((step) => (
        <div key={step} className="rounded-xl border bg-white p-6 text-lg font-semibold shadow-sm">{step}</div>
      ))}
    </div>
  </section>
);

export default ImpactStoriesPage;
