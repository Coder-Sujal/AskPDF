"use client";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { IconArrowNarrowUp } from "@tabler/icons-react";
import { motion } from "framer-motion";

const PromptInput = () => {
  const [message, setMessage] = useState();

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-center gap-1.5 sm:gap-3">
        <Textarea
          className="max-h-28 pt-3 sm:px-5 sm:py-5 bg-white w-3/4 sm:w-3/5 rounded-xl text-sm"
          placeholder="Enter your prompt"
        />
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-black h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <IconArrowNarrowUp className="text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default PromptInput;
