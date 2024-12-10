import React from "react";
import Image from "next/image";
import heartIcon from "../../icons/assets-icons/heart-icon.svg";
import commentIcon from "../../icons/assets-icons/comment-icon.svg";
import saveIcon from "../../icons/assets-icons/save-icon.svg";
import { PostTypes } from "../../types";

type PostCardProps = {
    data: PostTypes;
};

const PostCard = ({ data }: PostCardProps) => {
    return (
        <div className="w-[328px] flex flex-col items-end">
            {/* post title  */}
            {data.description && (
                <div className="w-[278px] pt-4">
                    <p>breeze is finally OUT OF THE LAB</p>
                </div>
            )}
            {/* event overview */}
            <div className="border-2 rounded-md my-4">
                <Image
                    src={data.image}
                    alt={data.name}
                    width={278}
                    height={120}
                    className="text-black bg-black rounded-t-md"
                />
                <p className="px-2 pt-2 font-[600] leading-[24px] tracking-[-0.016em]">
                    {data.name}
                </p>

                <div className="flex items-center justify-between p-2">
                    <p>{data.start_date}</p>
                    <p className="font-[600]">{data.status}</p>
                </div>
            </div>

            {/* reacts */}
            <div className="pb-4 flex items-center justify-between w-[278px] text-[#191A1A]">
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-1">
                        <Image
                            src={heartIcon}
                            className="w-auto h-auto"
                            alt="heart icon"
                        />
                        <p>{data.like_count}</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <Image
                            src={commentIcon}
                            className="w-auto h-auto"
                            alt="comment icon"
                        />
                        <p>{data.comment_count}</p>
                    </div>
                </div>

                <div>
                    <Image
                        src={saveIcon}
                        className="w-auto h-auto"
                        alt="save icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
