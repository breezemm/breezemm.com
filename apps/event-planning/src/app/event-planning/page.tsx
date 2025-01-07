import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HeroSection from '@/components/homepage/herosection/HeroSection';
import arrowRight from '@/icons/assets-icons/arrow-right.svg';

export default async function DashboardPage() {
  return (
    <main>
      <div className="mb-[23px] mt-[16px] flex justify-center">
        <Link
          href={'/event-planning/public-timeline'}
          className="primary-btn shadow-customShadow flex items-center gap-[8px] px-[24px] py-[8px]"
        >
          App preview
          <Image alt="arrow icon" src={arrowRight} className="h-auto w-auto" />
        </Link>
      </div>

      <section>
        <HeroSection />
      </section>
    </main>
  );
}
