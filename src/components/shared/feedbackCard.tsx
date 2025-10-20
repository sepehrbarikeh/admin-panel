import { ArrowLeft } from "lucide-react"
import Image from "next/image"

interface FeedBack {
    id: number,
    name: string,
    role: string,
    feedbacks: string,
    image: string
}

interface Props {
    feedback: FeedBack
}



export default function FeedBackCard({ feedback }: Props) {
    return (
        <>
            <div className="bg-white dark:bg-slate-950 flex-1 rounded-lg max-w-3xl hover:shadow-lg">
                <div className="flex items-center p-6">
                    <Image className="rounded-full border-4 w-20 h-20 ml-2 border-gray-200" width={70} height={70} src={feedback.image} alt={feedback.name} />
                    <div className="mx-8">
                        <h2 className="text-gray-800 dark:text-white">{feedback.name}</h2>
                        <p className="text-gray-400 dark:text-gray-600 mt-1">{feedback.role}</p>
                        <p className="flex items-center mt-4 dark:text-gray-200 text-gray-800">
                            {feedback.feedbacks}
                            <ArrowLeft className="w-4 h-4 mx-1" />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}