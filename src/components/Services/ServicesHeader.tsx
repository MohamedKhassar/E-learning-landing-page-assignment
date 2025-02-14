"use client"
import { cn } from '@/utils/cn';
import { Search, Verified, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeRight, FadeUp } from '@/utils/animations';
import { ServicesType } from '@/types';
const ServicesHeader = () => {

    const data: ServicesType[] = [
        { text: "Find Course", icon: <Search className='xl:size-6 size-4' />, bgColor: "bg-violet-500", textColor: "text-violet-800", delay: .2 },
        { text: "Book Seat", icon: <PlusCircle className='xl:size-6 size-4' />, bgColor: "bg-pink-400", textColor: "text-pink-700", delay: .3 },
        { text: "Certificate", icon: <Verified className='xl:size-6 size-4' />, bgColor: "bg-cyan-400", textColor: "text-cyan-700", delay: .4 },
    ];
    return (
        <div className='space-y-16'>
            <motion.h1 variants={FadeUp(.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:text-5xl md:text-3xl text-2xl text-center font-semibold">Working Process And Benefits</motion.h1>
            <div className="lg:grid grid-cols-3 gap-y-16 hidden">
                {
                    data.map(({ bgColor, delay }, i) => (
                        <motion.div
                            variants={FadeUp(delay)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            key={i} className={cn("relative w-full h-3 rounded-xl flex items-center justify-center",
                                bgColor
                            )} >
                            <span className='bg-white px-0.5'>
                                <p className={cn('p-2.5 rounded-full',
                                    bgColor
                                )}></p>
                            </span>
                        </motion.div>
                    )
                    )
                }
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-14 gap-y-6">
                {
                    data.map((item, i) => (
                        <motion.div
                            variants={FadeRight(item.delay)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            key={i} className={cn('flex items-center p-4 gap-x-3 rounded-lg md:w-full w-80 place-self-center font-semibold !bg-opacity-15',
                                item.bgColor,

                            )}>
                            <div className={cn('lg:p-3 p-2 rounded-md !bg-opacity-20',
                                item.bgColor,
                                item.textColor
                            )} >
                                {item.icon}
                            </div>
                            <h1 className={cn("lg:text-xl", item.textColor)} >{item.text}</h1>
                        </motion.div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default ServicesHeader