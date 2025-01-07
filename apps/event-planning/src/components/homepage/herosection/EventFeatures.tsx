import React from 'react';

import { Figtree } from 'next/font/google';
import Image from 'next/image';

import checkIcon from '@/icons/assets-icons/check-icon.svg';
import BreezeButton from '@/ui/BreezeButton';

const figtree = Figtree({ weight: ['300', '500', '600'], subsets: ['latin'] });
const EventFeatures = () => {
  return (
    <div
      className={` ${figtree.className} flex flex-col items-center gap-[88px] font-normal text-[#191A1A] md:gap-[180px] lg:flex-row`}
    >
      <div className="relative flex w-[328px] flex-col items-center gap-[24px] rounded-[16px] border-2 border-[#323334] px-[24px] py-[40px] md:w-auto">
        <BreezeButton className="absolute left-[50%] top-0 h-[40px] w-[180px] translate-x-[-50%] translate-y-[-50%] p-[8px]">
          I go to events.
        </BreezeButton>
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center gap-[16px] px-[16px] py-[8px]">
            <Image src={checkIcon} alt="check icon" className="h-auto w-auto" />
            <p>Find events.</p>
          </div>

          <div className="flex items-center gap-[16px] px-[16px] py-[8px]">
            <Image src={checkIcon} alt="check icon" className="h-auto w-auto" />
            <p>Buy event ticket.</p>
          </div>

          <div className="flex w-full items-center gap-[16px] px-[16px] py-[8px]">
            <Image src={checkIcon} alt="check icon" className="h-auto w-auto" />
            <span className="w-full">Share the fun memories with the crowd.</span>
          </div>
        </div>

        <div className="rounded-full border-2 border-[#0077CC] bg-[rgba(0,119,204,0.2)] px-[16px] py-[8px]">
          <p>Goodbye to boring ticket 🤗</p>
        </div>
      </div>

      <div className="relative flex w-[328px] flex-col items-center gap-[24px] rounded-[16px] border-2 border-[#323334] px-[24px] py-[40px] text-[16px] font-[400] leading-[24px] md:w-auto">
        <BreezeButton className="absolute left-[50%] top-0 h-[40px] w-[180px] translate-x-[-50%] translate-y-[-50%] p-[8px]">
          I organize events.
        </BreezeButton>
        <div className="">
          <div className="flex items-center gap-[16px] px-[16px] py-[8px]">
            <Image src={checkIcon} alt="check icon" className="h-auto w-auto" />
            <p>Create events.</p>
          </div>

          <div className="flex items-center gap-[16px] px-[16px] py-[8px]">
            <Image src={checkIcon} className="h-auto w-auto" alt="check icon" />
            <p>Be in control of the event.</p>
          </div>

          <div className="flex items-center gap-[16px] px-[16px] py-[8px]">
            <Image src={checkIcon} alt="check icon" className="h-auto w-auto" />
            <p>Create as many Digital Ticket as you want.</p>
            <span className="absolute right-[-6%] rounded-full bg-[#6DB24D] px-[10px] text-white">
              FREE
            </span>
          </div>
        </div>

        <div className="rounded-full border-2 border-[#0077CC] bg-[rgba(0,119,204,0.2)] px-[16px] py-[8px]">
          <p>Goodbye to paperwork. 🤗</p>
        </div>
      </div>
    </div>
  );
};

export default EventFeatures;
