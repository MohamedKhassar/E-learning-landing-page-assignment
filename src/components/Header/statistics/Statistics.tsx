import { DataItem } from "@/types";
import { motion } from "framer-motion";
import { FadeUp } from "@/utils/animations";
import StatisticCard from "./StatisticCard";

const Statistics = () => {
    const statisticsData: DataItem[] = [
        { name: "Total Courses", value: 250 },
        { name: "Total Instructor", value: 300 },
        { name: "Total Students", value: 35000 },
        { name: "Total Seat", value: 42000 }
    ];
    return (
        <motion.div
            variants={FadeUp(0.9)}
            initial="initial"
            animate="animate"
            className="bg-[url(/images/network.jpg)]  overflow-hidden my-4 bg-cover bg-center bg-no-repeat">
            <div className="bg-sky-950/90 h-full flex max-md:flex-col flex-wrap justify-around items-center py-10 max-md:gap-y-10">
                {
                    statisticsData.map((item, index) => (
                        <StatisticCard item={item} key={index} />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Statistics