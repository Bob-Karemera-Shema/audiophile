'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import navLinks from "@/utils/navData";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Categories from "./categories";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        // Clean up in case the component unmounts
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <>
            <nav className="max-w-5xl my-0 lg:mx-auto">
                <div className="relative z-10 px-6 lg:px-0 py-8 text-white border-b-1 border-hover-gray flex justify-between items-center sm:gap-8 lg:gap-0">
                    <button className="w-8 h-8 cursor-pointer lg:hidden" onClick={toggle}>
                        {
                            isOpen ? (<IoClose className="w-full h-full" />) : <IoMdMenu className="w-full h-full" />
                        }
                    </button>
                    <Link href="/" aria-label="Home Page" className="sm:flex-2 lg:flex-none">
                        <Image src="/images/main/image.svg" alt="Audiophile logo" width={144} height={25} />
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
                </div>
                {/* sidebar */}
                <div
                    className={clsx(
                        "absolute bg-sidebar-overlay w-full lg:hidden",
                        {
                            "opacity-100 top-[97px] z-20 transition-all ease-in duration-300": isOpen,
                            "opacity-0 top-0 z-0 pointer-events-none": !isOpen
                        }
                    )}
                >
                    <div className="w-full bg-white px-4 rounded-b-md max-h-[calc(100vh-97px)] overflow-y-auto">
                        <Categories variant="sidebar" />
                    </div>
                </div>
            </nav>

        </>
    )
};

export default Navbar;