import React from 'react';

import { Figtree } from 'next/font/google';

import { POST_DUMMY_DATA } from '../../CONSTANTS';
import Post from '../../components/publicTimeline/Post';

const figtree = Figtree({ weight: ['300', '500', '600'], subsets: ['latin'] });

const page = () => {
  return (
    <div className={`${figtree.className} m-auto flex w-full flex-col gap-4 md:w-[375px]`}>
      {POST_DUMMY_DATA.map((data) => (
        <Post key={data.id} data={data} />
      ))}
    </div>
  );
};

export default page;
