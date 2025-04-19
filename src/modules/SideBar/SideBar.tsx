import { CloseBurgerMenu, SideBarNavLink } from "../../components";
import { BOTTOM_NAV_LINK, MIDDLE_NAV_LINK, TOP_NAV_LINK } from "../../constant";
import { useSidebar } from "../../hooks";

export const SideBar = () => {
    const { isSidebarOpen } = useSidebar();

    return(
        <aside className={`${isSidebarOpen ? 'w-full md:w-[15rem]' : 'w-0 overflow-x-hidden'} transition-all duration-300 h-full bg-white top-0 left-0 absolute md:static flex flex-col overflow-y-auto`}>
            <section className="flex md:justify-center justify-between mx-10 md:mx-0 items-center mt-6 mb-[1.875rem]">
                <p className="font-extrabold text-xl font-nunito text-black"><span className="text-blue-500">Dash</span>Stack</p>
                <CloseBurgerMenu className="w-[35px] h-[35px] ml-10 md:hidden" />
            </section>

            {TOP_NAV_LINK.map(({ to, label, svg }) => <SideBarNavLink key={to} to={to} label={label} svgPath={svg.path} svgViewBox={svg.viewBox} xmlns={svg.xmlns}/>)}
            
            <span className="w-full h-[1px] bg-[#E0E0E0]/50 mt-4"/>
            <h3 className="font-nunito font-bold text-xs text-[#202224]/50 ml-10 my-4">PAGES</h3>

            {MIDDLE_NAV_LINK.map(({ to, label, svg }) => <SideBarNavLink key={to} to={to} label={label} svgPath={svg.path} svgViewBox={svg.viewBox} xmlns={svg.xmlns}/>)}

            <span className="w-full h-[1px] bg-[#E0E0E0]/50 my-4"/>

            {BOTTOM_NAV_LINK.map(({ to, label, svg }) => <SideBarNavLink key={to} to={to} label={label} svgPath={svg.path} svgViewBox={svg.viewBox} xmlns={svg.xmlns}/>)}
        </aside>
    );
};
