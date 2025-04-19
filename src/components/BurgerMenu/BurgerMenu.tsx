import { HTMLProps } from "react";
import { CustomSvg } from "..";
import { useSidebar } from "../../hooks";

export const BurgerMenu = ({ className }: HTMLProps<HTMLOrSVGElement>) => {
    const { toggleSidebar } = useSidebar();

    return(
        <CustomSvg onClick={toggleSidebar} className={` ${className} cursor-pointer`} color="text-[#202224]" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg" path="M3.75 6.5625H20.25V7.9375H3.75V6.5625ZM3.75 12.0625H20.25V13.4375H3.75V12.0625ZM3.75 17.5625H20.25V18.9375H3.75V17.5625Z"/>
    );
};