
import React from 'react';
import Section from '../components/Section';
import { CheckCircleIcon } from '../components/Icons';

const ServiceCard: React.FC<{ title: string, description: string, children?: React.ReactNode }> = ({ title, description, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-[#D32F2F] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
    </div>
);

const SolutionsPage: React.FC = () => {
  return (
    <div>
      <Section className="bg-gray-50 text-center">
        <h1 className="text-4xl font-extrabold text-[#4F4A45]">Our Solutions</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">A comprehensive suite of services to power your offline campaigns, from hyperlocal to national.</p>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Core Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceCard
            title="Direct Post Distribution"
            description="Leverage India Post's 'Direct Post' service for unaddressed delivery of your marketing materials at an unparalleled scale and cost-effectiveness. Ideal for mass-market awareness campaigns."
          >
            <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Leaflets, Postcards, Brochures</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Hyperlocal to City-wide Targeting</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Highest Reach for BTL Marketing</li>
            </ul>
          </ServiceCard>
          <ServiceCard
            title="Targeted Bulk Mailers"
            description="Have your own customer database? We offer confidential handling and distribution for your personalized campaigns, ensuring your message reaches the right people."
          >
             <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Secure Data Handling</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Personalized Letters & Offers</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Ideal for Customer Retention</li>
            </ul>
          </ServiceCard>
          <ServiceCard
            title="Product Sampling"
            description="Get your product directly into the hands of potential customers. We manage the logistics of distributing sachets and small product samples along with letters or postcards."
          >
             <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> FMCG Sachets, Small Packs</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Drive Product Trials</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Collect Feedback via QR Codes</li>
            </ul>
          </ServiceCard>
          <ServiceCard
            title="Festive & Corporate Gifting"
            description="From Diwali diyas sourced from local artisans to corporate new year gifts, we handle bulk gifting with a personal touch, ensuring timely and impactful delivery."
          >
             <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Artisan-sourced Products</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Scalable for Large Corporations</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" /> Social Impact Association</li>
            </ul>
          </ServiceCard>
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Creative Campaign Options & Add-ons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg">Seed Paper Invites</h4>
                <p className="text-sm text-gray-600">Eco-friendly invites that can be planted.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg">Reflective/Shiny Cards</h4>
                <p className="text-sm text-gray-600">Premium cards that grab attention.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg">Band-Aid Campaigns</h4>
                <p className="text-sm text-gray-600">A creative way to send a "we care" message.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg">Festive Kites & Diyas</h4>
                <p className="text-sm text-gray-600">Seasonal campaigns that create delight.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg">Printing Solutions</h4>
                <p className="text-sm text-gray-600">High-quality printing for all your materials.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg">Tracking & Reporting</h4>
                <p className="text-sm text-gray-600">QR code tracking for response measurement.</p>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default SolutionsPage;
