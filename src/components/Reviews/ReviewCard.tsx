"use client"
import { ReviewType } from "@/types"
import { Rating } from "@smastrom/react-rating"
import "@smastrom/react-rating/style.css"

const ReviewCard = ({ review }: { review: ReviewType }) => {
    return (
        <div className="border w-fit p-5 rounded-xl justify-self-center text-center space-y-4 bg-white shadow-2xl max-sm:mx-3">
            <p className="text-stone-400">{review.content}</p>
            <h1 className="text-xl font-semibold">{review.name}</h1>
            <Rating
                className="place-self-center"
                value={review.rating}
                readOnly
                style={{ maxWidth: 100 }}
            />
        </div>
    )
}

export default ReviewCard