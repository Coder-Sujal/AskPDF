import ChatScreen from "@/components/ChatScreen";
import PromptInput from "@/components/PromptInput";
import React from "react";

const Chat = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-between rounded-tl-2xl border border-neutral-200 bg-transparent z-1 pb-20 sm:pb-30 md:pb-24 gap-4">
      {/* Main chat part */}
      <div className="h-full w-full flex items-center justify-center">
        <ChatScreen />
      </div>
      {/* Chat type part */}
      <PromptInput />
    </div>
  );
};

export default Chat;
