import { CoursesType } from "@/types"
import { FadeOut } from "@/utils/animations"
import { cn } from "@/utils/cn"
import { motion } from "framer-motion"
import Image from "next/image"
const CourseCard = ({ course }: { course: CoursesType }) => {
    return (
        <motion.div
            variants={FadeOut(course.delay)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={course.title}
            className="shadow-xl shadow-black/10 overflow-hidden rounded-xl relative group cursor-pointer flex-1 hover:scale-105 transition-transform duration-300"
        >
            <Image className="object-cover" src={course.image} alt="" />
            <div className="bg-white/80 backdrop-blur-md absolute left-0 h-fit w-full lg:group-hover:bottom-0 transition-[bottom] duration-500 lg:-bottom-full bottom-0 p-4 space-y-5">
                <div className="flex items-center justify-between ">
                    <p className={cn("px-3 py-1.5 w-fit text-xs rounded-full font-medium",course.textColor,course.bgColor)}>{course.category}</p>
                    <p className=" font-semibold">${course.price}</p>
                </div>
                <p className="lg:text-lg md:text-base text-sm font-medium capitalize">{course.title}</p>
            </div>
        </motion.div>
    )
}

export default CourseCard