import React from "react";
import Post from "../../components/publicTimeline/Post";
import { POST_DUMMY_DATA } from "../../CONSTANTS";
import { Figtree } from "next/font/google";

const figtree = Figtree({ weight: ["300", "500", "600"], subsets: ["latin"] });

const page = () => {
    return (
        <div
            className={`${figtree.className} flex flex-col gap-4 w-full m-auto md:w-[375px]`}
        >
            {POST_DUMMY_DATA.map((data) => (
                <Post key={data.id} data={data} />
            ))}
        </div>
    );
};

export default page;
