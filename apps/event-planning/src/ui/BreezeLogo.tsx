import Image from "next/image";
import breezeLogoTest from "../icons/Breeze-app-logo-test.svg";

const BreezeLogo = () => {
    return (
        <Image
            className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
            src={breezeLogoTest}
            alt="breeze logo"
        />
    );
};

export default BreezeLogo;