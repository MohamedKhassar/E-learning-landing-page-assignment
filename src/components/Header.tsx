"use client"
import Image from "next/image"
import logo from "/public/images/logo.svg"
import Link from "next/link"
import { cn } from "@/utils/cn"
import { useState } from "react"
const Header = () => {
    const [links, setLinks] = useState([
        { name: "Home", href: "/#", selected: true },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "#contact" },
    ])

    const selectLink=(name:string)=>{
        setLinks(links.map(link=>({...link, selected: link.name===name })))
    }
    return (
        <div className="flex justify-between bg-gradient-to-b from-white/30 backdrop-blur-lg px-7 py-3 rounded-full">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <Image src={logo} alt="logo" />
                <h1 className="text-3xl font-bold text-blue-600">E-learning</h1>
            </div>
            {/* Navigation Section */}
            <nav className="flex gap-6 items-center">
                {links.map((link, index) => (
                    <Link onClick={()=>selectLink(link.name)} key={index} href={link.href} className={cn("transition-colors duration-300",
                        link.selected ? "text-blue-600 font-bold" : "text-gray-600 hover:text-gray-800 font-medium"
                    )}>
                        {link.name}
                    </Link>
                ))}
                <button className="btn btn-primary">
                    Sign Up
                </button>
            </nav>
        </div>
    )
}

export default Header