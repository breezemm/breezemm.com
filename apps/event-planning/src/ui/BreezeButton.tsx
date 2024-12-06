import { Figtree } from "next/font/google";
import React from "react";

const figtree = Figtree({ weight: ["300", "500", "600"], subsets: ["latin"] });

const BreezeButton = ({
    className,
    children,
    onClick,
}: {
    className: string;
    children: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className={`${figtree.className} primary-btn  ${className}`}
        >
            {children}
        </button>
    );
};

export default BreezeButton;
