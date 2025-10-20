import { EllipsisVerticalIcon, FacebookIcon, Github, Twitter } from "lucide-react"
import Image from "next/image"
import { use } from "react"

interface User {
    id: number,
    name: string,
    title: string,
    company: string,
    profileImage: string
}
interface Props {
    users: User
}


export default function UserCard({ users }: Props) {
    return (
        <>
            <div className="bg-white dark:bg-slate-950 relative flex flex-col justify-center items-center py-6 rounded-lg hover:shadow-lg">
                <div className="text-gray-500 dark:text-gray-300 absolute top-10 right-7">
                    <EllipsisVerticalIcon />
                </div>
                <Image className="rounded-full border-4 border-gray-200 mt-2" width={100} height={100} src={users.profileImage} alt={users.name} />
                <h1 className="mt-6 text-xl text-gray-800 dark:text-white">{users.name}</h1>
                <h2 className="flex mt-2 ltr text-gray-400 items-center justify-center">@{users.title} |<a href="#" className="text-red-500 text-sm mx-1">{users.company}</a></h2>
                <div className="flex mt-8 flex-row-reverse">
                    <a href="#" className="border border-sky-700 rounded-full p-1.5 mx-2">
                        <FacebookIcon className="text-sky-700" />
                    </a>
                    <a href="#" className="border border-sky-300 rounded-full p-1.5 mx-2">
                        <Twitter className="text-sky-300" />
                    </a>
                    <a href="#" className="border border-purple-900 rounded-full p-1.5 mx-2">
                        <Github className="text-purple-900" />
                    </a>
                </div>
            </div>
        </>
    )
}