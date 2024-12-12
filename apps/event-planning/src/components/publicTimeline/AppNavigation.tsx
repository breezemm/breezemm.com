import React from "react";
import { appNavigation } from "../../CONSTANTS";
import Image from "next/image";

type AppNavigationProps = {
    className: string;
    onOpenModal: () => void;
};

const AppNavigation = ({ className, onOpenModal }: AppNavigationProps) => {
    return (
        <ul className={className}>
            {appNavigation.map((nav) => (
                <li
                    onClick={onOpenModal}
                    key={nav.alt}
                    className="block cursor-pointer w-24 h-22"
                >
                    <Image
                        src={nav.iconSrc}
                        alt={nav.alt}
                        className="w-auto h-auto"
                    />
                </li>
            ))}
        </ul>
    );
};

export default AppNavigation;
