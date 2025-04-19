import { PropsWithChildren, createContext, useState } from "react";
import { SidebarContextType } from "./SidebarContextType";


export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};