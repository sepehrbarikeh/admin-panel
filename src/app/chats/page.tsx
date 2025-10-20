"use client"

import { CheckCheckIcon, ChevronsRight, Info, Mic, Paperclip, PhoneCallIcon, Send, Smile, Video } from "lucide-react";
import Image from "next/image";
import user from "../../../public/data/chat/user.json"
import messages from "../../../public/data/chat/chat.json"
import { useEffect, useRef, useState } from "react";
import ChatBubble from "@/components/shared/chatBubble";


type Message = {
    sender: string;
    time: string;
    message: string;
};



export default function Page() {


    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (inputValue.trim() === "") return;
        
        console.log("Send:", inputValue);
        setInputValue("");
    };

    const bottomRef = useRef<HTMLDivElement>(null);

   
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);


    return (
        <>
            <div className="bg-white dark:bg-black rounded-lg mx-8">
                <div className="text-gray-400 flex justify-between px-6 py-3 border-b border-gray-300">
                    <div className="flex items-center justify-between ">
                        <button className="bg-gray-800 rounded-md w-8 h-8 flex justify-center items-center ml-6">
                            <ChevronsRight className="text-gray-200 w-5 h-5" />
                        </button>
                        <div className="ml-3">
                            <Image className="rounded-full" width={48} height={48} src={user.avatar} alt={""} />
                        </div>
                        <div >
                            <h2 className="text-lg dark:text-gray-200 text-gray-800 ">{user.name}</h2>
                            <div className="mt-1 flex flex-row-reverse items-center justify-center">
                                <span className={`w-3 h-3 rounded-full bg-green-800`} style={{ backgroundColor: "#10c469" }} />
                                <span className="px-1">Active</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <PhoneCallIcon className="mx-3 w-5 h-5" />
                        <Video className="mx-3 w-5 h-5" />
                        <Info className="mr-3 w-5 h-5" />
                    </div>
                </div>
                <div className="h-chat-box px-6 pt-6 pb-2 ltr overflow-auto">
                    {
                        messages.map((chat,indx) => ((
                            <ChatBubble key={indx} chat={chat} />
                        )))
                    }
                    <div ref={bottomRef} />
                </div>
                <div className="border-t border-gray-300 py-3 px-6 flex items-center justify-between text-gray-700">
                    <button className="w-10 h-10 bg-amber-100 flex items-center justify-center ml-2 rounded-md">
                        <Smile className="text-yellow-500 w-4 h-4" />
                    </button>
                    <input ref={inputRef} className="w-10/12 2xl:w-full p-2 border dark:text-gray-300 border-gray-300 rounded-2xl dark:placeholder:text-gray-400 font-vazir" placeholder="پیام بنویسید ..." />
                    <button className="w-10 h-10 bg-green-500 flex items-center justify-center mx-2 rounded-md" >
                        <Send className="text-white w-4 h-4 " />
                    </button>
                    <button className="w-10 h-10 bg-sky-100 flex items-center justify-center ml-2 rounded-md" >
                        <Mic className="text-sky-500 w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-sky-100 flex items-center justify-center  rounded-md" >
                        <Paperclip className="text-sky-500 w-4 h-4" />
                    </button>
                </div>
            </div >
        </>
    )
}