import React from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => (
  <HashRouter>
    <div className="min-h-screen bg-[#f7f6f4] text-[#1f2937]">
      <Header />
      <main className="pt-20">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<SolutionsPage />} />
          <Route path="/product" element={<PricingPage />} />
          <Route path="/corporate" element={<WhoWeServePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<ImpactStoriesPage />} />
          <Route path="/whatsapp-order" element={<ResourcesPage />} />
          <Route path="/faq" element={<RoadmapPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <StickyCTA />
      <Footer />
    </div>
  </HashRouter>
);

export default App;
