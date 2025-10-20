"use client"

import Footer from "@/components/footer";
import EmailCard from "@/components/shared/emailCard";
import { Archive, BadgeInfo, MailOpen, Search, TextAlignStart, Trash2 } from "lucide-react";
import data from "../../../public/data/email/email.json"
import Drawer from "@/components/shared/drawer";
import { useState } from "react";


export default function Page() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="bg-white dark:bg-slate-950 rounded-lg mx-8 ltr">
                <div className="flex items-center justify-between border-b px-6 py-3 dark:border-gray-500 border-gray-300">
                    <div className="flex items-center text-gray-800">
                        <div className="p-1.5 bg-slate-200/70 dark:bg-background dark:text-gray-300 rounded-sm mx-1">
                            <TextAlignStart className="w-5 h-6" />
                        </div>
                        <input name="all_read" type="checkbox" className="w-5 h-5 rounded text-sky-500 bg-gray-100 border-gray-300 focus:ring-sky-500 mx-1" />
                        <div className="flex dark:text-gray-300 items-center mx-6">
                            <MailOpen className="h-4 w-4 mx-1.5 " />
                            <Archive className="h-4 w-4 mx-1.5 " />
                            <Trash2 className="h-4 w-4 mx-1.5 " />
                            <BadgeInfo className="h-4 w-4 mx-1.5 " />
                        </div>
                    </div>
                    <div className="flex items-center border border-gray-300 px-3 py-1 rounded-full">
                        <input className="border-none placeholder:text-gray-400 text-gray-800 dark:text-gray-300 outline-none" placeholder="Search mail..." />
                        <Search className="text-gray-400 h-5 w-5" />
                    </div>
                </div>
                <table onClick={()=> setOpen(true)} className="w-full px-6 mb-8">
                    <tbody>
                        {
                            data.map((email) => ((
                                <EmailCard key={email.id} email={email} />
                            )))
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
            <Drawer setOpen={() => setOpen(false)} open={open} />
        </>
    )
}