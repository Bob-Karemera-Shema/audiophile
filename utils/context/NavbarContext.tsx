'use client';

import { createContext, FC, ReactNode, useMemo, useState } from "react";

interface INavbarContext {
    isOpen: boolean;
    toggleIsOpen: () => void;
}

interface INavbarProviderProps {
    children: ReactNode
}

export const NavbarContext = createContext<INavbarContext>({
    isOpen: false,
    toggleIsOpen: () => {}
});

export const NavbarContextProvider: FC<INavbarProviderProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const value = useMemo(() => ({
        isOpen,
        toggleIsOpen
    }), [isOpen]);

    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    )
}