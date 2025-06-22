'use client';

import Hero from "../shared/hero"
import Navbar from "../shared/navbar";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    // Split the path into segments & removes empty strings
    const pathSegments = pathname.split('/').filter(Boolean);

    const isProductPage = pathSegments.length === 2;
    const isCheckout = pathname.startsWith('/checkout');
    const isHome = pathname === '/';

    console.log(!isProductPage && !isCheckout);

    return (
        <header
            className={`relative ${(isHome || isProductPage || isCheckout) ? 'h-full' : 'h-[25vh] sm:h-[35vh] lg:h-[45vh]'} ${isHome ? 'bg-[url(/images/main/image-hero-small.jpeg)]' : 'bg-black'}
                        ${isHome ? 'lg:bg-[url(/images/main/image-hero.jpeg)]' : 'bg-black'} bg-center ${isHome && 'bg-hero-overlay'}`}
        >
            <Navbar />
            {(!isProductPage && !isCheckout) && <Hero />}
        </header>
    )
}

export default Header;