interface Chat {
    sender: string;
    time: string;
    message: string;
  }
  
  interface Props {
    chat: Chat;
  }
  
  export default function ChatBubble({ chat }: Props) {
    const isYou = chat.sender === "You";
  
    return (
      <div className={`flex ${isYou ? "justify-end" : "justify-start"} mb-2`}>
        <div className="flex flex-col max-w-xs">
          <div
            className={`px-4 relative py-2 rounded-3xl self-end ${
              isYou
                ? "bg-blue-500 text-white rounded-br-none"
                : "bg-gray-200 text-gray-900 dark:bg-[#262629] dark:text-gray-100 rounded-bl-none"
            }`}
          >
            {chat.message}
  
           
            <svg
              className={`absolute bottom-0 w-6 h-6 ${
                isYou ? "rotate-180 -right-1.5" : "rotate-180 rotate-y-180 -left-2"
              }`}
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={
                  isYou
                    ? "fill-blue-500"
                    : "fill-gray-200 dark:fill-[#262629]"
                }
                d="M0 0 C6 6 0 12 12 12 L12 0 Z"
              />
            </svg>
          </div>
  
          <span
            className={`text-xs mt-1 ${
              isYou ? "text-right text-gray-400" : "text-left text-gray-500 dark:text-gray-400"
            }`}
          >
            {chat.time}
          </span>
        </div>
      </div>
    );
  }
  