"use client";

import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Menu as MenuIcon, X } from "lucide-react";
import { 
  BriefcaseBusiness, 
  Home, 
  LaptopMinimalCheckIcon, 
  Mailbox, 
  MessageSquareMore, 
  TicketCheck, 
  Users 
} from "lucide-react";
import useTabStore from "@/store/tabName";
import { usePathname } from "next/navigation";

export default function MobileSidebar() {
  const { changTab } = useTabStore();
  const pathname = usePathname();

  const navItems = [
    { name: "داشبورد", icon: Home, href: "/" },
    { name: "چت", icon: MessageSquareMore, href: "/chats" },
    { name: "کاربران", icon: Users, href: "/users" },
    { name: "ایمیل", icon: Mailbox, href: "/emails" },
    { name: "پروژه‌ها", icon: BriefcaseBusiness, href: "/projects" },
    { name: "تسک‌ها", icon: LaptopMinimalCheckIcon, href: "/tasks" },
    { name: "فاکتورها", icon: TicketCheck, href: "/invoices" },
  ];

  return (
    // در موبایل (lg:hidden) ثابت و در گوشه بالا سمت راست (rtl)
    <div className="lg:hidden fixed top-5 right-4 z-50">
      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            {/* دکمه باز/بسته: بهینه شده با سایه و پس‌زمینه */}
            <MenuButton
              className="p-3 transition-all duration-200"
            >
              {open ? (
                <X className="w-6 h-6 text-gray-700 dark:text-white" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-700 dark:text-white " />
              )}
            </MenuButton>

            {/* آیتم‌ها */}
            <MenuItems
              className="absolute right-0 mt-3 w-60 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black/10 focus:outline-none transition-all duration-300 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:scale-100 data-[enter]:opacity-100"
              dir="rtl"
            >
              <div className="p-2"> 
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <MenuItem key={item.name}>
                      {({ active, close }) => (
                        <Link
                          href={item.href}
                          onClick={() => {
                            changTab(item.name);
                            close();
                          }}
                          className={`flex items-center gap-3 px-3 py-2 text-sm font-vazir rounded-lg transition-colors duration-200 whitespace-nowrap
                            ${isActive
                              ? "bg-neutral-900 text-white"
                              : active
                                ? "bg-neutral-800 text-white" 
                                : "text-gray-800 hover:bg-neutral-800 hover:text-white"
                            }`}
                        >
                          <item.icon 
                            className={`w-5 h-5 flex-shrink-0 ${
                              isActive ? "text-white" : "text-neutral-500 group-hover:text-white" // رنگ آیکون در حالت عادی
                            }`}
                          />
                          {item.name}
                        </Link>
                      )}
                    </MenuItem>
                  );
                })}
              </div>
            </MenuItems>
          </>
        )}
      </Menu>
    </div>
  );
}