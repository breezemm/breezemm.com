import React from 'react';

import Image from 'next/image';

import commentIcon from '../../icons/assets-icons/comment-icon.svg';
import heartIcon from '../../icons/assets-icons/heart-icon.svg';
import saveIcon from '../../icons/assets-icons/save-icon.svg';
import { PostTypes } from '../../types';

type PostCardProps = {
  data: PostTypes;
};

const PostCard = ({ data }: PostCardProps) => {
  return (
    <div className="flex w-[328px] flex-col items-end">
      {/* post title  */}
      {data.description && (
        <div className="w-[278px] pt-4">
          <p>breeze is finally OUT OF THE LAB</p>
        </div>
      )}
      {/* event overview */}
      <div className="my-4 rounded-md border-2">
        <Image
          src={data.image}
          alt={data.name}
          width={278}
          height={120}
          priority={false}
          className="rounded-t-md bg-black text-black"
        />
        <p className="px-2 pt-2 font-[600] leading-[24px] tracking-[-0.016em]">{data.name}</p>

        <div className="flex items-center justify-between p-2">
          <p>{data.start_date}</p>
          <p className="font-[600]">{data.status}</p>
        </div>
      </div>

      {/* reacts */}
      <div className="flex w-[278px] items-center justify-between pb-4 text-[#191A1A]">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1">
            <Image src={heartIcon} className="h-auto w-auto" alt="heart icon" />
            <p>{data.like_count}</p>
          </div>

          <div className="flex items-center gap-1">
            <Image src={commentIcon} className="h-auto w-auto" alt="comment icon" />
            <p>{data.comment_count}</p>
          </div>
        </div>

        <div>
          <Image src={saveIcon} className="h-auto w-auto" alt="save icon" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
