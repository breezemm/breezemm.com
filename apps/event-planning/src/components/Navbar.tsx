"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import BreezeLogo from "../ui/BreezeLogo";
import BreezeButton from "../ui/BreezeButton";
import downloadIcon from "../icons/download-icon.svg";
import Modal from "./models/Modal";

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <React.Fragment>
            <nav className="flex sticky top-0 bg-white/50 z-20 shadow-sm backdrop-blur-md items-center justify-between py-[16px] px-[24px] md:py-[24px] md:px-[40px]">
                <Link href="/">
                    <BreezeLogo />
                </Link>

                <BreezeButton
                    onClick={() => setOpenModal(true)}
                    className="hidden md:block w-[170px] py-[10px] px-[32px] font-[600] h-[44px]"
                >
                    Download Free
                </BreezeButton>

                {/* Mobile Download button  */}
                <div
                    onClick={() => setOpenModal(true)}
                    className="cursor-pointer block md:hidden w-[40px] h-[40px] rounded-[8px] p-[8px] bg-[#6DB24D]"
                >
                    <Image
                        src={downloadIcon}
                        alt="download icon"
                        width={24}
                        height={24}
                    />
                </div>
            </nav>
            {openModal && <Modal onClose={() => setOpenModal(false)} />}
        </React.Fragment>
    );
};

export default Navbar;
