
import React, { useState } from 'react';
import Section from '../components/Section';

type Audience = 'brands' | 'ngos' | 'individuals' | 'investors';

const AudienceContent: React.FC<{ audience: Audience }> = ({ audience }) => {
  const content = {
    brands: {
      title: "For Brands (Retail/FMCG)",
      subtitle: "Focus: ROI & Impact",
      pitch: "Drive footfall, generate product trials, and build brand love with hyperlocal campaigns that cut through the digital noise. From store opening invites to mass product sampling, we offer tangible results with an unbeatable CPA. Plus, our social impact sourcing adds a powerful CSR angle to your campaigns.",
      imageUrl: "https://picsum.photos/600/400?random=21",
      points: ["Hyperlocal Case Studies", "Sampling Feedback Loops", "Festive Gifting at Scale", "Social Impact Association"]
    },
    ngos: {
      title: "For NGOs & Artisan Groups",
      subtitle: "Focus: Sustainable Income & Reach",
      pitch: "We provide a platform to take your story and craft to a national audience. Through our corporate gifting and D2C channels, we facilitate bulk orders at fair prices, creating sustainable income streams and celebrating India's rich heritage.",
      imageUrl: "https://picsum.photos/600/400?random=22",
      points: ["Access to National Markets", "Fair Trade Pricing", "Storytelling Platform", "Recipient Testimonials"]
    },
    individuals: {
      title: "For Individuals & Consumers",
      subtitle: "Focus: Emotional Impact & Social Good",
      pitch: "Send a gift that gives back. Our platform allows you to send beautifully crafted, artisan-made gifts for any occasion. Each purchase supports local livelihoods, making your gesture even more meaningful.",
      imageUrl: "https://picsum.photos/600/400?random=23",
      points: ["Authentic Craftsmanship", "Support Local Livelihoods", "Unique Gifting Options", "Easy-to-use Platform"]
    },
    investors: {
      title: "For Investors & Leadership",
      subtitle: "Focus: Market Size & Unit Economics",
      pitch: "Post Bhejo is uniquely positioned at the intersection of logistics, marketing, and social impact. We leverage India Post's unmatched network (our 'moat') to offer a highly scalable, tech-enabled solution with strong unit economics and a massive Total Addressable Market across retail, FMCG, gifting, and social commerce.",
      imageUrl: "https://picsum.photos/600/400?random=24",
      points: ["Large TAM", "Strong Unit Economics", "Scalable Tech Platform", "Unique 'Moat' with India Post"]
    },
  };

  const current = content[audience];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold">{current.title}</h2>
        <p className="font-semibold text-[#D32F2F] my-2">{current.subtitle}</p>
        <p className="text-gray-700 leading-relaxed mb-6">{current.pitch}</p>
        <ul className="space-y-2">
            {current.points.map(point => <li key={point} className="flex items-center text-gray-600">✓ <span className="ml-2">{point}</span></li>)}
        </ul>
      </div>
      <div className="order-1 md:order-2">
        <img src={current.imageUrl} alt={current.title} className="rounded-lg shadow-xl" />
      </div>
    </div>
  );
};

const WhoWeServePage: React.FC = () => {
  const [activeAudience, setActiveAudience] = useState<Audience>('brands');

  const audiences: { id: Audience; name: string }[] = [
    { id: 'brands', name: 'Brands' },
    { id: 'ngos', name: 'NGOs' },
    { id: 'individuals', name: 'Individuals' },
    { id: 'investors', name: 'Investors' },
  ];

  return (
    <div>
      <Section className="bg-gray-50 text-center">
        <h1 className="text-4xl font-extrabold text-[#4F4A45]">Who We Serve</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Tailored solutions for every need, from individual gifts to national campaigns.</p>
      </Section>

      <Section>
        <div className="flex justify-center border-b border-gray-200 mb-12">
            {audiences.map(aud => (
                <button 
                    key={aud.id}
                    onClick={() => setActiveAudience(aud.id)}
                    className={`px-4 py-2 -mb-px text-lg font-semibold border-b-2 transition-colors duration-300 ${activeAudience === aud.id ? 'border-[#D32F2F] text-[#D32F2F]' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                >
                    {aud.name}
                </button>
            ))}
        </div>
        <AudienceContent audience={activeAudience} />
      </Section>
    </div>
  );
};

export default WhoWeServePage;
