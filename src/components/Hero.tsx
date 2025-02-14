"use client"
import { ArrowRight } from "lucide-react";
import hero from "/public/images/hero.png";
import { FadeUp } from "@/utils/animations";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div 
        className="lg:pt-44 pt-32"
        id="home">
            <section
                className="container grid lg:grid-cols-2 items-center lg:gap-x-96">
                <div className="lg:space-y-8 space-y-5 grid place-items-start max-lg:place-items-center">
                    <motion.p
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate" className="lg:text-start text-center xl:text-6xl lg:text-4xl text-4xl xl:max-w-[35rem] lg:max-w-[50rem] max-w-[30rem] lg:!leading-tight !leading-normal">A good <b className="text-blue-600">education</b> is a foundation for better future</motion.p>
                    <motion.p
                    variants={FadeUp(0.7)}
                    initial="initial"
                    animate="animate" className="lg:text-start text-center tracking-wide md:text-lg text-sm xl:max-w-[25rem] lg:max-w-[40rem] max-w-[20rem] text-stone-600">A community with high expectation and high academic achievement</motion.p>
                    <motion.button
                    variants={FadeUp(0.8)}
                    initial="initial"
                    animate="animate" className="btn btn-primary group !flex gap-x-1 items-center md:!text-lg">get started <ArrowRight className="size-4 group-hover:-rotate-45 group-hover:translate-x-2 transition-transform" /></motion.button>
                </div>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{opacity: 1 }}
                transition={{ duration:0.6, delay: 0.4, ease: "easeInOut" }} className="items-start justify-center w-fit hidden lg:flex bg-gradient-to-t from-blue-600 via-blue-400 to-blue-300 rounded-full overflow-hidden place-self-end">
                    <motion.img
                    initial={{ translateX: 50, opacity: 0,scaleX:-1 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{ duration:0.6, delay: 0.4, ease: "easeInOut" }}
                        src={hero.src} className="w-[500px]" alt="hero" loading="lazy" />
                </motion.div>
            </section>
        </div>
    );
};

export default Hero;