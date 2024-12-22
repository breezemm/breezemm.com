import { StaticImageData } from 'next/image';

export type PostTypes = {
  id: string;
  name: string;
  start_date: string;
  status: string;
  description?: string;
  image: StaticImageData;
  like_count: string;
  comment_count: string;
  friend_comment: boolean;

  user: UserTypes;
};

export type UserTypes = {
  id: string;
  nickname: string;
  time: string;
  profile_image: StaticImageData;
};
