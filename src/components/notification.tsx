"use client"

import { useState, useMemo } from "react";
import { Bell, X as XIcon } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import data from "../../public/data/notification/notification.json";

interface NotificationType {
  id: number;
  full_name: string;
  avatar: string;
  message: string;
  created_at: string;
  unread: boolean;
}

function timeAgo(dateString: string): string {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) return "لحظاتی پیش";
  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) return `${minutes} دقیقه پیش`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} ساعت پیش`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} روز پیش`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} هفته پیش`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} ماه پیش`;
  const years = Math.floor(days / 365);
  return `${years} سال پیش`;
}

export default function Notification() {
  const [ringing, setRinging] = useState(false);
  const [notifc, setNotifc] = useState<NotificationType[]>(data);

  const handleBell = () => {
    setRinging(true);
    setTimeout(() => setRinging(false), 1200);
  };

  const DeleteHandler = (id: number) => {
    setNotifc((prev) => prev.filter((n) => n.id !== id));
  };

  
  const renderedNotifications = useMemo(() => {
    return notifc.map((item) => (
      <MenuItem
        key={item.id}
        as="div"
        className={`flex group items-center ${item.unread ? "bg-white dark:bg-slate-950" : "bg-gray-200 dark:bg-slate-800"}`}
      >
        <Image
          className="w-11 h-11 m-1 rounded-full"
          width={128}
          height={128}
          src={item.avatar}
          alt={item.full_name}
        />
        <div className="flex flex-col items-start px-2">
          <p className="py-1 font-vazir text-start text-sm my-1 w-52 dark:text-gray-300 text-gray-600">
            {item.message}
          </p>
          <div className="flex items-center my-1 font-vazir text-justify text-xs text-gray-600">
            {timeAgo(item.created_at)}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            DeleteHandler(item.id);
          }}
          className="text-rose-500 hover:bg-rose-200 p-1.5 cursor-pointer opacity-0 group-hover:opacity-100 transition rounded-full"
        >
          <XIcon className="h-3 w-3" />
        </button>
      </MenuItem>
    ));
  }, [notifc]);

  return (
    <Menu
      onMouseEnter={handleBell}
      as="div"
      className="relative inline-block mt-1 text-center"
    >
      <MenuButton className="inline-flex cursor-pointer items-center justify-center px-3 mt-1 text-sm md:text-base font-vazir text-gray-600 hover:text-gray-800 rounded-lg">
        <Bell
          className={`transition-all text-gray-600 dark:text-gray-300 hover:dark:text-gray-100 ${
            ringing ? "animate-ring text-gray-800" : ""
          }`}
        />
      </MenuButton>
      <MenuItems className="absolute overflow-auto h-80 left-0 z-10 mt-1 w-80 origin-top-right rounded-lg text-gray-800 bg-white dark:bg-slate-950 dark:text-gray-300 shadow-lg ring-1 ring-black/5 focus:outline-none">
        <p className="border-b-1 border-dashed text-start font-vazir p-3 dark:border-gray-600 border-gray-300">
          اعلان ها
        </p>
        {renderedNotifications}
      </MenuItems>
    </Menu>
  );
}
