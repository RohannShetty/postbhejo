
import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    category: 'Hyperlocal Retail',
    title: 'Local Cafe Drives 25% Increase in Footfall',
    description: 'Using our "First 1,500 Invites on Us" pilot, a new cafe in Bengaluru targeted nearby residential complexes, resulting in a measurable 25% increase in footfall during their opening week.',
    imageUrl: 'https://picsum.photos/seed/case1/400/300',
    link: '#',
  },
  {
    category: 'FMCG Sampling',
    title: 'New Shampoo Brand Achieves 50,000 Product Trials',
    description: 'A leading FMCG company used Post Bhejo to distribute 50,000 shampoo sachets in Tier-2 cities, generating massive product trials and valuable customer feedback via QR codes.',
    imageUrl: 'https://picsum.photos/seed/case2/400/300',
    link: '#',
  },
  {
    category: 'Social Impact Gifting',
    title: 'Corporate Diwali Gifting Empowers 100+ Artisans',
    description: 'We partnered with a tech giant for their Diwali gifting program, sourcing hand-painted diyas from rural artisan clusters, providing sustainable income for over 100 artisans.',
    imageUrl: 'https://picsum.photos/seed/case3/400/300',
    link: '#',
  },
    {
    category: 'NGO Partnership',
    title: 'Handicraft NGO Reaches National Customer Base',
    description: 'An NGO promoting tribal handicrafts leveraged our platform to sell their products to corporate clients, expanding their reach beyond local markets for the first time.',
    imageUrl: 'https://picsum.photos/seed/case4/400/300',
    link: '#',
  },
];

const ImpactCard: React.FC<typeof caseStudies[0]> = ({ category, title, description, imageUrl, link }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="p-6">
            <p className="text-sm font-semibold text-[#D32F2F] uppercase">{category}</p>
            <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <Link to={link} className="font-semibold text-[#D32F2F] hover:underline">Read More &rarr;</Link>
        </div>
    </div>
);


const ImpactStoriesPage: React.FC = () => {
  return (
    <div>
      <Section className="bg-gray-50 text-center">
        <h1 className="text-4xl font-extrabold text-[#4F4A45]">Impact Stories</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Real results from brands, artisans, and communities we've partnered with.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
                <ImpactCard key={index} {...study} />
            ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center">
            <h2 className="text-3xl font-bold">From Our Partners</h2>
            <div className="mt-8 max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg">
                <blockquote className="text-xl italic text-gray-700">
                    "Partnering with Post Bhejo was transformative. They didn't just give us orders; they gave us a platform to tell our story and a stable income that has helped our entire community."
                </blockquote>
                <cite className="mt-6 block font-bold text-lg not-italic">- Laxmi Devi, Head of Artisan Cooperative</cite>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default ImpactStoriesPage;
