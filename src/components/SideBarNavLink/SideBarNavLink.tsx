import { FC } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { CustomSvg } from "../CustomSvg/CustomSvg";

type SideBarNavLinkProps = {
    to: string,
    svgPath: string,
    svgViewBox: string,
    xmlns: string,
    label: string,
};



export const SideBarNavLink: FC<SideBarNavLinkProps> = ({ to, svgPath, svgViewBox, xmlns, label }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <NavLink to={to} className="w-full px-6 cursor-default relative">
            <span className={`${match && 'bg-[#4880FF]'} absolute left-0 top-0 w-1 h-full rounded-r transition-colors duration-300`}/>
            
            <button className={`${match ? 'bg-[#4880FF]' : 'bg-none hover:bg-gray-400/40'} min-w-48 rounded-md flex w-full transition-colors duration-300 justify-center md:justify-normal items-center`}>
                <CustomSvg className="mx-4 w-[17px] h-[18px] transition-colors duration-300" color="text-customBlack" activeColor={match && 'text-white'} path={svgPath} viewBox={svgViewBox} xmlns={xmlns}/>
                <h3 className={`font-nunito transition-colors duration-300 font-semibold text-lg md:text-sm my-3 md:my-4 ${match ? 'text-white' : 'text-customBlack'}`}>{label}</h3>
            </button>
        </NavLink>
    );
};