import React from "react";
import magnifyingGlass from "../../../icons/assets-icons/magnifying-glass.svg";
import celebrate from "../../../icons/assets-icons/celebrate.svg";
import Image from "next/image";

import { Sora } from "next/font/google";

const sora = Sora({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const EventContent = () => {
    return (
        <div
            className={`${sora.className} flex w-[268px] h-[152px] flex-col items-center justify-center gap-[16px]`}
        >
            <h2 className="font-[700] text-[32px] leading-[40px] tracking-[-0.026em]">
                <Image
                    src={magnifyingGlass}
                    alt="magnifying glass icon"
                    className="inline mr-[8px]"
                />
                Find events
            </h2>
            <h2 className="font-[700] text-[32px] leading-[40px] tracking-[-0.026em]">
                or
            </h2>
            <h2 className="font-[700] text-[32px] leading-[40px] tracking-[-0.026em]">
                <Image
                    src={celebrate}
                    alt="celebrate icon"
                    className="inline mr-[8px]"
                />
                Create events
            </h2>
        </div>
    );
};

export default EventContent;
