'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import downloadIcon from '@/icons/assets-icons/download-icon.svg';
import flag from '@/icons/assets-icons/flag.svg';
import BreezeButton from '@/ui/BreezeButton';
import Modal from '@/components/models/Modal';

const EventContentCTA = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      {openModal && <Modal onClose={() => setOpenModal(false)} />}

      <div className="font-sora m-0-auto flex h-[220px] flex-col items-center justify-center gap-[48px] px-[24px] md:w-[431px] md:px-0">
        <div className="flex h-[260px] w-[327px] flex-col items-center justify-center gap-[16px] px-[25px] md:w-full md:px-0">
          <h2 className="w-full text-center text-[32px] font-[700] leading-[40px] tracking-[-0.026em]">
            Get your account in 3 mins!
          </h2>
          <p className="text-[16px] font-[400px] leading-[24px] tracking-[-0.016em]">
            Only in 3 mins. For Real. No Cap.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[8px]">
          <BreezeButton
            onClick={() => setOpenModal(true)}
            className="relative flex h-[44px] w-full items-center justify-center gap-[16px] text-[16px] font-[600]"
          >
            <Image src={downloadIcon} className="h-auto w-auto" alt="download icon" />
            Download App
            <p className="absolute right-[-9%] top-[-40%] rounded-full bg-[#6DB24D] px-[8px] py-[2px] text-[14px] font-[600] leading-[24px] tracking-[0.01em] text-[#FCFCFC]">
              100% FREE
            </p>
          </BreezeButton>

          <p className="text-[14px] font-[600] leading-[24px] tracking-[0.01em]">
            <Image src={flag} className="m-[8px] inline h-auto w-auto" alt="myanmar flag icon" />
            Proudly Made in Myanmar.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventContentCTA;
