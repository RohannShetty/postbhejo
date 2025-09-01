
import React from 'react';
import Section from '../components/Section';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Section className="bg-gray-50 text-center">
        <h1 className="text-4xl font-extrabold text-[#4F4A45]">Get in Touch</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Ready to start your campaign? Have a question? We'd love to hear from you.</p>
      </Section>
      
      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Start Your Free Pilot</h2>
            <p className="text-gray-600 mb-6">Let us prove our value. We're offering a zero-risk pilot for new clients to experience the power of Post Bhejo firsthand. Fill out the form, and our team will get back to you to set up your first hyperlocal campaign.</p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-xl text-[#D32F2F]">✓</span>
                <p className="ml-2"><strong>"First 1,500 Invites On Us"</strong> for local businesses.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-xl text-[#D32F2F]">✓</span>
                <p className="ml-2">No commitment, no hidden fees.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-xl text-[#D32F2F]">✓</span>
                <p className="ml-2">See the tangible results and ROI for yourself.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company (Optional)</label>
                <input type="text" id="company" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your campaign</label>
                <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#D32F2F] text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                Request Free Pilot
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
