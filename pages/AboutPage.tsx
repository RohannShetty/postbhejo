
import React from 'react';
import Section from '../components/Section';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Section className="bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#4F4A45]">Our Story</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Bridging India's largest physical network with modern technology to deliver intent, emotion, and impact.</p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#D32F2F] mb-4">The Unmet Need</h2>
            <p className="text-gray-700 leading-relaxed">
              In a digitally saturated world, physical touchpoints create lasting emotional impact. However, hyperlocal physical distribution is complex and expensive. Post Bhejo was born from a simple idea: to democratise access to India Post's extensive physical network with the power of technology, making it easy and affordable for anyone to create meaningful offline connections.
            </p>
          </div>
          <img src="https://picsum.photos/600/400?random=2" alt="India Post network map" className="rounded-lg shadow-xl"/>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 border-l-4 border-[#DAA520]">
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">To democratise impactful distribution for marketing, gifting, and social impact, using the trusted reach of India Post.</p>
            </div>
            <div className="p-6 border-l-4 border-[#DAA520]">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To be India's go-to platform for hyperlocal-to-national campaigns—enabling brands, individuals, and NGOs to connect, gift, and create lasting impact.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Meet the Team (Placeholder)</h2>
          <p className="mt-2 text-gray-600">We are a passionate team of technologists, marketers, and logistics experts.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="text-center">
                <img className="w-32 h-32 mx-auto rounded-full" src={`https://picsum.photos/200/200?random=${i+10}`} alt={`Team member ${i}`} />
                <h4 className="mt-4 text-xl font-bold">Team Member {i}</h4>
                <p className="text-[#D32F2F]">Role / Title</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
