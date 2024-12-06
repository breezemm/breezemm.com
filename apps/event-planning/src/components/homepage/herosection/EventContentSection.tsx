import React from "react";
import EventCategories from "./EventCategories";
import EventContent from "./EventContent";
import EventContentCTA from "./EventContentCTA";

const EventContentSection = () => {
    return (
        <div className="w-full lg:w-[991px] flex flex-col lg:flex-row items-center gap-[160px]">
            <div className="w-full h-[480px]  md:w-[431px] md:h-[460px] flex flex-col gap-[68px] justify-center md:gap-[88px] items-center">
                <EventContent />
                <EventContentCTA />
            </div>
            <EventCategories />
        </div>
    );
};

export default EventContentSection;
