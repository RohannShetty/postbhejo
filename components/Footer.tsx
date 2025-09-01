
import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, LinkedInIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from './Icons';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Impact Stories', path: '/impact-stories' },
    { name: 'Contact', path: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Blog', path: '/resources' },
    { name: 'Glossary', path: '/resources' },
    { name: 'Study Guide', path: '/resources' },
    { name: 'Roadmap', path: '/roadmap' },
  ];

  return (
    <footer className="bg-[#4F4A45] text-[#FEFCF3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PostBhejo</h3>
            <p className="text-gray-300 text-sm">Intent Delivered. Democratising impactful distribution for marketing, gifting, and social impact.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><LinkedInIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><YouTubeIcon className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-300 hover:text-white text-sm">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-300 hover:text-white text-sm">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">Join our newsletter to get the latest updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-gray-800 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-[#D32F2F] text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Post Bhejo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
