import FileUploaderDiv from "@/components/FileUploaderDiv";
import PromptInput from "@/components/PromptInput";
import React from "react";

const Chat = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-between rounded-tl-2xl border border-neutral-200 bg-transparent z-1 pb-20 sm:pb-30 md:pb-24">
      {/* Header */}
      <div className="w-full max-w-[1500px] flex items-center justify-end pr-10">
        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="text-xl font-bold">Hi Sujal!</p>
          <p>Upload pdf to start conversation</p>
        </div>
      </div>
      {/* Main chat part */}
      <div>
        <FileUploaderDiv />
      </div>
      {/* Chat type part */}
      <PromptInput />
    </div>
  );
};

export default Chat;
