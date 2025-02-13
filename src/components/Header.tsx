"use client"
import Image from "next/image"
import logo from "/public/images/logo.svg"
import Link from "next/link"
import { cn } from "@/utils/cn"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [links, setLinks] = useState([
        { name: "Home", href: "/#", selected: true },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "#contact" },
    ])
    const ref = useRef<HTMLDivElement>(null)
    const selectLink = (name: string) => {
        setLinks(links.map(link => ({ ...link, selected: link.name === name })))
    }
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })
    return (
        <div className="container sticky top-5">
            <div className="flex md:items-center items-start justify-between md:bg-white/30 md:backdrop-blur-lg px-7 md:rounded-full mt-5 md:border">
                {/* Logo Section */}
                <Link href={"/"} className="flex items-center gap-2">
                    <Image className={cn("lg:w-8 md:w-6 w-8")} loading="lazy" src={logo} alt="logo" />
                    <h1 className="lg:text-3xl text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">E-learning</h1>
                </Link>
                {/* Navigation Section */}
                <div ref={ref} className="relative grid">
                    <button onClick={() => setIsOpen(prev => !prev)} className="w-fit place-self-end btn-primary rounded-xl p-2 md:hidden active:scale-90 !transition-all !bg-opacity-90">
                        {
                            isOpen ? <X /> : <Menu />
                        }

                    </button>
                    <nav className={cn("flex max-md:flex-col gap-6 static items-center mt-1 right-0  py-3 px-6 duration-300 transition-[visibility_opacity_filter_transform] backdrop-blur-md md:opacity-100 md:scale-100 md:visible md:blur-none md:border-none lg:text-base text-sm",
                        isOpen ? "border-2 border-blue-200 rounded-xl visible bg-white/30" : "invisible opacity-0 blur-md scale-95"
                    )}>
                        {links.map((link, index) => (
                            <Link onClick={() => selectLink(link.name)} key={index} href={link.href} className={cn("transition-colors duration-300",
                                link.selected ? "text-blue-600 font-bold" : "text-gray-600 hover:text-gray-800 font-medium"
                            )}>
                                {link.name}
                            </Link>
                        ))}
                        <button className="btn btn-primary text-nowrap  lg:!text-base !text-sm">
                            Sign Up
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header