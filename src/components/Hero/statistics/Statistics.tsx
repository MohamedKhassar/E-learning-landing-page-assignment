import { motion } from "framer-motion";
import { FadeUp } from "@/utils/animations";
import StatisticCard from "./StatisticCard";
import { statisticsData } from "@/utils/data";

const Statistics = () => {
    
    return (
        <motion.div
            variants={FadeUp(0.9)}
            initial="initial"
            animate="animate"
            className="bg-[url(/images/network.jpg)]  overflow-hidden my-4 bg-cover bg-center bg-no-repeat">
            {/* Cards */}
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