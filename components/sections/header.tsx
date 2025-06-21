'use client';

import { NavbarContextProvider } from "@/utils/context/NavbarContext";
import Hero from "../shared/hero"
import Navbar from "../shared/navbar";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header
            className={`relative ${pathname === '/' ? 'h-full' : 'h-[25vh] sm:h-[35vh] lg:h-[45vh]'} ${pathname === '/' ? 'bg-[url(/images/image-hero-small.jpeg)]' : 'bg-black'}
                        ${pathname === '/' ? 'lg:bg-[url(/images/image-hero.jpeg)]' : 'bg-black'} bg-center ${pathname === '/' && 'bg-hero-overlay'}`}
        >
            <NavbarContextProvider>
                <Navbar />
            </NavbarContextProvider>
            <Hero />
        </header>
    )
}

export default Header;