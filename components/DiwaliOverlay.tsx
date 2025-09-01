
import React from 'react';
import { DiyaIcon } from './Icons';

const DiwaliOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div className="absolute top-2 left-1/4 animate-pulse">
        <DiyaIcon className="w-12 h-12 text-yellow-400 diwali-glow" />
      </div>
      <div className="absolute bottom-10 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}>
        <DiyaIcon className="w-16 h-16 text-yellow-400 diwali-glow" />
      </div>
      <div className="absolute top-1/3 right-10 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <DiyaIcon className="w-10 h-10 text-yellow-400 diwali-glow" />
      </div>
      <div className="absolute bottom-1/4 left-10 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <DiyaIcon className="w-14 h-14 text-yellow-400 diwali-glow" />
      </div>
    </div>
  );
};

export default DiwaliOverlay;
