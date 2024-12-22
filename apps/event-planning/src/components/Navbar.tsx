'use client';

import React, { useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import downloadIcon from '../icons/assets-icons/download-icon.svg';
import BreezeButton from '../ui/BreezeButton';
import BreezeLogo from '../ui/BreezeLogo';
import Modal from './models/Modal';
import AppNavigation from './publicTimeline/AppNavigation';

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const path = usePathname();

  const memoizedBreezeButton = useMemo(
    () => (
      <BreezeButton
        onClick={() => setOpenModal(true)}
        className="hidden h-[44px] w-[170px] px-[32px] py-[10px] font-[600] md:block"
      >
        Download Free
      </BreezeButton>
    ),
    [setOpenModal],
  );

  const memoizedImage = useMemo(
    () => <Image src={downloadIcon} alt="download icon" width={24} height={24} />,

    [downloadIcon],
  );

  return (
    <React.Fragment>
      {/* mobile app navigation   */}
      {path === '/public-timeline' && (
        <AppNavigation
          onOpenModal={() => setOpenModal(true)}
          className="fixed bottom-0 flex w-full items-center justify-center gap-11 border-t bg-white px-6 py-2 pb-10 md:hidden"
        />
      )}

      <nav className="sticky top-0 z-20 flex items-center justify-between bg-white/50 px-[24px] py-[16px] shadow-sm backdrop-blur-md md:px-[40px] md:py-[24px]">
        <Link href="/">
          <BreezeLogo />
        </Link>

        {/* App Navigation  */}
        {path === '/public-timeline' && (
          <AppNavigation
            onOpenModal={() => setOpenModal(true)}
            className="ml-[6rem] hidden w-[375px] items-center gap-[47px] px-9 md:flex"
          />
        )}

        {memoizedBreezeButton}

        {/* Mobile Download button  */}
        <div
          onClick={() => setOpenModal(true)}
          className="block h-[40px] w-[40px] cursor-pointer rounded-[8px] bg-[#6DB24D] p-[8px] md:hidden"
        >
          {memoizedImage}
        </div>
      </nav>
      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </React.Fragment>
  );
};

export default Navbar;
