
import React from 'react';
import Section from '../components/Section';

const RoadmapItem: React.FC<{ phase: string, title: string, items: string[], isComplete?: boolean }> = ({ phase, title, items, isComplete = false }) => (
    <div className="relative pl-8">
        <div className={`absolute left-0 top-0 h-full border-l-2 ${isComplete ? 'border-[#D32F2F]' : 'border-gray-300'}`}></div>
        <div className={`absolute -left-3 top-3 h-6 w-6 rounded-full ${isComplete ? 'bg-[#D32F2F]' : 'bg-gray-300'} border-4 border-[#FEFCF3]`}></div>
        <div className="mb-12">
            <p className={`font-bold text-lg ${isComplete ? 'text-[#D32F2F]' : 'text-gray-500'}`}>{phase}</p>
            <h3 className="text-2xl font-bold mt-1 mb-4">{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    </div>
);

const RoadmapPage: React.FC = () => {
    return (
        <div>
            <Section className="bg-gray-50 text-center">
                <h1 className="text-4xl font-extrabold text-[#4F4A45]">Our Roadmap</h1>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Our "Crawl, Walk, Run" strategy for building the future of social-impact commerce.</p>
            </Section>

            <Section>
                <div className="max-w-2xl mx-auto">
                    <RoadmapItem
                        phase="Phase 1: Crawl (MVP)"
                        title="The Hyperlocal Marketing Partner"
                        items={[
                            "Hyperlocal Invitations (with free pilot)",
                            "Diya Sets (Festive Gifting)",
                            "Basic Sampling Packages",
                            "Self-serve client portal"
                        ]}
                        isComplete={true}
                    />
                    <RoadmapItem
                        phase="Phase 2: Walk (Growth)"
                        title="The Scalable Gifting & Sampling Engine"
                        items={[
                            "Expanded Festive Catalog",
                            "Advanced Sampling with Feedback/Voucher Modules",
                            "Impact Donation Bundles",
                            "API for Channel Partners"
                        ]}
                    />
                    <RoadmapItem
                        phase="Phase 3: Run (Vision)"
                        title="The Social-Impact Commerce Platform"
                        items={[
                            "Subscription Models for Brands",
                            "Custom SKU Development with Artisan Partners",
                            "Full Marketplace for D2C Gifting",
                            "Advanced Analytics & NPS Tracking"
                        ]}
                    />
                </div>
            </Section>
        </div>
    );
};

export default RoadmapPage;
