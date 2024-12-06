import Image from "next/image";
import Link from "next/link";

import breezeHLogo from "../../../icons/breeze-h-logo.svg";
import appStoreSVG from "../../../icons/apple-store.svg";
import goolePlayStoreSVG from "../../../icons/google-play-store.svg";

import { contactInfo, socialMedieas } from "../../../CONSTANTS";

const Footer = () => {
    return (
        <footer className="lg:h-[400px] w-full md:px-[144px] flex pb-[80px] lg:flex-row flex-col gap-[80px] lg:gap-0 justify-between items-center lg:items-end bg-black">
            <div className="text-white flex flex-col gap-[40px] pt-[40px]">
                {/* Breeze logo  */}
                <div className="flex gap-[16px]">
                    <Image
                        src={breezeHLogo}
                        alt="Breeze Logo"
                        className="h-auto w-auto"
                    />
                </div>

                {/* Contact Info  */}
                <div className="flex flex-col gap-[8px]">
                    {contactInfo.map((c) => (
                        <div key={c.text} className="flex gap-[16px] p-[8px]">
                            <div className="w-[19px] h-[19px]">
                                <Image
                                    src={c.icon}
                                    alt={c.text}
                                    className="w-auto h-auto"
                                />
                            </div>
                            <p>{c.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* app download and social media */}
            <div className="flex flex-col lg:items-end items-center gap-[72px] md:gap-[40px]">
                <div className="flex gap-[16px] items-center">
                    <Image
                        src={appStoreSVG}
                        alt="app store"
                        className="w-auto h-auto"
                    />
                    <Image
                        src={goolePlayStoreSVG}
                        alt="google play store"
                        className="w-auto h-auto"
                    />
                </div>

                <div className="flex gap-[40px] items-center">
                    {socialMedieas.map((s, i) => (
                        <Image
                            key={i}
                            src={s}
                            alt={s}
                            className="w-auto h-auto"
                        />
                    ))}
                </div>

                <div className="flex items-center gap-[24px] text-[#FCFCFC]">
                    <Link className="underline" href="/terms-and-conditions">
                        Terms & Conditions
                    </Link>
                    <Link className="underline" href="/privacy-policy">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
