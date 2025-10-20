'use client'


import useTabStore from "@/store/tabName";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Moon, Search, Settings, Sun, ChevronDown, MenuIcon, CircleUserRoundIcon, Wallet, CircleQuestionMarkIcon, LockKeyholeIcon, LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useToggleStore from '../store/sidebar'
import Image from "next/image";
import user from "../../public/images/sepehr.jpeg"
import Notification from "./notification";
import MobileSidebar from "./mobileSidBar";
import Cookies from "universal-cookie";

export default function Nav() {
    const { tabName } = useTabStore();
    const { isOpen, toggle } = useToggleStore();
    const [width, setWidth] = useState(0);


    const cookie = new Cookies();

    const [darkMode, setDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
      
      const savedTheme = cookie.get("theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      }
    }, []);
  
    useEffect(() => {
      if (darkMode === null) return; 
      const theme = darkMode ? "dark" : "light";
  
      
      cookie.set("theme", theme);
  
      
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);
  


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setWidth(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-40 bg-gray-200 dark:bg-slate-800 backdrop-blur-md`}>
            <div className="flex items-center py-4 rounded-xl font-vazir dark:text-white text-gray-700">
                <div className="px-4">
                    <MobileSidebar />
                </div>

                <div
                    onClick={toggle}
                    className={`hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-950 transition-all duration-300 cursor-pointer absolute -right-5 ${isOpen ? "ml-8" : "ml-0"
                        }`}
                >
                    <button className="bg-white dark:bg-slate-800 rounded-full cursor-pointer w-8 h-8 flex items-center justify-center shadow">
                        <MenuIcon className="text-gray-900 dark:text-gray-200 w-5 h-5" />
                    </button>
                </div>
                <div className={`flex-1 flex items-center justify-between rounded-lg transition-all duration-300 lg:ml-7 lg:mx-0 mx-7 py-2 ${width > 0 ? "bg-white dark:bg-slate-950" : "bg-gray-200 dark:bg-slate-800"}`}>
                    {/*tap title*/}
                    <h1 className="text-3xl mr-4 font-bold">{tabName}</h1>

                    {/*search box*/}
                    <div className="flex items-center bg-gray-100 dark:bg-slate-700 rounded-3xl px-4">
                        <input name="search" className="w-3xs h-10 p-2 bg-transparent placeholder:dark:text-gray-300 outline-none" placeholder="جستجو" />
                        <Search className="text-gray-500 dark:text-gray-300" />
                    </div>

                    {/*icons & profile*/}
                    <div className="flex items-center">
                        <Notification />
                        <button className="mx-3 text-gray-600 dark:text-gray-300 hover:dark:text-gray-100 hover:text-gray-800 cursor-pointer"><Settings /></button>
                        <button className="mx-3 cursor-pointer  text-gray-600 dark:text-gray-300 hover:dark:text-gray-100 hover:text-gray-800" onClick={() => setDarkMode(!darkMode)}>
                            {darkMode
                                ? <Moon />
                                : <Sun />
                            }
                        </button>

                        <Menu as="div" className="relative inline-block text-right">
                            {({ open }) => (
                                <>
                                    <MenuButton className="inline-flex cursor-pointer items-center justify-center px-3 mt-1 text-sm md:text-base font-vazir dark:text-gray-300 hover:dark:text-gray-100 text-gray-600 hover:text-gray-800 rounded-lg">
                                        <h3>سپهر باریکه</h3>
                                        <Image className="max-w-9 mx-3 rounded-full" src={user} alt={"user profile photo"} />
                                        <ChevronDown
                                            aria-hidden="true"
                                            className={`ml-1 size-5 text-gray-800 dark:text-gray-300 transition duration-300 ${open ? 'rotate-180' : 'rotate-0'
                                                }`}
                                        />
                                    </MenuButton>
                                    <MenuItems className="absolute left-0 z-10 mt-1 w-56 origin-top-right rounded-lg bg-white dark:bg-slate-950 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        <p className="text-gray-700 dark:text-gray-200 text-xs m-2">خوش آمدید!</p>
                                        <MenuItem>
                                            <div className="flex items-center px-4 cursor-pointer py-2 font-vazir text-sm dark:text-gray-300 hover:dark:text-gray-100 dark:hover:bg-slate-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 ">
                                                <CircleUserRoundIcon className="ml-3 w-5 h-5" />
                                                حساب من
                                            </div>
                                        </MenuItem>
                                        <MenuItem>
                                            <div className="flex items-center px-4 cursor-pointer py-2 font-vazir text-sm dark:text-gray-300 hover:dark:text-gray-100 dark:hover:bg-slate-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 ">
                                                <Wallet className="ml-3 w-5 h-5" />
                                                کیف پول : 12.34k$
                                            </div>
                                        </MenuItem>
                                        <MenuItem>
                                            <div className="flex items-center px-4 cursor-pointer py-2 font-vazir text-sm dark:text-gray-300 hover:dark:text-gray-100 dark:hover:bg-slate-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 ">
                                                <CircleQuestionMarkIcon className="ml-3 w-5 h-5" />
                                                پشتیبانی
                                            </div>
                                        </MenuItem>
                                        <MenuItem>
                                            <div className="flex items-center px-4 border-t-1 border-gray-300 cursor-pointer py-2 font-vazir text-sm dark:text-gray-300 hover:dark:text-gray-100 dark:hover:bg-slate-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 ">
                                                <LockKeyholeIcon className="ml-3 w-5 h-5" />
                                                قفل صفحه
                                            </div>
                                        </MenuItem>
                                        <MenuItem>
                                            <div className="flex items-center px-4 cursor-pointer py-2 font-vazir text-sm dark:text-gray-300 hover:dark:text-gray-100 dark:hover:bg-slate-800 text-gray-600 hover:text-gray-800 hover:bg-gray-100 ">
                                                <LogOutIcon className="ml-3 w-5 h-5" />
                                                خروج از حساب کاربری
                                            </div>
                                        </MenuItem>
                                    </MenuItems>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    );
}
