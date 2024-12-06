"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import appleStore from "../../icons/apple-store.svg";
import closeIcon from "../../icons/close-icon.svg";
import googlePlayStore from "../../icons/google-play-store.svg";

type ModalProps = {
    onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
    // remove scroll bar on modal open.
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <>
            {/* overlay  */}
            <div
                onClick={onClose}
                className="w-screen h-screen fixed top-0 bottom-0 left-0 bg-black/3 backdrop-blur-sm z-30 "
            />

            <div className="w-[336px] shadow-md rounded-[16px] z-50 h-[360px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#FCFCFC]">
                <div
                    onClick={onClose}
                    className="absolute top-0 right-0 m-[24px] cursor-pointer"
                >
                    <Image
                        src={closeIcon}
                        className="w-auto h-auto"
                        alt="close icon"
                    />
                </div>

                <div className="flex flex-col gap-[48px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <div className="flex flex-col gap-[8px] items-center">
                        <h3 className="font-[700] text-[18px] leading-[24px] tracking-tighter">
                            Download Now!
                        </h3>
                        <p className="font-[400] text-sm leading-[24px] tracking-tighter">
                            Get an account for{" "}
                            <span className="text-[#578F3D] font-[700] tracking-[0.006em]">
                                FREE
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-[16px]">
                        <Image
                            src={appleStore}
                            alt="apple app store icon"
                            className="w-auto h-auto cursor-pointer"
                        />
                        <Image
                            src={googlePlayStore}
                            alt="google play store icon"
                            className="w-auto h-auto cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
