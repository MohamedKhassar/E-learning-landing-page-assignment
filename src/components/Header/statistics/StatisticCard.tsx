import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FadeUp } from "@/utils/animations";
import { DataItem } from "@/types";
const StatisticCard = ({ item }: { item: DataItem }) => {
    return (
        <div className="flex-col flex justify-center items-center max-md:gap-y-4 !gap-y-2">
            <motion.span
                variants={FadeUp(1)}
                initial="initial"
                animate="animate">
                <CountUp end={item.value} className="text-white font-semibold xl:text-3xl lg:text-2xl md:text-xl text-lg tracking-wider" suffix="+" delay={1} />
            </motion.span>
            <motion.span
                variants={FadeUp(1.2)}
                initial="initial"
                animate="animate" className="text-slate-400 xl:text-xl lg:text-lg md:text-base text-sm tracking-wider">{item.name}</motion.span>
        </div>
    )
}

export default StatisticCard