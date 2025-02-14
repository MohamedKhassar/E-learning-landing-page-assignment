"use client"
import { FadeRight } from "@/utils/animations";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { courses } from "@/utils/data";
const Courses = () => {

    return (
        <div className="lg:mt-32 mt-16 space-y-10 mx-5">
            <motion.h1
                variants={FadeRight(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:text-5xl md:text-3xl text-2xl capitalize font-semibold">our popular courses</motion.h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {/* Course Card */}
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