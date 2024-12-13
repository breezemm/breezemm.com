'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';

import appleStore from '../../icons/app-store-icons/apple-store.svg';
import googlePlayStore from '../../icons/app-store-icons/google-play-store.svg';
import closeIcon from '../../icons/assets-icons/close-icon.svg';

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  // remove scroll bar on modal open.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* overlay  */}
      <div
        onClick={onClose}
        className="bg-black/3 fixed bottom-0 left-0 top-0 z-30 h-screen w-screen backdrop-blur-sm"
      />

      <div className="fixed left-[50%] top-[50%] z-50 h-[360px] w-[336px] translate-x-[-50%] translate-y-[-50%] rounded-[16px] bg-[#FCFCFC] shadow-md">
        <div onClick={onClose} className="absolute right-0 top-0 m-[24px] cursor-pointer">
          <Image src={closeIcon} className="h-auto w-auto" alt="close icon" />
        </div>

        <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col gap-[48px]">
          <div className="flex flex-col items-center gap-[8px]">
            <h3 className="text-[18px] font-[700] leading-[24px] tracking-tighter">
              Download Now!
            </h3>
            <p className="text-sm font-[400] leading-[24px] tracking-tighter">
              Get an account for{' '}
              <span className="font-[700] tracking-[0.006em] text-[#578F3D]">FREE</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-[16px]">
            <Image
              src={appleStore}
              alt="apple app store icon"
              className="h-auto w-auto cursor-pointer"
            />
            <Image
              src={googlePlayStore}
              alt="google play store icon"
              className="h-auto w-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
