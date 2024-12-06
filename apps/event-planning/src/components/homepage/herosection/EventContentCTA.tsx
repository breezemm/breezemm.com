"use client";
import React, { useState } from "react";
import Image from "next/image";

import BreezeButton from "../../../ui/BreezeButton";
import downloadIcon from "../../../icons/download-icon.svg";
import flag from "../../../icons/flag.svg";
import Modal from "../../models/Modal";

const EventContentCTA = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <React.Fragment>
            {openModal && <Modal onClose={() => setOpenModal(false)} />}

            <div className="md:w-[431px] font-sora h-[220px] flex flex-col gap-[48px] justify-center items-center md:px-0 px-[24px] m-0-auto">
                <div className="flex flex-col md:w-full w-[327px] h-[260px] justify-center items-center gap-[16px] md:px-0 px-[25px]">
                    <h2 className="font-[700] text-[32px] text-center w-full leading-[40px] tracking-[-0.026em]">
                        Get your account in 3 mins!
                    </h2>
                    <p className="font-[400px] text-[16px] leading-[24px] tracking-[-0.016em]">
                        Only in 3 mins. For Real. No Cap.
                    </p>
                </div>

                <div className="w-full flex flex-col justify-center items-center gap-[8px]">
                    <BreezeButton
                        onClick={() => setOpenModal(true)}
                        className="relative w-full flex justify-center items-center gap-[16px] h-[44px] text-[16px] font-[600]"
                    >
                        <Image
                            src={downloadIcon}
                            className="w-auto h-auto"
                            alt="download icon"
                        />
                        Download App
                        <p className="absolute top-[-40%] right-[-9%] bg-[#6DB24D] rounded-full text-[14px] font-[600] text-[#FCFCFC] leading-[24px] tracking-[0.01em] py-[2px] px-[8px]">
                            100% FREE
                        </p>
                    </BreezeButton>

                    <p className="font-[600] text-[14px] leading-[24px] tracking-[0.01em]">
                        <Image
                            src={flag}
                            className="inline w-auto h-auto m-[8px]"
                            alt="myanmar flag icon"
                        />
                        Proudly Made in Myanmar.
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EventContentCTA;
