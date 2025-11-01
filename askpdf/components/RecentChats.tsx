'use client'
import { IconSquareRoundedXFilled} from "@tabler/icons-react";
import React from "react";

interface RecentChatsProps{
    isSidebarOpen : boolean;
}

const chats = [
  {
    id: "1",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "2",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "3",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "4",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "5",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "6",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "7",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "8",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "9",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "10",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "11",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
  {
    id: "12",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum eaque mollitia laborum. Dignissimos est",
  },
];

const RecentChats = ({isSidebarOpen} : RecentChatsProps) => {
  return (
    <div className="flex flex-col justify-center scrollbar">
      {chats.map((chat) => {
        return (
          <button key={chat.id} className={`truncate mt-1 flex items-center justify-center gap-2 py-2 text-neutral-700 cursor-pointer hover:text-neutral-200 hover:bg-neutral-500 transition-all duration-200 rounded-lg px-3 ${isSidebarOpen ? '' : 'hidden'}`}>
            <span className="truncate text-sm">{chat.title}</span>
            <IconSquareRoundedXFilled className="w-30 hover:text-red-400" />
          </button>
        );
      })}
    </div>
  );
};

export default RecentChats;
