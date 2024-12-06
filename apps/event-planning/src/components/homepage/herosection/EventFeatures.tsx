import React from "react";
import Image from "next/image";
import checkIcon from "../../../icons/check-icon.svg";
import BreezeButton from "../../../ui/BreezeButton";
import { Figtree } from "next/font/google";

const figtree = Figtree({ weight: ["300", "500", "600"], subsets: ["latin"] });
const EventFeatures = () => {
    return (
        <div
            className={` ${figtree.className} font-normal text-[#191A1A]  flex items-center lg:flex-row flex-col gap-[88px] md:gap-[180px]`}
        >
            <div className="flex flex-col w-[328px] md:w-auto items-center relative gap-[24px] border-2 border-[#323334] rounded-[16px] py-[40px] px-[24px] ">
                <BreezeButton className="p-[8px] w-[180px] h-[40px] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    I go to events.
                </BreezeButton>
                <div className="w-full flex flex-col">
                    <div className="flex px-[16px] py-[8px] items-center gap-[16px] w-full ">
                        <Image
                            src={checkIcon}
                            alt="check icon"
                            className="w-auto h-auto"
                        />
                        <p>Find events.</p>
                    </div>

                    <div className="flex px-[16px] py-[8px] items-center gap-[16px] ">
                        <Image
                            src={checkIcon}
                            alt="check icon"
                            className="w-auto h-auto"
                        />
                        <p>Buy event ticket.</p>
                    </div>

                    <div className="flex px-[16px] py-[8px] items-center gap-[16px] w-full ">
                        <Image
                            src={checkIcon}
                            alt="check icon"
                            className="w-auto h-auto"
                        />
                        <span className="w-full">
                            Share the fun memories with the crowd.
                        </span>
                    </div>
                </div>

                <div className="px-[16px] py-[8px] bg-[rgba(0,119,204,0.2)] border-[#0077CC] border-2 rounded-full">
                    <p>Goodbye to boring ticket 🤗</p>
                </div>
            </div>

            <div className="flex text-[16px] w-[328px] md:w-auto font-[400] leading-[24px] flex-col items-center relative gap-[24px] border-2 border-[#323334] rounded-[16px] py-[40px] px-[24px] ">
                <BreezeButton className="p-[8px] w-[180px] h-[40px] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    I organize events.
                </BreezeButton>
                <div className="">
                    <div className="flex px-[16px] py-[8px] items-center gap-[16px] ">
                        <Image
                            src={checkIcon}
                            alt="check icon"
                            className="w-auto h-auto"
                        />
                        <p>Create events.</p>
                    </div>

                    <div className="flex px-[16px] py-[8px] items-center gap-[16px] ">
                        <Image
                            src={checkIcon}
                            className="w-auto h-auto"
                            alt="check icon"
                        />
                        <p>Be in control of the event.</p>
                    </div>

                    <div className="flex px-[16px] py-[8px] items-center gap-[16px] ">
                        <Image
                            src={checkIcon}
                            alt="check icon"
                            className="w-auto h-auto"
                        />
                        <p>Create as many Digital Ticket as you want.</p>
                        <span className="bg-[#6DB24D] text-white px-[10px] rounded-full absolute right-[-6%]">
                            FREE
                        </span>
                    </div>
                </div>

                <div className="px-[16px] py-[8px] bg-[rgba(0,119,204,0.2)] border-[#0077CC] border-2 rounded-full">
                    <p>Goodbye to paperwork. 🤗</p>
                </div>
            </div>
        </div>
    );
};

export default EventFeatures;
