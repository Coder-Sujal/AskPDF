"use client";
import { FormEvent, useState } from "react";
import { Textarea } from "./ui/textarea";
import { IconArrowNarrowUp } from "@tabler/icons-react";
import { motion } from "framer-motion";

const PromptInput = () => {
  const [message, setMessage] = useState<string>("");

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const value = message;
      console.log(value)
      setMessage("")
  };

  return (
    <form className="w-full flex items-center justify-center translate-y-6" onSubmit={handleFormSubmit}>
      <div className="relative w-3/4 sm:w-3/5 flex items-center justify-center gap-1.5 sm:gap-3 z-10">
        <Textarea
          value={message}
          className="max-h-28 pr-10 pt-3 sm:pl-5 sm:pr-12 sm:py-5 bg-white w-full rounded-xl text-sm"
          placeholder="Enter your prompt"
          onChange={(e) => handleMessageChange(e)}
        />
        <motion.button
          type="submit"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-black h-8 w-8 sm:h-8 sm:w-8 rounded-full flex items-center justify-center cursor-pointer absolute right-1 sm:right-4"
        >
          <IconArrowNarrowUp className="text-white" />
        </motion.button>
      </div>
    </form>
  );
};

export default PromptInput;
