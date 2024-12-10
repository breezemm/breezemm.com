import React from "react";

import UserProfile from "./UserProfile";
import PostCard from "./PostCard";
import { PostTypes } from "../../types";

type PostPropTypes = {
    data: PostTypes;
};

const Post = ({ data }: PostPropTypes) => {
    return (
        <div className="flex flex-col border-b-4 px-6 border-[#E5E6E6]">
            {data.friend_comment && (
                <p className="py-4 w-[278px] self-end">
                    <strong>La Pyae </strong>comment on this.
                </p>
            )}
            <UserProfile userData={data.user} />
            <PostCard data={data} />
        </div>
    );
};

export default Post;
