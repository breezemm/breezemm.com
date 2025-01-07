import React from 'react';

import { Sora } from 'next/font/google';
import Image from 'next/image';

import celebrate from '@/icons/assets-icons/celebrate.svg';
import magnifyingGlass from '@/icons/assets-icons/magnifying-glass.svg';

const sora = Sora({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const EventContent = () => {
  return (
    <div
      className={`${sora.className} flex h-[152px] w-[268px] flex-col items-center justify-center gap-[16px]`}
    >
      <h2 className="text-[32px] font-[700] leading-[40px] tracking-[-0.026em]">
        <Image src={magnifyingGlass} alt="magnifying glass icon" className="mr-[8px] inline" />
        Find events
      </h2>
      <h2 className="text-[32px] font-[700] leading-[40px] tracking-[-0.026em]">or</h2>
      <h2 className="text-[32px] font-[700] leading-[40px] tracking-[-0.026em]">
        <Image src={celebrate} alt="celebrate icon" className="mr-[8px] inline" />
        Create events
      </h2>
    </div>
  );
};

export default EventContent;
