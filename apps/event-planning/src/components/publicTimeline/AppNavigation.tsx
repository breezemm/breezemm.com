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
                    className="block cursor-pointer"
                >
                    <Image
                        src={nav.iconSrc}
                        alt={nav.alt}
                        width={24}
                        height={22}
                    />
                </li>
            ))}
        </ul>
    );
};

export default AppNavigation;
