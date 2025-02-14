"use client"
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/utils/animations";
import { cn } from "@/utils/cn";
import { reviews } from "@/utils/data";
const Reviews = () => {
    
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentReviewIndex((prevIndex) =>
                    (prevIndex + 1) % reviews.length
                );
                setFade(true);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, [reviews.length]);
    return (
        <div className="lg:mt-32 mt-16">
            <div className="py-20 bg-cover bg-[url(/images/reviewsBg.png)] bg-center bg-no-repeat space-y-9">
                <motion.h1 variants={FadeUp(.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-blue-800 uppercase text-center text-3xl">testimonial</motion.h1>
                <div className="space-y-5 text-center flex flex-col items-center">
                    <motion.h1 variants={FadeUp(.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="lg:text-5xl md:text-3xl text-2xl text-center font-semibold capitalize">what our student saying</motion.h1>
                    <motion.p variants={FadeUp(.3)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }} className="lg:max-w-[30rem] max-w-[25rem] text-stone-400 lg:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur cum quasi assumenda, vel adipisci nobis expedita! Suscipit, ipsa odit.</motion.p>
                </div>
                <motion.div variants={FadeUp(.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="reviews-container">
                    <div className={cn("transition-opacity duration-300",
                        fade ? 'opacity-100' : 'opacity-0')}>
                        {/* review card */}
                        <ReviewCard review={reviews[currentReviewIndex]} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Reviews