import React from 'react';

import Image from 'next/image';

import { appNavigation } from '../../CONSTANTS';

type AppNavigationProps = {
  className: string;
  onOpenModal: () => void;
};

const AppNavigation = ({ className, onOpenModal }: AppNavigationProps) => {
  return (
    <ul className={className}>
      {appNavigation.map((nav) => (
        <li onClick={onOpenModal} key={nav.alt} className="h-22 block w-24 cursor-pointer">
          <Image src={nav.iconSrc} alt={nav.alt} className="h-auto w-auto" />
        </li>
      ))}
    </ul>
  );
};

export default AppNavigation;
