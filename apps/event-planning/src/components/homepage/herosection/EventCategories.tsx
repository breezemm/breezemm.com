import React from "react";
import Image from "next/image";
import { Figtree } from "next/font/google";
import { httpClient } from "../../../utils/httpClient";
import { AUTH_PREFIX } from "../../../CONSTANTS";

const figtree = Figtree({ weight: ["300", "500", "600"], subsets: ["latin"] });

type CategoriesModel = {
    id: number;
    name: string;
    icon_path: string;
};

type ResponseModel = {
    data: CategoriesModel[];
};

const getData = async () => {
    return await httpClient.get<ResponseModel>(`${AUTH_PREFIX}/interests`);
};

const EventCategories = async () => {
    const data = await getData();
    return (
        <div className="md:w-[431px] h-[460px] px-[24px] flex gap-[14px] md:gap-[26px] justify-center flex-wrap">
            {
                data?.data?.map((event) => (
                    <div
                        key={event.id.toString()}
                        className="flex flex-col items-center mb-[40px] md:mb-0 gap-[8px] w-[100px] min-h-[120px]"
                    >
                        <div className="w-[88px] h-[88px] rounded-full border border-[#646668] p-[24px]">
                            <Image
                                src={event.icon_path}
                                alt={event.name}
                                className="w-auto h-auto"
                                width={40}
                                height={40}
                            />
                        </div>
                        <p className={`${figtree.className} text-center`}>
                            {event.name}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default EventCategories;
