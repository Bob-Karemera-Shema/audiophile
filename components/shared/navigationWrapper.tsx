import { NavbarContextProvider } from "@/utils/context/NavbarContext"
import Navbar from "./navbar"

const NavigationWrapper = () => {
    return (
        <NavbarContextProvider>
            <Navbar />
        </NavbarContextProvider>
    )
}

export default NavigationWrapper