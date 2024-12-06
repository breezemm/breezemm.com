import Image from "next/image";
import { Figtree } from "next/font/google";
import { eventCategories } from "../../../CONSTANTS";

const figtree = Figtree({ weight: ["300", "500", "600"], subsets: ["latin"] });

const EventCategories = () => {
    return (
        <div className="md:w-[431px] h-[460px] px-[24px] flex gap-[14px] md:gap-[26px] justify-center flex-wrap">
            {eventCategories &&
                eventCategories.map((event) => (
                    <div
                        key={event.label}
                        className="flex flex-col items-center mb-[40px] md:mb-0 gap-[8px] w-[100px] min-h-[120px]"
                    >
                        <div className="w-[88px] h-[88px] rounded-full border border-[#646668] p-[24px]">
                            <Image
                                src={event.image}
                                alt={event.label}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className={`${figtree.className} text-center`}>
                            {event.label}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default EventCategories;
