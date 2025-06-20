import { NavbarContextProvider } from "@/utils/context/NavbarContext";
import Hero from "../shared/hero"
import Navbar from "../shared/navbar";

const Header = () => {
    return (
        <header className="h-full bg-[url(/images/image-hero-small.jpeg)] lg:bg-[url(/images/image-hero.jpeg)] bg-center bg-overlay">
            <NavbarContextProvider>
                <Navbar />
            </NavbarContextProvider>
            <Hero />
        </header>
    )
}

export default Header;