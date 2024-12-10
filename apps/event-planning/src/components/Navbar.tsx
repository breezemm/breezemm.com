"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import BreezeLogo from "../ui/BreezeLogo";
import BreezeButton from "../ui/BreezeButton";

import downloadIcon from "../icons/assets-icons/download-icon.svg";
import Modal from "./models/Modal";
import { usePathname } from "next/navigation";
import AppNavigation from "./publicTimeline/AppNavigation";

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

    const path = usePathname();

    const memoizedBreezeButton = useMemo(
        () => (
            <BreezeButton
                onClick={() => setOpenModal(true)}
                className="hidden md:block w-[170px] py-[10px] px-[32px] font-[600] h-[44px]"
            >
                Download Free
            </BreezeButton>
        ),
        [setOpenModal]
    );

    const memoizedImage = useMemo(
        () => (
            <Image
                src={downloadIcon}
                alt="download icon"
                width={24}
                height={24}
            />
        ),
        [downloadIcon]
    );

    return (
        <React.Fragment>
            {/* mobile app navigation   */}
            {path === "/public-timeline" && (
                <AppNavigation
                    onOpenModal={() => setOpenModal(true)}
                    className="flex md:hidden justify-center items-center gap-11 py-2 px-6 fixed bottom-0 pb-10 bg-white border-t w-[375px]"
                />
            )}

            <nav className="flex sticky top-0 bg-white/50 z-20 shadow-sm backdrop-blur-md items-center justify-between py-[16px] px-[24px] md:py-[24px] md:px-[40px]">
                <Link href="/">
                    <BreezeLogo />
                </Link>

                {/* App Navigation  */}
                {path === "/public-timeline" && (
                    <AppNavigation
                        onOpenModal={() => setOpenModal(true)}
                        className="hidden md:flex items-center gap-[47px] px-9 ml-[6rem]"
                    />
                )}

                {memoizedBreezeButton}

                {/* Mobile Download button  */}
                <div
                    onClick={() => setOpenModal(true)}
                    className="cursor-pointer block md:hidden w-[40px] h-[40px] rounded-[8px] p-[8px] bg-[#6DB24D]"
                >
                    {memoizedImage}
                </div>
            </nav>
            {openModal && <Modal onClose={() => setOpenModal(false)} />}
        </React.Fragment>
    );
};

export default Navbar;
