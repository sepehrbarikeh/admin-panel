import { Select } from "@headlessui/react";
import { ChevronLeft, ChevronRight, CirclePlus } from "lucide-react";
import data from "../../../public/data/projects/project.json"
import Footer from "@/components/footer";
import ProjectCard from "@/components/shared/projectCard";


export default function Page() {
    return (
        <>
            <div className="mx-8">
                <div className="bg-white dark:bg-slate-950  px-6 py-4 rounded-lg  flex items-center justify-between">
                    <button className="flex items-center bg-[#5b69bc] text-white font-vazir rounded-md px-2 py-2">
                        ساخت پروژه
                        <CirclePlus className="h-5 w-5 mx-2" />
                    </button>
                    <div className="flex flex-row-reverse items-center">
                        <input name="search" className="border-gray-300 border dark:bg-slate-800 dark:text-gray-300 placeholder:text-gray-400 text-gray-800 outline-none font-vazir rounded-md bg-gray-100 p-2" type="search" placeholder="جستجو ..." />
                        <div className="font-vazir dark:text-gray-300 text-gray-800 mx-4">
                            دسته بندی
                            <Select className="border border-gray-300 dark:text-gray-300 rounded-md p-1.5 mr-2" name="sort" aria-label="Project status">
                                <option value="active">نام</option>
                                <option value="paused">تاریخ</option>
                                <option value="delayed">تاریخ شروع</option>
                                <option value="canceled">تاریخ پایان</option>
                            </Select>
                        </div>
                        <div className="font-vazir dark:text-gray-300 text-gray-800 mx-4">
                            فیلتر
                            <Select className="border border-gray-300 dark:text-gray-300 rounded-md p-1.5 mr-2" name="phase" aria-label="Project status">
                                <option value="active">تمامی پروژه ها ({data.length})</option>
                                <option value="paused">تمام شده</option>
                                <option value="delayed">در حال انجام</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-7 gap-8 my-8">
                    {
                        data.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    }
                </div>
                <div className="flex items-center justify-between my-6">
                    <div className="flex items-center text-gray-500 font-vazir">
                        نمایش
                        <p className="text-gray-800 dark:text-gray-300 mx-1.5">6</p>
                        از
                        <p className="text-gray-800 dark:text-gray-300 mx-1.5">52</p>
                        پروژه
                    </div>
                    <div className="flex">
                        <ChevronRight className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer" />
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer">5</p>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer">4</p>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer">3</p>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer">2</p>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md bg-gray-800 dark:bg-slate-500 text-white cursor-pointer">1</p>
                        <ChevronLeft className="border-1 border-gray-400 w-7 h-7 mx-1 text-center rounded-md cursor-pointer text-gray-400" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}