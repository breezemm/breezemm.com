import React from 'react';

import EventContentSection from './EventContentSection';
import EventFeatures from './EventFeatures';

const HeroSection = () => {
  return (
    <div className="mb-[160px] flex flex-col items-center gap-[260px] lg:mb-[260px]">
      <EventContentSection />
      <EventFeatures />
    </div>
  );
};

export default HeroSection;
