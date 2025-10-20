"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  Home,
  LaptopMinimalCheckIcon,
  Mailbox,
  MenuIcon,
  MessageSquareMore,
  TicketCheck,
  Users
} from "lucide-react";
import useToggleStore from "@/store/sidebar";
import useTabStore from "@/store/tabName";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Sidebar() {


  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);



  const { isOpen } = useToggleStore();
  const { changTab } = useTabStore();

  const navItems = [
    { name: "داشبورد", icon: Home, href: "/" },
    { name: "چت", icon: MessageSquareMore, href: "/chats" },
    { name: "کاربران", icon: Users, href: "/users" },
    { name: "ایمیل", icon: Mailbox, href: "/emails" },
    { name: "پروژه‌ها", icon: BriefcaseBusiness, href: "/projects" },
    { name: "تسک‌ها", icon: LaptopMinimalCheckIcon, href: "/tasks" },
    { name: "فاکتورها", icon: TicketCheck, href: "/invoices" },
  ];

  const pathname = usePathname();


  return (
    <aside
      className={`p-4 rounded-xl transition-all duration-300 ease-in-out hidden lg:flex flex-col justify-between 
      sticky top-0 h-screen bg-white dark:bg-slate-950 overflow-hidden
      ${isOpen ? "lg:w-64" : "w-20"}`}
    >
      <div>
        {/* Logo Section */}
        <div className="flex items-center p-2 mb-8 mt-2 rounded-xl">
          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          </div>
          <span
            className={`text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white transition-all duration-300
              ${isOpen ? "opacity-100 w-auto ml-2" : "opacity-0 w-0 ml-0"}
              overflow-hidden inline-block`}
          >
            Teams.co
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  changTab(item.name);
                }}
                className={`flex items-center p-3 text-gray-700 dark:text-gray-200 rounded-xl font-vazir transition-all duration-300 group
                ${isActive ? "bg-neutral-900 dark:bg-slate-800 text-white" : "hover:bg-neutral-700 dark:hover:bg-slate-500 hover:text-gray-200"}`}
              >
                <item.icon
                  className={`w-6 h-6 flex-shrink-0 ${isActive ? "text-white" : "text-neutral-500 group-hover:text-white"
                    } transition-colors duration-200`}
                />
                <span
                  className={`mr-4 whitespace-nowrap transition-all duration-300
                    ${isOpen ? "opacity-100 w-auto ml-4" : "opacity-0 w-0 ml-0"}
                    overflow-hidden inline-block`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
