import { ChevronLeft, ChevronRight, CirclePlus, Settings } from "lucide-react";
import users from "../../../public/data/users/users.json"
import UserCard from "@/components/shared/userCard";
import Footer from "@/components/footer";


export default function Page() {
    return (
        <>
            <div className="rounded-lg mx-8">
                <div className="bg-white dark:bg-slate-950 flex items-center justify-between rounded-lg px-6 py-4">
                    <button className=" flex items-center text-white justify-center text-sm h-10 w-32 font-vazir bg-rose-500 rounded-md">
                        افزودن کاربر
                        <CirclePlus className="mx-2 h-5 w-5" />
                    </button>
                    <div className="flex items-center">
                        <input className="mx-3 font-vazir p-1.5 text-gray-800 border dark:placeholder:text-gray-300 border-gray-300 dark:text-gray-300 rounded-md" placeholder="جستجو ..." />
                        <button className="bg-green-500 rounded-md py-2.5 px-4">
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-7 4xl:grid-cols-9 gap-8 my-8">
                    {users.map((item) => (
                        <UserCard users={item} key={item.id} />
                    ))}
                </div>

                <div className="flex justify-between items-center my-6">
                    <div className="flex items-center text-gray-500 font-vazir">
                        نمایش
                        <p className="text-gray-800 dark:text-gray-300 mx-1.5">12</p>
                        از
                        <p className="text-gray-800 dark:text-gray-300 mx-1.5">229</p>
                        عضو
                    </div>
                    <div className="text-gray-800 flex ltr">
                        <button className="bg-white text-gray-400 rounded-full p-2 px-3  mr-1">
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button className="bg-white rounded-full w-8 h-8 mx-1 cursor-pointer">
                            1
                        </button>
                        <button className="bg-gray-800 text-white dark:bg-slate-500 dark:text-white  rounded-full w-8 h-8 mx-1 cursor-pointer">
                            2
                        </button>
                        <button className="bg-white rounded-full w-8 h-8 mx-1 cursor-pointer">
                            3
                        </button>
                        <button className="bg-white rounded-full w-8 h-8 mx-1 cursor-pointer">
                            4
                        </button>
                        <button className="bg-white rounded-full w-8 h-8 mx-1 cursor-pointer">
                            5
                        </button>
                        <button className="bg-white rounded-full mx-1 p-2 px-3 cursor-pointer">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}