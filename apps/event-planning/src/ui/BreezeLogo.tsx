import React from 'react';

import Image from 'next/image';

import breezeLogoTest from '../icons/breeze-logos/Breeze-app-logo.svg';

const BreezeLogo = () => {
  return (
    <Image
      className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
      src={breezeLogoTest}
      alt="breeze logo"
    />
  );
};

export default BreezeLogo;
