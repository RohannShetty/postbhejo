
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import DiwaliOverlay from './components/DiwaliOverlay';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import PricingPage from './pages/PricingPage';
import WhoWeServePage from './pages/WhoWeServePage';
import ImpactStoriesPage from './pages/ImpactStoriesPage';
import ResourcesPage from './pages/ResourcesPage';
import RoadmapPage from './pages/RoadmapPage';
import ContactPage from './pages/ContactPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isDiwaliTheme, setIsDiwaliTheme] = useState(false);

  return (
    <HashRouter>
      <div className={`relative min-h-screen bg-[#FEFCF3] text-[#4F4A45] ${isDiwaliTheme ? 'diwali-theme' : ''}`}>
        {isDiwaliTheme && <DiwaliOverlay />}
        <Header isDiwaliTheme={isDiwaliTheme} setIsDiwaliTheme={setIsDiwaliTheme} />
        <main className="pt-20">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/who-we-serve" element={<WhoWeServePage />} />
            <Route path="/impact-stories" element={<ImpactStoriesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <StickyCTA />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
