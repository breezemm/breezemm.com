"use client";
import React from "react";
import TimeLinePost from "@/app/components/TimeLinePost";
import { TimeLineProps } from "@/interfaces/TimeLineData";

const timelineData: TimeLineProps[] = [
  {
    id: 30,
    name: "breeze PUBLIC Launch",
    start_date: "1 Mar (Tue)",
    status: "FREE",
    description: "breeze is finally OUT OF THE LAB.",
    image: "",
    user: {
      id: 11,
      nickname: "A Chan Pyae",
      profile_image: "",
      time: "5m",
    },
    likers_count: "1.4M",
  },
  {
    id: 29,
    name: "ARENA NIGHT",
    start_date: "16 Mar (Fri)",
    status: "PAID",
    description: "",
    image: "",
    user: {
      id: 11,
      nickname: "A Chan Pyae",
      time: "20m",
      profile_image: "",
    },
    likers_count: "20k",
  },
];

const FeedScreen = () => {
  return (
    <div className="md:flex flex-col flex-1 justify-center items-center">
      {/* <div className="text-sm flex gap-1 justify-center w-full">
        {" "}
        <span className="font-semibold ">Aung Myat Moe</span>commented on this.
      </div> */}
      {timelineData.map((data: TimeLineProps) => {
        return <TimeLinePost key={data.id} data={data} />;
      })}
    </div>
  );
};

export default FeedScreen;
