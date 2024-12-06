import HeroSection from "../components/homepage/herosection/HeroSection";
import BreezeButton from "../ui/BreezeButton";
import arrowRight from "../icons/arrow-right.svg";
import Image from "next/image";

export default async function DashboardPage() {
    return (
        <main>
            <div className="flex justify-center mt-[16px] mb-[23px]">
                <BreezeButton className="flex items-center py-[8px] gap-[8px] px-[24px] shadow-customShadow">
                    App preview
                    <Image
                        alt="arrow icon"
                        src={arrowRight}
                        className="w-auto h-auto"
                    />
                </BreezeButton>
            </div>

            <section>
                <HeroSection />
            </section>
        </main>
    );
}
