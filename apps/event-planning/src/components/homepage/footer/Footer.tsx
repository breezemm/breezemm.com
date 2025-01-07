import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { appStoreIcons, contactInfo, socialMedias } from '@/CONSTANTS';
import breezeHLogo from '@/icons/breeze-logos/breeze-h-logo.svg';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-[80px] bg-black pb-[80px] md:px-[144px] lg:h-[400px] lg:flex-row lg:items-end lg:gap-0">
      <div className="flex flex-col gap-[40px] pt-[40px] text-white">
        {/* Breeze logo  */}
        <div className="flex gap-[16px]">
          <Image src={breezeHLogo} alt="Breeze Logo" className="h-auto w-auto" />
        </div>

        {/* Contact Info  */}
        <div className="flex flex-col gap-[8px]">
          {contactInfo.map((c) => (
            <div key={c.text} className="flex items-center gap-[16px] p-[8px]">
              <div className="h-[19px] w-[19px]">
                <Image src={c.icon} alt={c.text} className="h-auto w-auto" />
              </div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* app download and social media */}
      <div className="flex flex-col items-center gap-[72px] md:gap-[40px] lg:items-end">
        <div className="flex items-center gap-[16px]">
          {appStoreIcons.map((store) => (
            <Image key={store.alt} src={store.src} alt={store.alt} className="h-auto w-auto" />
          ))}
        </div>

        <div className="flex items-center gap-[40px]">
          {socialMedias.map((s, i) => (
            <Image key={i} src={s} alt={s} className="h-auto w-auto" />
          ))}
        </div>

        <div className="flex items-center gap-[24px] text-[#FCFCFC]">
          <Link className="underline" href="/event-planning/terms-and-conditions">
            Terms & Conditions
          </Link>
          <Link className="underline" href="/event-planning/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
