
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { ArrowRightIcon, CheckCircleIcon } from '../components/Icons';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-[#D32F2F] mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#C4B79A]/20 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#4F4A45] leading-tight">
            Intent Delivered.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            In a world of ignored emails and endless digital ads, Post Bhejo creates tangible connections at scale using the unmatched reach of India Post.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link to="/contact" className="bg-[#D32F2F] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition-transform hover:scale-105 cta-pulse">
              Start Your Free Pilot
            </Link>
            <Link to="/solutions" className="bg-white text-[#D32F2F] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold">The Post Bhejo Difference</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">We bridge India Post's reach with modern brand needs, offering what digital ads and traditional couriers cannot.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<CheckCircleIcon className="w-6 h-6" />}
            title="Unbeatable Reach"
            description="Leverage India Post's network to reach every pincode, from hyperlocal neighborhoods to the most remote villages."
          />
          <FeatureCard 
            icon={<CheckCircleIcon className="w-6 h-6" />}
            title="Tangible Impact"
            description="Create lasting emotional connections with physical invitations, product samples, and heartfelt gifts."
          />
          <FeatureCard 
            icon={<CheckCircleIcon className="w-6 h-6" />}
            title="Cost-Effective CPA"
            description="Achieve a superior Cost Per Action/Acquisition compared to digital-only or traditional courier models."
          />
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-600 mb-6">From mass-market campaigns to highly targeted mailers, we provide end-to-end solutions for your offline marketing and gifting needs.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRightIcon className="w-6 h-6 text-[#D32F2F] mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Direct Post Distribution:</span> Unaddressed leaflets, postcards, and brochures at an incredible scale.</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="w-6 h-6 text-[#D32F2F] mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Product Sampling:</span> Deliver sachets and small packs directly into the hands of potential customers.</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="w-6 h-6 text-[#D32F2F] mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Creative Campaigns:</span> Go beyond paper with seed invites, festive kites, Diwali diyas, and more.</span>
              </li>
            </ul>
            <Link to="/solutions" className="mt-8 inline-block text-[#D32F2F] font-semibold hover:underline">
              See All Services & Add-ons <ArrowRightIcon className="inline w-4 h-4" />
            </Link>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=1" alt="Post Bhejo campaign materials" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </Section>

      {/* Social Proof/Testimonial Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Trusted by Brands, NGOs, and Individuals</h2>
          <p className="mt-2 text-gray-600">Making an impact, one delivery at a time.</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-xl italic text-gray-700">"Post Bhejo helped us reach a hyperlocal audience for our new store opening with their 'First 1,000 Invites' pilot. The footfall conversion was beyond our expectations. It's a game-changer for small businesses!"</p>
            <p className="mt-6 font-bold text-lg">- Anjali Mehta, Founder of a Local Retail Chain</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
