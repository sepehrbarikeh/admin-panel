"use client"
import { Tooltip } from "@mui/material"
import Image from "next/image"

interface Project {
    id: number
    title: string
    status: string
    category: string
    description: string
    questions: number
    comments: number
    team: { name: string; profileImage: string }[]
    progress: number
}

interface Props {
    project: Project
}

const statusColor = (status: string) => {
    switch (status) {
        case "Completed":
            return "green"
        case "Pending":
            return "amber"
        case "In Progress":
            return "blue"
        case "Delayed":
            return "rose"
        case "In Review":
            return "sky"
        case "On Hold":
            return "violet"
        default:
            return "gray"
    }
}

const colorClasses = {
    green: {
        text: "text-green-500",
        bg: "bg-green-200",
        border: "border-green-500",
    },
    amber: {
        text: "text-amber-500",
        bg: "bg-amber-200",
        border: "border-amber-500",
    },
    blue: {
        text: "text-blue-500",
        bg: "bg-blue-200",
        border: "border-blue-500",
    },
    rose: {
        text: "text-rose-500",
        bg: "bg-rose-200",
        border: "border-rose-500",
    },
    sky: {
        text: "text-sky-500",
        bg: "bg-sky-200",
        border: "border-sky-500",
    },
    violet: {
        text: "text-violet-500",
        bg: "bg-violet-200",
        border: "border-violet-500",
    },
    gray: {
        text: "text-gray-500",
        bg: "bg-gray-200",
        border: "border-gray-500",
    },
}

export default function ProjectCard({ project }: Props) {
    const color = statusColor(project.status)
    const colorClass = colorClasses[color]


    return (
        <div className="bg-white dark:bg-slate-950 ltr p-6 rounded-lg shadow-sm border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-gray-800 dark:text-white text-lg font-bold">{project.title}</h1>
                <div
                    className={`rounded-md text-[10px] font-bold px-2 py-1 ${colorClass.text} ${colorClass.bg}`}
                >
                    {project.status}
                </div>
            </div>

            {/* Category */}
            <p className={`text-xs mt-2 ${colorClass.text}`}>{project.category}</p>

            {/* Description */}
            <p className="text-gray-500 h-24 my-5 text-sm leading-relaxed">
                {project.description}{" "}
                <a href="#" className="text-gray-800 dark:text-gray-300 hover:underline">
                    View more
                </a>
            </p>

            {/* Questions & Comments */}
            <div className="flex">
                <div>
                    <p className="text-gray-800 dark:text-gray-300">{project.questions}</p>
                    <p className="text-gray-400">Questions</p>
                </div>
                <div className="ml-8">
                    <p className="text-gray-800 dark:text-gray-300">{project.comments}</p>
                    <p className="text-gray-400">Comments</p>
                </div>
            </div>

            {/* Team Section */}
            <div className="flex my-6 items-center">
                <p className="text-gray-800 dark:text-gray-300 mr-5 font-semibold">Team :</p>
                <div className="flex items-center">
                    {project.team.map((user, index) => (
                        <div
                            key={user.name}
                            className={`relative ${index !== 0 ? "-ml-3" : ""} z-[${project.team.length - index
                                }]`}
                        >
                            <Tooltip title={user.name} placement="top" arrow>
                                <Image
                                    className="rounded-full border-2 border-white hover:scale-110 transition-transform duration-200"
                                    width={35}
                                    height={35}
                                    src={user.profileImage}
                                    alt={user.name}
                                />
                            </Tooltip>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-800 dark:text-gray-300">Progress</p>
                    <p className={`${colorClass.text}`}>{project.progress}%</p>
                </div>
                <div className={`rounded-full mt-5 ${colorClass.bg}`}>
                        <div style={{ width: `${project.progress}%` }} className={`rounded-r-full border-2 ${colorClass.border}`}>
                        </div>
                    </div>
            </div>
        </div>
    )
}
