
import feedbacks from "../../public/data/feedback/feedback.json"
import FeedBackCard from "./shared/feedbackCard"

export default function FeedBack() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-8 mx-10 my-8">
                {
                    feedbacks.map((feedback) => (
                        <FeedBackCard key={feedback.id} feedback={feedback} />
                    ))
                }
            </div>
        </>
    )
}