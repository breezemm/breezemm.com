import React from "react";

import Image from "next/image";
import { UserTypes } from "../../types";

type UserProfilePropTypes = {
    userData: UserTypes;
};

const UserProfile = ({ userData }: UserProfilePropTypes) => {
    return (
        <div className="flex items-center gap-2">
            <Image
                src={userData.profile_image}
                alt={userData.nickname}
                width={40}
                height={40}
            />
            <div className="flex flex-col ">
                <p className="text-[16px] font-[600] leading-6 tracking-[-0.016em]">
                    {userData.nickname}
                </p>
                <p className="text-[14px] text-[#4B4D4E]">{userData.time}</p>
            </div>
        </div>
    );
};

export default UserProfile;
