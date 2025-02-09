"use client";

import { useGetMessageQuery } from "@/redux/apis/Message/messageManagement";
import { formatDate } from "@/utils/functions/formatDate";
import { formatTime } from "@/utils/functions/formateTime";
import { TMessage } from "@/utils/types/globalTypes";
import { useState } from "react";

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
    <div className=" px-5 md:px-36 py-10 ">
      <h1 className="text-2xl font-bold text-white">Check Message</h1>
      <div className="flex items-start bg-black h-[780px] overflow-auto">
        <div className="w-[20%} bg-green-600 flex flex-col ">
          {messages?.map((message: TMessage, idx: number) => (
            <div
              key={idx}
              className="bg-white py-4 px-6 border border-black flex items-center justify-between"
              onClick={() => handleMessageShow(idx)}
            >
              <div className="flex flex-col gap-1 text-black">
                <h1 className="text-black">{message?.email}</h1>
                <span>Time: {formatTime(message?.createdAt)}</span>
                <span> Date: {formatDate(message?.createdAt)}</span>
              </div>
              <div>
                <p className="size-4 rounded-full bg-green-500"></p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[80%} text-white bg-black flex flex-col justify-start items-start p-4 w-full h-full ">
          <div className="flex gap-2">
            <p className="italic">From</p>
            <p className="text-green-500 font-bold">
              {messages[messageNumber]?.name}
            </p>
          </div>
          <div className=" rounded-md w-full h-full">
            <p className="mt-10 border w-full h-[650px] p-4">
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
