"use client"
import Image from "next/image"
import logo from "/public/images/logo.svg"
import Link from "next/link"
import { cn } from "@/utils/cn"
import Navbar from "./Navbar"
import { useState } from "react"
import { motion } from "framer-motion"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed container right-0 left-0 top-2 z-40 flex justify-center">
            <div className="flex w-full items-center justify-between rounded-full border  bg-gradient-white px-7 py-3  mx-4 backdrop-blur-md">
                {/* Logo Section */}
                <Link href="/#" className="flex items-center gap-2">
                    <Image
                        className={cn("w-8 md:w-6 lg:w-8")}
                        loading="lazy"
                        src={logo}
                        alt="logo"
                    />
                    <h1 className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-xl font-bold text-transparent lg:text-3xl">
                        E-learning
                    </h1>
                </Link>

                {/* Navigation Section */}
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            </div>
        </motion.header>
    )
}

export default Header