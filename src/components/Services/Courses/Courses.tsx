"use client"
import { CoursesType } from "@/types";
import designer from "/public/images/designer.jpg"
import developer from "/public/images/developer.jpg"
import marketing from "/public/images/marketing.jpg"
import { FadeRight } from "@/utils/animations";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
const Courses = () => {
    const courses: CoursesType[] = [
        {
            title: "UI/IX Complete Course: From Ziro to Hero",
            price: 450,
            category: "UX/UI Course",
            textColor: "text-violet-900", // Tailwind text color class
            bgColor: "bg-violet-100", // Tailwind background color class
            image: designer,
            delay: .2
        },
        {
            title: "Master web development from scratch",
            price: 500,
            category: "Web Developing",
            textColor: "text-yellow-900",
            bgColor: "bg-yellow-100",
            image: developer,
            delay: .3
        },
        {
            title: "Marketing Complete Course",
            price: 500,
            category: "Marketing",
            textColor: "text-sky-900",
            bgColor: "bg-sky-100",
            image: marketing,
            delay: .4
        },
    ];
    return (
        <div className="lg:mt-32 mt-16 space-y-10 mx-5">
            <motion.h1
                variants={FadeRight(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:text-5xl md:text-3xl text-2xl capitalize font-semibold">our popular courses</motion.h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    courses.map((course,i) => (
                        <CourseCard course={course} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Courses