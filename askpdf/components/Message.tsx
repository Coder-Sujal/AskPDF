import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface MessageProps {
    type : string,
    content: string,
    avatarImg: string
}


const Message = ({type, content, avatarImg}: MessageProps) => {
  return (
    <div className={`max-w-full md:max-w-[90%] lg:max-w-[60%] flex ${type == "user" ? "flex-row-reverse" : ""} items-start justify-start gap-2`}>
      <div>
        <Avatar>
          <AvatarImage src={avatarImg}/>
          <AvatarFallback className="bg-sky-400 text-white">SC</AvatarFallback>
        </Avatar>
      </div>
      <div className={`h-auto w-full bg-[#F5F5F5] px-5 py-2 ${type=="user" ? "rounded-br-3xl rounded-l-3xl" : "rounded-bl-3xl rounded-r-3xl"} `}>
        <span>
          {content}
        </span>
      </div>
    </div>
  );
};

export default Message;
