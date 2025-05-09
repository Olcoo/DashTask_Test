import { useContext } from "react";
import { SidebarContextType } from "../context/SidebarContext/SidebarContextType";
import { SidebarContext } from "../context/SidebarContext/SidebarContext";

export const useSidebar = ():SidebarContextType => {
    const context = useContext(SidebarContext);

    if(!context) throw new Error('useSidebar must be used within a SidebarProvider');

    return context;
};