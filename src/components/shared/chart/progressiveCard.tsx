import { EllipsisVerticalIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

interface Props {
    Title: string
    Percent: number
    ProgreddivePercent?: number
    Value: string
    bg: string
    className: string
    style: string
    up: boolean
}

export default function ProgressiveCard(props: Props) {


    return (
        <>
            <div className="bg-white dark:bg-slate-950 flex-1 rounded-lg max-w-3xl hover:shadow-lg transition-all duration-300">
                <div className="p-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-gray-700 dark:text-gray-200 font-vazir text-base md:text-lg font-semibold">
                            {props.Title}
                        </h2>
                        <EllipsisVerticalIcon className="text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition cursor-pointer" />
                    </div>

                    {/* Content */}
                    <div className="flex justify-between items-center">
                        <div className={`${props.bg} rounded-xl text-white px-2 flex`}>
                            {props.up
                                ? <TrendingUpIcon className="mx-1" />
                                : <TrendingDownIcon />
                            }
                            {props.Percent}%
                        </div>
                        <div className="flex flex-col items-end dark:text-gray-200 text-gray-700">
                            <p className="text-2xl md:text-3xl font-semibold">{props.Value}</p>
                            <p className="text-sm md:text-base text-gray-400 mt-1 font-vazir">
                                از ماه گذشته
                            </p>
                        </div>
                    </div>
                    <div className={`rounded-full mt-5 ${props.className}`}>
                        <div style={{ width: `${props.ProgreddivePercent ? props.ProgreddivePercent : props.Percent}%` }} className={`rounded-r-full border-2 ${props.style}`}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}