import { cn } from '@/utils/cn'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

const Navbar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    const [links, setLinks] = useState([
        { name: "Home", href: "/#home", selected: true },
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
    }, [])
    return (
        <div ref={ref} className="relative md:justify-self-center">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="btn-primary !transition-all active:scale-90 !bg-opacity-90 w-fit place-self-end rounded-xl p-2 md:hidden"
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            <nav
                className={cn(
                    "flex items-center gap-6 duration-300 lg:text-base text-sm md:border-none max-md:absolute max-md:right-0 max-md:top-full max-md:z-50 max-md:mt-4 max-md:flex-col max-md:px-6 max-md:py-5",
                    isOpen
                        ? "max-md:rounded-xl max-md:border-2 max-md:border-blue-200 max-md:bg-white/90 max-md:backdrop-blur"
                        : "max-md:hidden"
                )}
            >
                {/* Navigation Links */}
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        onClick={() => selectLink(link.name)}
                        className={cn(
                            "transition-colors duration-300 font-medium",
                            link.selected
                                ? "text-blue-600 font-bold"
                                : "text-gray-600 hover:text-gray-800"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
                <button className="btn btn-primary !text-sm text-nowrap lg:!text-base">
                    Sign Up
                </button>
            </nav>
        </div>
    )
}

export default Navbar