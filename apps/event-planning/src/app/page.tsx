import React from "react";
import HeroSection from "../components/homepage/herosection/HeroSection";
import arrowRight from "../icons/assets-icons/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardPage() {
    return (
        <main>
            <div className="flex justify-center mt-[16px] mb-[23px]">
                <Link
                    href={"/public-timeline"}
                    className="primary-btn flex items-center py-[8px] gap-[8px] px-[24px] shadow-customShadow"
                >
                    App preview
                    <Image
                        alt="arrow icon"
                        src={arrowRight}
                        className="w-auto h-auto"
                    />
                </Link>
            </div>

            <section>
                <HeroSection />
            </section>
        </main>
    );
}
