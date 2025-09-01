
import React, { useState } from 'react';
import Section from '../components/Section';

const GlossaryTerm: React.FC<{ term: string; definition: string }> = ({ term, definition }) => (
  <div className="mb-4">
    <dt className="font-bold text-lg text-[#4F4A45]">{term}</dt>
    <dd className="ml-4 text-gray-600">{definition}</dd>
  </div>
);

const StudyGuideSection: React.FC<{ title: string; content: string[] }> = ({ title, content }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-[#D32F2F]">{title}</h3>
        {content.map((p, i) => <p key={i} className="mb-2 text-gray-700">{p}</p>)}
    </div>
);

const blogTopics = [
  // ... (content defined in component)
];

const glossaryData = [
    // ... (content defined in component)
];

const studyGuideData = {
    // ... (content defined in component)
};

const developerNotes = {
    // ... (content defined in component)
};

type ResourceTab = 'blog' | 'glossary' | 'study_guide' | 'dev_notes';

const ResourcesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ResourceTab>('blog');
    
    // Data moved inside component to avoid top-level complexity
    const blogTopics = [
      { title: "Hyperlocal Marketing Magic: How to Win Your Neighborhood", keywords: "hyperlocal marketing, local business marketing, increase footfall" },
      { title: "The Ultimate Guide to Product Sampling in India", keywords: "product sampling india, fmcg marketing, drive product trials" },
      { title: "Why Direct Mail is Making a Comeback in the Digital Age", keywords: "direct mail marketing, offline marketing roi, tangible marketing" },
      { title: "Festive Gifting Simplified: A Corporate Guide for Diwali", keywords: "corporate gifting india, diwali gifts for employees, festive gifting solutions" },
      { title: "Impact Unboxed: How Your Brand Can Drive Social Change", keywords: "social impact commerce, csr initiatives india, impact sourcing" },
      { title: "Cost Per Acquisition Showdown: Direct Mail vs. Digital Ads", keywords: "cpa marketing, btl marketing, marketing budget allocation" },
      { title: "Tech Meets Tradition: The Technology Behind Post Bhejo", keywords: "logistics technology, india post api, delivery tracking" },
      { title: "Creative Mailer Ideas That Get Noticed", keywords: "creative direct mail, marketing campaign ideas, unique invitations" },
      { title: "Unlocking Tier-2 and Tier-3 Markets with India Post", keywords: "rural marketing india, reach remote customers, india post network" },
      { title: "The Psychology of Touch: Why Physical Marketing Creates Deeper Connections", keywords: "emotional marketing, brand loyalty, customer connection" },
    ];
    
    const glossaryData = [
      { term: "BTL Marketing (Below-the-Line Marketing)", definition: "Direct and targeted marketing activities, often focusing on specific consumer segments rather than mass media. Examples include direct mail, sampling, and in-store promotions." },
      { term: "CPA (Cost Per Action/Acquisition)", definition: "A marketing metric that measures the total cost of a specific desired action (e.g., a sale, a lead, a click) or acquiring a new customer." },
      { term: "CSR (Corporate Social Responsibility)", definition: "A business approach that contributes to sustainable development by delivering economic, social, and environmental benefits for all stakeholders." },
      { term: "Direct Post", definition: "A service offered by India Post for the unaddressed delivery of promotional materials like letters, postcards, and brochures to large numbers of recipients within a specific area." },
      { term: "Hyperlocal", definition: "Focusing on a very specific, limited geographical area, typically within a few kilometres." },
      { term: "Impact Sourcing", definition: "A business practice where companies intentionally source goods or services from suppliers that provide employment and development opportunities to disadvantaged communities." },
    ];

    const TabContent = () => {
        switch (activeTab) {
            case 'blog': return (
                <div>
                    <h2 className="text-3xl font-bold mb-6">Blog: Content Hub</h2>
                    <p className="mb-8 text-gray-600">Here are 10 blog topics to kickstart our content strategy, designed to attract our target audience through organic search.</p>
                    <div className="space-y-6">
                        {blogTopics.map((topic, i) => (
                            <div key={i} className="p-4 border border-gray-200 rounded-lg bg-white">
                                <h3 className="font-bold text-lg">{i+1}. {topic.title}</h3>
                                <p className="text-sm text-gray-500 mt-1"><strong>Keywords:</strong> {topic.keywords}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
            case 'glossary': return (
                <div>
                    <h2 className="text-3xl font-bold mb-6">Glossary of Key Terms</h2>
                    <dl>
                        {glossaryData.map((item, i) => <GlossaryTerm key={i} {...item} />)}
                    </dl>
                </div>
            );
            case 'study_guide': return (
                <div>
                    <h2 className="text-3xl font-bold mb-6">Post Bhejo: Comprehensive Study Guide</h2>
                    <StudyGuideSection title="I. Core Philosophy and Value Proposition" content={["The Unmet Need: In a digitally saturated world, physical touchpoints create lasting emotional impact. Hyperlocal physical distribution is complex and expensive. Post Bhejo democratises access to India Post's extensive physical network with technology.", "The Emotional Hook ('Intent Delivered'): More than just mail; it's the joy of personal invitations, warmth of festive surprises, pride in supporting local artisans, and trust from tangible samples. Makes these moments scalable and affordable."]} />
                    <StudyGuideSection title="II. Target Audiences and Tailored Pitches" content={["Investor/Leadership: Focus on Market Size & Unit Economics.", "Brand Clients (Retail/FMCG): Focus on ROI & Impact.", "NGOs/Artisan Groups: Focus on Sustainable Income & Reach."]} />
                    {/* Add more sections as needed */}
                </div>
            );
            case 'dev_notes': return (
                <div>
                    <h2 className="text-3xl font-bold mb-6">Website Strategy & Technical Notes</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Audit of (Hypothetical) Past Versions & Improvements</h3>
                            <p className="text-gray-700">This version was built to be future-proof and high-converting by addressing common pitfalls:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                                <li><strong>What Worked Before:</strong> Strong branding, clear value prop.</li>
                                <li><strong>What Didn't:</strong> High bounce rate from unclear navigation, low conversions due to hidden CTAs.</li>
                                <li><strong>Improvements in this Version:</strong> We've implemented a sticky header for easy navigation, a persistent sticky CTA and WhatsApp button to drive conversions, and clear, modular sections with scroll animations to improve engagement and reduce bounce rate.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">SEO Keyword Cluster Mapping</h3>
                            <p className="text-gray-700">Each page is built around primary and secondary keyword clusters. For example:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                                <li><strong>Home Page:</strong> Primary: "direct mail marketing india", "hyperlocal marketing". Secondary: "india post marketing", "offline campaigns". H1: "Intent Delivered". Meta: "Post Bhejo democratises impactful distribution...".</li>
                                <li><strong>Solutions Page:</strong> Primary: "product sampling services", "bulk mailers india". Secondary: "creative mailer campaigns", "festive gifting".</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="text-xl font-bold mb-2">Hosting Recommendations</h3>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                                <li><strong>Netlify/Vercel:</strong> Ideal for static React sites. Connect your Git repository for continuous deployment. Easiest and fastest option.</li>
                                <li><strong>cPanel (Shared Hosting):</strong> Run `npm run build`. Upload the contents of the `dist/` or `build/` folder to your `public_html` directory.</li>
                                <li><strong>Apache/Nginx:</strong> Serve the static files from the build folder. You may need to configure URL rewriting to handle client-side routing, redirecting all requests to `index.html`.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Image Recommendations</h3>
                            <p className="text-gray-700">Initially, high-quality placeholders from sites like `picsum.photos` or `unsplash` are used. For launch, replace them with <strong>custom photography</strong> showing your actual products, artisan partners, and the India Post process. This builds authenticity and trust far better than stock photos.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">A/B Testing Suggestions</h3>
                             <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                                <li><strong>CTA Text:</strong> Test "Start Your Free Pilot" vs. "Request a Quote" vs. "Get Started".</li>
                                <li><strong>Hero Section:</strong> Test the current headline "Intent Delivered" against a more benefit-driven one like "Unmatched Reach for Your Brand".</li>
                                <li><strong>Layouts:</strong> On the Solutions page, test the current card layout against a list-based layout to see which improves readability and engagement.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
            default: return null;
        }
    };

    return (
        <div>
            <Section className="bg-gray-50 text-center">
                <h1 className="text-4xl font-extrabold text-[#4F4A45]">Resources</h1>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Your hub for insights, knowledge, and strategy.</p>
            </Section>

            <Section>
                <div className="flex justify-center border-b border-gray-200 mb-12">
                    <button onClick={() => setActiveTab('blog')} className={`px-4 py-2 font-semibold ${activeTab === 'blog' ? 'border-b-2 border-red-500 text-red-600' : 'text-gray-500'}`}>Blog</button>
                    <button onClick={() => setActiveTab('glossary')} className={`px-4 py-2 font-semibold ${activeTab === 'glossary' ? 'border-b-2 border-red-500 text-red-600' : 'text-gray-500'}`}>Glossary</button>
                    <button onClick={() => setActiveTab('study_guide')} className={`px-4 py-2 font-semibold ${activeTab === 'study_guide' ? 'border-b-2 border-red-500 text-red-600' : 'text-gray-500'}`}>Study Guide</button>
                    <button onClick={() => setActiveTab('dev_notes')} className={`px-4 py-2 font-semibold ${activeTab === 'dev_notes' ? 'border-b-2 border-red-500 text-red-600' : 'text-gray-500'}`}>Dev Notes</button>
                </div>
                <div className="max-w-4xl mx-auto">
                    <TabContent />
                </div>
            </Section>
        </div>
    );
};

export default ResourcesPage;
