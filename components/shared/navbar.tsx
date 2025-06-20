'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { NavbarContext } from "@/utils/context/NavbarContext";

const navLinks = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Headphones',
        path: '/headphones'
    },
    {
        label: 'Speakers',
        path: '/speakers'
    },
    {
        label: 'Earphones',
        path: '/earphones'
    }
];

const Navbar = () => {
    const pathname = usePathname();
    const { isOpen, toggleIsOpen } = useContext(NavbarContext);

    return (
        <nav className="max-w-5xl my-0 mx-6 lg:mx-auto py-8 text-white border-b-1 border-hover-gray flex justify-between items-center sm:gap-8 lg:gap-0">
            <button className="w-8 h-8 cursor-pointer lg:hidden" onClick={toggleIsOpen}>
                {
                    isOpen ? (<IoClose className="w-full h-full" />) : <IoMdMenu className="w-full h-full" />
                }
            </button>
            <Link href="/" aria-label="Home Page" className="sm:flex-2 lg:flex-none">
                <Image src="/images/image.svg" alt="Audiophile logo" width={144} height={25} />
            </Link>
            <ul className="hidden lg:flex gap-8">
                {
                    navLinks.map(link => (
                        <li key={link.label}>
                            <Link
                                href={link.path}
                                aria-label={`${link.label} Page`}
                                className={clsx(
                                    "font-bold text-sm uppercase tracking-widest hover:text-dark-orange transition-all duration-100 ease-in",
                                    {
                                        "text-dark-orange": pathname === link.path
                                    }
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <button
                type="button"
                className="cursor-pointer"
            >
                <IoCartOutline className="w-6 h-6" />
            </button>
        </nav>
    )
};

export default Navbar;