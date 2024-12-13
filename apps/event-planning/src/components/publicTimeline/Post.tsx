import React from 'react';

import { PostTypes } from '../../types';
import PostCard from './PostCard';
import UserProfile from './UserProfile';

type PostPropTypes = {
  data: PostTypes;
};

const Post = ({ data }: PostPropTypes) => {
  return (
    <div className="flex flex-col border-b-4 border-[#E5E6E6] px-6">
      {data.friend_comment && (
        <p className="w-[278px] self-end py-4">
          <strong>La Pyae </strong>comment on this.
        </p>
      )}
      <UserProfile userData={data.user} />
      <PostCard data={data} />
    </div>
  );
};

export default Post;
