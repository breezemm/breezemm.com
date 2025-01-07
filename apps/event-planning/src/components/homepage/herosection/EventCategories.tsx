import React from 'react';

import { Figtree } from 'next/font/google';
import Image from 'next/image';

import { AUTH_PREFIX } from '@/CONSTANTS';
import { httpClient } from '@/utils/httpClient';

const figtree = Figtree({ weight: ['300', '500', '600'], subsets: ['latin'] });

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
    <div className="flex h-[460px] flex-wrap justify-center gap-[14px] px-[24px] md:w-[431px] md:gap-[26px]">
      {data?.data?.map((event) => (
        <div
          key={event.id.toString()}
          className="mb-[40px] flex min-h-[120px] w-[100px] flex-col items-center gap-[8px] md:mb-0"
        >
          <div className="h-[88px] w-[88px] rounded-full border border-[#646668] p-[24px]">
            <Image
              src={event.icon_path}
              alt={event.name}
              className="h-auto w-auto"
              width={40}
              height={40}
            />
          </div>
          <p className={`${figtree.className} text-center`}>{event.name}</p>
        </div>
      ))}
    </div>
  );
};

export default EventCategories;
