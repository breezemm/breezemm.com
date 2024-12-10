import React from "react";
import { appNavigation } from "../../CONSTANTS";
import Image from "next/image";

const AppNavigation = ({ className }: { className: string }) => {
    return (
        <ul className={className}>
            {appNavigation.map((nav) => (
                <li key={nav.alt}>
                    <Image
                        src={nav.iconSrc}
                        alt={nav.alt}
                        width={20}
                        height={22}
                    />
                </li>
            ))}
        </ul>
    );
};

export default AppNavigation;
