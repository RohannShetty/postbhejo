
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { CheckCircleIcon } from '../components/Icons';

const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}> = ({ title, price, description, features, isFeatured = false }) => (
  <div className={`border rounded-lg p-8 flex flex-col ${isFeatured ? 'border-[#D32F2F] scale-105 bg-white' : 'border-gray-200'}`}>
    {isFeatured && <span className="bg-[#D32F2F] text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">MOST POPULAR</span>}
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-gray-500 mt-2">{description}</p>
    <div className="my-6">
      <span className="text-4xl font-extrabold">{price}</span>
      <span className="text-gray-500">/ per unit</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/contact" className={`mt-auto w-full text-center font-bold py-3 px-6 rounded-lg transition-colors ${isFeatured ? 'bg-[#D32F2F] text-white hover:bg-red-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
      Get Started
    </Link>
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div>
      <Section className="bg-gray-50 text-center">
        <h1 className="text-4xl font-extrabold text-[#4F4A45]">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Choose a plan that fits your campaign goals. All prices are indicative and may vary based on volume and complexity.</p>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <PricingCard
            title="Hyperlocal Starter"
            price="₹2*"
            description="Perfect for local businesses to test the waters with our free pilot offer."
            features={[
              "Up to 1,500 Invites/Leaflets",
              "Hyperlocal Pincode Targeting",
              "Standard Paper Quality",
              "Basic Delivery Reporting"
            ]}
          />
          <PricingCard
            title="Brand Builder"
            price="₹5*"
            description="Ideal for brand awareness and product sampling campaigns at scale."
            features={[
              "Minimum 10,000 Units",
              "Multi-City Targeting",
              "Product Sample Attachment",
              "QR Code Tracking & Analytics"
            ]}
            isFeatured={true}
          />
          <PricingCard
            title="Enterprise & Gifting"
            price="Custom"
            description="Tailor-made solutions for large-scale, creative, and corporate gifting campaigns."
            features={[
              "Unlimited Volume",
              "Custom Creative Formats",
              "Artisan-Sourced Gifting",
              "Dedicated Account Manager"
            ]}
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">*Prices are indicative and exclude printing, logistics, and taxes. Contact us for a detailed quote.</p>
      </Section>
      
      <Section className="bg-white">
        <div className="text-center bg-[#C4B79A]/20 p-12 rounded-lg">
          <h2 className="text-3xl font-bold">Need a Custom Quote?</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">Every campaign is unique. Let's discuss your specific needs for volume, creative formats, and targeting to build the perfect plan for you.</p>
          <Link to="/contact" className="mt-6 inline-block bg-[#D32F2F] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition-transform hover:scale-105">
            Request a Custom Quote
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default PricingPage;
