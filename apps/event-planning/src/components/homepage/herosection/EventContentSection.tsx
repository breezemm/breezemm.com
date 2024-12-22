import React from 'react';

import EventCategories from './EventCategories';
import EventContent from './EventContent';
import EventContentCTA from './EventContentCTA';

const EventContentSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-[160px] lg:w-[991px] lg:flex-row">
      <div className="flex h-[480px] w-full flex-col items-center justify-center gap-[68px] md:h-[460px] md:w-[431px] md:gap-[88px]">
        <EventContent />
        <EventContentCTA />
      </div>
      <EventCategories />
    </div>
  );
};

export default EventContentSection;
