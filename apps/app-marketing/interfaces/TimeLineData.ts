export interface TimeLineProps {
  image: string;
  description: string;
  likers_count: string;
  name: string;
  id: number;
  user: {
    profile_image: string;
    id: number;
    nickname: string;
    time: string;
  };
  start_date: string;
  status: string;
}
