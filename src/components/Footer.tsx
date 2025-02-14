import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "/public/images/logo.svg"
import { cn } from '@/utils/cn'
import {  SocialsType } from "@/types"
import { navigationData } from "@/utils/data"

const Footer = () => {
    const socials:SocialsType[] = [
        {
            link: "/",
            icon: <Facebook className="max-md:size-3 size-4" />
        },
        {
            link: "/",
            icon: <Instagram className="max-md:size-3 size-4" />
        },
        {
            link: "/",
            icon: <Twitter className="max-md:size-3 size-4" />
        },
        {
            link: "/",
            icon: <Linkedin className="max-md:size-3 size-4" />
        },
        {
            link: "/",
            icon: <Youtube className="max-md:size-3 size-4" />
        }
    ]

    return (
        <div className="p-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-10 bg-blue-200">
            <div className="space-y-5">
                <Link href="/#" className="flex items-center gap-2 w-fit">
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
                <p className="max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsa!</p>
                <div className="flex gap-x-6">
                    {socials.map((social, index) => (
                        <Link key={index} href={social.link} className="!rounded-full !w-fit !p-2.5 btn btn-primary">
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
            {navigationData.map((navigation, i) =>
                <div key={i}>

                    <h1 className="text-3xl font-semibold text-blue-700">{navigation.title}</h1>
                    <ul>
                        {navigation.links.map((link, index) => (
                            <li key={index} className="mt-2">
                                <Link href={"/"} className="text-sm text-stone-500 duration-300 hover:text-stone-800">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Footer