import FileUploaderDiv from "@/components/FileUploaderDiv";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

const Chat = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-50",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-transparent p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900 z-1">
        {/* Header */}
        <div></div>
        {/* Main chat part */}
        <div>
          <FileUploaderDiv />
        </div>
        {/* Chat type part */}
        <div className="w-full flex items-center justify-center">
          <Input
            className="h-16 max-w-3/4 rounded-full pl-8 py-5 bg-white"
            placeholder="Enter your prompt here"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
