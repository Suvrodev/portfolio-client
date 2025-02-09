"use client";

import { useGetMessageQuery } from "@/redux/apis/Message/messageManagement";
import { formatDate } from "@/utils/functions/formatDate";
import { formatTime } from "@/utils/functions/formateTime";
import { TMessage } from "@/utils/types/globalTypes";
import { useState } from "react";
import { Trash } from "lucide-react";

const CheckMessage = () => {
  const { data, isLoading } = useGetMessageQuery(undefined);
  const messages = data?.data;
  //   console.log(messages);

  const [messageNumber, setMessageNumber] = useState(0);
  const handleMessageShow = (id) => {
    console.log("id: ", id);
    setMessageNumber(id);
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className=" px-5 md:px-36 py-10 h-screen rounded-xl ">
      <h1 className="text-2xl font-bold text-white">Check Message</h1>
      <div className="flex items-start bg-black h-[680px] rounded-md">
        <div className="w-[20%} bg-green-600 flex flex-col h-[680px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent rounded-md">
          {messages?.map((message: TMessage, idx: number) => (
            <div
              key={idx}
              className="bg-white py-4 pl-2 pr-0 border border-black flex items-center justify-center"
              onClick={() => handleMessageShow(idx)}
            >
              <div className="flex flex-col gap-1 text-black w-[80%] ">
                <h1 className="text-black">{message?.name}</h1>
                <span>Time: {formatTime(message?.createdAt)}</span>
                <span> Date: {formatDate(message?.createdAt)}</span>
              </div>
              <div className="flex flex-col items-center justify-between  h-full pr-5  w-[10%] ">
                <p className="size-4 rounded-full bg-green-500"></p>
                <p className="bg-red-500 p-2 rounded-md flex items-center justify-center text-white">
                  {" "}
                  <Trash />{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[80%} text-white bg-black flex flex-col justify-start items-start p-4 w-full h-full rounded-md">
          <div className="flex gap-2 rounded-md">
            <p className="italic">Email:</p>
            <p className="text-green-500 font-bold">
              {messages[messageNumber]?.email}
            </p>
          </div>
          <div className=" rounded-md w-full h-full ">
            <p className="mt-10 border w-full h-[580px] p-4 rounded-md">
              {" "}
              {messages[messageNumber]?.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMessage;
