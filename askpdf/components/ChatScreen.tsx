import Message from "./Message";

const messages: {
  type: string;
  content: string;
}[] = [
  {
    type: "user",
    content:
      "Hey, are you online? I’ve been trying to figure out why my laptop suddenly started making this buzzing sound.",
  },
  {
    type: "system",
    content:
      "Yes, I'm here! Can you describe the buzzing sound? Is it constant or does it happen only during certain tasks?",
  },
  {
    type: "user",
    content:
      "It’s kinda random. Sometimes it happens when I open too many tabs, but other times it starts even when I'm just staring at the desktop doing absolutely nothing.",
  },
  {
    type: "system",
    content:
      "It could be fan-related or due to background processes. Have you checked your task manager to see if anything is running in the background?",
  },
  {
    type: "user",
    content:
      "Yeah, I opened it, but everything looks normal… except for some mysterious process named something like ‘System Interrupts’ that keeps jumping up.",
  },
  {
    type: "system",
    content:
      "System Interrupts is part of Windows and usually indicates hardware activity. The sudden spikes could be from a driver issue or an overheating component.",
  },
  {
    type: "user",
    content:
      "Ah, that makes sense. Maybe it’s the dust—I haven't cleaned this laptop in months. It probably has its own ecosystem inside by now.",
  },
  {
    type: "system",
    content:
      "Dust buildup can definitely cause overheating and fan noise. Cleaning the vents or using compressed air might help.",
  },
  {
    type: "user",
    content:
      "Alright, I’ll try that. If it starts screaming after I open it, I’ll blame you.",
  },
  {
    type: "system",
    content:
      "I’ll accept partial responsibility. Let me know if the buzzing persists after cleaning.",
  },
];

const ChatScreen = () => {
  const userImg = "https://github.com/shadcn.png";
  const chatbotImg = "chatbot.png";

  return (
    <div className="h-full w-full flex justify-center overflow-x-hidden translate-y-6">
      <div className="h-96 w-3/4 sm:w-3/5 flex flex-col gap-5">
        {messages.map((message: {type: string,content: string}, id) => {
          return (
            <div key={id} className={`w-full flex items-center ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <Message type={message.type} content={message.content} avatarImg={message.type === "user" ? userImg : chatbotImg} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatScreen;
