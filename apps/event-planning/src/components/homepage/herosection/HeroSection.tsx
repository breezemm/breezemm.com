import EventContentSection from "./EventContentSection";
import EventFeatures from "./EventFeatures";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mb-[160px] lg:mb-[260px] gap-[260px]">
            <EventContentSection />
            <EventFeatures />
        </div>
    );
};

export default HeroSection;
